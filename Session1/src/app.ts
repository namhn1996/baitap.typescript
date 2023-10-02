// cách khai báo biến 1
type Student = {
    fullName:string,
    age:number,
    isMade:boolean
}
const Student = {
    fullName: 'Nguyen Van A',
    age: 20,
    isMade: true
}
// cách khai báo biến 2
interface Student2{
    fullName:string,
    age:number,
    isMade:boolean
}
const Student2:Student2 = {
    fullName: 'Nguyen Van A',
    age: 20,
    isMade: true
}


interface Student3 {
    fullName: string,
    age: number,
    isMade: boolean
}
// Array
const listStudent:Student3[] = [
    {
        fullName: 'Nguyen Van A',
        age: 20,
        isMade: true
    },
    {
        fullName: 'Nguyen Van B',
        age: 20,
        isMade: true
    }
]
const listNumber:number[] = [1, 2, 3, 4]











const duplicateStr = (str:string) =>{
    const result : {[key:string] :number} ={}
        for(let i = 0; i < str.length; i++){
         if(str[i] in result){
            result[str[i]] += 1
         }  else{
            result[str[i]] = 1
         }

        }
    return result
}


// BAI 1
const twoSum = (numberList : number[], target : number) =>{
    for(let i = 0; i < numberList.length; i++){
        for(let j = i + 1; j < numberList.length; j++){
            if(numberList[i] + numberList[j] === target){
                return [i, j]
            }
        }
    }
}
// console.log(twoSum([2,7,11,15],9));

// Bài 2
const isCheckBracket = (str:string) =>{
    const stack:string[] = [];
    const open:string[] = ['(','[','{'];
    const close:string[] = [')',']','}'];
    for(let i = 0; i < str.length; i++){
        if(open.includes(str[i])){
            stack.push(str[i])
        } else if(close.includes(str[i])){
            const inxClose = close.indexOf(str[i]);
            const openEqual = open[inxClose];
            if(stack.length === 0 || stack.pop() !== openEqual){
                return false
            }
        }
    }       return stack.length === 0
}

console.log(isCheckBracket("()[]{}"));


// Bai 3

const palindrome = (s:string):boolean =>{
let cleanStr = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
let revStr = cleanStr.split('').reverse().join('')
return cleanStr === revStr
}

// console.log(palindrome('A man, a plan, a canal: Panama'));


// Bai 4


