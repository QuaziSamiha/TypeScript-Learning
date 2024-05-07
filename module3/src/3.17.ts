{
  // polymorphism
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  // pi * r * r
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  //   height * width
  class Ractangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Ractangle(10, 12);

  getShapeArea(shape1);
  getShapeArea(shape2);
  getShapeArea(shape3);
  //
}
