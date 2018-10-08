var greet = document.getElementById('personal-greet');
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var time = h + ":" + m + ":" + s;
greet.innerHTML = "Hi there " + "<strong>" + navigator.appCodeName + "</strong> user!" + " the time is: <strong>" + time + "</strong>";