var timezone = [
{
    "value": "Arabian Standard Time",
    "abbr": "AST",
    "offset": 0,
    "isdst": false,
    "text": "(UTC+0:00) Abu Dhabi, Muscat",
    "utc": [
      "Asia/Dubai",
      "Asia/Muscat",
      "Etc/GMT-4"
    ]
  },
  {
    "value": "Eastern Standard Time",
    "abbr": "EDT",
    "offset": -8,
    "isdst": true,
    "text": "(UTC-08:00) Eastern Time (US & Canada)",
    "utc": [
      "America/Detroit",
      "America/Havana",
      "America/Indiana/Petersburg",
      "America/Indiana/Vincennes",
      "America/Indiana/Winamac",
      "America/Iqaluit",
      "America/Kentucky/Monticello",
      "America/Louisville",
      "America/Montreal",
      "America/Nassau",
      "America/New_York",
      "America/Nipigon",
      "America/Pangnirtung",
      "America/Port-au-Prince",
      "America/Thunder_Bay",
      "America/Toronto",
      "EST5EDT"
    ]
  }
];



// plugin start from here
(function($){

    $.fn.worldClock = function(){
        clockInit(this);
    }

    var clockInit = function(obj){
        obj.each(function(){
            var t = getTimezoneArray( $(this).attr("data-timezone") );
            runClock( $(this), t );
        });
    }

    var runClock = function( el, timezone ){
        setInterval(function(){
            var clockArray = getClock(timezone);
            setClockHTML( el, clockArray );
        }, 1000);
    }

    var getDegree = function(c, m){
        return c/m*360;
    }

    var setClockHTML = function( clock, clockArray ){

        var secondsDegree   = getDegree(clockArray[2], 60);
        var minutesDegree   = getDegree(clockArray[1], 60);
        var hoursDegree     = getDegree(clockArray[0], 12);

        if ( clockArray[0] >= 12 ){
            clock.find(".apm").html("PM");
        } else{
            clock.find(".apm").html("AM");
        }

        clock.find(".seconds").css({
            "-webkit-transform": "rotateZ("+secondsDegree+"deg)",
            "-ms-transform": "rotateZ("+secondsDegree+"deg)",
            "transform": "rotateZ("+secondsDegree+"deg)"
        });

        minutesDegree = minutesDegree+clockArray[2]/60*6;

        clock.find(".minutes").css({
            "-webkit-transform": "rotateZ("+minutesDegree+"deg)",
            "-ms-transform": "rotateZ("+minutesDegree+"deg)",
            "transform": "rotateZ("+minutesDegree+"deg)"
        });

        hoursDegree = hoursDegree+clockArray[1]/60*30;

        clock.find(".hours").css({
            "-webkit-transform": "rotateZ("+hoursDegree+"deg)",
            "-ms-transform": "rotateZ("+hoursDegree+"deg)",
            "transform": "rotateZ("+hoursDegree+"deg)"
        });
    }

    var getClock = function( timezone ){

        var d = new Date();
        if ( timezone != undefined ){
            var utcTimeOffset = parseFloat(timezone.offset)*60*60*1000;

            var utcTime = d.getTime() + (d.getTimezoneOffset()*60*1000); // perfect utc timestamp
            d = new Date(utcTime + utcTimeOffset);
        }


        var getHours    = d.getHours();
        var getMinutes  = d.getMinutes();
        var getSeconds  = d.getSeconds();

        return [getHours, getMinutes, getSeconds];
    }

    var getTimezoneArray = function( tz ){
        if ( tz == undefined ){
            return tz;
        }
        var timezoneArray = undefined;
        $.each(timezone, function(){
            if ( this['utc'].toString().indexOf(tz) != -1 ){
                timezoneArray = this;
                return true;
            }
        });
        return timezoneArray;
    }

})(jQuery);

$(".clock").worldClock();