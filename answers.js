////////////////////////////////
// Easy Going
////////////////////////////////
i = 20
for(let i = 1; i <= 20; i++) {
  console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////
i = 0

for(i = 0; i <= 200; i++){
  if(i % 2 == 0) {
    console.log(i);
  }
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
 
// 1 - loop 1-100
for(let i = 1; i <= 100; i++) {
    console.log(i);
  }

// 2 - Divisible by 3 = Fizz
for(let i = 1; i <= 100; i++) {
  const multipleOf3 = i % 3 === 0;
  if(multipleOf3) {
    console.log('Fizz');
  }
}

// 3 - Divisible by 5 = Buzz
for(let i = 1; i <= 100; i++) {
  const multipleOf5 = i % 5 === 0;
  if(multipleOf5) {
    console.log('Buzz');
  }
}

// 4 - Both = FizzBuzz
for(let i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// 1
const newAge = plantee.indexOf(5000)

plantee.splice(newAge, 2, 5001)
plantee.push("Mordor")

console.log(plantee);
  

// 2
const changeHometown = wolfy.pop();
const newHometown = wolfy.push("Gotham City");

console.log(wolfy);


// 3
const newTown = plantee.push("Hawkins")
console.log(plantee);

// 4 used documentation
const removeWolfy = wolfy.shift();
const addGameboy = wolfy.unshift("Gameboy");

console.log(wolfy);




////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

for (ninjaTurtle of ninjaTurtles) {
  console.log(ninjaTurtle.toUpperCase());
}



////////////////////////////////
// Methods, Revisited
////////////////////////////////




////////////////////////////////
// Where is Waldo
////////////////////////////////




////////////////////////////////
//  Excited Kitten
////////////////////////////////




////////////////////////////////
//  Find the Median
////////////////////////////////

