function Alarm(time){
  this.time = moment(time,"hh:mm");
}

// Clock.prototype.alarmTime = function() {
//   return moment(time, "hh:mm");
// }

exports.alarmModule = Alarm;
