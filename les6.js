
/*
const emitter = document.querySelector('#emitter');

const observer = {
  _observers: [],
  addObserver(cb) {
    this._observers.push(cb);
  },
  removeObserver(cb) {
    this._observers = this._observers.filter((observer) => {
      return observer !== cb;
    });
  },
  notify() {
    this._observers.forEach((observer) => observer());
  }
};

const fn1 = () => {console.log('fn1')};
const fn2 = () => {console.log('fn2')};

observer.addObserver(fn1);
observer.addObserver(fn2);
//observer.removeObserver(fn1);
//console.dir(observer);

emitter.addEventListener('click', () => {
  observer.notify();
});
*/



const output = document.querySelector('#output');
const input = document.querySelector('#input');
const reset = document.querySelector('#reset');

const data = {
  _value: '',
  get value() {
    return this._value;
  },
  set value(newValue) {
    this._value = newValue;
    input.value = newValue;
    output.textContent = newValue;
  },
};

input.addEventListener('input', (evt) => {
  data.value = evt.target.value;
});

reset.addEventListener('click', () => {
  data.value = 'Hello world';
});
