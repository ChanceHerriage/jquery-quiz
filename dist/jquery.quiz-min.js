/*!
 * jquery-quiz v0.0.1 - A simple jQuery quiz plugin.
 * Copyright (c) 2020 JC Hamill - http://jchamill.github.com/jquery-quiz/
 * License: MIT
 */


!function(z,v,m){"use strict";z.quiz=function(t,e){var s=this;s.$el=z(t),s.$el.data("quiz",s),s.options=z.extend(z.quiz.defaultOptions,e);var r=s.options.questions,i=r.length,n=s.options.startScreen,o=s.options.startButton,u=s.options.homeButton,a=s.options.resultsScreen,c=s.options.gameOverScreen,d=s.options.nextButtonText,l=s.options.finishButtonText,h=s.options.restartButtonText,q=1,p=0,f=!1;s.methods={init:function(){s.methods.setup(),z(m).on("click",o,function(t){t.preventDefault(),s.methods.start()}),z(m).on("click",u,function(t){t.preventDefault(),s.methods.home()}),z(m).on("click",".answers a",function(t){t.preventDefault(),s.methods.answerQuestion(this)}),z(m).on("click","#quiz-next-btn",function(t){t.preventDefault(),s.methods.nextQuestion()}),z(m).on("click","#quiz-finish-btn",function(t){t.preventDefault(),s.methods.finish()}),z(m).on("click","#quiz-restart-btn, #quiz-retry-btn",function(t){t.preventDefault(),s.methods.restart()})},setup:function(){var i="";s.options.counter&&(i+='<div id="quiz-counter"></div>'),i+='<div id="questions">',z.each(r,function(t,e){i+='<div class="question-container">',i+='<p class="question">'+e.q+"</p>",i+='<ul class="answers">',z.each(e.options,function(t,e){i+='<li><a href="#" data-index="'+t+'">'+e+"</a></li>"}),i+="</ul>",i+="</div>"}),i+="</div>",0===z(a).length&&(i+='<div id="'+a.substr(1)+'">',i+='<p id="quiz-results"></p>',i+="</div>"),i+='<div id="quiz-controls">',i+='<p id="quiz-response"></p>',i+='<div id="quiz-buttons">',i+='<a href="#" id="quiz-next-btn">'+d+"</a>",i+='<a href="#" id="quiz-finish-btn">'+l+"</a>",i+='<a href="#" id="quiz-restart-btn">'+h+"</a>",i+="</div>",i+="</div>",s.$el.append(i).addClass("quiz-container quiz-start-state"),z("#quiz-counter").hide(),z(".question-container").hide(),z(c).hide(),z(a).hide(),z("#quiz-controls").hide()},start:function(){s.$el.removeClass("quiz-start-state").addClass("quiz-questions-state"),z(n).hide(),z("#quiz-controls").hide(),z("#quiz-finish-btn").hide(),z("#quiz-restart-btn").hide(),z("#questions").show(),z("#quiz-counter").show(),z(".question-container:first-child").show().addClass("active-question"),s.methods.updateCounter()},answerQuestion:function(t){if(!f){f=!0;var e=z(t),i="",n=e.data("index"),o=q-1;if(n===r[o].correctIndex)e.addClass("correct"),i=r[o].correctResponse,p++;else if(e.addClass("incorrect"),i=r[o].incorrectResponse,!s.options.allowIncorrect)return void s.methods.gameOver(i);z("#quiz-response").html(s.options.parseResponseAsHTML?jQuery.parseHTML(i):resposne),z("#quiz-controls").fadeIn(),"function"==typeof s.options.answerCallback&&s.options.answerCallback(q,n,r[o])}},nextQuestion:function(){f=!1,z(".active-question").hide().removeClass("active-question").next(".question-container").show().addClass("active-question"),z("#quiz-controls").hide(),++q===i&&(z("#quiz-next-btn").hide(),z("#quiz-finish-btn").show()),s.methods.updateCounter(),s.options.nextQuestionScrollToTop&&z(v).scrollTop(s.$el.position.top),"function"==typeof s.options.nextCallback&&s.options.nextCallback()},gameOver:function(t){if(0===z(c).length){var e="";e+='<div id="'+c.substr(1)+'">',e+='<p id="quiz-gameover-response"></p>',e+='<p><a href="#" id="quiz-retry-btn">'+h+"</a></p>",e+="</div>",s.$el.append(e)}z("#quiz-gameover-response").html(t),z("#quiz-counter").hide(),z("#questions").hide(),z("#quiz-finish-btn").hide(),z(c).show()},finish:function(){s.$el.removeClass("quiz-questions-state").addClass("quiz-results-state"),z(".active-question").hide().removeClass("active-question"),z("#quiz-counter").hide(),z("#quiz-response").hide(),z("#quiz-finish-btn").hide(),z("#quiz-next-btn").hide(),z("#quiz-restart-btn").show(),z(a).show();var t=s.options.resultsFormat.replace("%score",p).replace("%total",i);z("#quiz-results").html(t),"function"==typeof s.options.finishCallback&&s.options.finishCallback()},restart:function(){s.methods.reset(),s.$el.addClass("quiz-questions-state"),z("#questions").show(),z("#quiz-counter").show(),z(".question-container:first-child").show().addClass("active-question"),s.methods.updateCounter()},reset:function(){f=!1,q=1,p=0,z(".answers a").removeClass("correct incorrect"),s.$el.removeClass().addClass("quiz-container"),z("#quiz-restart-btn").hide(),z(c).hide(),z(a).hide(),z("#quiz-controls").hide(),z("#quiz-response").show(),z("#quiz-next-btn").show(),z("#quiz-counter").hide(),z(".active-question").hide().removeClass("active-question")},home:function(){s.methods.reset(),s.$el.addClass("quiz-start-state"),z(n).show(),"function"==typeof s.options.homeCallback&&s.options.homeCallback()},updateCounter:function(){var t=s.options.counterFormat.replace("%current",q).replace("%total",i);z("#quiz-counter").html(t)}},s.methods.init()},z.quiz.defaultOptions={allowIncorrect:!0,counter:!0,nextQuestionScrollToTop:!0,parseResponseAsHTML:!0,counterFormat:"%current/%total",startScreen:"#quiz-start-screen",startButton:"#quiz-start-btn",homeButton:"#quiz-home-btn",resultsScreen:"#quiz-results-screen",resultsFormat:"You got %score out of %total correct!",gameOverScreen:"#quiz-gameover-screen",nextButtonText:"Next",finishButtonText:"Finish",restartButtonText:"Restart"},z.fn.quiz=function(t){return this.each(function(){new z.quiz(this,t)})}}(jQuery,window,document);