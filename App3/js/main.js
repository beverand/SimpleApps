
//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
const pups = document.querySelectorAll('div')

//console.log(pups)


  const choice = document.querySelector('input').value
  const cat = 'https://cat-fact.herokuapp.com/facts'
  let gameArray = []
  let gameQ = 0
  
  fetch(cat)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        const reg = '/cat|dog|Cat|Dog/g'
        for(let i = 0; i< data.length; i++){
          //document.querySelector('h2').innerText =(data[i].text.replace(/cat|dog|Cat|Dog/g, '___'))
          gameArray.push(data[i].text)
        }
        document.querySelector('h2').innerText =(data[0].text.replace(/cat|dog|Cat|Dog/g, '___'))
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
console.log(gameArray)
//document.querySelector('h2').innerText = gameArray[gameQ].replace(/cat|dog|Cat|Dog/g, '___')
document.querySelector('h2').innerText = gameArray[gameQ].replace('___', document.querySelector('input').value)

function getFetch(){
  document.querySelector('h2').innerText = gameArray[gameQ].replace('___', document.querySelector('input').value)
  if(gameArray[gameQ].replace('___', document.querySelector('input').value) == document.querySelector('h2').innerText){
    document.querySelector('h2').innerText =(gameArray[gameQ].text.replace(/cat|dog|Cat|Dog/g, '___'))
    document.querySelector('h2').innerText += " CORRECT answer is " + document.querySelector('input').value
  }
  else{
    document.querySelector('h2').innerText += " GUESS AGAIN " //+ document.querySelector('input').value
  }
}
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }