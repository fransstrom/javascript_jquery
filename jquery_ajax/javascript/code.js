
$(document).ready(function(){

    var gameState;
    if (!gameState){
        // no state was saved or loading failed, start from beginning
        gameState = {
            currentPage: 'beginning'
        };
    }

    function drawPage(){
        // language=JQuery-CSS
        var page = pages[ gameState.currentPage ];
        $("#headline").html(page.title);
        $('#flavourtext').html(page.bread);
        $('#image').attr('src', page.imgUrl);
        $("#page").find('ul').empty();

        page.options.forEach(function(link, n){
            var linkElem = $("<li></li>")
                .text(link.text)
                .attr("data-optNbr", n); // store link index for use in click handle
            $("#page").find('ul').append(linkElem);
        });
    }




    $("#page").find('ul').on("click", "li", function(e){
        var optNbr = $(e.target).attr("data-optNbr"); // option index, was stored in
        var page = pages[gameState.currentPage];
        var optionData = page.options[optNbr];
        var target = optionData.to;
        gameState.currentPage = target;
        drawPage();
    });
    drawPage();


});
