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

export function postUser(username, password) {
  const fetchedUserData = fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', {
    method: 'POST',
    headers: {
      'Content-TYpe': 'application/json'
    },
    body: JSON.stringify({
      'email': username,
      'password': password
    })
  })
  .then(response => response.json())
  console.log(fetchedUserData)
  return fetchedUserData
    // .catch(error => {
    // this.setState({error: 'Something went wrong, please check your information'})
}
// }
