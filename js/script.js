$(document).ready(function(){
	
	//close controls
	$('#close').click(function(){
		$(this).parent().hide();
	});
	//Soundcloud stream
	SC.initialize({
	  client_id: 'a2cd7a00d960d1bbe14a64d1d4a8b7ff',
	  secret_token:'s-MuZ4H'
	});
	
	//Repeat function for soundcloud player
	function repeat(){
    var repeatSong = function() {
        this.play({onfinish: repeat});
    };

    var sound = SC.stream("/tracks/168607240", function(sound){
        sound.play({onfinish: repeatSong});        
    });
	}
	repeat();
	
	
	
	
	//Google Street view
	function initialize() {
	  var fenway = new google.maps.LatLng(42.345573, -71.098326);
	  var eyja = new google.maps.LatLng(63.5427392,-19.6620979);
	  
	  
	  var mapOptions = {
		center: eyja,
		zoom: 14
	  };
	  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	  
	  var panoramaOptions = {
		
		position: eyja,
		pov: {
		  heading: 100,
		  pitch: 5
		},
		addressControlOptions: {
		  position: google.maps.ControlPosition.BOTTOM_CENTER
		},
		linksControl: false,
		panControl: false,
		zoomControl:false,
		enableCloseButton: false
		
	  };
	  console.log(panoramaOptions);
	  
	  var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
	  map.setStreetView(panorama);
	}

	google.maps.event.addDomListener(window, 'load', initialize);
	
});