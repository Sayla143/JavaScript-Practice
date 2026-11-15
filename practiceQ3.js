
class Student {
    constructor(name, age, isLoggedIn) {
        this.name = name;
        this.age = age;
        this.isLoggedIn = isLoggedIn;
    }

    showDetails() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Login Status:", this.isLoggedIn);
    }
}

let student1 = new Student("Sayla", 22, true);

student1.showDetails();
