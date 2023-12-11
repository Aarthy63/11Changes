import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem, NavLink
} from 'reactstrap';

import Header from "../../components/GovHeader/GovHeader";

import gvrPrflImg from '../../assets/images/gvr-prfl-img.png';
import tickIcon from '../../assets/images/tick-icon.svg';
import hdrCopyIcon from '../../assets/images/hdr-copy-icon.svg';
import backArrow from '../../assets/images/backArrow.svg';
import infoIcon from '../../assets/images/info-icon.svg';
import profile from '../../assets/images/profile.png';
import telegram from '../../assets/images/telegram.svg';
import twitter from '../../assets/images/twitter.svg';
import discord from '../../assets/images/discord.svg';
import insta from '../../assets/images/insta.svg';



import ReactDOM from "react-dom";
import {
	BrowserRouter, Navigate, Route, Routes, Link
 } from 'react-router-dom';

 
 const DsbPages = (props) => {

  
    return (
      <Fragment>
        <Header />
        <div className="Main-section ">
            <div className="container container-1200">
                <div className="GvrnceMain">
                    <div className="row mx-0">
                        <div className="col DbSdCol px-0">
                            <div className="GoverSdmnu">
                                <div className="DbSdMnu dbScrl">
                                    <div className="DbSdMnuTop">
                                        <div className="MblViewCnt">
                                            <ul className="d-flex align-items-center">
                                                <li>
                                                    <button className="btn AftrLgnBtn Btn202-42"><span><img src={hdrCopyIcon} alt="" className="img-fluid" /> </span>0x35sdf41g6sd4gs...</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dbSbMenu">
                                            <ul className="pt-4">
                                                <li className="">
                                                    <a href="governance.html">
                                                        <span className="sbMTx">General</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="new-proposal.html">

                                                        <span className="sbMTx">Voting</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="stake.html">

                                                        <span className="sbMTx">Members</span>
                                                    </a>
                                                </li>
                                                  <li className="">
                                                    <a href="stake.html">

                                                        <span className="sbMTx">Members</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col DbMainCnt">
                            <div className="PrpsalMain BluBgLight1">
                                <div className="BluBg107 mb-4">
                                    <div className="settingsHeading mb-4">
                                        <a><img src={backArrow} className="mr-3" /></a>
                                        <h3>Settings</h3>
                                    </div>
                                    <div className="BluDrkBg mb-4">
                                        <p><img src={infoIcon} alt="" className="img-fluid mr-2" /> You are in view only mode, to modify space settings connect with a controller or admin wallet.</p>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <h3 className="secHeading">Profile</h3>
                                        <div className="BluDrkBg mb-4">
                                            <div className="d-flex flex-wrap">
                                                <div className="profPicCnt mb-auto">
                                                    <img src={profile} className="profPic" />
                                                </div>
 
                                                <form className="SupprtFrmMain NewPrpsFrm w-75">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="form-group ">
                                                                <label for="inputEmail4" className="FrmLbl">Name</label>
                                                                <input type="text" className="form-control pl-4" placeholder="Name" />
                                                            </div>
                                                            <div className="form-group ">
                                                                <label for="inputEmail4" className="FrmLbl">About</label>
                                                                <textarea className="form-control pl-4" placeholder="About"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column">
                                        <h3 className="secHeading">Social Accounts</h3>
                                        <div className="BluDrkBg mb-4">
                                            <div className="d-flex flex-wrap">
                                                <div className="socialCnt">
                                                    <div className="socialIcon">
                                                        <img src={telegram} />
                                                    </div>
                                                    <p className="mb-0">eg: teleport@123</p>
                                                </div>

                                                <div className="socialCnt">
                                                    <div className="socialIcon">
                                                        <img src={twitter} />
                                                    </div>
                                                    <p className="mb-0">eg: teleport@123</p>
                                                </div>

                                                <div className="socialCnt">
                                                    <div className="socialIcon">
                                                        <img src={discord} />
                                                    </div>
                                                    <p className="mb-0">eg: teleport@123</p>
                                                </div>

                                                <div className="socialCnt">
                                                    <div className="socialIcon">
                                                        <img src={insta} />
                                                    </div>
                                                    <p className="mb-0">eg: teleport@123</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
		
      </Fragment>
    );
    
}

export default DsbPages;