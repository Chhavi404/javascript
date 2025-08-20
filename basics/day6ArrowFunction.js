//This keyword
//it talks about current context/variables. 
const user={
    username:"Chhavi",
    price:"299",
    welcomeMessage:function(){
        console.log(` ${this.username},welcome to website`);
        console.log(this)
    }
}
user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()
console.log(this);//{} just returns a empty object if you only try to print this.
function func(){
    console.log(this);
    let username = "Chhavi";
    console.log(this.username)
}
func()

//Arrow Function
 //yha function keyword naa lagake just ek arrow lagani h.
 const arrowfunc = () => { 
    let username = "Chhavi"
    console.log(this.username);//undefined
   console.log(this); 
 }
const addnum = (num1,num2) =>{
    return num1+num2;
}
console.log(addnum(4,3));
//implicit return
const addnum2 = (num1,num2) =>
   (num1+num2);//here the function will without using parenthesis also with the value you want to return.
//but but but,if you want to return a  object its necessary to use parenthesis().
console.log(addnum2(3,4));
//we can also create a arrow function sithout holding it in a variable or declaring a name for it:
(() => {
    console.log(`DB CONNECTED`);
})()




