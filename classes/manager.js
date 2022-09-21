const Employee = require('./employee');

class Manager extends Employee {

    constructor(name, salary, title, manager, employees = []) {
        super(name, salary, title, manager);
        this.employees = employees;

        
    }
    
    addEmployee(employee) {
        this.employees.push(employee);
    }

    
    calculateBonus(multiplier) {
        let bonus = this.salary + this._totalSubSalary();
        return bonus * multiplier;
    }

    _totalSubSalary() {
        let sum = 0;
        this.employees.forEach(theEmployee => {
            if (theEmployee instanceof Manager) {
                
                sum += theEmployee.salary + theEmployee._totalSubSalary();
                
            } else {
                sum += theEmployee.salary;
            }
              
        })
        return sum;
    }
    
}
module.exports = Manager;

// const splinter = new Manager('Splinter', 100000, 'Sensei');
// const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
// const raph = new Manager('Raphael', 90000, 'Ninja', leo);
// const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
// const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

// console.log(splinter.calculateBonus(0.05)); // => 22500
// console.log(leo.calculateBonus(0.05)); // => 17500
// console.log(raph.calculateBonus(0.05)); // => 13000