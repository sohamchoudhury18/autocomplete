/*  global $
    global Api
    global Ui
    global Event
*/


$(document).ready(function() {

});

$.fn.autocomplete = function() {

    //init
    this.api = new Api();
    this.ui = new Ui(this.api);
    this.events = new Event(this.api, this.ui);

    //calling of events
    // this.ui.create(this);
    this.events.capture(this);
    //this.api.ajax_call(keyword,this.url);

};
