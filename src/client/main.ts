import Map from 'ol/Map'
import MapboxVectorLayer  from 'ol/layer/MapboxVector'
import View from 'ol/View'
import { fromLonLat } from 'ol/proj'

const map = new Map({
  target: 'map',
  layers: [
    new MapboxVectorLayer({
      styleUrl: 'https://api.maptiler.com/maps/bright/style.json?key=lirfd6Fegsjkvs0lshxe'
    })
  ],
  view: new View({
    center: fromLonLat([-118.805, 34.027]),
    zoom: 12
  })
})
