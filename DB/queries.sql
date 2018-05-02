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
