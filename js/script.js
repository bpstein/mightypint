// Define the map styles
var map_styles = [ 
  {
    "featureType": "administrative",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "color": "#FFE200" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "visibility": "on" },
      { "color": "#4f92c6" }
    ]
  }
];

// Define the map styles when the map is zoomed
var map_styles_zoomed = [
  {
    "featureType": "administrative",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "transit",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "color": "#FFE200" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "visibility": "on" },
      { "color": "#4f92c6" }
    ]
  },   {
    "featureType": "poi.park",
  "elementType": "geometry",
    "stylers": [
      { "color": "#FFFF00" }
    ]
  }
];

// Use the feature data to create styles
var custom_map = new google.maps.StyledMapType(map_styles, {name: "Map style"});
var custom_map_zoomed = new google.maps.StyledMapType(map_styles_zoomed, {name: "Map style zoomed"});


// Map configuration variables
var GOTMapCenter = new google.maps.LatLng(51.508433,-0.127974);
var GOTMapZoom = 13;
var GOTMapZoomMax = 15;
var GOTMapZoomMin = 10;

// Map setup configuration
var GOTMapOptions = { 
      center: GOTMapCenter, 
          zoom: GOTMapZoom,
      maxZoom:GOTMapZoomMax,
      minZoom:GOTMapZoomMin,
      panControl: false,
      mapTypeControl: false,
       mapTypeControlOptions: {
        mapTypeIds: [ 'map_styles', 'map_styles_zoomed']
       }
};

// Map variable (the map itself)
var GOTMap;

// Create control panel (ie. site title and 2 buttons) 
var controlPanelDiv = document.createElement('div');

// Variable containing the style for the pop-up infobox.
var pop_up_info = "border: 0px solid black; background-color: #ffffff; padding:15px; margin-top: 8px; border-radius:10px; -moz-border-radius: 10px; -webkit-border-radius: 10px; box-shadow: 1px 1px #888;";


// When the page loads, the line below calls the function below called 'loadGOTMap' to load up the map
google.maps.event.addDomListener(window, 'load', loadGOTMap);


// Call this function when the page loads
function loadGOTMap() {
  
// The line below creates the map, assigning it to this variable. 
// The line below also loads the map into the div with the id 'festival-map' (see code within the 'body' tags below), and applies the 'GOTMapOptions' (above) to configure this map. 
GOTMap = new google.maps.Map(document.getElementById("map"), GOTMapOptions); 

//Assigning the two map styles defined above to the map.
GOTMap.mapTypes.set('map_styles', custom_map);
GOTMap.mapTypes.set('map_styles_zoomed', custom_map_zoomed);
//Setting the one of the styles to display as default as the map loads.
GOTMap.setMapTypeId('map_styles');


//Continuously listens out for when the zoom level changes. This includs when the map zooms when a marker is clicked.
google.maps.event.addListener(GOTMap, "zoom_changed", function() {
  var newZoom = GOTMap.getZoom();
  //If the map is zoomed in, the switch to the style that shows the higher level of detail.
  if (newZoom > 5){
    GOTMap.setMapTypeId('map_styles_zoomed');
      }
  //Otherwise the map must be zoomed out, so use the style with the lower level of detail.
  else {
    GOTMap.setMapTypeId('map_styles');
  }

});


//Calls the function below to load up all the map markers.
loadMapMarkers();

}

