SELECT MAX(MAX_SALARY) FROM jobs;

SELECT MAX(MAX_SALARY) - MIN(MIN_SALARY) FROM jobs;

SELECT  JOB_ID, AVG(SALARY) AS 'average_salary'
FROM employees
GROUP BY JOB_ID
ORDER BY `average_salary` DESC;

SELECT SUM(SALARY) FROM employees;

SELECT MAX(SALARY),
	MIN(SALARY),
  SUM(SALARY),
	ROUND(AVG(SALARY), 2)
FROM hr.employees;

SELECT department_id,
	AVG(salary) 'average_salary' ,
	COUNT(*) 'number_of_employees'
FROM employees
GROUP BY department_id
HAVING `number_of_employees` > 10;

UPDATE employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SELECT employee_id, first_name,
	DAY(hire_date) 'hire_day'
FROM employees;

SELECT first_name,
	last_name,
	DATEDIFF(CURRENT_DATE() , HIRE_DATE) 'days_worked'
FROM employees;