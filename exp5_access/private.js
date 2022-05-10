var Student = /** @class */ (function () {
    function Student(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    Student.prototype.display = function () {
        return ("My unique code: ".concat(this.studCode, ", my name: ").concat(this.studName, "."));
    };
    return Student;
}());
var students = new Student(1, "Subhalaxmi");
console.log(students.display());
