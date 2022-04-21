//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const dog ='https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all'
  const cat ='https://cat-fact.herokuapp.com'
  const aak = 'https://api.aakhilv.me'
  const nasa = 'https://api.nasa.gov/planetary/apod?api_key=TyzcarkaFQlqUReiboPwkPQEokn5Vw2KG0yPyefJ&date='+ choice
  fetch(nasa)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if( data.media_type ==='image'){
           document.querySelector('img').src = data.url
        }
        else{
           document.querySelector('iframe').src = data.hdurl
        }
        document.querySelector('h3').innerText = data.explanation
        document.querySelector('h2').innerText = data.title
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}