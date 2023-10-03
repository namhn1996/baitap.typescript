// Cách 1: giải pháp chưa tối ưu
// - Xác định vấn đề
// - Xác định rõ input, output
// - Xác định điều kiện của input
// Các bước xử lí vấn đề

const same = (arr1:number[], arr2:number[]):boolean => {
    if(arr1.length !== arr2.length) return false
    for(let i = 0; i<arr1.length;i++){
        const isCheckIndex = arr2.indexOf(arr1[i] ** 2)
        if(isCheckIndex === -1){
         return false}
        arr2.splice(isCheckIndex, 1)
    }
    return true
}

// Bai 01

const validAnagram = (str1: string, str2: string): boolean => {
    let StrObject1: { [key: string]: number } = {};
    let StrObject2: { [key: string]: number } = {};
    for (let key of str1) {
      StrObject1[key] = (StrObject1[key] || 0) + 1;
    }
    for (let key of str2) {
      StrObject2[key] = (StrObject2[key] || 0) + 1;
    }
  
    for (let key in StrObject1) {
      if (!(key in StrObject2)) {
        return false;
      }
      if (StrObject1[key] !== StrObject2[key]) {
        return false;
      }
    }
  
    return true;
  };
  
  // Bai 02
  const countUniqueValues = (arr: number[]): number => {
    if (arr.length == 0) {
      return 0;
    }
    let obj: { [key: number]: number } = {};
    let count: number = 0;
    for (let key of arr) {
      if (!(key in obj)) {
        obj[key] = (obj[key] || 0) + 1;
        count++;
      }
    }
  
    return count;
  };
  
  // console.time("countUniqueValues");
  // console.log(countUniqueValues([-2, -1, -1, 0, 1]));
  // console.timeEnd("countUniqueValues");
  
  // Bai 03
  const sameFrequency = (num1: number, num2: number): boolean => {
    let obj1: { [key: string]: number } = {};
    let obj2: { [key: string]: number } = {};
    for (let key of num1.toString()) {
      obj1[key] = (obj1[key] || 0) + 1;
    }
  
    for (let key of num2.toString()) {
      obj2[key] = (obj2[key] || 0) + 1;
    }
  
    for (let key in obj1) {
      if (!(key in obj2)) {
        return false;
      }
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  };
  
  // console.time("sameFrequency");
  // console.log(sameFrequency(3589578, 5879385));
  // console.timeEnd("sameFrequency");
  
  // Bai 04
  const areThereDuplicates = (...chars: any): boolean => {
    let obj: { [key: string]: number } = {};
    for (let key of chars) {
      if (key in obj) {
        return true;
      }
      obj[key] = (obj[key] || 0) + 1;
    }
    return false;
  };
  
  // console.log(areThereDuplicates(1, 2, 3));
  
  // Bai 05
  
  const averagePair = (arr: number[], averageNum: number): boolean => {
    let sum = averageNum * 2;
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      if (arr[start] + arr[end] > sum) {
        end--;
      }
      if (arr[start] + arr[end] < sum) {
        start++;
      }
      if (arr[start] + arr[end] === sum) {
        return true;
      }
    }
    return false;
  };
  
  // console.log(averagePair([1, 2, 3], 2.5));
  // console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
  // console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));

