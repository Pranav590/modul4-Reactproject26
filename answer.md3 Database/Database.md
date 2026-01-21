# Database Fundamentals – Conceptual Understanding

## 1. Why is db.json not suitable as a database for real projects?

A `db.json` file is a simple file-based storage system and is not suitable for real-world applications due to several limitations:

### Limitations of File-Based Storage

- **Performance**
  - Entire files must be read and written for every operation.
  - Slows down significantly as data size grows.

- **Scalability**
  - Not designed to handle large datasets or increasing numbers of users.
  - Cannot efficiently support complex queries or indexing.

- **Concurrency**
  - Multiple users accessing or modifying the file at the same time can cause data corruption.
  - No built-in locking or transaction management.

- **Reliability**
  - If the application crashes while writing, data may be lost or corrupted.
  - No backup, recovery, or logging mechanisms.

- **Security**
  - Limited access control and no role-based permissions.

Because of these issues, file-based storage is suitable only for small demos, testing, or learning purposes.

---

## 2. What are the ideal characteristics of a database system?

An ideal database system provides much more than just data storage. Key characteristics include:

- **Performance**
  - Fast data retrieval and efficient query execution using indexing and optimization.

- **Concurrency**
  - Supports multiple users accessing and modifying data simultaneously without conflicts.

- **Reliability**
  - Ensures data is consistently stored and available even during system failures.

- **Data Integrity**
  - Maintains accuracy and consistency of data using constraints, rules, and validations.

- **Scalability**
  - Can handle growing amounts of data and users without performance degradation.

- **Fault Tolerance**
  - Automatically recovers from hardware or software failures using backups and replication.

---

## 3. How many types of databases are there? What are their use cases?

Databases are mainly categorized into two major types:

### 1. Relational Databases (SQL)

- Store data in tables with rows and columns.
- Use structured schemas and relationships.
- Follow ACID properties (Atomicity, Consistency, Isolation, Durability).

**Examples:**
- MySQL
- PostgreSQL
- Oracle
- SQL Server

**Use Cases:**
- Banking and financial systems
- E-commerce applications
- Enterprise resource planning (ERP)
- Applications requiring strong data consistency

---

### 2. Non-Relational Databases (NoSQL)

- Store data in flexible formats like documents, key-value pairs, graphs, or columns.
- Schema-less or dynamic schema design.
- Optimized for large-scale and distributed systems.

**Examples:**
- MongoDB (Document-based)
- Redis (Key-value)
- Cassandra (Column-based)
- Neo4j (Graph-based)

**Use Cases:**
- Real-time analytics
- Social media platforms
- IoT applications
- Big data and high-traffic web applications

---

## Conclusion

Relational databases are best for structured data and transactional systems, while NoSQL databases are ideal for scalable, high-performance, and flexible data storage needs.
