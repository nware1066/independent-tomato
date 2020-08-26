// fetch function for AllMovies
// json
// return result
// export function
// fetch("https://opentdb.com/api.php?amount=1&category=27&type=multiple")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => /* do something else */);

export const getAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(response => response.json())
}
