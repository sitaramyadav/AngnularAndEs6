class Employee {

	constructor(title,name) {
		this._title = title;
    this._name = name;
	}

	get title() {
		return this._title;
	}

	doWork() {
		return `${this._name} is working`;
	}
}

let e = new Employee('Singh','Raj');

console.log('title of Employee is :',e.title);
console.log('name of Employee is :',e.name);
console.log(Employee.prototype.doWork.call(e))
