import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img
                src="https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/X_Site/XCM_Manual_ORIGIN_1239366_1269425_UK_uk_eoss_heroassets_onsitegraphics_uk_gb_en_3247498_1500x600_1X_en_GB._CB407071252_.jpg"
                alt=""
                className="home__image"
            />

            <div className="home__row">
                <Product
                    id="0002122"
                    title="Corsair QL120 aRGB Fan"
                    price={29.99}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/51DLlAozpnL._AC_SY200_.jpg"
                />

                <Product
                    id="0002132"
                    title="Electronic Digital Scales iOS"
                    price={49.99}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/416W6cO7LKL._AC_SY200_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="0002323"
                    title="Stylish Yoga Mat"
                    price={19.99}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/61X14sG0MgL._AC_SY200_.jpg"
                />

                <Product
                    id="0002132"
                    title="Red Schoo/College Notepad"
                    price={9.99}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41Pycv-LElL._AC_SY200_.jpg"
                />

                <Product
                    id="0233232"
                    title="Plain White Toilet Seat"
                    price={24.99}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/31iFEsAziUL._AC_SY200_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="0002322"
                    title="Vango Venus Sleeping Bag"
                    price={16.90}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41zbQvuPUxL._AC_US218_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
