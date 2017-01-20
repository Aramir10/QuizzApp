
var score = 0;
function welcome() {
    confirm("You will be porpmpeted  to repond some questions");
    confirm("Each question has one possible answer from a list of answers");
    var sure = prompt("Do you want to continue?");
    if (sure == "yes")
		{
        alert("Good here we go");
    }else
		{
        alert("boring");
    }
}

     welcome();
		if(prompt("whats your favorite color 1 blue 2 red 3 white") == 1)
		{
			score++;

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
