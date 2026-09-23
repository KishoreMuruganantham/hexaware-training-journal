# Release Notes

## 0.8.2 - 2026-09-23

### Fixed

- Added Java project metadata for `JavaFundamentals` to prevent duplicate `com.model.Employee` resolution when the parent folder contains both projects.

### Verified

- Java 21 compilation passed.
- The salary-sorting application ran successfully.

## 0.8.1 - 2026-09-23

### Fixed

- Corrected the salary sort output heading from ASC to DESC.
- Replaced subtraction-based salary comparison with `Double.compare`.

### Verified

- Java Fundamentals compiled and ran successfully with Java 21.
- Descending output starts at `140000.0` and ends at `51000.0`.

## 0.8.0 - 2026-09-23

### Added

- Separate `JavaFundamentals` project for the trainer's collections exercise.
- Employee model, DAO, service, and enum classes.
- Salary sorting with ascending and descending directions using a lambda expression.
- Empty `CollectionsApp` starter class from the trainer's exercise.

### Verified

- Java Fundamentals project compiled with Java 21.
- Application printed all 20 employees and sorted them by salary in descending order.
- Existing e-commerce Java project continued to compile successfully.

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
