

var number = Math.floor(Math.random() * 10 + 1);
var count = 0;
var guess;
$(document).ready( function () {

    console.log(number);

    $('#namesub').click( function () {
        $('#title').text("Välkommen "+ $('#name').val() +"!");
        $('.namebox').hide();
        $('.startGame').fadeIn('slow').show();
    });

    $('#yes').click( function () {
        $('.startGame').hide();
        $('#title').hide();
        $('.gamewindow').fadeIn('slow').show();
    });


    $('#subNumber').click(function game () {

        count++;
        guess=+$('#number_input').val();


        if(guess===number){
            $('#answer').text("DU VANN "+ $('#name').val() + ", Försätt spela");
            count=0;
            number = Math.floor(Math.random() * 10 + 1);
            $('#gameSection').slideUp(50).slideDown(50).slideUp(50).slideDown(50).slideUp(50).slideDown(50).slideUp(50).slideDown(50).slideUp(50).slideDown(50).slideUp(50).slideDown(50).slideUp(50).slideDown(50);

        }else if(guess !== number && count<=3){
            $('#answer').text("FEL SVAR" + "\nFörsök nr: "+ count);

        }else if(count>3){
            count=0;
            number = Math.floor(Math.random() * 10 + 1);
            $('#answer').text("Du förlorade "+$('#name').val()+ ", Fortsätt spela");


            //  $('header').animate({top: '30%'},'fast').animate({top: '0'},'fast').animate({top: '30%'},'fast').animate({top: '0'},'slow');;
            $('footer').animate({height: '300px'},'fast').animate({height: '100px'},'fast').animate({height: '400px'},'fast').animate({height: '100px'},'slow');

            $('header').animate({height: '300px'},'fast').animate({height: '100px'},'fast').animate({height: '400px'},'fast').animate({height: '100px'},'slow');
        }

        $('#number_input').val(" ");
    });



});
