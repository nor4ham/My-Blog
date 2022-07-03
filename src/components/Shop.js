import React, { Component } from 'react'

export class Shop extends Component {
  render() {
    const items =this.props.item;
    const theItem=items.map(item=>{
        return (
            <article>
            <img src={item.itemImage} alt=""/>
            <div class="text">
             <h3>{item.itemName}</h3>
             <p>{item.itemPrice}</p>
             <button>more</button>
            </div>
           </article>
        )
    })
    return (
      <>
      <section  className="content">
       <main class="grid">
        {theItem}
       </main>
      </section>
      </>
    )
  }
}

export default Shop