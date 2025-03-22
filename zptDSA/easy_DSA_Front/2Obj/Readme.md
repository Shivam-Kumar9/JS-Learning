Q1.b (Object) – Find the Oldest and Youngest Person
Problem Statement:
Write a function that takes an object containing people's names as keys and their ages as values. The function should return an object with the oldest and youngest person's name and age.

Example Input:

 
findOldestYoungest({  
  John: 25,  
  Alice: 30,  
  Bob: 22,  
  Charlie: 35  
});

Expected Output:

 
{ oldest: { name: "Charlie", age: 35 }, youngest: { name: "Bob", age: 22 } }

* ✅ Constraints:

* Do not use Math.max() or Math.min().
  Solve using a single loop for efficiency.



Q2.b (Object) – Find the Most Expensive Product
Problem Statement:
Write a function that takes an object representing product prices and returns the most expensive product's name and price.

📌 Example Input:

js
Copy
Edit
findMostExpensive({
  laptop: 800,
  phone: 500,
  tablet: 600,
  monitor: 300
});
📌 Expected Output:

js
Copy
Edit
{ name: "laptop", price: 800 }
✅ Constraints:

Solve using a single loop for efficiency (O(n)).
Do not use Math.max().
Assume the object contains at least one product.