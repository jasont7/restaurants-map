/* Finding most reviewed restraunts */
SELECT *
FROM restaurants
ORDER BY reviews DESC;

/* Finding the best types of restraunts */
SELECT cat, count(id)
FROM categories
GROUP BY cat
ORDER BY count(id) DESC;

/* Finding the best restaurants from all categories */
SELECT *
FROM restaurants JOIN categories USING (id)
WHERE reviews >= 20
GROUP BY cat
ORDER BY rating DESC, reviews DESC;
 
/* Finding the best restraunts for each category */
SELECT *
FROM restaurants JOIN categories USING (id)
WHERE cat LIKE '%Cafes%' AND reviews >= 20
ORDER BY rating DESC, reviews DESC;

/* Displaying all the categories for a restaurant in a seperate row */
/* (used in getData.php) */
SELECT DISTINCT restaurants.*, c2.cat
FROM restaurants JOIN categories c1 USING(id) JOIN categories c2 USING(id) 
WHERE c1.cat LIKE '%Pizza%';
