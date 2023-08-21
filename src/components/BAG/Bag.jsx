import React from 'react'
import Styles from './bag.module.css'
import { Link } from 'react-router-dom'
import { MdKeyboardBackspace } from "react-icons/md";
const Bag = () => {
  return (
    <div>
        <section className={Styles.wish}>
            <article className={Styles.wishback}>
             <Link to="/"><h3><MdKeyboardBackspace className={Styles.backIcon}/></h3></Link>
              <h4 className={Styles.navName}>SHOPPING BAG</h4>
            </article>
           <nav className={Styles.BagNav}>
            <p className={Styles.A}>BAG</p>
            <p>-------</p>
            <p className={Styles.B}>ADDRESS</p>
            <p>-------</p>
            <p className={Styles.B}>PAYMENT</p>
           </nav>
           <div className={Styles.bagImage}>
           <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" alt="" />
           </div>
           <div className={Styles.bagBtn}>
           <b>Hey,it feels so light</b>
            <p>There is nothing in your bag.Lets add some items</p>
            <button className={Styles.bagBtn1}>ADD ITEMS FROM WISHLIST</button>
           </div>
      </section>
    
    </div>
  )
}

export default Bag
