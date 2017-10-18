 $(document).ready(function(){


	 	$("#questionList").hide();
	 	$("#results").hide();
	 	$("#display").hide();
	 	var intervalId;
	 	var number = 40;
	 	var correct = 0;
	 	var wrong = 0;
	 	var noAnswer = 0;

 	   
	 	//START GAME FUNCTION, HIDES / SHOWS INFORMATION
 	    $("#StartButton").click(function () {
        	$("#SplashScreen").hide();
        	$("#display").show();
        	$("#questionList").show();
        //RUNS "RUN" FUNCTION	
        	run();
        	submitButton();
 		});



		function run() {
	      intervalId = setInterval(decrement, 1000);
	    }

	    //CREATED FUNCTION TO STOP THE GAME AFTER TIMER UP
	    function stop() {
      		clearInterval(intervalId);
      		$("#questionList").hide();
	        $("#display").hide();
	        $("#results").show();
	        displayResults();
    	}



	    function decrement() {
	      number--;
	      $("#display").html("<h2>" + "Time Remaining: " + number + "</h2>");

	      if (number <= 0) {
	        stop();

	      }
	    }

	    function restartGame(message) {
    		var restart = $("<button class='btn-lg active'>Restart</button>").click(function() {
      		location.reload();
    	});
    		var gameState = $("<div>").text(message);
		    $("#results").append(gameState);
		    $("#results").append(restart);
    	}

    	function submitButton() {
    		var submit = $("<button class='btn-lg active'>Submit</button>").click(function()	{
    			stop();
    		});
    		$("#questionList").append(submit);
    	}

		function displayResults() { 
			var checked = false;         
			for(var i = 1; i <= 8; i++) {
			  var radios = document.getElementsByName('question'+i);
			  for(var j = 0; j < radios.length; j++) {
			    //function to check if answer is correct
			    var radio = radios[j];
			    if(radio.value == "correct" && radio.checked) {
			      correct++;
			      checked = true;
			      break;
			    } else if (radio.value == "wrong" && radio.checked) {
			      wrong++;
			      checked = true;
			      break;
			    } else if (!radio.checked) {
			    	checked = false;
			    }
		       
		       }
		       	if (checked === false) {
		       wrong++;
		   		}
		   }
                  
			var theResults = $("#results");
    		var correctScore = $("<h1>").text("Correct: " + correct);
    		var wrongScore = $("<h1>").text("Wrong: " + wrong);
   			theResults.append(correctScore);
   			theResults.append(wrongScore);
   			restartGame("Click restart to play again")

		}

		

 });