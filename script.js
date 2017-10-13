var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//For collecting data from the inputs and grabbing buttons for clicks
var sqLength;
var recLength;
var recHeight;
var cirDiameter;
var triHeight;
var sqBtn;
var recBtn;
var cirBtn;
var triBtn;
var canvas = document.getElementById("canvas");
var side = document.getElementById("sidePanel");
//Fill with as many paremeters as possible
var Shape = /** @class */ (function () {
    function Shape() {
        var _this = this;
        var posx = Math.floor(Math.random() * 600);
        var posy = Math.floor(Math.random() * 600);
        this.div = document.createElement("div");
        this.div.style.position = "absolute";
        this.div.style.left = posx + "px";
        this.div.style.top = posy + "px";
        canvas.appendChild(this.div);
        this.div.addEventListener('click', function () {
            _this.display();
        });
        this.div.addEventListener('dblclick', function () {
            _this.removeShape();
        });
    }
    Shape.prototype.display = function () {
        side.style.visibility = "visible";
        var shapeName = document.getElementById("shapeName");
        var shapeWidth = document.getElementById("shapeWidth");
        var shapeHeight = document.getElementById("shapeHeight");
        var shapeRadius = document.getElementById("shapeRadius");
        var shapeArea = document.getElementById("shapeArea");
        var shapePerimeter = document.getElementById("shapePerimeter");
        shapeName.innerText = "Shape Name: " + this.name;
        shapeWidth.innerText = "Width: " + this.width;
        shapeHeight.innerText = "Height: " + this.height;
        shapeRadius.innerText = "Radius: " + this.radius;
        shapeArea.innerText = "Area: " + this.area;
        shapePerimeter.innerText = "Perimeter: " + this.perimeter;
    };
    Shape.prototype.removeShape = function () {
        this.div.remove();
        side.style.visibility = "hidden";
    };
    return Shape;
}());
//ShapeName/Class(Square), Width/Height(squareLength)
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        var _this = _super.call(this) || this;
        sqLength = document.getElementById("squareLength").value;
        _this.div.className = "Square";
        _this.name = "Square";
        _this.div.style.width = sqLength + "px";
        _this.div.style.height = sqLength + "px";
        _this.width = sqLength;
        _this.height = sqLength;
        _this.radius = "This is not a circle";
        _this.area = +sqLength * +sqLength;
        _this.perimeter = +sqLength * 4;
        return _this;
    }
    return Square;
}(Shape));
//ShapeName/Class(Rectangle), length(rectangleLength), height(rectangleHeight)
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super.call(this) || this;
        recLength = document.getElementById("rectangleLength").value;
        recHeight = document.getElementById("rectangleHeight").value;
        _this.div.className = "Rectangle";
        _this.name = "Rectangle";
        _this.div.style.width = recLength + "px";
        _this.div.style.height = recHeight + "px";
        _this.width = recLength;
        _this.height = recHeight;
        _this.radius = "Not a circle";
        _this.area = +recLength * +recHeight;
        _this.perimeter = (+recLength * 2) + (+recHeight * 2);
        return _this;
    }
    return Rectangle;
}(Shape));
//ShapeName/Class(Triangle), height(triangleHeight),
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        var _this = _super.call(this) || this;
        triHeight = document.getElementById("triangleHeight").value;
        _this.div.className = "Triangle";
        _this.name = "Triangle";
        _this.div.style.borderBottomWidth = triHeight + "px";
        _this.div.style.borderRightWidth = triHeight + "px";
        _this.width = "Triangle";
        _this.height = triHeight;
        _this.radius = "Not a circle";
        _this.area = +triHeight * +triHeight / 2;
        _this.perimeter = +triHeight * 3;
        return _this;
    }
    return Triangle;
}(Shape));
//ShapeName/Class(Circle), SideLength(circleLength)
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super.call(this) || this;
        cirDiameter = document.getElementById("circleLength").value;
        _this.div.className = "Circle";
        _this.name = "Circle";
        _this.div.style.width = cirDiameter + "px";
        _this.div.style.height = cirDiameter + "px";
        _this.width = "It's a circle";
        _this.height = "Radius x2";
        _this.radius = +cirDiameter / 2;
        _this.area = Math.round(_this.radius * _this.radius * Math.PI);
        _this.perimeter = Math.round(2 * _this.radius * Math.PI);
        return _this;
    }
    return Circle;
}(Shape));
sqBtn = document.getElementById("squareButton");
sqBtn.addEventListener("click", function () {
    if (document.getElementById("squareLength").value == "") {
        alert("You must input a number for length!");
    }
    else {
        new Square();
    }
});
recBtn = document.getElementById("rectangleButton");
recBtn.addEventListener("click", function () {
    if (document.getElementById("rectangleLength").value == "" || document.getElementById("rectangleHeight").value == "") {
        alert("You must input a number for both length and height!");
    }
    else {
        new Rectangle();
    }
});
triBtn = document.getElementById("triangleButton");
triBtn.addEventListener("click", function () {
    if (document.getElementById("triangleHeight").value == "") {
        alert("You must input a number for height!");
    }
    else {
        new Triangle();
    }
});
cirBtn = document.getElementById("circleButton");
cirBtn.addEventListener("click", function () {
    if (document.getElementById("circleLength").value == "") {
        alert("You must input a number for circle diameter!");
    }
    else {
        new Circle();
    }
});
