import React from "react";
import Navbar from "./component/navbar.jsx";
import Home from "./component/home.jsx";
import Cards from "./component/cards.jsx";
import Footer from "./component/footer.jsx";


const Layout =()=>{
    return(
        <>

        <Navbar/>
        <div className="container">
        <Home/>
        <div className="col-12 d-flex">
        <Cards title=" titulo1" img="https://picsum.photos/id/237/50/50"/>
        <Cards title=" titulo2" img="https://picsum.photos/seed/picsum/50/50"/>
        <Cards title=" titulo5" img="https://picsum.photos/seed/picsum/50/50"/>
        <Cards title=" titulo4" img="https://placekitten.com/50/50"/>
        </div>
        </div>
        <Footer/> 
        </>
    )
}

export default Layout;