import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session03() {
  const codeBlockStyle = {
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    padding: '12px 16px',
    borderRadius: '6px',
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: '0.9rem',
    overflowX: 'auto',
    lineHeight: '1.5',
    margin: '12px 0 24px 0'
  };

  return (
    <Layout
      title="Session 03 — Working with ADO.NET and Entity Framework"
      description="ADO.NET fundamentals, Entity Framework Core, Code-First approach, DbContext and migrations"
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

          <h1>Session 03 — Working with ADO.NET and Entity Framework</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Understand data access with ADO.NET and modern data access using Entity Framework Core (Code-First approach).</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 3</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Explain what ADO.NET is and its main components</li>
            <li>Describe the difference between connected and disconnected architecture</li>
            <li>Understand Entity Framework Core and its advantages</li>
            <li>Create a model class and DbContext using the Code-First approach</li>
            <li>Perform basic CRUD operations with Entity Framework Core</li>
            <li>Use migrations to create and update the database</li>
          </ul>

          <hr />

          <h2>1. Session Overview</h2>
          <p>
            This session covers the fundamentals of data access in .NET applications.
            You will first learn the classic ADO.NET approach and then move to the modern
            and recommended way of working with databases — <strong>Entity Framework Core</strong>
            using the Code-First approach.
          </p>

          <hr />

          <h2>2. Introduction to ADO.NET</h2>
          <p>
            ADO.NET (ActiveX Data Objects .NET) is a set of classes in the .NET Framework
            that allows developers to interact with data sources such as SQL Server, Oracle,
            MySQL, XML files, etc.
          </p>

          <h3>2.1 Main Components of ADO.NET</h3>
          <ul>
            <li><strong>Connection</strong> – establishes a connection to the database</li>
            <li><strong>Command</strong> – executes SQL statements or stored procedures</li>
            <li><strong>DataReader</strong> – reads data in a forward-only, read-only manner (connected)</li>
            <li><strong>DataAdapter</strong> – acts as a bridge between the database and a DataSet</li>
            <li><strong>DataSet / DataTable</strong> – stores data in memory (disconnected)</li>
          </ul>

          <h3>2.2 Connected vs Disconnected Architecture</h3>
          <table>
            <thead>
              <tr>
                <th>Connected</th>
                <th>Disconnected</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Uses DataReader</td>
                <td>Uses DataSet / DataTable</td>
              </tr>
              <tr>
                <td>Connection remains open while reading</td>
                <td>Connection is closed after filling the DataSet</td>
              </tr>
              <tr>
                <td>Faster for large forward-only reads</td>
                <td>Better for working with data offline and updating later</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>3. Introduction to Entity Framework Core</h2>
          <p>
            Entity Framework Core (EF Core) is a modern Object-Relational Mapper (ORM)
            for .NET. It allows developers to work with a database using .NET objects
            instead of writing most of the SQL manually.
          </p>

          <h3>Advantages of EF Core</h3>
          <ul>
            <li>Less boilerplate code</li>
            <li>Strongly-typed queries with LINQ</li>
            <li>Automatic change tracking</li>
            <li>Support for multiple database providers</li>
            <li>Migrations for database schema management</li>
            <li>Works with ASP.NET Core, console apps, etc.</li>
          </ul>

          <h3>Approaches in Entity Framework</h3>
          <ul>
            <li><strong>Code-First</strong> – You write C# classes first; EF creates the database</li>
            <li><strong>Database-First</strong> – You already have a database; EF generates the classes</li>
            <li><strong>Model-First</strong> – Design a visual model (less common in EF Core)</li>
          </ul>
          <p>In this course we focus on the <strong>Code-First</strong> approach, which is the recommended modern style.</p>

          <hr />

          <h2>4. Code-First Approach – Step by Step</h2>

          <h3>4.1 Create an ASP.NET Core MVC Project</h3>
          <ol>
            <li>Open Visual Studio → Create a new project</li>
            <li>Select <strong>ASP.NET Core Web App (Model-View-Controller)</strong></li>
            <li>Name the project (example: <code>MyCodeFirstApproachDemo</code>)</li>
            <li>Choose .NET 8.0 (Long Term Support) or the version used in your lab</li>
            <li>Click Create</li>
          </ol>

          <h3>4.2 Create a Model Class</h3>
          <p>Add a new class under the <code>Models</code> folder (example: <code>Customer.cs</code>):</p>

          <pre style={codeBlockStyle}>
            <code>{`namespace MyCodeFirstApproachDemo.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
    }
}`}</code>
          </pre>

          <h3>4.3 Create the DbContext</h3>
          <p>Create a class that inherits from <code>DbContext</code>:</p>

          <pre style={codeBlockStyle}>
            <code>{`using Microsoft.EntityFrameworkCore;
using MyCodeFirstApproachDemo.Models;

namespace MyCodeFirstApproachDemo.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Customer> Customers { get; set; }
    }
}`}</code>
          </pre>

          <h3>4.4 Register the DbContext in Program.cs</h3>
          <pre style={codeBlockStyle}>
            <code>{`builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));`}</code>
          </pre>

          <h3>4.5 Add Connection String in appsettings.json</h3>
          <pre style={codeBlockStyle}>
            <code>{`{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\\\mssqllocaldb;Database=CustomerDb;Trusted_Connection=True;MultipleActiveResultSets=true"
  }
}`}</code>
          </pre>

          <hr />

          <h2>5. Working with Migrations</h2>
          <p>Migrations allow EF Core to create and update the database schema based on your model classes.</p>

          <h3>Common Commands (Package Manager Console)</h3>
          <pre style={codeBlockStyle}>
            <code>{`Add-Migration InitialCreate
Update-Database`}</code>
          </pre>

          <p>Or using the .NET CLI:</p>
          <pre style={codeBlockStyle}>
            <code>{`dotnet ef migrations add InitialCreate
dotnet ef database update`}</code>
          </pre>

          <hr />

          <h2>6. Basic CRUD Operations with EF Core</h2>

          <h3>Create (Insert)</h3>
          <pre style={codeBlockStyle}>
            <code>{`var customer = new Customer
{
    Name = "Ali Khan",
    Email = "ali@example.com",
    City = "Karachi"
};

_context.Customers.Add(customer);
await _context.SaveChangesAsync();`}</code>
          </pre>

          <h3>Read (Select)</h3>
          <pre style={codeBlockStyle}>
            <code>{`var customers = await _context.Customers.ToListAsync();

var customer = await _context.Customers.FindAsync(1);`}</code>
          </pre>

          <h3>Update</h3>
          <pre style={codeBlockStyle}>
            <code>{`var customer = await _context.Customers.FindAsync(1);
if (customer != null)
{
    customer.City = "Lahore";
    await _context.SaveChangesAsync();
}`}</code>
          </pre>

          <h3>Delete</h3>
          <pre style={codeBlockStyle}>
            <code>{`var customer = await _context.Customers.FindAsync(1);
if (customer != null)
{
    _context.Customers.Remove(customer);
    await _context.SaveChangesAsync();
}`}</code>
          </pre>

          <hr />

          <h2>Summary</h2>
          <ul>
            <li>ADO.NET is the classic low-level data access technology in .NET.</li>
            <li>Entity Framework Core is a modern ORM that makes data access much simpler.</li>
            <li>Code-First is the preferred approach: write C# classes → EF creates the database.</li>
            <li>DbContext is the main class that manages the connection and tracks entities.</li>
            <li>Migrations keep the database schema in sync with your model classes.</li>
            <li>CRUD operations become simple method calls instead of long SQL statements.</li>
          </ul>

          <hr />

          <h2>Test Your Knowledge</h2>
          <ol>
            <li>What is the main purpose of ADO.NET?</li>
            <li>Name the four core components of ADO.NET.</li>
            <li>What is the difference between connected and disconnected architecture?</li>
            <li>What does ORM stand for and why is it useful?</li>
            <li>Explain the Code-First approach in Entity Framework Core.</li>
            <li>What is the role of the <code>DbContext</code> class?</li>
            <li>What command is used to create a migration?</li>
            <li>Write the basic code to insert a new record using EF Core.</li>
          </ol>

          <p><em>(Answers can be discussed in class or provided by the instructor.)</em></p>

          <hr />

          <h2>Try It Yourself</h2>

          <h3>Exercise 1 – Create a Code-First Project</h3>
          <ol>
            <li>Create a new ASP.NET Core MVC project.</li>
            <li>Add a <code>Product</code> model with properties: Id, Name, Price, Category.</li>
            <li>Create an <code>ApplicationDbContext</code> and register it.</li>
            <li>Add a connection string and run the initial migration.</li>
          </ol>

          <h3>Exercise 2 – Implement Basic CRUD</h3>
          <p>
            Create a simple controller and views (or just use a console-style test) that can:
          </p>
          <ul>
            <li>Add a new product</li>
            <li>Display the list of products</li>
            <li>Update the price of a product</li>
            <li>Delete a product</li>
          </ul>

          <h3>Exercise 3 – Explore LINQ</h3>
          <p>
            Write LINQ queries to:
          </p>
          <ul>
            <li>Get all products whose price is greater than 1000</li>
            <li>Get products ordered by name</li>
            <li>Count how many products belong to a specific category</li>
          </ul>

          <p>
            <strong>Next Session:</strong> Client-side Development Using ASP.NET Core MVC
          </p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
