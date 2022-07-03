import React from 'react'
import horse from '../img/horse.png'
export default function Home() {
  return (
     <section  className="main">
      <img src="https://i0.wp.com/nouvil.net/wp-content/uploads/2022/01/stars1.png?ssl=1" id='stars'/>
      <img src="https://i0.wp.com/nouvil.net/wp-content/uploads/2022/01/moon2.png?ssl=1" id='moon'/>
      <img src="https://i0.wp.com/nouvil.net/wp-content/uploads/2022/01/mountains3.png?ssl=1" id='mountains1'/>
      <img src="https://i2.wp.com/nouvil.net/wp-content/uploads/2022/01/mountains4.png?ssl=1" id='mountains2'/>
      <img src="https://i1.wp.com/nouvil.net/wp-content/uploads/2022/01/river5.png?ssl=1" id='river'/>
      <img src={horse} id='hores'/>
      <img src="https://i0.wp.com/nouvil.net/wp-content/uploads/2022/01/mountains7.png?ssl=1" id='mountains3'/>
     </section >

  )
}
/* let stars=document.getElementById("stars")
let moon=document.getElementById("moon")
let mountains1=document.getElementById("mountains1")
let mountains2=document.getElementById("mountains2")
let river=document.getElementById("river")
let hores=document.getElementById("hores")
 window.addEventListener('scroll', (event) => {
    stars.style.left=800+'px';
    hores.style.width="100%";

}); 
 */