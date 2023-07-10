import Header from '../components/Header';
import '../styles.css';
import TodosLogic from '../components/TodosLogic';

const Home = () => (
  <>
    <div className="todos">
      <Header />
      <TodosLogic />
    </div>
  </>
);

export default Home;
