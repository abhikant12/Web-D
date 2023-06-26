import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"
import { Route, Routes, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";



export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();


useEffect(() => {
    const page =  searchParams.get("page") ?? 1;                 // it find searchparameter means if we are on any page then it store into page other wise 1 store in page;

    if(location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");                 // split("/") means it split all the pathname on basis of "/" and at(-1) means last index  of pathname
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");           // category store last index after spliting on basis of "/"
      fetchBlogPosts(Number(page), null, category);
    }
    else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search])                                  // blog render every time when any changes happens in loaction pathname or location search;



  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
       <Routes>
          <Route path="/" element = {<Home/>}   />
          <Route path="/blog/:blogId" element = {<BlogPage/>}   />
          <Route path="/tags/:tag" element = {<TagPage/>}   />
          <Route path="/categories/:category" element = {<CategoryPage/>}   />
       </Routes>
    </div>
  );

}


/*

React Router   offers 4 hooks that you can use in your react applications:

1) useHistory
2) useParams
3) useLocation
4) useRouteMatch

3)useLocation -> This  hook is a built in hook in the react-router-dom package that allows you to access 
access the current location in your React component. the  useLocation hook returns an object with the following properties


i) pathname :- The current URL pathname (excluding the domain and query parameters)
ii) search :- The query string in the current URL (including the "?" character )
iii) hash :- The anchor portion of the current URL (including the "#" character)
iv) state :- An optional state object that was passed to the current location  

 ex :- import {useLocation} from "react-router-dom";

        function MyComponent() {

        const location = useLocation();

        return (

        <div>

        <h1>Current Pathname: (location.pathname)</h1>

        <p>Current Search: (location.search)</p>

        <p>Current Hash: (location.hash)</p>

        </div>
  )}


In this example, the useLocation() hook is used to get the current location object, which includes the current URL pathname, search, and hash. This information can be used 
to render different content or components based on the current URL, or to update the URL programmatically using the history object. For example, you might use the location 
object to conditionally render different components based on the current URL pathname, or to extract query parameters from the search string and pass them as props to child 
components.






3) useSearchParams() -> The useSearchParams() hook is a built-in hook in the react-router-dom package that allows you to access and update the search parameters in
 the current URL query string. The hook returns an array with two items:

 URL :- http//march//abhi?tag = "friend"&&level = "A";

1.The first item is an object  that represents the search parameters in the current URL , here first item is (tag , level) = (friend , A)

2.The second item is a function that can be used to update the search parameters. When this function is called with a new SearchParama instance 
or an object of key- value pairs, the search parameters in the URL are updated accordingly.


ex :- 
            import {useSearchParams} from "react-router-dom";

            function MyComponent() {

            const [searchParams, setSearchParama] = useSearchParams();                

            const searchTerm = searchParams.get("q");                          // Get the value of a specific query parameter

            function handleSearch (query){                             // Update the search parameters when a button is clicked

            setSearchParams ({ q: query 1}) ;
           }


            return (

            <div>

            <h1>Search Results for "(searchTerm) "</h1>

            <button onClick={() => handleSearch ("react hooks")}> Search for "react hooks" </button>

            </div>
          )}

In this example, the useSearchParams() hook is used to get the value of the "q" query parameter from the current URL search parameters. The setSearchParams() 
function is also used to update the "q" query parameter when the user clicks a button, which will trigger a re-render of the component with the updated search 
parameters.




*/