
/*
const guitarPlayer = {
  firstName: 'Richie',
  lastName: 'Sambora',
  soloSpeed: 10,
  birthDate: '11.07.1959',
  guitarCount: 277,
  isLeftHanded: false,
  play() {
    console.log(`Let\'s rock`);
  },
  playSolo(speed = 2) {
    console.log(`Play solo ${speed}x`);
  },
  guitar: {
    string: 6
  }
};
*/

/*
console.dir(guitarPlayer);
guitarPlayer.play();
guitarPlayer.playSolo(3);
*/


/*
const clones = [];
const count = 10;
*/

/*
for (let i = 0; i < count; i++) {
  const newClone = Object.assign({}, guitarPlayer);
  clones.push(newClone);
}
console.dir(clones[0] === clones[1]);
*/

/*
const isObject = (object) => {
  const type = typeof object;
  return type === 'function' || type === 'object';
};

const cloneObject = (source) => {
  const clone = {};
  
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (isObject(source[key])) {
        //console.log(source[key]);
        clone[key] = cloneObject(source[key]);
      } else {
        //console.log(source[key]);
        clone[key] = source[key];
      }
    }
  }
  
  return clone;
};

for (let i = 0; i < count; i++) {
  const newClone = cloneObject(guitarPlayer);
  clones.push(newClone);
}
console.dir(clones[0] === clones[1]);
console.dir(clones[0].play === clones[1].play);
*/

/*
for (let i = 0; i < count; i++) {
  const newClone = {...guitarPlayer};
  clones.push(newClone);
}
console.dir(clones[0] === clones[1]);
console.dir(clones[0].play === clones[1].play);
*/


/*
const GuitarPlayer = function(firstName, lastName) {
  if (!new.target) {
    throw new Error(`GuitarPlayer должен быть вызван с new!`);
  }
  
  this.firstName = firstName;
  this.lastName = lastName;

  //return {
  //  firstName,
  //  lastName,
  //};
};

GuitarPlayer.prototype.play = function() {
  console.log(`Rock`);
};

const jsDeveloper = {
  firstName: `Nikolas`,
  lasstName: `Zakas`,
  play() {
    return `JavaScript`;
  }
};

const richieSambora = new GuitarPlayer(`Richie`, `Sambora`);
console.log(richieSambora);
console.log(richieSambora instanceof GuitarPlayer);
richieSambora.play();

console.log(jsDeveloper);
console.log(jsDeveloper instanceof GuitarPlayer);
*/


/*
class GuitarPlayer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  play() {
    console.log(`Rock`);
  }
  
  whoAmI() {
    console.log(`My name is ${this.firstName} ${this.lastName}.`);
  }
}

const richieSambora = new GuitarPlayer('Richie', 'Sambora');
richieSambora.play();
richieSambora.whoAmI();

const jamesHetfield = new GuitarPlayer('James', 'Hetfield');
jamesHetfield.play();
jamesHetfield.whoAmI();

const test = GuitarPlayer('test', 'test');
*/


class GuitarPlayer {
  #realyPrivate = 'private'
  
  constructor(skill, guitarCount) {
    this._skill = skill;
    this._guitarCount = guitarCount;
    this.firstName = GuitarPlayer.defaultName;
    this.lastName = GuitarPlayer.defaultLastname;
  }
  
  play() {
    console.log(`Rock master ${this._skill} level!`);
  }
  
  static defaultName = `Jimmie`;
  static defaultLastname = `Hendrix`;
  
  static createJuniorGuitarPlayer() {
    return new GuitarPlayer(5, 2);
  }
}

const novice = GuitarPlayer.createJuniorGuitarPlayer();
console.log(GuitarPlayer.defaultName);
console.log(novice);
novice.play();
