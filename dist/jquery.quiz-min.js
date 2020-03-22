/*!
 * jquery-quiz v0.0.1 - A simple jQuery quiz plugin.
 * Copyright (c) 2020 JC Hamill and Chance Herriage - https://github.com/ChanceHerriage/jquery-quiz
 * License: MIT
 */


!function(z,v,m){"use strict";z.quiz=function(t,e){var a=this;a.$el=z(t),a.$el.data("quiz",a),a.options=z.extend(z.quiz.defaultOptions,e);var r=a.options.questions,i=r.length,o=a.options.startScreen,n=a.options.startButton,s=a.options.homeButton,u=a.options.resultsScreen,c=a.options.gameOverScreen,l=a.options.nextButtonText,d=a.options.finishButtonText,h=a.options.restartButtonText,p=1,q=0,f=!1;a.methods={init:function(){a.methods.setup(),z(m).on("click",n,function(t){t.preventDefault(),a.methods.start()}),z(m).on("click",s,function(t){t.preventDefault(),a.methods.home()}),z(m).on("click",".answers a",function(t){t.preventDefault(),a.methods.answerQuestion(this)}),z(m).on("click","#quiz-next-btn",function(t){t.preventDefault(),a.methods.nextQuestion()}),z(m).on("click","#quiz-finish-btn",function(t){t.preventDefault(),a.methods.finish()}),z(m).on("click","#quiz-restart-btn, #quiz-retry-btn",function(t){t.preventDefault(),a.methods.restart()})},setup:function(){var i="";a.options.counter&&(i+='<div id="quiz-counter"></div>'),i+='<div id="questions">',z.each(r,function(t,e){i+='<div class="question-container">',i+='<p class="question">'+e.q+"</p>",i+='<ul class="answers">',z.each(e.options,function(t,e){i+='<li><a href="#" data-index="'+t+'">'+e+"</a></li>"}),i+="</ul>",i+="</div>"}),i+="</div>",0===z(u).length&&(i+='<div id="'+u.substr(1)+'">',i+='<p id="quiz-results"></p>',i+="</div>"),i+='<div id="quiz-controls">',i+='<p id="quiz-response"></p>',i+='<div id="quiz-buttons">',i+='<a href="#" id="quiz-next-btn">'+l+"</a>",i+='<a href="#" id="quiz-finish-btn">'+d+"</a>",i+='<a href="#" id="quiz-restart-btn">'+h+"</a>",i+="</div>",i+="</div>",a.$el.append(i).addClass("quiz-container quiz-start-state"),z("#quiz-counter").hide(),z(".question-container").hide(),z(c).hide(),z(u).hide(),z("#quiz-controls").hide(),"function"==typeof a.options.setupCallback&&a.options.setupCallback()},start:function(){a.$el.removeClass("quiz-start-state").addClass("quiz-questions-state"),z(o).hide(),z("#quiz-controls").hide(),z("#quiz-finish-btn").hide(),z("#quiz-restart-btn").hide(),z("#questions").show(),z("#quiz-counter").show(),z(".question-container:first-child").show().addClass("active-question"),a.methods.updateCounter(),"function"==typeof a.options.startCallback&&a.options.startCallback()},answerQuestion:function(t){if(!f){f=!0;var e=z(t),i="",o=e.data("index"),n=p-1,s=r[n].correctIndex;if(o===s)e.addClass("correct"),i=r[n].correctResponse,q++;else{if(e.addClass("incorrect"),i=r[n].incorrectResponse,!a.options.allowIncorrect)return void a.methods.gameOver(i);a.options.highlightCorrect&&z(".active-question>.answers>li:nth-child("+(s+1)+")>a").addClass("correct")}z(".active-question>.answers>li").each(function(){z(this).index()!==o&&z(this).index()!==s&&(a.options.hideNotRelevant?z(this).hide():a.options.disableNotRelevant&&z(this).find("a").attr("disabled",!0))}),z("#quiz-response").html(a.options.parseResponseAsHTML?jQuery.parseHTML(i):resposne),z("#quiz-controls").fadeIn(),"function"==typeof a.options.answerCallback&&a.options.answerCallback(p,o,r[n])}},nextQuestion:function(){f=!1,z(".active-question").hide().removeClass("active-question").next(".question-container").show().addClass("active-question"),z("#quiz-controls").hide(),++p===i&&(z("#quiz-next-btn").hide(),z("#quiz-finish-btn").show()),a.methods.updateCounter(),a.options.nextQuestionScrollToTop&&z(v).scrollTop(a.$el.position.top),"function"==typeof a.options.nextCallback&&a.options.nextCallback()},gameOver:function(t){if(0===z(c).length){var e="";e+='<div id="'+c.substr(1)+'">',e+='<p id="quiz-gameover-response"></p>',e+='<p><a href="#" id="quiz-retry-btn">'+h+"</a></p>",e+="</div>",a.$el.append(e)}z("#quiz-gameover-response").html(t),z("#quiz-counter").hide(),z("#questions").hide(),z("#quiz-finish-btn").hide(),z(c).show(),"function"==typeof a.options.gameOverCallback&&a.options.gameOverCallback()},finish:function(){a.$el.removeClass("quiz-questions-state").addClass("quiz-results-state"),z(".active-question").hide().removeClass("active-question"),z("#quiz-counter").hide(),z("#quiz-response").hide(),z("#quiz-finish-btn").hide(),z("#quiz-next-btn").hide(),z("#quiz-restart-btn").show(),z(u).show();var t=a.options.resultsFormat.replace("%score",q).replace("%total",i);z("#quiz-results").html(t),"function"==typeof a.options.finishCallback&&a.options.finishCallback()},restart:function(){a.methods.reset(),a.$el.addClass("quiz-questions-state"),z("#questions").show(),z("#quiz-counter").show(),z(".question-container:first-child").show().addClass("active-question"),a.methods.updateCounter(),"function"==typeof a.options.restartCallback&&a.options.restartCallback()},reset:function(){f=!1,p=1,q=0,z(".answers a").removeClass("correct incorrect"),a.$el.removeClass().addClass("quiz-container"),z("#quiz-restart-btn").hide(),z(c).hide(),z(u).hide(),z("#quiz-controls").hide(),z("#quiz-response").show(),z("#quiz-next-btn").show(),z("#quiz-counter").hide(),z(".active-question").hide().removeClass("active-question"),"function"==typeof a.options.resetCallback&&a.options.resetCallback()},home:function(){a.methods.reset(),a.$el.addClass("quiz-start-state"),z(o).show(),"function"==typeof a.options.homeCallback&&a.options.homeCallback()},updateCounter:function(){var t=a.options.counterFormat.replace("%current",p).replace("%total",i);z("#quiz-counter").html(t)}},a.methods.init()},z.quiz.defaultOptions={allowIncorrect:!0,counter:!0,nextQuestionScrollToTop:!0,parseResponseAsHTML:!0,disableNotRelevant:!1,hideNotRelevant:!1,highlightCorrect:!1,counterFormat:"%current/%total",startScreen:"#quiz-start-screen",startButton:"#quiz-start-btn",homeButton:"#quiz-home-btn",resultsScreen:"#quiz-results-screen",resultsFormat:"You got %score out of %total correct!",gameOverScreen:"#quiz-gameover-screen",nextButtonText:"Next",finishButtonText:"Finish",restartButtonText:"Restart"},z.fn.quiz=function(t){return this.each(function(){new z.quiz(this,t)})}}(jQuery,window,document);