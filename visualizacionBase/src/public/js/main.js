const map=L.map('map-template').setView([-31.428366, -64.184616],13);

//L.tileLayer('https://tiles.wmflabs.org/osm-no-labels/{z}/{x}/{y}.png').addTo(map);

L.tileLayer('http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png http://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(map);
