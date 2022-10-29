import Counter from './components/Counter';
import List from './components/List';
import Movies from './components/Movies';
import ShowCounter from './components/ShowCounter';

function App() {
  return (
    <div className='App'>
      <h1>这是一个react项目</h1>
      <ShowCounter />
      <Counter />
      <List />
      <Movies />
    </div>
  );
}

export default App;
