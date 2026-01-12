

# Web Application Fundamentals

## Q1. Role of Frontend (FE)

The **Frontend (FE)** is the part of a web application that users see and interact with directly. It runs in the user’s browser and focuses on presentation and interaction.

### User Interface

* The frontend is responsible for designing and displaying the user interface (UI).
* It includes layouts, colors, fonts, buttons, forms, and visual components.
* Technologies commonly used are **HTML, CSS, and JavaScript** along with frameworks like React, Angular, or Vue.

### User Interaction

* Frontend handles user actions such as clicks, typing, scrolling, and form submissions.
* It validates user input (e.g., checking required fields).
* It provides instant feedback like error messages, animations, or loading indicators.

### Communication with Backend

* The frontend sends requests to the backend using APIs (HTTP/HTTPS).
* It receives data from the backend (usually in JSON format).
* Based on the response, it updates the UI dynamically without reloading the page.

---

## Q2. Role of Backend (BE)

The **Backend (BE)** is the server-side part of a web application that handles logic, data, and security. It is not visible to users.

### Server-Side Processing

* Backend processes client requests and applies business rules.
* It performs calculations, validations, and workflows.
* It decides what data should be returned to the frontend.

### Database Handling

* Backend connects to databases to store, retrieve, update, and delete data.
* It ensures data consistency and integrity.
* Common databases include MySQL, PostgreSQL, MongoDB, and Redis.

### Security and Authentication

* Backend manages user authentication and authorization.
* It protects sensitive data using encryption and secure protocols.
* It prevents attacks such as SQL injection and unauthorized access.

---

## Q3. Business Logic

**Business Logic** refers to the rules and processes that define how a business operates within a web application. It determines how data is created, modified, and validated according to business requirements.

### Explanation

* Business logic sits between the user interface and the database.
* It ensures that business rules are followed before any data is saved or processed.
* It is usually implemented in the backend or application layer.

### Real-World Examples

1. **E-commerce Application**

   * Applying discounts only if the cart value exceeds a certain amount.
   * Preventing checkout if products are out of stock.

2. **Banking Application**

   * Allowing money transfers only if the account balance is sufficient.
   * Applying daily transaction limits.

3. **Online Learning Platform**

   * Granting course access only after payment is successful.
   * Issuing certificates only if course completion criteria are met.

---

## Q4. Client–Server Model

The **Client–Server Model** is a computing architecture where tasks are divided between service providers (servers) and service requesters (clients).

### Who is the Client

* The client is the user’s device or application.
* Examples include web browsers, mobile apps, or desktop applications.
* The client sends requests and displays responses.

### Who is the Server

* The server is a system that provides services or data.
* It processes requests, runs business logic, and manages databases.
* Servers are always running and accessible over a network.

### How Communication Happens

* Communication happens through network protocols like HTTP/HTTPS.
* The client sends a request to the server.
* The server processes the request and sends back a response.

---

## Q5. Three-Tier Architecture

**Three-Tier Architecture** is a design pattern that divides a web application into three logical layers.

### Presentation Layer

* This is the frontend layer.
* It handles user interface and user interaction.
* Examples: HTML pages, React components.

### Application (Business) Layer

* This layer contains business logic.
* It processes user requests and applies rules.
* It acts as a bridge between frontend and database.

### Data Layer

* This layer manages data storage.
* It includes databases and data access logic.
* It ensures data persistence and retrieval.

### Why This Architecture Is Used

* Improves scalability and maintainability.
* Allows independent development of each layer.
* Enhances security by separating concerns.

---

## Q6. JavaScript as a Backend Language

JavaScript is widely used as a backend language due to its efficiency and flexibility.

### Performance

* JavaScript uses non-blocking, asynchronous I/O.
* It handles multiple requests efficiently.
* Suitable for real-time applications.

### Ecosystem

* JavaScript has a large ecosystem through **npm**.
* Thousands of libraries and tools are available.
* Strong community support and continuous updates.

### Popular Backend Frameworks

* **Node.js** – Runtime environment for executing JavaScript on the server.
* **Express.js** – Lightweight and flexible backend framework.
* **NestJS** – Structured framework for scalable applications.

---


