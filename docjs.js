// Array of names
var names = ["Yaakov", "John", "Jasmine", "Alice", "Bob", "Jessica", "Michael"];

// Loop through the array of names
for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase(); // Get the first letter and convert to lowercase
    if (firstLetter === 'j') {
        console.log("Goodbye " + names[i]);
    } else {
        console.log("Hello " + names[i]);
    }
}