import React from 'react'

const Shirt = ({image, title, description, price}) => {
    
        return(
        <article className="product">
            <img src = {image} alt={title} className="product-image"/>
            <h2 className="shirt-title">{title}</h2>
            <p className="description">{description}</p>
            <h3 className="price">{price}</h3>
            <button className="btn btn-click" onClick={()=>alert("hi")}>Click Me</button>
        </article>
        )
    }


export default Shirt