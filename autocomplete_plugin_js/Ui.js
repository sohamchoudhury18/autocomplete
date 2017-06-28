/*  global $ */
var Ui = function(Api) {
    this.api = Api;
    this.data;
};

Ui.prototype = {
    constructor: Ui,
    removePreviousResults: function() {
        $("#behind").remove();
        $("#suggdiv").remove();
    },
    copysugg: function(object, counter) {
        var str = $("#sugg" + counter).html();
        console.log(str);
        $("#search").val(str);
    },
    loadsugg: function(object, data, counter) {
        var behind = document.createElement("div");
        behind.className = object.get(0).className;

        behind.id = "behind";
        behind.innerHTML = data.data[counter].name;
        object.after(behind);
        object.css("z-index", 2);
        $("#behind").css({
            "color": "silver",
            "z-index": "0",
            "font-family": "monospace",
            "backgroundColor": "white",
            "top": "11px",
            "left": "2px",
        });


    },
    create: function(object, data, counter) {

        if (object.val() != "") {
            console.log(counter);
            var div = document.createElement("div");
            div.id = "suggdiv";
            div.className = object.get(0).className;
            data.data.forEach(function(val, index) {

                var d = document.createElement("div");
                d.className = "sugg";
                d.id = "sugg" + index;
                d.innerHTML = val.name;
                div.appendChild(d);
            });
            object.after(div);
            $("#suggdiv").css({
                "color": "red",
                "top": "40px",
                "height": "179px",
                "position": "relative",
                "border-left": "1px solid blue",
                "border-right": "1px solid blue",
                "border-bottom": "1px solid blue",
                "font-family": "monospace",


            });
            $(".sugg").css({
                "padding": "8px 3px 8px 3px",
                "border-bottom": "1px solid black",
            });

            this.loadsugg(object, data, counter);
        }
        else {
            this.removePreviousResults();
        }
    },
};
