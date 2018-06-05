/* Finding most reviewed restraunts */
SELECT *
FROM restaurants
ORDER BY reviews DESC;

/* Finding the best categories of restraunts */
SELECT cat, count(id)
FROM categories
GROUP BY cat
ORDER BY count(id) DESC;

/* Show all restaurants from a category, and also
show any other categories that those restaurants have -
in a seperate row (used for getData.php) */
SELECT DISTINCT restaurants.*, c2.cat 
FROM restaurants JOIN categories c1 USING(id) JOIN categories c2 USING(id) 
WHERE c1.cat LIKE '%Pizza%';

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

/* Getting the closest restaurants to a coord */
SELECT *
FROM restaurants
ORDER BY ((latitude-48.428421)*(latitude-48.428421)) + ((longitude+123.365644)*(longitude+123.365644)) ASC;

/* Deleting duplicate restaurant rows */
DELETE t1 
FROM restaurants t1, restaurants t2 
WHERE t1.id < t2.id AND t1.latitude = t2.latitude AND t1.name = t2.name;
