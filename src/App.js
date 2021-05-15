import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <div className="app__content">
        <Content />
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
