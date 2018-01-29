
/* Flight Schedule list */
/* Initialization */
var initialFlightSchedule = {
    "Malta": [
                {"loc": 'London', "time": '08:45 AM', "status": 'ON TIME'},
                {"loc": 'poznan', "time": '09:10 AM', "status": 'DELAYED'},
                {"loc": 'Rome', "time": '10:00 AM', "status": 'ON TIME'},
                {"loc": 'Paris', "time": '09:00 AM', "status": 'DELAYED'},
                {"loc": 'poznan', "time": '09:10 AM', "status": 'DELAYED' }, 
    ]
};
// Local Storage to store the flight schedule 
localStorage.setItem('flight-schedule', JSON.stringify(initialFlightSchedule));

var temp = localStorage.getItem('flight-schedule');
var retriveFlightSchedule = JSON.parse(temp);
// console.log(retriveFlightSchedule.Malta.length);
// displaying the data by running a loop for the number of occurences of whether data
for (var i = 0; i < retriveFlightSchedule.Malta.length; i++)
{
document.getElementById("location"+[i]).innerHTML = "Malta to " + retriveFlightSchedule.Malta[i].loc; 
document.getElementById("Time"+[i]).innerHTML = retriveFlightSchedule.Malta[i].time;
document.getElementById("flight-status"+[i]).innerHTML = retriveFlightSchedule.Malta[i].status;
}
// to check connectivity whether offline or Online
// console.log(navigator.onLine);
if (!navigator.onLine) {
    document.getElementById("connectivity").removeAttribute('hidden');
}
/*
Registering the service worker 
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function () { console.log('Service Worker Registered'); });
}
*/
