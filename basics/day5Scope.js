//Scope and Functions
if(true){
    const username = "Chhavi"
     if(username == "Chhavi")  {
        const website = " youtube"
        console.log(username + website);
        
     } 
     //console.log(website);
}
//console.log(username)
//WAYS TO DECLARE A FUNCTION
//1.
console.log(addone(6));
function addone(num){
    return num + 1;
}
//2.
//console.log(func(5));-if i call this function here,will throw me a error because this method to declare a function,is that we store it inside a variable,so if you try to call it before function definition ,then it will throw a error.
//whereas if you try to,call a function before definition,in the first method,therer won't be any error because,doesnt matter you call the function before definition it will execute.
const func = function(num){
return num + 2;
}
console.log(func(5));
