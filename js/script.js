$(document).ready(function(){

	// SOCIAL MEDIA KING ROBERT FUNCTIONALITY
  $("#kingrobert").click(function(){
    $('#kingspeech').toggle(350);
  });

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

  // Array of venue markers
  var markers = [
  	{ Lat:"51.508433", Lng:"-0.127974", name:"WESTMINSTER" },
    { Lat:"51.504433", Lng:"-0.127944", name:"TEST1" },
    { Lat:"51.504333", Lng:"-0.127974", name:"TEST2" }
  ];

  // DECLARE THE CUSTOM MARKER CLASS
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
			div.style.width = '60px'; // was 20px
			div.style.height = '60px'; // was 20px
			div.style.background = '../img/lannister.png';
			div.dataModalId = 'popup1';
			
			if (typeof(self.args.marker_id) !== 'undefined') {
				div.dataset.marker_id = self.args.marker_id;
			}
			
			google.maps.event.addDomListener(div, "click", function(event) {
				// alert('You clicked on a custom marker!');			
				// google.maps.event.trigger(self, "click");
				// this.leanModal();
				// $(".marker").leanModal({ 
				// 	overlay : 1, 
				// 	closeButton: ".modal_close" });

			});
			
			var panes = this.getPanes();
			panes.overlayImage.appendChild(div);
		}
		
		var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
		
		if (point) {
			div.style.left = (point.x - 25) + 'px'; // was 10; should be half the length of the marker div
			div.style.top = (point.y - 50) + 'px'; // was 20; should be the full length of the marker div
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

	//   // Use data to create custom styles 
	  // var custom_map = new google.maps.StyledMapType(map_styles, {name: "Map style"});

	function initialize() {

		var myLatlng = new google.maps.LatLng(51.502290,-0.125668);
		var mapOptions = {
			zoom: 14,
			center: myLatlng,
			disableDefaultUI: true
		}
		
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions); 


		// Example standard marker - use this to cross-check the position of the overlay markers 
		// var marker = new google.maps.Marker({
		// 	position: myLatlng,
		// 	map: map,
		// 	title: 'Hello World!'
		// });
		
		
		overlay = new CustomMarker(
			myLatlng, 
			map,
			{
				marker_id: '123'
			}
		);

	  // Assign the map styles defined above to the map
	  map.mapTypes.set('map_styles', custom_map);

	  // Set one of the styles to display as default as the map loads
	  map.setMapTypeId('map_styles');

	  // SET MODAL WINDOWS ON MARKER CLICK
		function modalWindow(){
			var modal = document.getElementById('myModal');
			// Get the button that opens the modal
			var btn = document.getElementById('footer-nav');
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];
			// When the user clicks on the button, open the modal 
			btn.onclick = function() {
			  modal.style.display = "block";
			}
			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			  modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
		    if (event.target == modal) {
		        modal.style.display = "none";
		    }
			}
		}

		modalWindow();

	}

	google.maps.event.addDomListener(window, 'load', initialize);

});
