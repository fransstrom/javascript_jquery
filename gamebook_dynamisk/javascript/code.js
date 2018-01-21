$(document).ready(function () {

    var gameState;
    if (!gameState) {
        // no state was saved or loading failed, start from beginning
        gameState = {
            currentPage: 'start'
        };
    }

    function drawPage() {
        // language=JQuery-CSS
        var page = pages[gameState.currentPage]; // Sidan pekar på 'start' i data.js där information om hur the DOM ska bete sig
        $('body').css('background-image', 'url(' + page.background + ')'); //pekar på källkoden till backgrundfilen i pages
        $('#title').attr('src', page.title) //Har bilder som rubrik så den ger artibut src="" till img-taggen och adressen genom pages objektet
        $('#flavourtext').html(page.bread); //vilken kod ska finnas i flavoutext elementet
        $('#images').html('<img src=' + page.imgUrl+ ' class='+ page.imagePosition+ '>'+'<img src=' + page.imgUrl2+ ' class='+ page.imagePosition2+ '>');//Lägger till kod  i images sectionen
        $('#game-wind').removeClass().addClass(page.gameWind); //Tar bort och lägger till en ny klass
        $("#page").empty();

        mordor_ani('.img_page_mordor_1', '.img_page_mordor_2');
        eagleAni();
        rivenAni();

        page.options.forEach(function (link, n) {
            var butElem = $("<div class='buttonDiv'></div>")
                .text(link.text)
                .attr("data-optNbr", n); // store link index for use in click handle
            $("#page").append(butElem);
        });



    }

    $("#page").on("click", "div", function (e) {
        var optNbr = $(e.target).attr("data-optNbr"); // option index, was stored in
        var page = pages[gameState.currentPage];
        var optionData = page.options[optNbr];
        var target = optionData.to;
        gameState.currentPage = target;
        drawPage();
    });


    drawPage();




//ANIMATIONS



function mordor_ani(img1, img2){

    var what = 0;
    var what2 = 0;

    $(img1).on('mouseover', function () {
        if (what % 2 === 0) {
            $(this).animate({top: '103px', right: '377px', height: '100px'}, 100);
            what++;
        } else {
            $(this).animate({top: '400px', bottom: '10px', right: '10px', height: '300px'}, 100);
            what++;
        }
    });

    $(img2).on('mouseover', function () {
        if (what2 % 2 === 0) {
            $(this).animate({left: '60%'}, 100);
            what2++;
        } else {
            $(this).animate({left: '10px'}, 100);
            what2++;
        }

    });
}

function eagleAni(){
    $(".img_page_shire").on('load', function () {
        $(this).animate({top: '400px', left:'900px', height:'300'}, 3000).queue(function(){
            $(this).addClass("flip");
        });
    });
}

    function rivenAni(){
        $(".img_page_rivendell").on('load', function () {
            $(this).animate({right:'1200px', height:'300px', top:'80px'}, 3000).queue(function(){
                $(this).removeClass("img_page_rivendell").addClass('img_page_rivendell_ani');

            });
        });

    }


});