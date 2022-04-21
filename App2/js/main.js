//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
const imgDivs = document.querySelectorAll('div')
const cardLoc = 'https://www.free-tarot-reading.net/img/cards/rider-waite/'

//console.log(pups)

function getFetch(){
  // const choice = document.querySelector('input').value
  const cardArray = 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3'
  let gameArray = []
  
  fetch(cardArray)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        for(let i = 0; i< data.cards.length; i++){
          console.log(cardImage(data.cards[i].name))      
        //   //console.log(data[i].text.replace(/cat|dog|Cat|Dog/g, '___'))
        //   //gameArray.push(data[i].text)
         }
        console.log(data)
         document.querySelector('.past').src = cardLoc + cardImage(data.cards[0].name)
         document.querySelector('.present').src = cardLoc + cardImage(data.cards[1].name)
         document.querySelector('.future').src = cardLoc + cardImage(data.cards[2].name)
         document.querySelector('.past').alt = data.cards[0].name
         document.querySelector('.present').alt = data.cards[1].name
         document.querySelector('.future').alt = data.cards[2].name
         document.querySelector('h3').innerText = 'Past: ' + data.cards[0].name + '\n' 
           + data.cards[0].meaning_up + '\n\n' + 'Present: ' +data.cards[1].name + '\n' 
           + data.cards[1].meaning_up + '\n\n' + 'Future: ' + data.cards[2].name + '\n' 
           + data.cards[2].meaning_up + '\n\n' 
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}


function cardImage(nameStr){
  if(nameStr == 'Fortitude'){
    nameStr = 'Justice'
  }
    
  return nameStr.toLowerCase().split(' ').join('-') + '.jpg'
}