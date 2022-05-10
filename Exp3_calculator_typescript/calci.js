var x;
var y;
var result;
var add = function () {
    x = Number(document.getElementById('first').value);
    y = Number(document.getElementById('second').value);
    result = x + y;
    document.getElementById('answer').innerHTML = String(result);
};
var minus = function () {
    x = Number(document.getElementById('first').value);
    y = Number(document.getElementById('second').value);
    result = x - y;
    document.getElementById('answer').innerHTML = String(result);
};
var multiply = function () {
    x = Number(document.getElementById('first').value);
    y = Number(document.getElementById('second').value);
    result = x * y;
    document.getElementById('answer').innerHTML = String(result);
};
var divide = function () {
    x = Number(document.getElementById('first').value);
    y = Number(document.getElementById('second').value);
    result = x / y;
    document.getElementById('answer').innerHTML = String(result);
};
document.getElementById('add').addEventListener('click', add);
document.getElementById('minus').addEventListener('click', minus);
document.getElementById('multiply').addEventListener('click', multiply);
document.getElementById('divide').addEventListener('click', divide);
