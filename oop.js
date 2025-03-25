// Object-Oriented JavaScript (OOP) Example

// Creating a class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to introduce the person
    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an instance of the class
const person1 = new Person("Peter", 25);
person1.introduce();

// Inheritance Example
class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }

    study() {
        console.log(`${this.name} is studying ${this.course}.`);
    }
}

// Creating an instance of Student
const student1 = new Student("Alice", 22, "JavaScript");
student1.introduce();
student1.study();
