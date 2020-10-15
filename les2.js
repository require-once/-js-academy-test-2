/*
var varVariable = 'var is here';
let letVariable = 'let it be';
const constVariable = 'const it be';

console.log(varVariable, window.varVariable);
console.log(letVariable, window.letVariable);
console.log(constVariable, window.constVariable);

export const exported = 'I\'ve been exported!';

export {varVariable, letVariable as letCopy};
export {letVariable, constVariable};

//export default 'default export';

const defaultExported = 'default export';
console.log(defaultExported);
//export default defaultExported;
export {defaultExported as default};
*/


/*
const isRaining = Math.random() > 0.5;
if (isRaining) export const myNumber = 42;
*/


/*
export let letVar;
letVar = 'This is not restricted, but rather not recommended!';
//console.log(letVar);

setTimeout(() => {
	letVar = 'Try to check my value now!';
}, 1000);

export default 'default export';
*/

/*
export {extraVar} from './les2/les2_extra.js';
*/


/*
const greet = (name, ...titles) => {
	const space = titles.length > 0 ? ' ' : '';
	console.log(`Привет, ${titles.join(' и ')}${space}${name}`);
};

greet('Кот матроскин', 'Уважаемый', 'Единственный');
*/

/*
const greet = (name, ...titles) => {
	const [firstTitle = '', ...otherTitles] = titles;
	const space = titles.length > 0 ? ' ' : '';
	const aka = otherTitles.length > 0 ? `, известный как: ${otherTitles.join(', ')}` : '';
	
	console.log(`Привет, ${firstTitle}${space}${name}${aka}`);
};

console.log(greet('Кот матроскин', 'уважаемый', 'усатый', 'полосатый'));
*/


/*
const getFullName = (name, surname, ...titles) => {
	const space = titles.length > 0 ? ' ' : '';
	return `${titles.join(' и ')}${space}${name} ${surname}`;
};

const president = ['Владимир', 'Путин', 'президент', 'сударь', 'человек'];
console.log('Уважаемый ' + getFullName(...president) + '!');
*/


/*
const arr = [1, 61, 3, -6, 12];
console.log(Math.max(...arr));
*/


const original = [1, 2, 3, 4, 5];
const newArr = [...original];
original.reverse();

console.log(original, newArr);
