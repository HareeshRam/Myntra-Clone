import React from 'react'
import Styles from './profile.module.css'
import { Link } from 'react-router-dom'
import { MdKeyboardBackspace } from "react-icons/md";
const Profile = () => {
  return (
    <div>
      <section className={Styles.wish}>
            <article className={Styles.wishback}>
             <Link to="/"><h3><MdKeyboardBackspace className={Styles.backIcon}/></h3></Link>
              <h4 className={Styles.navName}>PROFILE</h4>
            </article>
         <main className={Styles.profileLogin}>
        <b>Welcome</b>
        <p>To access account and manage orders</p>
         <button className={Styles.logBtn}>LOGIN/SIGNUP</button>
         <hr />
         <ul type="none" className={Styles.jj}>
          <li>Orders</li>
          <li>Wishlist</li>
          <li>Gift Cards</li>
          <li>Contact Us</li>
          <li>Myntra Insider</li>
         </ul>
         <hr />
         <ul type="none" className={Styles.jj}>
          <li>Myntra Credit</li>
          <li>Coupons</li>
          <li>Saved Cards</li>
          <li>Saved VPA</li>
          <li>Saved Address</li>
         </ul>
         </main>
      </section>
    </div>
  )
}

export default Profile
