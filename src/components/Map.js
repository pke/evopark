import React, { PropTypes, Component } from "react"
import shallowEqual from 'react-pure-render/shallowEqual'
import ol from "openlayers"

function createParkPinStyle(name) {
  return new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
      anchor: [0.5, 32],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      scale: 0.5,
      opacity: 0.8,
      src: 'img/pin-parking-' + name + '.png'
    }))
  })
}

var parkPinStyles = {
  "active": createParkPinStyle("active"),
  "inactive": createParkPinStyle("gray")
}

export default class Map extends Component {
  constructor() {
    super()
    this.state = { mapIsInitialized: false }
  }

  componentDidMount() {
    /*var item = this.props.items[0]
    var vectorSource = new ol.source.Vector({
      features: this.props.items.map((item, index) => {
        var feature = new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.fromLonLat([item.coordinates.longitude,item.coordinates.latitude])),
          name: item.name,
          index: index,
          item: item
        })
        feature.setStyle(parkPinStyles[item.status] || parkPinStyles["inactive"])
        return feature
      })
    })
    //add the feature vector to the layer vector, and apply a style to whole layer
    var vectorLayer = new ol.layer.Vector({
      source: vectorSource
    })*/
    this.map = new ol.Map({
      view: new ol.View({
        center: ol.proj.fromLonLat([6.7666667, 51.2166667]),
        zoom: 16
      }),
      controls: [],
      logo: false,
      layers: [
        new ol.layer.Tile({
          source: new ol.source.BingMaps({
            culture: "de-de",
            key: 'GjfgWjoh8p4q7S6x6SX5~rWy3U8atJqBYpcX5A8dliQ~AglOQY9CckS3fwSZff_AgKJeY7WUDiME68fXIxcYQH20k2XJlxof3J7SoIfVARdM',
            imagerySet: "Road"
          })
        })/*,
        vectorLayer*/
      ],
      target: this.refs.map
    })
    this.setState({ mapIsInitialized: true })
    //this.setupMapEventListener();
  }

  componentWillUnmount() {
    this.teardownMapEventListener()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(nextProps.items, this.props.items) || !shallowEqual(nextState, this.state)
  }

  componentWillUpdate(nextProps) {
    //this.props.onVisibleItemsChange(nextProps.items.map(item => item.id))
  }

  setupMapEventListener() {
    this.listener = this.map.addListener('idle', () => {
      const itemsInView = this.props.items
        .filter(item => this.itemIsInView(item))
        .map(item => item.id);

      this.props.onVisibleItemsChange(itemsInView);
    });
  }

  teardownMapEventListener() {
    //window.google.maps.event.removeListener(this.listener);
  }

  itemIsInView(item) {
    return this.map.getBounds().contains(
      new window.google.maps.LatLng(item.coordinates.latitude, item.coordinates.longitude)
    );
  }

  fitMapBounds() {
    const bounds = new window.google.maps.LatLngBounds();

    this.props.items.forEach(item => {
      bounds.extend(new window.google.maps.LatLng(item.coordinates.latitude, item.coordinates.longitude));
    });

    this.map.fitBounds(bounds);
  }

  renderMarkers() {
    return this.props.items.map(item => (
      <MapMarker key={item.id} coordinates={item.coordinates} map={this.map}/>
    ));
  }

  render() {
    let markers;

    if (this.state.mapIsInitialized) {
      markers = this.renderMarkers();
      //this.fitMapBounds();
    }

    return (
      <div ref="map" style={{height:"100%"}}>
        {markers}
      </div>
    );
  }
}

Map.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    coordinates: PropTypes.shape({
      longitude: PropTypes.number.isRequired,
      latitude: PropTypes.number.isRequired
    })
  })),
  onVisibleItemsChange: PropTypes.func
}
