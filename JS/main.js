// function calculate_area(radius) {
//   return 3.14 * radius * radius;
// }

// function calculate_perimeter(radius) {
//   return 2 * 3.14 * radius;
// }
// module.exports = { calculate_area, calculate_perimeter };

export const isVote = (age) => {
    if (age < 18) {
        console.log("You are not eligible to vote");
    } else {
        console.log("You are eligible to vote"); 
    }
};
