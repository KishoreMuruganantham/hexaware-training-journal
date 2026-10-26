# Hexaware Training Journal

Private learning repository for tracking my Hexaware full-stack development training, exercises, database work, and daily progress.

## Training Path

```mermaid
flowchart LR
    A[Training Schedule] --> B[Daily Learning]
    B --> C[Hands-on Exercises]
    C --> D[Java Applications]
    D --> H[Java Fundamentals]
    H --> I[OOPs and Design Patterns]
    I --> J[Maven and JUnit]
    J --> K[Spring Core]
    K --> L[Hibernate and JPA]
    L --> M[Spring Boot REST]
    M --> E[Database Integration]
    E --> F[Reviews and Improvements]
    F --> G[Training Milestones]
    G --> B
```

## Current Project

This repository currently contains a Java 21 application that connects to MySQL using MySQL Connector/J.

The `JavaFundamentals` project contains the trainer's Java collections exercise. It uses enums for branch, department, and sort direction, stores sample employees in a DAO, sorts the list by salary with a lambda expression, filters by department and branch with streams, maps the model to response DTOs, groups employees by department and branch salary totals, and sorts with a default `Comparable` order. It also has the trainer's OOPs payment hierarchy demos, a singleton `DBConnection` shared by DAOs with a heap/stack demo, and a factory pattern payment demo.

```text
src/
└── com/
    ├── main/
    │   └── App.java
    ├── model/
    │   └── Employee.java
    ├── dao/
    │   └── CustomerDao.java
    ├── service/
    │   └── CustomerService.java
    └── utility/
        └── DBConnection.java
JavaFundamentals/
└── src/
    └── com/
        ├── main/
        │   ├── App.java
        │   ├── MapDemo.java
        │   ├── HeapDemo.java
        │   ├── IsADemo.java
        │   ├── NEFTPayment.java
        │   └── OOPDemo.java
        ├── model/
        │   └── Employee.java
        ├── beans/
        │   ├── Account.java
        │   ├── Current.java
        │   ├── Dmat.java
        │   ├── Savings.java
        │   ├── Payment.java
        │   ├── Neft.java
        │   ├── Upi.java
        │   └── Customer.java
        ├── dao/
        │   └── EmployeeDao.java
        ├── service/
        │   └── EmployeeService.java
        ├── enums/
        │   ├── Branch.java
        │   ├── Department.java
        │   ├── SortDirection.java
        │   └── PaymentMode.java
        ├── dto/
        │   ├── EmployeeRespDto.java
        │   ├── EmpDeptStatDto.java
        │   └── EmployeeSalaryStatDto.java
        ├── mapper/
        │   └── EmployeeMapper.java
        ├── utility/
        │   └── PaymentUtil.java
        ├── design_pattern/
        │   ├── App.java
        │   ├── DBConnection.java
        │   ├── CustomerDao.java
        │   ├── OrderDao.java
        │   └── ProductDao.java
        └── factory/
            └── design_pattern/
                ├── App.java
                ├── Payment.java
                ├── PaymentMode.java
                ├── PaymentFactory.java
                ├── Neft.java
                ├── RTGS.java
                ├── UPI.java
                ├── PhonePe.java
                ├── GooglePay.java
                └── PayTM.java
pl-sql.sql
lib/
└── mysql-connector-j-9.1.0.jar
MavenDemo/
├── pom.xml
└── src/
    ├── main/java/com/
    │   ├── service/
    │   │   ├── DemoService.java
    │   │   └── EmployeeService.java
    │   ├── model/
    │   │   └── Employee.java
    │   ├── dto/
    │   │   └── EmployeeRespDto.java
    │   ├── mapper/
    │   │   └── EmployeeMapper.java
    │   ├── enums/
    │   │   ├── Branch.java
    │   │   ├── Department.java
    │   │   └── SortDirection.java
    │   └── exception/
    │       ├── EmptyListException.java
    │       ├── InvalidInputException.java
    │       └── InvalidListException.java
    └── test/java/com/service/
        ├── DemoServiceTest.java
        └── EmployeeServiceTest.java
SpringCoreApp/
├── pom.xml
└── src/main/java/com/
    ├── config/
    │   └── AppConfig.java
    ├── main/
    │   ├── App.java
    │   ├── AppV2.java
    │   ├── AppV3.java
    │   ├── AppV4.java
    │   └── SpringApp.java
    ├── dao/
    │   └── MyDao.java
    ├── service/
    │   ├── MyService.java
    │   ├── MyServiceV2.java
    │   ├── MyServiceV3.java
    │   └── MyServiceV4.java
    ├── mapper/
    │   └── TestMapper.java
    └── utility/
        └── TestUtility.java
SpringCoreHelpDesk/
├── pom.xml
└── src/main/java/com/helpdesk/
    ├── config/
    │   └── AppConfig.java
    ├── main/
    │   └── App.java
    ├── model/
    │   ├── Customer.java
    │   ├── User.java
    │   └── Ticket.java
    ├── enums/
    │   ├── Plan.java
    │   ├── Priority.java
    │   ├── Status.java
    │   └── Role.java
    ├── repository/
    │   ├── CustomerRepository.java
    │   └── UserRepository.java
    ├── service/
    │   ├── CustomerService.java
    │   └── UserService.java
    ├── mapper/
    │   ├── TicketMapper.java
    │   └── UserMapper.java
    └── exception/
        └── InvalidCredentialsException.java
HibernateJpaApp/
├── pom.xml
└── src/main/java/com/helpdesk/
    ├── config/
    │   └── AppConfig.java
    ├── main/
    │   ├── App.java
    │   ├── ExecutiveController.java
    │   └── TicketController.java
    ├── dto/
    │   └── TicketRespDto.java
    ├── mapper/
    │   └── TicketMapper.java
    ├── model/
    │   ├── Customer.java
    │   ├── User.java
    │   ├── CustomerPlan.java
    │   ├── Executive.java
    │   ├── Manager.java
    │   ├── Plan.java
    │   └── Ticket.java
    ├── enums/
    │   ├── Role.java
    │   ├── JobTitle.java
    │   ├── PlanType.java
    │   ├── Priority.java
    │   └── Status.java
    ├── exception/
    │   └── ResourceNotFoundException.java
    ├── repository/
    │   ├── CustomerRepository.java
    │   ├── ExecutiveRepository.java
    │   ├── TicketRepository.java
    │   └── UserRepository.java
    └── service/
        ├── CustomerService.java
        ├── ExecutiveService.java
        └── TicketService.java
```

The `helpdesk.mwb` MySQL Workbench model from the trainer sits at the repository root next to the app.

`helpdesk_backend/` is the trainer's Spring Boot project (generated from start.spring.io, Boot 3.5.16, Java 21) with the customer POST API:

```text
helpdesk_backend/
├── pom.xml
├── mvnw
├── mvnw.cmd
└── src/
    ├── main/
    │   ├── java/com/springboot/helpdesk/
    │   │   ├── HelpdeskBackendApplication.java
    │   │   ├── controller/CustomerController.java
    │   │   ├── controller/ExecutiveController.java
    │   │   ├── controller/ManagerController.java
    │   │   ├── controller/CustomerPlanController.java
    │   │   ├── controller/PlanController.java
    │   │   ├── controller/TicketController.java
    │   │   ├── service/CustomerService.java
    │   │   ├── service/ExecutiveService.java
    │   │   ├── service/ManagerService.java
    │   │   ├── service/UserService.java
    │   │   ├── service/TicketService.java
    │   │   ├── repository/CustomerRepository.java
    │   │   ├── repository/ExecutiveRepository.java
    │   │   ├── repository/ManagerRepository.java
    │   │   ├── repository/UserRepository.java
    │   │   ├── repository/TicketRepository.java
    │   │   ├── model/Customer.java
    │   │   ├── model/Executive.java
    │   │   ├── model/Manager.java
    │   │   ├── model/CustomerPlan.java
    │   │   ├── model/Plan.java
    │   │   ├── model/User.java
    │   │   ├── model/Ticket.java
    │   │   ├── dto/request/ExecutiveDto.java
    │   │   ├── dto/request/ManagerDto.java
    │   │   ├── dto/request/CustomerDto.java
    │   │   ├── dto/request/CustomerUpdateDto.java
    │   │   ├── dto/request/TicketDto.java
    │   │   ├── dto/response/ErrorDto.java
    │   │   ├── dto/response/JobTitleExecutiveCountDto.java
    │   │   ├── dto/response/TicketInfoDto.java
    │   │   ├── dto/response/TicketInfoDtoV2.java
    │   │   ├── dto/response/TicketRespDto.java
    │   │   ├── dto/response/TicketStatusStatDto.java
    │   │   ├── mapper/ExecutiveMapper.java
    │   │   ├── mapper/ManagerMapper.java
    │   │   ├── mapper/CustomerMapper.java
    │   │   ├── mapper/TicketMapper.java
    │   │   ├── enums/JobTitle.java
    │   │   ├── enums/Role.java
    │   │   ├── enums/PlanType.java
    │   │   ├── enums/Priority.java
    │   │   ├── enums/Status.java
    │   │   ├── config/GlobalExceptionHandler.java
    │   │   ├── exception/ResourceNotFoundException.java
    │   │   └── exception/InvalidCallException.java
    │   └── resources/application.properties
    └── test/java/com/springboot/helpdesk/
        └── HelpdeskBackendApplicationTests.java
```

## Requirements

- Java 21
- MySQL Server running on `localhost:3306`
- MySQL database named `fsd_hex_sept_2026`
- MySQL Connector/J 9.1.0

## Run the Application

From the repository root in PowerShell:

```powershell
Remove-Item -Recurse -Force .\out -ErrorAction SilentlyContinue
New-Item -ItemType Directory .\out
javac -cp ".\lib\mysql-connector-j-9.1.0.jar" -d .\out .\src\com\utility\DBConnection.java .\src\com\main\App.java
java -cp ".\out;.\lib\mysql-connector-j-9.1.0.jar" com.main.App
```

The application calls the MySQL stored procedure `all_emp()`, maps each returned row to an `Employee`, and prints the employee list through the service layer.

It also supports parameterized department procedures:

- `emp_by_department(?)` returns complete employee records for a department.
- `emp_name_by_department(?)` is the trainer's next DAO exercise and remains a placeholder in the Java code.
- `cnt_emp_by_dept(?, ?)` returns the employee count through an OUT parameter.
- `trg_check_stock_qty` validates stock before an order is inserted.
- `trg_update_product_stock_qty` decreases product stock after an order is inserted.

Run `pl-sql.sql` in the `fsd_hex_sept_2026` database before using these procedures.

To run the Java fundamentals exercise (no database needed):

```powershell
Remove-Item -Recurse -Force .\out-fund -ErrorAction SilentlyContinue
New-Item -ItemType Directory .\out-fund
javac -d .\out-fund .\JavaFundamentals\src\com\enums\*.java .\JavaFundamentals\src\com\model\*.java .\JavaFundamentals\src\com\dao\*.java .\JavaFundamentals\src\com\dto\*.java .\JavaFundamentals\src\com\mapper\*.java .\JavaFundamentals\src\com\service\*.java .\JavaFundamentals\src\com\main\*.java
java -cp .\out-fund com.main.App
```

The application loads the sample employees from `EmployeeDao`, maps each one to an `EmployeeRespDto` with `EmployeeMapper`, and prints the DTO list. Sorting by salary, filtering by department and branch, and listing employee names are kept in the commented block in `App.java` as shown in the trainer's commit.

Other demo entry points in the same project:

```powershell
java -cp .\out-fund com.main.MapDemo
java -cp .\out-fund com.main.OOPDemo
java -cp .\out-fund com.main.IsADemo
java -cp .\out-fund com.main.HeapDemo
java -cp .\out-fund com.design_pattern.App
java -cp .\out-fund com.factory.design_pattern.App
```

`MapDemo` shows basic `HashMap` put, get, and entry-set printing. `OOPDemo` and `IsADemo` show the trainer's polymorphism and payment examples. `HeapDemo` shows heap references and the stack comment from the trainer. `com.design_pattern.App` shows the singleton `DBConnection` shared by the three DAOs. `com.factory.design_pattern.App` shows payment creation through `PaymentFactory`.

To run the Maven JUnit tests (needs Maven with the JUnit dependencies from `MavenDemo/pom.xml`):

```powershell
cd MavenDemo
mvn test
```

`DemoServiceTest` covers the demo service validations and exceptions, and `EmployeeServiceTest` covers the stream operations and DTO mapping. The main sources also compile with plain `javac` on Java 21 since they only use the JDK.

To run the Spring Core app (needs Maven with the Spring dependencies from `SpringCoreApp/pom.xml`):

```powershell
cd SpringCoreApp
mvn compile exec:java -Dexec.mainClass="com.main.App"
```

`App` through `AppV4` show context loading, bean injection, setter autowiring, in-method injection, and custom beans. `SpringApp` shows the `JdbcTemplate` query with the `HikariCP` datasource. The employee table needs the `joining_date` and `salary` columns from the updated `pl-sql.sql` before running the JDBC query.

The `SpringCoreHelpDesk` case study wires the same pieces into a helpdesk app: `App` signs up customers and fetches records through the repositories, services, `RowMapper`s, and `JdbcTemplate` (needs Maven, Spring jars, and MySQL).

To run the Hibernate app (needs Maven with the Hibernate and Spring dependencies from `HibernateJpaApp/pom.xml`):

```powershell
cd HibernateJpaApp
mvn compile exec:java -Dexec.mainClass="com.helpdesk.main.App"
```

`App` saves and fetches `Customer` records through `CustomerService` and the JPQL repository, with the session factory, transaction manager, and `DriverManagerDataSource` from `AppConfig` (needs Maven, Hibernate/Spring jars, and MySQL).

To run the Spring Boot backend (Maven comes through the `mvnw` wrapper, which downloads it on first run):

```powershell
cd helpdesk_backend
.\mvnw.cmd spring-boot:run
```

The app starts Tomcat on port 8080 using the `helpdesk_db` database (created automatically) with the datasource from `application.properties`. Security auto-configuration is excluded in the trainer's starter. Customer endpoints: `POST /api/customer/add` with raw JSON saves and returns the record with its generated id; `GET /api/customer/all` lists all records; `GET /api/customer/{id}` fetches one (`ResourceNotFoundException` for a bad id); `DELETE /api/customer/{id}` removes it. `POST /api/executive/add` takes an `ExecutiveDto` (`@Valid`), maps it to an `Executive`, and saves it; bad input returns 400 with the field messages. `POST /api/manager/add` creates the linked user first (`Role.MANAGER`) and saves the manager; `POST /api/executive/add/{managerId}` validates the manager and attaches user plus manager to the executive. `PUT /api/customer/{id}` partially updates name/city and stamps `updatedAt`; an empty update returns 400 with the DTO. Ticket endpoints: `POST /api/ticket/add/{customerId}` files a ticket; `PUT /api/ticket/assign/{executiveId}/{ticketId}` assigns it; `GET /api/ticket/v1/{customerId}?page=&size=` and `GET /api/ticket/v2?username=&page=&size=` return joined DTO pages. `GET /api/ticket/executive?username=&page=&size=` returns the assessment DTO list by executive username. `GET /api/manager/jobtitle/stat/executive/count` groups executives by job title with counts and `PUT /api/jobtitle/update/{executiveId}?jobTitle=` updates an executive's job title. `GET /api/ticket/status/customers/stat` returns ticket-status counts with joined customer counts, `GET /api/ticket/by-priority?priority=` fetches tickets through the `findByPriority` derived query, and `GET /api/ticket/filter?priority=&status=&fromDate=&toDate=` applies optional priority, status, and date-range filters with the dates converted to UTC instants.

Before running, create the database:

```sql
CREATE DATABASE fsd_hex_sept_2026;
```

## Training History

Daily training notes, schedules, exercises, and milestones will be added over time. Each meaningful learning milestone should be recorded with its date, topic, work completed, and follow-up action.

### 2026-09-21

Commits: `48297b1` Initialize Hexaware training journal; `9d89488` Add employee stored procedure retrieval.

**Stored Procedure Employee Retrieval**

- Added the `Employee` model with fields for ID, name, branch, city, and department.
- Added the `CustomerDao` data-access layer for calling `all_emp()`.
- Added the `CustomerService` layer for employee retrieval.
- Updated the application entry point to print all returned employees.
- Updated `DBConnection.dbConnect()` to return the active JDBC connection.

### 2026-09-22

Commits: `976ad6f` Add parameterized department procedures; `f88e5f3` Align training exercises with trainer commits; `82ccd94` Remove unused database connection variable; `1caa3c0` Add employee count and views; `e4426f3` Add product stock triggers; `3d88d2c` Add e-commerce ER model.

**Parameterized Department Procedures**

- Added the trainer's validated `emp_by_department` and `emp_name_by_department` procedures.
- Added the trainer's parameterized `emp_by_department` JDBC call using `CallableStatement`.
- Added the trainer's `update_emp_branch` and `cnt_emp_by_dept` PL/SQL exercises.
- Kept `getEmployeeNamesByDepartment` as the trainer's placeholder method.
- Updated the application to demonstrate department-based retrieval.

**OUT Parameter and Views**

- Added `getEmpCountByDept` using `CallableStatement` and an integer OUT parameter.
- Updated the application to display the employee count for the DEV department.
- Added the trainer's `v_emp` and `v_emp_dev` view examples with `WITH CHECK OPTION`.
- Commented the database connection status messages as shown in the trainer's commit.

**E-commerce Triggers**

- Added the `product` and `orders` tables from the trainer's trigger case study.
- Added `trg_check_stock_qty` to reject invalid products and orders exceeding available stock.
- Added `trg_update_product_stock_qty` to reduce stock after a valid order.
- Added a valid sample order for product `1` with quantity `2`.

**E-commerce ER Model**

- Added the MySQL Workbench model `ecom_sample.mwb`.
- Forward-engineered the `ecom_sample_db` schema with `users`, `customer`, `vendor`, `category`, `product`, and `customer_product`.
- Verified the six foreign-key relationships shown in the trainer's ER diagram.
- Prepared the forward-engineered SQL without the generated first three lines, last three lines, or `VISIBLE` keyword.

### 2026-09-23

Commits: `90cf076` Add Java fundamentals collections and DTO mapping; `1422710` Correct release version to 0.8.9.

**Java Fundamentals Collections and DTO Mapping**

- Added the `JavaFundamentals` project with `Branch`, `Department`, and `SortDirection` enums.
- Added the `Employee` model with branch, department, joining date, and salary fields.
- Added `EmployeeDao` with 20 sample employees.
- Added `EmployeeService` with salary sorting using a lambda expression, stream filters by department and branch, employee name listing, and model-to-DTO mapping.
- Added the `EmployeeRespDto` record and `EmployeeMapper` for model-to-DTO conversion.
- Added the `App` starter class which prints the DTO list; sorting, filtering, and name listing are kept in the commented block as shown in the trainer's commit.
- Added Java project metadata (`JavaFundamentals.iml`, `.idea` files, `.gitignore`) so `JavaFundamentals` opens as its own IntelliJ project.
- Verified with `javac` on Java 21 (BUILD_EXIT=0) and `java com.main.App` (RUN_EXIT=0); the app printed all 20 `EmployeeRespDto` records.
- MySQL server on `localhost:3306` was reachable; the fundamentals exercise itself does not need a database.
- Known issue: none; the salary sort uses the trainer's `(int)` cast comparison.

### 2026-09-24

Commits: `4725f2b` Add grouping employees by department; `1d4f11d` Add map to DTO conversion with Map demo; `a75ff1f` Add salary grouping by branch with total sum; `2779d85` Add Comparable default sort by joining date; `89f3cd3` Add OOPs concepts with payment hierarchy; `c1b4d37` Update journal for grouping, DTO stats, Comparable and OOPs training.

**Grouping, DTO Stats, Comparable, and OOPs**

- Added `EmpDeptStatDto` and `getEmpCountForEachDepartment` grouping with `Collectors.groupingBy` and `Collectors.counting`.
- Added `MapDemo` with the trainer's `HashMap` login example.
- Converted the department count to a `List<EmpDeptStatDto>` through entry-set mapping.
- Added `EmployeeSalaryStatDto`, `getSalaryOfEachEmpByBranch` with `Collectors.summingDouble`, and `computeTotalSalary`.
- Added `Comparable` to `Employee` with joining-date default sort and sorted retrieval in `getAllEmployees`.
- Added the trainer's OOPs payment hierarchy (`Account`, `Savings`, `Current`, `Dmat`, `Payment`, `Neft`, `Upi`), `PaymentMode` enum, `PaymentUtil`, and the `OOPDemo`, `IsADemo`, and `NEFTPayment` starters.
- Verified with `javac` on Java 21 (BUILD_EXIT=0); `App` printed the department stats, branch salary stats, and total salary 1680000.0; `MapDemo`, `OOPDemo`, and `IsADemo` ran (RUN_EXIT=0).
- Known issue: none; kept the trainer's style and comments as shown.

### 2026-09-25

Commits: `5138f41` Add Singleton pattern with heap and stack demo; `da77d71` Add factory pattern for payments; `613068d` Update journal for Singleton and factory pattern training.

**Singleton and Factory Patterns**

- Added the `Customer` bean and the trainer's singleton `DBConnection` shared by `CustomerDao`, `OrderDao`, and `ProductDao` in `com.design_pattern`.
- Added `HeapDemo` showing heap object references and the trainer's stack and garbage-collector comments.
- Added the trainer's factory pattern in `com.factory.design_pattern` (`Payment`, `PaymentMode`, `PaymentFactory`, `Neft`, `RTGS`, `UPI`, `PhonePe`, `GooglePay`, `PayTM`) with its `App` starter.
- Verified with `javac` on Java 21 (BUILD_EXIT=0); `HeapDemo`, `com.design_pattern.App` (same connection instance in all DAOs), and `com.factory.design_pattern.App` (charge 10.0, limit 200000.0) ran (RUN_EXIT=0).
- Known issue: none; kept the trainer's style and comments as shown.

### 2026-09-28

Commits (branch `junit`): `8851402` Add Maven project setup with JUnit dependencies; `0de9be7` Add first test case for demo service; `a3b7930` Add test case with validations and exceptions; `c72118f` Add stream test cases for employee service; `9e05f28` Add DTO test case with mapper; `165b165` Update journal for Maven and JUnit training.

**Maven and JUnit Tests**

- Added the `MavenDemo` Maven project with JUnit dependencies in `pom.xml`.
- Added `DemoService` with validations and custom exceptions (`EmptyListException`, `InvalidInputException`, `InvalidListException`).
- Added `DemoServiceTest` test cases for validations and exceptions.
- Added stream test cases with `EmployeeService`, `Employee` model, enums, and `EmployeeServiceTest`.
- Added DTO test case with `EmployeeRespDto`, `EmployeeMapper`, and mapper coverage in the tests.
- Verified `pom.xml` is well-formed and all main sources compile with `javac` on Java 21 (MAIN_BUILD_EXIT=0).
- Test execution needs Maven and the JUnit jars, which are not installed in this environment, so `mvn test` could not be run here.
- Known issue: none; kept the trainer's style and comments as shown.

### 2026-09-29

Commits (branch `spring-core`): `0013596` Add Spring app setup with employee salary columns; `a15cdb3` Load Spring app with AppConfig; `af076c1` Add DAO and service classes to Spring context; `b0f549a` Add autowiring with setter injection variants; `1c9c63a` Add in-method direct injection; `6b378f1` Add custom bean definition; `eb160fa` Add datasource and JdbcTemplate config; `518ed01` Update journal for Spring Core training.

**Spring Core Dependency Injection**

- Added the `SpringCoreApp` Maven project with Spring dependencies in `pom.xml`.
- Added `AppConfig` with component scanning and context loading in `App`.
- Added `MyDao` and `MyService` beans to the context.
- Added setter autowiring variants (`AppV2`, `AppV3`, `MyServiceV2`, `MyServiceV3`) with `TestMapper` and `TestUtility`.
- Added in-method direct injection (`AppV4`, `MyServiceV4`) and a custom bean definition.
- Added `HikariCP` datasource and `JdbcTemplate` config with the `SpringApp` starter.
- Extended `pl-sql.sql` with `joining_date` and `salary` columns, seed values, and department `GROUP BY` queries in the existing file style.
- Verified `pom.xml` is well-formed; `javac` on Java 21 reports only missing Spring/HikariCP package errors (60 errors, all `package does not exist` or cascading symbols), with no syntax errors.
- Running needs Maven, the Spring jars, and MySQL with the updated employee table, so the app could not be run here.
- Known issue: none; kept the trainer's style and comments as shown.

### 2026-09-30

Commits (branch `spring-core`): `b70c973` Add HelpDesk project setup with models; `61d618d` Add HelpDesk models, repositories and services; `c207393` Add customer sign up insertion; `86facdf` Add fetch operations with mappers; `d13e93d` Update journal for HelpDesk case study.

**HelpDesk Case Study**

- Added the `SpringCoreHelpDesk` Maven project with models (`Customer`, `User`, `Ticket`), enums (`Plan`, `Priority`, `Status`, `Role`), repositories, and services.
- Added customer sign-up insertion through the service and repository layers.
- Added fetch operations with `TicketMapper`, `UserMapper`, and `InvalidCredentialsException`.
- The trainer's `Case Study_spring-core.pdf` was left out as reference material.
- Verified `pom.xml` is well-formed; `javac` on Java 21 reports only missing Spring/HikariCP package errors, with no syntax errors.
- Running needs Maven, Spring jars, and MySQL, so the app could not be run here.
- Known issue: none; kept the trainer's style and comments as shown.

### 2026-10-01

Commits (branch `hibernate-jpa`): `b4cf2d7` Add Hibernate app initial config; `4beb80e` Add Hibernate config with Customer entity; `cd3bfa1` Add insert and fetch with JPQL repository; `cfcb1c9` Add User model with roles; `5804b7c` Add all helpdesk entities; `1897717` Update journal for Hibernate and JPA training.

**Hibernate and JPA Entities**

- Added the `HibernateJpaApp` Maven project with Hibernate and Spring dependencies in `pom.xml`.
- Added `AppConfig` with the entity manager factory, transaction manager, and datasource.
- Added the `Customer` entity with insert and fetch through `CustomerRepository` (JPQL) and `CustomerService`.
- Added the `User` model with the `Role` enum.
- Added all helpdesk entities (`CustomerPlan`, `Executive`, `Manager`, `Plan`, `Ticket`) with enums (`JobTitle`, `PlanType`, `Priority`, `Status`).
- Verified `pom.xml` is well-formed; `javac` on Java 21 reports only missing JPA/Spring/Hibernate package errors, with no syntax errors.
- Running needs Maven, Hibernate/Spring jars, and MySQL, so the app could not be run here.
- Known issue: none; kept the trainer's style and comments as shown.

### 2026-10-05

Commits (branch `hibernate-jpa`): `9c1fab1` Add executive insert with service and repository; `91707e0` Update journal for executive insert training; `656713a` Add full executive insert with user flow; `554edb4` Update journal for executive user flow training; `43e99f5` Add ticket creation with customer flow; `a30c336` Update journal for ticket creation training; `a7fd88c` Add ticket fetch with DTO mapping; `f0af1aa` Update journal for ticket fetch training.

**Executive Insert**

- Added `ExecutiveService` with `insertExecutive` carrying the trainer's four step comments (prepare user, fetch manager, attach both to executive, pass to repository).
- Added `ExecutiveRepository` and the `ExecutiveController` starter, which prepares a manager id, an executive, and login details and calls the service.
- Restructured the datasource bean in `AppConfig` to the trainer's constructor style against `helpdesk_v2`.
- Added the trainer's `helpdesk.mwb` Workbench model at the repository root.
- Verified with `javac` on Java 21: only missing JPA/Spring/Hibernate package errors, with no syntax errors; new files are byte-identical to the trainer's.
- Running needs Maven, Hibernate/Spring jars, and MySQL, so the app could not be run here.
- Known issue: none; kept the trainer's style and comments as shown.

**Executive Insert With User Flow**

- Implemented the full `insertExecutive` flow: validate the manager id through `ExecutiveRepository.getManagerById` with `ResourceNotFoundException`, persist the `User`, re-fetch the complete user row with the JPQL `getUserByUsername` query, attach user and manager to the executive, and persist it.
- Added `UserRepository` with `insert` and `getUserByUsername`, `ResourceNotFoundException`, and the `User`/`Executive` model updates.
- Verified with `javac` on Java 21: only missing JPA/Spring/Hibernate package errors, with no syntax errors; all 7 touched files byte-identical to the trainer's commit.
- Running needs Maven, Hibernate/Spring jars, and MySQL, so the app could not be run here.
- Known issue: none; kept the trainer's style and comments as shown.

**Ticket Creation With Customer**

- Added `TicketService` with step-commented `insertTicket`: fetch the customer by id (invalid id throws `ResourceNotFoundException`), prepare the ticket with `OPEN` status, attach the customer, and persist it.
- Added `TicketRepository` and the `TicketController` starter, which files an "Internet shutdown" ticket for customer id `1`.
- Extended `CustomerRepository` with `getCustomerById` and updated `UserRepository`, `Ticket`, `ExecutiveService`, `App`, and `ExecutiveController` as shown in the trainer's commit.
- Seeded the demo row in the `helpdesk_v2` database with the trainer's statement before running:

  ```sql
  insert into customer(city,name) values ('london','harry potter');
  ```
- Verified with `javac` on Java 21: only missing JPA/Spring/Hibernate package errors, with no syntax errors; all 9 touched files byte-identical to the trainer's commit.
- Running needs Maven, Hibernate/Spring jars, and MySQL, so the app could not be run here.
- Known issue: none; kept the trainer's style and comments as shown.

**Ticket Fetch With DTO**

- Added `TicketRespDto` and `TicketMapper` converting ticket entities (customer name/username, executive id/job title) to DTOs.
- Added `fetchTicketInfoV1` (all tickets) and the `fetchTicketInfoV2` join-query placeholder in `TicketRepository`.
- Added `fetchTicketInfo` in `TicketService` mapping the ticket list to DTOs; `TicketController` now demos the fetch instead of the insert.
- Updated `Customer`, `Ticket`, and related layers as shown in the trainer's commit.
- Verified with `javac` on Java 21: only missing JPA/Spring/Hibernate package errors, with no syntax errors; all 7 touched files byte-identical to the trainer's commit.
- Running needs Maven, Hibernate/Spring jars, and MySQL, so the app could not be run here.
- Known issue: none; kept the trainer's style and comments as shown.

### 2026-10-06

Commits (branch `spring-boot`): `fb6f234` Add Spring Boot helpdesk backend with customer POST API; `20067cb` Update journal for Spring Boot backend training; `5857616` Add basic CRUD APIs for customer; `8d80e10` Update journal for customer CRUD APIs training; `5750a19` Add global handler for invalid IDs; `4a84739` Update journal for global handler training; `23dbee5` Add error DTO response with ResponseEntity; `b0d8558` Update journal for error DTO training.

**Spring Boot Customer POST API**

- Added the trainer's `helpdesk_backend` Spring Boot project (Boot 3.5.16, Java 21, Maven wrapper) with Web, Data JPA, MySQL, Security, Lombok, and Validation starters.
- Added `Customer` entity (Lombok + JPA), `CustomerRepository` (`JpaRepository`), `CustomerService`, and `CustomerController` with `POST /api/customer/add` returning the saved record with its generated id.
- Added `application.properties` with the `helpdesk_db` datasource (auto-created) and `ddl-auto=update`; security auto-configuration is excluded in the starter.
- Verified with the `mvnw` wrapper: Maven bootstrapped, project compiles, app booted with Tomcat on port 8080, and `POST /api/customer/add` with raw JSON returned HTTP 200 plus the saved record with its generated id.
- Known issue: none; kept the trainer's style and comments as shown.

**Customer CRUD APIs**

- Added `GET /api/customer/all`, `GET /api/customer/{id}`, and `DELETE /api/customer/{id}` to the controller with `getAll`, `getById`, and `deleteById` in the service using the free `JpaRepository` methods.
- Added `ResourceNotFoundException` thrown for an invalid customer id.
- Exercised all four endpoints live: `GET /all` returned 200 with 5 records, `GET /1` returned 200 with the record, `POST` returned 200 with the new record, `DELETE /1` returned 200 with an empty body, and `GET /1` afterwards returned the trainer's exact 500 JSON because the exception carries no status mapping — kept exactly as he wrote it.
- Known issue: none in code; the 500 on missing ids is his implementation as shown.

**Global Handler for Invalid IDs**

- Added `GlobalExceptionHandler` (`@ControllerAdvice`) mapping `ResourceNotFoundException` to 400 with the message body, kept exactly as he wrote it.
- `deleteById` now validates through `getById` first, so deleting a missing id throws instead of silently passing.
- Exercised live after reboot: `GET /all` 200, `GET /3` 200 with the record, `GET /1`, `GET /2`, and `DELETE /999` (all missing) each return 400 with `Invalid customer id`, and `DELETE /3` returns 200 empty. The old 500 JSON is gone.
- Known issue: none; kept the trainer's style and comments as shown.

**Error DTO Response**

- Added `ErrorDto` record (`message`, `comments`, `timestamp`) fulfilling his own "always reply the object not the string" comment; the handler now returns the DTO with 400 and `"Id not found in DB"`.
- Rebooted and verified live: `GET /1` returns 400 with `{"message":"Invalid customer id","comments":"Id not found in DB","timestamp":"..."}`, and `GET /all` still returns 200 with the records.
- Known issue: none; kept the trainer's style and comments as shown.

### 2026-10-07

Commits (branch `spring-boot`): `7d43b8a` Add executive POST API with validation; `09a15b0` Update journal for executive validation training; `b507731` Refine validation errors to field message map; `875e0a1` Update journal for validation refinement training; `175dabb` Add executive POST with linked user; `579a450` Update journal for executive user training; `45bff13` Add manager POST with connected executive flow; `a267e97` Update journal for manager flow training; `fd9bb06` Add customer POST with user scaffolding; `09b0606` Add customer POST API with linked user; `95edb01` Update journal for customer user training; `597efa9` Add customer update record API; `b6e514e` Update journal for customer update training.

**Executive POST API With Validation**

- Added `ExecutiveDto` record with `@NotBlank`, `@NotNull`, `@Email`, and `@Size` validations, `ExecutiveMapper`, `Executive` entity, `JobTitle` enum, `ExecutiveRepository`, and `ExecutiveService` mapping DTO to entity.
- Added `ExecutiveController` with `POST /api/executive/add` (`@Valid @RequestBody`); added `@Repository` to the customer repository and a port note in properties.
- Verified live after reboot: valid POST returns 200 with the saved executive carrying its persisted user (`id`, `createdAt`, `active` all attached — the old chat question answered in one response); invalid POST returns 400 with the clean field map.
- Caught mid-verification: the first reboot served stale compiled classes and still showed the old error shape; recompiled and rebooted to confirm the new one.
- Environment note: one boot attempt failed with MySQL `Communications link failure` while MySQL80 showed Running but accepted no connections; after a service restart the identical code booted and verified clean — code faultless, database was the cause.
- Known issue: none; kept the trainer's style and comments as shown.

**Manager POST With Connected Executive**

- Added `Manager` entity, `ManagerDto`, `ManagerMapper`, `ManagerRepository`, and `ManagerService` creating the linked user first (`Role.MANAGER`).
- `ExecutiveService` now takes the manager id from the path, validates it, and attaches user plus manager to the executive; `Executive` gained the `manager` link.
- Rebooted and verified live: manager POST 200 with linked user; executive POST with valid manager id 200; bad manager id 400. One 500 seen mid-testing was a duplicate-username row from earlier test data, confirmed in the server log — code faultless.
- Known issue: none; kept the trainer's style and comments as shown.

**Customer POST With Linked User**

- Added `CustomerDto`, `CustomerMapper`, and the user link on `Customer`; the customer POST now persists the user first and returns the customer with its managed user attached.
- Rebooted and verified live: customer POST 200 carrying the persisted user; older rows show `user:null` as before.
- Known issue: none; kept the trainer's style and comments as shown.

**Customer Update Record**

- Added `PUT /api/customer/{id}` with partial name/city update; empty updates throw `InvalidCallException` mapped to 400 with the DTO.
- Added `CustomerUpdateDto` and stamped `updatedAt` on the customer via `@UpdateTimestamp`.
- Rebooted and verified live: PUT with fields 200 with changed record and fresh timestamp; PUT `{}` 400 with `Update op terminated`.
- Known issue: none; kept the trainer's style and comments as shown.

### 2026-10-08

Commits (branch `spring-boot`): `f629d4e` Add ticket POST and executive assign; `b10f303` Add ticket fetch with pagination; `2eed592` Add ticket fetch by customer username; `624e537` Update journal for ticket APIs training; `00162c3` Add ticket fetch by executive username; `ac2f269` Update journal for executive username fetch training; `93fb30b` Add customer plan case study scaffolding; `c15e2d5` Update journal for customer plan scaffolding training.

**Ticket POST, Assign, and Paginated Fetch**

- Added `Ticket` entity, `TicketDto`, `TicketMapper`, `TicketRepository`, and `TicketService` with ticket POST (validated customer, `OPEN` status) and executive assign flow.
- Added `TicketInfoDto` joined DTO with `Pageable` fetch by customer id and by customer username (optional page/size defaults).
- Rebooted and verified live: ticket POST 200; assign 200; v1 paged 200 with joined DTO; v2 by username 200 with full ticket-customer-executive row.
- Queries use inner joins to executive, so unassigned tickets are excluded by design — kept exactly as he wrote it.
- Known issue: none; kept the trainer's style and comments as shown.

**Ticket Fetch By Executive Username**

- Added `TicketInfoDtoV2` with the exact assessment field list and the joined fetch by executive username with optional page/size defaults.
- Rebooted and verified live: username query returns 200 with full ticket-executive-customer rows; unknown username returns 200 empty.
- Known issue: none; kept the trainer's style and comments as shown.

**Customer Plan Case Study Scaffolding**

- Added `Plan` and `CustomerPlan` entities with `PlanType` enum for the customer-plan case study.
- Added `PlanController` and `CustomerPlanController` stubs carrying his assignment comments (plan insert, plans-by-username fetch).
- Rebooted and verified live: app boots clean, existing endpoints still green.
- Known issue: none; kept the trainer's style and comments as shown.

### 2026-10-09

Commits (branch `spring-boot`): `5790d5c` Add group by with executive update; `2e811be` Add group by for ticket status; `a747596` Add ticket fetch by priority; `7c103b0` Add dynamic filter API; `e69fd0f` Update journal for group by, derived queries and dynamic filter training.

**Group By Stats, Derived Queries, and Dynamic Filter**

- Added `GET /api/manager/jobtitle/stat/executive/count` returning `JobTitleExecutiveCountDto` from an `@Query` that groups executives by non-null `jobTitle`, plus `PUT /api/jobtitle/update/{executiveId}?jobTitle=` that fetches the executive, sets the new title, and saves it.
- Added `GET /api/ticket/status/customers/stat` returning `TicketStatusStatDto` from an `@Query` that groups tickets by status with the joined customer count.
- Added the trainer's derived query methods `findByPriority`, `findByStatus`, and `findByPriorityAndStatus` with field hints on `Ticket`, and `GET /api/ticket/by-priority?priority=` mapping through `TicketMapper.convertEntityToDto` into `TicketRespDto`.
- Added `GET /api/ticket/filter?priority=&status=&fromDate=&toDate=` with every parameter optional — the repository `@Query` uses `?1 IS NULL OR ...` null-safe predicates and the service converts `LocalDate` bounds to UTC instants with `atStartOfDay(ZoneOffset.UTC)`.
- Rebooted and verified live: by-priority `HIGH` 200 with ticket 1; no-param filter 200 with all 3 tickets; `status=OPEN` 200 with 3; combined priority/status/date filter 200 with 1; status stat 200 (`OPEN` → 3 customers); job-title stat 200 with an empty list on the current data; a missing executive id on the update route returns 400 through the global handler.
- Known issue: none; kept the trainer's style and comments as shown.

### 2026-10-12

Commits (branch `spring-boot`): `52dc03f` Add Part 1: Spring Security - in memory auth; `d173f39` Add Part 2: Spring Security filter chain; `82516e6` Add Part 2: Spring Security - password encoder and auth provider; `8e59ed8` Add Postman collection till security impl; `5875ee2` Add full POST APIs with ownership checks; `cc8f705` Update journal for Spring Security and ownership checks training.

**Spring Security and Ownership Checks**

- Added Spring Security to `helpdesk_backend`: `SecurityConfig` builds the `SecurityFilterChain` with CSRF disabled, HTTP Basic enabled, and role matchers - permitAll for customer signup, admin onboarding and the ticket filter/stat reads, `CUSTOMER` for customer reads, `MANAGER` for executive add and ticket assign, `ADMIN` for manager add - backed by a `DaoAuthenticationProvider` and a `BCryptPasswordEncoder`.
- Added `MyUserDetailsService` that loads the active `User` through `UserRepository.loadUserByUsername`, with the `User` model supplying the account flags the provider needs; the earlier in-memory user demo stays in the file as his commented step.
- Added the `HelpDesk` Postman collection at the repository root covering the secured ticket, assign, admin and manager flows.
- Added `AdminController` with `POST /api/admin/add` through `AdminDto` and `UserService.addAdmin`, storing the ADMIN user with a BCrypt-encoded password.
- Added the `OwnershipException` with a `GlobalExceptionHandler` mapping it to the error DTO, and the ownership check in `TicketService.assignExecutive` that verifies the executive belongs to the logged-in manager's team before assigning.
- Reworked the POST APIs around the logged-in user: ticket add and executive add take the username from `Principal` and resolve the customer or manager through the new `getByUsername` repository lookups instead of path ids, and executive passwords are BCrypt-encoded at creation.
- Rebooted and verified live: unauthenticated customer reads and manager add return 401, a wrong role returns 403, the full chain works (admin onboards a manager, manager onboards an executive, customer signs up and raises a ticket, manager assigns his own executive - every step 200), assigning another manager's executive returns 400 `Operation not allowed! contact admin`, wrong password returns 401, and new users are stored with BCrypt hashes.
- Known issue: none; kept the trainer's style and comments as shown.

### 2026-10-13

Commits (branch `spring-boot`): `9241ce0` Add JWT auth; `204316d` Update journal for JWT authentication training.

**JWT Authentication**

- Added the `jjwt` 0.9.1 library with `javax.xml.bind` jaxb-api and `org.glassfish.jaxb` jaxb-runtime in `pom.xml` so JWT works on Java 21.
- Added `JwtUtility` that signs HS256 tokens with his in-file secret key, subject = logged-in username, and a 24-hour expiry, plus `validateToken`, `extractUsername`, and `extractExpiration` helpers.
- Added `AuthController` with `GET /api/auth/login` marked `authenticated()` in the filter chain: Spring checks the credentials first (HTTP Basic is still enabled), and the controller replies with a `TokenDto` carrying the token, expiry time, and issue time.
- Added `JwtFilter` as a `OncePerRequestFilter` registered before `UsernamePasswordAuthenticationFilter`: it reads `Authorization: Bearer <token>`, validates it against `JwtUtility`, loads the user through `MyUserDetailsService`, and sets the `SecurityContextHolder` authentication with that user's authorities - so tokens now satisfy the same role rules as Basic.
- Rebooted and verified live: login returns 401 with no credentials or a wrong password and 200 with valid Basic credentials carrying the token; the Bearer token gets 200 on `GET /api/customer/19` while no credentials still give 401 and Basic still works; an ADMIN token gets 403 on the customer read and a CUSTOMER token 403 on `POST /api/manager/add`; ticket add with the Bearer token returns 200 (ticket 8 appears in the filter); open reads, status stat, and signup stay 200.
- Known issue: a malformed `Bearer` token surfaces as a 500 because `JwtFilter` does not catch the parser exceptions; kept exactly as he wrote it.

### 2026-10-14

Commits (branch `spring-boot`): `99594a7` Add test case get tickets with mocking; `1756ece` Update journal for Mockito ticket tests training; `ad6050f` Add test case save ticket; `37dd678` Update journal for save ticket test training.

**Mockito Ticket Fetch Tests**

- Added `TicketServiceTest` with `@ExtendWith(MockitoExtension.class)`: `@InjectMocks TicketService` with `@Mock TicketRepository` and `@Mock CustomerRepository`, stubbing `findById` and `getTicketByCustomerId` with `PageRequest.of(0,5)` so the happy path asserts the returned list sizes and verifies every interaction with `times(...)` and `verifyNoMoreInteractions`.
- Added the invalid-id test that stubs `findById` to throw, asserts `ResourceNotFoundException` with `assertThrows`, and confirms the ticket repository is never touched.
- Changed `getTicketsByCustomerId` to validate the customer first - `customerRepository.findById(...).orElseThrow(ResourceNotFoundException("Customer Id Invalid"))` - before running the paged query, so an unknown id now fails fast instead of returning an empty list.
- Added `JOIN e.manager m` to the `getTicketByExecutiveUsername` query, a `//e.manager m` alias comment on `Executive.manager`, and an `assertEquals` line in the existing `contextLoads` test.
- Verified: `mvnw test` runs 3/3 green (`contextLoads` plus both mock tests, BUILD SUCCESS); live, `GET /api/ticket/v1/19?page=0&size=5` still 200 with the joined row, an unknown id 99999 now returns 400 `Customer Id Invalid`, the executive-username fetch with the new manager join 200, JWT login and Bearer reads 200, and the filter, status stat, by-priority, and job-title stat endpoints 200.
- Known issue: none; kept the trainer's style and comments as shown.

**Mockito Save Ticket Test**

- Added `saveTest` to `TicketServiceTest`: stubs `customerRepository.getByUsername("john")` to return a `Customer` and `ticketRepository.save(any(Ticket.class))`, calls `add(customerUsername, ticketDto)` with a real `TicketDto`, then verifies each repository call happens exactly once - showing that a mocked save never touches the database while the call still flows through the service.
- Added his step-by-step `System.out.println` markers inside `TicketService.add` between the customer fetch, dto mapping, customer attach, OPEN status, and save steps, kept exactly as he left them from the session.
- Re-indented the invalid-id test method declaration to match the class style.
- Verified: `mvnw test` runs 4/4 green (`contextLoads`, both fetch tests, and the new save test, BUILD SUCCESS); live, a Bearer-authenticated ticket add still returns 200 (ticket 9 in today's filter), v1 and the customer read 200, status stat shows OPEN 9, and the unknown id still 400 `Customer Id Invalid`.
- Known issue: none; kept the trainer's style and comments as shown.

### 2026-10-15

**Standalone Helpdesk Repo — SonarCloud Cleanup and Plan Batch API** (source: `imtiyaz-hirani/helpdesk_backend` branch `main`, all 8 commits mirrored)

- The trainer stood up a **separate `helpdesk_backend` repo** for the SonarCloud session; all 8 of its commits are mirrored here on top of the existing helpdesk code.
- Initial import for SonarCloud adds the `sonar-maven-plugin` 5.8.0.7211 to `pom.xml` and an `assignExecutiveTest` in `TicketServiceTest` (mocks `executiveRepository.findById` and `ticketRepository.findById`/`save`, builds the manager ownership chain, verifies one call each) - test count now 5.
- **Secret handling**: the hardcoded `SECRET_KEY` in `JwtUtility` became `@Value("${jwt.secret}")` sourced from `application.properties`; the properties file was briefly removed from git, reinstated, and `.gitignore` gained `src/main/resources` entries.
- **Sonar low-priority fixes**: `SECRET_KEY` renamed to `secretKey`; login `issueTime` now `LocalDateTime.now(ZoneId.of("UTC"))`; `PlanType` constants uppercased (`BASIC_10MBPS` ... `ENTERPRISE_1MBPS`, kept exactly as he renamed them).
- **Loggers**: `TicketService` gets `@Slf4j` with `log.info` replacing the step-by-step `System.out.println` markers; `GlobalExceptionHandler` gets an SLF4J logger with `log.warn` on not-found and per-field validation failures.
- **Plan add in batch**: new `POST /api/plan/batch/add` restricted to `hasAuthority("ADMIN")` accepts a `List<PlanDto>` (planName, planType, price with validation), maps through the new `PlanMapper`, and saves via the new `PlanService` (`@Transactional(rollbackFor = Exception.class)`) and `PlanRepository`; the `Plan` entity gains a non-null `planName` column, a catch-all `@ExceptionHandler(Exception.class)` was added, and `SecurityConfig` gets `@EnableTransactionManagement`.
- Verified: `mvnw test` 5/5 green (BUILD SUCCESS); live, ticket add and reads still 200, admin batch insert returns 200 and lands two rows in `plan`, CUSTOMER token on the batch endpoint 403, bad enum value 400 through the new catch-all handler, login `issueTime` now UTC, and the unknown customer id still 400 `Customer Id Invalid`.
- Known issue: none; kept the trainer's style, comments, and naming exactly as committed.

Commits (branch `spring-boot`, source `imtiyaz-hirani/helpdesk_backend`): `dbc6461` Add initial commit for SonarCloud; `c546ecd` Add secret transferred to properties; `6a19f31` Add secrets fixed - properties removed from git; `2cd4ba9` Add properties reinstated; `383a0d2` Add variable renamed; `0f4cd62` Add low priority codes fixed for Sonar; `756c89c` Add loggers added; `c444e12` Add plan add in batch; `d4044e3` Update journal for SonarCloud cleanup and plan batch training.

### 2026-10-23

**JS Fundamentals: Variables and Functions** (source: `imtiyaz-hirani/hex_fsd_sept-2026` branch `JS-fundamentals`, commit `d1183a5`, all 3 files byte-identical to the trainer's blobs)

- Started the HTML, CSS, and JavaScript module with the trainer's new `JS-fundamentals` branch, created from his `spring-boot` branch just as this branch was created from `spring-boot` here.
- Added the `js-fundamentals` Node project with the trainer's default `package.json`.
- Added `src/01-variables.js`: `const storeName` and `let visitors` with `typeof` output, `visitors = visitors + 10` value assignment, the commented-out `storeName` re-assignment showing a `const` variable cannot be re-assigned, and the template literal `the store ${storeName} has ${visitors} visitors`.
- Added `src/02-functions.js`: the standard `addTax(amount)` returning `amount * 1.18`, the `addTaxArrow` arrow function, the commented-out `bill` function replaced by an arrow function with a default `discount = 10` parameter that composes `addTaxArrow`, and `areaCircle` / `areaOfCircle` computed from the `pi` constant.
- Verified: `node js-fundamentals/src/01-variables.js` and `node js-fundamentals/src/02-functions.js` both exit 0 (string and number types, visitors 10, bill 1180, final bill 1062, area of circle 314 in both forms).
- Known issue: none; kept the trainer's style, comments, naming, and spacing exactly as committed, including the implicit global `str_output`.

**JS Fundamentals: Objects and Arrays - Find and Filter** (source: `imtiyaz-hirani/hex_fsd_sept-2026` branch `JS-fundamentals`, commit `1501911`, both files byte-identical to the trainer's blobs)

- Added `src/03-objects.js`: the `product` object literal (id, name, price, category), a clone taken with the spread operator `const prod = {...product}`, the 10% discount `product.price = product.price * 0.9`, and the console output showing the original dropped to 18000 while the clone keeps 20000.
- Added `src/04-arrays.js`: the `products` array of 10 mobile objects, `forEach` iteration, a spread clone of the array, the `find` operation for `id = 205` printing `product with id : 205 does not exist`, and the `filter` operation printing `No matching products`, kept exactly as he wrote them.
- Verified: both scripts run on Node v22.14.0 with exit 0 (`id is 1 Price is 18000`, clone at 20000, all 10 products printed, `product with id : 205 does not exist`, `No matching products`).
- Known issue: none; kept the trainer's style, comments, naming, and spacing exactly as committed - including his `// display products having price > 20000` comment sitting above a `p.price > 30000` filter, which is why nothing matches.

**JS Fundamentals: Map and Reduce** (source: `imtiyaz-hirani/hex_fsd_sept-2026` branch `JS-fundamentals`, commit `cd5fed5`, file byte-identical to the trainer's blob)

- Mirrored his commit `cd5fed5` `JS Fundamentals: map and reduce` in `src/04-arrays.js`: he normalized the spacing (`p=> p` to `p => p`, ternaries re-indented), added the `map op` section building `nameArry` of names and a mapped `Product : ${p.name} , with price= ${p.price}` string list, and added the `reduce op` section summing every price with `products.reduce((sum, p) => sum + p.price, 0)`.
- Verified: `node js-fundamentals/src/04-arrays.js` exits 0 - all 10 names printed, all 10 `Product :` lines printed, `Total price: 180991`.
- Added `src/05-reduce-practice.js` solving the comment he left open (`// display products having price > 20000`) with `reduce` instead of `filter`: an accumulator array collecting the matches, a `reduce` count, and a `reduce` total of just those prices - using his stated 20000 threshold rather than the 30000 in the code.
- Verified: `node js-fundamentals/src/05-reduce-practice.js` exits 0 - PCO X5 Pro 22999 and Infinix Zero 30 21999 printed, `Products above 20000 : 2`, `Total price of products above 20000: 44998`.
- Known issue: none; the mirrored file is byte-identical to his, and the `reduce` solution lives in its own practice file so the trainer's code is untouched.

**JS Fundamentals: Course Case Study (learning-app)** (source: `imtiyaz-hirani/hex_fsd_sept-2026` branch `JS-fundamentals`, commit `3d3274c`, all 5 files byte-identical to the trainer's blobs)

- Mirrored his commit `3d3274c` `JS Fundamentals: course case study`: `package.json` gains `"type": "module"` (and ends without a newline, exactly as he saved it), and `src/04-arrays.js` gains his closing comment `// Compute the max price of the products in the array.` - left as he left it, no code added under it.
- Added the `src/learning-app/` ES-modules case study: `courses.mjs` with 10 courses (fee, instructor, category) exported as `courseData`, `courseUtil.mjs` exporting `displayAllCourses`, `getById`, `getCoursesByInstructor`, `totalFee`, `countCoursesByCategory`, `deleteCourse`, and `sortByFee` (ASC/DESC ternary chain), and `app.mjs` importing both and driving every util.
- Kept his style as written: arrow-function exports, `filter(...).reduce((count, e) => count + 1, 0)` for the category count, the in-place `courses.sort(...)` inside `sortByFee`, the `instrucutor` typo in his console label, and the unused `coursesClone`.
- Verified: `node js-fundamentals/src/learning-app/app.mjs` exits 0 - `getById(courses, 2)` returns Python for Data Science, `Number of courses for web dev category 3`, `Fee for all courses 237000`, the delete of id 1 leaves 9 courses in the after-delete listing, and `sortByFee(courses, 'DESC')` puts Machine Learning Fundamentals (35000) first.
- Known issue: `sortByFee` mutates the array it is given (his `courses.sort`), so the original `courses` is re-ordered after the sort call; kept exactly as he wrote it.

Commits (branch `JS-fundamentals`): `906a396` JS Fundamentals: variables + Functions; `7557e19` Update journal for JS fundamentals training; `70888e2` JS Fundamentals: objects + arrays find and filter; `935e9b3` Update journal for JS objects and arrays training; `1b7bf1d` JS Fundamentals: map and reduce; `73aec3a` Add reduce practice for price filter comment; `e889f9a` Update journal for JS map and reduce training; `788fc80` JS Fundamentals: course case study; `9e8e16a` Update journal for JS course case study training.

### 2026-10-25

**Max Price Reduce Practice** (own practice on `JS-fundamentals`, no trainer commit)

- Solved the comment he left open at the end of `src/04-arrays.js`, `// Compute the max price of the products in the array.`, inside `src/05-reduce-practice.js` with `reduce`: `products.reduce((max, p) => (p.price > max ? p.price : max), products[0].price)` returns the number, and a second reduce with the same shape keeps the whole product instead.
- The mirrored `04-arrays.js` is untouched and byte-identical to his - the comment stays unanswered in his file, as with the price filter practice.
- Verified: `node js-fundamentals/src/05-reduce-practice.js` exits 0 - `Max price: 22999` and `Product with max price: PCO X5 Pro , price= 22999` printed after the earlier filter, count, and total output.

Commits (branch `JS-fundamentals`): `a4dc24d` Add reduce practice for max price comment; `ec0f17d` Update journal for max price reduce practice.

### 2026-10-26

Commits (branch `react`): `4fe0a74` react project setup; `e2e738a` Keep local Postman workspace files ignored.

**React Project Setup** (branch `react`, mirrors his commit `a38d61a`)

- He started a new trainer branch `react`, forked from his `JS-fundamentals` line at `1501911` (the objects + arrays commit, not the branch tip); the journal's `react` branch was created from this branch's own tip `139e9e0` so the map/reduce, course case study, and practice work all stay reachable.
- Mirrored his commit `a38d61a` `react project setup` (pushed 2026-10-26 10:22:11 +0530), 17 files, all byte-identical: the root `.gitignore` (Vite template - `logs`, `*.log`, `react-ui/node_modules`, `dist`, `*.local`, `.vscode/*`, `.idea`, `.DS_Store`) and the `react-ui/` Vite + React 19 scaffold - `package.json` with `react` ^19.3.1, `react-dom` ^19.3.1, `vite` ^8.3.4, `@vitejs/plugin-react` ^6.1.2, `eslint` ^10.13.0 and the `dev`/`build`/`lint`/`preview` scripts, the 2447-line `package-lock.json`, `vite.config.js`, `eslint.config.js` (flat config), `index.html`, `public/` icons, and `src/` with `main.jsx`, `App.jsx`, `App.css`, `index.css`, and `assets/`.
- His `App.jsx` is the first component: `const App = () => { //component` returning `<h1>My react app</h1>`, `<p>Your full array:{nums}</p>`, and the array `[1,4,7,2,3,8,9,6,4]` iterated with `nums.map((n,index)=>(<li key={index}>{n}</li>))` - kept exactly as written, including the `<li>` with no wrapping `<ul>`.
- Root `.gitignore` clash: his commit *adds* a root `.gitignore` where the journal already had its own (from `ea2b587`), so his file replaced ours byte-identical per the mirror rule. The Postman protection that rule carried was re-homed into `postman/.gitignore` and `.postman/.gitignore` (`*` plus `!.gitignore`) in the follow-up commit `e2e738a`, and the remaining IDE-only rules (`out/`, `bin/`, Eclipse `.classpath`/`.project`/`.settings`) were moved to the local `.git/info/exclude`.
- Verified: `git diff trainer/react HEAD -- .gitignore react-ui` is empty (blobs byte-identical); `npm ci` in `react-ui/` installs 143 packages; `npm run build` succeeds (`built in 3.55s`, `dist/assets/index-e6QXcESr.js` 219.68 kB); `npm run lint` exits 0; `git status` stays clean because his ignore rules cover `dist/` and `node_modules`, and `git add -A --dry-run` now stages only the three intentionally-untracked files.
- Known issues: his `main.jsx` never imports `./index.css` and `App.jsx` never imports `./App.css`, so the template styling will not render until he adds the imports (mirrored as-is); `postman/` and `.postman/` content is protected only by the new nested files, not by the root `.gitignore` any more.

## Repository Information

- Owner: Kishore Muruganantham
- Training: Hexaware Technologies
- Language: Java
- Java version: 21
- Visibility: Private
