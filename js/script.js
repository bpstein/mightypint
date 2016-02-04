// $(document).ready(function(){

//   // SOCIAL MEDIA KING ROBERT FUNCTIONALITY
//   $("#kingrobert").click(function(){
//     $('#kingspeech').toggle(350);
//   });

//   // **********CREATE THE MAP**********//

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

//   // Define the map styles when the map is zoomed
//   var map_styles_zoomed = [
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
//         { "visibility": "on"}
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
//     },   {
//       "featureType": "poi.park",
//       "elementType": "geometry",
//       "stylers": [
//         { "color": "#e3f2f5" }
//       ]
//     }
//   ];

//   // Use data to create custom styles 
//   var custom_map = new google.maps.StyledMapType(map_styles, {name: "Map style"});
//   var custom_map_zoomed = new google.maps.StyledMapType(map_styles_zoomed, {name: "Map style zoomed"});

//   // Define map configuration variables
//   var GOTMapCenter = new google.maps.LatLng(51.508433,-0.127974);
//   var GOTMapZoom = 13;
//   var GOTMapZoomMax = 16;
//   var GOTMapZoomMin = 10;


//   // Set map configuration variables
//   var GOTMapOptions = {
//     center: GOTMapCenter,
//     center: GOTMapCenter, 
//     zoom: GOTMapZoom,
//     maxZoom:GOTMapZoomMax,
//     minZoom:GOTMapZoomMin,
//     panControl: false,
//     mapTypeControl: false,
//     streetViewControl: false,
//     mapTypeControlOptions: {
//     mapTypeIds: [ 'map_styles', 'map_styles_zoomed']
//     }
//   };

//   // Map variable (the map itself)
//   var GOTMap;

//   // // Create control panel (ie. site title and 2 buttons) 
//   // var controlPanelDiv = document.createElement('div');

//   // // Variable containing the style for the pop-up infobox.
//   var pop_up_info = "border: 0px solid black; background-color: #ffffff; padding:15px; margin-top: 8px; border-radius:10px; -moz-border-radius: 10px; -webkit-border-radius: 10px; box-shadow: 1px 1px #888;";

//   // When the page loads, the line below calls the function below called 'loadGOTMap' to load up the map
//   google.maps.event.addDomListener(window, 'load', loadGOTMap);

//   // Call this function when the page loads
//   function loadGOTMap() {
    
//     // Create the map as a div  
//     GOTMap = new google.maps.Map(document.getElementById("map"), GOTMapOptions); 

//     //Assigning the two map styles defined above to the map.
//     GOTMap.mapTypes.set('map_styles', custom_map);
//     GOTMap.mapTypes.set('map_styles_zoomed', custom_map_zoomed);
//     //Setting the one of the styles to display as default as the map loads.
//     GOTMap.setMapTypeId('map_styles');


//     //Continuously listens out for when the zoom level changes. This includs when the map zooms when a marker is clicked.
//     google.maps.event.addListener(GOTMap, "zoom_changed", function() {
//       var newZoom = GOTMap.getZoom();
//         //If the map is zoomed in, the switch to the style that shows the higher level of detail.
//         if (newZoom > 5) {
//           GOTMap.setMapTypeId('map_styles_zoomed');
//         }
//         //Otherwise the map must be zoomed out, so use the style with the lower level of detail.
//         else {
//           GOTMap.setMapTypeId('map_styles');
//         }
//     })

//     // Load the map markers
//     loadMarkers();

//   };


//   // **********CREATE THE CUSTOM MARKERS**********//
 
//   function loadMarkers() {

//     // THE RED LION, WESTMINSTER

//       // MARKER FUNCTIONALITY
//       // Set the position of the map marker
//       var markerPositionRedLionWestminster = new google.maps.LatLng(51.502290, -0.125668);

//       // Set the icon to be used with the map marker
//       var markerIconRedLionWestminster = {
//         url: 'img/lannister.png',
//         // The size image file.
//         size: new google.maps.Size(500, 500),
//         //The point on the image to measure the anchor from. 0, 0 is the top left.
//         origin: new google.maps.Point(0, 0),
//         //The x y coordinates of the anchor point on the marker. e.g. If your map marker was a drawing pin then the anchor would be the tip of the pin.
//         anchor: new google.maps.Point(20, 24)
//       };

//       // Add the map marker to the map
//       markerRedLionWestmister = new google.maps.Marker({
//         position: markerPositionRedLionWestminster,
//         map: GOTMap,
//         title: 'The Red Lion',
//         icon: markerIconRedLionWestminster,
//         zIndex: 101
//       })

//       // Reset z-indexes back to original values
//       function resetZindexes() {
//         markerRedLionWestmister(101);
//       }

//       // POPUP BOX FUNCTIONALITY
//       // Create the popup box
//       var infoBoxTextRedLionWestminster = document.createElement('div');
//       infoBoxTextRedLionWestminster.style.cssText = pop_up_info;
//       infoBoxTextRedLionWestminster.innerHTML = 
//         '<div class="pop_up_box_text">Here is some sample text. Here is some sample text. Here is some sample text. Here is some sample text. Here is some sample text. Here is some sample text.</div>';

//       // Popup configuration options of the popup box
//       var infoBoxOptionsRedLionWestminster = {
//         content: infoBoxTextRedLionWestminster,
//         disableAutoPan: false,
//         maxWidth: 100,
//         maxHeight: 400,
//         pixelOffset: new google.maps.Size(-241, 0),
//         zIndex: null,
//         boxStyle: { 
//           // background: "url('img/lannister.png') no-repeat",
//           opacity: 1,
//           width: "430px"
//         }, 
//         closeBoxMargin: "10px 2px 2px 2px",
//         closeBoxURL: "img/button_close.png",
//         infoBoxClearance: new google.maps.Size(1, 1),
//         isHidden: false,
//         pane: "floatPane",
//         enableEventPropagation: false
//       };

//       // Use the configuration options above to create a popup box
//       infoBoxRedLionWestminster = new InfoBox(infoBoxOptionsRedLionWestminster);

//       // Click event listener
//       google.maps.event.addListener(markerRedLionWestmister, 'click', function(){
//         infoBoxRedLionWestminster.open(GOTMap, this);
//         this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
//         setZoomWhenMarkerClicked();
//         GOTMap.setCenter(markerRedLionWestmister.getPosition());
//       });

//       // Zoom in the map when a marker is clicked
//       function setZoomWhenMarkerClicked() {
//         var currentZoom = GOTMap.getZoom();
//         if (currentZoom < 5) {
//           GOTMap.setZoom(5);
//       }
//     }

//     // THE THIRSTY BEAR, BLACKFRIARS

//       // MARKER FUNCTIONALITY
//       // Set the position of the map marker
//       var markerPositionThirstyBearBlackfriars = new google.maps.LatLng(51.507215, -0.108110);

//       // Set the icon to be used with the map marker
//       var markerIconThirstyBearBlackfriars = {
//         url: 'img/mormont.png',
//         // The size image file.
//         size: new google.maps.Size(500, 500),
//         //The point on the image to measure the anchor from. 0, 0 is the top left.
//         origin: new google.maps.Point(0, 0),
//         //The x y coordinates of the anchor point on the marker. e.g. If your map marker was a drawing pin then the anchor would be the tip of the pin.
//         anchor: new google.maps.Point(20, 24)
//       };

//       // Add the map marker to the map
//       markerThirstyBearBlackfriars = new google.maps.Marker({
//         position: markerPositionThirstyBearBlackfriars,
//         map: GOTMap,
//         title: 'The Thirsty Bear',
//         icon: markerIconThirstyBearBlackfriars,
//         zIndex: 102
//       })

//       // Reset z-indexes back to original values
//       function resetZindexes() {
//         markerThirstyBearBlackfriars(102);
//       }

//       // POPUP BOX FUNCTIONALITY
//       // Create the popup box
//       var infoBoxTextThirstyBearBlackfriars= document.createElement('div');
//       infoBoxTextThirstyBearBlackfriars.style.cssText = pop_up_info;
//       infoBoxTextThirstyBearBlackfriars.innerHTML = '<span class="pop_up_box_text" width="400" height="285" border="0">Here is some sample text.</span>';

//       // Popup configuration options of the popup box
//       var infoBoxOptionsThirstyBearBlackfriars = {
//         content: infoBoxTextThirstyBearBlackfriars,
//         disableAutoPan: false,
//         maxWidth: 100,
//         maxHeight: 400,
//         pixelOffset: new google.maps.Size(-241, 0),
//         zIndex: null,
//         boxStyle: { 
//           // background: "url('img/mormont.png') no-repeat",
//           opacity: 1,
//           width: "430px"
//         }, 
//         closeBoxMargin: "10px 2px 2px 2px",
//         closeBoxURL: "img/button_close.png",
//         infoBoxClearance: new google.maps.Size(1, 1),
//         isHidden: false,
//         pane: "floatPane",
//         enableEventPropagation: false
//       };

//       // Use the configuration options above to create a popup box
//       infoBoxThirstyBearBlackfriars = new InfoBox(infoBoxOptionsThirstyBearBlackfriars);

//       // Click event listener
//       google.maps.event.addListener(markerThirstyBearBlackfriars, 'click', function(){
//         infoBoxThirstyBearBlackfriars.open(GOTMap, this);
//         this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
//         setZoomWhenMarkerClicked();
//         GOTMap.setCenter(markerThirstyBearBlackfriars.getPosition());
//       });

//     // THE THREE STAGS, KENNINGTON

//       // MARKER FUNCTIONALITY
//       // Set the position of the map marker
//       var markerPositionThreeStagsKennington = new google.maps.LatLng(51.496888, -0.111306);

//       // Set the icon to be used with the map marker
//       var markerIconThreeStagsKennington = {
//         url: 'img/baratheon.png',
//         // The size image file.
//         size: new google.maps.Size(500, 500),
//         //The point on the image to measure the anchor from. 0, 0 is the top left.
//         origin: new google.maps.Point(0, 0),
//         //The x y coordinates of the anchor point on the marker. e.g. If your map marker was a drawing pin then the anchor would be the tip of the pin.
//         anchor: new google.maps.Point(20, 24)
//       };

//       // Add the map marker to the map
//       markerThreeStagsKennington = new google.maps.Marker({
//         position: markerPositionThreeStagsKennington,
//         map: GOTMap,
//         title: 'The Three Stags',
//         icon: markerIconThreeStagsKennington,
//         zIndex: 102
//       })

//       // Reset z-indexes back to original values
//       function resetZindexes() {
//         markerThreeStagsKennington(103);
//       }

//       // POPUP BOX FUNCTIONALITY
//       // Create the popup box
//       var infoBoxTextThreeStagsKennington = document.createElement('div');
//       infoBoxTextThreeStagsKennington.style.cssText = pop_up_info;
//       infoBoxTextThreeStagsKennington.innerHTML = '<span class="pop_up_box_text" width="400" height="285" border="0">Here is some sample text.</span>';

//       // Popup configuration options of the popup box
//       var infoBoxOptionsThreeStagsKennington = {
//         content: infoBoxTextThreeStagsKennington,
//         disableAutoPan: false,
//         maxWidth: 100,
//         maxHeight: 400,
//         pixelOffset: new google.maps.Size(-241, 0),
//         zIndex: null,
//         boxStyle: { 
//           // background: "url('img/baratheon.png') no-repeat",
//           opacity: 1,
//           width: "430px"
//         }, 
//         closeBoxMargin: "10px 2px 2px 2px",
//         closeBoxURL: "img/button_close.png",
//         infoBoxClearance: new google.maps.Size(1, 1),
//         isHidden: false,
//         pane: "floatPane",
//         enableEventPropagation: false
//       };

//       // Use the configuration options above to create a popup box
//       infoBoxThreeStagsKennington = new InfoBox(infoBoxOptionsThreeStagsKennington);

//       // Click event listener
//       google.maps.event.addListener(markerThreeStagsKennington, 'click', function(){
//         infoBoxThreeStagsKennington.open(GOTMap, this);
//         this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
//         setZoomWhenMarkerClicked();
//         GOTMap.setCenter(markerThreeStagsKennington.getPosition());
//       });

//       // Zoom in the map when a marker is clicked
//       function setZoomWhenMarkerClicked() {
//         var currentZoom = GOTMap.getZoom();
//         if (currentZoom < 5) {
//           GOTMap.setZoom(5);
//       }
//     }

//     // THE FALCON, CLAPHAM

//       // MARKER FUNCTIONALITY
//       // Set the position of the map marker
//       var markerPositionTheFalconClapham = new google.maps.LatLng(51.464486, -0.129030);

//       // Set the icon to be used with the map marker
//       var markerIconTheFalconClapham = {
//         url: 'img/arryn.png',
//         // The size image file.
//         size: new google.maps.Size(500, 500),
//         //The point on the image to measure the anchor from. 0, 0 is the top left.
//         origin: new google.maps.Point(0, 0),
//         //The x y coordinates of the anchor point on the marker. e.g. If your map marker was a drawing pin then the anchor would be the tip of the pin.
//         anchor: new google.maps.Point(20, 24)
//       };

//       // Add the map marker to the map
//       markerTheFalconClapham = new google.maps.Marker({
//         position: markerPositionTheFalconClapham,
//         map: GOTMap,
//         title: 'The Three Stags',
//         icon: markerIconTheFalconClapham,
//         zIndex: 102
//       })

//       // Reset z-indexes back to original values
//       function resetZindexes() {
//         markerTheFalconClapham(103);
//       }

//       // POPUP BOX FUNCTIONALITY
//       // Create the popup box
//       var infoBoxTextTheFalconClapham = document.createElement('div');
//       infoBoxTextTheFalconClapham.style.cssText = pop_up_info;
//       infoBoxTextTheFalconClapham.innerHTML = '<span class="pop_up_box_text" width="400" height="285" border="0">Here is some sample text.</span>';

//       // Popup configuration options of the popup box
//       var infoBoxOptionsTheFalconClapham = {
//         content: infoBoxTextTheFalconClapham,
//         disableAutoPan: false,
//         maxWidth: 100,
//         maxHeight: 400,
//         pixelOffset: new google.maps.Size(-241, 0),
//         zIndex: null,
//         boxStyle: { 
//           // background: "url('img/baratheon.png') no-repeat",
//           opacity: 1,
//           width: "430px"
//         }, 
//         closeBoxMargin: "10px 2px 2px 2px",
//         closeBoxURL: "img/button_close.png",
//         infoBoxClearance: new google.maps.Size(1, 1),
//         isHidden: false,
//         pane: "floatPane",
//         enableEventPropagation: false
//       };

//       // Use the configuration options above to create a popup box
//       infoBoxTheFalconClapham = new InfoBox(infoBoxOptionsTheFalconClapham);

//       // Click event listener
//       google.maps.event.addListener(markerTheFalconClapham, 'click', function(){
//         infoBoxTheFalconClapham.open(GOTMap, this);
//         this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
//         setZoomWhenMarkerClicked();
//         GOTMap.setCenter(markerTheFalconClapham.getPosition());
//       });

//       // Zoom in the map when a marker is clicked
//       function setZoomWhenMarkerClicked() {
//         var currentZoom = GOTMap.getZoom();
//         if (currentZoom < 5) {
//           GOTMap.setZoom(5);
//       }
//     }
//   }

// });





var GOTMap;
var name;

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



// When the page loads, the line below calls the function below called 'loadGOTMap' to load up the map
google.maps.event.addDomListener(window, 'load', loadGOTMap);

// Use data to create custom styles 
var custom_map = new google.maps.StyledMapType(map_styles, {name: "Map style"});

function loadGOTMap() {
  
  var myLatlng = new google.maps.LatLng(51.508433,-0.127974);
  
  var mapOptions = {
    center: myLatlng,
    zoom: 13,
    panControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    mapTypeControlOptions: {
      mapTypeIds: [ 
        'map_styles'
      ]
    }   
  };

  // Create the map as a div  
  GOTMap = new google.maps.Map(document.getElementById('map'), mapOptions);

  //Assigning the two map styles defined above to the map.
  GOTMap.mapTypes.set('map_styles', custom_map);
  //Setting the one of the styles to display as default as the map loads.
  GOTMap.setMapTypeId('map_styles');

  var markers = [ 
    { Lat:"51.508433", Lng:"-0.127974", name:"WESTMINSTER" }
  ];

  function customMarker(latlng, map, args) {
      this.latlng = latlng;
      this.args = args;
      this.setMap(map);
  }
  
  customMarker.prototype = new google.maps.OverlayView();
  
  customMarker.prototype.draw = function() {
    var self = this;
    var div = this.div;
  
    if (!div) {
    
      div = this.div = document.createElement('div');
      div.id = 'marker';
      div.style.width = '100px';
      div.style.height = '100px';
    
      var div_pointer = document.createElement('div');
      div_pointer.className = 'triangle';
      
      var image_container = document.createElement('div');
      image_container.className = 'image_container';
      
      var img = document.createElement('img');
      img.className = "marker_image";
      img.src = self.args.img;
      
      var name_container = document.createElement('div');
      name_container.className = 'name_container';
      
      var text = document.createElement('p');
      text.innerText = self.args.name;
      text.className = 'text';
    
      var exit = document.createElement('div');
      exit.className = 'exit';
      exit.innerHTML = '<img className="exit_image" style="width:30px; height:30px;" src="https://cdn3.iconfinder.com/data/icons/security-1/512/delete-512.png">' + '</img>';
      exit.style.display = 'none';

      function large() {
        div.classList.add('large');
        div.style.width = '300px'; 
        div.style.height = '300px';
        div.style.zIndex = '1000';
        exit.style.display = 'block';
        exit.style.opacity = '1';
        exit.addEventListener('mouseover', function() {
          exit.style.opacity = '1';
        }, false);
        exit.addEventListener('mouseout', function() {
          exit.style.opacity = '0.3';
        }, false);
      }
    
    
      function close(e) {
        var target = e.target;
        e.stopPropagation();
        div.classList.remove('large');
        div.style.width = '100px';
        div.style.height = '100px';
        exit.style.display = 'none';
      }
    
      div.appendChild(image_container);
      image_container.appendChild(img);
      div.appendChild(div_pointer);
      div.appendChild(name_container);
      name_container.appendChild(text);
      div.appendChild(exit);
    
      name_container.onmouseover = function() { 
        name_container.style.opacity = '0.6'; div.style.zIndex = '1000' 
      };
      name_container.onmouseout = function() { 
        name_container.style.opacity = '0'; div.style.zIndex = '100' 
      };
      div.addEventListener('click', large, false);
      exit.addEventListener('click', close, false);
    
      if(typeof(self.args.marker_id) !== 'undefined') {
        div.dataset.marker_id = self.args.marker_id; 
      }
    
      google.maps.event.addDomListener(div, "click", function(event) { 
        google.maps.event.trigger(self, "click");
      });
    
      var panes = this.getPanes();
      panes.overlayImage.appendChild(div);
    
    }
  
    var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
  
    if (point) {
    div.style.left = (point.x - 50) + 'px';
    div.style.top = (point.y - 125) + 'px';
    }
  }
  
  customMarker.prototype.remove = function() {
    
    if (this.div) {
      this.div.parentNode.removeChild(this.div);
      this.div = null;
    }
  }
  
  customMarker.prototype.getPosition = function() { 
    return this.latlng;
  }
  
  markers.forEach(function(marker) {
    var newLatlng = new google.maps.LatLng(marker.Lat, marker.Lng);
    image = marker.img;
    name = marker.name;
  
    var overlay = new customMarker(
      newLatlng, 
      GOTMap, {
        img: image,
        name: name,
        marker_id: '123',
        colour: 'Red'
      });
  });
}
