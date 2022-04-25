select * from Pieces as p;

select * from Providers as p;

select * from Provides as p;

select p2.Name as 'nome produto', p1.Price as 'valor produto'
from Provides p1 inner join Pieces p2 
where p1.Provider like "RB%" 
and p1.Piece = p2.Code;

select * from Provides p order by p.Price desc limit 5 

//

USE Scientists;

SELECT 'This is SQL Exercise, Practice and Solution';

SELECT 1, 2, 3;

SELECT 10 + 15;

SELECT * FROM Scientists;

SELECT * FROM Projects;
