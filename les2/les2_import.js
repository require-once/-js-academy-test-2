
/*
//import {letVar} from 'http://js-academy-2.local/les2.js';
//import {letVar} from '/les2.js';
//import {letVar} from '../les2.js';
import {letVar} from './../les2.js';

//let scriptUrl = './../' + 'les2.js';
//import {letVar} from scriptUrl;					// так делать нельзя, только строки!

setTimeout(() => {console.log(letVar)}, 500);
setTimeout(() => {console.log(letVar)}, 1000);
*/


/*
import * as exported from '/les2.js';

setTimeout(() => {console.log(exported.letVar)}, 500);
setTimeout(() => {console.log(exported.letVar)}, 1000);

import defaultExport from '/les2.js';
console.log(defaultExport);
*/


/*
import defaultExport, {letVar} from '/les2.js';

setTimeout(() => { console.log(letVar) }, 500);
setTimeout(() => { console.log(letVar) }, 1000);
console.log(defaultExport);
*/


import {extraVar} from '/les2.js';
console.log(extraVar);



