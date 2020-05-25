var playing =false;
var score;
var numberoftry;
var fruits=['apple','banana','cherris','grapes','ss','orange','water','mango','watermelone'];
var step;//random number for the speed
var action;//for set interval
$(function() {
  
  //if you click start
$("#start").click(function(){
    //check if we are playing if we are playing reload the page
    if(playing==true)
    {
        location.reload();
    }
    //if you are not playing
    else
    {
        //made play mode == true
        playing=true;
        //set the score 0
        score=0;
        //make it in the screen
        $("#scorevalue").html(score);
        //change start to restart
        $("#start").html("Restart");
        $("#tryies").show();
        numberoftry=3;
        addHearts();
        startAction();
        $("#gameOver").hide();
        $("#tryies").show();
        
    }
    $("#fruit1").mouseover(function(){
        //increas ethe score by one
        score++;
        $("#scorevalue").html(score);
        //play some audio
//        document.getElementById("sound").play();
        //to play an audio
        $("#sound")[0].play();
//        stop the fruit
         clearInterval(action);
        //then send a new fruit
        //hide the fruit by animation
        $("#fruit1").hide("explode",500);
        
        setTimeout(startAction,500);
        
        
    })
});

function addHearts(){
    $("#tryies").empty();
    for(i=0;i<numberoftry;i++){
            $("#tryies").append(' <img src="images/heart.jpg" class="life" > ');
        }
}
function startAction(){
   $("#fruit1").show();
    chooseFruit();
    $("#fruit1").css({
        'left':Math.round(950*Math.random()+1),
        'top':-50,
    });
    step = 2+Math.round(7*Math.random());
    action=setInterval(function(){
        $("#fruit1").css('top', $("#fruit1").position().top +step);
        if($("#fruit1").position().top>$("#qustion").height()){
           
        if(numberoftry>1){
            
             $("#fruit1").show();
             chooseFruit();
             $("#fruit1").css({
            'left':Math.round(950*Math.random()+1),
            'top':-50,
      });
      step = 2+Math.round(5*Math.random());
             numberoftry--;
             addHearts();
            
        }else{
            playing=false;
            $("#start").html("Start Game");
           $("#gameOver").show();
           $("#tryies").hide();
           $("#gameOver").html('<p>Game Over </p><p>Your Score is '+ score +'</p>');
            stopAction();
                
        }
    }
    },10);
    
    
}
function chooseFruit(){
    $("#fruit1").attr('src','images/'+fruits[Math.round(8*Math.random())]+'.png');
}
function stopAction (){
     clearInterval(action);
     
    
    
}
});