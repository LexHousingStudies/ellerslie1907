// L.mapbox.accessToken = 'pk.eyJ1IjoibWFwdGFzdGlrIiwiYSI6IjNPMkREV1kifQ.2KGPFZD0QaGfvYzXYotTXQ';
var handle = document.getElementById('handle'),
    start = false,
    startTop;

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
