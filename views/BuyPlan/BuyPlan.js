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

 
 const BuyPlan = (props) => {

  
    return (
      <Fragment>

        <div className="DbCntMain">
            <div className="BluBg107 SwapMainSec BluBgLight">
                <div className="SwpHdd mb-4">
                    <h4>Buy Plan</h4>
                </div>
                <div class="row justify-content-center">
      <div class="col-xl-6 col-lg-8 col-md-10">
        <div class="buy_tl">
          <div class="comhd text-center mb-3 pb-2">
            <h2>Silver</h2>
          </div>
          <div class="mb-30">
            <div class="ampcd d-flex align-items-center justify-content-between flex-wrap">
              <h1>Amount to Invest (USDT) <span class="sancl">*</span> </h1>
              <h2>Balance: <span>0.5471</span></h2>
            </div>
            <div class="d-md-flex align-items-center justify-content-between">
              <div class="maxin mr-md-3">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="0.00"/>
                  <div class="input-group-append">
                    <button class="btn " type="button">Max</button>
                  </div>
                </div>
              </div>
              <div>
                <button class="btn coinsw mb-3">
                  <span class="mr-2"> <img src="assets/image/coin6.png" alt=""/></span>
                  <span> USDT</span>
                </button>
              </div>
            </div>
          </div>
          <div class="mb-30">
            <div class="ampcd d-flex align-items-center justify-content-between flex-wrap">
              <h1>Duration </h1>
            </div>
            <div>
              <div class="maxin2    mb-3 w-100">
                <input type="text" class="form-control" placeholder="2 Months"/>
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center  mb-3">
            <div class="mr-2">
              <label class="cuschk">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="Agrcd2">
              <h1>Yes, <span>I want Vacation & Christmas Money</span> </h1>
            </div>
          </div>
          <div class="feescd d-flex align-items-center justify-content-between flex-wrap">
            <h1>Fees</h1>
            <h1>0.5 ETH</h1>
          </div>
        </div>

      </div>
      <div class="col-xl-5 col-lg-8 col-md-10">
        <div class="summcrd">
          <div class="summcrdin1">
            <h1>Summary</h1>
            <div class="d-flex align-items-center justify-content-between flex-wrap">
              <h2>Investment</h2>
              <h3>500.00 USDT</h3>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap">
              <h2>Up to APR% (Get Interest)</h2>
              <h4>1000.00 USDT</h4>
            </div>
            <div class="d-flex align-items-center justify-content-between flex-wrap">
              <h2>Investment Duration</h2>
              <h4>2 Months</h4>
            </div>
          </div>
          <div class="summcrdin2">
            <div class="mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1088_14099)">
                  <path
                    d="M12 2C17.523 2 22 6.477 22 12C22.0021 14.6255 20.9715 17.1464 19.1309 19.0186C17.2902 20.8908 14.7872 21.9641 12.162 22.0066C9.53689 22.0491 7.00034 21.0576 5.1 19.246C3.19966 17.4344 2.08799 14.9482 2.005 12.324L2 12L2.004 11.72C2.152 6.327 6.57 2 12 2ZM12 11H11L10.883 11.007C10.64 11.0359 10.4159 11.153 10.2534 11.336C10.0909 11.519 10.0011 11.7552 10.0011 12C10.0011 12.2448 10.0909 12.481 10.2534 12.664C10.4159 12.847 10.64 12.9641 10.883 12.993L11 13V16L11.007 16.117C11.0333 16.3402 11.1341 16.5481 11.293 16.707C11.4519 16.8659 11.6598 16.9667 11.883 16.993L12 17H13L13.117 16.993C13.3402 16.9667 13.5481 16.8659 13.707 16.707C13.8659 16.5481 13.9667 16.3402 13.993 16.117L14 16L13.993 15.883C13.9691 15.679 13.8829 15.4873 13.7462 15.3339C13.6095 15.1806 13.4289 15.0731 13.229 15.026L13.117 15.006L13 15V12L12.993 11.883C12.9667 11.6598 12.8659 11.4519 12.707 11.293C12.5481 11.1341 12.3402 11.0333 12.117 11.007L12 11ZM12.01 8L11.883 8.007C11.64 8.03591 11.4159 8.15296 11.2534 8.33597C11.0909 8.51897 11.0011 8.75524 11.0011 9C11.0011 9.24476 11.0909 9.48103 11.2534 9.66403C11.4159 9.84704 11.64 9.96409 11.883 9.993L12 10L12.127 9.993C12.37 9.96409 12.5941 9.84704 12.7566 9.66403C12.9191 9.48103 13.0089 9.24476 13.0089 9C13.0089 8.75524 12.9191 8.51897 12.7566 8.33597C12.5941 8.15296 12.37 8.03591 12.127 8.007L12.01 8Z"
                    fill="#C9A861" />
                </g>
                <defs>
                  <clipPath id="clip0_1088_14099">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h1>Cashflow Saving Book</h1>
            <h2>Vacation Money 50.00 USDT to claim</h2>
            <h2>Christmas Money 50.00 USDT to claim</h2>

          </div>
          <div class="d-flex align-items-center mb-3">
            <div class="mr-2"><label class="cuschk"><input type="checkbox" />
            <span class="checkmark"></span></label></div>
            <div class="Agrcd">
              <h1>I agree to the <a href="">Terms of Service</a>
              </h1>
            </div>
          </div>
          <button class="btn BtnPrimry w-100 mt-4"><span>  Confirm </span></button>
        </div>
      </div>
    </div>
             
                
            </div>
        </div>
		
      </Fragment>
    );
    
}

export default BuyPlan;