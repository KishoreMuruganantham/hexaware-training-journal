# Release Notes

## 0.39.0 - 2026-10-23

### Added

- New `JS-fundamentals` branch holding the trainer's first JavaScript commit `d1183a5` (`JS Fundamentals: variables + Functions`): the `js-fundamentals` Node project with `src/01-variables.js` (`const`/`let`, `typeof`, value assignment, template literal) and `src/02-functions.js` (standard function, arrow functions, default discount parameter, circle area).

### Verified

- Both scripts run on Node v22.14.0 with exit 0: visitors 10, `My total bill is 1180` from both forms, `Final bill is 1062`, and ` Area of circle is 314` from both forms.

## 0.38.0 - 2026-10-15

### Added

- Mirrored all 8 commits of the trainer's new standalone `helpdesk_backend` repo: the SonarCloud import (`sonar-maven-plugin`, `assignExecutiveTest`), the JWT secret moved to `application.properties` via `@Value("${jwt.secret}")`, Sonar low-priority fixes (field rename, UTC login timestamp, uppercased `PlanType` constants), SLF4J loggers replacing printlns, and the ADMIN-only `POST /api/plan/batch/add` with `PlanDto`, `PlanMapper`, `PlanService` (`@Transactional`), `PlanRepository`, a `planName` column, and a catch-all exception handler.

### Verified

- `mvnw test` 5/5 green; live smoke: ticket reads/writes 200, admin batch insert 200 (two `plan` rows), CUSTOMER token 403 on the batch endpoint, bad enum 400 via the catch-all handler, UTC login timestamps.

## 0.37.0 - 2026-10-14

### Added

- `saveTest` in `TicketServiceTest`: mocked `getByUsername` and `save` with `times(1)` verification around `TicketService.add`, covering the write path with stubs instead of a database.
- Step-by-step `System.out.println` markers in `TicketService.add`, kept as shown.

### Verified

- `mvnw test` 4/4 green and the live ticket add and reads re-exercised (outputs in history).

## 0.36.0 - 2026-10-14

### Added

- Mockito unit tests for the ticket fetch: `TicketServiceTest` with `@Mock` repositories and an `@InjectMocks` service covering the happy path (size assertions plus `times`/`verifyNoMoreInteractions` checks) and the invalid-id `assertThrows` case; `assertEquals` in `contextLoads`.

### Changed

- `getTicketsByCustomerId` validates the customer id first and throws `ResourceNotFoundException` for unknown ids, and the executive-username ticket query joins the manager.

### Verified

- `mvnw test` 3/3 green and live endpoints re-exercised (outputs in history).

## 0.35.0 - 2026-10-13

### Added

- JWT authentication: `JwtUtility` mints HS256 tokens with a 24-hour expiry, `GET /api/auth/login` issues a `TokenDto` after the HTTP Basic login, and a `JwtFilter` in front of the Spring auth filter turns `Authorization: Bearer` tokens into authenticated sessions carrying the user's authorities.
- `jjwt` 0.9.1 with jaxb-api and jaxb-runtime dependencies in `pom.xml`.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.34.0 - 2026-10-12

### Added

- Spring Security wiring: security filter chain with HTTP Basic and CSRF disabled, BCrypt password encoding, DB-backed user details service, and role rules for the customer, manager, executive, and admin flows.
- Admin onboarding API (`POST /api/admin/add`) and an ownership check on ticket assignment that rejects another manager's executive, plus the trainer's `HelpDesk` Postman collection at the repository root.
- Ticket add and executive add now resolve the customer or manager from the logged-in `Principal` instead of a path id.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.33.0 - 2026-10-09

### Added

- Group-by stats: executives per job title with a job-title update API, and ticket status with customer counts.
- Derived query methods `findByPriority`, `findByStatus`, `findByPriorityAndStatus` with `GET /api/ticket/by-priority`.
- Dynamic filter API `GET /api/ticket/filter` with optional priority, status, and date range.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.32.0 - 2026-10-08

### Changed

- Regrouped the training history to one heading per date with that day's commits listed; no entries added, removed, or reworded.
- No source code changed.

## 0.31.0 - 2026-10-08

### Added

- Customer plan case study scaffolding with entities and assignment stubs.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.30.0 - 2026-10-08

### Added

- Ticket fetch by executive username with `TicketInfoDtoV2` and optional pagination.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.29.0 - 2026-10-08

### Added

- Ticket POST, executive assign, and paginated fetch by customer id and username.
- `TicketInfoDto` joined DTO with optional pagination.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.28.0 - 2026-10-07

### Added

- Customer update API with partial name/city update and `InvalidCallException`.
- `CustomerUpdateDto`, `updatedAt` timestamp on customer.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.27.0 - 2026-10-07

### Added

- Customer POST with linked user creation (`CustomerDto`, `CustomerMapper`, user link).
- `User` model updates and service wiring.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.26.0 - 2026-10-07

### Added

- Manager POST flow with linked user (`Manager`, `ManagerDto`, `ManagerMapper`, `ManagerRepository`, `ManagerService`).
- Executive POST now takes the manager id in the path and validates it.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.25.0 - 2026-10-07

### Added

- Executive POST with linked user creation (`User`, `Role`, `UserRepository`, `UserService`).
- `@OneToOne` executive-user link; username/password fields with validations.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.24.0 - 2026-10-07

### Added

- Validation errors refined to a field-to-message map in the global handler.
- Contact-field messages corrected in `ExecutiveDto`.

### Verified

- Rebooted and exercised live: invalid POST returns the clean field map with 400.
- Files byte-identical to the trainer's commit.

## 0.23.0 - 2026-10-07

### Added

- Executive POST API with bean validation (`ExecutiveDto`, `@Valid`, mapper, entity, repository, service).
- Port note in properties; `@Repository` on customer repository.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.22.0 - 2026-10-06

### Added

- Error DTO response object with `ResponseEntity` for invalid ids.

### Verified

- Rebooted and exercised live (outputs in history).

## 0.21.0 - 2026-10-06

### Added

- Global exception handler mapping invalid ids to 400 with the message.
- Delete validates the id before removing.

### Verified

- App rebooted and all paths exercised live: valid ids 200, missing ids 400 with message.
- Files byte-identical to the trainer's commit.

## 0.20.0 - 2026-10-06

### Added

- Basic customer CRUD APIs with `ResourceNotFoundException`.
- GET all, GET by id, and DELETE endpoints.

### Verified

- App boots with Tomcat on port 8080; all four endpoints exercised live (outputs in history).

## 0.19.0 - 2026-10-06

### Added

- `helpdesk_backend` Spring Boot project with customer POST API.
- `Customer` entity, `JpaRepository`, service, and controller.
- Datasource properties with auto-created `helpdesk_db`.

### Verified

- Maven bootstrapped through `mvnw`; project compiles on Java 21.
- App boots with Tomcat on port 8080; POST returns HTTP 200 with the saved record (run output recorded in history).

## 0.18.0 - 2026-10-05

### Added

- Ticket fetch with DTO mapping (`TicketRespDto`, `TicketMapper`, V1/V2 repository queries).

### Verified

- All touched files byte-identical to the trainer's commit.
- `javac` on Java 21 shows only missing JPA/Spring/Hibernate dependency errors, no syntax errors.
- App run needs Maven, Hibernate/Spring jars, and MySQL; not run here.

## 0.17.0 - 2026-10-05

### Added

- Ticket creation flow with customer validation and `OPEN` status.
- `TicketService`, `TicketRepository`, `TicketController`, customer lookup.

### Verified

- All touched files byte-identical to the trainer's commit.
- `javac` on Java 21 shows only missing JPA/Spring/Hibernate dependency errors, no syntax errors.
- App run needs Maven, Hibernate/Spring jars, MySQL, and the seeded customer row; not run here.

## 0.16.0 - 2026-10-05

### Added

- Full executive insert flow with manager validation, user persist and re-fetch, and executive persist.
- `UserRepository`, `ResourceNotFoundException`, model updates.

### Verified

- All touched files byte-identical to the trainer's commit.
- `javac` on Java 21 shows only missing JPA/Spring/Hibernate dependency errors, no syntax errors.
- App run needs Maven, Hibernate/Spring jars, and MySQL; not run here.

## 0.15.0 - 2026-10-05

### Added

- `ExecutiveService` with step-commented `insertExecutive`.
- `ExecutiveRepository` and `ExecutiveController` starter.
- Datasource bean restructured to constructor style.
- `helpdesk.mwb` Workbench model.

### Verified

- New files byte-identical to the trainer's commit.
- `javac` on Java 21 shows only missing JPA/Spring/Hibernate dependency errors, no syntax errors.
- App run needs Maven, Hibernate/Spring jars, and MySQL; not run here.

## 0.14.0 - 2026-10-01

### Added

- `HibernateJpaApp` Maven project with Hibernate and Spring dependencies.
- `AppConfig` with entity manager factory, transaction manager, and datasource.
- `Customer` entity with JPQL repository insert and fetch.
- `User` model and all helpdesk entities with enums.

### Verified

- `pom.xml` well-formed; `javac` on Java 21 shows only missing JPA/Spring/Hibernate dependency errors, no syntax errors.
- App run needs Maven, Hibernate/Spring jars, and MySQL; not run here.

## 0.13.0 - 2026-09-30

### Added

- `SpringCoreHelpDesk` case study with models, enums, repositories, and services.
- Customer sign-up insertion and fetch operations with mappers.

### Verified

- `pom.xml` well-formed; `javac` on Java 21 shows only missing Spring/HikariCP dependency errors, no syntax errors.
- App run needs Maven, Spring jars, and MySQL; not run here.

## 0.12.0 - 2026-09-29

### Added

- `SpringCoreApp` Maven project with Spring dependencies.
- `AppConfig` context loading, DAO/service beans, setter autowiring variants.
- In-method injection, custom bean definition, HikariCP datasource with `JdbcTemplate`.
- `joining_date`/`salary` columns, seed values, and `GROUP BY` queries in `pl-sql.sql`.

### Verified

- `pom.xml` well-formed; `javac` on Java 21 shows only missing Spring/HikariCP dependency errors, no syntax errors.
- App run needs Maven, Spring jars, and MySQL; not run here.

## 0.11.0 - 2026-09-28

### Added

- `MavenDemo` Maven project with JUnit dependencies.
- `DemoService` with validations, custom exceptions, and test cases.
- Stream test cases for `EmployeeService` with model, enums, and tests.
- DTO test case with `EmployeeRespDto` and `EmployeeMapper`.

### Verified

- `pom.xml` well-formed; all main sources compile with `javac` on Java 21: MAIN_BUILD_EXIT=0.
- `mvn test` not run here: Maven and JUnit jars are not installed in this environment.

## 0.10.0 - 2026-09-25

### Added

- Singleton `DBConnection` shared by `CustomerDao`, `OrderDao`, and `ProductDao`.
- `Customer` bean and `HeapDemo` heap/stack demo.
- Factory pattern payments (`PaymentFactory` with Neft, RTGS, UPI, PhonePe, GooglePay, PayTM).

### Verified

- `javac` on Java 21: BUILD_EXIT=0.
- `HeapDemo`, `com.design_pattern.App`, `com.factory.design_pattern.App`: RUN_EXIT=0.
- Existing JDBC project still compiles: JDBC_BUILD_EXIT=0.

## 0.9.0 - 2026-09-24

### Added

- Department employee-count grouping (`EmpDeptStatDto`, `Collectors.groupingBy`).
- `MapDemo` HashMap example.
- Department count mapped to DTO list.
- Branch salary totals (`EmployeeSalaryStatDto`, `Collectors.summingDouble`) and total salary computation.
- `Comparable` default sort by joining date on `Employee`.
- OOPs payment hierarchy with `PaymentMode`, `PaymentUtil`, and demo starters.

### Verified

- `javac` on Java 21: BUILD_EXIT=0.
- `java com.main.App`: RUN_EXIT=0, department stats, branch salary stats, total salary 1680000.0.
- `MapDemo`, `OOPDemo`, `IsADemo`: RUN_EXIT=0.

## 0.8.9 - 2026-09-23

### Added

- Java fundamentals collections exercise (`JavaFundamentals` project).
- `Branch`, `Department`, and `SortDirection` enums.
- `Employee` model with salary field.
- `EmployeeDao` with 20 sample employees.
- `EmployeeService` with lambda salary sorting, stream filters, name listing, and DTO mapping.
- `EmployeeRespDto` record and `EmployeeMapper`.
- `App` entry point printing the DTO list.
- IntelliJ project metadata for `JavaFundamentals`.

### Verified

- `javac` on Java 21: BUILD_EXIT=0.
- `java com.main.App`: RUN_EXIT=0, printed 20 `EmployeeRespDto` records.
- Existing JDBC project still compiles: JDBC_BUILD_EXIT=0.
- MySQL reachable on `localhost:3306`; fundamentals run needs no database.

## 0.7.0 - 2026-09-22

### Added

- MySQL Workbench ER model `ecom_sample.mwb`.
- E-commerce schema with six tables and six foreign-key relationships.

### Verified

- Forward-engineered schema `ecom_sample_db` successfully.
- Confirmed `users`, `customer`, `vendor`, `category`, `product`, and `customer_product` exist.

## 0.6.0 - 2026-09-22

### Added

- Product and order tables for the e-commerce trigger case study.
- `trg_check_stock_qty` for pre-insert product and stock validation.
- `trg_update_product_stock_qty` for post-insert stock updates.
- A valid sample order demonstrating the trigger flow.

### Fixed

- Ordered the trigger setup so tables and triggers can execute without duplicate-key or delimiter errors.

## 0.5.0 - 2026-09-22

### Added

- Java support for the `cnt_emp_by_dept` stored procedure and its OUT parameter.
- SQL view examples `v_emp` and `v_emp_dev` with `WITH CHECK OPTION`.

### Changed

- Updated the application to use the DEV department and display its employee count.
- Commented database connection status output to match the trainer's implementation.

## 0.4.0 - 2026-09-22

### Changed

- Aligned DAO, service, application, and PL/SQL names with the trainer's commits.
- Restored `getEmployeeNamesByDepartment` as the trainer's placeholder method.
- Added the missing schema, sample data, `update_emp_branch`, and `cnt_emp_by_dept` exercises.
- Removed the completed employee-name implementation that was not present in the trainer's commit.

## 0.3.0 - 2026-09-22

### Added

- `pl-sql.sql` with validated department and employee-name stored procedures.
- Parameterized department retrieval in the DAO and service layers.
- Employee-name retrieval support for a department.

### Changed

- Updated the application to demonstrate department-based employee retrieval.
- Updated the README with the PL/SQL workflow.

## 0.2.0 - 2026-09-21

### Added

- Employee model with database field mapping and string representation.
- Customer DAO for calling the `all_emp()` MySQL stored procedure.
- Customer service layer for employee retrieval.

### Changed

- Updated the application entry point to retrieve and print employees.
- Updated `DBConnection.dbConnect()` to return the active JDBC connection.
- Updated project documentation and training history.

## 0.1.0 - 2026-09-21

### Added

- Java 21 project structure.
- MySQL database connection utility.
- Application entry point for testing the database connection.
- MySQL Connector/J 9.1.0 dependency.
- Training journal README and project diagram.
- Private repository documentation and licensing.
