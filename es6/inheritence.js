class Person {
  constructor(name) {
    this.name = name;
  }
  get name(){
    return this._name;
  }
  set name(newValue){
    this._name = newValue;
  }
}

class Emplyee extends Person{
    doWork() {
      return `${this._name} is working.`
    }
}

p1 = new Person('Raj');
e1 = new Emplyee('Singh');

console.log(e1.doWork());
