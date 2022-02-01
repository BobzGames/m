var dt = new Date();//current Date that gives us current Time also

var startTime = '03:30:20';
var endTime = '23:50:10';

var s =  startTime.split(':');
var dt1 = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(),
                   parseInt(s[0]), parseInt(s[1]), parseInt(s[2]));

var e =  endTime.split(':');
var dt2 = new Date(dt.getFullYear(), dt.getMonth(),
                   dt.getDate(),parseInt(e[0]), parseInt(e[1]), parseInt(e[2]));

if( (dt >= dt1 && dt <= dt2) ?
window.location.replace("https://bobzgames.github.io/m/time.html") : 
                                  'Current time is NOT between startTime and endTime');
alert ('dt = ' + dt  + ',  dt1 = ' + dt1 + ', dt2 =' + dt2)
