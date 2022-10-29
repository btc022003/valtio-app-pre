import { proxy } from 'valtio';
// 进行分割
export const movie = proxy({
  movies: [],
});

export const loadMovieData = async () => {
  const res = await fetch(
    'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=2&data_type=1&mode=11&page_id=2&ret_num=48&session=ffad98ae609f650afe4b60e205948ac1&three_category_id=15;must'
  ).then((data) => data.json());
  movie.movies = res.data.list;
};
