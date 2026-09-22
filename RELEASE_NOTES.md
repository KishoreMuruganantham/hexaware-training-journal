# Release Notes

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
