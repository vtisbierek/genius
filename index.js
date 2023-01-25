var audioSequence = new Array();
var playerSequence = new Array();

$(document).on("keydown", function(){
    if(!$("#title-level").hasClass("started")){
        $("#title-level").addClass("started");
        $("#title-level").removeClass("glitch");
        $(".try-again").addClass("invisible");
        $("body").removeClass("game-over");
        playNote();
    }
})    

$(".genius-btn").on("click", function(){
    if($("#title-level").hasClass("started")){
        switch($(this).attr("id")){  
            case "btn1":
                buttonFlash($(this).attr("id"));
                var audio = new Audio('sounds/green.mp3');
                audio.play();
                playerSequence.push(1);
                break;
            case "btn2":
                buttonFlash($(this).attr("id"));
                var audio = new Audio('sounds/red.mp3');
                audio.play();
                playerSequence.push(2);
                break;
            case "btn3":
                buttonFlash($(this).attr("id"));
                var audio = new Audio('sounds/yellow.mp3');
                audio.play();
                playerSequence.push(3);
                break;
            case "btn4":
                buttonFlash($(this).attr("id"));
                var audio = new Audio('sounds/blue.mp3');
                audio.play();
                playerSequence.push(4);
                break;
            default:
                break;
        }   
        
        if(!compareArrays(playerSequence,audioSequence)){
            console.log(audioSequence);
            console.log(playerSequence);
            //$("body").addClass("game-over");
            $("#title-level").removeClass("started");
            $("#title-level").addClass("glitch");
            $("#title-level").text("💀 GAME OVER 💀");
            $(".try-again").removeClass("invisible");
            playerSequence.length = 0;
            audioSequence.length = 0;
            var gameOver = new Audio('sounds/wrong.mp3');
                gameOver.play();    
        } else{
            if(playerSequence.length == audioSequence.length){
                console.log(playerSequence);
                console.log(audioSequence + " audio");
                setTimeout(function(){
                    playNote();
                    playerSequence.length = 0;    
                }, 800);
            }
        }
    } 
})

function buttonFlash(trigger){
    $("#" + trigger).toggleClass("pressed");
    setTimeout(function(){
        $("#" + trigger).toggleClass("pressed");    
    }, 100);
}

function playNote(){
    var levelAudio = Math.floor(Math.random()*4) + 1;
    audioSequence.push(levelAudio);
    $("#title-level").text("level " + audioSequence.length);
    switch(levelAudio){
        case 1:
            buttonFlash("btn" + levelAudio);
            var audio = new Audio('sounds/green.mp3');
            audio.play();
            break;
        case 2:
            buttonFlash("btn" + levelAudio);
            var audio = new Audio('sounds/red.mp3');
            audio.play();
            break;
        case 3:
            buttonFlash("btn" + levelAudio);
            var audio = new Audio('sounds/yellow.mp3');
            audio.play();
            break;
        case 4:
            buttonFlash("btn" + levelAudio);
            var audio = new Audio('sounds/blue.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

function compareArrays(array1, array2){
    if(array1.length <= array2.length){
        for(var aux = 0; aux < array1.length; aux++){
            if(array1[aux] != array2[aux]){
                return false;
            }
        }
    } else{
        return false;
    }
    return true;
}