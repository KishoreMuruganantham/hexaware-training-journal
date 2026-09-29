CREATE DATABASE fsd_hex_sept_2026;
USE fsd_hex_sept_2026;

CREATE TABLE employee(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    branch ENUM('CHENNAI', 'MUMBAI', 'NEW YORK'),
    city VARCHAR(255),
    department ENUM('ADMIN', 'DEV', 'FINANCE')
);

INSERT INTO employee(name, branch, city, department) VALUES
    ('harry potter', 'MUMBAI', 'london', 'DEV'),
    ('ronald weasley', 'MUMBAI', 'london', 'ADMIN'),
    ('hermione granger', 'CHENNAI', 'surrey', 'FINANCE');

ALTER TABLE employee
MODIFY department ENUM('ADMIN', 'DEV', 'FINANCE');

ALTER TABLE employee
ADD COLUMN joining_date DATE,
ADD COLUMN salary DOUBLE;

UPDATE employee SET joining_date = CURDATE(), salary = 67000 WHERE id = 1;
UPDATE employee SET joining_date = CURDATE(), salary = 56000 WHERE id = 2;
UPDATE employee SET joining_date = CURDATE(), salary = 167000 WHERE id = 3;

DROP PROCEDURE IF EXISTS all_emp;
DELIMITER $$
CREATE PROCEDURE all_emp()
BEGIN
    SELECT * FROM employee;
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS emp_by_department;
DELIMITER $$
CREATE PROCEDURE emp_by_department(IN p_dept VARCHAR(255))
BEGIN
    IF p_dept = '' THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'department should not be empty';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM employee WHERE department = p_dept) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Invalid value of department given';
    END IF;

    SELECT *
    FROM employee
    WHERE department = p_dept;
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS emp_name_by_department;
DELIMITER $$
CREATE PROCEDURE emp_name_by_department(IN p_dept VARCHAR(255))
BEGIN
    IF p_dept = '' THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'department should not be empty';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM employee WHERE department = p_dept) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Invalid value of department given';
    END IF;

    SELECT name
    FROM employee
    WHERE department = p_dept;
END$$
DELIMITER ;

CALL emp_by_department('ADMIN');
CALL emp_by_department('HR');
CALL emp_by_department('');

DELIMITER $$
CREATE PROCEDURE update_emp_branch(IN p_id INT, IN p_branch VARCHAR(255))
BEGIN
    IF NOT EXISTS (SELECT 1 FROM employee WHERE id = p_id) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Please provide valid id';
    END IF;

    IF p_branch = '' OR p_branch IS NULL THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Please provide branch value';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM employee WHERE p_branch IN ('CHENNAI', 'MUMBAI', 'NEW YORK')) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Please provide valid branch value';
    END IF;

    UPDATE employee
    SET branch = p_branch
    WHERE id = p_id;
END$$
DELIMITER ;

CALL update_emp_branch(8, 'NEW YORK');
CALL update_emp_branch(8, NULL);
CALL update_emp_branch(10, 'LONDON');

DELIMITER $$
CREATE PROCEDURE cnt_emp_by_dept(IN p_dept VARCHAR(255), OUT p_cnt INT)
BEGIN
    SELECT COUNT(id)
    INTO p_cnt
    FROM employee
    WHERE department = p_dept;
END$$
DELIMITER ;

CALL cnt_emp_by_dept('ADMIN', @count_num);
SELECT @count_num;

SELECT * FROM employee;

-- views (hide attributes / columns & rows/records)

CREATE VIEW v_emp AS
SELECT id, name, branch, department
FROM employee
WHERE department NOT IN ('ADMIN')
WITH CHECK OPTION;

SHOW TABLES;

DROP VIEW v_emp;

UPDATE v_emp_dev
SET department = 'FINANCE'
WHERE id = 7;

CREATE VIEW v_emp_dev AS
SELECT *
FROM employee
WHERE department = 'DEV'
WITH CHECK OPTION;

DROP VIEW v_emp_dev;

-- Trigger Case study : Ecom proj

CREATE TABLE product(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    price DOUBLE,
    stock_qty INT
);

CREATE TABLE orders(
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    order_qty INT
);

INSERT INTO product(id, title, price, stock_qty) VALUES
    (1, 'Some headphones', 540, 3),
    (2, 'Some laptop', 45540, 1);

-- Trigger 1: Check stock quantity before inserting into orders.
DELIMITER $$
CREATE TRIGGER trg_check_stock_qty
BEFORE INSERT ON orders
FOR EACH ROW
BEGIN
    DECLARE v_stock_qty INT;

    IF NOT EXISTS (SELECT 1 FROM product WHERE id = NEW.product_id) THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Product id invalid';
    END IF;

    SELECT stock_qty INTO v_stock_qty
    FROM product
    WHERE id = NEW.product_id;

    IF v_stock_qty < NEW.order_qty THEN
        SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Stock not available';
    END IF;
END$$
DELIMITER ;

-- Trigger 2: Update the available product stock after an order.
DELIMITER $$
CREATE TRIGGER trg_update_product_stock_qty
AFTER INSERT ON orders
FOR EACH ROW
BEGIN
    UPDATE product
    SET stock_qty = stock_qty - NEW.order_qty
    WHERE id = NEW.product_id;
END$$
DELIMITER ;

INSERT INTO orders(product_id, order_qty) VALUES (1, 2);

-- Group By
-- Display number of employees in each department.

SELECT department, COUNT(id) AS no_of_emp
FROM employee
GROUP BY department;