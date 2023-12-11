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
import gvrncLogoIcon from '../../assets/images/gvrnc-logo-icon.svg';
import vrifyIcon from '../../assets/images/vrify-icon.svg';
import ntfyIcon from '../../assets/images/ntfy-icon.svg';



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
                                            <div className="OSIZHdrDtls text-center">
                                                <div className="GovrImg mb-4">
                                                    <img src={gvrncLogoIcon} alt="" className="img-fluid" />
                                                </div>
                                                <div className="GvrnCnt">
                                                    <h4>OSIZ<span className="VrfyIcon ml-1"><img src={vrifyIcon} alt="" /></span></h4>
                                                    <p>200K Members</p>
                                                </div>
                                                <div className="">
                                                    <a href="#" className="btn BtnPrimry Btn120-42">
                                                        Join
                                                    </a>
                                                    <a href="" className="btn BtnNtfy"><img src={ntfyIcon} alt="" /></a>
                                                </div>
                                            </div>
                                            <ul className="mt-5 pt-4">
                                                <li className="">
                                                    <a href="governance.html">
                                                        <span className="sbMTx">proposals</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="new-proposal.html">

                                                        <span className="sbMTx">New proposals</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="stake.html">

                                                        <span className="sbMTx">Settings</span>
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
                                <div className="PrpsalHddFlx">
                                    <div className="PrpsalHdd">
                                        <h2>Proposals</h2>
                                    </div>
                                    <div className="PrpsSrch">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control SearchInpt" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <span className="input-group-text" id="basic-addon2">
                                                    <select className="form-control" id="inputGroupSelect01">
                                                        <option selected>ALL</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                    </select>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="BluBg107 mb-4">
                                    <div className="PrpsCntHddFlx">
                                        <div className="PrpsCntPrfl">
                                            <h4><span><img src={gvrPrflImg} className="img-fluid mr-2" />Steve Mclare</span></h4>
                                        </div>
                                        <div className="ClBtn">
                                            <button className="btn ClosBtn" type="button">Closed</button>
                                        </div>
                                    </div>
                                    <div className="PrpsCnt my-3">
                                        <h4>OIP-140: Gearbox Lending AMO</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur. Nascetur a gravida aliquet pretium tempor facilisi. Tortor praesent in nunc ultrices amet. Quis at ipsum condimentum aenean libero pulvinar.Lorem ipsum dolor sit amet consectetur.
                                            Nascetur a gravida aliquet pretium tempor facilisi. Tortor</p>
                                    </div>
                                    <div className="ApprStsFlx Wdth100 mb-2">
                                        <h4><img src={tickIcon} className="img-fluid mr-3" alt="" /> Approve OIP-140<span className="ml-2">117K OHM</span> </h4>
                                        <h4>100%</h4>
                                    </div>
                                    <div className="ApprStsFlx Wdth50 mb-2">
                                        <h4><img src={tickIcon} className="img-fluid mr-3 d-none" alt="" /> Reject OIP-132<span className="ml-2">63 OHM</span> </h4>
                                        <h4>50%</h4>
                                    </div>
                                    <div className="DateCnt mt-3">
                                        <p>Ended 2 Months ago</p>
                                    </div>
                                </div>
                                <div className="BluBg107 mb-4">
                                    <div className="PrpsCntHddFlx">
                                        <div className="PrpsCntPrfl">
                                            <h4><span><img src={gvrPrflImg} className="img-fluid mr-2" />Steve Mclare</span></h4>
                                        </div>
                                        <div className="ClBtn">
                                            <button className="btn ClosBtn" type="button">Closed</button>
                                        </div>
                                    </div>
                                    <div className="PrpsCnt my-3">
                                        <h4>OIP-140: Gearbox Lending AMO</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur. Nascetur a gravida aliquet pretium tempor facilisi. Tortor praesent in nunc ultrices amet. Quis at ipsum condimentum aenean libero pulvinar.Lorem ipsum dolor sit amet consectetur.
                                            Nascetur a gravida aliquet pretium tempor facilisi. Tortor</p>
                                    </div>
                                    <div className="ApprStsFlx Wdth100 mb-2">
                                        <h4><img src={tickIcon} className="img-fluid mr-3" alt="" /> Approve OIP-140<span className="ml-2">117K OHM</span> </h4>
                                        <h4>100%</h4>
                                    </div>
                                    <div className="ApprStsFlx Wdth50 mb-2">
                                        <h4><img src={tickIcon} className="img-fluid mr-3 d-none" alt="" /> Reject OIP-132<span className="ml-2">63 OHM</span> </h4>
                                        <h4>50%</h4>
                                    </div>
                                    <div className="DateCnt mt-3">
                                        <p>Ended 2 Months ago</p>
                                    </div>
                                </div>
                                <div className="BluBg107 mb-4">
                                    <div className="PrpsCntHddFlx">
                                        <div className="PrpsCntPrfl">
                                            <h4><span><img src={gvrPrflImg} className="img-fluid mr-2" />Steve Mclare</span></h4>
                                        </div>
                                        <div className="ClBtn">
                                            <button className="btn ClosBtn" type="button">Closed</button>
                                        </div>
                                    </div>
                                    <div className="PrpsCnt my-3">
                                        <h4>OIP-140: Gearbox Lending AMO</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur. Nascetur a gravida aliquet pretium tempor facilisi. Tortor praesent in nunc ultrices amet. Quis at ipsum condimentum aenean libero pulvinar.Lorem ipsum dolor sit amet consectetur.
                                            Nascetur a gravida aliquet pretium tempor facilisi. Tortor</p>
                                    </div>
                                    <div className="ApprStsFlx Wdth100 mb-2">
                                        <h4><img src={tickIcon} className="img-fluid mr-3" alt="" /> Approve OIP-140<span className="ml-2">117K OHM</span> </h4>
                                        <h4>100%</h4>
                                    </div>
                                    <div className="ApprStsFlx Wdth50 mb-2">
                                        <h4><img src={tickIcon} className="img-fluid mr-3 d-none" alt="" /> Reject OIP-132<span className="ml-2">63 OHM</span> </h4>
                                        <h4>50%</h4>
                                    </div>
                                    <div className="DateCnt mt-3">
                                        <p>Ended 2 Months ago</p>
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