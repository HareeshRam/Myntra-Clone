import React, { useEffect, useState } from 'react'
import Styles from './home.module.css'
import product from '../../Backend/products.json'
import { Link } from 'react-router-dom'
import Wishlist from '../WISHLIST/Wishlist'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  let [products, setProducts] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  let [itemData, setItemData] = useState([]);

  useEffect(() => {
    setProducts(product)
  }, [])
  const clickme = () => {

  }


  // const wishlistPage = (item) => {
  //   console.log(item,"hi")
  //   setItemData(item.id)

  //   setWishlistItems((prevItems) => [...prevItems, item.id]);
  // //  localStorage.setItem("added",item.id)

  // }



  


  const wishlistPage = (item) => {
//     const updatedWishlist = [...wishlistItems, item];
//     setWishlistItems(updatedWishlist);
// toast.success(`${item.title} ${"Added to wishlist"}`)
//     localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));


const existingWishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];
  const updatedWishlist = [...existingWishlist, item];
  setWishlistItems(updatedWishlist);
  localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));

  toast.success(`${item.title} ${"Added to wishlist"}`)
  };

  return (
    <div>
      <section id={Styles.nav}>
        <article id={Styles.article1}>
          <div id={Styles.myntraLogo}>
            <img className={Styles.logo1} src="data:image/png;base64,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" alt="" />
          </div>
          <div id={Styles.NavList}>
            <div id={Styles.InnerNav}>
              <div class={Styles.A}>
                <p class={Styles.p1}>MEN</p>
                <div id={Styles.MenBox}>
                  <div id={Styles.MenBoxInner}>
                    <div id={Styles.Men1}>
                      <h4 id={Styles.Mainhead}>Topwear</h4>
                      <ul>
                        <li>T-Shirts</li>
                        <li>Casual-Shirts</li>
                        <li>Formal Shirts</li>
                        <li>Sweat-Shirts</li>
                        <li>Sweaters</li>
                        <li>Jackets</li>
                        <li>Blazer&Coats</li>
                        <li>Suits</li>
                        <li>Rain Jackets</li>
                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Indian & Festive Wear</h4>
                      <ul>
                        <li>Kurtas & Kurta Sets</li>
                        <li>Sherwanis</li>
                        <li>Nehru Jackets</li>
                        <li>Dhotis</li>
                        <li>Sweaters</li>
                        <li>Jackets</li>
                      </ul>
                    </div>
                    <div id={Styles.Men1}>
                      <h4 id={Styles.Mainhead}>Bottomwear</h4>
                      <ul>
                        <li>Jeans</li>
                        <li>Casuals</li>
                        <li>Formals</li>
                        <li>Shorts</li>
                        <li>Track Pants</li>
                        <li>Joggers</li>
                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Innerwear&Sleepwear</h4>
                      <ul>
                        <li>Truncs</li>
                        <li>Boxers</li>
                        <li>Vests</li>
                        <li>sleepwear</li>
                        <li>Thermals</li>
                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Plus Size</h4>
                    </div>
                    <div id={Styles.Men1}>
                      <h4 id={Styles.Mainhead}>Footwear</h4>
                      <ul>
                        <li>Casual Shoes</li>
                        <li>Sports Shoes</li>
                        <li>Formal Shoes</li>
                        <li>Sneakers</li>
                        <li>Sandals</li>
                        <li>Flip Flops</li>
                        <li>Socks</li>
                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Personal Care&Grooming</h4>
                      <h4 id={Styles.Mainhead}>Sunglasses & Frames</h4>
                      <h4 id={Styles.Mainhead}>Watches</h4>
                    </div>
                    <div id={Styles.Men1}>
                      <h4 id={Styles.Mainhead}>Sports & Active wear</h4>
                      <ul>
                        <li>Sports Shoes</li>
                        <li>Sports Sandals</li>
                        <li>Active T-shirts</li>
                        <li>Sweat-Shirts</li>
                        <li>Shorts</li>
                        <li>SweatShirts</li>
                        <li>Sports Accessories</li>
                        <li>Swimmers</li>
                        <li>Suit Jackets</li>
                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Gadgets</h4>
                      <ul>
                        <li>Smart Wearables</li>
                        <li>Fitness Gadgets</li>
                        <li>HeadPhones</li>
                        <li>Speakers</li>
                      </ul>
                    </div>
                    <div id={Styles.Men1}>
                      <h4 id={Styles.Mainhead}>Fashion Accossories</h4>
                      <ul>
                        <li>Wallets</li>
                        <li>Belts</li>
                        <li>Perfumes</li>
                        <li>Trimmers</li>
                        <li>Deodrants</li>
                        <li>Ties</li>
                        <li>Caps&Hats</li>
                        <li>Phone Cases</li>
                        <li>Gifts</li>
                        <li>Mufflers & Wristwear</li>
                        <li>Helmets</li>

                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Bags & Backpackets</h4>
                      <h4 id={Styles.Mainhead}>Luggages & Trolleys</h4>

                    </div>
                  </div>
                </div>
              </div>
              <div class={Styles.B}>
                <p class={Styles.p1}>WOMEN</p>
                <div id={Styles.WomenBox}>
                  <div id={Styles.WomenBoxInner}>
                    <div id={Styles.Women1}>
                      <h4 id={Styles.Mainhead}>Indian & Fusion Wear</h4>
                      <ul>
                        <li>Kurtas & Suits</li>
                        <li>Kurtis</li>
                        <li>Sarees</li>
                        <li>Ethnic Wear</li>
                        <li>Leggings</li>
                        <li>Skirts</li>
                        <li>Dress Materials</li>
                        <li>Cholis</li>
                        <li>Dupattas</li>
                        <li>Jackets</li>

                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Belts,Scarves & More</h4>
                      <h4 id={Styles.Mainhead}>Warches & Wearables</h4>
                    </div>
                    <div id={Styles.Women1}>
                      <h4 id={Styles.Mainhead}>Western Wear</h4>
                      <ul>
                        <li>Dresses</li>
                        <li>Tops</li>
                        <li>T-Shirts</li>
                        <li>Jeans</li>
                        <li>Trousers& Capris</li>
                        <li>Shorts & Skirts</li>
                        <li>JumpSuits</li>
                        <li>Play Suits</li>
                        <li>Shrugs</li>
                        <li>Sweaters</li>
                        <li>Jackets & Coats</li>
                        <li>Blazers</li>
                        <li>Co-ords</li>
                        <li>Trousers</li>
                        <li>Lehngars</li>

                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Plus Size</h4>
                    </div>
                    <div id={Styles.Women1}>
                      <h4 id={Styles.Mainhead}>Maternity</h4>
                      <h4 id={Styles.Mainhead}>Sunglasses & Frames</h4>
                      <h4 id={Styles.Mainhead}>Footwear</h4>
                      <ul>
                        <li>Flats</li>
                        <li>Casual Shoes</li>
                        <li>Heels</li>
                        <li>Boots</li>
                        <li>Sport Shoes & Floats</li>
                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Sport & Active Wear</h4>
                      <ul>
                        <li>Clothing</li>
                        <li>Footwear</li>
                        <li>Sports Accessorie</li>
                        <li>Sports Equipment</li>
                      </ul>
                    </div>
                    <div id={Styles.Women1}>
                      <h4 id={Styles.Mainhead}>Lingerie & Sleepwear</h4>
                      <ul>
                        <li>Bra</li>
                        <li>Briefs</li>
                        <li>Shapewear</li>
                        <li>Sleepwear & Loungewear</li>
                        <li>Swimmers</li>
                        <li>Thermals</li>
                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Beauty & Personal Care</h4>
                      <ul>
                        <li>Makeup</li>
                        <li>Skincare</li>
                        <li>Premium Beauty</li>
                        <li>Lipstick</li>
                        <li>Fragrances</li>
                      </ul>

                    </div>
                    <div id={Styles.Women1}>
                      <h4 id={Styles.Mainhead}>Gadgets</h4>
                      <ul>
                        <li>smart Wearables</li>
                        <li>Fitness</li>
                        <li>Headphones</li>
                        <li>Speakers</li>
                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Jewellery</h4>
                      <ul>
                        <li>Fashion Jewellery</li>
                        <li>Fine Jewellery</li>
                        <li>Earnings</li>
                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Backpacks</h4>
                      <h4 id={Styles.Mainhead}>Handbags,Bags,Wallets</h4>
                      <h4 id={Styles.Mainhead}>Luggauges&Trolleys</h4>

                    </div>

                  </div>
                </div>
              </div>
              <div class={Styles.C}>
                <p class={Styles.p1}>KIDS</p>
                <div id={Styles.KidsBox}>
                  <div id={Styles.KidsBoxInner}>
                    <div id={Styles.Kids1}>
                      <h4 id={Styles.Mainhead}>Boys Clothing</h4>
                      <ul>
                        <li>T-shirts</li>
                        <li>Shirts</li>
                        <li>Shorts</li>
                        <li>Jeans</li>
                        <li>Trousers</li>
                        <li>Clothing Sets</li>
                        <li>Ethnic Wear</li>
                        <li>Track Pants</li>
                        <li>jackets</li>
                        <li>Party Wear</li>
                        <li>Innerwear</li>
                        <li>Nightwear</li>
                        <li>Value Packs</li>
                      </ul>
                    </div>
                    <div id={Styles.Kids1}>
                      <h4 id={Styles.Mainhead}>Girls Clothing</h4>
                      <ul>
                        <li>Dresses</li>
                        <li>Tops</li>
                        <li>Tshirts</li>
                        <li>Clothing Set</li>
                        <li>Lehenga Choli</li>
                        <li>Kurta sets</li>
                        <li>Party wear</li>
                        <li>Dungarees</li>
                        <li>skirts</li>
                        <li>Leggings</li>
                        <li>Jeans,Trousers</li>
                        <li>Innerwears</li>
                        <li>Nightwears</li>
                        <li>Lounhwears</li>
                        <li>value packs</li>
                        <li>Jumpsuits</li>
                        <li>shots</li>
                      </ul>
                    </div>
                    <div id={Styles.Kids1}>
                      <h4 id={Styles.Mainhead}>Footwear</h4>
                      <ul>
                        <li>Casual Shoes</li>
                        <li>Flipflops</li>
                        <li>Sport Shoes</li>
                        <li>Flats</li>
                        <li>Sandals</li>
                        <li>Heels</li>
                        <li>School Shoes</li>
                        <li>Socks</li>
                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Toys</h4>
                      <ul>
                        <li>Learning and Development</li>
                        <li>Activity Toys</li>
                        <li>Soft Toys</li>
                        <li>Play set</li>
                      </ul>
                    </div>
                    <div id={Styles.Kids1}>
                      <h4 id={Styles.Mainhead}>Infants</h4>
                      <ul>
                        <li>Bodysuit</li>
                        <li>Rompers & Sleepsuits</li>
                        <li>Clothing sets</li>
                        <li>Tshirts 7 Tops</li>
                        <li>Dresses</li>
                        <li>Bottom wear</li>
                        <li>Winter Wear</li>
                        <li>Innerwear& Sleepwear</li>
                        <li>Infant Care</li>
                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Home & Bath</h4>
                      <h4 id={Styles.Mainhead}>Personal Care</h4>


                    </div>
                    <div id={Styles.Kids1}>
                      <h4 id={Styles.Mainhead}>Kids Accessories</h4>
                      <ul>
                        <li>Bags & Backpacks</li>
                        <li>Watches</li>
                        <li>Jewellery</li>
                        <li>Sunglasses</li>
                        <li>Mask & Protective Gears</li>
                        <li>Caps & Hats</li>
                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Brands</h4>
                      <ul>
                        <li>H&M</li>
                        <li>Max Kids</li>
                        <li>Pantaloons</li>
                        <li>United Colors</li>
                        <li>YK</li>
                        <li>U.S Polo</li>
                        <li>HRX</li>
                      </ul>

                    </div>

                  </div>
                </div>

              </div>
              <div class={Styles.D}>
                <p class={Styles.p1}>HOME&LIVING</p>
                <div id={Styles.LivingBox}>
                  <div id={Styles.LivingBoxInner}>
                    <div id={Styles.Living1}>
                      <h4 id={Styles.Mainhead}>Bed Linen & Furnishing</h4>
                      <ul>
                        <li>T-shirts</li>
                        <li>Shirts</li>
                        <li>Shorts</li>
                        <li>Jeans</li>
                        <li>Trousers</li>
                        <li>Clothing Sets</li>
                        <li>Ethnic Wear</li>
                        <li>Track Pants</li>
                        <li>jackets</li>
                        <li>Party Wear</li>
                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Flooring</h4>
                      <ul>
                        <li>Ethnic Wear</li>
                        <li>Track Pants</li>
                        <li>jackets</li>
                        <li>Party Wear</li>
                      </ul>
                    </div>
                    <div id={Styles.Living1}>
                      <h4 id={Styles.Mainhead}>Bath</h4>
                      <ul>
                        <li>Dresses</li>
                        <li>Tops</li>
                        <li>Tshirts</li>
                        <li>Clothing Set</li>
                        <li>Lehenga Choli</li>
                        <li>Kurta sets</li>
                        <li>Party wear</li>
                        <li>Dungarees</li>

                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Lamps & Lighting</h4>
                      <ul>
                        <li>Sport Shoes</li>
                        <li>Flats</li>
                        <li>Sandals</li>
                        <li>Heels</li>
                        <li>School Shoes</li>
                        <li>Socks</li>
                      </ul>


                    </div>
                    <div id={Styles.Living1}>
                      <h4 id={Styles.Mainhead}>Home Decor</h4>
                      <ul>
                        <li>Casual Shoes</li>
                        <li>Flipflops</li>
                        <li>Sport Shoes</li>
                        <li>Flats</li>
                        <li>Shirts</li>
                        <li>Shorts</li>
                        <li>Jeans</li>
                        <li>Trousers</li>
                        <li>Sandals</li>
                        <li>Heels</li>
                        <li>School Shoes</li>
                        <li>Socks</li>
                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Cushion & Cushion Covers</h4>
                      <h4 id={Styles.Mainhead}>Curtains</h4>

                    </div>
                    <div id={Styles.Living1}>
                      <h4 id={Styles.Mainhead}>Home Gift Sets</h4>
                      <h4 id={Styles.Mainhead}>Kitchen & Tables</h4>

                      <ul>
                        <li>Bodysuit</li>
                        <li>Rompers & Sleepsuits</li>
                        <li>Clothing sets</li>
                        <li>Tshirts 7 Tops</li>
                        <li>Dresses</li>
                        <li>Bottom wear</li>
                        <li>Winter Wear</li>

                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead}>Storage</h4>
                      <ul>
                        <li>Shirts</li>
                        <li>Shorts</li>
                        <li>Jeans</li>
                        <li>Trousers</li>
                        <li>Sandals</li>
                        <li>Heels</li>
                        <li>School Shoes</li>
                        <li>Socks</li>
                      </ul>

                    </div>
                    <div id={Styles.Living1}>
                      <h4 id={Styles.Mainhead}>Brands</h4>
                      <ul>
                        <li>Bags & Backpacks</li>
                        <li>Watches</li>
                        <li>Jewellery</li>
                        <li>Sunglasses</li>
                        <li>Mask & Protective Gears</li>
                        <li>Caps & Hats</li>
                        <li>Jewellery</li>
                        <li>Sunglasses</li>
                        <li>Mask & Protective Gears</li>
                        <li>H&M</li>
                        <li>Max Kids</li>
                        <li>Pantaloons</li>
                        <li>United Colors</li>
                        <li>YK</li>
                        <li>U.S Polo</li>
                        <li>HRX</li>
                      </ul>

                    </div>

                  </div>
                </div>

              </div>
              <div class={Styles.E}>
                <p class={Styles.p1}>BEAUTY</p>
                <div id={Styles.BeautyBox}>
                  <div id={Styles.BeautyBoxInner}>
                    <div id={Styles.Beauty1}>
                      <h4 id={Styles.Mainhead2}>Makeup</h4>
                      <ul>
                        <li>Bags & Backpacks</li>
                        <li>Watches</li>
                        <li>Jewellery</li>
                        <li>Sunglasses</li>
                        <li>Mask & Protective Gears</li>
                        <li>Caps & Hats</li>
                        <li>Jewellery</li>
                        <li>Sunglasses</li>
                        <li>Mask & Protective Gears</li>
                        <li>H&M</li>
                        <li>Max Kids</li>
                        <li>Pantaloons</li>
                        <li>United Colors</li>
                        <li>YK</li>
                        <li>U.S Polo</li>
                        <li>HRX</li>
                      </ul>

                    </div>

                    <div id={Styles.Beauty1}>
                      <h4 id={Styles.Mainhead2}>Skincare,Bath & Body</h4>
                      <ul>
                        <li>Bags & Backpacks</li>
                        <li>Watches</li>
                        <li>Jewellery</li>
                        <li>Sunglasses</li>

                        <li>Mask & Protective Gears</li>
                        <li>H&M</li>
                        <li>Max Kids</li>
                        <li>Pantaloons</li>
                        <li>United Colors</li>
                        <li>YK</li>
                        <li>U.S Polo</li>
                        <li>HRX</li>
                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead2}>Baby Care</h4>
                      <h4 id={Styles.Mainhead2}>Masks</h4>
                    </div>
                    <div id={Styles.Beauty1}>
                      <h4 id={Styles.Mainhead2}>Appliences</h4>
                      <ul>
                        <li>Bags & Backpacks</li>
                        <li>Watches</li>
                        <li>Jewellery</li>
                        <li>Sunglasses</li>

                        <li>Mask & Protective Gears</li>


                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead2}>Mens Grooming</h4>
                      <ul>
                        <li>Bags & Backpacks</li>
                        <li>Watches</li>
                        <li>Jewellery</li>
                        <li>Sunglasses</li>

                        <li>Mask & Protective Gears</li>


                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead2}>Beauty Gifts</h4>
                      <ul>
                        <li>Jewellery</li>
                        <li>Sunglasses</li>
                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead2}>Premium Beauty</h4>
                      <h4 id={Styles.Mainhead2}>Wallness & Hygiene</h4>

                    </div>

                    <div id={Styles.Beauty1}>
                      <h4 id={Styles.Mainhead2}>Haircare</h4>
                      <ul>
                        <li>Bags & Backpacks</li>
                        <li>Watches</li>
                        <li>Jewellery</li>
                        <li>Sunglasses</li>

                        <li>Mask & Protective Gears</li>
                        <li>H&M</li>
                        <li>Max Kids</li>
                        <li>Pantaloons</li>
                        <li>United Colors</li>
                        <li>YK</li>
                        <li>U.S Polo</li>
                        <li>HRX</li>
                      </ul>
                      <hr />
                      <h4 id={Styles.Mainhead2}>Baby Care</h4>
                      <h4 id={Styles.Mainhead2}>Masks</h4>
                    </div>
                    <div id={Styles.Beauty1}>
                      <h4 id={Styles.Mainhead2}>Skincare,Top Brands</h4>
                      <ul>
                        <li>Bags & Backpacks</li>
                        <li>Watches</li>
                        <li>Jewellery</li>
                        <li>Sunglasses</li>

                        <li>Mask & Protective Gears</li>
                        <li>H&M</li>
                        <li>Max Kids</li>
                        <li>Pantaloons</li>
                        <li>United Colors</li>
                        <li>YK</li>
                        <li>U.S Polo</li>
                        <li>HRX</li>
                        <li>Max Kids</li>
                        <li>Pantaloons</li>
                        <li>United Colors</li>
                      </ul>

                    </div>

                  </div>
                </div>
              </div>
              <div class={Styles.F}>
                <p class={Styles.p1}>STUDIO<sup>NEW</sup></p>
                <div id={Styles.StudioBox}>
                  <div id={Styles.StudioBoxInner}>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id={Styles.searchbar}>
            <div id={Styles.searchborder}>
              <svg id={Styles.searchsvg2} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
              <input id={Styles.searchInput} type="text" placeholder="Search for products,brands and more" />
            </div>
          </div>
          <div id={Styles.Navicons}>

            <div id={Styles.NavInner}>

              <div id={Styles.A}>
                <div>
                  <Link to="/profile"><svg id={Styles.svg3} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg></Link>
                  <p>Profile</p>
                </div>
              </div>
              <div id={Styles.A}>
                <div>
                  <Link to="/wishing"><svg id={Styles.svg4} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg></Link>
                  <p>Whishlist</p>
                </div>
              </div>
              <div id={Styles.A}>
                <div>
                  <Link to='/bag'><svg id={Styles.svg3} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" ><path d="M41.3 14.58a5 5 0 0 0-5-4.58H34a10 10 0 0 0-20 0h-2.32a5 5 0 0 0-5 4.58l-2.36 28a5 5 0 0 0 5 5.39h29.35a5 5 0 0 0 5-5.4ZM24 2a8 8 0 0 1 8 8H16a8 8 0 0 1 8-8Zm14.67 44H9.33a3 3 0 0 1-3-3.23l2.35-28a3 3 0 0 1 3-2.75H14v6h-1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-1V12h16v6h-1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-1v-6h2.32a3 3 0 0 1 3 2.75l2.35 28a3 3 0 0 1-3 3.25Z" data-name="Shopping Bag"></path></svg></Link>
                  <p>Bag</p>
                </div>
              </div>

              <div id={Styles.B} className={Styles.hambur}>
                <div>
                  <Link><svg id={Styles.svg3} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg></Link>
                  <p>Menu</p>
                </div>
              </div>
              {/* <div id={Styles.wishlistComponent} style={{display:`${wishlist}`}}>
               <Wishlist setWishlist={setWishlist}/>
               </div> */}
            </div>
          </div>
        </article>
      </section>
      {/* ------------------------------Nav Bar end----------------------------------- */}
      <section className={Styles.aniImages}>
        <img id={Styles.img3} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_105,c_limit,fl_progressive/w_105,h_124,q_60,,dpr_2,fl_progressive/assets/images/retaillabs/2023/8/10/e9d29080-f1fc-4ffe-b109-1b5b02134d0c1691687219714-TOP-NAV-W.gif" loading="lazy" srcset="
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/w_105,h_124,q_60,,dpr_2,fl_progressive/assets/images/retaillabs/2023/8/10/e9d29080-f1fc-4ffe-b109-1b5b02134d0c1691687219714-TOP-NAV-W.gif 1233w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/w_105,h_124,q_60,,dpr_2,fl_progressive/assets/images/retaillabs/2023/8/10/e9d29080-f1fc-4ffe-b109-1b5b02134d0c1691687219714-TOP-NAV-W.gif 1080w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/w_105,h_124,q_60,,dpr_2,fl_progressive/assets/images/retaillabs/2023/8/10/e9d29080-f1fc-4ffe-b109-1b5b02134d0c1691687219714-TOP-NAV-W.gif 750w" class="css-1nv89s7"></img>

        <img id={Styles.img3} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_88,c_limit,fl_progressive/w_88,h_104,q_60,,dpr_2,fl_progressive/assets/images/2023/8/9/d43415d2-f3e2-4ec1-acb6-26cbaf3c95c91691560849261-Men-2.png" loading="lazy" srcset="
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/w_88,h_104,q_60,,dpr_2,fl_progressive/assets/images/2023/8/9/d43415d2-f3e2-4ec1-acb6-26cbaf3c95c91691560849261-Men-2.png 1233w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/w_88,h_104,q_60,,dpr_2,fl_progressive/assets/images/2023/8/9/d43415d2-f3e2-4ec1-acb6-26cbaf3c95c91691560849261-Men-2.png 1080w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/w_88,h_104,q_60,,dpr_2,fl_progressive/assets/images/2023/8/9/d43415d2-f3e2-4ec1-acb6-26cbaf3c95c91691560849261-Men-2.png 750w" class="css-1nv89s7" />

        <img id={Styles.img3} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_600,c_limit,fl_progressive/assets/images/retaillabs/2023/8/12/b3cd4118-d0ba-4bff-a604-71d1e67276a21691849040037-Rakhi-Store--2-.gif" loading="lazy" srcset="
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/retaillabs/2023/8/12/b3cd4118-d0ba-4bff-a604-71d1e67276a21691849040037-Rakhi-Store--2-.gif 1233w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/assets/images/retaillabs/2023/8/12/b3cd4118-d0ba-4bff-a604-71d1e67276a21691849040037-Rakhi-Store--2-.gif 1080w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/assets/images/retaillabs/2023/8/12/b3cd4118-d0ba-4bff-a604-71d1e67276a21691849040037-Rakhi-Store--2-.gif 750w" class="css-1nv89s7" />

        <img id={Styles.img3} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_88,c_limit,fl_progressive/w_88,h_104,q_60,,dpr_2,fl_progressive/assets/images/2023/8/9/06af3dc8-bedd-4dab-8390-b6bd77732a5b1691560849331-Women-2.png" loading="lazy" srcset="
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/w_88,h_104,q_60,,dpr_2,fl_progressive/assets/images/2023/8/9/06af3dc8-bedd-4dab-8390-b6bd77732a5b1691560849331-Women-2.png 1233w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/w_88,h_104,q_60,,dpr_2,fl_progressive/assets/images/2023/8/9/06af3dc8-bedd-4dab-8390-b6bd77732a5b1691560849331-Women-2.png 1080w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/w_88,h_104,q_60,,dpr_2,fl_progressive/assets/images/2023/8/9/06af3dc8-bedd-4dab-8390-b6bd77732a5b1691560849331-Women-2.png 750w" class="css-1nv89s7" />

        <img id={Styles.img3} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_88,c_limit,fl_progressive/w_88,h_104,q_60,,dpr_2,fl_progressive/assets/images/2023/8/9/8afd3660-fe74-40f8-9017-c08ec84c6f351691560849189-Kids-2.png" loading="lazy" srcset="
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/w_88,h_104,q_60,,dpr_2,fl_progressive/assets/images/2023/8/9/8afd3660-fe74-40f8-9017-c08ec84c6f351691560849189-Kids-2.png 1233w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/w_88,h_104,q_60,,dpr_2,fl_progressive/assets/images/2023/8/9/8afd3660-fe74-40f8-9017-c08ec84c6f351691560849189-Kids-2.png 1080w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/w_88,h_104,q_60,,dpr_2,fl_progressive/assets/images/2023/8/9/8afd3660-fe74-40f8-9017-c08ec84c6f351691560849189-Kids-2.png 750w" class="css-1nv89s7"></img>


        <img id={Styles.img3} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_88,c_limit,fl_progressive/w_88,h_104,q_60,,dpr_2,fl_progressive/assets/images/2023/8/9/72940be3-210b-4d27-b9f0-07f0f07293bc1691560849120-Footwear-2.png" loading="lazy" srcset="
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/w_88,h_104,q_60,,dpr_2,fl_progressive/assets/images/2023/8/9/72940be3-210b-4d27-b9f0-07f0f07293bc1691560849120-Footwear-2.png 1233w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/w_88,h_104,q_60,,dpr_2,fl_progressive/assets/images/2023/8/9/72940be3-210b-4d27-b9f0-07f0f07293bc1691560849120-Footwear-2.png 1080w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/w_88,h_104,q_60,,dpr_2,fl_progressive/assets/images/2023/8/9/72940be3-210b-4d27-b9f0-07f0f07293bc1691560849120-Footwear-2.png 750w" class="css-1nv89s7"></img>

        <img id={Styles.img3} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_600,c_limit,fl_progressive/assets/images/retaillabs/2023/8/11/cce66c55-64b1-4a9b-b087-0e13404a01f11691736417591-BEAUTY.jpg" loading="lazy" srcset="
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/retaillabs/2023/8/11/cce66c55-64b1-4a9b-b087-0e13404a01f11691736417591-BEAUTY.jpg 1233w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/assets/images/retaillabs/2023/8/11/cce66c55-64b1-4a9b-b087-0e13404a01f11691736417591-BEAUTY.jpg 1080w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/assets/images/retaillabs/2023/8/11/cce66c55-64b1-4a9b-b087-0e13404a01f11691736417591-BEAUTY.jpg 750w" class="css-1nv89s7"></img>

        <img id={Styles.img3} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_600,c_limit,fl_progressive/assets/images/retaillabs/2023/8/11/3caad1be-2319-4850-b686-ce6df4d2e2821691736513542-Home.jpg" loading="lazy" srcset="
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/retaillabs/2023/8/11/3caad1be-2319-4850-b686-ce6df4d2e2821691736513542-Home.jpg 1233w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/assets/images/retaillabs/2023/8/11/3caad1be-2319-4850-b686-ce6df4d2e2821691736513542-Home.jpg 1080w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/assets/images/retaillabs/2023/8/11/3caad1be-2319-4850-b686-ce6df4d2e2821691736513542-Home.jpg 750w" class="css-1nv89s7"></img>

        <img id={Styles.img3} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_600,c_limit,fl_progressive/assets/images/retaillabs/2023/8/11/024040c1-2dc8-4aa8-a0af-b51c3f86f5841691736558914-ACCESSORIES--2-.jpg" loading="lazy" srcset="
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/retaillabs/2023/8/11/024040c1-2dc8-4aa8-a0af-b51c3f86f5841691736558914-ACCESSORIES--2-.jpg 1233w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/assets/images/retaillabs/2023/8/11/024040c1-2dc8-4aa8-a0af-b51c3f86f5841691736558914-ACCESSORIES--2-.jpg 1080w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/assets/images/retaillabs/2023/8/11/024040c1-2dc8-4aa8-a0af-b51c3f86f5841691736558914-ACCESSORIES--2-.jpg 750w" class="css-1nv89s7"></img>

        <img id={Styles.img3} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_600,c_limit,fl_progressive/assets/images/retaillabs/2023/8/11/1d5b8036-dbee-4ddc-a62b-bad453368ba21691740487642-GADGETS--1-.jpg" loading="lazy" srcset="
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/retaillabs/2023/8/11/1d5b8036-dbee-4ddc-a62b-bad453368ba21691740487642-GADGETS--1-.jpg 1233w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/assets/images/retaillabs/2023/8/11/1d5b8036-dbee-4ddc-a62b-bad453368ba21691740487642-GADGETS--1-.jpg 1080w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/assets/images/retaillabs/2023/8/11/1d5b8036-dbee-4ddc-a62b-bad453368ba21691740487642-GADGETS--1-.jpg 750w" class="css-1nv89s7"></img>



      </section>

      <section className={Styles.adds}>
        <img id={Styles.img4} draggable="false" src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_600,c_limit,fl_progressive/assets/images/2023/8/1/be06ea6c-550d-4bdd-859e-3a4803c6597e1690889048382-RTB-----1--3-.jpg" loading="lazy" srcset="
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.8,w_411,c_limit,fl_progressive/assets/images/2023/8/1/be06ea6c-550d-4bdd-859e-3a4803c6597e1690889048382-RTB-----1--3-.jpg 1233w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.5,w_360,c_limit,fl_progressive/assets/images/2023/8/1/be06ea6c-550d-4bdd-859e-3a4803c6597e1690889048382-RTB-----1--3-.jpg 1080w,
  https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_360,c_limit,fl_progressive/assets/images/2023/8/1/be06ea6c-550d-4bdd-859e-3a4803c6597e1690889048382-RTB-----1--3-.jpg 750w" class="css-1nv89s7" />        </section>
      <section className={Styles.discountImages}>
        <img className={Styles.img1} src="https://st.depositphotos.com/1000441/1936/i/450/depositphotos_19364069-stock-photo-colorful-sale-tags-hanging.jpg" alt="" />
        <img className={Styles.img1} src="https://st2.depositphotos.com/3842881/5486/i/450/depositphotos_54860095-stock-photo-20-percent-with-hearts.jpg" alt="" />
        <img className={Styles.img1} src="https://st3.depositphotos.com/1017986/31880/i/450/depositphotos_318806106-stock-photo-happy-smiling-young-woman-with.jpg" alt="" />
        <img className={Styles.img1} src="https://st4.depositphotos.com/12982378/41392/i/450/depositphotos_413928042-stock-photo-cropped-view-female-hand-shopping.jpg" alt="" />
        <img className={Styles.img1} src="https://st2.depositphotos.com/12982378/44126/i/450/depositphotos_441262454-stock-photo-red-tags-sale-shopping-trolley.jpg" alt="" />
        <img className={Styles.img1} src="https://st3.depositphotos.com/3591429/12863/i/450/depositphotos_128632540-stock-photo-online-purchase-summer-concept.jpg" alt="" />
        <img className={Styles.img1} src="https://st.depositphotos.com/1000128/1935/i/450/depositphotos_19350021-stock-photo-sale-and-discount-concept.jpg" alt="" />
        <img className={Styles.img1} src="https://st4.depositphotos.com/3721729/22432/i/450/depositphotos_224329796-stock-illustration-amazed-pop-art-girl-glasses.jpg" alt="" />
        <img className={Styles.img1} src="https://st3.depositphotos.com/7485446/34768/i/450/depositphotos_347682716-stock-photo-sale-percent-discount-text-sale.jpg" alt="" />

      </section>

      <section className={Styles.page2}>


        {products.map((product) => (
          <div className={Styles.prod} key={product.id} onClick={clickme}>
            <div className={Styles.imageProd}>
              <img src={product.image} alt="" className={Styles.prodImg} />
            </div>
            <div className={Styles.wishlist} onClick={() => wishlistPage(product)} >
              <svg id={Styles.svg4} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>

              <p className={Styles.wishname}>Wishlist</p>


            </div>
            <div className={Styles.priceDetails}>
              <h4>{product.title}</h4>
              <p className={Styles.des}>{product.description}</p>
              <p>RS ₹ {product.price}</p>
            </div>
          </div>

        ))}

      </section>
      {/* <section style={{height:"100px",width:"200px",backgroundColor:"red"}}>
      <img src="Jyopic.png" alt="" />
      </section> */}

      <section className={Styles.bottomNav}>
        <div id={Styles.A}>
          <div>
            <svg id={Styles.svg3} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
            <p>Home</p>
          </div>
        </div>
        <div id={Styles.A}>
          <div>
            <svg id={Styles.svg3} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z" /></svg>
            <p>Hot Tends</p>
          </div>
        </div>
        <div id={Styles.A}>
          <div>
            <svg id={Styles.svg3} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z" /></svg>
            <p>Everyday</p>
          </div>
        </div>
        <div id={Styles.A}>
          <div>
            <svg id={Styles.svg3} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M116.7 33.8c4.5-6.1 11.7-9.8 19.3-9.8H376c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152zm38.5 39.8c-3.3 2.5-4.2 7-2.1 10.5l57.4 95.6L63.3 192c-4.1 .3-7.3 3.8-7.3 8s3.2 7.6 7.3 8l192 16c.4 0 .9 0 1.3 0l192-16c4.1-.3 7.3-3.8 7.3-8s-3.2-7.6-7.3-8L301.5 179.8l57.4-95.6c2.1-3.5 1.2-8.1-2.1-10.5s-7.9-2-10.7 1L256 172.2 165.9 74.6c-2.8-3-7.4-3.4-10.7-1z" /></svg>
            <p>Luxe</p>
          </div>
        </div>
        <div id={Styles.A}>
          <div>
          <Link to="/profile"><svg id={Styles.svg3} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
</Link>

            <p>Profile</p>
          </div>
        </div>
      </section>



    </div>
  )
}

export default Home
