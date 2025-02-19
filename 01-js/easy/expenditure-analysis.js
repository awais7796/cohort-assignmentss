/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


/**
                                                                          using objects
 */
function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {}; // Object to store total spent per category

  for (const transaction of transactions) {
      const { category, price } = transaction;

      if (categoryTotals[category]) {
          categoryTotals[category] += price; // Add to existing total
      } else {
          categoryTotals[category] = price; // Initialize new category total
      }
  }

  // Convert the object into an array of { category, totalSpent } format
  return Object.keys(categoryTotals).map(category => ({
      category,
      totalSpent: categoryTotals[category]
  }));
}



/**
                                                                       using the map 
 */
// function calculateTotalSpentByCategory(transactions) {
//   const categoryMap = new Map();

//   for (const { category, price } of transactions) {
//       categoryMap.set(category, (categoryMap.get(category) || 0) + price);
//   }

//   return Array.from(categoryMap, ([category, totalSpent]) => ({ category, totalSpent }));
// }




module.exports = calculateTotalSpentByCategory;
