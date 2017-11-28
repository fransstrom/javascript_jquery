var pages = {
    beginning: {
        title: "Snöapans äventyr",
        imgUrl: "images/Snow-monkey-Japan1.jpg",
        bread: "Liten lite apejävel sitter vid sin värmekälla.. blir uttråkad, vi går vänster eller höger",
        options: [{text:"Left", to: "left"}, {text:"Right", to:"right"}]

    },
    left: {
        title: "Apgapet",
        imgUrl: "images/klippa.jpg",
        bread: "Apan ramlade ner för en klippa.. synd",
        options: [{text:"Beginning", to: "beginning"}]
        },

    right:{
        title: "Djungelvrål",
        imgUrl: "images/kingkong.jpg",
        bread: "Apan hittade en frusen banan, fick superkrafter",
        options: [{text:"Left", to: "left"}, {text:"Beginning", to:"beginning"}]
    }


    };


console.log("Here's the adventure page", pages.beginning);