

$(function(){
    $('.countdown-timer').each(function(){
        var currentcount = this;
        let timercontent='<div class="days"><span class="day">0</span><span class="label">Day(s)</span></div>'+
                         '<div class="hours"><span class="hour">0</span><span class="label">Hour(s)</span></div>'+
                         '<div class="minutes"><span class="minute">0</span><span class="label">Minute(s)</span></div>'+
                         '<div class="seconds"><span class="second">0</span><span class="label">Second(s)</span></div>';
        if(this.dataset.enddate){
            $(this).append(timercontent);
            console.log(this)
            var data =this.dataset.enddate.split('-');
                
                var x = setInterval(function() {
                    // Set the date we're counting down to
                    var countDownDate = new Date(data[0],data[1]-1,data[2]).getTime();
                    // Get today's date and time
                    var now = new Date().getTime();
                  
                    // Find the distance between now and the count down date
                    var distance = countDownDate - now;
                  
                    // Time calculations for days, hours, minutes and seconds
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    
                        // console.log($(this).find('.hours .hour').text());
                            $(currentcount).find('.seconds .secound').text(seconds);
                            $(currentcount).find('.hours .hour').text(hours);
                            $('.days .day').text(days);
                            $(currentcount).find('.minutes .minute').text(minutes);
                            $(currentcount).find('.seconds .second').text(seconds);
                            // If the count down is finished, write some text
                            if (distance < 0) {
                                clearInterval(x);
                                $(currentcount).html('<h3 style="color:black">Expire</h3>')
                                console.log('testing..')
                              } 
                  }, 1000);
            
        }else{   console.log(this.dataset.enddate);  }   
    })
})


