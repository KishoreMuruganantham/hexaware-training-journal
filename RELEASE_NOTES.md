# Release Notes

## 0.10.22 - 2026-10-14

### Changed

- Recorded the 2026-10-14 Mockito ticket-test training from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.21 - 2026-10-13

### Changed

- Recorded the 2026-10-13 JWT authentication training from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.20 - 2026-10-12

### Changed

- Recorded the 2026-10-12 Spring Security and ownership-check training from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.19 - 2026-10-09

### Changed

- Recorded the 2026-10-09 group-by, derived-query, and dynamic-filter training from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.18 - 2026-10-08

### Changed

- Recorded the 2026-10-08 customer-plan scaffolding training from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.17 - 2026-10-08

### Changed

- Recorded the 2026-10-08 executive-username fetch training from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.16 - 2026-10-08

### Changed

- Recorded the 2026-10-08 ticket API training from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.15 - 2026-10-07

### Changed

- Recorded the 2026-10-07 customer-update training from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.14 - 2026-10-07

### Changed

- Recorded the 2026-10-07 customer-user training from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.13 - 2026-10-07

### Changed

- Recorded the 2026-10-07 manager-flow training from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.12 - 2026-10-07

### Changed

- Recorded the 2026-10-07 executive-user training from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.11 - 2026-10-07

### Changed

- Recorded the 2026-10-07 validation trainings from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.10 - 2026-10-07

### Changed

- Recorded the 2026-10-07 executive-validation training from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.9 - 2026-10-06

### Changed

- Regrouped the training history to one heading per date with that day's commits listed; no entries added, removed, or reworded.
- No source code changed on `main`.

## 0.10.8 - 2026-10-06

### Changed

- Recorded the 2026-10-06 error-DTO training from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.7 - 2026-10-06

### Changed

- Recorded the 2026-10-06 global-handler training from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.6 - 2026-10-06

### Changed

- Recorded the 2026-10-06 customer CRUD API training from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.5 - 2026-10-06

### Changed

- Recorded the 2026-10-06 Spring Boot backend training from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.4 - 2026-10-05

### Changed

- Recorded the 2026-10-05 ticket-fetch training from the `hibernate-jpa` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.3 - 2026-10-05

### Changed

- Recorded the 2026-10-05 ticket-creation training from the `hibernate-jpa` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.2 - 2026-10-05

### Changed

- Recorded the 2026-10-05 executive-insert training from the `hibernate-jpa` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.1 - 2026-10-02

### Changed

- Rewrote `README.md` with the full module plan, branch guide, per-branch project structure, run commands, validation summary, and consolidated training history.
- No source code changed.

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
