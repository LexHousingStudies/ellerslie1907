// L.mapbox.accessToken = 'pk.eyJ1IjoibWFwdGFzdGlrIiwiYSI6IjNPMkREV1kifQ.2KGPFZD0QaGfvYzXYotTXQ';
var handle = document.getElementById('handle'),
    start = false,
    startTop;

var map = L.map('map',{
      minZoom: 16,
      maxZoom: 19
    })
    .setView([38.041451,-84.482538], 18);

map.createPane('imagery')
map.createPane('sanborn')

map.getPane('sanborn').style.zIndex = 650;

var base = L.esri.imageMapLayer({
    url: "http://kyraster.ky.gov/arcgis/rest/services/ImageServices/Ky_NAIP_2016_60cm_WGS84WM/ImageServer"
  }).addTo(map);

var overlay = L.tileLayer('https://lexhousingstudies.github.io/assets/ellerslie1907/{z}/{x}/{y}.png', {
      attribution: '<a href="http://libraries.uky.edu/" target="_blank">University of Kentucky Libraries</a>, <a href="http://mapwarper.net/" target="_blank">Map Warper</a>',
      opacity: 0.75,
      pane: 'sanborn',
      maxNativeZoom: 19,
      maxZoom: 19
    })
    .addTo(map);

document.onmousemove = function(e) {
    if (!start) return;
    // Adjust control.
    handle.style.top = Math.max(-5, Math.min(195, startTop + parseInt(e.clientY, 10) - start)) + 'px';
    // Adjust opacity.
    overlay.setOpacity(1 - (handle.offsetTop / 200));
};

handle.onmousedown = function(e) {
    // Record initial positions.
    start = parseInt(e.clientY, 10);
    startTop = handle.offsetTop - 5;
    return false;
};

document.onmouseup = function(e) {
    start = null;
};
