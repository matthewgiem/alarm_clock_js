var Alarm = require('./../js/alarm-model.js').alarmModule;

$(document).ready(function(){
  setInterval(function(){$('#time').text(moment());}, 1000);
  var counter = 0;
  $('form.set-alarm').submit(function(event) {
    event.preventDefault();
    counter++;
    var alarmTime = $('input.alarm').val();
    var alarm = new Alarm(alarmTime);
    // alarmTime = moment(alarmTime, "hh:mm");
    $('ul.alarms').append(`<li class='${counter}'>`+ alarm.time.format("hh:mm") + `<button id="${counter}" class='delete'  >delete</button></li>`);
    $(".delete").click(function() {
      var myClass = $(this).attr("id");
      $("." + myClass).remove();
    });
    var testTime = moment.toString();
    var newTime = moment(testTime, "hh:mm");
    setInterval(function(){
      if(moment().format("hh:mm") === alarm.time.format("hh:mm")) {
        alert("alarm")
        $('.snooze').show();
        $(".snooze").click(function() {
          alarm.time.add("1", "minutes");
          $('.snooze').hide();
        });
      }
    }, 5000);
    // time = undefined;
  });

});
