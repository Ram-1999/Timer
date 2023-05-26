var start = function Timer() {
        var udateElement = document.getElementById("datedata");
        var udate = udateElement.value;
        var countdown = new Date(udate).getTime();
        var currentDate = new Date().getTime();
      
        if (countdown < currentDate) {
          document.getElementById("over").innerHTML = "Please enter the present/future date";
          udateElement.setAttribute("disabled", "disabled"); 
          return; 
        }
      
        var distance = countdown - currentDate;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("dayp").innerHTML = days;
        document.getElementById("hourp").innerHTML = hours;
        document.getElementById("minp").innerHTML = minutes;
        document.getElementById("secp").innerHTML = seconds;
      
        udateElement.removeAttribute("disabled"); 
      }
      
      function stopClock() {
        location.reload();
      }
      