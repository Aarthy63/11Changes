import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem, NavLink
} from 'reactstrap';

import stkUnstkImg1 from '../../assets/images/stk-unstk-img1.svg';
import swpIcon2 from '../../assets/images/swp-icon2.svg';



import ReactDOM from "react-dom";
import {
	BrowserRouter, Navigate, Route, Routes, Link
 } from 'react-router-dom';

 
 const PlanList = (props) => {

  
    return (
      <Fragment>

        <div className="DbCntMain">
            <div className="BluBg107 SwapMainSec BluBgLight">
                <div className="SwpHdd mb-4">
                    <h4>Plan List</h4>
                </div>
                <div class="row">
      <div class="col-xl-4">
        <div class="silustd">
          <div class="silcd">
            <h1>Silver</h1>
            <label>Minimum</label>
            <h2> <span class="mr-1">500</span>USDT<span class="ml-1"><img src="assets/image/coin8.png" alt=""/></span>
            </h2>
            <div class="d-flex align-items-center justify-content-between mt-4">
              <h3>Life Span<br/>
                <span class="numsp">2</span> <span class="numsp2">Months</span></h3>
              <h4> Rewards<br/>
                Up to <span class="numsp"> 100</span> <span class="perval">%</span> </h4>
            </div>

            <button  class="btn BtnPrimry w-100 mt-4"><span > Invest Now
              </span></button>

          </div>

        </div>
      </div>
      <div class="col-xl-4">
        <div class="silustd silustd2">
          <div class="silcd">
            <h1>Gold</h1>
            <label>Minimum</label>
            <h2> <span class="mr-1">2000</span>USDT<span class="ml-1"><img src="assets/image/coin8.png" alt=""/></span>
            </h2>
            <div class="d-flex align-items-center justify-content-between mt-4">
              <h3>Life Span<br/>
                <span class="numsp">3</span> <span class="numsp2">Months</span></h3>
              <h4> Rewards<br/>
                Up to <span class="numsp"> 200</span> <span class="perval">%</span> </h4>
            </div>

            <button  class="btn BtnPrimry w-100 mt-4"><span > Invest Now
              </span></button>


          </div>

        </div>
      </div>
      <div class="col-xl-4">
        <div class="silustd silustd3">
          <div class="silcd">
            <h1>Platinum</h1>
            <label>Minimum</label>
            <h2> <span class="mr-1">3000</span>USDT<span class="ml-1"><img src="assets/image/coin11.png" alt=""/></span>
            </h2>
            <div class="d-flex align-items-center justify-content-between mt-4">
              <h3>Life Span<br/>
                <span class="numsp">4</span> <span class="numsp2">Months</span></h3>
              <h4> Rewards<br/>
                Up to <span class="numsp"> 300</span> <span class="perval">%</span> </h4>
            </div>
            <button  class="btn BtnPrimry w-100 mt-4"><span > Invest Now
              </span></button>


          </div>
         

        </div>
      </div>
    </div>
                
            </div>
        </div>
		
      </Fragment>
    );
    
}

export default PlanList;