const map=L.map('map-template').setView([-31.428366, -64.184616],13);

//L.tileLayer('https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png').addTo(map);

L.tileLayer('http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png http://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(map);

// OPCION B L.tileLayer('http://a.tile.stamen.com/toner/{z}/{x}/{y}.png').addTo(map);
map.locate({enableHighAccuracy:true});
map.on('locationfound', e =>{
  const coords = [e.latlng.lat, e.latlng.lng];
  const marker = L.marker(coords);
  marker.bindPopup('Técnico');

  map.addLayer(marker);
});

const marker = L.marker([-31.428366, -64.184616]);
marker.bindPopup('Técnico');

map.addLayer(marker);
