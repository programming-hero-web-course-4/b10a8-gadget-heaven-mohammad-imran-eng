import { Link, useLocation } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { addToStoredList, addToStoredWhishList } from "../../utility/AddToDB";
const ProductDetails = () => {
  const product = useLocation();
  const handleAddToCart = (id)=> {
    addToStoredList(id);
  }

  const handleAddToWhishlist = (id)=> {
    addToStoredWhishList(id)
  }


  return (
    <div>
      <div className="h-48 bg-blue-600 text-center text-white pt-5 lg:mb-96 lg:relative">
        <h1 className="text-3xl font-bold">Product Details</h1>
        <p className="max-w-screen-sm mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="flex max-w-screen-sm mx-auto bg-slate-100 p-5 rounded-2xl lg:absolute lg:top-52 lg:left-[440px]">
        <div className="grid items-center">
          <img className="h-[200px] w-[250px]" src={product.state.product_image} alt={product.state.product_title} />
        </div>
        <div className="ml-10">
          <h2 className="text-2xl font-bold">{product.state.product_title}</h2>
          <p className="font-semibold">Price: $ {product.state.price}</p>
          <p className="badge badge-accent badge-outline font-medium">
            {product.state.availability === true ? "In Stock" : "Stock Out"}
          </p>
          <p>{product.state.description}</p>
          <p className="font-bold">Specification: </p>
          {product.state.Specification.map((specific, idx) => (
            <ol key={idx}>
              <li>
                {`${idx + 1})`} {specific}
              </li>
            </ol>
          ))}
          <div className="rating  my-2">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p className="font-bold">Rating: {product.state.rating}</p>
          <div className="flex items-center">
          <Link onClick={()=>handleAddToCart(product.state.product_id)} to='/dashboard'  className="btn btn-outline btn-primary font-bold mt-2">
            Add To Cart <CiShoppingCart />
          </Link>
          <Link onClick={()=>handleAddToWhishlist(product.state.product_id)} to='/dashboard' className="btn btn-outline btn-primary ml-3 mt-1"><IoIosAddCircleOutline /></Link>
                
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
