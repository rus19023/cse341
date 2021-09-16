/*
const uname = 'Max';
let age = 29;
const hasHobbies = true;
age = 30;
const summarizeUser = (userName, userAge, userHasHobby) => {
    return(
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userHasHobby
    );
};

const add = (a,b) => a + b;
const addOne = (a) => a + 1;
const addRandom = () => 5 + 2;

console.log(summarizeUser(uname, age, hasHobbies));
console.log(add(1,2));
console.log(addOne(1));

console.log(addRandom());
*/


const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// person.greet();


// pull out just the name from the object

// const printName = (personName) => {
//     console.log(personName);
// }


// pull out just the name using destructuring

const printName = ({ name }) => {
    console.log(name);
}

printName(person);

console.log(' ');
console.log(' ');
console.log('----- ');
console.log('printName: ');
printName(person);
console.log('----- ');
console.log(' ');

const { name, age } = person;
console.log(name, age);

const hobbies = ['Sports', 'Cooking'];

/*
for (let hobby of hobbies) {
    console.log(hobby);
}
*/

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// hobbies.push('Reading');
// console.log(hobbies);

// // copies an array into a new array
// // slice also accepts arguments for part of the array
// const copiedArray = hobbies.slice();

// // copies the array, but as a nested array inside a new, blank array
// const copiedArray2 = [hobbies];




// // ... spread operator: copies each element inside a new, blank array

// const copiedArray3 = [...hobbies];

// console.log(' ');
// console.log('copiedArray: ');
// console.log(copiedArray);
// console.log(' ');
// console.log('copiedArray2: ');
// console.log(copiedArray2);
// console.log(' ');
// console.log('copiedArray3: ');
// console.log(copiedArray3);
// console.log(' ');

// const copiedPerson = {...person};
// console.log(' ');
// console.log('copiedPerson: ');
// console.log(copiedPerson);
// console.log(' ');


// // create an array with function, not flexible

// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// };

// // without rest operator, it gives error
// console.log(' ');
// console.log('toArray: ');
// console.log(toArray(1,2,3,4));
// console.log(' ');


// const toArray2 = (...args) => {
//     return args;
// };

// // with rest operator merge multiple arguments to get the correct array
// console.log(' ');
// console.log('toArray2: ');
// console.log(toArray(1,2,3,4));
// console.log(' ');
