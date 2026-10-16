import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session10() {
  return (
    <Layout
      title="Session 10 — Onion Architecture in ASP.NET Core – II"
      description="Implementing Infrastructure layer, Dependency Injection, Presentation layer, and completing the Onion Architecture"
    >
      <CustomLayout>
        <article className="session-content">
          <style>{`
            article code:not(pre code) {
              background-color: #f4f4f4;
              color: #d10057;
              padding: 2px 6px;
              border-radius: 4px;
              font-family: Consolas, Monaco, monospace;
              font-size: 0.9em;
            }
          `}</style>

          <h1>Session 10 — Onion Architecture in ASP.NET Core – II</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Implement the Infrastructure and Presentation layers, register dependencies, and complete a working Onion Architecture example.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 10</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Implement the Infrastructure layer (DbContext + Repository)</li>
            <li>Register services using Dependency Injection</li>
            <li>Connect the Presentation layer (Controllers) to the Application layer</li>
            <li>Complete a full vertical slice using Onion Architecture</li>
            <li>Understand how all layers work together at runtime</li>
          </ul>

          <hr />

          <h2>1. Session Overview</h2>
          <p>
            In Session 09 we created the Domain and Application layers.
            In this session we will implement the remaining layers (Infrastructure and Presentation)
            and wire everything together using Dependency Injection so that the application actually runs.
          </p>

          <hr />

          <h2>2. Infrastructure Layer</h2>
          <p>
            The Infrastructure layer contains the actual implementations of the interfaces
            defined in the Domain layer (for example, EF Core repositories, email services, etc.).
          </p>

          <h3>2.1 ApplicationDbContext</h3>

          <CodeBlock
            language="csharp"
            code={`using Microsoft.EntityFrameworkCore;
using StudentManagement.Domain.Entities;

namespace StudentManagement.Infrastructure.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>2.2 StudentRepository Implementation</h3>

          <CodeBlock
            language="csharp"
            code={`using Microsoft.EntityFrameworkCore;
using StudentManagement.Domain.Entities;
using StudentManagement.Domain.Interfaces;
using StudentManagement.Infrastructure.Data;

namespace StudentManagement.Infrastructure.Repositories
{
    public class StudentRepository : IStudentRepository
    {
        private readonly ApplicationDbContext _context;

        public StudentRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Student> GetByIdAsync(int id)
        {
            return await _context.Students.FindAsync(id);
        }

        public async Task<IEnumerable<Student>> GetAllAsync()
        {
            return await _context.Students.ToListAsync();
        }

        public async Task AddAsync(Student student)
        {
            await _context.Students.AddAsync(student);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Student student)
        {
            _context.Students.Update(student);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var student = await _context.Students.FindAsync(id);
            if (student != null)
            {
                _context.Students.Remove(student);
                await _context.SaveChangesAsync();
            }
        }
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>3. Registering Services (Dependency Injection)</h2>
          <p>
            In the Presentation project (<code>Program.cs</code>) we register all the services
            so that ASP.NET Core can inject them automatically.
          </p>

          <CodeBlock
            language="csharp"
            code={`using Microsoft.EntityFrameworkCore;
using StudentManagement.Application.Services;
using StudentManagement.Domain.Interfaces;
using StudentManagement.Infrastructure.Data;
using StudentManagement.Infrastructure.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllersWithViews();

// Database
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Repositories
builder.Services.AddScoped<IStudentRepository, StudentRepository>();

// Application Services
builder.Services.AddScoped<StudentService>();

var app = builder.Build();

// Configure the HTTP request pipeline
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>4. Presentation Layer (Controller)</h2>
          <p>
            Controllers should be thin. They only receive the request, call the Application service,
            and return a view or response.
          </p>

          <CodeBlock
            language="csharp"
            code={`using Microsoft.AspNetCore.Mvc;
using StudentManagement.Application.Services;
using StudentManagement.Domain.Entities;

namespace StudentManagement.Web.Controllers
{
    public class StudentController : Controller
    {
        private readonly StudentService _studentService;

        public StudentController(StudentService studentService)
        {
            _studentService = studentService;
        }

        public async Task<IActionResult> Index()
        {
            var students = await _studentService.GetAllStudentsAsync();
            return View(students);
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Student student)
        {
            if (ModelState.IsValid)
            {
                await _studentService.CreateStudentAsync(student);
                return RedirectToAction(nameof(Index));
            }
            return View(student);
        }
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>5. How the Request Flows (End-to-End)</h2>
          <ol>
            <li>User requests <code>/Student/Index</code></li>
            <li>Routing directs the request to <code>StudentController.Index</code></li>
            <li>Controller calls <code>StudentService.GetAllStudentsAsync()</code></li>
            <li>StudentService calls <code>IStudentRepository.GetAllAsync()</code></li>
            <li>The actual <code>StudentRepository</code> (Infrastructure) executes the EF Core query</li>
            <li>Data is returned back through the layers to the View</li>
          </ol>

          <p>
            Notice that the Controller never talks directly to the database.
            This is the power of Onion Architecture.
          </p>

          <hr />

          <h2>6. Project References (Important)</h2>
          <p>Make sure the project references are set correctly:</p>

          <ul>
            <li><strong>Web</strong> → references Application + Infrastructure</li>
            <li><strong>Application</strong> → references Domain</li>
            <li><strong>Infrastructure</strong> → references Domain + Application (sometimes)</li>
            <li><strong>Domain</strong> → references nothing</li>
          </ul>

          <hr />

          <h2>7. Connection String</h2>

          <CodeBlock
            language="csharp"
            code={`{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\\\mssqllocaldb;Database=StudentManagementDb;Trusted_Connection=True;MultipleActiveResultSets=true"
  }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>8. Benefits You Have Achieved</h2>
          <ul>
            <li>Domain logic is completely independent of EF Core and ASP.NET Core</li>
            <li>You can unit test Application and Domain layers easily</li>
            <li>You can replace SQL Server with another database by changing only the Infrastructure layer</li>
            <li>Controllers remain clean and focused on HTTP concerns</li>
          </ul>

          <hr />

          <h2>Summary</h2>
          <ul>
            <li>Infrastructure layer implements the interfaces defined in the Domain.</li>
            <li>We use Dependency Injection to connect all layers at runtime.</li>
            <li>Controllers depend on Application Services, not on repositories directly.</li>
            <li>The request flows from Presentation → Application → Domain ← Infrastructure.</li>
            <li>This structure makes the application maintainable, testable, and flexible.</li>
          </ul>

          <hr />

          <h2>Test Your Knowledge</h2>
          <ol>
            <li>Which layer contains the DbContext and Repository implementation?</li>
            <li>Why do we register services in <code>Program.cs</code>?</li>
            <li>What is the correct order of dependencies between the four layers?</li>
            <li>Should a Controller talk directly to <code>ApplicationDbContext</code>? Why or why not?</li>
            <li>What is the benefit of placing the Repository Interface in the Domain layer?</li>
            <li>How does the StudentService get an instance of IStudentRepository?</li>
            <li>What happens if you forget to register <code>StudentRepository</code> in DI?</li>
            <li>Explain the complete request flow when a user opens the Student List page.</li>
          </ol>

          <p><em>(Answers can be discussed in class or provided by the instructor.)</em></p>

          <hr />

          <h2>Try It Yourself</h2>

          <h3>Exercise 1 – Complete the Infrastructure</h3>
          <ol>
            <li>Implement the <code>ApplicationDbContext</code> and <code>StudentRepository</code>.</li>
            <li>Register them in <code>Program.cs</code>.</li>
            <li>Run a migration and update the database.</li>
          </ol>

          <h3>Exercise 2 – Build the UI</h3>
          <p>
            Create the <code>StudentController</code> with Index and Create actions.
            Create the corresponding views and test adding and listing students.
          </p>

          <h3>Exercise 3 – Add Update & Delete</h3>
          <p>
            Extend the solution so that you can also Edit and Delete students,
            following the same Onion Architecture principles.
          </p>

          <p>
            <strong>Congratulations!</strong> You have completed the core 10 sessions of the
            ASP.NET Core and MVC guide based on the official curriculum.
          </p>

          <p>
            Future sessions (11–15) and the eProject Guide will be added when the remaining
            book material becomes available.
          </p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
