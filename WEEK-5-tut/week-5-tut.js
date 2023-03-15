function randomNum(num1,num2){
for(var i=0;i<10;i++){
var num1 = Math.floor(Math.random() * 10);      
var num2 = Math.floor(Math.random() * 10);
return num1+" + "+num2+"="
}
}
document.getElementById("question1").innerHTML = randomNum();  