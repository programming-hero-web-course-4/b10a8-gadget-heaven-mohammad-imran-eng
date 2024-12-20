import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { MdDeleteOutline } from "react-icons/md";

const DashBoard = () => {
  const products = useLoaderData();

  const [showCart, setShowCart] = useState([]);
  const [showWish, setShowWish] = useState([]);

  

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    const wishList = localStorage.getItem("wish-list");
    const cartProduct = products.filter((product) =>
      cart?.includes(product.product_id)
    );


    setShowCart(cartProduct);
    const wishListProduct = products.filter((product) =>
      wishList?.includes(product.product_id)
    );
    setShowWish(wishListProduct);
  }, []);

  const handleRemoveToCart =(id)=> {
    const newCart = showCart.filter(cart=> cart.product_id !== id);
    setShowCart(newCart);
  }

  const handleRemoveToWish = (id)=> {
    const newWish = showWish.filter(wish=> wish.product_id !== id);
    setShowWish(newWish);
  }

  return (
    <div>
      <div className="h-48 bg-blue-600 text-center text-white pt-5">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="max-w-screen-sm mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="max-w-screen-sm mx-auto my-10">
        <Tabs>
          <TabList>
            <Tab>
              <NavLink>Cart</NavLink>
            </Tab>
            <Tab>
              <NavLink>WishList</NavLink>
            </Tab>
          </TabList>

          <TabPanel>
            {showCart.map((product, idx) => (
              <article key={idx}>
                {/* cart price and shorting */}
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">Cart</h2>
                  </div>
                  <div>
                    
                    Total cost : 
                  </div>
                </div>
                {/* cart price and shorting */}
                <div className="flex items-cente py-5">
                  <div className="grid grid-cols-2 justify-between items-center">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="rounded-md"
                        src={product.product_image}
                        alt=""
                      />
                    </div>
                    <div className="ml-5">
                      <h2 className="text-2xl font-semibold">
                        {product.product_title}
                      </h2>
                      <p>{product.description}</p>
                      <p className="font-semibold">Price: $ {product.price}</p>
                    </div>
                  </div>
                  <button onClick={()=>handleRemoveToCart(product.product_id)} className="hover:text-red-400 cursor-pointer grid justify-end">
                    <MdDeleteOutline/>
                  </button>
                  </div>
                </div>
              </article>
            ))}
          </TabPanel>
          <TabPanel>
            {showWish.map((product, idx) => (
              <article key={idx}>
                <div className="flex items-cente py-5">
                  <div className="grid grid-cols-2 justify-between items-center">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="rounded-md"
                        src={product.product_image}
                        alt=""
                      />
                    </div>
                    <div className="ml-5">
                      <h2 className="text-2xl font-semibold">
                        {product.product_title}
                      </h2>
                      <p>{product.description}</p>
                      <p className="font-semibold">Price: $ {product.price}</p>
                    </div>
                  </div>
                  <button onClick={()=>handleRemoveToWish(product.product_id)} className="hover:text-red-400 cursor-pointer grid justify-end">
                    <MdDeleteOutline/>
                  </button>
                  </div>
                </div>
              </article>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default DashBoard;
