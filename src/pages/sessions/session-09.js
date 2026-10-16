import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session09() {
  return (
    <Layout
      title="Session 09 — Onion Architecture in ASP.NET Core – I"
      description="Introduction to Onion Architecture, layers, domain-driven design principles, and project structure in ASP.NET Core"
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

          <h1>Session 09 — Onion Architecture in ASP.NET Core – I</h1>

          <p><strong>Duration:</strong> 2 hours</p>
          <p><strong>Focus:</strong> Understand the principles of Onion Architecture and how to organize an ASP.NET Core application into clean layers.</p>
          <p><strong>Based on:</strong> Official Aptech Book – Session 9</p>

          <hr />

          <h2>Learning Objectives</h2>
          <p>By the end of this session, you should be able to:</p>
          <ul>
            <li>Explain what Onion Architecture is</li>
            <li>Describe the main layers of Onion Architecture</li>
            <li>Understand the Dependency Rule</li>
            <li>Create a proper folder/project structure for Onion Architecture</li>
            <li>Define Domain Entities and Interfaces</li>
            <li>Understand the difference between traditional N-Tier and Onion Architecture</li>
          </ul>

          <hr />

          <h2>1. Session Overview</h2>
          <p>
            As applications grow, poor structure leads to tightly coupled code that is hard to maintain and test.
            <strong>Onion Architecture</strong> (also known as Clean Architecture / Ports and Adapters)
            helps us build applications that are maintainable, testable, and independent of frameworks and databases.
          </p>

          <hr />

          <h2>2. What is Onion Architecture?</h2>
          <p>
            Onion Architecture was introduced by Jeffrey Palermo. The main idea is that the
            <strong> core business logic</strong> should be at the center of the application and
            should not depend on outer layers (UI, database, frameworks).
          </p>

          <h3>Key Principle – The Dependency Rule</h3>
          <p>
            <strong>Source code dependencies must point only inward</strong>, toward higher-level policies.
          </p>
          <p>
            Outer layers can depend on inner layers, but inner layers must never depend on outer layers.
          </p>

          <hr />

          <h2>3. Main Layers of Onion Architecture</h2>

          <table>
            <thead>
              <tr>
                <th>Layer</th>
                <th>Responsibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Domain (Core)</strong></td>
                <td>Entities, Value Objects, Domain Events, Repository Interfaces</td>
              </tr>
              <tr>
                <td><strong>Application</strong></td>
                <td>Use Cases / Application Services, DTOs, Interfaces for external services</td>
              </tr>
              <tr>
                <td><strong>Infrastructure</strong></td>
                <td>Database, Email, File System, External APIs, Repository Implementations</td>
              </tr>
              <tr>
                <td><strong>Presentation (UI)</strong></td>
                <td>ASP.NET Core MVC / Web API / Blazor / Console, Controllers, Views</td>
              </tr>
            </tbody>
          </table>

          <p>Visual representation (from inside to outside):</p>
          <pre>
Domain  →  Application  →  Infrastructure  →  Presentation
          </pre>

          <hr />

          <h2>4. Traditional N-Tier vs Onion Architecture</h2>

          <table>
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Traditional N-Tier</th>
                <th>Onion Architecture</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dependency Direction</td>
                <td>UI → Business → Data</td>
                <td>All dependencies point inward</td>
              </tr>
              <tr>
                <td>Database Dependence</td>
                <td>Business logic often depends on database</td>
                <td>Business logic is independent of database</td>
              </tr>
              <tr>
                <td>Testability</td>
                <td>Harder to unit test</td>
                <td>Very easy to unit test the core</td>
              </tr>
              <tr>
                <td>Framework Coupling</td>
                <td>High</td>
                <td>Low (core has no framework references)</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>5. Recommended Project Structure</h2>
          <p>
            In a real solution we usually create separate class library projects for each layer:
          </p>

          <CodeBlock
            language="csharp"
            code={`StudentManagement.sln
│
├── src
│   ├── StudentManagement.Domain          // Core layer
│   ├── StudentManagement.Application     // Use cases
│   ├── StudentManagement.Infrastructure  // EF Core, Email, etc.
│   └── StudentManagement.Web             // ASP.NET Core MVC / API
│
└── tests
    ├── StudentManagement.Domain.Tests
    └── StudentManagement.Application.Tests`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>6. Domain Layer (The Heart of the Onion)</h2>
          <p>
            The Domain layer contains the most important business concepts.
            It should have <strong>zero dependencies</strong> on other projects.
          </p>

          <h3>6.1 Example Entity</h3>

          <CodeBlock
            language="csharp"
            code={`namespace StudentManagement.Domain.Entities
{
    public class Student
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime DateOfBirth { get; set; }

        public string GetFullName()
        {
            return $"{FirstName} {LastName}";
        }
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <h3>6.2 Repository Interface (in Domain)</h3>

          <CodeBlock
            language="csharp"
            code={`namespace StudentManagement.Domain.Interfaces
{
    public interface IStudentRepository
    {
        Task<Student> GetByIdAsync(int id);
        Task<IEnumerable<Student>> GetAllAsync();
        Task AddAsync(Student student);
        Task UpdateAsync(Student student);
        Task DeleteAsync(int id);
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <p>
            Notice that the interface lives in the <strong>Domain</strong> layer,
            but the actual implementation will live in the <strong>Infrastructure</strong> layer.
          </p>

          <hr />

          <h2>7. Application Layer</h2>
          <p>
            The Application layer contains the business use cases (application services).
            It depends only on the Domain layer.
          </p>

          <CodeBlock
            language="csharp"
            code={`namespace StudentManagement.Application.Services
{
    public class StudentService
    {
        private readonly IStudentRepository _repository;

        public StudentService(IStudentRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Student>> GetAllStudentsAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task CreateStudentAsync(Student student)
        {
            // Business rules can be applied here
            await _repository.AddAsync(student);
        }
    }
}`}
            caption="Interactive preview: switch between themes to see the same C# snippet restyled."
          />

          <hr />

          <h2>8. Why Onion Architecture is Useful</h2>
          <ul>
            <li>Business logic is protected from changes in UI or database</li>
            <li>Easy to unit test (no database or web server needed for core tests)</li>
            <li>You can replace Infrastructure (e.g., switch from SQL Server to MongoDB) without touching the Domain</li>
            <li>Clear separation of concerns</li>
            <li>Supports Domain-Driven Design (DDD) principles</li>
          </ul>

          <hr />

          <h2>Summary</h2>
          <ul>
            <li>Onion Architecture places the Domain at the center of the application.</li>
            <li>Dependencies always point inward (Dependency Rule).</li>
            <li>Main layers: Domain → Application → Infrastructure → Presentation.</li>
            <li>Domain contains Entities and Repository Interfaces.</li>
            <li>Application contains Use Cases / Services.</li>
            <li>Infrastructure implements the interfaces defined in the Domain.</li>
            <li>This architecture makes the application more maintainable and testable.</li>
          </ul>

          <hr />

          <h2>Test Your Knowledge</h2>
          <ol>
            <li>Who introduced Onion Architecture?</li>
            <li>What is the Dependency Rule?</li>
            <li>Name the four main layers of Onion Architecture.</li>
            <li>Which layer should contain the Entity classes?</li>
            <li>Where should Repository Interfaces be placed?</li>
            <li>Where should the actual database code (EF Core) be placed?</li>
            <li>Why is Onion Architecture more testable than traditional N-Tier architecture?</li>
            <li>Can the Domain layer reference Entity Framework Core? Why or why not?</li>
          </ol>

          <p><em>(Answers can be discussed in class or provided by the instructor.)</em></p>

          <hr />

          <h2>Try It Yourself</h2>

          <h3>Exercise 1 – Create the Solution Structure</h3>
          <ol>
            <li>Create a new blank solution named <code>StudentManagement</code>.</li>
            <li>Add four class library projects: Domain, Application, Infrastructure, and a Web project (MVC).</li>
            <li>Set the correct project references (Web → Application → Domain, Infrastructure → Application & Domain).</li>
          </ol>

          <h3>Exercise 2 – Domain Layer</h3>
          <p>
            In the Domain project, create a <code>Student</code> entity and an
            <code>IStudentRepository</code> interface with basic CRUD methods.
          </p>

          <h3>Exercise 3 – Application Service</h3>
          <p>
            Create a <code>StudentService</code> class in the Application layer that uses
            <code>IStudentRepository</code> to get all students and add a new student.
          </p>

          <p>
            <strong>Next Session:</strong> Onion Architecture in ASP.NET Core – II
          </p>
        </article>
      </CustomLayout>
    </Layout>
  );
}
