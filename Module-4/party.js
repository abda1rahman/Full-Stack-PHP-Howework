// secrity gaurde
// Check queue of people, if person is older than 18 and younger than 35, admit. Otherwise, appologize.

// write variables to contain the limitaions of the ag.
// we will loop through the queus. 
// if current person is younger than 18, will print (you are too young)
// if older than 35, will print (you are welcome)
// if between 18 and 35, will print (you are welcome)
 
const minAge = 18;
const maxAge = 35;
let Age;
do{
  Age = prompt();12
if (minAge > Age){
  console.log("your are too young");} 
else if(maxAge < Age) {
console.log("you are too old");
}
else {
  console.log("you are welcome");
}
} while(confirm("Is there anyone else? "));
  

















// let MaxAge = 35,
//     Age,
//     MinAge = 18;
    
//     do{
//       if(MaxAge < Age)
//       console.log(you are too old)
//       break;
//       if else (MinAge > Age)
//       console.log(you are too young)
//       break;
//       else
        
//     }