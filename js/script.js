//initializing the map with coordinates
var mymap = L.map('mapid').setView([24.8615, 67.0099], 13);


//Adding Mapbox Tile layer
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGFtbWFkc2lkZGlxdWkiLCJhIjoiY2oxZnkzd29vMDAwMDMzbjJ4dWhqbG11MiJ9.lRg0ZH-eTEtbaOd0EuZ41g', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'karachiBus',
    accessToken: 'pk.eyJ1IjoiaGFtbWFkc2lkZGlxdWkiLCJhIjoiY2oxZnkzd29vMDAwMDMzbjJ4dWhqbG11MiJ9.lRg0ZH-eTEtbaOd0EuZ41g'
}).addTo(mymap);

var shpfile = new L.Shapefile('../shapeFiles/19DRoute/19DRoute.prj'); 
shpfile.addTo(mymap);
shpfile.once("load", function(){
    console.log("finished loaded shapefile");
});