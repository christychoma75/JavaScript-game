// Quiz begin no answers
var correct = 0;

// asking question
var answer1 = prompt(" Name a programming language that's also a gem");
if( answer1.toUpperCase() === 'RUBY'){
    correct += 1;
}
var answer2 = prompt("Name a programing language that's also a snake");
if( answer2.toUpperCase() === 'PYTHON'){
    correct += 1;
}
var answer3 = prompt("What's the programming language that style a webpage");
if(answer3.toUpperCase() === 'CSS'){
    correct += 1;
}
var answer4 = prompt("What's the programming language that create a webpage?");
if(answer4.toUpperCase() === 'HTML'){
    correct += 1; 
}
var answer5 = prompt("What's the programming language that interact with a webpage?");
if(answer5.toUpperCase() === 'JAVASCRIPT'){
    correct +=1;
}
// output
document.write("<p> you got "  +  correct + " out of 5 questions correct!");
if( correct === 5){
    document.write("<p><strong>You have earned gold!</strong></p>");
} else if (correct >= 3) {
    document.write("<p><strong>You have earned bronze </strong></p>");
} else if(correct >= 1 ){
    document.write("<p><strong>You have earned silver </strong></p>");
} else {
    document.write("<p><strong>You fail and you have to study");

}
