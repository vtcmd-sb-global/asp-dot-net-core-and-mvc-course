import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session06() {
  return (
    <Layout
      title="Session 06 — Action Methods and Advanced Concepts in MVC"
      description="Action results, action filters, model binding advanced scenarios, and other advanced MVC concepts"
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

          <h1>Session 06 — Action Methods and Advanced Concepts in MVC</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Understand different types of action results, action filters, advanced model binding, and other important MVC concepts.</p>
          <p><strong>Based on:</strong> Official Book – Session 6</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Explain different types of Action Results</li>
            <li>Return View, PartialView, Json, Redirect, and File results</li>
            <li>Understand and use Action Filters</li>
            <li>Apply authorization and exception filters</li>
            <li>Use advanced model binding techniques</li>
            <li>Work with ViewBag and TempData</li>
          </ul>

          <hr />

          <h2>1. Session Overview</h2>
          <p>
            In previous sessions you learned the basics of controllers, views, routing, and forms.
            This session focuses on <strong>Action Methods</strong> in more depth — what they can return,
            how filters work, and some advanced techniques used in real applications.
          </p>

          <hr />

          <h2>2. What is an Action Method?</h2>
          <p>
            An Action Method is a public method inside a controller that responds to an HTTP request.
            It usually returns an object that implements <code>IActionResult</code>.
          </p>

          <CodeBlock
            language="csharp"
            code={`public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>3. Common Types of Action Results</h2>

          <h3>3.1 ViewResult</h3>
          <p>Returns a Razor view.</p>

          <CodeBlock
            language="csharp"
            code={`public IActionResult Index()
{
    return View();                  // Returns Index.cshtml
}

public IActionResult About()
{
    return View("AboutUs");         // Returns AboutUs.cshtml
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>3.2 PartialViewResult</h3>
          <p>Returns a partial view (useful for AJAX or reusable components).</p>

          <CodeBlock
            language="csharp"
            code={`public IActionResult LoadStudents()
{
    var students = GetStudents();
    return PartialView("_StudentList", students);
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>3.3 JsonResult</h3>
          <p>Returns data in JSON format (commonly used for APIs and AJAX).</p>

          <CodeBlock
            language="csharp"
            code={`public IActionResult GetStudent(int id)
{
    var student = new { Id = id, Name = "Ali", Course = "MVC" };
    return Json(student);
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>3.4 RedirectResult / RedirectToActionResult</h3>
          <p>Redirects the user to another action or URL.</p>

          <CodeBlock
            language="csharp"
            code={`public IActionResult Create(Student student)
{
    if (ModelState.IsValid)
    {
        // Save student
        return RedirectToAction("List");
    }
    return View(student);
}

public IActionResult GoToGoogle()
{
    return Redirect("https://www.google.com");
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>3.5 ContentResult</h3>
          <p>Returns plain text or HTML content.</p>

          <CodeBlock
            language="csharp"
            code={`public IActionResult Message()
{
    return Content("Hello from ASP.NET Core MVC!");
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>3.6 FileResult</h3>
          <p>Returns a file (for download).</p>

          <CodeBlock
            language="csharp"
            code={`public IActionResult Download()
{
    var fileBytes = System.IO.File.ReadAllBytes("files/report.pdf");
    return File(fileBytes, "application/pdf", "Report.pdf");
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>4. Action Filters</h2>
          <p>
            Filters allow you to run code before or after an action method executes.
            They are very useful for logging, authorization, error handling, and caching.
          </p>

          <h3>Types of Filters</h3>
          <ul>
            <li><strong>Authorization Filters</strong> – Run first (e.g. <code>[Authorize]</code>)</li>
            <li><strong>Resource Filters</strong></li>
            <li><strong>Action Filters</strong> – Run before and after the action</li>
            <li><strong>Exception Filters</strong> – Handle exceptions</li>
            <li><strong>Result Filters</strong> – Run before and after the result is executed</li>
          </ul>

          <h3>Example: Custom Action Filter</h3>

          <CodeBlock
            language="csharp"
            code={`public class LogActionFilter : IActionFilter
{
    public void OnActionExecuting(ActionExecutingContext context)
    {
        // Code before action executes
        Console.WriteLine("Action is starting...");
    }

    public void OnActionExecuted(ActionExecutedContext context)
    {
        // Code after action executes
        Console.WriteLine("Action has finished.");
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <p>Apply the filter:</p>

          <CodeBlock
            language="csharp"
            code={`[ServiceFilter(typeof(LogActionFilter))]
public IActionResult Index()
{
    return View();
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>Built-in Filters</h3>

          <CodeBlock
            language="csharp"
            code={`[Authorize]                          // Only authenticated users
[AllowAnonymous]                     // Allow everyone
[HttpGet]                            // Only GET requests
[HttpPost]                           // Only POST requests
[ValidateAntiForgeryToken]           // Prevent CSRF attacks
[ResponseCache(Duration = 60)]       // Cache the response`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>5. ViewBag and TempData</h2>

          <h3>ViewBag</h3>
          <p>
            <code>ViewBag</code> is a dynamic object used to pass data from the controller to the view.
            It only lives during the current request.
          </p>

          <CodeBlock
            language="csharp"
            code={`// Controller
public IActionResult Index()
{
    ViewBag.Message = "Welcome to the website!";
    ViewBag.StudentCount = 25;
    return View();
}

// View
<h2>@ViewBag.Message</h2>
<p>Total Students: @ViewBag.StudentCount</p>`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>TempData</h3>
          <p>
            <code>TempData</code> is used to pass data between two consecutive requests
            (for example, after a redirect). It uses session under the hood.
          </p>

          <CodeBlock
            language="csharp"
            code={`// Controller
public IActionResult Create(Student student)
{
    if (ModelState.IsValid)
    {
        // Save student
        TempData["SuccessMessage"] = "Student created successfully!";
        return RedirectToAction("List");
    }
    return View(student);
}

// List View
@if (TempData["SuccessMessage"] != null)
{
    <div class="alert alert-success">
        @TempData["SuccessMessage"]
    </div>
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>6. Advanced Model Binding</h2>

          <h3>Binding from Query String</h3>
          <CodeBlock
            language="csharp"
            code={`// URL: /Student/Details?id=5&name=Ali
public IActionResult Details(int id, string name)
{
    return Content($"Id: {id}, Name: {name}");
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>Binding from Route Data</h3>
          <CodeBlock
            language="csharp"
            code={`[Route("students/details/{id}")]
public IActionResult Details(int id)
{
    return Content($"Student Id: {id}");
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>Binding Complex Objects</h3>
          <CodeBlock
            language="csharp"
            code={`public IActionResult Create(Student student)
{
    // All form fields are automatically mapped to the Student object
    return View(student);
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>7. Returning Different Results Based on Condition</h2>

          <CodeBlock
            language="csharp"
            code={`public IActionResult Details(int id)
{
    var student = GetStudentById(id);

    if (student == null)
    {
        return NotFound();               // 404
    }

    if (!User.Identity.IsAuthenticated)
    {
        return Unauthorized();           // 401
    }

    return View(student);
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>Summary</h2>
          <ul>
            <li>Action methods return different types of results (View, Json, Redirect, File, etc.).</li>
            <li>Action Filters allow you to inject logic before or after an action runs.</li>
            <li><code>ViewBag</code> is used for passing data within the same request.</li>
            <li><code>TempData</code> is used for passing data across redirects.</li>
            <li>Model Binding can take data from form, query string, or route values.</li>
            <li>You can return proper HTTP status results such as <code>NotFound()</code> and <code>Unauthorized()</code>.</li>
          </ul>

          <hr />

          <h2>Test Your Knowledge</h2>
          <ol>
            <li>What is an Action Result?</li>
            <li>Name five different types of Action Results.</li>
            <li>When would you use <code>RedirectToAction</code> instead of <code>View</code>?</li>
            <li>What is the purpose of Action Filters?</li>
            <li>What is the difference between ViewBag and TempData?</li>
            <li>How do you return JSON data from an action method?</li>
            <li>What does the <code>[Authorize]</code> attribute do?</li>
            <li>How can you return a file for download from a controller?</li>
          </ol>

          <p><em>(Answers will be discussed in class. Students can also find the answers at the end of this session.)</em></p>

          <hr />

          <h2>Try It Yourself</h2>

          <h3>Exercise 1 – Different Action Results</h3>
          <p>Create an action method that:</p>
          <ul>
            <li>Returns a View when the id is valid</li>
            <li>Returns <code>NotFound()</code> when the id does not exist</li>
            <li>Returns JSON when the request is made via AJAX (optional)</li>
          </ul>

          <h3>Exercise 2 – Using TempData</h3>
          <p>
            Create a form that adds a new record. After successful creation,
            redirect to a list page and show a success message using TempData.
          </p>

          <h3>Exercise 3 – Custom Action Filter</h3>
          <p>
            Create a simple action filter that logs the name of the action being executed
            to the console. Apply it to one of your controllers.
          </p>

          <p>
            <strong>Next Session:</strong> Enhancements in ASP.NET Core
          </p>
        </article>
      </CustomLayout>
    </Layout>
  );
}