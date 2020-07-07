import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Context } from "../Context"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    const { removeItemsFromCart } = useContext(Context)
    const [hovered, ref] = useHover()

    const binIconClassName = hovered ?
        "ri-delete-bin-fill" :
        "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i
                className={binIconClassName}
                ref={ref}
                onClick={() => removeItemsFromCart(item.id)}
            >
            </i>
            <img
                src={item.url}
                width="130px"
                alt="some_pic"
            />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propType = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem
