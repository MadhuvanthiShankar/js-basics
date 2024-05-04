/*To generate a random business name with a set of adjectives

first word:
crazy
amazing
fire

second word:
engine 
foods
garments

third word
bros
limited
hub
*/

let rand = Math.random()
let first, second, third;

// 0 0.33 0.66 1

//generate first word
if(rand < 0.33){
    first = "Crazy";
}
else if(rand > 0.33 && rand < 0.66){
    first = "Amazing";
}
else{
    first = "Fire";
}

//generate second word
rand = Math.random()
if(rand < 0.33){
    second = "Engine";
}
else if(rand > 0.33 && rand < 0.66){
    second = "Foods";
}
else{
    second = "Garments";
}

//generate third word
rand = Math.random()
if(rand < 0.33){
    third = "Bros";
}
else if(rand > 0.33 && rand < 0.66){
    third = "Limited";
}
else{
    third = "Hub";
}

console.log(`${first} ${second} ${third}`)