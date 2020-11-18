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

console.log(one, two, three);

one = '01';
let one = '02';
console.log(one, two, three);
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
const greeting = function (name = `Енот`, familyname = `Неопознанный`) {
	return `Привет, ${familyname} ${name}!`
}

console.log(greeting());
console.log(greeting('Олег'));
console.log(greeting('Олег', 'Вихров'));
console.log(greeting(undefined, 'Вихров'));
*/


/*
const names = ['Виктор', 'Пётр', 'Степан', 'Феофан', 'Любистарх'];
const getRandomName = function() {
	return names[Math.floor(Math.random() * names.length)];
}

const greet = function(name = getRandomName()) {
	console.log(`Привет, ${name}`);
}

greet();
greet('Кекс');
greet();
greet('Матроскин');
greet();
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
	superpower: 'Knows JS like a God'
});
console.dir(createHero(`Keks`));
*/


/*
const check = () => console.log(this);
check();	// window

const check_2 = function() {
	console.log(this);
}
check_2();	// undefined
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
const showThis = () => console.log(this);
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
	console.log(this);
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


/*
const arr = [1, 2, 3, 4];
const [first, , , , fifth = 5] = arr;
console.log(first, fifth);
*/


/*
let first = 'Пётр', second = 'Евгений';
[first, second] = [second, first];
console.log(first, second);
*/


/*
const generateMagickNumbers = () => [
	Math.trunc(Math.random() * 42),
	Math.trunc(Math.random() * 42),
	Math.trunc(Math.random() * 42),
];
const [first, , third] = generateMagickNumbers();
console.log(first, third);
*/


/*
const printSomeValues = ([first = 'Не передали', , third = 'Ничего']) => {
	console.log(`Первый: "${first}", третий: "${third}"`);
};

//printSomeValues([]);
//printSomeValues(['одын']);
//printSomeValues(['один', 'два', 'три']);
//printSomeValues([1, 2, 3]);
//printSomeValues();


printSomeValues('');
printSomeValues('12');
printSomeValues('123');
printSomeValues(document.querySelectorAll('p'));
*/


/*
const cat = {
	name: 'Кекс',
	location: 'Санкт-Петербург',
	color: 'Рыжий',
	race: 'Неизвестно',
	address: {
		city: 'Санкт-Петербург',
		street: 'Большая Конюшенная'
	},
	'home city': 'Санкт-Петербург'
};

const {name: catName, color, age: catAge = 'не указан'} = cat;
console.log(catName, color, catAge);

const {address: {street}} = cat;
console.log(street);

const {'home city': city} = cat;
console.log(city);
*/


/*
const paragraphs = document.querySelectorAll('p');

for (let i = paragraphs.length; i--;) {
	const {textContent: text} = paragraphs[i];
	console.log(text);
}
*/

/*
Array.from(document.querySelectorAll('p')).forEach( ({textContent: text}) => {
	console.log(text);
});
*/


document.write('—さようなら!');
