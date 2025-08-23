const isUserLoggedin = true;
if(isUserLoggedin){
    console.log("yes");
}
else{
    console.log("No");
}
//==,===
if(2==2){//is case me datatype check nhi hoga thats why equal h.
    console.log(" The Values are equal");
}
else{
    console.log("not equal");
}
if(2==="2"){//is case me datatype *bhi* check hoga.
    console.log("equal");
}
else{
    console.log("Values are equal but datatype is not equal");
}

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}


