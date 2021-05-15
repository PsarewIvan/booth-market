import SortingSelect from './../SortingSelect/SortingSelect';
import Booth from './../Booth/Booth';
import './Booths.scss';

const Booths = ({ booths, rentalTimes, showOrder }) => {
  return (
    <section className="booths">
      <h2 className="booth__title">Фотобудки</h2>
      <div className="booths__sorting">
        <SortingSelect />
      </div>
      {booths.length !== 0 && (
        <ul className="booths__list">
          {booths.map((item) => (
            <Booth
              key={item.id}
              rentalTimes={rentalTimes}
              showOrder={showOrder}
              {...item}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Booths;
