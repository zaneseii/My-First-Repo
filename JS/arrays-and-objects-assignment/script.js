//Task 1
console.log("Task 1: Create and Use an Object");

let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: 208,
    isRead: false
}; 

//Dotted notation
console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.isRead);

//Bracket notation
console.log(book["title"]);
console.log(book["author"]);
console.log(book["pages"]);
console.log(book["isRead"]);

book.isRead = true;
book.genre = "Adventure";

console.log("\nUpdated Book Object:");
console.log(book);


//Task 2
console.log("\nTask 2: Create and Modify an Array of Objects");

let movies = [
    {title: "Forrest Gump", director: "Robert Zemeckis", year: 1994},
    {title: "Good Will Hunting", director: "Gus Van Sant", year: 1997},
    {title: "Spider-Man", director: "Sam Raimi", year: 2002}
];

console.log("Second Movie: " + movies[1].title);

movies.push({title: "Up", director: "Pete Docter", year: 2009 });

movies[0].year = 1995;

console.log(movies);

//Task 3
console.log("\nTask 3: Combine Objects and Arrays");

let student = {name: "Louis Zane De Jesus", age: 22, subjects: ["Web Development", "Data Science", "Machine Learning"]};

console.log("First Subject: " + student.subjects[0]);

student.subjects.push("Artificial Intelligence");

console.log(student);

//Task 4 (Optional)
console.log("\nTask 4: Challenge Task");

let recipe = {
    name: "Pork Menudo",
    isVegetarian: false,
    ingredients: [
        { name: "Pork", quantity: "1 kilogram" },
        { name: "Pork liver", quantity: "1/4 kilogram" },
        { name: "Potatoes", quantity: "2 medium, diced" },
        { name: "Carrots", quantity: "1 medium, diced" },
        { name: "Bell pepper", quantity: "1 medium, chopped" },
        { name: "Tomato sauce", quantity: "1 cup" },
        { name: "Garlic", quantity: "4 cloves, minced" },
        { name: "Onion", quantity: "1 medium, chopped" },
        { name: "Soy sauce", quantity: "3 tablespoons" },
        { name: "Oil", quantity: "2 tablespoons" },
        { name: "Salt", quantity: "to taste" },
        { name: "Black pepper", quantity: "to taste" },
        { name: "Green peas", quantity: "1/2 cup" },
    ]
};

recipe.ingredients.push({ name: "Hotdog or sausage", quantity: "2 pieces, sliced" });

console.log("Second ingredient:" + recipe.ingredients[1].name);

console.log(recipe);


