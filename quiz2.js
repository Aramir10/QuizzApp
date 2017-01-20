var score = 0;

function HOLA() {
    confirm("You will be propmted  to respond some questions");
    alert("Each question has one possible answer from a list of answers and you'll get one point for each correct answer and if you het more than 4 points you passed the test");
    var sure = prompt("If you want to continue type 'yes' otherwise 'no' ");
    if (sure == "yes") {
        alert("OK here we go");
    } else {
        alert(" get out of here ");
    }}
    HOLA();

function questQuiz(){
//question1
if (prompt(" Whats your favorite color 1) Blue 2) Red 3) White 3) Purple ") == 1) {
    score++;
}
//question2
if (prompt(" Whats the best programming language 1) javascript 2) Ruby 3) C++ 4) Python ") == 1) {
    score++;
}
//question3
if (prompt(" Who is the smartes super hero 1) Superman 2) Batman 3) Flash 4) Deadpool"  ) == 2) {
    score++;
}
//question4
if (prompt(" Are you mad ?  1) Yes  2) No  3) Maybe " ) == 3) {
    score++;
}
//question5
if (prompt(" Which is the best Basket Ball team 1) Golden State 2) Spurs 3) Lakers 4) Mavericks" ) == 2) {
    score++;
}}
questQuiz();


alert("Your socre is " + score);

if (score >= 4) {
    alert("Great job you passed ");
    }
		else {
			alert("You lose try again");
			questQuiz();

}



		//
		// var questions = [{
    //     question: 'Are you happy?',
    //     answer: 'yes',
    //     affirm: 'Yay! You got it right!',
    //     rebuttal: 'Nope, you are definitely happy.'
    // },
    // {
    //     question: 'Are you mad?',
    //     answer: 'no',
    //     affirm: 'Good job!',
    //     rebuttal: 'Not right.'
    // }];
