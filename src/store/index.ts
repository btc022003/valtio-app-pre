import { proxy } from 'valtio';
import { movie } from './features/movie';

/**
 * 定义数据
 */
const store = proxy<IStore>({
  count: 1,
  list: [],
  movie,
});

/**
 * 改变数据
 * @param step
 */
export const countPlus = (step: number) => {
  store.count += step;
};

/**
 * 新增数据到列表
 * @param txt
 */
export const addToList = (txt: string) => {
  store.list.push({
    id: Date.now(),
    txt,
  });
};

// export const loadMovieData = async () => {
//   const res = await fetch(
//     'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=2&data_type=1&mode=11&page_id=2&ret_num=48&session=ffad98ae609f650afe4b60e205948ac1&three_category_id=15;must'
//   ).then((data) => data.json());
//   store.movies = res.data.list;
// };

export default store;
