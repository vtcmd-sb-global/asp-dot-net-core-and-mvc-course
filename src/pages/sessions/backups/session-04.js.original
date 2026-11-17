import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session04() {
  return (
    <Layout
      title="Session 04 — Client-side Development Using ASP.NET Core MVC"
      description="Introduction to ASP.NET Core MVC, project structure, Razor views, layouts, and client-side development"
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

          <h1>Session 04 — Client-side Development Using ASP.NET Core MVC</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Understand the ASP.NET Core MVC pattern, project structure, Razor views, layouts, and basic client-side development.</p>
          <p><strong>Based on:</strong> Official Book – Session 4</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Explain the MVC (Model-View-Controller) architectural pattern</li>
            <li>Create a new ASP.NET Core MVC project</li>
            <li>Understand the default project structure</li>
            <li>Work with Controllers, Views, and Models</li>
            <li>Use Razor syntax to create dynamic views</li>
            <li>Create and use Layout pages</li>
            <li>Add basic client-side assets (CSS and JavaScript)</li>
          </ul>

          <hr />

          <h2>1. Session Overview</h2>
          <p>
            This session introduces the modern way of building web applications using
            <strong> ASP.NET Core MVC</strong>. You will learn the MVC pattern, how to create
            a project, understand its folder structure, and start building pages using Razor views.
          </p>

          <hr />

          <h2>2. What is the MVC Pattern?</h2>
          <p>
            MVC stands for <strong>Model – View – Controller</strong>. It is a design pattern
            that separates an application into three main components:
          </p>

          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Responsibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Model</strong></td>
                <td>Represents the data and business logic</td>
              </tr>
              <tr>
                <td><strong>View</strong></td>
                <td>Displays the user interface (HTML)</td>
              </tr>
              <tr>
                <td><strong>Controller</strong></td>
                <td>Handles user requests and decides which view to show</td>
              </tr>
            </tbody>
          </table>

          <p>
            This separation makes the application easier to maintain, test, and scale.
          </p>

          <hr />

          <h2>3. Creating an ASP.NET Core MVC Project</h2>
          <ol>
            <li>Open <strong>Visual Studio 2022</strong></li>
            <li>Click <strong>Create a new project</strong></li>
            <li>Select <strong>ASP.NET Core Web App (Model-View-Controller)</strong></li>
            <li>Click Next</li>
            <li>Give a project name (example: <code>MvcClientDemo</code>)</li>
            <li>Select .NET 8.0 (or the version used in your lab)</li>
            <li>Click <strong>Create</strong></li>
          </ol>

          <hr />

          <h2>4. Understanding the Project Structure</h2>
          <p>After creating the project, you will see the following important folders:</p>

          <ul>
            <li><strong>Controllers</strong> – Contains controller classes</li>
            <li><strong>Models</strong> – Contains data classes</li>
            <li><strong>Views</strong> – Contains Razor view files (.cshtml)</li>
            <li><strong>wwwroot</strong> – Contains static files (CSS, JS, images)</li>
            <li><strong>Program.cs</strong> – Application entry point and configuration</li>
          </ul>

          <hr />

          <h2>5. Controllers</h2>
          <p>
            A Controller is a C# class that inherits from <code>Controller</code>.
            It receives HTTP requests and returns a response (usually a View).
          </p>

          <p>Example of a simple controller:</p>

          <CodeBlock
            language="csharp"
            code={`using Microsoft.AspNetCore.Mvc;

namespace MvcClientDemo.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "This is the About page.";
            return View();
        }
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>6. Views and Razor Syntax</h2>
          <p>
            Views are <code>.cshtml</code> files that contain HTML mixed with C# code using
            <strong> Razor syntax</strong>.
          </p>

          <h3>Basic Razor Examples</h3>

          <CodeBlock
            language="csharp"
            code={`@{
    ViewData["Title"] = "Home Page";
}

<h1>@ViewData["Title"]</h1>

<p>Current date and time: @DateTime.Now</p>

@{
    var name = "Ali";
}
<p>Hello, @name!</p>`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>Common Razor Symbols</h3>
          <ul>
            <li><code>@</code> – Starts a C# expression</li>
            <li><code>@{}</code> – C# code block</li>
            <li><code>@if</code>, <code>@for</code>, <code>@foreach</code> – Control structures</li>
            <li><code>@model</code> – Declares the model type for the view</li>
          </ul>

          <hr />

          <h2>7. Layout Pages</h2>
          <p>
            A Layout page defines the common structure (header, footer, navigation) that is
            shared across multiple views.
          </p>

          <p>The default layout is located at:</p>
          <p><code>Views/Shared/_Layout.cshtml</code></p>

          <p>Example of a simple layout:</p>

          <CodeBlock
            language="csharp"
            code={`<!DOCTYPE html>
<html>
<head>
    <title>@ViewData["Title"] - My MVC App</title>
    <link rel="stylesheet" href="~/css/site.css" />
</head>
<body>
    <header>
        <nav>
            <a href="/">Home</a> |
            <a href="/Home/About">About</a>
        </nav>
    </header>

    <main>
        @RenderBody()
    </main>

    <footer>
        <p>&copy; 2026 - My MVC Application</p>
    </footer>
</body>
</html>`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <p>
            The <code>@RenderBody()</code> method is where the content of individual views is inserted.
          </p>

          <hr />

          <h2>8. Passing Data from Controller to View</h2>

          <h3>Using ViewData</h3>
          <CodeBlock
            language="csharp"
            code={`// In Controller
public IActionResult Index()
{
    ViewData["Message"] = "Welcome to ASP.NET Core MVC!";
    return View();
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <CodeBlock
            language="csharp"
            code={`<!-- In View -->
<h2>@ViewData["Message"]</h2>`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>Using a Strongly-Typed Model</h3>
          <CodeBlock
            language="csharp"
            code={`// Model
public class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
}

// Controller
public IActionResult Details()
{
    var student = new Student { Name = "Sara", Age = 21 };
    return View(student);
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <CodeBlock
            language="csharp"
            code={`@model MvcClientDemo.Models.Student

<h2>Student Details</h2>
<p>Name: @Model.Name</p>
<p>Age: @Model.Age</p>`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>9. Working with Client-side Files (wwwroot)</h2>
          <p>
            Static files such as CSS, JavaScript, and images are stored in the
            <code> wwwroot</code> folder.
          </p>

          <ul>
            <li><code>wwwroot/css/site.css</code> – Application styles</li>
            <li><code>wwwroot/js/site.js</code> – Application scripts</li>
            <li><code>wwwroot/lib/</code> – Third-party libraries (Bootstrap, jQuery, etc.)</li>
          </ul>

          <p>Example of linking a CSS file in the layout:</p>

          <CodeBlock
            language="csharp"
            code={`<link rel="stylesheet" href="~/css/site.css" asp-append-version="true" />`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>10. Simple Complete Example</h2>
          <p>Let’s create a simple page that displays a list of courses.</p>

          <h3>Model</h3>
          <CodeBlock
            language="csharp"
            code={`namespace MvcClientDemo.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Duration { get; set; }
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>Controller</h3>
          <CodeBlock
            language="csharp"
            code={`public IActionResult Courses()
{
    var courses = new List<Course>
    {
        new Course { Id = 1, Title = "ASP.NET Core", Duration = "40 Hours" },
        new Course { Id = 2, Title = "C# Programming", Duration = "30 Hours" },
        new Course { Id = 3, Title = "Entity Framework", Duration = "20 Hours" }
    };

    return View(courses);
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>View (Courses.cshtml)</h3>
          <CodeBlock
            language="csharp"
            code={`@model List<MvcClientDemo.Models.Course>

@{
    ViewData["Title"] = "Courses";
}

<h1>Available Courses</h1>

<table border="1" cellpadding="8">
    <thead>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Duration</th>
        </tr>
    </thead>
    <tbody>
        @foreach (var course in Model)
        {
            <tr>
                <td>@course.Id</td>
                <td>@course.Title</td>
                <td>@course.Duration</td>
            </tr>
        }
    </tbody>
</table>`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>Summary</h2>
          <ul>
            <li>MVC separates an application into Model, View, and Controller.</li>
            <li>Controllers handle requests and return views.</li>
            <li>Views use Razor syntax to mix HTML and C#.</li>
            <li>Layout pages provide a consistent look across the website.</li>
            <li>Static files (CSS, JS, images) are stored in the <code>wwwroot</code> folder.</li>
            <li>Data can be passed from controller to view using ViewData or strongly-typed models.</li>
          </ul>

          <hr />

          <h2>Test Your Knowledge</h2>
          <ol>
            <li>What do the letters M, V, and C stand for in MVC?</li>
            <li>What is the responsibility of a Controller?</li>
            <li>Where are static files stored in an ASP.NET Core project?</li>
            <li>What is the purpose of the <code>_Layout.cshtml</code> file?</li>
            <li>What does the <code>@RenderBody()</code> method do?</li>
            <li>How do you declare a strongly-typed model in a Razor view?</li>
            <li>What is the difference between ViewData and a strongly-typed model?</li>
            <li>Write a simple Razor expression that displays the current year.</li>
          </ol>

          <p><em>(Answers will be discussed in class. Students can also find the answers at the end of this session.)</em></p>

          <hr />

          <h2>Try It Yourself</h2>

          <h3>Exercise 1 – Create a New MVC Project</h3>
          <ol>
            <li>Create a new ASP.NET Core MVC project named <code>StudentPortal</code>.</li>
            <li>Run the project and explore the default pages.</li>
            <li>Open <code>_Layout.cshtml</code> and change the website title.</li>
          </ol>

          <h3>Exercise 2 – Add a New Controller and View</h3>
          <ol>
            <li>Create a new controller named <code>StudentController</code>.</li>
            <li>Add an action method called <code>List</code>.</li>
            <li>Create a corresponding view that displays a welcome message.</li>
          </ol>

          <h3>Exercise 3 – Display a List of Students</h3>
          <p>
            Create a <code>Student</code> model with properties: Id, Name, and Course.
            Pass a list of students from the controller to the view and display them in an HTML table.
          </p>

          <p>
            <strong>Next Session:</strong> More on ASP.NET MVC and Core MVC
          </p>
        </article>
      </CustomLayout>
    </Layout>
  );
}