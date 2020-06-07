let guessNum=document.querySelector("#guessNum");
let button1=document.querySelector("#btn1");
let ul=document.querySelector("#guesses");
let correctAns;
let maxNumberofChances=7;

button1.addEventListener("click",guess)


//generates a random number
function setRandom(){
    
    correctAns=Math.floor(1000+Math.random()*9000) +"";
    console.log("Generated no is"+correctAns);
}

//used to show the latest result to the user
function setMessage(msg) {

	document.getElementById("message").innerHTML = msg;
}

//Lets accept 4 digits from the user only
function validateInput(input) {
	if(input.length != 4) {
        setMessage("You must enter <b class='text-info'>4</b> Digits");
        return false;
    }
    return true;
}
// Shows final result to the user
function showAnswer(success) {
	let code = document.getElementById("code");
	if(success) {
		code.className += " success";
	}
	else {
		code.className += " failure";
	}
	code.innerHTML = correctAns;
	document.getElementById("inputdiv").style.display = "none";
}

function guess(){
    let userGuess=guessNum.value +"";
    if(guessNum.value > 0 && maxNumberofChances === 7 && validateInput(userGuess)){
        setRandom();
    }
    if(guessNum.value > 0 && maxNumberofChances >0 ){
        
        if(validateInput(userGuess)){
            let res=generateResult(userGuess,correctAns);
            maxNumberofChances--;
        }
       
        
       
        }
        else if(maxNumberofChances === 0){
        setMessage("No Luck This Time :( <a href='index.html'>Play Again</a>");
		showAnswer(false);
        } 

}



function generateResult(que,ans){
    if(que === ans){
        setMessage("You Cracked! :) <a href='index.html'>Play Again</a>");
        showAnswer(true);
        return;
    }
    let html = "<tr><td>" +que+ "</td><td>";
    let result='';
    for(let i=0; i < ans.length ;i++){
        if(ans[i] === que[i]){
            html += "<i class='glyphicon glyphicon-ok'></i>";
            result=result + ans[i];
        }else if(ans.indexOf(que[i]) > -1){
            html += "<i class='glyphicon glyphicon-transfer'></i>";
            result=result+"_";
        }else{
            html += "<i class='glyphicon glyphicon-remove'></i>";

            result=result+"*";
        }
        
        
    }
    html += "</td></tr>"
    document.getElementById("tbody").innerHTML += html;
    setMessage("Nope! Keep Try");
    return result;
}


