import React ,{useEffect} from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';


const Navbar =() =>{
    function animation(){
        var tabsNewAnim = $('#navbarSupportedContent');
        var activeItemNewAnim = tabsNewAnim.find('.activen');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
          "top":itemPosNewAnimTop.top + "px", 
          "left":itemPosNewAnimLeft.left + "px",
          "height": activeWidthNewAnimHeight + "px",
          "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click","li",function(e){
          $('#navbarSupportedContent ul li').removeClass("activen");
          $(this).addClass('activen');
          var activeWidthNewAnimHeight = $(this).innerHeight();
          var activeWidthNewAnimWidth = $(this).innerWidth();
          var itemPosNewAnimTop = $(this).position();
          var itemPosNewAnimLeft = $(this).position();
          $(".hori-selector").css({
            "top":itemPosNewAnimTop.top + "px", 
            "left":itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
          });
        });
      }
    
      useEffect(() => {
        
        animation();
        $(window).on('resize', function(){
          setTimeout(function(){ animation(); }, 500);
        });
        
      }, []);
    return(
        <nav className="navbar navbar-expand-lg navbar-mainbg text-white">
            <NavLink className="font-italic font-weight-bold navbar -brand navbar-logo" to="/" exact>
                COVID19
            </NavLink>
            <button 
            onClick={ function(){
                setTimeout(function(){ animation(); });
              }}
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <div className="hori-selector">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>

                    <li className="nav-item activen">
                        <NavLink className="font-weight-bold nav-link" to="/" exact>
                            {/* <i className="fas fa-tachometer-alt"></i> */}
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className=" font-weight-bold nav-link" to="/world" exact>
                            {/* <i className="fas fa-tachometer-alt"></i> */}
                            WorldData
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="font-weight-bold nav-link" to="/worldmap" exact>
                            {/* <i className="fas fa-tachometer-alt"></i> */}
                            Worldmap
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className=" font-weight-bold nav-link" to="/about" exact>
                            {/* <i className="fas fa-tachometer-alt"></i> */}
                            About
                        </NavLink>
                    </li>
                    <li className="font-weight-bold nav-item">
                        <NavLink className="nav-link" to="/chat" exact>
                            Chat
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;


