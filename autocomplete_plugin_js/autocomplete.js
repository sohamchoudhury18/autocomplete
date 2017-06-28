/*  global $
    global Api
    global Ui
    global Event
*/


$(document).ready(function() {

});

$.fn.autocomplete = function(url) {

    //init
    this.url = url;
    this.api = new Api();
    this.ui = new Ui();
    this.events = new Event(this.api, this.ui);

    //calling of events
    this.ui.create(this);
    this.events.capture(this);
    this.api.ajax_call(this.url);

};
