// GLOBAL SCOPE

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
  
  // Create the map as a div  
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

  // Load the map markers
  loadMarkers();
}

function loadMarkers() {

  // THE RED LION, WESTMINSTER

    // MARKER FUNCTIONALITY
    // Set the position of the map marker
    var markerPositionRedLionWestminster = new google.maps.LatLng(51.502290, -0.125668);

    // Set the icon to be used with the map marker
    var markerIconRedLionWestminster = {
      url: 'img/lannister.png',
      // The size image file.
      size: new google.maps.Size(500, 500),
      //The point on the image to measure the anchor from. 0, 0 is the top left.
      origin: new google.maps.Point(0, 0),
      //The x y coordinates of the anchor point on the marker. e.g. If your map marker was a drawing pin then the anchor would be the tip of the pin.
      anchor: new google.maps.Point(20, 24)
    };

    // Shape of the map marker
    var markerShapeRedLionWestminster = {
      coord: [12,4,216,22,212,74,157,70,184,111,125,67,6,56],
      type: 'poly'
    };

    // Add the map marker to the map
    markerRedLionWestmister = new google.maps.Marker({
      position: markerPositionRedLionWestminster,
      map: GOTMap,
      title: 'The Red Lion',
      icon: markerIconRedLionWestminster,
      shape: markerShapeRedLionWestminster,
      zIndex: 101
    })

    // Reset z-indexes back to original values
    function resetZindexes() {
      markerRedLionWestmister(101);
    }

    // POPUP BOX FUNCTIONALITY
    // Create the popup box
    var infoBoxTextRedLionWestminster = document.createElement('div');
    infoBoxTextRedLionWestminster.style.cssText = pop_up_info;
    infoBoxTextRedLionWestminster.innerHTML = '<span class="pop_up_box_text" width="400" height="285" border="0">Here is some sample text.</span>';

    // Popup configuration options of the popup box
    var infoBoxOptionsRedLionWestminster = {
      content: infoBoxTextRedLionWestminster,
      disableAutoPan: false,
      maxWidth: 100,
      maxHeight: 400,
      pixelOffset: new google.maps.Size(-241, 0),
      zIndex: null,
      boxStyle: { 
        // background: "url('img/lannister.png') no-repeat",
        opacity: 1,
        width: "430px"
      }, 
      closeBoxMargin: "10px 2px 2px 2px",
      closeBoxURL: "img/button_close.png",
      infoBoxClearance: new google.maps.Size(1, 1),
      isHidden: false,
      pane: "floatPane",
      enableEventPropagation: false
    };

    // Use the configuration options above to create a popup box
    infoBoxRedLionWestminster = new InfoBox(infoBoxOptionsRedLionWestminster);

    // Click event listener
    google.maps.event.addListener(markerRedLionWestmister, 'click', function(){
      infoBoxRedLionWestminster.open(GOTMap, this);
      this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
      setZoomWhenMarkerClicked();
      GOTMap.setCenter(markerRedLionWestmister.getPosition());
    });

    // Zoom in the map when a marker is clicked
    function setZoomWhenMarkerClicked() {
      var currentZoom = GOTMap.getZoom();
      if (currentZoom < 5) {
        GOTMap.setZoom(5);
    }
  }

  // THE THIRSTY BEAR, BLACKFRIARS

    // MARKER FUNCTIONALITY
    // Set the position of the map marker
    var markerPositionThirstyBearBlackfriars = new google.maps.LatLng(51.507215, -0.108110);

    // Set the icon to be used with the map marker
    var markerIconThirstyBearBlackfriars = {
      url: 'img/mormont.png',
      // The size image file.
      size: new google.maps.Size(500, 500),
      //The point on the image to measure the anchor from. 0, 0 is the top left.
      origin: new google.maps.Point(0, 0),
      //The x y coordinates of the anchor point on the marker. e.g. If your map marker was a drawing pin then the anchor would be the tip of the pin.
      anchor: new google.maps.Point(20, 24)
    };

    // Shape of the map marker
    var markerShapeThirstyBearBlackfriars = {
      coord: [12,4,216,22,212,74,157,70,184,111,125,67,6,56],
      type: 'poly'
    };

    // Add the map marker to the map
    markerThirstyBearBlackfriars = new google.maps.Marker({
      position: markerPositionThirstyBearBlackfriars,
      map: GOTMap,
      title: 'The Thirsty Bear',
      icon: markerIconThirstyBearBlackfriars,
      shape: markerShapeThirstyBearBlackfriars,
      zIndex: 102
    })

    // Reset z-indexes back to original values
    function resetZindexes() {
      markerThirstyBearBlackfriars(102);
    }

    // POPUP BOX FUNCTIONALITY
    // Create the popup box
    var infoBoxTextThirstyBearBlackfriars= document.createElement('div');
    infoBoxTextThirstyBearBlackfriars.style.cssText = pop_up_info;
    infoBoxTextThirstyBearBlackfriars.innerHTML = '<span class="pop_up_box_text" width="400" height="285" border="0">Here is some sample text.</span>';

    // Popup configuration options of the popup box
    var infoBoxOptionsThirstyBearBlackfriars = {
      content: infoBoxTextThirstyBearBlackfriars,
      disableAutoPan: false,
      maxWidth: 100,
      maxHeight: 400,
      pixelOffset: new google.maps.Size(-241, 0),
      zIndex: null,
      boxStyle: { 
        // background: "url('img/mormont.png') no-repeat",
        opacity: 1,
        width: "430px"
      }, 
      closeBoxMargin: "10px 2px 2px 2px",
      closeBoxURL: "img/button_close.png",
      infoBoxClearance: new google.maps.Size(1, 1),
      isHidden: false,
      pane: "floatPane",
      enableEventPropagation: false
    };

    // Use the configuration options above to create a popup box
    infoBoxThirstyBearBlackfriars = new InfoBox(infoBoxOptionsThirstyBearBlackfriars);

    // Click event listener
    google.maps.event.addListener(markerThirstyBearBlackfriars, 'click', function(){
      infoBoxThirstyBearBlackfriars.open(GOTMap, this);
      this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
      setZoomWhenMarkerClicked();
      GOTMap.setCenter(markerThirstyBearBlackfriars.getPosition());
    });

  // THE THREE STAGS, KENNINGTON

    // MARKER FUNCTIONALITY
    // Set the position of the map marker
    var markerPositionThreeStagsKennington = new google.maps.LatLng(51.496888, -0.111306);

    // Set the icon to be used with the map marker
    var markerIconThreeStagsKennington = {
      url: 'img/baratheon.png',
      // The size image file.
      size: new google.maps.Size(500, 500),
      //The point on the image to measure the anchor from. 0, 0 is the top left.
      origin: new google.maps.Point(0, 0),
      //The x y coordinates of the anchor point on the marker. e.g. If your map marker was a drawing pin then the anchor would be the tip of the pin.
      anchor: new google.maps.Point(20, 24)
    };

    // Shape of the map marker
    var markerShapeThreeStagsKennington = {
      coord: [12,4,216,22,212,74,157,70,184,111,125,67,6,56],
      type: 'poly'
    };

    // Add the map marker to the map
    markerThreeStagsKennington = new google.maps.Marker({
      position: markerPositionThreeStagsKennington,
      map: GOTMap,
      title: 'The Three Stags',
      icon: markerIconThreeStagsKennington,
      shape: markerShapeThreeStagsKennington,
      zIndex: 102
    })

    // Reset z-indexes back to original values
    function resetZindexes() {
      markerThreeStagsKennington(103);
    }

    // POPUP BOX FUNCTIONALITY
    // Create the popup box
    var infoBoxTextThreeStagsKennington = document.createElement('div');
    infoBoxTextThreeStagsKennington.style.cssText = pop_up_info;
    infoBoxTextThreeStagsKennington.innerHTML = '<span class="pop_up_box_text" width="400" height="285" border="0">Here is some sample text.</span>';

    // Popup configuration options of the popup box
    var infoBoxOptionsThreeStagsKennington = {
      content: infoBoxTextThreeStagsKennington,
      disableAutoPan: false,
      maxWidth: 100,
      maxHeight: 400,
      pixelOffset: new google.maps.Size(-241, 0),
      zIndex: null,
      boxStyle: { 
        // background: "url('img/baratheon.png') no-repeat",
        opacity: 1,
        width: "430px"
      }, 
      closeBoxMargin: "10px 2px 2px 2px",
      closeBoxURL: "img/button_close.png",
      infoBoxClearance: new google.maps.Size(1, 1),
      isHidden: false,
      pane: "floatPane",
      enableEventPropagation: false
    };

    // Use the configuration options above to create a popup box
    infoBoxThreeStagsKennington = new InfoBox(infoBoxOptionsThreeStagsKennington);

    // Click event listener
    google.maps.event.addListener(markerThreeStagsKennington, 'click', function(){
      infoBoxThreeStagsKennington.open(GOTMap, this);
      this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
      setZoomWhenMarkerClicked();
      GOTMap.setCenter(markerThreeStagsKennington.getPosition());
    });

    // Zoom in the map when a marker is clicked
    function setZoomWhenMarkerClicked() {
      var currentZoom = GOTMap.getZoom();
      if (currentZoom < 5) {
        GOTMap.setZoom(5);
    }
  }

  // THE FALCON, CLAPHAM

    // MARKER FUNCTIONALITY
    // Set the position of the map marker
    var markerPositionTheFalconClapham = new google.maps.LatLng(51.464486, -0.129030);

    // Set the icon to be used with the map marker
    var markerIconTheFalconClapham = {
      url: 'img/arryn.png',
      // The size image file.
      size: new google.maps.Size(500, 500),
      //The point on the image to measure the anchor from. 0, 0 is the top left.
      origin: new google.maps.Point(0, 0),
      //The x y coordinates of the anchor point on the marker. e.g. If your map marker was a drawing pin then the anchor would be the tip of the pin.
      anchor: new google.maps.Point(20, 24)
    };

    // Shape of the map marker
    var markerShapeTheFalconClapham = {
      coord: [12,4,216,22,212,74,157,70,184,111,125,67,6,56],
      type: 'poly'
    };

    // Add the map marker to the map
    markerTheFalconClapham = new google.maps.Marker({
      position: markerPositionTheFalconClapham,
      map: GOTMap,
      title: 'The Three Stags',
      icon: markerIconTheFalconClapham,
      shape: markerShapeTheFalconClapham,
      zIndex: 102
    })

    // Reset z-indexes back to original values
    function resetZindexes() {
      markerTheFalconClapham(103);
    }

    // POPUP BOX FUNCTIONALITY
    // Create the popup box
    var infoBoxTextTheFalconClapham = document.createElement('div');
    infoBoxTextTheFalconClapham.style.cssText = pop_up_info;
    infoBoxTextTheFalconClapham.innerHTML = '<span class="pop_up_box_text" width="400" height="285" border="0">Here is some sample text.</span>';

    // Popup configuration options of the popup box
    var infoBoxOptionsTheFalconClapham = {
      content: infoBoxTextTheFalconClapham,
      disableAutoPan: false,
      maxWidth: 100,
      maxHeight: 400,
      pixelOffset: new google.maps.Size(-241, 0),
      zIndex: null,
      boxStyle: { 
        // background: "url('img/baratheon.png') no-repeat",
        opacity: 1,
        width: "430px"
      }, 
      closeBoxMargin: "10px 2px 2px 2px",
      closeBoxURL: "img/button_close.png",
      infoBoxClearance: new google.maps.Size(1, 1),
      isHidden: false,
      pane: "floatPane",
      enableEventPropagation: false
    };

    // Use the configuration options above to create a popup box
    infoBoxTheFalconClapham = new InfoBox(infoBoxOptionsTheFalconClapham);

    // Click event listener
    google.maps.event.addListener(markerTheFalconClapham, 'click', function(){
      infoBoxTheFalconClapham.open(GOTMap, this);
      this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
      setZoomWhenMarkerClicked();
      GOTMap.setCenter(markerTheFalconClapham.getPosition());
    });

    // Zoom in the map when a marker is clicked
    function setZoomWhenMarkerClicked() {
      var currentZoom = GOTMap.getZoom();
      if (currentZoom < 5) {
        GOTMap.setZoom(5);
    }
  }
}

