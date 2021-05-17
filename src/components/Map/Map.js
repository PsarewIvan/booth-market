import map from './img/map.jpeg';
import './Map.scss';

const Map = () => {
  return (
    <div className="map">
      <img
        className="map__img"
        src={map}
        alt="Москва, пр. Егорьевский, д.2а, стр.10"
      />
    </div>
  );
};

export default Map;
