/*  global $ */
var Api = function() {

};

Api.prototype = {
    constructor: Api,
    ajax_call: function(keyword, callback) {
        $.ajax({
            url: "Json/sample.json",
            success: function(data) {
                callback(data);
            }
        });

    },

};
