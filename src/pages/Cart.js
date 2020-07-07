import React, { useContext } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const { cartItems } = useContext(Context)
    const { isOrderPlaced } = useContext(Context)
    const { placeOrder } = useContext(Context)

    const allCartItems = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const cartItemsLength = cartItems.length
    const totalCost = cartItems.length * 5.99
    const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {allCartItems}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {
                cartItemsLength ?
                <div className="order-button">
                    <button onClick={() => placeOrder()}>{ isOrderPlaced ? "Ordering..." : "Place Order" }</button>
                </div> :
                <p>You have no items in your cart.</p>
            }
        </main>
    )
}

export default Cart
