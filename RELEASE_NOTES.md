# Release Notes

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
