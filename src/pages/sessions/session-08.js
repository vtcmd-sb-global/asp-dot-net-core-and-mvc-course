import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session08() {
  return (
    <Layout
      title="Session 08 — .NET Core Architecture and Kestrel Web Server Implementation"
      description=".NET Core architecture, hosting models, Kestrel web server, and the request processing pipeline"
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

          <h1>Session 08 — .NET Core Architecture and Kestrel Web Server Implementation</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Understand the architecture of .NET Core, the role of Kestrel, hosting models, and how requests are processed.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 8</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Explain the high-level architecture of .NET Core / ASP.NET Core</li>
            <li>Describe the role of the Kestrel web server</li>
            <li>Differentiate between In-Process and Out-of-Process hosting models</li>
            <li>Understand how the request pipeline works with Kestrel</li>
            <li>Configure Kestrel in an ASP.NET Core application</li>
            <li>Explain the difference between Kestrel and IIS / Nginx / Apache</li>
          </ul>

          <hr />

          <h2>1. Session Overview</h2>
          <p>
            ASP.NET Core is designed to be fast, cross-platform, and modular.
            At the heart of its web stack is a high-performance web server called
            <strong> Kestrel</strong>. In this session we will explore the overall architecture
            of .NET Core and how Kestrel fits into the request processing pipeline.
          </p>

          <hr />

          <h2>2. High-Level Architecture of ASP.NET Core</h2>
          <p>A typical ASP.NET Core application has the following layers:</p>

          <ol>
            <li><strong>Web Server</strong> (Kestrel, or Kestrel behind IIS / Nginx)</li>
            <li><strong>Middleware Pipeline</strong></li>
            <li><strong>Routing</strong></li>
            <li><strong>Controllers / Minimal APIs / Razor Pages</strong></li>
            <li><strong>Application Services & Business Logic</strong></li>
            <li><strong>Data Access Layer</strong> (EF Core, ADO.NET, etc.)</li>
          </ol>

          <p>
            The most important change from classic ASP.NET is that the web server is no longer
            tightly coupled to IIS. ASP.NET Core can run on any platform that supports .NET.
          </p>

          <hr />

          <h2>3. What is Kestrel?</h2>
          <p>
            <strong>Kestrel</strong> is the cross-platform, high-performance web server that is
            included by default with ASP.NET Core.
          </p>

          <h3>Key Characteristics of Kestrel</h3>
          <ul>
            <li>Built on top of <strong>libuv</strong> (older versions) and later on <strong>Sockets</strong> / <strong>Transport abstractions</strong></li>
            <li>Extremely fast and lightweight</li>
            <li>Supports HTTP/1.1, HTTP/2, and HTTP/3 (in recent versions)</li>
            <li>Can be used as an edge server (directly facing the internet) or behind a reverse proxy</li>
            <li>Works on Windows, Linux, and macOS</li>
          </ul>

          <hr />

          <h2>4. Hosting Models</h2>

          <h3>4.1 Out-of-Process Hosting (Classic)</h3>
          <p>
            In the out-of-process model, IIS / Nginx / Apache acts as a reverse proxy.
            The request first arrives at the reverse proxy, which then forwards it to Kestrel.
          </p>
          <p><strong>Flow:</strong></p>
          <pre>
Client → IIS / Nginx → Kestrel → ASP.NET Core App
          </pre>

          <h3>4.2 In-Process Hosting (IIS)</h3>
          <p>
            Starting with ASP.NET Core 2.2, you can run the application <strong>in-process</strong>
            with IIS. In this model, the application runs inside the IIS worker process
            (<code>w3wp.exe</code>) and does not use Kestrel as a separate process.
          </p>
          <p><strong>Advantage:</strong> Better performance because there is no extra hop between IIS and Kestrel.</p>

          <hr />

          <h2>5. How a Request is Processed</h2>
          <ol>
            <li>Client sends an HTTP request.</li>
            <li>The request reaches Kestrel (or the reverse proxy → Kestrel).</li>
            <li>Kestrel passes the request into the ASP.NET Core middleware pipeline.</li>
            <li>Middleware components process the request (authentication, routing, static files, etc.).</li>
            <li>The matched endpoint (Controller action / Minimal API) is executed.</li>
            <li>The response travels back through the middleware pipeline.</li>
            <li>Kestrel sends the response to the client.</li>
          </ol>

          <hr />

          <h2>6. Configuring Kestrel</h2>

          <h3>6.1 Basic Configuration in Program.cs</h3>

          <CodeBlock
            language="csharp"
            code={`var builder = WebApplication.CreateBuilder(args);

// Configure Kestrel
builder.WebHost.ConfigureKestrel(options =>
{
    options.Limits.MaxConcurrentConnections = 100;
    options.Limits.MaxRequestBodySize = 10 * 1024 * 1024; // 10 MB
});

var app = builder.Build();
app.MapGet("/", () => "Hello from Kestrel!");
app.Run();`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>6.2 Configuring Endpoints (URLs)</h3>

          <CodeBlock
            language="csharp"
            code={`builder.WebHost.UseUrls("http://localhost:5000", "https://localhost:5001");`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>6.3 Configuration via appsettings.json</h3>

          <CodeBlock
            language="csharp"
            code={`{
  "Kestrel": {
    "Endpoints": {
      "Http": {
        "Url": "http://localhost:5000"
      },
      "Https": {
        "Url": "https://localhost:5001"
      }
    },
    "Limits": {
      "MaxConcurrentConnections": 100,
      "MaxRequestBodySize": 10485760
    }
  }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>7. Kestrel vs Other Web Servers</h2>

          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Kestrel</th>
                <th>IIS</th>
                <th>Nginx</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Platform</td>
                <td>Cross-platform</td>
                <td>Windows only</td>
                <td>Cross-platform</td>
              </tr>
              <tr>
                <td>Performance</td>
                <td>Very High</td>
                <td>High</td>
                <td>Very High</td>
              </tr>
              <tr>
                <td>Built-in with ASP.NET Core</td>
                <td>Yes</td>
                <td>No</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Recommended as edge server</td>
                <td>Possible (with care)</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Static file serving</td>
                <td>Good</td>
                <td>Excellent</td>
                <td>Excellent</td>
              </tr>
            </tbody>
          </table>

          <p>
            In production, it is very common to put <strong>Nginx</strong> or <strong>IIS</strong>
            in front of Kestrel as a reverse proxy for security, SSL termination, and static file optimization.
          </p>

          <hr />

          <h2>8. Hosting ASP.NET Core on Different Platforms</h2>

          <h3>Windows</h3>
          <ul>
            <li>Use IIS with the ASP.NET Core Module (ANCM)</li>
            <li>In-process or out-of-process hosting</li>
          </ul>

          <h3>Linux</h3>
          <ul>
            <li>Use Nginx or Apache as a reverse proxy</li>
            <li>Run the application as a service using <code>systemd</code></li>
          </ul>

          <h3>Docker / Containers</h3>
          <ul>
            <li>Kestrel runs excellently inside containers</li>
            <li>Very popular deployment model for modern applications</li>
          </ul>

          <hr />

          <h2>9. Practical Example – Checking the Server</h2>
          <p>
            You can check which server is handling the request by inspecting the response headers
            or by writing a simple endpoint:
          </p>

          <CodeBlock
            language="csharp"
            code={`app.MapGet("/server-info", (HttpContext context) =>
{
    var server = context.Response.Headers["Server"].ToString();
    return Results.Ok(new
    {
        Server = string.IsNullOrEmpty(server) ? "Kestrel" : server,
        Environment = app.Environment.EnvironmentName
    });
});`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>Summary</h2>
          <ul>
            <li>ASP.NET Core is designed around a modular, high-performance architecture.</li>
            <li><strong>Kestrel</strong> is the default cross-platform web server.</li>
            <li>You can run Kestrel directly or behind a reverse proxy (IIS, Nginx, Apache).</li>
            <li>There are two main hosting models with IIS: In-Process and Out-of-Process.</li>
            <li>Kestrel is highly configurable through code or <code>appsettings.json</code>.</li>
            <li>In production, a reverse proxy is still recommended for security and performance reasons.</li>
          </ul>

          <hr />

          <h2>Test Your Knowledge</h2>
          <ol>
            <li>What is Kestrel?</li>
            <li>Name three key features of Kestrel.</li>
            <li>What is the difference between In-Process and Out-of-Process hosting?</li>
            <li>Why do many production applications still use Nginx or IIS in front of Kestrel?</li>
            <li>Where can you configure Kestrel limits and endpoints?</li>
            <li>Is Kestrel limited to Windows only?</li>
            <li>What happens after Kestrel receives an HTTP request?</li>
            <li>Which hosting model generally offers better performance with IIS?</li>
          </ol>

          <p><em>(Answers can be discussed in class or provided by the instructor.)</em></p>

          <hr />

          <h2>Try It Yourself</h2>

          <h3>Exercise 1 – Explore Default Server</h3>
          <ol>
            <li>Create a new empty ASP.NET Core project.</li>
            <li>Run it and open the browser.</li>
            <li>Check the response headers to confirm that Kestrel is being used.</li>
          </ol>

          <h3>Exercise 2 – Configure Kestrel</h3>
          <p>
            Change the default URLs so that the application listens on port 8080
            and set a maximum request body size of 5 MB.
          </p>

          <h3>Exercise 3 – Reverse Proxy Research</h3>
          <p>
            Write a short note (half page) explaining why it is recommended to use
            Nginx or IIS in front of Kestrel in a production environment.
          </p>

          <p>
            <strong>Next Session:</strong> Onion Architecture in ASP.NET Core – I
          </p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
