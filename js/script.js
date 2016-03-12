// $(document).ready(function(){

// 	// SOCIAL MEDIA KING ROBERT FUNCTIONALITY
//   $("#kingrobert").click(function(){
//     $('#kingspeech').toggle(350);
//   });

//   // CREATION OF MAP GOOGLE MAP


//   // DECLARE THE CUSTOM MARKER CLASS
// 	function CustomMarker(latlng, map, args) {
// 		this.latlng = latlng;	
// 		this.args = args;	
// 		this.setMap(map);	
// 	}

// 	CustomMarker.prototype = new google.maps.OverlayView();


// 	CustomMarker.prototype.draw = function() {
		
// 		var self = this;
// 		var div = this.div;
		
// 		if (!div) {
		
// 			div = this.div = document.createElement('div');
			
// 			div.className = 'marker';
// 			div.style.position = 'absolute';
// 			div.style.cursor = 'pointer';
// 			div.style.width = '60px'; // was 20px
// 			div.style.height = '60px'; // was 20px
// 			div.style.background = '../img/houses/lannister.png';
// 			div.dataModalId = 'popup1';
			
// 			if (typeof(self.args.marker_id) !== 'undefined') {
// 				div.dataset.marker_id = self.args.marker_id;
// 			}
			
// 			google.maps.event.addDomListener(div, "click", function(event) {
// 				// alert('You clicked on a custom marker!');			
// 				google.maps.event.trigger(self, "click");
// 				this.leanModal();
// 				$(".marker").leanModal({ 
// 					overlay : 1, 
// 					closeButton: ".modal_close" });

// 			});
			
// 			var panes = this.getPanes();
// 			panes.overlayImage.appendChild(div);
// 		}
		
// 		var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
		
// 		if (point) {
// 			div.style.left = (point.x - 25) + 'px'; // was 10; should be half the length of the marker div
// 			div.style.top = (point.y - 50) + 'px'; // was 20; should be the full length of the marker div
// 		}
// 	};

// 	CustomMarker.prototype.remove = function() {
// 		if (this.div) {
// 			this.div.parentNode.removeChild(this.div);
// 			this.div = null;
// 		}	
// 	};

// 	CustomMarker.prototype.getPosition = function() {
// 		return this.latlng;	
// 	};

// 	  // Use data to create custom styles 
// 	  var custom_map = new google.maps.StyledMapType(map_styles, {name: "Map style"});

// 		// Declare the variables for the custom markers 
// 		// for (venue in venues.venues) {
// 		// 	var MarkerLatLng = venues.venues[venue].LatLng;
// 		// 	console.log(MarkerLatLng);
// 		// }


// 	function initialize() {

		
		
		
// 		// Pins a custom marker to the map
// 		overlay = new CustomMarker(
// 			myLatLng, 
// 			map,
// 			{
// 				marker_id: '123'
// 			}
// 		);

// 	  // Assign the map styles defined above to the map
// 	  map.mapTypes.set('map_styles', custom_map);

// 	  // Set one of the styles to display as default as the map loads
// 	  map.setMapTypeId('map_styles');

// 	  // SET MODAL WINDOWS ON MARKER CLICK
// 		function modalWindow(){
// 			var modal = document.getElementById('myModal');
// 			// Get the button that opens the modal
// 			var btn = document.getElementById('footer-nav');
// 			// Get the <span> element that closes the modal
// 			var span = document.getElementsByClassName("close")[0];
// 			// When the user clicks on the button, open the modal 
// 			// btn.onclick = function() {
// 			//   modal.style.display = "block";
// 			// }
// 			// When the user clicks on <span> (x), close the modal
// 			span.onclick = function() {
// 			  modal.style.display = "none";
// 			}

// 			// When the user clicks anywhere outside of the modal, close it
// 			window.onclick = function(event) {
// 		    if (event.target == modal) {
// 		        modal.style.display = "none";
// 		    }
// 			}
// 		}

// 		modalWindow();

// 	}

// 	google.maps.event.addDomListener(window, 'load', initialize);

// });




$(document).ready(function() {
	// Alternative script for multiple map markers 

	var map;

	// Define the map styles
  var map_styles = [ 
    {
      "featureType": "administrative",
      "stylers": [
        { "visibility": "on" }
      ]
    },{
      "featureType": "poi",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "transit",
      "stylers": [
        { "visibility": "on" }
      ]
    },{
      "featureType": "road",
      "stylers": [
        { "color": "#333" }
      ]
    },{
      "featureType": "landscape",
      "stylers": [
        { "color": "#e3f2f5" }
      ]
    },{
      "featureType": "water",
      "stylers": [
        { "visibility": "on" },
        { "color": "#f3feff" }
      ]
    }
  ];

  // Use data to create custom styles 
  var custom_map = new google.maps.StyledMapType(map_styles, {name: "Map style"}); 

	var json = [
		{
			"id": 1, 
			"name": "The Red Lion",
			"house": "Lannister",
			"address": "48 Parliament St, London SW1A 2NH",
			"words": "Hear me roar!",
			"details": "This is a Lannister pub.",
			"image": "img/houses/lannister.png",
			"url": "http://www.redlionwestminster.co.uk/",
			"lat": "51.502129",
			"lng": "-0.125711"
		}, {
			"id": 2, 
			"name": "The Three Stags",
			"house": "Baratheon",
			"address": "67/69 Kennington Road, London SE1 7PZ",
			"words": "Ours is the Fury",
			"details": "This is a Baratheon pub.",
			"image": "img/houses/baratheon.png",
			"url": "http://www.thethreestags.london/",
			"lat": "51.496844",
			"lng": "-0.111252"
		}, {
			"id": 3, 
			"name": "The Falcon",
			"house": "Arryn",
			"address": "33 Bedford Rd, Clapham, London SW4 7SQ",
			"words": "As High as Honor",
			"details": "This is a Arryn pub.",
			"image": "img/houses/arryn.png",
			"url": "https://www.thefalconclapham.co.uk/",
			"lat": "51.464292", 
			"lng": "-0.129019"
		}
	];
	
function initialize() {
  
  // Giving the map som options
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(51.502290, -0.125668),
    disableDefaultUI: true
  };
  
  // Creating the map
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  // Assign the map styles defined above to the map
	map.mapTypes.set('map_styles', custom_map);

	// Set one of the styles to display as default as the map loads
	map.setMapTypeId('map_styles');
  
  // Looping through all the entries from the JSON data
  for(var i = 0; i < json.length; i++) {
    
    // Current object
    var obj = json[i];

    // Adding a new marker for the object
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(obj.lat,obj.lng),
      map: map,
      title: obj.title // this works, giving the marker a title with the correct title
    });
    
    // Adding a new info window for the object
    var clicker = addClicker(marker, obj.title);
    
 



  } // end loop
  
  // Adding a new click event listener for the object
  function addClicker(marker, content) {
    google.maps.event.addListener(marker, 'click', function() {
      if (infowindow) {infowindow.close();}
      infowindow = new google.maps.InfoWindow({content: content});
      infowindow.open(map, marker);
    });
  }  
}

// Initialize the map
google.maps.event.addDomListener(window, 'load', initialize);

});













