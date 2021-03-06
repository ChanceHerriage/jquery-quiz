# jQuery Quiz Plugin

Forked from: [jchamill/jquery-quiz](https://github.com/jchamill/jquery-quiz) on 03/21/2020

## Tips

You can find examples of the quizzes you can make and a few of the 
scenarios that are possible in `/demos/`.


## Usage

### HTML

```
<div id="quiz">
  <div id="quiz-header">
    <h1>Basic Quiz Demo</h1>
    <!-- Optionally add a home button -->
    <p><a id="quiz-home-btn">Home</a></p>
  </div>
  <div id="quiz-start-screen">
    <p><a href="#" id="quiz-start-btn" class="quiz-button">Start</a></p>
  </div>
</div>
```

You may optionally add other HTML, this is just the markup
required by the plugin (although home button is optional).

### Javascript

```javascript
$('#quiz').quiz({
  questions: [
    {
      'q': 'A smaple question?',
      'options': [
        'Answer 1',
        'Answer 2',
        'Answer 3',
        'Answer 4'
      ],
      'correctIndex': 1, // first answer is index zero
      'correctResponse': 'Custom correct response.',
      'incorrectResponse': 'Custom incorrect response.'
    }
  ]
});
```

Add as many questions as you like. You may also specify a
different number of options (answers) for each question.

Don't forget to include jQuery.

#### Options

`allowIncorrect: boolean [default: true]`
> If false, the quiz will show the gameOver screen if a
> question is answered incorrectly. This will force the user
> to get a perfect score to complete the quiz.

`counter: boolean [default: true]`
> If true, a counter will be shown displaying the current
> question and how many questions there are. The output
> of the counter can be customized using `counterFormat`.

`nextQuestionScrollToTop: boolean [default: true]`
> If true, will automatically scroll to top of quiz
> when the user proceeds to the next quesiton.

`parseResponseAsHTML: boolean [default: true]`
> If true, the response text will be rendered as HTML
> elements to allow for more in-depth response customization.

`disableNotRelevant: boolean [default: false]`
> If ture, when an answer is given only the selected & correct
> answers will be highlighted. The other answers will be faded out and
> become disabled anchor links.

`hideNotRelevant: boolean [default: false]`
> If true, when an answer is given only the selected & correct
> answers will be shown. Highlighting the correct and incorrect.

`highlightCorrect: boolean [default: false]`
> If true, when an incorrect answer is selected, the correct
> answer will be highlighted with `.correct`.

`counterFormat: string [default: '%current/%total']`
> Specify the counter format. The placehoder `%current`
> displays which question you are currently on. The placeholder
> `%total` displays the total number of questions.

`startScreen: string [default: '#quiz-start-screen']`
> The id selector of the start screen. The start screen should
> contain the start button.

`startButton: string [default: '#quiz-start-btn']`
> The id selector of the start button.

`homeButton: string [default: '#quiz-home-btn']`
> The id selector of the home button.

`resultsScreen: string [default: '#quiz-results-screen']`
> The id selector of the results screen. This screen will
> display the number of questions correct.

`resultsFormat: string [default: 'You got %score out of %total correct!']`
> Specify the results format. The placehoder `%score`
> displays how many questions you got correct. The placeholder
> `%total` displays the total number of questions.

`gameOverScreen: string [default: '#quiz-gameover-screen']`
> The id selector of the game over screen. This screen is
> used when `allowIncorrect` is set to false.

`nextButtonText: string [default: 'Next']`
> The text to display on the next button.

`finishButtonText: string [default: 'Finish']`
> The text to display on the finish button.

`restartButtonText: string [default: 'Restart']`
> The text to display on the restart button.

#### Callbacks

With these callbacks you can extend the functions of each step of the quiz. 
Ideal for adding analytics and other custom features.

`setupCallback: function [default: undefined]`
> Callback fired after the setup of the quiz has finished.

`startCallback: function [default: undefined]`
> Callback fired after the quiz has been started.

`answerCallback: function [default: undefined]`
> Callback fired after an answer is selected.

`nextCallback: function [default: undefined]`
> Callback fired after the next button is clicked.

`gameOverCallback: function [default: undefined]`
> Callback fired if the quiz option `allowIncorrect` is
> set to `false` after the user misses a question.

`finishCallback: function [default: undefined]`
> Callback fired after the finish button is clicked.

`restartCallback: function [default: undefined]`
> Callback fired after the quiz is restarted to the
> first question.

`resetCallback: function [default: undefined]`
> Callback fired after the quiz is reset to 
> the first question with the user having seen the results.

`homeCallback: function [default: undefined]`
> Callback fired after the home button is clicked.