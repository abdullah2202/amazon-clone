import React from 'react'
import './Checkout.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal';
import CurrencyFormat from "react-currency-format";

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/amazonservices/seller_success_stories/2020/08_electric-vans/UK_eSprinter_Editorial-B1x._CB406519642_.jpg"
                    alt=""
                    className="checkout__ad"
                />
            

                {/* If basket is empty */}
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is Empty</h2>
                        <p>You have no items in your basket. To buy one or more items, click on "Add to Basket" next to the item.</p>
                    </div>
                ) : (
                    // If basket is not empty
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {/* List out all of the checkout products */}
                        {basket?.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>

            {basket.length > 0 && (
                <div className="checkout__right">
                    {/* <h1>Subtotal</h1> */}
                    <Subtotal/>
                </div>
            )}

        </div>
    );
}

export default Checkout

