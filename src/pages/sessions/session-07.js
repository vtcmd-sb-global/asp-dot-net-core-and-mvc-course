import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session07() {
  return (
    <Layout
      title="Session 07 — Enhancements in ASP.NET Core"
      description="Middleware, Dependency Injection, Configuration, Logging, and other important enhancements in ASP.NET Core"
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

          <h1>Session 07 — Enhancements in ASP.NET Core</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Learn the major enhancements in ASP.NET Core including Middleware, Dependency Injection, Configuration, and Logging.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 7</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Explain what Middleware is and how the request pipeline works</li>
            <li>Create and use custom middleware</li>
            <li>Understand Dependency Injection (DI) in ASP.NET Core</li>
            <li>Register and consume services using DI</li>
            <li>Work with the Configuration system (appsettings.json)</li>
            <li>Use the built-in Logging system</li>
          </ul>

          <hr />

          <h2>1. Session Overview</h2>
          <p>
            ASP.NET Core introduced many powerful features that make applications faster,
            more modular, and easier to maintain. In this session we will explore the most
            important enhancements: <strong>Middleware</strong>, <strong>Dependency Injection</strong>,
            <strong>Configuration</strong>, and <strong>Logging</strong>.
          </p>

          <hr />

          <h2>2. Middleware in ASP.NET Core</h2>
          <p>
            Middleware are components that are assembled into an application pipeline to handle
            requests and responses. Each middleware can:
          </p>
          <ul>
            <li>Choose whether to pass the request to the next component</li>
            <li>Perform work before and after the next component</li>
          </ul>

          <h3>2.1 How the Request Pipeline Works</h3>
          <p>
            When a request arrives, it goes through a series of middleware components in order.
            After the last middleware, the response travels back through the same pipeline in reverse order.
          </p>

          <h3>2.2 Configuring Middleware in Program.cs</h3>

          <CodeBlock
            language="csharp"
            code={`var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Exception handling middleware
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

          <h3>2.3 Creating Custom Middleware</h3>

          <CodeBlock
            language="csharp"
            code={`public class RequestLoggingMiddleware
{
    private readonly RequestDelegate _next;

    public RequestLoggingMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        Console.WriteLine($"Request: {context.Request.Method} {context.Request.Path}");
        
        await _next(context);   // Call the next middleware

        Console.WriteLine($"Response Status: {context.Response.StatusCode}");
    }
}

// Extension method for clean registration
public static class RequestLoggingMiddlewareExtensions
{
    public static IApplicationBuilder UseRequestLogging(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<RequestLoggingMiddleware>();
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <p>Register it in <code>Program.cs</code>:</p>

          <CodeBlock
            language="csharp"
            code={`app.UseRequestLogging();`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>3. Dependency Injection (DI)</h2>
          <p>
            Dependency Injection is a design pattern in which an object receives other objects
            that it depends on (dependencies) instead of creating them itself.
          </p>
          <p>
            ASP.NET Core has a built-in DI container.
          </p>

          <h3>3.1 Service Lifetimes</h3>
          <table>
            <thead>
              <tr>
                <th>Lifetime</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Transient</strong></td>
                <td>Created every time they are requested</td>
              </tr>
              <tr>
                <td><strong>Scoped</strong></td>
                <td>Created once per client request (HTTP request)</td>
              </tr>
              <tr>
                <td><strong>Singleton</strong></td>
                <td>Created only once for the entire application lifetime</td>
              </tr>
            </tbody>
          </table>

          <h3>3.2 Registering Services</h3>

          <CodeBlock
            language="csharp"
            code={`// In Program.cs
builder.Services.AddTransient<IEmailService, EmailService>();
builder.Services.AddScoped<IStudentRepository, StudentRepository>();
builder.Services.AddSingleton<ILoggerService, LoggerService>();`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>3.3 Injecting Services into a Controller</h3>

          <CodeBlock
            language="csharp"
            code={`public class StudentController : Controller
{
    private readonly IStudentRepository _repository;

    // Constructor Injection
    public StudentController(IStudentRepository repository)
    {
        _repository = repository;
    }

    public IActionResult Index()
    {
        var students = _repository.GetAll();
        return View(students);
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>4. Configuration in ASP.NET Core</h2>
          <p>
            Configuration data is stored mainly in <code>appsettings.json</code> and can also come from
            environment variables, command-line arguments, and user secrets.
          </p>

          <h3>4.1 appsettings.json Example</h3>

          <CodeBlock
            language="csharp"
            code={`{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\\\mssqllocaldb;Database=MyAppDb;Trusted_Connection=True;"
  },
  "AppSettings": {
    "ApplicationName": "Student Portal",
    "Version": "1.0.0"
  }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>4.2 Reading Configuration</h3>

          <CodeBlock
            language="csharp"
            code={`public class HomeController : Controller
{
    private readonly IConfiguration _configuration;

    public HomeController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public IActionResult Index()
    {
        var appName = _configuration["AppSettings:ApplicationName"];
        var version = _configuration["AppSettings:Version"];
        var connStr = _configuration.GetConnectionString("DefaultConnection");

        ViewBag.AppName = appName;
        return View();
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>5. Logging in ASP.NET Core</h2>
          <p>
            ASP.NET Core provides a flexible logging API. You can write logs to the console,
            debug window, files, or third-party providers.
          </p>

          <h3>5.1 Using ILogger</h3>

          <CodeBlock
            language="csharp"
            code={`public class StudentController : Controller
{
    private readonly ILogger<StudentController> _logger;

    public StudentController(ILogger<StudentController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        _logger.LogInformation("Index action was called at {Time}", DateTime.Now);
        _logger.LogWarning("This is a warning message");
        _logger.LogError("Something went wrong");

        return View();
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>5.2 Log Levels</h3>
          <ul>
            <li><code>Trace</code></li>
            <li><code>Debug</code></li>
            <li><code>Information</code></li>
            <li><code>Warning</code></li>
            <li><code>Error</code></li>
            <li><code>Critical</code></li>
          </ul>

          <hr />

          <h2>6. Environment-based Configuration</h2>
          <p>
            ASP.NET Core supports different environments (Development, Staging, Production).
            You can have different settings files:
          </p>
          <ul>
            <li><code>appsettings.json</code></li>
            <li><code>appsettings.Development.json</code></li>
            <li><code>appsettings.Production.json</code></li>
          </ul>

          <CodeBlock
            language="csharp"
            code={`if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/Home/Error");
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>Summary</h2>
          <ul>
            <li>Middleware forms the request processing pipeline in ASP.NET Core.</li>
            <li>You can create custom middleware to add cross-cutting concerns (logging, authentication, etc.).</li>
            <li>Dependency Injection is built-in and supports Transient, Scoped, and Singleton lifetimes.</li>
            <li>Configuration is flexible and primarily driven by <code>appsettings.json</code>.</li>
            <li>The logging system is powerful and easy to use with <code>ILogger&lt;T&gt;</code>.</li>
            <li>Different environments (Development / Production) can have different settings and middleware.</li>
          </ul>

          <hr />

          <h2>Test Your Knowledge</h2>
          <ol>
            <li>What is Middleware in ASP.NET Core?</li>
            <li>In which file do we normally configure the middleware pipeline?</li>
            <li>What are the three service lifetimes in Dependency Injection?</li>
            <li>How do you register a service as Scoped?</li>
            <li>How can you read a value from <code>appsettings.json</code> in a controller?</li>
            <li>What interface is used for logging in ASP.NET Core?</li>
            <li>Name three log levels available in ASP.NET Core.</li>
            <li>How does ASP.NET Core know whether the application is running in Development or Production?</li>
          </ol>

          <p><em>(Answers can be discussed in class or provided by the instructor.)</em></p>

          <hr />

          <h2>Try It Yourself</h2>

          <h3>Exercise 1 – Custom Middleware</h3>
          <p>
            Create a middleware that measures how long each request takes and writes the
            duration to the console.
          </p>

          <h3>Exercise 2 – Dependency Injection</h3>
          <ol>
            <li>Create an interface <code>IGreetingService</code> with a method <code>GetGreeting()</code>.</li>
            <li>Implement it in a class <code>GreetingService</code>.</li>
            <li>Register it as Scoped and inject it into a controller.</li>
          </ol>

          <h3>Exercise 3 – Configuration & Logging</h3>
          <p>
            Add a custom section in <code>appsettings.json</code> called <code>MySettings</code>.
            Read a value from it in a controller and also log an Information message when the
            action is called.
          </p>

          <p>
            <strong>Next Session:</strong> .NET Core Architecture and Kestrel Web Server Implementation
          </p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
