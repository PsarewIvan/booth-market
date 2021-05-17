import bothImg1 from './img/booths/photo1.jpeg';
import bothImg2 from './img/booths/photo2.jpeg';
import bothImg3 from './img/booths/photo3.jpeg';
import bothImg4 from './img/booths/photo4.jpeg';
import bothImg5 from './img/booths/photo5.jpeg';

import newsImg1 from './img/news/news1.jpeg';
import newsImg2 from './img/news/news2.jpeg';
import newsImg3 from './img/news/news3.jpeg';
import newsImg4 from './img/news/news4.jpeg';
import newsImg5 from './img/news/news5.jpeg';

const booth = {
  name: 'Фотобудка с ширмой',
  photos: [bothImg1, bothImg2, bothImg3, bothImg4, bothImg5],
  cost: 1700000,
  size: [2, 1.5, 2],
  options: null,
};

const option = {
  name: 'Разработка макета рамки',
  photo: bothImg1,
  cost: 1750000,
};

const oneNews = {
  name: 'Фотобудки, GIF стойка',
  digest: 'У нас есть широчайший ассортимент фотобудок на все случаи жизни',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  category: 'Услуги',
  date: '2021-03-20',
  photos: [newsImg1, newsImg2, newsImg3, newsImg4, newsImg5],
};

const rentalTimes = [
  { id: 1, name: '1 час', value: 1 },
  { id: 2, name: '2 часа', value: 2 },
  { id: 3, name: '3 часа', value: 3 },
  { id: 4, name: '5 часов', value: 5 },
  { id: 5, name: 'выставка 2 дня', value: 48 },
  { id: 6, name: 'выставка 3 дня', value: 72 },
];

const youTubeVideoId = 'dpw9EHDh2bM';

const createMockArray = (mock, number, optional = false) => {
  const COST_INCREMENT = 10000;
  const result = [];

  for (let i = 0; i < number; i++) {
    const newObj = {
      ...mock,
      name: `${mock.name} #${i + 1}`,
      cost: mock.cost - 10000 + COST_INCREMENT * (i + 1),
      id: i + 1,
    };
    if (optional) {
      newObj.options = optional;
    }
    result.push(newObj);
  }
  return result;
};

const createBooths = (booth, option, number) => {
  const options = createMockArray(option, number);
  return createMockArray(booth, number, options);
};

const createMockNews = (mock, number) => {
  const news = [];
  for (let i = 0; i < number; i++) {
    news.push({ ...mock, id: i });
  }
  return news;
};

const booths = createBooths(booth, option, 20);
const news = createMockNews(oneNews, 20);

export { booths, rentalTimes, news, youTubeVideoId };
