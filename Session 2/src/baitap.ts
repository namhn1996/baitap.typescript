type u = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    age: number;
    salary: number;
  }
  const Users: u[] = [
    {
      id: 1,
      first_name: "Eamon",
      last_name: "Harhoff",
      email: "eharhoff0@imageshack.us",
      gender: "Nam",
      age: 76,
      salary: 18888,
    },
    {
      id: 2,
      first_name: "Laney",
      last_name: "Whittam",
      email: "lwhittam1@issuu.com",
      gender: "Nữ",
      age: 42,
      salary: 15018,
    },
    {
      id: 3,
      first_name: "Lynett",
      last_name: "Twinberrow",
      email: "ltwinberrow2@gov.uk",
      gender: "Nữ",
      age: 99,
      salary: 13343,
    },
    {
      id: 4,
      first_name: "Madella",
      last_name: "Kliesl",
      email: "mkliesl3@ft.com",
      gender: "Nữ",
      age: 56,
      salary: 5248,
    },
    {
      id: 5,
      first_name: "Simona",
      last_name: "Knee",
      email: "sknee4@sciencedaily.com",
      gender: "Nữ",
      age: 61,
      salary: 14376,
    },
    {
      id: 6,
      first_name: "Cord",
      last_name: "McMurthy",
      email: "cmcmurthy5@wordpress.org",
      gender: "Nam",
      age: 86,
      salary: 9514,
    },
    {
      id: 7,
      first_name: "Obed",
      last_name: "Beaven",
      email: "obeaven6@msn.com",
      gender: "Nam",
      age: 91,
      salary: 18463,
    },
    {
      id: 8,
      first_name: "Elayne",
      last_name: "Smeuin",
      email: "esmeuin7@wsj.com",
      gender: "Nữ",
      age: 96,
      salary: 19907,
    },
    {
      id: 9,
      first_name: "Robin",
      last_name: "Picford",
      email: "rpicford8@typepad.com",
      gender: "Nữ",
      age: 55,
      salary: 14975,
    },
    {
      id: 10,
      first_name: "Patsy",
      last_name: "Ochterlonie",
      email: "pochterlonie9@latimes.com",
      gender: "Nữ",
      age: 93,
      salary: 9716,
    }
  ];
//   console.log(Users);
  // Bai 1
let names:string[] = []
Users.forEach((user)=>{
    names.push(user.first_name, user.last_name)
})
// console.log(names);


// Bai 2
function filterUsersByGenderAndAge(Users: u[]): u[] {
    return Users.filter(user => user.gender === "Nam" && user.age < 40);
  }
  const maleUsersUnder40: u[] = filterUsersByGenderAndAge(Users);
  console.log(maleUsersUnder40);