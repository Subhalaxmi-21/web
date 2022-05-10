var Person = /** @class */ (function () {
    function Person(name, age, eml) {
        this.name = name;
        this.age = age;
        this.eml = eml;
    }
    Person.prototype.add = function () {
        document.getElementById('personal').innerHTML = '<b>Name</b>:' + this.name + '<br>' + '<b>Age</b>: ' + this.age + '<br> <b>Email</b>' + this.eml;
    };
    return Person;
}());
var p = new Person('Subhalaxmi', 20, 'sub@gmail.com');
p.add();
