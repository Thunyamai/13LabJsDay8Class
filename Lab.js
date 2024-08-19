// Lab - class
// Lab 1
// class Calculator {
//   constructor(_init = 0) {
//     this.value = _init
//   }
//   add(num) {
//     this.value += num
//     return this.value
//   }
//   sub(num) {
//     this.value -= num
//     return this.value
//   }
//   multi(num) {
//     this.value *= num
//     return this.value
//   }
//   divide(num) {
//     this.value /= num
//     return this.value
//   }
//   show() {
//     console.log(`Value = ${this.value}`)
//   }
// }
// let result = new Calculator(10)
// result.show()
// console.log(result.add(10))
// console.log(result.multi(10))
// console.log(result.divide(10))



// Lab 2 ให้สร้าง Class ชื่อ Sale
// class Sale {
//   constructor(name, amount, price) {
//     this.name = name;
//     this.amount = amount;
//     this.price = price;
//   }

//   calcPrice() {
//     return this.amount * this.price;
//   }
// }

// class Beverage extends Sale {
//   constructor(name, amount, price) {
//     super(name, amount, price);
//   }
// }

// // การสร้าง object beverage จาก Beverage
// const beverage = new Beverage('Pepsi', 3, 19);
// const totalPrice = beverage.calcPrice();

// // แสดงผลของ calcPrice() ที่ได้
// console.log(`The total price of ${beverage.name} is ${totalPrice}`);   //Pepsi is 57


// -------------------------------- Static
// Lab 1 - Method: isArray(input)

// function isArray(input) {
//   return Array.isArray(input);
// }

// console.log(isArray([1, 2, 3])); // true
// console.log(isArray('Hello'));  // false
// console.log(isArray([])); // true


// -----------------Object keys, values, entries----------------------

// Lab 1
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// function sumSalaries(salaries) {
//   return Object.values(salaries).reduce((prev, salary) => prev + salary, 0);
// }

// console.log(sumSalaries(salaries)); // 390


// Lab 2
// function checkEmptyObj(obj) {
//   return Object.keys(obj).length === 0;
// }


// let emptyObj = {};
// let nonEmptyObj = { name: 'John', age: 35 };

// console.log(checkEmptyObj(emptyObj));    // true ว่าง
// console.log(checkEmptyObj(nonEmptyObj)); // false ไม่ว่าง


// ------------------Rest and Spread operator------------

// Lab 1 - จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
// let calMulti = (...nums) => {
//   let sum = 1
//   for (let num of nums) {
//     console.log(num)
//     sum *= num
//   }
//   return  sum
// }
// let result = calMulti(1,2,3,4,5)
// console.log(result)


// Lab 2 - จงเขียนฟังก์ชัน filterOutOdds 
// โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่

// let filterOdds = (...nums) => {
//   let odd = nums.filter((item) => {
//     console.log(item)
//     return item % 2 == 0
//   })
//   return odd   //return ออกจาก fn
// }

// let result = filterOdds
//   (1, 2, 3, 4, 5, 6, 7, 8)
// console.log(result)


// Lab 3 จงเขียนฟังก์ชัน mergeObjects 
// โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด 
// และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน

// let mergeObj = (...obj) => {
//   console.log(obj)
//   let empty = {}
//   for (let i = 0; i < obj.length; i++) {       // ใช้ลูป for เพื่อเข้าถึง object ที่อยู่ข้างใน
//     Object.assign(empty, obj[i])
//   }
//   return  empty
// }

// let obj1 = {
//   fname: 'Thunyamai',
//   lname: 'Yonglun'
// }
// let obj2 = {
//   nickName: 'Anya'
// }
// let result = mergeObj(obj1, obj2)
// console.log(result)


// ------------------------Rest and Spread operator

// Lab - 4 
// ข้อมูลจากโจทย์ 
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];
// let combineArray = [...nums1,...nums2]  // รวม ก้อน 1 และ 2 ตามโจทย์
// console.log(combineArray)  
// const nums3 = [5,...nums1, -6, 1, ...nums2] 
// console.log(nums3)

// const sum = nums3.reduce((prev,curr) => {
//   return prev+curr;
// },0)
// console.log(`ผลรวม คือ ${sum}`)

// // // Array destructuring     copy item ที่อยู่ภายใน arr ออกมาไว้ที่ตัวแปร
// let arr = ['John', 'Doe'];
// let [firstName, surname] = arr;     // ประกาศตัวแปร
// console.log(firstName); // John
// console.log(surname); // Doe
// console.log(arr); // Doe


// Lab 5 - จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
// แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 
// ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง

// วิธีทำ
// let editArr = (arr) => {
//   let newArr = [...arr]
//   // console.log(newArr)
//   // if(newArr.length > 3 ){

//   // }
//   newArr[3] = newArr[3] ** 2
//   return newArr
// }

// let arr = [5, 10, 15, 20, 25, 30]
// let result = editArr(arr)
// console.log(result)


// Lab 6 - จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก 
// ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก 
// และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ spread parameter

// วิธีทำ
// let handlePerson = (fname,lname,...hobbies) => {     // ใช้ rest เพราะมากกว่า 1
//   console.log(hobbies)
//   return [fname, lname,...hobbies]      // พยายาม return ข้อมูลออกมาจากฟังก์ชั่นเพื่อที่เราจะได้ใช้ต่อได้
// }
// let result = (handlePerson('Thunyamai', 'Yonglun', 'read books', 'swim', 'online shopping'))
// console.log()


// Lab 7 - จงเขียนฟังก์ชัน doubleAndReturnArgs 
// โดยรับพารามิเตอร์มาเป็น Array และตัวเลขกี่ตัวก็ได้ 
// และ return ค่าเป็น Array ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น Array
// และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง

// doubleArr([1, 2, 3], 4, 4);
// doubleArr([2], 10, 4);

// let doubleArr = (arr, ...num) => {
//   console.log(arr)
//   console.log(num)
//   let doubleArr = num.map((item) => item * 2)
//   console.log(doubleArr)
//   return arr.concat(...doubleArr)
// }


// Lab 9 - จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array 
// และ return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว
// function cloneArray(array) {
//   return [...array];
// }

// const originalArray = [1, 2, 3, 4];
// const clonedArray = cloneArray(originalArray);

// console.log(clonedArray); // [1, 2, 3, 4]
// console.log(originalArray === clonedArray); // false (เป็น Array คนละตัวกัน)

// Lab 10
// จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return ค่าเป็น Object ที่มี key - value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว
// function cloneObject(obj) {
//   return { ...obj };
// }

// const originalObject = { a: 1, b: 2, c: 3 };
// const clonedObject = cloneObject(originalObject);

// console.log(clonedObject); // { a: 1, b: 2, c: 3 }
// console.log(originalObject === clonedObject); // false (เป็น Object คนละตัวกัน)



//------------------Destructuring------------

// Lab 11 - ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // *  Maya
// console.log(second); // ** Marisa
// console.log(third); // *** Chi


// Lab 12
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // * Raindrops on roses
// console.log(whiskers); // ** whiskers on kittens
// console.log(aFewOfMyFavoriteThings); // *** [ Bright copper kettles ,warm woolen mittens]
// เพราะ 1. raindrops จะได้รับค่า 'Raindrops on roses' ซึ่งเป็นสมาชิกตัวแรกของ array
// 2. whiskers จะได้รับค่า 'whiskers on kittens' ซึ่งเป็นสมาชิกตัวที่สองของ array
// 3. ...aFewOfMyFavoriteThings ใช้ rest operator จึงเก็บค่าที่เหลือจาก array เข้าไปในอาร์เรย์ใหม่นี้


// Lab 13
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // * [ 10,30,20 ]
// // เพราะมีการใช้ destructing assignment ในการสลับค่า [numbers[20], numbers[30]] = [numbers[2], numbers[1]]
// //  ดังนั้นค่าในตำแหน่งที่ 1 และ 2 จึงมีการสลับกัน


// // Lab 14
// // ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // * 8  เพราะ numPlanets ถูกกำหนดด้วยค่า 8 จาก object`facts`
// console.log(yearNeptuneDiscovered); // ** 1846 เพราะ yearNeptuneDiscovered ถูกกำหนดด้วยค่า 1846 จาก object`facts`
// // เพราะ ใช้ destructuring assignment เพื่อแยกค่าจาก facts ลงในตัวแปร numPlanets และ`yearNeptuneDiscovered`
// // ดังนั้น, console จะได้ค่าออกมาแบบนี้

// Lab 15
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// //เพราะนี่คือการใช้ rest operator ดังนั้น ค่าที่เหลือที่ numPlanets ไม่ได้รับไว้ จะเข้ามาใน discoveryYears
// // ดังนั้น console.log(discoveryYears) จึง log ออกมาได้ 2 ค่า ดังข้างล่าง
// console.log(discoveryYears); // * 
// คำตอบ
// {
// yearMarsDiscovered:
// 1659
// yearNeptuneDiscovered:
// 1846
// }


// Lab 16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *
// getUserData({ firstName: 'Melissa' }); // **
// getUserData({}); // ***ไม่มีค่าออกมา และฟังก์ชั่นจะ Error เนื่องจาก ไม่มีการกำหนดค่าให้ firstName และ`favoriteColor`
// // 1.

// console.log({ firstName: 'Alejandro', favoriteColor: 'purple' }) //"Your name is Alejandro and you like purple"
// console.log({ firstName: 'Melissa' }) // "Your name is Melissa and you like green" เพราะ green เป็นค่า default
// console.log({}) 


// Lab 17
// ให้ใช้ Array destructuring ในการสลับค่าตัวแปร guest กับ admin

// let guest = 'Jane';
// let admin = 'Pete';
// [guest, admin] = [admin, guest];

// console.log(guest); // 'Pete'
// console.log(admin); // 'Jane'

// Lab 18
// จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName และ age โดยถ้า user มีอายุมากกว่า 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ - นามสกุล ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน(ใช้ destructuring)
// function checkAge(user) {
//   const { firstName, lastName, age } = user;

//   if (age > 18) {
//     console.log(`สวัสดี ${firstName} ${lastName}`);
//   } else {
//     console.log('ไม่มีสิทธิ์เข้าใช้');
//   }
// }

// const user1 = { firstName: 'Anya', lastName: 'Mi', age: 30 };
// const user2 = { firstName: 'Base', lastName: 'Ball', age: 18 };

// checkAge(user1);  // 
// checkAge(user2);  // ไม่มีสิทธิ์เข้าใช้งาน


// Lab 19
// จงเขียน Object destructuring โดยกำหนดให้
// ตัวแปร name เก็บค่า name property
// ตัวแปร age เก็บค่า years property
// ตัวแปร isAdmin เก็บค่า isAdmin property หากไม่มีค่าให้ default value เป็น false

// let user = {
//   name: 'John',
//   years: 27
// };

// let { name, years: age, isAdmin = false } = user;

// console.log(name);    // 'John'
// console.log(age);     // 27
// console.log(isAdmin); // false


// Lab 21
// ให้ใช้ Array destructuring โดยให้ a, b, c, d, e และ f มีค่า 1, 2, 3, 4, 5, และ 6 ตามลำดับ

// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [ a, [b, [[[c, d], e], f]]] = arr;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)


// Lab 22
// ให้ใช้ Object destructuring โดยให้ a เท่ากับ 5 และ b เท่ากับ 10
// const obj = { prop: 5, prop2: 10 };

// const { prop: a, prop2: b } = obj;

// console.log(a); // 5
// console.log(b); // 10a


// Lab 23 - a และ b มีค่าเท่าไร
// let a, b;
// // { a, b } = { a: 1, b: 2 };  //แบบนี้จะ error : Uncaught SyntaxError: Unexpected token '=' at line 408 col 10

// ({ a, b } = { a: 1, b: 2 });
// console.log(a)  //1
// console.log(b)  //2


// Lab 24 - a และ b มีค่าเท่าไร
// const [, , , a, b] = [1, 2, 3];
// console.log(a)  //1 undefined เพราะมีค่ากำหนดแค่ 3 ตำแหน่ง ไม่มีตำแหน่งที่ 4 และ 5
// console.log(b)  //2 undefined เพราะมีค่ากำหนดแค่ 3 ตำแหน่ง ไม่มีตำแหน่งที่ 4 และ 5


// Lab 24 - ให้ใช้ destructuring โดยให้ x เท่ากับ 5 และ y เท่ากับ 100
// const q = { prop: 5, prop2: [10, 100] };

// const { prop: x, prop2: [, y] } = q;

// console.log(x); // 5
// console.log(y); // 100


// Lab 26 - ให้ใช้ destructuring โดยให้ x เท่ากับ Hello และ y เท่ากับ b
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// const { prop: x, prop2: { prop2: { nested: [, y] } } } = q;
// console.log(x); // Hello
// console.log(y); // b

// Lab 27
// ให้ใช้ for … of กับ names(ให้ destructuring object ในแต่ละ iteration)
// ในแต่ละ iteration ให้ console.log ค่า Full name ออกมา
// โจทย์
// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];

// // วิธีทำ
// for (const { firstName, lastName } of names) {
//   console.log(`${firstName} ${lastName}`);
// }

// // ผลลัพธ์:
// // John Doe
// // Jack Dann
// // Joe Dunne


// Lab 28
// ให้ใช้ for … of กับ users(ให้ destructuring object ในแต่ละ iteration)
// ในแต่ละ iteration ให้ console.log ค่า user ตามด้วย age หาก age ไม่มีค่าให้ใช้ unknown

// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// for (const { user, age = 'unknown' } of users) {
//   console.log(`${user} ${age}`);
// }

// ผลลัพธ์
// Name1 unknown
// Name2 2
// Name2 unknown
// Name3 4
