var Event = function(Api, Ui) {
    this.api = Api;
    this.ui = Ui;
    this.counter = 0;
};

Event.prototype = {
    constructor: Event,
    keydownfn: function(e, _this, obj) {
        setTimeout(function() {


                var keyword = e.target.value;
                if (e.key == "ArrowRight" | e.key == "Tab") {
                    _this.ui.copysugg(obj, _this.counter);
                }
                else if (e.key == "ArrowDown") {
                    if (_this.counter == 0) {
                        _this.ui.copysugg(obj, _this.counter);
                        _this.counter++;
                    }
                    else if (_this.counter < 5) {
                        _this.ui.copysugg(obj, _this.counter);
                        _this.counter++;
                    }
                    else if (_this.counter >= 4) {
                        _this.counter = 0;
                    }
                }
                else if (e.key == "ArrowUp") {
                    if (_this.counter > 0) {
                        _this.counter--;
                    }
                    _this.ui.copysugg(obj, _this.counter);
                }
                _this.ui.removePreviousResults();
                _this.api.ajax_call(keyword, function(data) {
                    _this.ui.create(obj, data, _this.counter);

                });

            }

            , 000);
    },
    clk: function() {

    },
    capture: function(object, url) {
        var _this = this;
        var obj = object;
        object.on("keydown", function(e) {
            _this.keydownfn(e, _this, obj);
        });

    }
};
