import { Link, NavLink } from 'react-router-dom';
import banner from '../../assets/banner.jpg'
import { useEffect, useState } from 'react';


const Home = () => {
    const [products,setProducts] = useState([]);
    const [filterproduct,setFilterProduct] = useState([]);
    useEffect(()=>{
        fetch('productsData.json')
        .then(res=> res.json())
        .then(data=>{
            setProducts(data)
            setFilterProduct(data)
        })
    },[])

    
    


    const handleAllProduct = ()=> {
        setFilterProduct(products)
    }

    const handleLaptops = ()=> {
        setFilterProduct(products.filter(product=> product.category=== 'Laptop')); 
    }
    const handlePhones = ()=> {
        setFilterProduct(products.filter(product=> product.category=== 'Phone')); 
    }
    const handleAccessories = ()=> {
        setFilterProduct(products.filter(product=> product.category=== 'Accessories')); 
    }
    const handleSmartWatch = ()=> {
        setFilterProduct(products.filter(product=> product.category=== 'SmartWatch'));
    }
    const handleMacBook = ()=> {
        setFilterProduct(products.filter(product=> product.category=== 'MacBook'));
    }
    const handleIphone = ()=>{
        setFilterProduct(products.filter(product=> product.category=== 'Iphone'));
    }

    return (
        <div className="max-w-screen-lg mx-auto text-center">
            <h1 className="text-[56px] font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="max-w-md mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <button className="bg-blue-700 py-2 px-4 rounded-xl font-bold text-white hover:bg-blue-600 my-5">Shop now</button>
            <img className='banner-border border' src={banner} alt="" />
            <h2 className='font-bold text-4xl mt-16 mb-10'>Explore Cutting-Edge Gadgets</h2>
            <div className='lg:flex'>
                <div className="product-nav">
                    <div className='mb-2 mr-5'><NavLink className="btn btn-outline btn-primary h-10 w-32" onClick={handleAllProduct}>All Products</NavLink></div>
                    <div className='mb-2 mr-5'><NavLink className="btn btn-outline btn-primary h-10 w-32" onClick={handleLaptops}>Laptops</NavLink></div>
                    <div className='mb-2 mr-5'><NavLink className="btn btn-outline btn-primary h-10 w-32" onClick={handlePhones} >Phones</NavLink></div>
                    <div className='mb-2 mr-5'><NavLink className="btn btn-outline btn-primary h-10 w-32" onClick={handleAccessories}>Accessories</NavLink></div> 
                    <div className='mb-2 mr-5'><NavLink className="btn btn-outline btn-primary h-10 w-32" onClick={handleSmartWatch}>Smart Watches</NavLink></div> 
                    <div className='mb-2 mr-5'><NavLink className="btn btn-outline btn-primary h-10 w-32" onClick={handleMacBook}>MacBook</NavLink></div> 
                    <div className='mb-2 mr-5'><NavLink className="btn btn-outline btn-primary h-10 w-32" onClick={handleIphone}>Iphone</NavLink></div>
                </div>
                <div className="products grid md:grid-cols-2 lg:grid-cols-3 justify-center">
                    {
                        filterproduct.map(product=>
                        <article key={product.product_id}>
                            <div className='grid justify-center'>
                            <img className='h-[220px] w-[280px] rounded-xl' src={product.product_image} alt={product.product_title} />
                            </div>
                            <h2 className='font-semibold text-2xl'>{product.product_title}</h2>
                            <p>Price: {product.price}</p>
                            <Link state={product} to='/productDetials' className="btn btn-outline btn-primary my-4">View Details</Link>
                        </article>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;