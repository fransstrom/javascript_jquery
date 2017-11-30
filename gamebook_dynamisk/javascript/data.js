var pages = {
    start: {
        name:'start',
        background: "images/ringen.jpg",
        gameWind:"start_window",
        title:"images/lotr.png",
        imgUrl: "images/anidrag.gif",
        imgUrl2:"",
        imagePosition2:"",
        imagePosition:"img_page_start",
        bread: "Thousands of years since the ring was taken from its true owner and this horribly smelling creature finds it in a lake. WHAT IS THE ODDS?! Hear me out, im a dragon and i need help to find the filthy creature who took it from me.\n" +
        "I do have some clues but i need you to flip a coin and click on one of the stylish buttons.. My name is Jeff.",
        options: [{text:"Shire", to: "shire"}, {text:"Mordor", to:"mordor"}]

    },
    shire: {
        name:'shire',
        background: "images/shire.jpg",
        gameWind:"shire_window",
        title: "images/shire.png",
        imgUrl: "images/eagle.gif",
        imgUrl2:"",
        imagePosition2:"",
        imagePosition:"img_page_shire",
        bread: "<p>The bird screeched \"SKRAA PAPA SKRAAA POM!\". And landed on Baggin's house.\n" +
        "Bird: I know why you here and i know for a fact youre wasting your time. He says, shits and flies away.\n<p><br>" +
        "Jeff: How rude. Fucking eagles never want to cooperate with me because of my color. They jealous.. Let's see if the orcs or the elves are more fun.",
        options: [{text:"Start over", to: "start"},{text:"Mordor", to:"mordor"}]
    },

    mordor:{
        name:'mordor',
        background: "images/mordor.jpg",
        gameWind:"mordor_window",
        title: "images/mordor.png",
        imgUrl: "images/orc.gif",
        imgUrl2:"images/orc2.gif",
        imagePosition2:"img_page_mordor_2",
        imagePosition:"img_page_mordor_1",
        bread: "<p>The bass is too loud for Jeff's ears and have to scream to make himself heard by the shuffling orcs which are probably high on gas.\n</p><br>" +
        "Jeff: WHAT YOU KNO ABOU THE RING ORCS??!?!!\n" +
        "Orcs: You outsiders always misunderstand us.. We dont care about Sauron or the ring. Everybody's here for the free snacks and to party so if you dont want to party then  your ass gotta go ask the elves because we can't be touched.\n" +
        "Jeff thinks: Can't touch theese Orcs.. Must keep looking.",
        options: [{text:"Shire", to: "shire"}, {text:"Rivendell", to:"rivendell"}]
    },

    rivendell:{
        name:'rivendell',
        background: "images/rivendell2.jpg",
        gameWind:"rivendell_window",
        title: "images/Rivendell1.png",
        imgUrl: "images/anidrag.gif",
        imgUrl2:"",
        imagePosition2:"",
        imagePosition:"img_page_rivendell",
        bread: "Listening to the weird group of different races and ages Jeff overheard that the ring was in Rivendell at this very moment.\n" +
        "Gandalf: NO BORROMIR YOU DARN TARD! FRODO FOUND THE RING TO RULE IT SO HE DECIDES WHO CAN HAS IT!!\n" +
        "Gimli: Im gon destroy it now, WATCH ME.............. Its too hard...\n" +
        "Frodo: Excuse me, gonna get some air..\n"+
        "Jeff: Don't mind if you do >:] ",
        options: [{text:"Shire", to: "shire"}, {text:"Mordor", to:"mordor"}, {text:"Start over", to:"start"}]
    }



};

