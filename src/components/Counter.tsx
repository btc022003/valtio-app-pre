import { useSnapshot } from 'valtio';
import store, { countPlus } from '../store';

function Counter() {
  const { count } = useSnapshot(store);
  return (
    <div>
      <h1>计数器--{count}</h1>
      <button
        onClick={() => {
          countPlus(2);
        }}
      >
        改变
      </button>
    </div>
  );
}

export default Counter;
