import React, { useEffect, useState } from 'react';
import Styles from './wishlist.module.css';
import { Link } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
const Wishlist = () => {
// --------------adding data to wishlist----------------
  const [userProd, setUserProd] = useState([]);
  const [ram,setRam]=useState(0)
  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlistItems');
    if (storedWishlist) {
      setUserProd(JSON.parse(storedWishlist));
      let res= userProd.reduce((sum,data)=>{
        return sum+=data.price
       },0)
       setRam(res)
    }
  }, [userProd]);
// ----------------Deleteing product from wishlist---------------
  const deleteProduct = (productId) => {
    const updatedUserProd = userProd.filter(item => item.id !== productId);
    setUserProd(updatedUserProd);
    localStorage.setItem('wishlistItems', JSON.stringify(updatedUserProd));
    
    let res = updatedUserProd.reduce((sum, data) => {
      return sum + data.price;
    }, 0);
    
    setRam(res);
  };
  

  return (
    <div>
      <section className={Styles.wish}>
        <article className={Styles.wishback}>
          <Link to="/">
            <h3>
              <MdKeyboardBackspace className={Styles.backIcon} />
            </h3>
          </Link>
          <h4 className={Styles.navName}>WISHLIST</h4>
        </article>
        {userProd.length > 0 ? (
          <div className={Styles.outer1}>
            {userProd.map((item) => (

              <div key={item.id} className={Styles.outer}>
               <img className={Styles.wishImage} src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <p>RS ₹{item.price}</p>
                 <button className={Styles.wishBtn} onClick={() => deleteProduct(item.id)} >Remove</button>
              </div>
            ))}
          </div>
        ) : (
          <p>User preferences not found.</p>
        )}
        <footer className={Styles.foot}>
          <div className={Styles.left}>
            <h3>Total Price</h3>
              <h1>₹{ram}</h1>
          </div>
          <div className={Styles.right}>
            <Link to="/buynow"><button className={Styles.wishBuy}>BUY NOW</button></Link>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Wishlist;
