# Release Notes

## 0.10.41 - 2026-10-29

### Changed

- Recorded his `Dashboard hack check` (`9e83b76`) mirror on the `helpdesk-ui` branch in the 2026-10-29 history section: role-based dashboard navigation with the JWT carried in the URL path (`customer/:token`, `admin/:token`), the new `CustomerDashboard`/`AdminDashboard` components, and the token-match guard + logout.
- Updated the `helpdesk-ui` branch guide row to `956700d` (9 new commits, dates through 2026-10-29) and extended the release history to `v0.54.0` on `helpdesk-ui` and `v0.10.41` on `main`.
- No source code changed on `main`.

## 0.10.40 - 2026-10-29

### Changed

- Recorded his `login API+UI- e2e` (`054af35`) mirror on the `helpdesk-ui` branch in the 2026-10-29 history section: the two-step login flow (Basic token, then Bearer user-details with role switch and error display) and the matching backend (`/api/auth/user-details`, CORS for the Vite dev server, `InactiveUserException` + 412 handler).
- Updated the `helpdesk-ui` branch guide row to `983c044` (6 new commits, dates through 2026-10-29) and extended the release history to `v0.53.0` on `helpdesk-ui` and `v0.10.40` on `main`.
- No source code changed on `main`.

## 0.10.39 - 2026-10-28

### Changed

- Recorded his `get api` (`b6ef0f6`) and `post api call` (`4c40e4f`) mirrors on the `react` branch and the new `helpdesk-ui` branch with its initial setup commit (`9bb21fd`) in the 2026-10-28 history section.
- Added the `helpdesk-ui` branch guide row, updated the `react` row to `96062d9` (13 new commits, dates through 2026-10-28), and extended the release history to `v0.51.0` on `react`, `v0.52.0` on `helpdesk-ui`, and `v0.10.39` on `main`.
- No source code changed on `main`.

## 0.10.38 - 2026-10-28

### Changed

- Recorded his `Router added` commit (`f762785`) and the re-applied users case study layout (`e9fa705`) in a new 2026-10-28 history section, updated the `react` branch guide row to `34bcf9a` (9 mirrored commits, dates through 2026-10-28), and extended the release history to `v0.50.0` on `react` and `v0.10.38` on `main`.
- No source code changed on `main`.

## 0.10.37 - 2026-10-27

### Fixed

- Pinned every action in `.github/workflows/sonarcloud.yml` to a full commit SHA with a version comment (`actions/checkout` v6, `actions/setup-java` v5, `actions/cache` v5, `SonarSource/sonarqube-scan-action` v7), clearing SonarQube Cloud's `githubactions:S7637` finding against our own workflow and the Node 20 deprecation warning.

### Verified

- First analysis run `40501212862` uploaded 1030 ncloc and failed only on the Quality Gate (expected on a first analysis where all code is new); second run `40501956338` is green - `SonarQube Scan` succeeded in 1m 19s with Quality Gate **OK** on all five conditions (`new_reliability_rating`, `new_security_rating`, `new_maintainability_rating` = 1, `new_duplicated_lines_density` = 0.0% < 3, `new_security_hotspots_reviewed` = 100%).
- 6 issues remain open, all in the trainer's mirrored Java and never edited here: 3 `BLOCKER` `java:S2095` in `CustomerDao.java`, 2 `MAJOR` `java:S2159` in `EmployeeService.java`, 1 `MAJOR` `java:S2068` in `DBConnection.java` - recorded as known issues, excluded from the gate because they are not new code.

## 0.10.36 - 2026-10-27

### Added

- `.github/workflows/sonarcloud.yml`: SonarQube Cloud analysis on pushes to `main` and on manual dispatch - checkout with full history, JDK 21, scanner package cache, a `javac` compile step feeding `sonar.java.binaries`, and `SonarSource/sonarqube-scan-action@v7` with `SONAR_HOST_URL: https://sonarcloud.io` and `-Dsonar.qualitygate.wait=true` so a failed Quality Gate fails the job.
- `sonar-project.properties`: project key `KishoreMuruganantham_hexaware-training-journal`, organization `kishoremuruganantham`, `sonar.sources=.` with exclusions for build output, IDE files, and binary assets.
- The SonarQube Cloud token lives only in the repository Actions secret `SONAR_TOKEN` (set with `gh secret set`, validated against `api/authentication/validate`); nothing secret is committed.

### Verified

- Both Java source roots compile with javac 21 before scanning (`src` 5 classes with the MySQL driver, `JavaFundamentals` 42 classes, exit 0).
- The organization `kishoremuruganantham` and the project `KishoreMuruganantham_hexaware-training-journal` already exist in SonarQube Cloud (0 analyses before this release).

## 0.10.35 - 2026-10-27

### Changed

- Recorded his `users case study` commit (`5db0a6f`) and the own users case study dashboard implementation (`97f306d`) in the history, updated the `react` branch guide row to `295b881` (8 mirrored commits), and extended the release history to `v0.49.0`.
- No source code changed on `main`.

## 0.10.34 - 2026-10-27

### Changed

- Recorded the five remaining `react` branch commits (`state variables`, `reading input`, `iterating over object array`, `delete and add op in array`, `edit op`) in the history, updated the `react` branch guide row to `fcf396e`, added the 2026-10-27 history heading, and extended the release history to `v0.48.0`.
- No source code changed on `main`.

## 0.10.33 - 2026-10-26

### Changed

- Recorded the trainer's `multi component layout` commit (`6e0a902`) in the history, updated the `react` branch guide row, and extended the release history to `v0.47.0`.
- No source code changed on `main`.

## 0.10.32 - 2026-10-26

### Changed

- Recorded the trainer's new `react` branch and its `react project setup` commit (`a38d61a`) in the history, added a `react` row to the branch guide, and extended the release history to `v0.46.0`.
- No source code changed on `main`.

## 0.10.31 - 2026-10-25

### Changed

- Recorded the max price `reduce` practice solving the trainer's open comment from the `JS-fundamentals` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.30 - 2026-10-25

### Changed

- Recorded the `VIA_DTO` page serialization fix (`@EnableSpringDataWebSupport(pageSerializationMode = VIA_DTO)`) from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.29 - 2026-10-25

### Changed

- Recorded the 2026-10-25 ticket search case study (`GET /api/ticket/search` with priority + customer name, pagination, DTO response, and the `t.piority` startup fix) from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.28 - 2026-10-23

### Changed

- Recorded the 2026-10-23 JS course case study (`learning-app` ES modules) training from the `JS-fundamentals` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.27 - 2026-10-23

### Changed

- Recorded the 2026-10-23 JS map and reduce training, plus the `reduce` practice solving the trainer's open comment, from the `JS-fundamentals` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.26 - 2026-10-23

### Changed

- Recorded the 2026-10-23 JS objects and arrays find-and-filter training from the `JS-fundamentals` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.25 - 2026-10-23

### Changed

- Recorded the 2026-10-23 JS fundamentals variables and functions training from the `JS-fundamentals` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.24 - 2026-10-15

### Changed

- Recorded the 2026-10-15 SonarCloud cleanup and plan batch training from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

## 0.10.23 - 2026-10-14

### Changed

- Recorded the second 2026-10-14 Mockito save-ticket-test training from the `spring-boot` branch in the history and branch guide.
- No source code changed on `main`.

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
