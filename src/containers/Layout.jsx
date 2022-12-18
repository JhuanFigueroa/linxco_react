import React from 'react';
import Header from "@components/Header";
import Menu from "@components/Menu";


const Layout=({children})=>{
    return(
       <div className="Layaout">
           <Header/>
           <Menu/>
          <div
         className="main-root">
              {children}
          </div>

       </div>
    )
}

export default Layout;