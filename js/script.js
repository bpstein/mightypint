// $(document).ready(function() {

//   // SOCIAL MEDIA KING ROBERT FUNCTIONALITY
//   $("#kingrobert").click(function(){
//     $('#kingspeech').toggle(350);
//   });

//   // DECLARE THE CUSTOM MARKER CLASS
//   function CustomMarker(latlng, map, args) {
//   	this.latlng; // latitude and longitude
//   	this.args = args; // arguments to pass into the custom HTML
//   	this.setMap(map); // map object reference
//   }

// 	// Extend the OverlayView class and inherit its methods
// 	CustomMarker.prototype = new google.maps.OverlayView();

// 	// Create the custom HTML overlay markers and insert them into the map
// 	CustomMarker.prototype.draw = function() {
		
// 		var self = this;
// 		var div = this.div;

// 		if (!div) {
		
// 			// Define the DOM element that is inserted into the map
// 			div = this.div = document.createElement('div');
			
// 			// Specify the attributes, name and classes of the new element
// 			div.className = 'marker';
// 			div.style.position = 'absolute';
// 			div.style.cursor = 'pointer';
// 			div.style.width = '20px';
// 			div.style.height = '20px';
// 			div.style.background = 'blue';
			
// 			if (typeof(self.args.marker_id) !== 'undefined') {
// 				div.dataset.marker_id = self.args.marker_id;
// 			}
			
// 			// Event/alert/response when user clicks on a custom marker
// 			google.maps.event.addDomListener(div, "click", function(event) {
// 				alert('You clicked on a custom marker!');			
// 				google.maps.event.trigger(self, "click");
// 			});
			
// 			var panes = this.getPanes();
// 			panes.overlayImage.appendChild(div);
// 		}
		
// 		// Position the custom overlay at the key position on the map
// 		// Note that the custom marker defaults to the point at the top-left of the marker
// 		var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
		
// 		if (point) {
// 			div.style.left = (point.x - 10) + 'px';
// 			div.style.top = (point.y - 20) + 'px';
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

//   var GOTMap;
//   var name;

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

//   // When the page loads, call the function 'loadGOTMap' to load up the map
//   google.maps.event.addDomListener(window, 'load', loadGOTMap);

//   // Use data to create custom styles 
//   var custom_map = new google.maps.StyledMapType(map_styles, {name: "Map style"});

//   // LOAD THE GOT MAP!
//   function loadGOTMap() {
    
//     var myLatlng = new google.maps.LatLng(51.508433,-0.127974);
//     var mapOptions = {
//       center: myLatlng,
//       zoom: 13,
//       disableDefaultUI: true,
//       panControl: false,
//       mapTypeControl: false,
//       streetViewControl: false,
//       zoomControl: true,
//       mapTypeControlOptions: {
//         mapTypeIds: [ 
//           'map_styles'
//         ]
//       }   
//     };

//     // Create the map as a div  
//     var GOTMap = new google.maps.Map(document.getElementById('map'), mapOptions);

//     // Assign the map styles defined above to the map
//     GOTMap.mapTypes.set('map_styles', custom_map);

//     // Set one of the styles to display as default as the map loads
//     GOTMap.setMapTypeId('map_styles');

//     	// Example standard marker, to cross-check locations
// 		var marker = new google.maps.Marker({
// 			position: myLatlng,
// 			map: GOTMap,
// 			title: 'Hello World!'
// 		});
		
		
// 		overlay = new CustomMarker(
// 			myLatlng, 
// 			GOTMap,
// 			{
// 				marker_id: '123'
// 			}
// 		);
//   }

//   google.maps.event.addDomListener(window, 'load', loadGOTMap);

// });



$(document).ready(function(){

	function CustomMarker(latlng, map, args) {
	this.latlng = latlng;	
	this.args = args;	
	this.setMap(map);	
}

CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function() {
	
	var self = this;
	
	var div = this.div;
	
	if (!div) {
	
		div = this.div = document.createElement('div');
		
		div.className = 'marker';
		
		div.style.position = 'absolute';
		div.style.cursor = 'pointer';
		div.style.width = '20px';
		div.style.height = '20px';
		div.style.background = 'blue';
		
		if (typeof(self.args.marker_id) !== 'undefined') {
			div.dataset.marker_id = self.args.marker_id;
		}
		
		google.maps.event.addDomListener(div, "click", function(event) {
			alert('You clicked on a custom marker!');			
			google.maps.event.trigger(self, "click");
		});
		
		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);
	}
	
	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
	
	if (point) {
		div.style.left = (point.x - 10) + 'px';
		div.style.top = (point.y - 20) + 'px';
	}
};

CustomMarker.prototype.remove = function() {
	if (this.div) {
		this.div.parentNode.removeChild(this.div);
		this.div = null;
	}	
};

CustomMarker.prototype.getPosition = function() {
	return this.latlng;	
};


function initialize() {

	var myLatlng = new google.maps.LatLng(51.502290,-0.125668);
	var mapOptions = {
		zoom: 14,
		center: myLatlng,
		disableDefaultUI: true
	}
	
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	
	// Example standard marker
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'Hello World!'
	});
	
	
	overlay = new CustomMarker(
		myLatlng, 
		map,
		{
			marker_id: '123'
		}
	);
}

google.maps.event.addDomListener(window, 'load', initialize);


});













