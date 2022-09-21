const Employee = require('./employee');
const Manager = require('./manager');

const Hobbes = new Manager('Hobbes', 1000000, 'Founder');
const Calvin = new Manager('Calivn', 130000, 'Director', Hobbes);
const Susie = new Manager("Susie", 100000, 'TA Manager', Calvin);
const Lily = new Employee('Lily', 90000, 'TA', Susie)
const Clifford = new Employee('Clifford', 90000, 'TA', Susie)

console.log(`Hobbes with a bonus: $${Hobbes.calculateBonus(0.05)}`); 
console.log(`Calvin with a bonus: $${Calvin.calculateBonus(0.05)}`); 
console.log(`Susie with a bonus: $${Susie.calculateBonus(0.05)}`); 
console.log(`Lily with a bonus: $${Lily.calculateBonus(0.05)}`); 
console.log(`Clifford with a bonus: $${Clifford.calculateBonus(0.05)}`); 