// create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
  
var Map = L.map("map" , {
    center: [40.7,-94.5], 
    zoom:3
});

var basemap = L.tileLayer(
  "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'",
  {
    attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  }).addTo(Map);



//Pull GeoJSON data from URL
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"


// Perform a GET request to the query URL/
d3.json(queryUrl).then(function (data) {
  function styleInfo(feature){
    return{
      opacity:1, 
      fillOpacity:1,
      fillColor: getColor(feature.geometry.coordinates[2]),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    }
  }
  
//     -Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

//     Hint: The depth of the earth can be found as the third coordinate for each earthquake.

//     -Include popups that provide additional information about the earthquake when its associated marker is clicked.

//     -Create a legend that will provide context for your map data.

  function getColor(depth){
    switch(true){
      case depth > 90: 
        return "#ea2c2c";
      case depth > 70:
        return "#ea822c";
      case depth > 50:
        return "#ee9c00";
      case depth > 30:
        return "#eecc00";
      case depth > 10:
        return "#d4ee00";
      default: return "#98ee00"
    }
  }

  function getRadius(magnitude){
    if (magnitude === 0) {
      return 1 
    } 
    return magnitude*4
  }

  L.geoJSON(data,{
    pointToLayer:function(feature,latlong){
        return L.circleMarker(latlong)
    },
    style: styleInfo,
    onEachFeature: function(feature,layer){
        layer.bindPopup("magnitude" + feature.properties.mag + feature.properties.place)
    }
  }).addTo(Map);

  console.log(data);
});

