import React from 'react'
import './Headerbook.css'
//import img1 from './img/bh.png';
//import person from './img/person.png';
//import home from './img/home.png';
//import login from './img/reg.png';
export default function Header() {
  return (
    <div className="d-flex flex-row">
    <header classname="header" text-align= "left" display= "flex" align-items= "center" justify-content= "left"
      padding= "0 10px"
      width= "100vw"
      background-image= "linear-gradient(to left, #20364e, #315070)"
      style={{
        color: "rgb(252, 249, 249)",
        backgroundImage: "linear-gradient(0deg, #23374D,#23374D)",
        display: "flex"
      }}>
      <div classname="header_img_div">
        <img
          src="./img/bh.png"
          height="130px"
          width="130px"
          margin="0%"
          padding-right="2px"
    />
      </div>
      <ul classname="fontt" display="flex">
        <li>
          <a href="home.html">
           <img src="./img/home.png" width="20px" height="20px" />
            &nbsp;&nbsp;<b>HOME&nbsp;&nbsp;&nbsp;&nbsp;</b>
          </a>
        </li>
      
      <li>
        <a href="login.html">
          <img src="./img/login.png" width="18px" height="20px" />
          &nbsp;&nbsp;<b>LOGIN&nbsp;&nbsp;&nbsp;&nbsp;</b>
        </a>
      </li>
      <li>
        <a href="addBook.html">
          <img src="./img/reg.png" width="18px" height="20px" />
          &nbsp;&nbsp;<b>REGISTER</b>
        </a>
      </li>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <li classname="dropdown">
        {" "}
        <a href="#">
          <button classname="dropbtn">
            <img src="./img/person.png" width="70px" height="70px" />
          </button>
        </a>
        <div classname="dropdown-content">
          <a href="#"></a>
          <a href="" classname="drop">
            Shivalika
          </a>
        </div>{" "}
      </li>{" "}
      </ul>
    </header>
  </div>
  )
}
