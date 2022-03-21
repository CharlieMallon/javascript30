const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello')

// Interpolated
console.log('Hello I am a %s string', 'interpolated');

const something = 'interpolated';
console.log(`Hello I am a ${something} string using back ticks`);

// Styled
console.log('%c I am some styled text', 'font-size: 50px; color: #BADA55');

// warning!
console.warn('OH NO A WARNING');

// Error :|
console.error('Ah Shit an Error');

// Info
console.info('Crocodiles each 3-4 people per year');

// Testing
const p = document.querySelector('p')
  // assert only shows if it is wrong
console.assert(p.classList.contains('ouch'), 'That is wrong')

// clearing
console.clear();

// Viewing DOM Elements
// returns element
console.log(p)
// returns all methods and connections
console.dir(p)

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`)
  console.log(`This is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old`)
  console.log(`${dog.name} is ${dog.age *7} dog years old`)
  console.groupEnd(`${dog.name}`)
})

// counting
console.count('Coffee')
console.count('Charlie')
console.count('Coffee')
console.count('Sam')
console.count('Coffee')
console.count('Coffee')
console.count('Charlie')
console.count('Sam')
console.count('Charlie')
console.count('Sam')
console.count('Charlie')
console.count('Coffee')

// timing
console.time('fetching data')
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

//table
console.table(dogs)