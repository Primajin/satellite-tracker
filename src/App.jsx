import { Viewer, GeoJsonDataSource, Entity, PointGraphics, EntityDescription } from "resium";
import { Cartesian3, Ion } from "cesium";

Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_TOKEN;

const position = Cartesian3.fromDegrees(139.774444, 35.683889, 100);

const data = {
  type: "Feature",
  properties: {
    name: "Coors Field",
    amenity: "Baseball Stadium",
    popupContent: "This is where the Rockies play!",
  },
  geometry: {
    type: "Point",
    coordinates: [-104.99404, 39.75621],
  },
};

function App() {
  return (
    <Viewer full>
      <Entity position={position} name="Tokyo">
        <PointGraphics pixelSize={10} />
        <EntityDescription>
          <h1>Hello, world.</h1>
          <p>JSX is available here!</p>
        </EntityDescription>
      </Entity>
      <GeoJsonDataSource data={data} />
    </Viewer>
  );
}

export default App;
