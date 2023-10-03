// Bai 1
class Circle {
    private radius: number;
    private color: string;
  
    constructor(radius: number, color: string) {
      this.radius = radius;
      this.color = color;
    }
  
    // Getter for radius
    getRadius(): number {
      return this.radius;
    }
  
    // Setter for radius
    setRadius(radius: number): void {
      this.radius = radius;
    }
  
    // Getter for color
    getColor(): string {
      return this.color;
    }
  
    // Setter for color
    setColor(color: string): void {
      this.color = color;
    }
  
    // Method to calculate circumference
    chuVi(): number {
      return 2 * Math.PI * this.radius;
    }
  
    // Method to calculate area
    dienTich(): number {
      return Math.PI * this.radius * this.radius;
    }
  
    // Method to input data
    inputData(radius: number, color: string): void {
      this.radius = radius;
      this.color = color;
    }
  
    // Method to display data
    displayData(): void {
      console.log(`Radius: ${this.radius}`);
      console.log(`Color: ${this.color}`);
    }
  }

  // Bai 2
  class QuadraticEquation {
  private a: number;
  private b: number;
  private c: number;
  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  // Getter and setter for a
  getA(): number {
    return this.a;
  }
  setA(a: number): void {
    this.a = a;
  }
  // Getter and setter for b
  getB(): number {
    return this.b;
  }
  setB(b: number): void {
    this.b = b;
  }
  // Getter and setter for c
  getC(): number {
    return this.c;
  }
  setC(c: number): void {
    this.c = c;
  }
  // Method to calculate the discriminant
  getDiscriminant(): number {
    return this.b * this.b - 4 * this.a * this.c;
  }
  // Method to calculate the first root
  getRoot1(): number {
    if (this.getDiscriminant() >= 0) {
      return (-this.b + Math.sqrt(this.getDiscriminant())) / (2 * this.a);
    } else {
      return 0;
    }
  }
  // Method to calculate the second root
  getRoot2(): number {
    if (this.getDiscriminant() >= 0) {
      return (-this.b - Math.sqrt(this.getDiscriminant())) / (2 * this.a);
    } else {
      return 0;
    }
  }
}

const equation = new QuadraticEquation(1, -3, 2);
const discriminant = equation.getDiscriminant();
if (discriminant >= 0) {
  const root1 = equation.getRoot1();
  const root2 = equation.getRoot2();
  if (discriminant === 0) {
    console.log(`The equation has one root: ${root1}`);
  } else {
    console.log(`The equation has two roots: ${root1} and ${root2}`);
  }
} else {
  console.log(`The equation has no roots`);
}

//Bai 3
class Fan {
     static SLOW: number = 1;
     static MEDIUM: number = 2;
     static FAST: number = 3;
  
    private speed: number;
    private on: boolean;
    private radius: number;
    private color: string;
  
    constructor() {
      this.speed = Fan.SLOW;
      this.on = false;
      this.radius = 5;
      this.color = "blue";
    }
  
    public getSpeed(): number {
      return this.speed;
    }
  
    public setSpeed(speed: number): void {
      this.speed = speed;
    }
  
    public isOn(): boolean {
      return this.on;
    }
  
    public turnOn(): void {
      this.on = true;
    }
  
    public turnOff(): void {
      this.on = false;
    }
  
    public getRadius(): number {
      return this.radius;
    }
  
    public setRadius(radius: number): void {
      this.radius = radius;
    }
  
    public getColor(): string {
      return this.color;
    }
  
    public setColor(color: string): void {
      this.color = color;
    }
  
    public toString(): string {
      if (this.on) {
        return `Quạt đang bật\nTốc độ: ${this.speed}\nMàu sắc: ${this.color}\nBán kính: ${this.radius}`;
      } else {
        return `Quạt đang tắt\nMàu sắc: ${this.color}\nBán kính: ${this.radius}`;
      }
    }
  }
  
  const fan1 = new Fan();
  fan1.setSpeed(Fan.FAST);
  fan1.setRadius(10);
  fan1.setColor("yellow");
  fan1.turnOn();
  
  const fan2 = new Fan();
  fan2.setSpeed(Fan.MEDIUM);
  fan2.setRadius(5);
  fan2.setColor("blue");
  fan2.turnOff();
  
  console.log("Đối tượng Fan 1:");
  console.log(fan1.toString());
  
  console.log("\nĐối tượng Fan 2:");
  console.log(fan2.toString());
  

  