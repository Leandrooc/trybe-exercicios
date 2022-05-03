SELECT m.title, b.domestic_sales, b.international_sales
FROM BoxOffice as b
INNER JOIN Movies as m ON b.movie_id = m.id;


SELECT m.title, (b.domestic_sales + b.international_sales) AS 'Vendas'
FROM BoxOffice as b
INNER JOIN Movies as m ON b.movie_id = m.id
WHERE b.international_sales > b.domestic_sales;


SELECT m.title, b.rating
FROM BoxOffice as b
INNER JOIN Movies as m ON b.movie_id = m.id
ORDER BY b.rating DESC;


SELECT t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM Theater t
	LEFT JOIN Movies m ON t.id = m.theater_id
ORDER BY t.name;


SELECT t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM Theater t
	RIGHT JOIN Movies m ON t.id = m.theater_id
ORDER BY t.name;

