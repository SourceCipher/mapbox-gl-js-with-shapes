## THIS IS A FORKED BRANCH FROM THE ORIGINAL MAPBOX 

This branch will have everything what the mapbox has but extended to show some shapes within the markers like in the image below:

![image](https://github.com/SourceCipher/mapbox-gl-js-with-shapes/assets/351018/cf76a992-4973-4cee-ab2a-8ad37699b2c2)


## USAGE

Just add the `shape` and `shapeColor` properties for each of your marker and you are ready to rock.

For example: 

```
{
  type: 'Feature',
  properties: {
    shape: 'triangle', 
    shapeColor: '#fff',
    color: '#ddd' // Color of the circle
  },
  geometry: {
    type: 'Point',
    coordinates: []
}
```

Available shapes are: `circle`, `diamond`, `triangle`, `square`, `star`, `invTriangle`

Also important that the color of the circle is read from the properties like this (otherwise the shapes will not work):

```
map.addLayer({
  id: "layerId",
  type: "circle",
  source: "layerSource",
  paint: {
      'circle-color': ['get', 'color']
  },
});
```