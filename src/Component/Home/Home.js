import React from 'react'
import "./Home.css";
import Product from './Product/Product';
function Home() {
    return (
        <div className="home">
           <div className="home__container">
               <img className="home__image" id={123344} src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"  alt=""/>

               <div className="home__row">
                    <Product title="Satechi USB-C Magnetic Charging Dock [MFi-Certified] Portable Watch Charger - Compatible with Apple Watch Series 5/4/3/2/1 (Cable Not Included)" id={1234} image="https://images-na.ssl-images-amazon.com/images/I/71cyjA89JCL._AC_SX679_.jpg" price={28.88} rating={3} />

                    <Product title="Satechi 75W Dual Type-C PD Travel Charger Adapter with 2 USB-C PD & 2 USB 3.0 - Compatible with 2020 MacBook Pro, 2020 MacBook Air, iPhone 11 Pro Max/11 Pro/11/SE and More (UK)" image="https://images-na.ssl-images-amazon.com/images/I/81unQqKRrGL._AC_SX679_.jpg" id={3344} price={55.88} rating={5} />

                    <Product id={1334} title='Sedatech Watercooling Gaming PC Intel i9-10850K 10x 3.60Ghz, Geforce RTX 2080 Super 8Gb, 64Gb RAM DDR4, 1Tb SSD NVMe 970 Evo, 3Tb HDD, USB 3.1, Wifi, Bluetooth, 28" 4K Monitor, k/m, Win 10' image="https://images-na.ssl-images-amazon.com/images/I/71vsQEEkn9L._AC_SX679_.jpg" price={2584.90} rating={4} />

                   {/* Product */}
               </div>

               <div className="home__row">
                    <Product id={7899} title="Huawei B311 2020-4G/ LTE 150 Mbps Mobile Wi-Fi Router, Unlocked to All Networks- Genuine UK Warranty STOCK (Non Network Logo)- Black,B311-221" image="https://images-na.ssl-images-amazon.com/images/I/81Wz-gdz3sL._AC_SX679_.jpg" price={48.88} rating={5} />

                    <Product id={46456} title="Sony WH-1000XM4 Noise Cancelling Wireless Headphones - 30 hours battery life - Over Ear style - Optimised for Alexa and the Google Assistant - with built-in mic for phone calls - Black" image="https://images-na.ssl-images-amazon.com/images/I/716WlV0EqsL._AC_SX679_.jpg" price={39.88} rating={5} />

                    <Product title='LG Electronics 32LM630BPLA.AEK 32-Inch HD Ready Smart LED TV with Freeview Play - Ceramic Black Colour (2019 model) [Energy Class A]' image="https://images-na.ssl-images-amazon.com/images/I/81XpNyoJi6L._AC_SX679_.jpg" price={2584.90} rating={4} />
               </div>

                <div className="home__row">
                    <Product id={234344} title="BIKESTAR Fixie Single Speed 700C 28 Inch Commuter City Road Bike | 21 Inch frame Urban Fixed Gear Bicycle Retro Vintage Adult Ladies Men Unisex" image="https://images-na.ssl-images-amazon.com/images/I/81byWoMkrfL._AC_SX679_.jpg" price={247.99} rating={3} />

                    <Product id={46544} title="DW Design 22 White Gloss Shell-Set 4-Pcs. · Drum Kit BONROB Electronic Drum Set,Drum Pad Support DTX Games Foldable Roll Up Drum Kit Built in Speaker ,9 Drum Pads With Headphone Jack For Christmas Holiday Birthday" image="https://images-na.ssl-images-amazon.com/images/I/41SFH2BUmTL._AC_.jpg" price={1487.00} rating={5} />

                    <Product id={10944} title='Unisex Reusable Face Mask Protection Washable Facial Skin Mouth Nose Shield Breathable Anti Smoke Pollution Bike Motorcycle Sport (Abstract)' image="https://images-na.ssl-images-amazon.com/images/I/71FP79Du5cL._SX466_.jpg" price={2.90} rating={4} />

                </div>
           </div>
        </div>
    )
}

export default Home
