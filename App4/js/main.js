//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const month =document.querySelector('#Month').value
  const day =document.querySelector('#Day').value
  const yr = document.querySelector('#Year').value
  let holidays = `https://holidays.abstractapi.com/v1/?api_key=d03f4d07709c46788b44d0d132f11b3f&country=US&year=${yr}&month=${month}&day=${day}`

  fetch(holidays)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // document.querySelector('h3').innerText = data.explanation
        document.querySelector('h2').innerText = data.name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

