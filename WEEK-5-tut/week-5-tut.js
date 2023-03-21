// function randomNum(num1,num2){
// for(var i=1;i<11;i++){
// var num1 = Math.floor(Math.random() * 10);      
// var num2 = Math.floor(Math.random() * 10);
// return num1+" + "+num2+"=";
// }
// }
function getUserInput(num1,num2){
for(var i=1;i<11;i++){
    var input =prompt("answer the following question"+  number_1 +" + "+number_2+" = ");  
    return input;
}
}
function Validate(userAnswer, correctAnswer){
    if(userAnswer == correctAnswer){
        return true;
    }
    else{
        return false;
    }
}

for(var i=1;i<11;i++){
    var number_1 = Math.floor(Math.random() * 10);  ;
    var number_2 = Math.floor(Math.random() * 10);
    var answer = number_1+number_2;

    var user_answer = getUserInput(number_1,number_2);

    document.getElementById("question"+i).innerHTML = number_1 +" + "+number_2+" = ";
    document.getElementById("answer"+i).innerHTML = user_answer;
    document.getElementById("feedback"+i).innerHTML = Validate(user_answer,answer);


}