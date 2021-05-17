import SortingSelect from './../SortingSelect/SortingSelect';
import Booth from './../Booth/Booth';
import './Booths.scss';

const Booths = ({
  sortedBooths,
  rentalTimes,
  showOrder,
  descendingBoothsSort,
  ascendingBoothsSort,
  defaultBoothSort,
}) => {
  return (
    <section className="booths">
      <h2 className="booths__title">Фотобудки</h2>
      <div className="booths__sorting">
        <p className="booths__sort-text">Сортировка:</p>
        <SortingSelect
          descendingBoothsSort={descendingBoothsSort}
          ascendingBoothsSort={ascendingBoothsSort}
          setDefault={defaultBoothSort}
        />
      </div>
      {sortedBooths.length !== 0 && (
        <ul className="booths__list">
          {sortedBooths.map((item) => (
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
