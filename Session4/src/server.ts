// Đối tượng User => chỉ là 1 khuôn mẫu
class User {
    // Khai báo các property ( thuộc tính của đối tượng )
    // Từ khóa this dùng để trỏ đến đối tượng mà nó đang đứng
    userId:number;
    userName:string;
    age:number;
    address:string;
    // Hàm tạo đối tượng
    constructor(userId:number,userName:string,age:number,address:string){
        // Gán lại giá trí cho các thuộc tính của đối tượng user
        this.userId = userId;
        this.userName = userName;
        this.age = age;
        this.address = address;
    }

    getName():string{
        return this.userName;
    }
}

// Khởi tạo đối tượng => sử dụng từ khóa new
const nam = new User(1,"Nam",18,"Ha Noi");

console.log(nam.getName());

// Thiết kế 1 đối tượng Product gồm các trường : id, name price, from
class Product{
    id:number;
    name:string;
    price:number;
    from:string;
    constructor(id:number,name:string,price:number,from:string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.from = from;
    }
}

 const quy = new Product(1,"Quy",1000,"Viet Nam");

//  class Circle{
//     radius:number;
//     color:string;
//     constructor(radius:number,color:string){
//         this.radius = radius;
//         this.color = color;
//     }
//     perimeter():number{
//         return 2*Math.PI*this.radius;
//     }
//     acreage():number{
//         return Math.PI*this.radius*this.radius
//     }
    
//  }

 class Preson{
     id:number;
     name:string;
     age:number;
     address:string;
     constructor(presonId:number,presonName:string,age:number,address:string){
         this.id = presonId;
         this.name = presonName;
         this.age = age;
         this.address = address;
     }
 }

class Student extends Preson{
    className:string;
    score:number;
    constructor(className:string,score:number,presonId:number,presonName:string,age:number,address:string){
        super( presonId,presonName,age,address);
        this.className = className;
        this.score = score;
    }   
    learn():string{
        return "learn";
    }
}
const student = new Student("C1",10,1,"Nam",18,"Ha Noi");