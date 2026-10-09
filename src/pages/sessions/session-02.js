import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session02() {
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
      title="Session 02 — Working with ASP.NET Web Forms, Controls, and Events"
      description="ASP.NET Web Forms fundamentals, server controls, event handling, and environment setup"
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

          <h1>Session 02 — Working with ASP.NET Web Forms, Controls, and Events</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Understand Web application development, ASP.NET Web Forms, server controls, and event handling.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 2</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Explain Web application development and Web Forms</li>
            <li>Identify types of Web Forms</li>
            <li>Describe event handling in ASP.NET</li>
            <li>List and describe various types of controls in ASP.NET</li>
            <li>Explain Web API and Web security concepts at a basic level</li>
          </ul>

          <hr />

          <h2>1. Session Overview</h2>
          <p>
            This session outlines the fundamentals of Web application development and Web Forms.
            It also covers various kinds of controls available in ASP.NET and how events are handled.
          </p>

          <hr />

          <h2>2. Introduction to Web Application Development and Web Forms</h2>

          <h3>2.1 What is a Web Application?</h3>
          <p>
            A Web application is a computer program located on a remote server and accessed
            over the network through a browser. Examples include online forms, shopping carts,
            email systems (such as Gmail), word processors, and photo editors that run in the browser.
          </p>
          <p>
            A basic document on the Web is often a static HTML page. When hyperlinks are added,
            users can navigate between pages using URLs (Uniform Resource Locators).
          </p>

          <h3>2.2 How a Web Application Works</h3>
          <p>
            The request to the Web application server is initiated by the user through a browser.
            The server may use database servers to execute tasks such as updating or fetching data.
            The browser then displays the response.
          </p>
          <p>Typical flow:</p>
          <ol>
            <li>User opens a browser and sends an HTTP/HTTPS request.</li>
            <li>Request travels over the Internet to the Web server.</li>
            <li>Web server (and scripting engine) processes the request.</li>
            <li>If needed, the application server talks to a database server.</li>
            <li>Response is sent back to the browser and displayed to the user.</li>
          </ol>

          <h3>2.3 ASP.NET Web Forms</h3>
          <p>
            ASP.NET is the advanced technology for Web development that builds on classic ASP
            and the services of the Common Language Runtime (CLR). It provides a faster development
            experience with less code.
          </p>
          <p>
            The three main programming models used for creating ASP.NET websites are:
          </p>
          <ul>
            <li><strong>ASP.NET Web Forms</strong></li>
            <li><strong>ASP.NET Web Pages</strong></li>
            <li><strong>ASP.NET MVC</strong> (Model-View-Controller)</li>
          </ul>
          <p>
            ASP.NET Web Forms are Web pages that are returned when a user requests an action
            from a browser. The requested page is processed on the server and the result is
            sent back as a clean HTML response.
          </p>

          <hr />

          <h2>3. ASP.NET Environment Setup</h2>
          <p>
            Microsoft recommends developing ASP.NET Web applications in an isolated development
            environment. The main tool is <strong>Visual Studio</strong> (an Integrated Development Environment).
          </p>
          <p>
            Visual Studio provides tools for building ASP.NET Web applications, Web services,
            desktop applications, and mobile applications. Visual Studio 2022 is the recommended IDE.
          </p>

          <h3>Important Installation Tip</h3>
          <p>
            When installing Visual Studio, make sure you select the correct <strong>workloads</strong>
            so that the necessary project templates are available.
          </p>
          <p>For ASP.NET Web development, select the workload:</p>
          <ul>
            <li><strong>ASP.NET and web development</strong> (under Web &amp; Cloud)</li>
          </ul>
          <p>
            This workload includes the templates and tools needed for Web Forms, MVC, and related technologies.
          </p>

          <hr />

          <h2>4. ASP.NET Web Forms in Detail</h2>
          <p>
            Web Forms provide an interactive user interface with the help of various server controls.
            The lifecycle of a Web Forms page is similar to other server-side processes.
            When a Web Forms page is processed, the information is sent to the browser using the HTTP protocol.
          </p>

          <h3>4.1 Processing of an ASP.NET Page</h3>
          <p>
            All ASP.NET pages in a Web application are compiled on the server.
            When a user requests a URL for the first time:
          </p>
          <ol>
            <li>The request is sent to Internet Information Services (IIS).</li>
            <li>The ASP.NET script engine processes the page and its controls.</li>
            <li>The engine generates the final HTML.</li>
            <li>The HTML is sent back to the browser as the response.</li>
          </ol>

          <hr />

          <h2>5. Event Handling in ASP.NET</h2>
          <p>
            ASP.NET uses an event-driven programming model. When a user interacts with a control
            (for example, clicking a button), an event is raised on the server.
          </p>
          <p>Common events include:</p>
          <ul>
            <li><code>Page_Load</code> – fires when the page is loaded</li>
            <li><code>Button_Click</code> – fires when a button is clicked</li>
            <li><code>SelectedIndexChanged</code> – fires when the selection in a list changes</li>
            <li><code>TextChanged</code> – fires when text in a text box changes</li>
          </ul>

          <h3>Simple Example – Button Click Event</h3>
          <pre style={codeBlockStyle}>
            <code>{`protected void Button1_Click(object sender, EventArgs e)
{
    Label1.Text = "Hello, " + TextBox1.Text + "!";
}`}</code>
          </pre>
          <p>
            In the example above, when the user clicks the button, the text from a TextBox
            is read and displayed in a Label.
          </p>

          <hr />

          <h2>6. Types of Controls in ASP.NET</h2>
          <p>ASP.NET provides a rich set of server controls. The main categories are:</p>

          <h3>6.1 Standard Controls (HTML Server Controls / Web Controls)</h3>
          <ul>
            <li><code>Label</code> – displays text</li>
            <li><code>TextBox</code> – accepts user input</li>
            <li><code>Button</code> – triggers an action</li>
            <li><code>CheckBox</code> / <code>CheckBoxList</code></li>
            <li><code>RadioButton</code> / <code>RadioButtonList</code></li>
            <li><code>DropDownList</code></li>
            <li><code>ListBox</code></li>
            <li><code>Image</code>, <code>HyperLink</code>, etc.</li>
          </ul>

          <h3>6.2 Validation Controls</h3>
          <ul>
            <li><code>RequiredFieldValidator</code></li>
            <li><code>RangeValidator</code></li>
            <li><code>CompareValidator</code></li>
            <li><code>RegularExpressionValidator</code></li>
            <li><code>CustomValidator</code></li>
            <li><code>ValidationSummary</code></li>
          </ul>

          <h3>6.3 Data Controls</h3>
          <ul>
            <li><code>GridView</code></li>
            <li><code>DataList</code></li>
            <li><code>Repeater</code></li>
            <li><code>DetailsView</code></li>
            <li><code>FormView</code></li>
          </ul>

          <h3>6.4 Navigation and Login Controls</h3>
          <ul>
            <li><code>Menu</code>, <code>TreeView</code>, <code>SiteMapPath</code></li>
            <li>Login, LoginView, PasswordRecovery, etc.</li>
          </ul>

          <hr />

          <h2>7. Basic Web Forms Example</h2>
          <p>A simple Web Form that greets the user:</p>

          <h3>ASPX Markup</h3>
          <pre style={codeBlockStyle}>
            <code>{`<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" 
    Inherits="WebFormsDemo.Default" %>

<!DOCTYPE html>
<html>
<head>
    <title>Simple Web Form</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Label ID="Label1" runat="server" Text="Enter your name:"></asp:Label>
            <br />
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
            <br /><br />
            <asp:Button ID="Button1" runat="server" Text="Greet Me" 
                OnClick="Button1_Click" />
            <br /><br />
            <asp:Label ID="Label2" runat="server" ForeColor="Blue"></asp:Label>
        </div>
    </form>
</body>
</html>`}</code>
          </pre>

          <h3>Code-Behind (C#)</h3>
          <pre style={codeBlockStyle}>
            <code>{`protected void Button1_Click(object sender, EventArgs e)
{
    Label2.Text = "Welcome, " + TextBox1.Text + "!";
}`}</code>
          </pre>

          <hr />

          <h2>8. Web API and Web Security (Brief Overview)</h2>
          <p>
            While this session focuses on Web Forms, the book also introduces two related topics:
          </p>
          <ul>
            <li><strong>Web API</strong> – a way to build HTTP services that can be consumed by browsers,
              mobile apps, and other clients.</li>
            <li><strong>Web Security</strong> – basic concepts such as authentication, authorization,
              and protecting user data.</li>
          </ul>
          <p>
            These topics will be covered in more depth in later sessions when we work with
            ASP.NET Core and modern authentication.
          </p>

          <hr />

          <h2>Summary</h2>
          <ul>
            <li>A Web application runs on a server and is accessed through a browser.</li>
            <li>ASP.NET Web Forms is one of the classic programming models for building interactive web pages.</li>
            <li>Visual Studio with the “ASP.NET and web development” workload is the recommended environment.</li>
            <li>Web Forms use an event-driven model (Page_Load, Button_Click, etc.).</li>
            <li>ASP.NET provides many categories of controls: standard, validation, data, navigation, and login controls.</li>
            <li>Understanding how a page is processed on the server is essential for writing correct event-handling code.</li>
          </ul>

          <hr />

          <h2>Test Your Knowledge</h2>
          <ol>
            <li>What is the difference between a static HTML page and a Web application?</li>
            <li>Name the three main programming models used in ASP.NET for building websites.</li>
            <li>Which Visual Studio workload should you select for ASP.NET Web development?</li>
            <li>What happens when a user requests an ASP.NET page for the first time?</li>
            <li>What is the purpose of the <code>Page_Load</code> event?</li>
            <li>List four standard server controls available in ASP.NET.</li>
            <li>Name two validation controls and briefly explain when you would use them.</li>
            <li>True or False: ASP.NET Web Forms pages are processed entirely on the client side.</li>
          </ol>

          <p><em>(Answers can be discussed in class or provided by the instructor.)</em></p>

          <hr />

          <h2>Try It Yourself</h2>

          <h3>Exercise 1 – Create Your First Web Forms Project</h3>
          <ol>
            <li>Open Visual Studio 2022.</li>
            <li>Create a new project → select <strong>ASP.NET Web Application (.NET Framework)</strong>.</li>
            <li>Choose the <strong>Web Forms</strong> template.</li>
            <li>Add a TextBox, a Button, and a Label to the default page.</li>
            <li>Write a simple click event that displays a greeting using the name entered in the TextBox.</li>
          </ol>

          <h3>Exercise 2 – Explore Controls</h3>
          <p>
            Add the following controls to a new Web Form and experiment with their properties:
          </p>
          <ul>
            <li>DropDownList (add at least 4 items)</li>
            <li>CheckBoxList</li>
            <li>RadioButtonList</li>
            <li>RequiredFieldValidator connected to a TextBox</li>
          </ul>
          <p>Display the selected values when a button is clicked.</p>

          <h3>Exercise 3 – Simple Calculator</h3>
          <p>
            Create a Web Form that acts as a simple calculator:
          </p>
          <ul>
            <li>Two TextBoxes for numbers</li>
            <li>Four Buttons (Add, Subtract, Multiply, Divide)</li>
            <li>A Label to show the result</li>
          </ul>
          <p>Handle the click events for each button and display the correct result.</p>

          <p>
            <strong>Next Session:</strong> Working with ADO.NET and Entity Framework
          </p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
