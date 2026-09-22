USE fsd_hex_sept_2026;

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
CALL emp_name_by_department('ADMIN');