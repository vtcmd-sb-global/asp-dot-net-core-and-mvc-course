import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session05() {
  return (
    <Layout
      title="Session 05 — More on ASP.NET MVC and Core MVC"
      description="Routing, Tag Helpers, Model Binding, Strongly-typed views, and working with forms in ASP.NET Core MVC"
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

          <h1>Session 05 — More on ASP.NET MVC and Core MVC</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Learn routing, Tag Helpers, model binding, working with forms, and creating strongly-typed views in ASP.NET Core MVC.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 5</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Understand how routing works in ASP.NET Core MVC</li>
            <li>Use conventional and attribute routing</li>
            <li>Work with Tag Helpers</li>
            <li>Perform model binding</li>
            <li>Create and handle forms</li>
            <li>Use strongly-typed views effectively</li>
            <li>Validate user input using Data Annotations</li>
          </ul>

          <hr />

          <h2>1. Session Overview</h2>
          <p>
            In the previous session you learned the basics of ASP.NET Core MVC.
            This session goes deeper into important features such as routing, Tag Helpers,
            model binding, and form handling — all essential for building real-world applications.
          </p>

          <hr />

          <h2>2. Routing in ASP.NET Core MVC</h2>
          <p>
            Routing is the process of mapping an incoming URL to a specific controller and action method.
          </p>

          <h3>2.1 Conventional Routing</h3>
          <p>
            By default, ASP.NET Core MVC uses conventional routing defined in <code>Program.cs</code>:
          </p>

          <CodeBlock
            language="csharp"
            code={`app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <p>This means:</p>
          <ul>
            <li><code>/Home/Index</code> → HomeController.Index()</li>
            <li><code>/Student/List</code> → StudentController.List()</li>
            <li><code>/Student/Details/5</code> → StudentController.Details(id: 5)</li>
          </ul>

          <h3>2.2 Attribute Routing</h3>
          <p>
            You can also define routes directly on controllers and actions using attributes.
          </p>

          <CodeBlock
            language="csharp"
            code={`[Route("students")]
public class StudentController : Controller
{
    [Route("")]
    [Route("list")]
    public IActionResult List()
    {
        return View();
    }

    [Route("details/{id}")]
    public IActionResult Details(int id)
    {
        return View();
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>3. Tag Helpers</h2>
          <p>
            Tag Helpers enable server-side code to participate in creating and rendering HTML elements
            in Razor files. They look like normal HTML attributes but are processed on the server.
          </p>

          <h3>Common Tag Helpers</h3>

          <CodeBlock
            language="csharp"
            code={`<!-- Anchor Tag Helper -->
<a asp-controller="Home" asp-action="Index">Home</a>

<!-- Form Tag Helper -->
<form asp-controller="Student" asp-action="Create" method="post">
    ...
</form>

<!-- Input Tag Helper -->
<input asp-for="Name" class="form-control" />

<!-- Label Tag Helper -->
<label asp-for="Name"></label>

<!-- Validation Tag Helper -->
<span asp-validation-for="Name" class="text-danger"></span>`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <p>
            Tag Helpers make the markup cleaner and provide better IntelliSense and validation support
            compared to traditional HTML Helpers.
          </p>

          <hr />

          <h2>4. Model Binding</h2>
          <p>
            Model Binding automatically maps data from HTTP requests (form fields, query strings,
            route data) to action method parameters or model properties.
          </p>

          <h3>Example</h3>

          <CodeBlock
            language="csharp"
            code={`public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
}

// Controller
[HttpPost]
public IActionResult Create(Student student)
{
    // student.Name and student.Email are automatically populated
    // from the form fields
    return View(student);
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>5. Working with Forms</h2>

          <h3>5.1 Creating a Form (View)</h3>

          <CodeBlock
            language="csharp"
            code={`@model StudentPortal.Models.Student

<form asp-action="Create" method="post">
    <div class="form-group">
        <label asp-for="Name"></label>
        <input asp-for="Name" class="form-control" />
        <span asp-validation-for="Name" class="text-danger"></span>
    </div>

    <div class="form-group">
        <label asp-for="Email"></label>
        <input asp-for="Email" class="form-control" />
        <span asp-validation-for="Email" class="text-danger"></span>
    </div>

    <button type="submit" class="btn btn-primary">Save</button>
</form>`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>5.2 Handling the Form (Controller)</h3>

          <CodeBlock
            language="csharp"
            code={`[HttpGet]
public IActionResult Create()
{
    return View();
}

[HttpPost]
[ValidateAntiForgeryToken]
public IActionResult Create(Student student)
{
    if (ModelState.IsValid)
    {
        // Save the student to database
        return RedirectToAction("List");
    }

    return View(student);
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>6. Data Annotations for Validation</h2>
          <p>
            You can add validation rules directly on the model using Data Annotations.
          </p>

          <CodeBlock
            language="csharp"
            code={`using System.ComponentModel.DataAnnotations;

public class Student
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Name is required")]
    [StringLength(100)]
    public string Name { get; set; }

    [Required]
    [EmailAddress(ErrorMessage = "Invalid Email Address")]
    public string Email { get; set; }

    [Range(18, 60, ErrorMessage = "Age must be between 18 and 60")]
    public int Age { get; set; }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <p>
            When the form is submitted, ASP.NET Core automatically validates the model
            and populates <code>ModelState</code> with any errors.
          </p>

          <hr />

          <h2>7. Strongly-Typed Views</h2>
          <p>
            A strongly-typed view is linked to a specific model class using the
            <code>@model</code> directive. This gives you IntelliSense and compile-time checking.
          </p>

          <CodeBlock
            language="csharp"
            code={`@model StudentPortal.Models.Student

<h2>Student Details</h2>
<p><strong>Name:</strong> @Model.Name</p>
<p><strong>Email:</strong> @Model.Email</p>
<p><strong>Age:</strong> @Model.Age</p>`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>8. Complete Example – Create Student</h2>

          <h3>Model</h3>
          <CodeBlock
            language="csharp"
            code={`using System.ComponentModel.DataAnnotations;

namespace StudentPortal.Models
{
    public class Student
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Please enter student name")]
        [Display(Name = "Student Name")]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>Controller</h3>
          <CodeBlock
            language="csharp"
            code={`public class StudentController : Controller
{
    [HttpGet]
    public IActionResult Create()
    {
        return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult Create(Student student)
    {
        if (ModelState.IsValid)
        {
            // In real application → save to database
            return RedirectToAction("Success");
        }
        return View(student);
    }

    public IActionResult Success()
    {
        return View();
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>Summary</h2>
          <ul>
            <li>Routing maps URLs to controllers and actions (conventional or attribute-based).</li>
            <li>Tag Helpers provide a cleaner and more HTML-like syntax in Razor views.</li>
            <li>Model Binding automatically maps request data to parameters and models.</li>
            <li>Forms are created using Tag Helpers and handled with HTTP GET/POST actions.</li>
            <li>Data Annotations allow easy validation of user input.</li>
            <li>Strongly-typed views improve safety and developer productivity.</li>
          </ul>

          <hr />

          <h2>Test Your Knowledge</h2>
          <ol>
            <li>What is the purpose of routing in ASP.NET Core MVC?</li>
            <li>What is the difference between conventional routing and attribute routing?</li>
            <li>Name three commonly used Tag Helpers.</li>
            <li>What is Model Binding?</li>
            <li>Why do we use the <code>[ValidateAntiForgeryToken]</code> attribute?</li>
            <li>What does <code>ModelState.IsValid</code> check?</li>
            <li>How do you make a property required using Data Annotations?</li>
            <li>What is the advantage of using a strongly-typed view?</li>
          </ol>

          <p><em>(Answers can be discussed in class or provided by the instructor.)</em></p>

          <hr />

          <h2>Try It Yourself</h2>

          <h3>Exercise 1 – Attribute Routing</h3>
          <p>
            Create a controller named <code>ProductController</code> and apply attribute routing
            so that the following URLs work:
          </p>
          <ul>
            <li><code>/products</code> → List action</li>
            <li><code>/products/details/3</code> → Details action</li>
          </ul>

          <h3>Exercise 2 – Create a Form with Validation</h3>
          <ol>
            <li>Create a <code>Book</code> model with properties: Title, Author, and Price.</li>
            <li>Add appropriate Data Annotations.</li>
            <li>Create a form to add a new book.</li>
            <li>Display validation messages when the form is submitted with invalid data.</li>
          </ol>

          <h3>Exercise 3 – Strongly-Typed List View</h3>
          <p>
            Create a list of books in the controller and display them in a strongly-typed view
            using a table.
          </p>

          <p>
            <strong>Next Session:</strong> Action Methods and Advanced Concepts in MVC
          </p>
        </article>
      </CustomLayout>
    </Layout>
  );
}