import { addToList } from '../../store';

function ListInput() {
  return (
    <input
      placeholder='请输入内容'
      onKeyUp={(e) => {
        if (e.keyCode === 13 && e.currentTarget.value) {
          addToList(e.currentTarget.value);
        }
      }}
    />
  );
}

export default ListInput;
