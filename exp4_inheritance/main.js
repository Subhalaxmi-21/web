var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(x) {
        this.eats = x;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(x, y) {
        var _this = _super.call(this, x) || this;
        _this.barks = y;
        return _this;
    }
    return Dog;
}(Animal));
var Baby = /** @class */ (function (_super) {
    __extends(Baby, _super);
    function Baby(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.weep = z;
        return _this;
    }
    Baby.prototype.display = function () {
        console.log('From super class I get eats as' + this.eats);
        console.log('from child' + this.barks);
        console.log(this.weep);
    };
    return Baby;
}(Dog));
var x = new Baby('meat', 'bark', 'weep');
x.display();
