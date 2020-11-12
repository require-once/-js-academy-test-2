
/*
const guitarPlayer = {
  firstName: 'Richie',
  lastName: 'Sambora',
  soloSpeed: 10,
  birthDate: '10.07.1959',
  guitarCount: 277,
  isLeftHanded: false,
  play() {
    console.log('Let\'s rock');
  },
  playSolo(speed = 2) {
    console.log('Play solo ' + speed + 'x');
  }
};
*/

/*
guitarPlayer.play();
guitarPlayer.playSolo();
*/

/*
const entries = Object.entries(guitarPlayer);
console.dir(entries);

const values = Object.values(guitarPlayer);
console.dir(values);

const keys = Object.keys(guitarPlayer);
console.dir(keys);
*/

/*
const keys = Object.keys(guitarPlayer);

for (let propName of keys) {
  if (typeof guitarPlayer[propName] === 'function') {
    guitarPlayer[propName]();
  }
}

for (let propName in guitarPlayer) {
  if (typeof guitarPlayer[propName] === 'function') {
    guitarPlayer[propName]();
  }
}
*/


/* ====================== */


/*
const stolenItems = [
  {name: 'Магнитофон', qty: 3},
  {name: 'Кинокамера заграничная', qty: 3},
  {name: 'Портсигар отечественный', qty: 3},
  {name: 'Куртка замшевая', qty: 1},
];
*/

/*
console.log('Сортировка');
console.dir( stolenItems.slice().sort((a, b) => a.qty - b.qty) );
console.dir(stolenItems);
*/

/*
console.log('Фильтрация');
console.dir( stolenItems.filter((item) => item.qty > 1) );
*/

/*
console.log('Срез массива');
console.dir( stolenItems.slice(2, 4));
*/

/*
console.log('Преобразование');
let str = '<strong>Украденные предметы:</strong><ul>' +  
          stolenItems.map(it => `<li>${it.name}</li>`).join('') + '</ul>';
let str2 = `<strong>Украденные предметы:</strong><ul>${stolenItems.map(it => `<li>${it.name}</li>`).join('')}</ul>`;

console.log(stolenItems.map(it => `<li>${it.name}</li>`).join(''));
document.body.insertAdjacentHTML('afterbegin', str2);
*/

/*
console.log('Свёртка');
console.log(`Всего предметов украдено:
${stolenItems.reduce((acc, item) => acc + item.qty, 0)}`);
*/


/* ====================== */


/*
const questions = [
  {
    text: 'To be or not to be?',
    answers: [
      {title: 'Yes', isCorrect: false},
      {title: 'No', isCorrect: false},
      {title: 'Maybe', isCorrect: true},
    ]
  },
  
  {
    text: 'What is the answer to life, the universe and everything?',
    answers: [
      {title: 42, isCorrect: true},
      {title: 31, isCorrect: false},
    ]
  }
];

const history = [];

const changeText = (newText) => {
  const oldText = questions[0].text;
  questions[0].text = newText;
  history.push(() => questions[0].text = oldText);
};

console.log(questions[0].text);
changeText('What was the original question?');
console.log(questions[0].text);
changeText('Тру-ля-ля?');
console.log(questions[0].text);

history.pop()();
console.log(questions[0].text);
history.pop()();
console.log(questions[0].text);
*/


/*
const callbacks = [];

const addSyncListener = (fn) => {
  if ( !callbacks.find((item) => item === fn) ) {
    callbacks.push(fn);
  }
};

const startAsync = () => {
  setTimeout(() => {
    while(callbacks.length) {
      const cb = callbacks.shift();
      cb();
    }
    
    console.log('Done');
  }, 500);
};
*/

/*
const callbacks = new Set();

const addSyncListener = (fn) => {
  callbacks.add(fn);
};

const startAsync = () => {
  setTimeout(() => {
    for (const cb of callbacks) {
      callbacks.delete(cb);
      cb();
    }
    
    console.log('Done');
  }, 500);
};


addSyncListener(() => console.log(1));
const log2 = () => console.log(2);
addSyncListener(log2);
addSyncListener(log2);
addSyncListener(() => console.log(3));

console.log('Wait...');
startAsync();

addSyncListener(() => console.log(4));
addSyncListener(() => console.log(5));
*/


/*
const catName = 'Кекс';
const catMale = true;
const catAge = 7;

const expected = {
  catName: catName,
  catMale: catMale,
  catAge: catAge
};

const actual = {catName, catMale, catAge};
console.log(expected);
console.log(actual);
*/


/*
const catName = 'Кекс';

const expected = {
  catName: catName,
  meow() {
    return `${this.catName}: Мяу!`;
  }
};

const actual = {
  catName: catName,
  meow: () => {
    return `${this.catName}: Мяу!`;
  }
};

console.log(expected.meow());
console.log(actual.meow());
//console.log(actual.meow.apply(expected));
*/


/*
const cat = {
  name: 'Персик',
  get name() {
    if (this.catName) {
      return this.catName;
    }
    return 'Секрет';
  },
  set name(newName) {
    this.catName = newName;
  }
};

console.log(cat.name);
cat.name = 'Кекс';
console.log(cat.name);
*/


/*
const name = 'Т-1000';

const states = ['Жидкий', 'Твёрдый', 'Газообразный'];
const randomState = () => states[Math.floor(Math.random() * states.length)];

const expected = {
  name: name
};
expected[randomState()] = true;

const actual = {
  name,
  [randomState()]: true
};

console.log(expected);
console.log(actual);
*/


/*
const name = 'Кекс';
const owner = 'Александр';
*/

/*
const cat = {
  name,
  [`owner - ${owner}`]: true
};

console.log(cat);
*/

/*
const cat = {
  get [`name`]() {
    return name;
  },
  
  get [`owner - ${owner}`]() {
    return owner;
  },
  
  [`meow`]() {
    return `${name}: мяу!`;
  }
};

console.log(cat.name);
console.log(cat[`owner - ${owner}`]);
console.log(cat.meow());
*/

/*
const cat = {
  name,
  owner,
  owner: 'Пётр',
  ['owner']: 'Леопольд',
};

console.log(cat);
*/
