
/*
const foo = function() {
  console.log(this);
};

const foo2 = function() {
  'use strict';
  console.log(this);
};

foo();
foo2();
*/


/*
const whoAmI = function() {
  console.log(`Меня зовут: ${this.firstName} ${this.lastName}`);
  console.log(this);
}

const guitarPlayer = {
  firstName: `Curt`,
  lastName: `Cobain`,
  whoAmI
};

const anotherGuitarPlayer = {
  firstName: `Richie`,
  lastName: `Sambora`,
  whoAmI
};

guitarPlayer.whoAmI();
anotherGuitarPlayer.whoAmI();
whoAmI();
*/


/*
const guitarPlayer = {
  firstName: `Curt`,
  lastName: `Cobain`,
  whoAmI: function() {
    console.log(`Меня зовут: ${this.firstName} ${this.lastName}`);
    console.log(this);
  }
};

const anotherGuitarPlayer = {
  firstName: `Richie`,
  lastName: `Sambora`,
  whoAmI: guitarPlayer.whoAmI
};

guitarPlayer.whoAmI();
anotherGuitarPlayer.whoAmI();
*/


/*
const guitarPlayer = {
  firstName: `Curt`,
  lastName: `Cobain`,
  whoAmI: () => {
    console.log(`Меня зовут: ${this.firstName} ${this.lastName}`);
    console.log(this);
  }
};

guitarPlayer.whoAmI();
*/


/*
const guitarPlayer = {
  firstName: `Curt`,
  lastName: `Cobain`,
  whoAmI: function() {
    console.log(`Меня зовут: ${guitarPlayer.firstName} ${guitarPlayer.lastName}`);
    console.log(this);
  }
};

const anotherGuitarPlayer = {
  firstName: `Richie`,
  lastName: `Sambora`,
  whoAmI: guitarPlayer.whoAmI
};

guitarPlayer.whoAmI();
anotherGuitarPlayer.whoAmI();
*/


/*
const whoAmI = function(birthDate) {
  console.log(`Меня зовут: ${this.firstName} ${this.lastName}. Днюха: ${birthDate}`);
  console.log(this);
}

const guitarPlayer = {
  firstName: `Curt`,
  lastName: `Cobain`,
};

const anotherGuitarPlayer = {
  firstName: `Richie`,
  lastName: `Sambora`,
};

whoAmI.call(guitarPlayer, '20.02.1967');
whoAmI.apply(anotherGuitarPlayer, ['11.06.59']);
*/


/*
document.body.addEventListener('click', function(evt) {
  console.log(this === document.body);
  console.log(evt.target, this === evt.target);
  console.log(this === evt.currentTarget);  
});
*/

/*
const albums = Array.from(document.querySelectorAll('h2'));

albums.forEach(function(item) {
  item.addEventListener('click', function(evt) {
    console.log(`Заголовок: ${this === evt.target}`);
    console.log(this.textContent);
  });
});
*/


/*
const cart = {
  type: 'альбом',
  print(evt) {
    console.log(`Вы выбрали ${this.type}: ${evt.target.textContent}`);
  }
};

const albums = Array.from(document.querySelectorAll('h2'));

//albums.forEach(function(item) {
//  item.addEventListener('click', cart.print);
//});

albums.forEach(function(item) {
  item.addEventListener('click', function(evt) {
    cart.print(evt);
  })
});

albums.forEach(function(item) {
  item.addEventListener('click', cart.print.bind(cart));
});
*/


/*
const guitarStore = function() {
  console.log(this);
  this.guitarCount = 2;
  
  (function() {
    console.log(this);
    this.guitarCount = 1;
  })();
  
  console.log(this.guitarCount);
};

const guitarShop = {
  guitarCount: 3,
  showMeAnswer: function() {
    console.log(this);
    console.log(this.guitarCount);
  }
};

//guitarStore();
//new guitarStore();
//guitarShop.showMeAnswer();
//new guitarShop.showMeAnswer();
//guitarStore.apply(guitarStore);
//guitarShop.showMeAnswer.apply(guitarStore);
guitarStore.bind({})();
*/


/*
class Man {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  walk() {
    console.log('Walk...');
  }
  jump() {
    console.log('Jump...');
  }
}

const bob = new Man('Bob', 'Gale');
console.log(bob.firstName, bob.lastName);
bob.walk();
bob.jump();

class GuitarPlayer extends Man {
  constructor(firstName, lastName, guitarCount) {
    super(firstName, lastName);
    this.guitarCount = guitarCount;
  }
  
  getGuitarCount() {
    return this.guitarCount;
  }
  
  jump() {
    console.log('Mega jump!!!');
  }
  
  doubleJump() {
    super.jump();
    this.jump();
  }
}

const richie = new GuitarPlayer('Richie', 'Sambora', 10);
console.log(richie.firstName, richie.lastName, richie.guitarCount);
richie.walk();
richie.jump();
console.log(`I have ${richie.getGuitarCount()} guitars`);
richie.doubleJump();
*/



class AbstractMan {
  constructor(firstName, lastName) {
    if (new.target === AbstractMan) {
      throw new Error(`Can't instantiate Abstract class.`);
    }
    
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  walk() {
    throw new Error(`Abstract method not implemented: ${this.walk.name}`);
  }
  
  jump() {
    throw new Error(`Abstract method not implemented: ${this.jump.name}`);
  }
}

//const man = new AbstractMan();


class Man extends AbstractMan {
  walk() {
    console.log('Walk...');
  }
  
  jump() {
    console.log('Jump...');
  }
}

const bob = new Man('Bob', 'Gale');
console.log(bob);
//bob.walk();
//bob.jump();


class GuitarPlayer extends Man {
  jump() {
    console.log('Mega jump!!!');
  }
  
  doubleJump() {
    this.jump();
    this.jump();
  }
}

const richie = new GuitarPlayer('Richie', 'Sambora');
console.log(richie);
//richie.jump();
//richie.walk();
//richie.doubleJump();


class Manager {
  constructor() {
    this._junior = null;
  }
  
  /**
   * Нотация "JSDoc" - https://jsdoc.app/howto-es2015-classes.html
   * @type {AbstractMan} junior
   */
  setJunior(junior) {
    this._junior = junior;
    const {firstName, lastName} = junior;
    console.log(`Manager controls ${firstName} ${lastName}`);
  }
  
  commandWalk() {
    this._junior.walk();
  }
  
  commandJump() {
    this._junior.jump();
  }
}

const manager = new Manager();
manager.setJunior(bob);
manager.commandWalk();
manager.commandJump();

manager.setJunior(richie);
manager.commandWalk();
manager.commandJump();
