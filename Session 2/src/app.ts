
// kiểu union type
let age:number | string | boolean = 10 

type Stutus = "success" | "error" | "warning"

// Kiểu intersection type
type User = "user"
type Admin = "admin"

type Role = User & Admin
const role:Role = "admin" as Role

// type enum => truy xuất được hai chiều
enum Roles{
    admin,
    user,  
    emloyee
}

// enum string => truy xuất 1 chiều
enum HTTP{
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}



