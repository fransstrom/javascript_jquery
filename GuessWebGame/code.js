function nameLabel() {
    var namn;
    name = document.getElementById('name').value;
    document.getElementById('title').innerHTML = "Välkommen " + name + "!";
}

number = Math.floor(Math.random() * 10 + 1);


//Säger hej, välkommen
document.getElementById("namesub").addEventListener("click", nameLabel);

//Gömmer första input
document.getElementById("namesub").addEventListener("click", function () {
    document.querySelector(".namebox").classList.add("hidden");
});
document.getElementById("namesub").addEventListener("click", function () {
    document.querySelector(".startGame").classList.remove("hidden");

});

document.getElementById("yes").addEventListener("click", function () {
    document.querySelector(".gamewindow").classList.remove("hidden");
    document.querySelector(".startGame").classList.add("hidden");
    document.querySelector("#title").classList.add("hidden");
    count = 0;

});

document.getElementById("subNumber").addEventListener("click", function () {

    count++;


    var guess = document.getElementById("number").value;
    if (parseInt(guess) === parseInt(number)) {
        document.getElementById("rightanswer").innerHTML = "RÄTT SVAR11! " + number;
        answer.innerHTML = "";
        alert("DU VANN, bra gjort " + name + "!!");
        document.getElementById("rightanswer").innerHTML = "";
        document.querySelector(".gamewindow").classList.add("hidden");
        document.querySelector(".startGame").classList.remove("hidden");

    } else if (isNaN(guess)) {
        document.getElementById("rightanswer").innerHTML = "fel input!" + number;
    }

    else if (parseInt(guess) !== parseInt(number)) {
        if (count >= 3) {
            alert("DU FÖRLORAD");
            document.getElementById("rightanswer").innerHTML = "";
            document.querySelector(".gamewindow").classList.add("hidden");
            document.querySelector(".startGame").classList.remove("hidden");

        }
        else {
            document.getElementById("rightanswer").innerHTML = "fel svar, gissa igen " + count + " av 3 försök";

        }

    }


});

$('p').click(function () {
    $('p').style.fontSize('22');
});


