import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [isOrderPlaced, setIsOrderPlaced] = useState(false)

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const newPhotosArray = allPhotos.map(photo => {
            if(photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            } return photo
        })
        setAllPhotos(newPhotosArray)
    }

    function addItemsToCart(img) {
        setCartItems(prevItems => [...prevItems, img])
    }

    function removeItemsFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function placeOrder() {
        setIsOrderPlaced(true)
        setTimeout(() => {
            setCartItems([])
            setIsOrderPlaced(false)
        }, 3000)
    }

    return (
        <Context.Provider
            value={{
                allPhotos,
                toggleFavorite,
                addItemsToCart,
                cartItems,
                removeItemsFromCart,
                isOrderPlaced,
                placeOrder
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }
