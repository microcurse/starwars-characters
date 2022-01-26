const api_url = 'https://swapi.dev/api/people/1/'
async function getPerson() {
  const response  = await fetch(api_url);
  const data  = await response.json();
  // console.log(data);

}

console.log(getPerson());

