import Fai from './Images/Faiz-Pic.jpeg'
import Sam from './Images/Sam.jpeg'
import Sophi from './Images/Sophi.jpeg'
import Sonia from './Images/Sonia.jpeg'

// async function p() {
//   let d = await fetch('https://api.imgflip.com/get_memes')
//   let dd = await d.json()
//   let ddd = dd.data.memes
//   console.log(ddd, 'd')
// }
// p()

const data = [
  {
    id: 1,
    name: 'Faiz',
    age: 3,
    image: Fai,
  },
  {
    id: 2,
    name: 'Sam',
    age: 4,
    image: Sam,
  },
  {
    id: 3,
    name: 'Sophi',
    age: 5,
    image: Sophi,
  },
  {
    id: 4,
    name: 'Sonia',
    age: 3,
    image: Sonia,
  },
]
export default data
