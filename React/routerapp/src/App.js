import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import { Link } from 'react-router-dom';
import MainHeader from './components/MainHeader';

function App() {
  return (

    <div className="App">

       <nav>                                                     {/* with the help of nav bar we make link like home,support,About,Labs.. */}
        <ul>                                                    {/* now when we click on like then this link redirect to "to" like "/" , "/support" , "/about" , "/labs". */}
          <li>  <NavLink to="/"> Home </NavLink> </li>                              
          <li> <NavLink to="/support">Support</NavLink>  </li>
          <li>  <NavLink to="/about">About</NavLink> </li>
          <li>  <NavLink to="/labs">Labs</NavLink> </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader/>} >
      
          <Route index element={<Home/>} />                      {/* Default Route */}
          <Route path="/support" element={<Support/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/labs" element={<Labs/>} />
          <Route path="*" element={<NotFound/>} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;



/*

To add React Router in your application, run this in the terminal from the root directory of the application :-  npm install react-router-dom
To  install Toast :- npm install react-toastify
To install icon :- npm install react-icons









React Router is a popular library that provides navigation and routing functionality to React applications. It allows you to create declarative
 routes and handle navigation between different components without the need for a full page reload. React Router helps in building single-page 
 applications (SPAs) by managing the UI state and rendering components based on the current URL.


 it means when we dont have to take props or context the variable we pass to another component by just navigating
 singhle link :- 
 ex :-
            function clickHandler()  navigate("/support");
            <button onClick={clickHandler}>Move to Support Page</button>
  
when we click on "Move to Support Page" button then this navigate to support component by help of (navigate("/support"));



ex:-                           <BrowserRouter>
                                    <Routes>
                                      <Route path="/" element={<Layout />}>
                                        <Route index element={<Home />} />
                                        <Route path="blogs" element={<Blogs />} />
                                        <Route path="contact" element={<Contact />} />
                                        <Route path="*" element={<NoPage />} />
                                      </Route>
                                    </Routes>
                                  </BrowserRouter>

We wrap our content first with <BrowserRouter>.
Then we define our <Routes>. An application can have multiple <Routes>. Our basic example only uses one.
<Route>s can be nested. The first <Route> has a path of / and renders the Layout component.
The nested <Route>s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.
The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.
Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.
 

*/