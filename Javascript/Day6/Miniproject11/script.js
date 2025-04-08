// 1. Movie List Storage
let movies = ["Spiderman", "Moana", "Angry birds", "Interstellar", "The Matrix"];

console.log("Available Movies:");

movies.forEach((movie, index) => console.log(`${index + 1}. ${movie}`));

// 2. User Input 
let userMovie = prompt("Enter the movie name you want to book (Spiderman, Moana, Angry birds, Interstellar, The Matrix):");

// 3. Check Availability
if (movies.includes(userMovie)) {

    // 4. Booking Confirmation
    console.log("Ticket booked for " + userMovie);

} 
else {
    console.log("Movie not available");
}