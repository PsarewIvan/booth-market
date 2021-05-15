const months = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
];

const prettyDate = (date) => {
  const [y, m, d] = date.split('-');
  return `${d} ${months[Number(m) - 1]} ${y}`;
};

export { prettyDate };
