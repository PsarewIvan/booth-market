const SortingSelect = ({
  descendingBoothsSort,
  ascendingBoothsSort,
  setDefault,
}) => {
  const DEFAULT = 'default';
  const ASCENDING = 'ascending';
  const DESCENDING = 'descending';

  const handleSelectChange = (evt) => {
    if (evt.target.value === DEFAULT) {
      setDefault();
    }
    if (evt.target.value === ASCENDING) {
      ascendingBoothsSort();
    }
    if (evt.target.value === DESCENDING) {
      descendingBoothsSort();
    }
  };

  return (
    <div className="sorting-select">
      <select onChange={handleSelectChange}>
        <option value={DEFAULT} checked>
          По умолчанию
        </option>
        <option value={ASCENDING}>Цена: по возрастанию</option>
        <option value={DESCENDING}>Цена: по убыванию</option>
      </select>
    </div>
  );
};

export default SortingSelect;
