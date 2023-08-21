import React from 'react'
import Styles from './buynow.module.css'
import { Link } from 'react-router-dom'
import { MdKeyboardBackspace } from "react-icons/md";
const Bynow = () => {
  return (
    <div>
      <section className={Styles.wish}>
            <article className={Styles.wishback}>
             <Link to="/"><h3><MdKeyboardBackspace className={Styles.backIcon}/></h3></Link>
              <h4 className={Styles.navName}>PAYMENT</h4>
            </article>
             <main className={Styles.paymentInfo}>
                <h3>Payment method</h3>
                <input className={Styles.ram} type="text" placeholder='Card holder Name' />
                 <div>
                 <input className={Styles.input1} type="text" placeholder='Card Number' />
                 <input className={Styles.input2} type="date" />
                 <input className={Styles.input3}  type="text" placeholder='CVV' />
                 </div>
                         
                <h3>Customer information</h3>
                <div>
                <label htmlFor="">E-mail<sup>*</sup></label><br />
                 <input className={Styles.ram}  type="email" placeholder='Enter your email'  />
                </div>
                 <h3>Billing address</h3>
                 <div className={Styles.billForm}>
                    <div className={Styles.inp1}>
                        <label htmlFor="">First name <sup>*</sup></label><br />
                        <input className={Styles.input1} type="text" placeholder='FirstName'/>
                    </div>
                    <div className={Styles.inp1}>
                        <label htmlFor="">Last name <sup>*</sup></label><br />
                        <input className={Styles.input1} type="text" placeholder='LastName' />
                    </div>
                    <div className={Styles.inp1}>
                        <label htmlFor="">Address <sup>*</sup></label><br />
                        <input className={Styles.input1}  type="text" placeholder='Enter your address'/>
                    </div>
                    <div className={Styles.inp1}>
                        <label htmlFor="">City <sup>*</sup></label><br />
                        <input className={Styles.input1}  type="text" placeholder='city' />
                    </div>
                    <div className={Styles.inp1}>
                        <label htmlFor="">Zip code <sup>*</sup></label><br />
                        <input className={Styles.input1}  type="text" placeholder='Enter your pincode' />
                    </div>
                    <div className={Styles.inp1}>
                        <label htmlFor="">Country<sup>*</sup></label><br />
                        <input className={Styles.input1}  type="text" placeholder='enter your country name' />
                    </div>
                 </div>
                 <div>
                    <input type="checkbox" /> <label htmlFor="">Billing address is the same as shipping address</label><br />
                    <input type="checkbox" /><label htmlFor=""> I accept the <a href=""></a>Terms & Conditions&Privacy Policy</label>
                 </div>
                 <div>
                    <button className={Styles.ramu}  >Pay Now</button>
                 </div>
                 <a href="">Back</a>
             </main>
      </section>
    </div>
  )
}

export default Bynow
