import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";


function Cart(){

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price , 0) );
  }, [cart])


  return (

    <div>
        { cart.length <= 0 ? ( <div class="min-h-[80vh] flex flex-col items-center justify-center">
                              <h1 class="text-gray-700 font-semibold text-xl mb-2"> Your cart is empty! </h1>
                              <Link to = {"/"}> <button class="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider"> SHOP NOW </button>  </Link>
                              </div> ) : (              
                                
   <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">                                       
     <div class="w-[100%] md:w-[60%] flex flex-col p-2 ">
          <div> { cart.map( (item,index) => ( <CartItem key={item.id} item={item} itemIndex={index} len = {cart.length} /> )) }  </div>
     </div>    

     <div class="w-[100%] md:w-[40%] mt-5  flex flex-col">
             <div class="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">

                <div class="flex flex-col gap-5 ">
                  <div class="font-semibold text-xl text-green-800 ">YOUR CART</div>
                  <div class="font-semibold text-5xl text-green-700 -mt-5"> SUMMARY </div>
                  <p class="text-xl"> <span class="text-gray-700 font-semibold text-xl"> Total Items </span> : {cart.length} </p> 
                </div>

                <div  class="flex flex-col">
                  <p class="text-xl font-bold"> <span class="text-gray-700 font-semibold">Total Amount</span> : ${totalAmount}</p>
                  <button class="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl"> Checkout Now </button>       
                </div>
             </div>
     </div>
     
   </div>

        )}


    </div>

)}

export default Cart;
