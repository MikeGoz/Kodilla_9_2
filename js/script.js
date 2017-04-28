// Kodilla task 9.2

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);
var newName ='Marian';

if (allNames.indexOf(newName) === -1) {
  var moreNames = allNames.push(newName);
}

console.log('w nowej tablicy jest teraz ' + moreNames + ' elementów');
console.log(allNames);