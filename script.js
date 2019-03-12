// CODING CHALLENGES 7 

/*--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:

a) question itself

b) the answers from which the player can choose the correct one 
(choose an adequate data structure here, array, object, etc.)

c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers
(each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. 
The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer
is correct or not (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. 
So make sure that all your code is private and doesn't interfere 
with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

(function(){

  var Question = function (question, answer, correctNumber) {
    this.question = question;
    this.answer = answer;
    this.correctNumber = correctNumber;
  };

  var question1 = new Question('Do you think Javascript is the most amazing language in the world ?'
  ,['0: Yes', ' 1: No', '2: Maybe'], 0 );
  var question2 = new Question('What is the instructor lastname\'s of this amazing course ?'
  ,['0: Jonas Schnedermann', '1: Jonas Javascriptman', '2: Jonas Schnedtmann'], 2);
  var question3 = new Question('Which element is not an object in Javascript ?'
  ,['0: Function', '1: Boolean', '2: Array'], 1);

  var questionArray = [question1, question2, question3];

  var randomNumber = Math.floor(Math.random() * questionArray.length);

  Question.prototype.displayQuestions = function() {
    console.log(questionArray[randomNumber].question);

    for (var i = 0; i < this.answer.length; i++) {
      console.log(this.answer[i]);
    }
  };

  questionArray[randomNumber].displayQuestions();
 
  var userAnswer = parseInt(prompt('Select the correct answer by typing the right number.'));

  Question.prototype.checkAnswer = function(input) {
    if (input === questionArray[randomNumber].correctNumber) {
      console.log('Great, this is the right answer !');
    }
    else {
      console.log('Wrong, try again !');
    }
  };

  questionArray[randomNumber].checkAnswer(userAnswer);

})();


