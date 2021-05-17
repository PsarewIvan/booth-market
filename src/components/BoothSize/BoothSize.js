import './BoothSize.scss';

const BoothSize = ({ size }) => {
  const [w, h, l] = size;

  return (
    <span className="booth-size">
      <span className="booth-size__title">{`Размер: `}</span>
      <span className="booth-size__text">{`${w ? `${w}м` : null}
                ${w && h ? 'x' : null}
                ${h ? `${h}м` : null}
                ${h && l ? 'x' : null}
                ${l ? `${l}м` : null}`}</span>
    </span>
  );
};

export default BoothSize;
