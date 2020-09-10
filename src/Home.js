import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="123"
            title=" Asus Zenbook14 i3 10th Gen. Nvidia 2gb Graphics Card Included"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81fstJkUlaL._AC_UY218_.jpg"
            rating={2}
          />
          <Product
            id="1234"
            title=" Asus Zenbook14 i5 10th Gen.Nvidia 4gb Graphics Card Included"
            price={449.99}
            image="https://m.media-amazon.com/images/I/51C46YsTJSL._AC_UY218_.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="12345"
            title=" Hp Pavillion i5 10th Gen.Nvidia 6gb Graphics Card Included"
            price={519.99}
            image="https://m.media-amazon.com/images/I/61471KxOgRL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="123456"
            title="ASUS ROG Maximus XII Hero Z490 (WiFi 6) v5.1, Triple M.2, Aura Sync)"
            price={129.99}
            image="https://m.media-amazon.com/images/I/81EFM7JVPKL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="1234567"
            title=" Asus Rog2 Strix i7 10th Gen. Nvidia 2080 6gb with 2Ram slots"
            price={1309.99}
            image="https://m.media-amazon.com/images/I/811QpiYXe-L._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12345678"
            title="ASUS ROG Zephyrus G14 14 VR Ready 120Hz FHD Gaming Laptop,8Core AMD Ryzen 9 4900HS(Beat i7-10750H),16GB RAM,1TB PCIe SSD,Backlight,Wi-Fi 6,USB C,NVIDIA GeForce RTX2060 Max-Q,Win10 (Moonlight White)"
            price={139.999}
            image="https://m.media-amazon.com/images/I/71zNU5UBINL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
