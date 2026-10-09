import React from "react";
import Link from "@docusaurus/Link";

const HomePage = () => {
  return (
    <div className="home-page">
      <main>
        <h1>Web Programming Using ASP.NET Core and MVC</h1>

        <p>
          Welcome to the <strong>ASP.NET Core and MVC Course</strong>.
        </p>
        <p>
          This course takes you from the fundamentals of ASP.NET and ASP.NET Core
          to building modern, cross-platform web applications using the MVC pattern,
          Entity Framework, authentication, and real-world architecture practices.
        </p>

        {/* Course Levels */}
        <section>
          <h2>Course Levels</h2>

          <h3>Foundation</h3>
          <ul>
            <li>Introduction to ASP.NET and ASP.NET Core</li>
            <li>ASP.NET Web Forms, Controls, and Events</li>
            <li>ADO.NET and Entity Framework</li>
          </ul>

          <h3>Core MVC Development</h3>
          <ul>
            <li>Client-side Development Using ASP.NET Core MVC</li>
            <li>More on ASP.NET MVC and Core MVC</li>
            <li>Action Methods and Advanced Concepts in MVC</li>
            <li>Enhancements in ASP.NET Core</li>
          </ul>

          <h3>Architecture & Advanced Topics</h3>
          <ul>
            <li>.NET Core Architecture and Kestrel Web Server</li>
            <li>Onion Architecture in ASP.NET Core (Parts I & II)</li>
            <li>FluentValidation and AutoMapper</li>
            <li>Token Authentication</li>
          </ul>
        </section>

        {/* Course Structure */}
        <section>
          <h2>Course Structure</h2>
          <p>
            The course currently contains <strong>10 sessions</strong> (based on the
            available official book material), with each session lasting approximately{" "}
            <strong>2 hours</strong>.
          </p>
          <p>
            These guides are prepared according to the official Aptech ASP.NET Core
            and MVC book so that students can follow both the book and practical
            examples easily.
          </p>
          <p>
            An <strong>eProject Guide</strong> will be added as a final practical
            project section with clear milestones.
          </p>
        </section>

        {/* Student Expectations */}
        <section>
          <h2>Student Expectations</h2>
          <p>Students are expected to:</p>
          <ol>
            <li>Read the lesson material carefully.</li>
            <li>Type and execute the examples themselves.</li>
            <li>Complete the “Try It Yourself” exercises.</li>
            <li>Attempt the “Test Your Knowledge” questions.</li>
            <li>Practice outside the classroom.</li>
            <li>Build the final eProject.</li>
          </ol>
        </section>

        <hr />

        {/* Sessions */}
        <section>
          <h2>Sessions</h2>
          <p>Start with:</p>
          <ul>
            <li>
              <Link to="/sessions/session-01">
                Session 01 — Introduction to ASP.NET and ASP.NET Core
              </Link>
            </li>
            <li>
              <Link to="/sessions/session-02">
                Session 02 — Working with ASP.NET Web Forms, Controls, and Events
              </Link>
            </li>
            <li>
              <Link to="/sessions/session-03">
                Session 03 — Working with ADO.NET and Entity Framework
              </Link>
            </li>
            <li>
              <Link to="/sessions/session-04">
                Session 04 — Client-side Development Using ASP.NET Core MVC
              </Link>
            </li>
            <li>
              <Link to="/sessions/session-05">
                Session 05 — More on ASP.NET MVC and Core MVC
              </Link>
            </li>
            <li>
              <Link to="/sessions/session-06">
                Session 06 — Action Methods and Advanced Concepts in MVC
              </Link>
            </li>
            <li>
              <Link to="/sessions/session-07">
                Session 07 — Enhancements in ASP.NET Core
              </Link>
            </li>
            <li>
              <Link to="/sessions/session-08">
                Session 08 — .NET Core Architecture and Kestrel Web Server Implementation
              </Link>
            </li>
            <li>
              <Link to="/sessions/session-09">
                Session 09 — Onion Architecture in ASP.NET Core – I
              </Link>
            </li>
            <li>
              <Link to="/sessions/session-10">
                Session 10 — Onion Architecture in ASP.NET Core – II
              </Link>
            </li>
          </ul>

          <p style={{ marginTop: "1.5rem" }}>
            <em>
              Sessions 11–15 and the complete eProject Guide will be added once the
              remaining book images are available.
            </em>
          </p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
