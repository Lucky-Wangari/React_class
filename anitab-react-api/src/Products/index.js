import React,{useState,useEffect} from "react";
import './style.css';

const Products = () =>{
    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(false);
    console.log(loading)

    useEffect(()=>{
        (async () =>{
            getProducts();
        })();
    }, [])
    const getProducts = async () =>{
        try{
            setloading(true)
        const response = await fetch ('https://dummyjson.com/products')
        const result = await response.json();
        setproducts(result.products)
        setloading(false)
        }
        catch(error){
            console.log(error.message);
        }
    };
    return(
        <div className="products">
            {products.map(item=>(
                <div key={item.id}>
                    <img alt='' src={item.images[3]}/>
                    <h2>{item.title}</h2>
                    <p>Ksh{item.price}</p>
                    <p>{item.discountPercentage}%</p>
                    <p>{item.rating}</p>
                    </div>
            ))}
        </div>)
      
}
export default Products