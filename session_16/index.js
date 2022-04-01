/* javascript foundamental */

/* Datastructure */
let fullname = 'fahim';
let age = 36;


console.log("fullname.length", fullname.length);
console.log("Number.isInteger(age)", Number.isInteger(age));


//array, object
let numbers = [5, 'fahim', 8, 9];
let users = ['fahim', 'hiwa', 'omid', 'wahid', 'iman'];


//1. array
console.log('numbers[1]:', numbers[1]);
console.log('numbers.length=', numbers.length);
console.log('last element:', numbers[numbers.length - 1]);  //numbers[3]
console.log('middle element', users[Math.floor(users.length / 2)]);

//2. objects

//litteral      
let user = {
    name: { first: 'fahim', last: 'ahmadi' },
    age: 36,
    email: 'fahim@gmail.com',
    password: '123',
    register: function (name) {
        console.log(name, 'registered himself here.');
    },
    login: function (email, password) {
        if (email === user.email && password === user.password) {
            console.log('logged in successfully');
        } else {
            console.log('please try again.');
        }
    }
}
console.log('litteral object user:',user);
//user.register('John')
user.login('fahim@gmail.com', '123');

//object.length doesn't exist
console.log('user.length', user.length);

// to read properties values
//1. dot notation
console.log('user.name.last:', user.name.last)

//2. braket notation (use case in react apps)
console.log("user['age'] = ", user['name']);


console.log('keys:', Object.values(user));



class Car{

    constructor(color, max_speed, gear, power) {
        this.color = color
        this.max_speed = max_speed
        this.gear = gear
        this.power= power
    }
}

//instance      
let mycar = new Car('white', 320, 5, 150);
console.log('instance mycar:', mycar);




//conditional
if (age > 18) {
    console.log('you are allowed to drink beer');
} else {
    console.log('you are not allowed to drink beer');
}


let wheather = 'sunny'

if (wheather === 'raining') {
    console.log('take the umbrella');
} else {
    console.log('you dont need umbrella');
}



let person = 'john';

if (person === 'john') {
    console.log('john always tell the truth');
} else if(person === 'michael') {
    console.log('michael is a layer');
} else {
    console.log('just check the data.');
}

//loops



//functions