import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (
  
    <div>
        <div className="bg-slate-900">
           <Navbar/>
         </div>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
  </div>
  
)}

export default App;










/*
To install the reduxjs Toolkit run following command :- npm install @reduxjs/toolkit react-redux


What is Redux Toolkit  :-  Redux Toolkit is our official, opinionated, batteries-included toolset for efficient Redux development. It is intended to be the 
standard way to write Redux logic, and  Redux Toolkit makes it easier to write good Redux applications and speeds up development

It includes several utility functions that simplify the most common Redux use cases, including store setup, defining reducers, immutable update logic, and even 
creating entire "slices" of state at once without writing any action creators or action types by hand. It also includes the most widely used Redux addons, like Redux
Thunk for async logic and Reselect for writing selector functions, so that you can use them right away. It lets you decide how you want to handle everything,
like store setup, what your state contains, and how you want to build your reducers.


 install :- npm install @reduxjs/toolkit


 Redux Toolkit includes these APIs:

configureStore(): configureStore sets up a well-configured Redux store with a single function call, including combining reducers, adding the 
thunk middleware, and setting up the Redux DevTools integration. It also is easier to configure than createStore , because it takes named options parameters.

What Is Redux Middleware :-  Redux Middleware allows you to intercept every action sent to the reducer so you can make changes to the action or cancel the action.
Middleware helps you with logging, error reporting, making asynchronous requests, and a whole lot more   (intercept means rokna)


createReducer(): that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it 
automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.

createAction(): generates an action creator function for the given action type string. The function itself has toString() defined, so that it can be used
 in place of the type constant.

createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with 
corresponding action creators and action types.

createAsyncThunk: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected
 action types based on that promise

createEntityAdapter: generates a set of reusable reducers and selectors to manage normalized data in the store

**** we use useselector to fetch the data from slice like :- const count = useSelector((state) => state.counter.value):
     we use here counter because we have created createSlice() named "counterSlice";

**** we use useDispatch() to call function like :-  const dispatch = useDispatch(); then call function like dispatch(remove(item));

    

*/