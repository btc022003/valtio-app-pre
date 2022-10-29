import { useSnapshot } from 'valtio';
import store from '../store';

function ShowCounter() {
  const { count } = useSnapshot(store);
  return (
    <div className='show-counter'>
      <h3>此处展示数据:{count}</h3>
    </div>
  );
}

export default ShowCounter;
