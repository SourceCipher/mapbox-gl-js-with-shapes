## THIS IS A FORKED BRANCH FROM THE ORIGINAL MAPBOX 

This branch will have everything what the mapbox has but extended to show some shapes within the markers like in the image below:

![image](https://user-images.githubusercontent.com/351018/214601445-6b905003-849b-4e60-b1d1-4fda58b5ab4b.png)

## USAGE

Just add the `shape` and `shapeColor` properties for each of your marker and you are ready to rock.

For example: 

```
{
    type: 'Feature',
    properties: {
      shape: 'triangle', 
      shapeColor: '#fff'
    },
    geometry: {
      type: 'Point',
      coordinates: []
}
```

Available shapes are: `circle`, `diamond`, `triangle`, `square`, `star`, `invTriangle`
