function hello(){
console.log(`DB CONNECTED`);

}
hello();//invoked
//but what if global scope is polluted tabh hum,
//named IIFE
(function hello2(){
    console.log(`DB CONNECTED`);
})();
//UNAMED IIFE
(() => {
    console.log(`DB CONNECTED`);
})();
//you can also,PAS PARAMETERISED IIFE
((name) =>{
    console.log(`DB IS CONNECTED TO ${name}`);
})("Chhavi");

//SEMICOLON LAGANA JARURI HAI DO IIFE KE BEECH ME,WRNA EXECUTE NHI HOGA.