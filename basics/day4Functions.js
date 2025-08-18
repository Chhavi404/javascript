function sum(num1,num2){
    return num1+num2
}
let result=sum(3,4)
console.log("Sum is : ",result)
function loginUserMessage(username){
return `${username} just logged in`
}
const Enter = loginUserMessage("Chhavi");
console.log(Enter)
//or
console.log(loginUserMessage("Chhavi"))
function TotalCartPrice(value1,...num1){//only the parameters after ... will go inside array,not the value1
return num1
}

console.log(TotalCartPrice(100,200,300,5000))
//this is how we call several objects using a fucntion:
let user = {
username:"Chhavi",
price:"999",
}
function handleObject(anyobject){
 console.log(` Username is: ${anyobject.username}, price is ${anyobject.price}`)
}
//or you can directly pass the object as a paramter inside the function:
 handleObject({
    username: "Chhavi",
    price:"999",
})
//you can also pass array into a function
let arr=[100,200,300,400]
function returnval(getarray){
    return getarray[2]
    }
    let variable=returnval(arr)
    console.log(variable)

    