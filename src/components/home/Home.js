import React from "react";
import "./Home.css";
import Product from "../product/Product";
import Carousels from "../carousels/Carousels";

function Home() {
  return (
    <div>
      <div className="home__container">
        <Carousels />
        <div className="home__row">
          <Product
            key={Product.id}
            id="1"
            title="One Arranged Murder{Chetan Bhagat}"
            price={95}
            image="https://images-eu.ssl-images-amazon.com/images/I/81yrnELnedL._AC_UL220_SR143,220_.jpg"
            rating={3}
          />
          <Product
            id="2"
            title="Just So Stories"
            price={99}
            image="https://images-eu.ssl-images-amazon.com/images/I/81cM1EFhEdL._AC_UL220_SR144,220_.jpg"
            rating={3}
          />
          <Product
            id="3"
            title="The 3 Mistakes of My Life"
            price={70}
            image="https://images-eu.ssl-images-amazon.com/images/I/91u3NiuHVBL._AC_UL220_SR143,220_.jpg"
            rating={3}
          />
          <Product
            id="4"
            title="The Girl in Room 105"
            price={26}
            image="https://images-eu.ssl-images-amazon.com/images/I/71Be8QsEILL._AC_UL220_SR147,220_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="5"
            title="One Day, Life Will Change: A story of love and inspiration to win life when it hits you hard . . ."
            price={29}
            image="https://images-na.ssl-images-amazon.com/images/I/41yjw0XJqPL._SX318_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="6"
            title="A Promised Land Hardcover – 17 November 2020"
            price={99}
            image="https://images-na.ssl-images-amazon.com/images/I/41nzI1lhIVL._SX327_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="7"
            title="The Power of Positive Thinking Paperback – 1 January 2019"
            price={56}
            image="https://images-na.ssl-images-amazon.com/images/I/51KmKIaej4L._SX296_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="8"
            title="Everything Happens for a Reason: And Other Lies I've Loved Hardcover – Import, 6 February 2018"
            price={69}
            image="https://images-na.ssl-images-amazon.com/images/I/518QQDgKJQL._SX330_BO1,204,203,200_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="9"
            title="The Warren Buffett Way Kindle Edition"
            price={112}
            image="https://m.media-amazon.com/images/I/512MGXypdCL.jpg"
            rating={5}
          />
          <Product
            id="10"
            title="Life is what you make it Kindle Edition"
            price={226}
            image="https://m.media-amazon.com/images/I/41mkPm+3f+L.jpg"
            rating={3}
          />
          <Product
            id="11"
            title="Ikigai: The Japanese secret to a long and happy life Kindle Edition"
            price={50}
            image="https://m.media-amazon.com/images/I/51T8OXMiB5L.jpg"
            rating={3}
          />
          <Product
            id="12"
            title="The Women Who Ruled India: Leaders. Warriors. Icons. Paperback – 1 January 2019"
            price={155}
            image="https://images-na.ssl-images-amazon.com/images/I/31YaBHNM46L._BO1,204,203,200_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="13"
            title="Time Management (Hindi) (Hindi) Paperback – 1 November 2011"
            price={79}
            image="https://images-na.ssl-images-amazon.com/images/I/41W9TyjnkmL._SX304_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="14"
            title="The Power of NO Paperback – 28 February 2019"
            price={75}
            image="https://images-na.ssl-images-amazon.com/images/I/415bJ9gag3L._SX353_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="15"
            title="Start With Why: How Great Leaders Inspire Everyone To Take Action Kindle Edition"
            price={59}
            image="https://m.media-amazon.com/images/I/51XeVKQCuNL.jpg"
            rating={3}
          />
          <Product
            id="16"
            title="Sapiens: A Brief History of Humankind Paperback – 11 June 2015"
            price={88}
            image="https://images-na.ssl-images-amazon.com/images/I/41X8OYTbLZL._SX324_BO1,204,203,200_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="17"
            title="Cracking the Code: My Journey in Bollywood Paperback – Unabridged, 8 February 2015"
            price={55}
            image="https://images-na.ssl-images-amazon.com/images/I/41+BSeroQ0L._SX311_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="18"
            title="India's Greatest Short Stories Paperback – 10 September 2018"
            price={66.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41WatVGG6lL._SX324_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="19"
            title="Big Billion Startup - The Untold Flipkart Story Hardcover – 6 October 2019"
            price={126}
            image="https://images-na.ssl-images-amazon.com/images/I/41i-v-a1KVL._SX322_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="20"
            title="The Indian Business Box Set: Stories of How Gujaratis, Baniyas and Sindhis Do Business Paperback – 25 April 2019"
            price={45}
            image="https://images-na.ssl-images-amazon.com/images/I/51xmyTIM8FL._SX430_BO1,204,203,200_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="21"
            title="Can't Hurt Me: Master Your Mind and Defy the Odds Paperback – Illustrated, 11 October 2018"
            price={59}
            image="https://images-na.ssl-images-amazon.com/images/I/410MI8gKwzL._SX331_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="22"
            title="Forest Ecology in India Unknown Binding – 1 January 2014"
            price={45}
            image="https://images-na.ssl-images-amazon.com/images/I/61rKlRMJ1NL._SX328_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="23"
            title="The Blue Umbrella Paperback – 7 January 1992"
            price={95}
            image="https://images-na.ssl-images-amazon.com/images/I/51TGU8igF-L._SX310_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="24"
            title="The Diary of a Young Girl Paperback – 1 September 2013"
            price={65}
            image="https://images-na.ssl-images-amazon.com/images/I/5111NLdJjdL._SX312_BO1,204,203,200_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="25"
            title="Three Thousand Stitches: Ordinary People, Extraordinary Lives Paperback – 14 July 2017"
            price={49}
            image="https://images-na.ssl-images-amazon.com/images/I/51+ZgolTkaL._SX326_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="26"
            title="Eleven Minutes Paperback – 18 August 2003"
            price={76}
            image="https://images-na.ssl-images-amazon.com/images/I/41WG86GQE0L._SX292_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="27"
            title="YOU ARE BORN TO BLOSSOM (PB) Paperback – 1 January 2020"
            price={150}
            image="https://images-na.ssl-images-amazon.com/images/I/41VJJx3wEiL._SX299_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="28"
            title="Start With Why: How Great Leaders Inspire Everyone To Take Action Paperback – 6 October 2011"
            price={53}
            image="https://images-na.ssl-images-amazon.com/images/I/41oKiltofGL._SX323_BO1,204,203,200_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="29"
            title="The Alchemist Paperback – 1 January 2017"
            price={66}
            image="https://images-na.ssl-images-amazon.com/images/I/41VFCZhhJnL._SX328_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="30"
            title="The Time Machine Paperback – 1 July 2015"
            price={79}
            image="https://images-na.ssl-images-amazon.com/images/I/51CYYxY3riL._SX320_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="31"
            title="The Case That Shook India: The Verdict That Led To The Emergency Paperback – 10 January 2018"
            price={88}
            image="https://images-na.ssl-images-amazon.com/images/I/51Oc3dKCA7L._SX324_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="32"
            title="41 Anmol Kahaniya - Premchand (Hindi) Paperback – 20 May 2015"
            price={48}
            image="https://images-na.ssl-images-amazon.com/images/I/51U0BOGQd3L._SX330_BO1,204,203,200_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="33"
            title=""
            price={56}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="34"
            title="The Story Of My Experiments With Truth; Mahatma Gandhi, An Autobiography (HINDI) (Hindi) Paperback – 6 August 2020"
            price={114}
            image="https://images-na.ssl-images-amazon.com/images/I/51lYShQW-SL._SX321_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            id="35"
            title="Rich Dad Poor Dad  (Paperback, Kiyosaki Robert T.)"
            price={15}
            image="https://rukminim1.flixcart.com/image/352/352/kic17rk0-0/regionalbooks/k/t/m/rich-dad-poor-dad-original-imafy5hggnptcvef.jpeg?q=70"
            rating={3}
          />
          <Product
            id="36"
            title="Something I Never Told You Kindle Edition"
            price={120}
            image="https://m.media-amazon.com/images/I/51FCcoKgtVL.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
