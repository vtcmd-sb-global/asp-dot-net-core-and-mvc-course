import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
//import CodeBlock from '../../components/CodeBlock';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session01() {
  // const codeBlockStyle = {
  //   backgroundColor: '#1e1e1e',
  //   color: '#d4d4d4',
  //   padding: '12px 16px',
  //   borderRadius: '6px',
  //   fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
  //   fontSize: '0.9rem',
  //   overflowX: 'auto',
  //   lineHeight: '1.5',
  //   margin: '12px 0 24px 0'
  // };

  // const inlineCodeStyle = {
  //   backgroundColor: '#f4f4f4',
  //   color: '#d10057',
  //   padding: '2px 6px',
  //   borderRadius: '4px',
  //   fontFamily: 'Consolas, Monaco, monospace',
  //   fontSize: '0.9em'
  // };

  return (
    <Layout
      title="Session 01 — Introduction to ASP.NET and ASP.NET Core"
      description="Introduction to ASP.NET Framework, history, page lifecycle, ASP.NET Core advantages and features"
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

          <h1>Session 01 — Introduction to ASP.NET and ASP.NET Core</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Understand ASP.NET, its history, frameworks, page lifecycle, and the advantages of ASP.NET Core.</p>
          <p><strong>Based on:</strong> Official Book – Session 1</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Explain ASP.NET Framework and its history</li>
            <li>Explain ASP.NET Page Lifecycle and Lifecycle Events</li>
            <li>Explain ASP.NET Features and its Uses</li>
            <li>Explain ASP.NET Core</li>
            <li>List ASP.NET Core advantages</li>
            <li>Identify how to choose between ASP.NET and ASP.NET Core</li>
            <li>Describe the features of ASP.NET Core 7.0</li>
          </ul>

          <hr />

          <h2>1. Session Overview</h2>
          <p>
            This session provides insights into ASP.NET and ASP.NET Core.
            It lists the features and advantages of ASP.NET and ASP.NET Core and explains
            how to choose between them.
          </p>

          <hr />

          <h2>2. Introduction to ASP.NET</h2>
          <p>
            ASP.NET is a technology that is based on the .NET platform and is used to build
            dynamic Web applications. For developing Web applications, ASP.NET provides
            several frameworks such as:
          </p>
          <ul>
            <li>ASP.NET Web Forms</li>
            <li>ASP.NET MVC</li>
            <li>ASP.NET Web Pages</li>
            <li>ASP.NET Core</li>
          </ul>
          <p>
            All these frameworks can be used to build enterprise-level Web applications.
            Each framework caters to a distinct development style. The selection of a framework
            depends on the combination of programming assets in terms of knowledge and
            development experience.
          </p>

          <p>
            The open-source version of ASP.NET, <strong>ASP.NET Core</strong>, runs on macOS, Linux, and Windows.
            It was first released in 2016 as a redesigned version of earlier Windows-only versions of ASP.NET.
          </p>

          <h3>2.1 Classic ASP vs ASP.NET – Quick Code Comparison</h3>
          <p>Classic ASP (1996–2000s) mixed HTML and VBScript/JScript:</p>

          <CodeBlock
            language="csharp"
            code={`<%
  Dim name
  name = Request.QueryString("name")
  If name = "" Then
    name = "Guest"
  End If
%>
<html>
<body>
  <h1>Hello, <%= name %>!</h1>
</body>
</html>`}
          />

          <p>ASP.NET (from 2002) introduced compiled code-behind and strong typing:</p>

          <CodeBlock
            language="csharp"
            code={`// Default.aspx.cs (Code-behind)
protected void Page_Load(object sender, EventArgs e)
{
    string name = Request.QueryString["name"] ?? "Guest";
    Label1.Text = "Hello, " + name + "!";
}`} 
          />

          <hr />

          <h2>3. History of ASP.NET</h2>

          <h3>3.1 Active Server Pages (ASP)</h3>
          <p>
            During the year 1996, Microsoft introduced a technology called ASP to help developers
            create Web applications. An ASP application included a Web page having VBScript or
            JScript server-side scripts connected to a server. When a request was received, the
            scripts were executed, and the corresponding HTML was generated.
          </p>
          <p>
            Active Server Pages (ASP) was developed to generate Web content that could change
            based on the interaction with users. When a user requests an ASP page, it is forwarded
            from the server hosting that page. The server then saves data regarding that user in
            the form of cookies. This helps the server to make the content specific to that user.
            In Web development, this is called <strong>dynamic content</strong>.
          </p>
          <p>
            A dynamic Web page shows different content every time a user views the page.
            Data is retrieved to generate the display and it is modified as per server functions
            or user constraints.
          </p>

          <h3>3.2 Evolution of ASP.NET</h3>
          <ul>
            <li><strong>2002</strong> – Microsoft released .NET Framework. ASP evolved into ASP.NET.</li>
            <li><strong>2003</strong> – ASP.NET 1.1 released.</li>
            <li><strong>2005</strong> – Major release of ASP.NET 2.0 (Web Pages, Themes, Localization).</li>
            <li><strong>2007</strong> – ASP.NET 3.5 (ASP.NET AJAX, LINQ, Dynamic Data).</li>
            <li><strong>2009</strong> – ASP.NET 3.5 SP1 introduced the MVC approach.</li>
            <li><strong>2010–2011</strong> – ASP.NET 4.0 and ASP.NET MVC 3.</li>
            <li><strong>2012–2013</strong> – ASP.NET 4.5 / 4.5.1 (Web API, SignalR, MVC 4/5).</li>
            <li><strong>2016</strong> – ASP.NET Core 1.0 (cross-platform redesign).</li>
            <li><strong>2017–2019</strong> – ASP.NET Core 2.0 / 3.0 and continued Framework updates.</li>
            <li><strong>2020–2022</strong> – ASP.NET Core 5.0, 6.0, 7.0.</li>
            <li><strong>2022</strong> – .NET Framework 4.8.1 (last major Framework release).</li>
            <li><strong>2023</strong> – ASP.NET Core 7.0.4 and later updates.</li>
          </ul>

          <p>
            Microsoft has rebranded the revamped platform simply as <strong>.NET</strong>
            (no longer “.NET Core”).
          </p>

          <h3>3.3 Recent .NET Versions</h3>
          <table>
            <thead>
              <tr>
                <th>Version</th>
                <th>Release Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>.NET 7.0</td>
                <td>November 8, 2022</td>
              </tr>
              <tr>
                <td>.NET 6.0</td>
                <td>November 8, 2021</td>
              </tr>
              <tr>
                <td>.NET 5.0</td>
                <td>November 10, 2020</td>
              </tr>
              <tr>
                <td>.NET Core 3.1</td>
                <td>December 3, 2019</td>
              </tr>
              <tr>
                <td>.NET Core 3.0</td>
                <td>September 23, 2019</td>
              </tr>
            </tbody>
          </table>

          <p><strong>Updated note (2024–2026):</strong> .NET 8 (LTS) was released in November 2023 and .NET 9 in November 2024. Always prefer the latest LTS version for new projects.</p>

          <hr />

          <h2>4. ASP.NET Frameworks Overview</h2>
          <p>ASP.NET offers multiple frameworks that sit on top of the .NET platform:</p>
          <ul>
            <li><strong>ASP.NET Web Forms</strong> – Event-driven, stateful model similar to Windows Forms.</li>
            <li><strong>ASP.NET MVC</strong> – Model-View-Controller pattern for clean separation of concerns.</li>
            <li><strong>ASP.NET Web Pages</strong> – Simple, lightweight pages with Razor syntax.</li>
            <li><strong>ASP.NET Core</strong> – Modern, cross-platform, high-performance redesign.</li>
          </ul>

          <hr />

          <h2>5. ASP.NET Page Lifecycle (Classic ASP.NET)</h2>
          <p>
            When a request arrives for an ASP.NET page, the page goes through a series of stages
            known as the <strong>Page Lifecycle</strong>. Understanding these stages is essential for writing
            correct event-handling code.
          </p>
          <p>Key stages include:</p>
          <ol>
            <li>Page Request</li>
            <li>Start</li>
            <li>Initialization</li>
            <li>Load</li>
            <li>Postback Event Handling</li>
            <li>Rendering</li>
            <li>Unload</li>
          </ol>
          <p>
            Important events that developers commonly handle are <code>Page_Init</code>, <code>Page_Load</code>,
            <code>control events</code> (e.g. Button_Click), and <code>Page_PreRender</code>.
          </p>

          <h3>5.1 Detailed Page Lifecycle with Code</h3>
          <p>Here is a practical example showing the most commonly used events:</p>

          <CodeBlock
            language="csharp"
            code={`public partial class Default : System.Web.UI.Page
{
    protected void Page_PreInit(object sender, EventArgs e)
    {
        // Very early – theme and master page can still be set here
        Response.Write("Page_PreInit<br/>");
    }

    protected void Page_Init(object sender, EventArgs e)
    {
        // Controls are created and initialized
        Response.Write("Page_Init<br/>");
    }

    protected void Page_Load(object sender, EventArgs e)
    {
        // Most common place for initialization logic
        if (!IsPostBack)
        {
            // Code that should run only on first load
            Label1.Text = "Welcome! First visit.";
        }
        else
        {
            Label1.Text = "This is a postback.";
        }
        Response.Write("Page_Load<br/>");
    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        // Control event – runs after Page_Load on postback
        Label2.Text = "Button was clicked!";
        Response.Write("Button1_Click<br/>");
    }

    protected void Page_PreRender(object sender, EventArgs e)
    {
        // Last chance to change control values before rendering
        Response.Write("Page_PreRender<br/>");
    }

    protected void Page_Unload(object sender, EventArgs e)
    {
        // Cleanup – Response is already sent, so do not write to page
    }
}`} 
          />

          <p><strong>Important:</strong> Always check <code>IsPostBack</code> inside <code>Page_Load</code> to avoid re-running initialization code on every button click.</p>

          <hr />

          <h2>6. Features and Advantages of ASP.NET</h2>
          <ul>
            <li>Rich set of server controls</li>
            <li>Built-in state management (ViewState, Session, Application)</li>
            <li>Strong integration with Visual Studio</li>
            <li>Support for multiple languages (C#, VB.NET)</li>
            <li>Security features (authentication, authorization)</li>
            <li>Caching and performance tools</li>
          </ul>

          <h3>6.1 ViewState Example (Classic ASP.NET)</h3>
          <CodeBlock
            language="csharp"
            code={`// Storing a value in ViewState
ViewState["Counter"] = 10;

// Retrieving it later
int counter = (int)ViewState["Counter"];`} 
          />

          <hr />

          <h2>7. Introduction to ASP.NET Core</h2>
          <p>
            ASP.NET Core is a free, open-source, cross-platform framework for building modern
            cloud-based, Internet-connected applications. It is a complete redesign of ASP.NET.
          </p>
          <p>Key points:</p>
          <ul>
            <li>Runs on Windows, macOS, and Linux</li>
            <li>Side-by-side versioning</li>
            <li>High performance (Kestrel web server)</li>
            <li>Unified programming model for MVC and Web API</li>
            <li>Built-in dependency injection</li>
            <li>Modular HTTP pipeline (middleware)</li>
          </ul>

          <h3>7.1 Advantages of ASP.NET Core</h3>
          <ul>
            <li>Cross-platform support</li>
            <li>High performance and scalability</li>
            <li>Lightweight and modular</li>
            <li>Open-source and community-driven</li>
            <li>Easy integration with modern front-end frameworks</li>
            <li>Cloud-ready (Azure, AWS, Docker, Kubernetes)</li>
          </ul>

          <h3>7.2 Choosing Between ASP.NET and ASP.NET Core</h3>
          <table>
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Recommended Choice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Existing large Web Forms application</td>
                <td>Stay on ASP.NET Framework (or gradual migration)</td>
              </tr>
              <tr>
                <td>New green-field project</td>
                <td>ASP.NET Core</td>
              </tr>
              <tr>
                <td>Need to run on Linux / Docker / containers</td>
                <td>ASP.NET Core</td>
              </tr>
              <tr>
                <td>Maximum performance and modern features</td>
                <td>ASP.NET Core</td>
              </tr>
            </tbody>
          </table>

          <h3>7.3 Your First ASP.NET Core Application (Minimal API)</h3>
          <p>The simplest possible ASP.NET Core app (Modern .NET style):</p>

          <CodeBlock
            language="csharp"
            code={`// Program.cs
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello from ASP.NET Core!");
app.MapGet("/hello/{name}", (string name) => $"Hello, {name}!");

app.Run();`} 
          />

          <p>Run it with:</p>
          <CodeBlock
            language="csharp"
            code={`dotnet new web -n MyFirstApp
cd MyFirstApp
dotnet run`} 
          />

          <h3>7.4 First ASP.NET Core MVC Project (CLI)</h3>
          <CodeBlock
            language="csharp"
            code={`dotnet new mvc -n MvcDemo
cd MvcDemo
dotnet run`} 
          />

          <p>This creates a complete MVC project with Controllers, Views, Models, and wwwroot folders.</p>

          <h3>7.5 Basic Middleware Pipeline Example</h3>
          <CodeBlock
            language="csharp"
            code={`var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Custom middleware
app.Use(async (context, next) =>
{
    Console.WriteLine("Request started: " + context.Request.Path);
    await next();
    Console.WriteLine("Request finished");
});

app.MapGet("/", () => "Hello World");
app.Run();`} 
          />

          <h3>7.6 Built-in Dependency Injection Example</h3>
          <CodeBlock
            language="csharp"
            code={`// Register a service
builder.Services.AddSingleton<IMyService, MyService>();

// Use it in a controller or Minimal API
app.MapGet("/time", (IMyService service) => service.GetCurrentTime());`} 
          />

          <hr />

          <h2>8. Features of ASP.NET Core 7.0 (as covered in the book)</h2>
          <ul>
            <li>Improved performance</li>
            <li>Minimal APIs enhancements</li>
            <li>Better support for cloud-native development</li>
            <li>Updated project templates</li>
            <li>Continued unification of MVC and Web API</li>
          </ul>

          <h3>8.1 Additional Modern Features (Post .NET 7)</h3>
          <ul>
            <li>Native AOT support (smaller, faster apps)</li>
            <li>Improved Blazor (Blazor United / Blazor Web Apps)</li>
            <li>Rate limiting middleware</li>
            <li>Output caching</li>
            <li>Better OpenAPI / Swagger integration</li>
          </ul>

          <hr />

          <h2>Summary</h2>
          <ul>
            <li>ASP.NET is Microsoft’s framework for building dynamic web applications on the .NET platform.</li>
            <li>It evolved from classic ASP (1996) through many versions up to ASP.NET 4.8.1.</li>
            <li>ASP.NET Core (started 2016) is the modern, cross-platform, high-performance redesign.</li>
            <li>Key frameworks under the ASP.NET umbrella: Web Forms, MVC, Web Pages, and Core.</li>
            <li>Understanding the classic Page Lifecycle is still useful when maintaining older applications.</li>
            <li>For almost all new projects, ASP.NET Core is the recommended choice.</li>
          </ul>

          <hr />

          <h2>Test Your Knowledge</h2>
          <ol>
            <li>What is the main difference between classic ASP and ASP.NET?</li>
            <li>In which year was ASP.NET Core 1.0 released?</li>
            <li>Name four frameworks that ASP.NET provides for building web applications.</li>
            <li>List at least four advantages of ASP.NET Core over the classic ASP.NET Framework.</li>
            <li>What is the last major version of the .NET Framework?</li>
            <li>Why would you choose ASP.NET Core for a new project that must run on Linux?</li>
            <li>Briefly describe what happens in the “Load” stage of the ASP.NET Page Lifecycle.</li>
            <li>True or False: ASP.NET Core can only run on Windows.</li>
          </ol>

          <p><em>(Answers will be discussed in class. Students can also find the answers at the end of this session.)</em></p>

          <hr />

          <h2>Try It Yourself</h2>
          <h3>Exercise 1 – Research &amp; Reflection</h3>
          <p>
            Open a browser and visit the official Microsoft documentation for ASP.NET Core.
            Write a short paragraph (5–7 lines) answering:
          </p>
          <ul>
            <li>What is the current LTS (Long-Term Support) version of .NET / ASP.NET Core?</li>
            <li>Name three new features that were introduced after .NET 6.</li>
          </ul>

          <h3>Exercise 2 – Environment Check</h3>
          <p>On your computer:</p>
          <ol>
            <li>Open a terminal / command prompt.</li>
            <li>Run <code>dotnet --list-sdks</code> and <code>dotnet --list-runtimes</code>.</li>
            <li>Note which versions are installed.</li>
            <li>If .NET 7 or later is missing, install the latest SDK from the official Microsoft site.</li>
          </ol>

          <h3>Exercise 3 – Simple Comparison Table</h3>
          <p>
            Create a small table (on paper or in a document) that compares ASP.NET Framework
            and ASP.NET Core on the following points:
          </p>
          <ul>
            <li>Platform support</li>
            <li>Performance</li>
            <li>Open-source status</li>
            <li>Recommended for new projects?</li>
          </ul>

          <h3>Exercise 4 – Create Your First Minimal API (New)</h3>
          <ol>
            <li>Open a terminal.</li>
            <li>Run the following commands:</li>
          </ol>

          <CodeBlock
            language="csharp"
            code={`dotnet new web -n HelloCore
cd HelloCore
dotnet run`} 
          />

          <p>Open the browser at the URL shown (usually https://localhost:5xxx) and verify you see the default message.</p>

          <h3>Exercise 5 – Explore Page Lifecycle (Classic)</h3>
          <p>If you have Visual Studio with .NET Framework support:</p>
          <ol>
            <li>Create a new ASP.NET Web Forms project.</li>
            <li>Add the lifecycle event handlers shown in section 5.1.</li>
            <li>Run the page and observe the order of events in the browser output.</li>
          </ol>

          <p>
            <strong>Next Session:</strong> Working with ASP.NET Web Forms, Controls, and Events
          </p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
