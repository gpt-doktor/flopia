var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5,
    zoomSnap: 0,
    zoomDelta: 0
});
var bounds = [[0,0], [2000,2000]];
var image = L.imageOverlay('map.png', bounds).addTo(map);
map.fitBounds(bounds);