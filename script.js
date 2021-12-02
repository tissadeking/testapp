const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
//const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const done_btn = document.querySelector(".done input");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    //showQuetions(0); //calling showQestions function
    //queCounter(1); //passing 1 parameter to queCounter
    startTimer(180); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  180;
//let que_count = 0;
//let que_numb = 1;
//let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

//const restart_quiz = result_box.querySelector(".buttons .restart");
//const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
/*restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
} */

// if quitQuiz button clicked
/*quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}*/
/*done_btn.onclick = ()=>{
	clearInterval(counter);
	clearInterval(counterLine);
	check();
}*/

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            check();
            /*const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option */
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 329);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}





function check() {
	//start_btn.classList.remove();
	start_btn.style.display="none"; 
	info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    $('html,body').scrollTop(0); //to scroll to the beginning of the page anytime the button is clicked
    
	var c=0;
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var q8=document.quiz.question8.value;
    var q9=document.quiz.question9.value;
    var q10=document.quiz.question10.value;
	var result=document.getElementById("result2");
	var quiz=document.getElementById("quiz");
    var name2 = document.getElementById("name2").value;
    
	if (q1=="Ionisation Energy") {c++}
	if (q2=="Leonardo da Vinci") {c++}
	if (q3=="Angular momentum") {c++}
	if (q4=="0.1 N") {c++}
	if (q5=="Carburettor") {c++}
    if (q6=="Gravitational constant") {c++}
    if (q7=="Its vibration increases") {c++}
    if (q8=="force, impulse") {c++}
    if (q9=="gravitational force") {c++}
    if (q10=="Einstein") {c++}
	
	const score = c * 10;
		//document.write(name2);
	//quiz.style.display="none";
    //result.textContent=`${c}`;
    result.textContent=`Thanks, ` + name2 + `, you scored ${score}%.`;

    //`${c}`;
	/*
	if (c<=6) {
		result.textContent= name + surname + `Your result is ${c}/10.`
	} else {
		result.textContent= name + surname + `Your result is ${c}/10.`

	} */

}

