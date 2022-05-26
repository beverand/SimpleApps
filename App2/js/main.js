
document.querySelector('input').addEventListener('click', getFetch)
//const imgDivs = document.querySelectorAll('cards')
const cardLoc = 'https://www.free-tarot-reading.net/img/cards/rider-waite/'
const phases = ['Past', 'Present', 'Future']

class Tarot{
  constructor(num, cards= false, cardImages=false) {  // Constructor
    this.cardCount = Number(num);
    let cardArray = !cards? `https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=${this.cardCount}`: cards//3'
    this.cardLoc = !cardImages? 'https://www.free-tarot-reading.net/img/cards/rider-waite/': cardImages
    this.rev = Array.from({length: this.cardCount}, () => Math.floor(Math.random() * 2));
    this.reading = this.setCards(cardArray)
    console.log(`card count is ${this.cardCount}`)
    this.showTarot(this.reading)
  }

  getRev(){
    return this.rev
  }

  getCardArray(){
    //console.log(this.cards, this.meaning)
    return this.reading
  }

  setCards(cardArray){
    let n = Array(this.cardCount)
    fetch(cardArray)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            for(let i = 0; i < data.cards.length; i++){
              n[i] =  
                {card: data.cards[i].name,
                meaning: this.rev[i] == 1? data.cards[i].meaning_rev: data.cards[i].meaning_up,
                rev: this.rev[i],
                img: this.cardImage(data.cards[i].name)
                };
              };
           return n
          })
        .catch(err => {
            console.log(`error ${err}`)
        });
    console.log('n is: ')
    console.log(n)
 
  }

  cardImage(nameStr){
    if(nameStr == 'Fortitude'){
      nameStr = 'Strength'
    }
    if(nameStr == 'The Last Judgment'){
      nameStr = 'Judgement'
    } 
    return nameStr.toLowerCase().split(' ').join('-') + '.jpg'
  }

  showTarot(r){
    let tarotTable = document.getElementById('cards')//document.querySelector('.cards')
    console.log(Array.isArray(r))
    //console.log(`r len is ${r.length}`);
    console.log(this.getCardArray())
    // for(n of r){
    //   console.log(r[n])
    // };
    // for(let i = 0; i < this.cardCount - 1; i++){
    //   for(let key in r[i]){
    //     console.log(`${key}: ${n[key]}`);
    //   }
    // };
    // r.forEach(n =>{
    //   for(let key in n){
    //        console.log(`${key}: ${n[key]}`);
    //   }
    //    console.log(n)
    //   // var image = document.createElement('img');//new Image();
    //   // image.src = this.cardLoc + n.img;
    //   // tarotTable.appendChild(image); 
    //   // console.log(image.src)
    //   // if(n.rev){
    //   //   tarotTable.appendChild(image).style.transform = "rotate(180deg)";
    //   // }
    // });
  }
}

 function getFetch(){
    let reading = new Tarot(document.querySelector(".readings").value)
    
 }
//   // const choice = document.querySelector('input').value
//   const cardArray = 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3'
//   fetch(cardArray)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         //document.querySelector('.cards').reset()
//         document.querySelector('h3').innerText = ''
//         const rev =[Math.floor(Math.random()*2),Math.floor(Math.random()*2),Math.floor(Math.random()*2)]
//         for(let i = 0; i < data.cards.length; i++){
//           //if( imageExists(cardLoc + cardImage(data.cards[i].name)) == '404'){
//             let meaning = ''
//            // console.log(data.cards[i].name, cardImage(data.cards[i].name)) 
//             var image = new Image();
//             image.src = cardLoc + cardImage(data.cards[i].name);
//             document.querySelector('.cards').appendChild(image); 
//             if(rev[i] == 1){
//              document.querySelector('.cards').appendChild(image).style.transform = "rotate(180deg)";
//               meaning = data.cards[i].meaning_rev
//             } else {
//               meaning = data.cards[i].meaning_up
//             }
//             document.querySelector('h3').innerText += `${phases[i]}:  ${data.cards[i].name}  ${rev[i]==1?' - Reversed ': ''}\n 
//             ${meaning} \n\n`
//          }
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }


// function cardImage(nameStr){
//   if(nameStr == 'Fortitude'){
//     nameStr = 'Strength'
//   }
//   if(nameStr == 'The Last Judgment'){
//     nameStr = 'Judgement'
//   } 
//   return nameStr.toLowerCase().split(' ').join('-') + '.jpg'
// }


