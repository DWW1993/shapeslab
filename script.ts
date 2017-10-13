//For collecting data from the inputs and grabbing buttons for clicks
let sqLength: string;
let recLength: string;
let recHeight: string;
let cirDiameter: string;
let triHeight: string;
let sqBtn: HTMLElement;
let recBtn: HTMLElement;
let cirBtn: HTMLElement;
let triBtn: HTMLElement;
let canvas: HTMLElement = document.getElementById("canvas");
let side: HTMLElement = document.getElementById("sidePanel")
//Fill with as many paremeters as possible
class Shape {
    div: HTMLElement;
    class: string;
    height;
    width;
    name;
    radius;
    area;
    perimeter;

    constructor() {
        var posx = Math.floor(Math.random() * 600);
        var posy = Math.floor(Math.random() * 600);
        this.div = document.createElement("div");
        this.div.style.position = "absolute";
        this.div.style.left = `${posx}px`;
        this.div.style.top = `${posy}px`;
        canvas.appendChild(this.div);
        this.div.addEventListener('click', () => {
            this.display();
        });
        this.div.addEventListener('dblclick', () => {
            this.removeShape();
        });
    }

    display(): void {
        side.style.visibility = "visible"
        let shapeName = document.getElementById("shapeName")
        let shapeWidth = document.getElementById("shapeWidth")
        let shapeHeight = document.getElementById("shapeHeight")
        let shapeRadius = document.getElementById("shapeRadius")
        let shapeArea = document.getElementById("shapeArea")
        let shapePerimeter = document.getElementById("shapePerimeter")
        shapeName.innerText = `Shape Name: ${this.name}`;
        shapeWidth.innerText = `Width: ${this.width}`;
        shapeHeight.innerText = `Height: ${this.height}`;
        shapeRadius.innerText = `Radius: ${this.radius}`
        shapeArea.innerText = `Area: ${this.area}`
        shapePerimeter.innerText = `Perimeter: ${this.perimeter}`
    }

    removeShape(): void {
        this.div.remove();
        side.style.visibility = "hidden"
    }
}
//ShapeName/Class(Square), Width/Height(squareLength)
class Square extends Shape {
    constructor() {
        super()
        sqLength = (<HTMLInputElement>document.getElementById("squareLength")).value;
        this.div.className = "Square";
        this.name = "Square";
        this.div.style.width = `${sqLength}px`;
        this.div.style.height = `${sqLength}px`;
        this.width = sqLength;
        this.height = sqLength;
        this.radius = "This is not a circle";
        this.area = +sqLength * +sqLength;
        this.perimeter = +sqLength * 4;
    }
}
//ShapeName/Class(Rectangle), length(rectangleLength), height(rectangleHeight)
class Rectangle extends Shape {
    constructor() {
        super()
        recLength = (<HTMLInputElement>document.getElementById("rectangleLength")).value;
        recHeight = (<HTMLInputElement>document.getElementById("rectangleHeight")).value;
        this.div.className = "Rectangle";
        this.name = "Rectangle";
        this.div.style.width = `${recLength}px`;
        this.div.style.height = `${recHeight}px`;
        this.width = recLength;
        this.height = recHeight;
        this.radius = "Not a circle";
        this.area = +recLength * +recHeight;
        this.perimeter = (+recLength * 2) + (+recHeight * 2);
    }
}
//ShapeName/Class(Triangle), height(triangleHeight),
class Triangle extends Shape {
    constructor() {
        super()
        triHeight = (<HTMLInputElement>document.getElementById("triangleHeight")).value;
        this.div.className = "Triangle";
        this.name = "Triangle";
        this.div.style.borderBottomWidth = `${triHeight}px`;
        this.div.style.borderRightWidth = `${triHeight}px`;
        this.width = "Triangle";
        this.height = triHeight;
        this.radius = "Not a circle";
        this.area = +triHeight * +triHeight / 2;
        this.perimeter = +triHeight * 3;
    }
}
//ShapeName/Class(Circle), SideLength(circleLength)
class Circle extends Shape {
    constructor() {
        super()
        cirDiameter = (<HTMLInputElement>document.getElementById("circleLength")).value;
        this.div.className = "Circle";
        this.name = "Circle";
        this.div.style.width = `${cirDiameter}px`;
        this.div.style.height = `${cirDiameter}px`;
        this.width = "It's a circle"
        this.height = "Radius x2"
        this.radius = +cirDiameter / 2
        this.area = Math.round(this.radius * this.radius * Math.PI);
        this.perimeter = Math.round(2 * this.radius * Math.PI);
    }
}

sqBtn = document.getElementById("squareButton")
sqBtn.addEventListener("click", () => {
    if ((<HTMLInputElement>document.getElementById("squareLength")).value == "") {
        alert("You must input a number for length!")
    }
    else {
        new Square();
    }
})

recBtn = document.getElementById("rectangleButton")
recBtn.addEventListener("click", () => {
    if ((<HTMLInputElement>document.getElementById("rectangleLength")).value == "" || (<HTMLInputElement>document.getElementById("rectangleHeight")).value == "") {
        alert("You must input a number for both length and height!")
    }
    else {
        new Rectangle();
    }
})

triBtn = document.getElementById("triangleButton")
triBtn.addEventListener("click", () => {
    if ((<HTMLInputElement>document.getElementById("triangleHeight")).value == "") {
        alert("You must input a number for height!")
    }
    else {
        new Triangle();
    }
})

cirBtn = document.getElementById("circleButton")
cirBtn.addEventListener("click", () => {
    if ((<HTMLInputElement>document.getElementById("circleLength")).value == "") {
        alert("You must input a number for circle diameter!")
    }
    else {
        new Circle();
    }
})