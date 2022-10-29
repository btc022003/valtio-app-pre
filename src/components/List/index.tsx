import { useSnapshot } from 'valtio';
import store from '../../store';
import ListInput from './list-input';

function List() {
  const { list } = useSnapshot(store);
  return (
    <>
      <ListInput />
      {list.map((item) => (
        <p key={item.id}>{item.txt}</p>
      ))}
    </>
  );
}

export default List;
