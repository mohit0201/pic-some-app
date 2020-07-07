import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { Context } from "../Context"
import useHover from "../hooks/useHover"

function Image({ className, img }) {
    const [hovered, ref] = useHover()
    const {
        toggleFavorite,
        addItemsToCart,
        cartItems,
        removeItemsFromCart
    } = useContext(Context)

    const isAddedToCart = cartItems.some(item => item.id === img.id)

    return (
        <div
            className={`${className} image-container`}
            ref={ref}
        >
            <img
                src={img.url}
                className="image-grid"
                alt="some_image"
            />
            {
                img.isFavorite &&
                <i
                    className={`ri-heart-fill favorite`}
                    onClick={() => toggleFavorite(img.id)}
                >
                </i>
            }
            {
                isAddedToCart &&
                <i
                    className="ri-shopping-cart-fill cart"
                    onClick={() => removeItemsFromCart(img.id)}
                >
                </i>
            }
            {
                hovered &&
                <>
                    {
                        !img.isFavorite &&
                            <i
                                className={`ri-heart-line favorite`}
                                onClick={() => toggleFavorite(img.id)}
                            >
                            </i>
                    }
                    {
                        !isAddedToCart &&
                        <i
                            className="ri-add-circle-line cart"
                            onClick={() => addItemsToCart(img)}
                        >
                        </i>
                    }
                </>
            }
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
