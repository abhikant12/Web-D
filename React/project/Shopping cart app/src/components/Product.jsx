import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../redux/Slices/CartSlice";


function Product({post}){

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  function addToCart(){
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  function removeFromCart(){
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  return (

    <div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl">
    
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>

        <div className="h-[180px]">
          <img src={post.image} className="h-full w-full " />
        </div>

       <div className="flex justify-between gap-12 items-center w-full mt-5">
         
          <p className="text-green-600 font-semibold">${post.price}</p>
          { cart.some((p) => p.id == post.id) ? (
                                    <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase group-hover:bg-gray-700
                                    group-hover:text-white transition duration-300 ease-in" onClick = {removeFromCart}>  Remove Item </button> 
                                                ) : (
                                    <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase group-hover:bg-gray-700
                                    group-hover:text-white transition duration-300 ease-in" onClick={addToCart}> Add to Cart </button> 
                                                )}
        
       </div>
    
    </div>
  
)}


export default Product;



/*
in hover: button color change when we hover over botton but in button "group-hover:"  when we hover/(stay mouse) over cart on any place then 
button color change and it become dark so group-hover: means it combine whole group
*/

