var Event = function(Api, Ui) {
    this.api = Api;
    this.ui = Ui;
};

Event.prototype = {
    constructor: Event,
    keydownfn: function(e, _this) {
        setTimeout(function() {
            console.log(e.target.value);
        }, 000);
    },
    clk: function() {

    },
    capture: function(object) {
        console.log(this);
        var _this = this;
        object.on("keydown", function(e) {
            _this.keydownfn(e, _this);
        });
        
    }
};
