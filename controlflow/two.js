//break and continue
// for(let i=1;i<=20;i++){
//     if(i==5){
//         console.log("5 is detected");
//         break
//     }
// console.log(`Value of i is : ${i}`);
// }   
for(let i=1;i<=20;i++){
    if(i==5){
        console.log("5 is detected");
     continue//skips 5 statement.
    }
console.log(`Value of i is : ${i}`);
}
let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }
//WHILE LOOP
  let i=0
  while(i <=10){
    console.log(`Value of i is :${i}`);
    i=i+2;
  } 
  let myarr=[1,2,3,4,5]
  let arr=0
  while(arr<myarr.length){
    console.log(`Value is : ${myarr[arr]}`);
    arr++;
  }