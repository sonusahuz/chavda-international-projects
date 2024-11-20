import Carousel from './Carousel';
import CategoryCard from './CategoryCard';

const Home = () => {
  return (
    <div>
      <Carousel />
      <CategoryCard category="phone" />
      <CategoryCard category="Watch" />
      <CategoryCard category="Fashion" />
    </div>
  );
};

export default Home;
