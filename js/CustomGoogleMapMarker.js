function CustomMarker(latlng, map, args) {
	this.latlng = latlng;	
	this.args = args;	
	this.setMap(map);	
}

CustomMarker.prototype = new google.maps.OverlayView();

var markers = [ { lat: 51.502290, lng: -0.125668, img: "img.src", place: "" }, 
{ lat: 51.502290, lng: -0.125668, img: "img.src", place: "" } ];

var img = document.createElement('img');
// style image inside containing div
img.src = 'img/lannister.png';
img.src = self.args.image;

markers.forEach(function(marker) {
var newLatLng = new google.maps.LatLng( marker.lat, marker.lng );
var img_src = marker.img;
var overlay = new customMarker(
newLatLng, map, { image: img.src }
)
}
);

CustomMarker.prototype.draw = function() {
	
	var self = this;
	
	var redlion = this.redlion;
	
	if (!redlion) {
	
		redlion = this.redlion = document.createElement('redlion');
		
		redlion.className = 'marker';
		
		redlion.style.position = 'absolute';
		redlion.style.cursor = 'pointer';
		redlion.style.width = '20px';
		redlion.style.height = '20px';
		
		if (typeof(self.args.marker_id) !== 'undefined') {
			redlion.dataset.marker_id = self.args.marker_id;
		}
		
		google.maps.event.addDomListener(redlion, "click", function(event) {
			alert('You clicked on a custom marker!');			
			google.maps.event.trigger(self, "click");
		});
		
		var panes = this.getPanes();
		panes.overlayImage.appendChild(redlion);
	}
	
	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
	
	if (point) {
		redlion.style.left = (point.x - 10) + 'px';
		redlion.style.top = (point.y - 20) + 'px';
	}
};

CustomMarker.prototype.remove = function() {
	if (this.redlion) {
		this.redlion.parentNode.removeChild(this.redlion);
		this.redlion = null;
	}	
};

CustomMarker.prototype.getPosition = function() {
	return this.latlng;	
};