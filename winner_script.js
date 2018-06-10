
var notification = $('#notification');
var notificationPopUp = $('#notification_popUp');
var vail= $('#vail');
var myTimer=$('#myTimer');

notification.hide();

function celebrate(winner,loser){

    console.log('we are celebrating!');
    console.log(winner,loser,curPlayer);

    $('#loserMSG').hide();
    $('.button').hide();

    $('#winner').html(winner);
    $('#loser').html(loser);

    setTimeout(function(){
        console.log('this works!');
        notification.fadeIn('easein');
        notificationPopUp.fadeIn('easein');
        }, 500);
    setTimeout(function(){
        console.log('losermsg appears');
        $('#loserMSG').fadeIn('easein'); }, 2700);

    setTimeout(function(){
        console.log('button appears');
        $('.button').fadeIn('easein'); }, 4400);

    setTimeout(function(){
        notificationPopUp.fadeOut('easeout'); }, 4000);

    vail.show();
    winner=0;
}
function playAgain(){
    console.log('play again...');
    setTimeout(function(){
        endGameAnimation();
    }, 200);
    $('.button').on('click',function(){
        startGameAnimation();
    });
}

function startingPosition(){

    for(var i=0;i<8;i++){
        $('.vertical').eq(i).css({"top":"1264.5px"});
        $('.horisontal').eq(i).css({"left":"-1264.5px"});
        i++;
    }
    for(i=1;i<8;i++){
        $('.vertical').eq(i).css({"top":"-1264.5px"});
        $('.horisontal').eq(i).css({"left":"1264.5px"});
        i++;
    }
}

function endGameAnimation(){
    console.log('endGameAnimation');
    for(var i=0;i<8;i++){
        $('.vertical').eq(i).animate({"top":"1264.5px"},2000);
        $('.horisontal').eq(i).animate({"left":"-1264.5px"},1300);
        i++;
    }
    for(i=1;i<8;i++){
        $('.vertical').eq(i).animate({"top":"-1264.5px"},2000);
        $('.horisontal').eq(i).animate({"left":"1264.5px"},1300);
        i++;
    }
}

function startGameAnimation(){

    notification.fadeOut();
    vail.fadeOut();
    console.log('******************************');
    console.log('startGameAnimation');
    $('.slot').removeClass('player1 player2 winners');
    winner=0;
    loser=0;
    curPlayer='player1';

    for(var i=0;i<8;i++){
        $('.vertical').eq(i).animate({"top":"-35px"},1200);
        $('.horisontal').eq(i).animate({"left":"-35px"},1000);
        i++;
    }
    for(i=1;i<8;i++){
        $('.vertical').eq(i).animate({"top":"-35px"},1050);
        $('.horisontal').eq(i).animate({"left":"-35px"},1100);
        i++;
    }
    return winner, loser, curPlayer;
}

notification.on('click',function(){
    startGameAnimation();
});

vail.on('click',function(){
    startGameAnimation();
});

function Countdown(setTime) {
    this.start = function() {
        var that = this;
        setTimeout(function() {
            that.timer(setTime);}, 1000);
    };
    this.timer = function(count) {
        var that = this;
        myTimer.html(count);
        if (count < 0) {
            return 0;
        } else {
            setTimeout(function() {
                that.timer(count);}, 1000);
        }
    };
}
