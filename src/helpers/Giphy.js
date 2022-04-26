export const getGifs = async (cat, searchLimit=10) => {
  if(cat && cat.length > 0) {
    const api_key = "6Vo9oudZiw2OOS2rRHRhTOknC7gTGFX8";
    const limit   = searchLimit;
    const url     = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=${limit}&q=${encodeURI(cat)}`;
    const stream  = await fetch(url);
    const res     = await stream.json();

    return {
      gifs: res.data.map(item => {
        return {
          id:     item.id,
          title:  item.title,
          url:    item.images.downsized_medium.url
        }
      }),
      count: res.pagination.count,
      totalCount: res.pagination.total_count
    };
  };
}