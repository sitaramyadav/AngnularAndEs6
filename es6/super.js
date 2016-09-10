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
      constructor(name,title){
        super(name);
        this._title = title;
      }
}

p1 = new Person('Raj');
e1 = new Emplyee('Singh');
console.log('name is :',e1.name)
