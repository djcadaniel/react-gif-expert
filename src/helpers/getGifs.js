export const getGifs = async(category)=>{
  const url = `https://api.giphy.com/v1/gifs/search?api_key=M0E4Z5JY0gQL3NVQgkQ9y3Qw4btilhvQ&q=${category}&limit=20`;
  const resp = await fetch(url);
  const {data} =  await resp.json();
  // console.log(data)
  
  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  // console.log(gifs);
  return gifs;
}