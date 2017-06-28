/*  global $ */
var Ui = function() {

};

Ui.prototype = {
    constructor: Ui,
    create: function(object) {
        var div = document.createElement("div");
        div.id = "suggdiv";
        console.log(object.get(0).className);
        div.className = object.get(0).className;
        for (var i = 0; i < 5; i++) {
            var d = document.createElement("div");
            d.className = "sugg";
            d.id = "sugg" + i;
            d.innerHTML = "suggo";
            div.appendChild(d);
        }

        object.after(div);
        $("#suggdiv").css({
            "color": "red",
            "top": "40px",
            "height": "179px",
            "position": "relative",
            "border-left": "1px solid blue",
            "border-right": "1px solid blue",
            "border-bottom": "1px solid blue",


        });
        $(".sugg").css({
            "padding": "8px 3px 8px 3px",
            "border-bottom": "1px solid black",
        });
    },
};
