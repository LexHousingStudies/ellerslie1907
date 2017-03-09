var map = L.map('map',{
      minZoom: 16,
      maxZoom: 19
    })
    .setView([38.041451,-84.482538], 18);

var gBase = new L.Google();

map.addLayer(gBase);

var overlay = L.tileLayer('https://api.mapbox.com/v4/lexhousingstudies.dweq2nxv/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibGV4aG91c2luZ3N0dWRpZXMiLCJhIjoiY2lqY2NhZ2VjMDAxZHV1bTBwc2hkbHJ4bCJ9.6eF0ROiV6x6wBDhdDOv2RA', {
        attribution: '<a href="http://libraries.uky.edu/" target="_blank">University of Kentucky Libraries</a>',
        opacity: 0.75,
        maxNativeZoom: 19,
        maxZoom: 19
      })
      .addTo(map);

$("#opacity-control").trigger("create");
$("#opacity-slider").on("slidestop", function(event, ui){
  var opacityNew = event.target.valueAsNumber;
  ChangeOpacity(opacityNew, overlay);
})

function ChangeOpacity(slider, overlay){
  var opacityValue = slider/100;
  overlay.setOpacity(opacityValue);
}
