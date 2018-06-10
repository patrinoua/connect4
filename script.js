var winner=0;
var loser=0;
var curPlayer='player1';

(function(){

    startingPosition();

    startGameAnimation();

    $('.column').on('click',function(e){
        var slotsInColumn = $(e.currentTarget).find('.slot');

        for(var i=5;i>=0;i--){
            if( !slotsInColumn.eq(i).hasClass('player1') && !slotsInColumn.eq(i).hasClass('player2') ){

                slotsInColumn.eq(i).addClass(curPlayer);
                checkForVictoryHorizontal(e);
                checkForVictoryVertical(e);
                checkForVictoryDiagonally();
                break;
            }
        }
        findLoser(winner);
        if(winner!=0){
            celebrate(winner,loser);
            playAgain();
        }
        selectPlayer();
    });

    function checkForVictoryDiagonally(){
        for(var column=0;column<7;column++){
            for(var line=5;line>=0;line--){
                if(
                    $('.column').eq(column).find('.slot').eq(line).hasClass(curPlayer)&&
                    $('.column').eq(column).next().find('.slot').eq(line-1).hasClass(curPlayer)&&
                    $('.column').eq(column).next().next().find('.slot').eq(line-2).hasClass(curPlayer)&&
                    $('.column').eq(column).next().next().next().find('.slot').eq(line-3).hasClass(curPlayer)
                ) {
                    $('.column').eq(column).find('.slot').eq(line).addClass('winners')&&
                    $('.column').eq(column).next().find('.slot').eq(line-1).addClass('winners')&&
                    $('.column').eq(column).next().next().find('.slot').eq(line-2).addClass('winners')&&
                    $('.column').eq(column).next().next().next().find('.slot').eq(line-3).addClass('winners')
                    console.log('DIAGONAL VICTORY FOR ',curPlayer);
                    winner=curPlayer;
                }
            }
        }

        for(column=0;column<7;column++){
            for(line=5;line>=0;line--){
                if(
                    $('.column').eq(column).find('.slot').eq(line).hasClass(curPlayer)&&
                    $('.column').eq(column).prev().find('.slot').eq(line-1).hasClass(curPlayer)&&
                    $('.column').eq(column).prev().prev().find('.slot').eq(line-2).hasClass(curPlayer)&&
                    $('.column').eq(column).prev().prev().prev().find('.slot').eq(line-3).hasClass(curPlayer)
                ) {
                    $('.column').eq(column).find('.slot').eq(line).addClass('winners')&&
                    $('.column').eq(column).prev().find('.slot').eq(line-1).addClass('winners')&&
                    $('.column').eq(column).prev().prev().find('.slot').eq(line-2).addClass('winners')&&
                    $('.column').eq(column).prev().prev().prev().find('.slot').eq(line-3).addClass('winners')
                    console.log('DIAGONAL VICTORY FOR ',curPlayer);
                    winner=curPlayer;

                }
            }
        }
        return winner;
    }

    function checkForVictoryHorizontal(){
        for(var column=0;column<7;column++){
            for(var line=0;line<6;line++ ){
                if($('.column').eq(column).find('.slot').eq(line).hasClass(curPlayer)&&
                   $('.column').eq(column).next().find('.slot').eq(line).hasClass(curPlayer)&&
                   $('.column').eq(column).next().next().find('.slot').eq(line).hasClass(curPlayer)&&
                   $('.column').eq(column).next().next().next().find('.slot').eq(line).hasClass(curPlayer)
                ) {
                    console.log('HORIZONTAL VICTORY FOR ',curPlayer);
                    $('.column').eq(column).find('.slot').eq(line).addClass('winners')&&
                    $('.column').eq(column).next().find('.slot').eq(line).addClass('winners')&&
                    $('.column').eq(column).next().next().find('.slot').eq(line).addClass('winners')&&
                    $('.column').eq(column).next().next().next().find('.slot').eq(line).addClass('winners')
                    winner=curPlayer;
                    break;
                }
            }
        }
        return winner;
    }

    function checkForVictoryVertical(e){
        var slotsInColumn = $(e.currentTarget).find('.slot');

        for(var i=0;i<6;i++){
            if( slotsInColumn.eq(i).hasClass(curPlayer) &&
                slotsInColumn.eq(i+1).hasClass(curPlayer) &&
                slotsInColumn.eq(i+2).hasClass(curPlayer) &&
                slotsInColumn.eq(i+3).hasClass(curPlayer)
                )
            {   slotsInColumn.eq(i).addClass('winners') &&
                slotsInColumn.eq(i+1).addClass('winners') &&
                slotsInColumn.eq(i+2).addClass('winners') &&
                slotsInColumn.eq(i+3).addClass('winners')
                winner=curPlayer;
                console.log('!!!Vertical victory for ',curPlayer);
                break;
            }
        }
        return winner;
    }

    function selectPlayer(){
        if (curPlayer == 'player1') {
            curPlayer = 'player2';
            active='player2';
        }else{
            curPlayer = 'player1';
            active='player1';
        }
        return curPlayer, active;
    }

    function findLoser(winner){
        if(winner=='player1'){
            loser='player2';
        }
        else if (winner=='player2') {
            loser='player1';
        }
        return loser;
    }

    // findLoser(winner);
})();
