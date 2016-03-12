// $(document).ready(function(){

// 	// SOCIAL MEDIA KING ROBERT FUNCTIONALITY
//   $("#kingrobert").click(function(){
//     $('#kingspeech').toggle(350);
//   });

//   // CREATION OF MAP GOOGLE MAP
//   // Define the map styles
//   var map_styles = [ 
//     {
//       "featureType": "administrative",
//       "stylers": [
//         { "visibility": "on" }
//       ]
//     },{
//       "featureType": "poi",
//       "stylers": [
//         { "visibility": "off" }
//       ]
//     },{
//       "featureType": "transit",
//       "stylers": [
//         { "visibility": "on" }
//       ]
//     },{
//       "featureType": "road",
//       "stylers": [
//         { "color": "#333" }
//       ]
//     },{
//       "featureType": "landscape",
//       "stylers": [
//         { "color": "#e3f2f5" }
//       ]
//     },{
//       "featureType": "water",
//       "stylers": [
//         { "visibility": "on" },
//         { "color": "#f3feff" }
//       ]
//     }
//   ];

//   // Use data to create custom styles 
//   var custom_map = new google.maps.StyledMapType(map_styles, {name: "Map style"});

//   // Array of venue markers
//   var markers = [
//   	{ Lat:"51.508433", Lng:"-0.127974", name:"WESTMINSTER" },
//     { Lat:"51.504433", Lng:"-0.127944", name:"TEST1" },
//     { Lat:"51.504333", Lng:"-0.127974", name:"TEST2" }
//   ];

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

// 		// Declare the variables and parameters for the map
// 		var myLatLng = new google.maps.LatLng(51.502290,-0.125668);
// 		var mapOptions = {
// 			zoom: 14,
// 			center: myLatLng,
// 			disableDefaultUI: false
// 		}
		
// 		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions); 

// 		// Example standard marker - use this to cross-check the position of the overlay markers 
// 		var marker = new google.maps.Marker({
// 			position: myLatlng,
// 			map: map,
// 			title: 'Hello World!'
// 		});
		
		
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













// Alternative script for multiple map markers 


// https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false
// //code.jquery.com/jquery-1.11.0.min.js

var map;

// The JSON data
var json = [{"id":48,"title":"Helgelandskysten","longitude":"12.63376","latitude":"66.02219"},{"id":46,"title":"Tysfjord","longitude":"16.50279","latitude":"68.03515"},{"id":44,"title":"Sledehunds-ekspedisjon","longitude":"7.53744","latitude":"60.08929"},{"id":43,"title":"Amundsens sydpolferd","longitude":"11.38411","latitude":"62.57481"},{"id":39,"title":"Vikingtokt","longitude":"6.96781","latitude":"60.96335"},{"id":6,"title":"Tungtvann- sabotasjen","longitude":"8.49139","latitude":"59.87111"}];



function initialize() {
  
  // Giving the map som options
  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(66.02219,12.63376)
  };
  
  // Creating the map
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
  
  // Looping through all the entries from the JSON data
  for(var i = 0; i < json.length; i++) {
    
    // Current object
    var obj = json[i];

    // Adding a new marker for the object
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(obj.latitude,obj.longitude),
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




