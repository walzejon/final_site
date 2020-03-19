var myurl = "https://api.weather.gov/stations/KSEA/observations/latest";

$.ajax({
      url: myurl,
      dataType: "json",
      success: function(data) {
        const wxprop = data['properties'];
        var tempC= wxprop['temperature'].value.toFixed(1);
        var tempF = (tempC * 9/5 + 32).toFixed(1);
        const mps2kts = 1.94384;


        var windSpeed = (wxprop['windSpeed'].value * mps2kts).toFixed(1);
        var windSpsStr = "<li>Current Wind Speed: " + windSpeed + " kts.</li>";
        $('ul').append(windSpsStr);
        $('ul li:last').attr('class', 'list-group-item');
        // uncomment this if you want to dump full JSON to textarea
        var myJSON = JSON.stringify(data);
        $('textarea').val(myJSON);
        
        var str = "<li>Current temperature: "  + tempF+" F"+"</li>";
        $('ul').append(str);
        $('ul li:last').attr('class', 'list-group-item');

        var textD = wxprop['textDescription'];
        var icon = '<li><img src="' + wxprop.icon +'">\t' + textD + '</li>';
        $('ul').append(icon);
        $('ul li:last').attr('class', 'list-group-item');

        // add additional code here for the Wind direction, speed, weather contitions and icon image
      }
    });