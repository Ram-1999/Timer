var start = function Timer(){

        var udate = document.getElementById("datedata").value
        var countdown = new Date(udate).getTime();
        var date = new Date().getTime();
        if(countdown<date){
                document.getElementById("over").innerHTML = "Please enter the present/future date";
        }
        else{
        var distance = countdown - date;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("dayp").innerHTML = days;
        document.getElementById("hourp").innerHTML = hours;
        document.getElementById("minp").innerHTML = minutes;
        document.getElementById("secp").innerHTML = seconds;
        }

}

function stopClock() {
        location.reload();
 }