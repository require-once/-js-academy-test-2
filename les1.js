"use strict";

/*
console.log(num);

num = 3;
console.log(num);

var num = 2;
console.log(num);
*/


/*
var variable = 5;

var print = function() {
	console.log(variable);
};

print();

var variable = 3;
print();
*/


/*
var elements = [
	document.createElement('a'),
	document.createElement('a'),
];

for (var i = 0; i < elements.length; i++) {
	var dbl = i * 2;
	elements[i].onclick = function (evt) {
		evt.preventDefault();
		console.log(i + ' * 2 = ' + dbl);
	};
}

elements[0].click();
elements[1].click();

console.log(i);
console.log(dbl);
*/


/*
let one = '1';
let two = '2', three = '3';

console.log(one);
let one = '01';
*/


/*
console.log(hoists);
let hoists = 123;
console.log(hoists);
*/


/*
let shouldWork = true;

if (shouldWork) {
	let number = 12;
} else {
	let number = 32;
}

console.log(shouldWork);
console.log(number);
*/


/*
let left = 'левый';
let right = 'правый';

{
	let temp = left;
	left = right;
	right = temp;
}

console.log(left);
console.log(right);
console.log(temp);
*/


/*
let outer = 'outer';
console.log(outer);

{
	let outer = 'outer-inner';
	console.log(outer);
}

console.log(outer);
*/


/*
let outer = 'outer';
console.log(outer);

{
	console.log(outer);
	let outer = 'outer-inner';
	console.log(outer);
}

console.log(outer);
*/


/*
const agentName = '007';
agentName = '008';
console.log('Имя агента: ' + agentName);
*/


/*
for (let i = 1; i < 3; i++) {
	const dbl = i * 2;
	console.log(i + ' * 2 = ' + dbl);
}

console.log(i);
console.log(dbl);
*/


/*
const elements = [
	document.createElement('a'),
	document.createElement('a'),
];

for (let i = 0; i < elements.length; i++) {
	const dbl = i * 2;
	elements[i].onclick = function (evt) {
		evt.preventDefault();
		console.log(i + ' * 2 = ' + dbl);
	};
}

elements[0].click();
elements[1].click();

console.log(i);
console.log(dbl);
*/


/*
const name = 'Dmitriy';
const multiline = `Привет, ${name}!
Это
	многострочная
		фраза`;
console.log(multiline);
*/


/*
const name = 'Иван';
console.log(`Я не хочу вставлять значение переменной \${name}`);
console.log(`Я не хочу вставлять значение переменной $\{name}`);
console.log(`Я не хочу вставлять значение переменной \$\{name}`);
*/


/*
const multiply = (a, b) => {
	return a * b;
};
console.log(multiply(5, 7));
*/


/*
const dbl = (param) => param * 2;
console.log(dbl(5));
*/


/*
const createHero = (name) => ({
	name: name,
	age: 7,
	superpower: `Knows JS like a God`
});
console.log(createHero(`Keks`));
*/


/*
const check = () => console.log(this);
check();	// window
*/


/*
const keks = {
	name: 'Кекс',
	friends: ['Снежок', 'Барсик'],
	showFrinends: function() {
		this.friends.forEach((friend) => {
			console.log(`${this.name} дружит с ${friend}`);
		});
		//this.friends.forEach(function(friend) {
		//	console.log(`${this.name} дружит с ${friend}`);
		//});
	}
};
keks.showFrinends();
*/


/*
const showThis = () => console.log(this === window);
showThis();

const bindedThis = showThis.bind({name: 'Мой контекст!'});
bindedThis();

const myObj = {
	callMethod: showThis
};
myObj.callMethod();
*/


/*
const Body = () => {
	this.body = document.body;
}
const myBody = new Body();	// Body is not a constructor
*/


/*
const Body = function() {
	this.body = document.body;
}

Body.prototype.paint = () => {
	console.log(this === window);
	this.body.classList.add('yellow');
};

const myBody = new Body();
myBody.paint();
*/


/*
let qwe = (a, b, c) => {
	console.log(arguments);
}
qwe(1, 2);
*/


document.write('—さようなら!');


