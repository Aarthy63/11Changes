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
import user from '../../assets/images/user.png';
import closeIcon from '../../assets/images/closeIcon.svg';



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
                                        <h3 className="secHeading">Members</h3>
                                        <div className="BluDrkBg NewPrpsFrm mb-4">
                                            <p>Add Members<img src={infoIcon} alt="" className="img-fluid ml-2" /></p>
                                            <form className="form mt-3 SupprtFrmMain NewPrpsFrm">
                                                <div className="form-row">
                                                    <div className="form-group col-md-8">
                                                        <input type="text" className="form-control" id="inputCity" />
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <select id="inputState" className="form-control">
                                                            <option selected>Tamilnadu</option>
                                                            <option>...</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-12">
                                                        <div className="membersRow">
                                                            <img src={user} className="mr-2" />
                                                            <h3>0xsd3f1d6sd74gv...</h3>
                                                            <div className="ml-auto">
                                                                <select className="adminSelect mr-2">
                                                                    <option>Admin</option>
                                                                    <option>Admin1</option>
                                                                    <option>Admin2</option>
                                                                    <option>Admin3</option>
                                                                </select>
                                                                <a href=""><img src={closeIcon} /></a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="membersRow">
                                                            <img src={user} className="mr-2" />
                                                            <h3>0xsd3f1d6sd74gv...</h3>
                                                            <div className="ml-auto">
                                                                <select className="mr-2">
                                                                    <option>Author</option>
                                                                    <option>Author1</option>
                                                                    <option>Author2</option>
                                                                    <option>Author3</option>
                                                                </select>
                                                                <a href=""><img src={closeIcon} /></a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="membersRow">
                                                            <img src={user} className="mr-2" />
                                                            <h3>0xsd3f1d6sd74gv...</h3>
                                                            <div className="ml-auto">
                                                                <select className="mr-2">
                                                                    <option>Author</option>
                                                                    <option>Author1</option>
                                                                    <option>Author2</option>
                                                                    <option>Author3</option>
                                                                </select>
                                                                <a href=""><img src={closeIcon} /></a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="membersRow">
                                                            <img src={user} className="mr-2" />
                                                            <h3>0xsd3f1d6sd74gv...</h3>
                                                            <div className="ml-auto">
                                                                <select className="mr-2">
                                                                    <option>Author</option>
                                                                    <option>Author1</option>
                                                                    <option>Author2</option>
                                                                    <option>Author3</option>
                                                                </select>
                                                                <a href=""><img src={closeIcon} /></a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="membersRow">
                                                            <img src={user} className="mr-2" />
                                                            <h3>0xsd3f1d6sd74gv...</h3>
                                                            <div className="ml-auto">
                                                                <select className="mr-2">
                                                                    <option>Author</option>
                                                                    <option>Author1</option>
                                                                    <option>Author2</option>
                                                                    <option>Author3</option>
                                                                </select>
                                                                <a href=""><img src={closeIcon} /></a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="membersRow">
                                                            <img src={user} className="mr-2" />
                                                            <h3>0xsd3f1d6sd74gv...</h3>
                                                            <div className="ml-auto">
                                                                <select className="mr-2">
                                                                    <option>Author</option>
                                                                    <option>Author1</option>
                                                                    <option>Author2</option>
                                                                    <option>Author3</option>
                                                                </select>
                                                                <a href=""><img src={closeIcon} /></a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="membersRow">
                                                            <img src={user} className="mr-2" />
                                                            <h3>0xsd3f1d6sd74gv...</h3>
                                                            <div className="ml-auto">
                                                                <select className="mr-2">
                                                                    <option>Author</option>
                                                                    <option>Author1</option>
                                                                    <option>Author2</option>
                                                                    <option>Author3</option>
                                                                </select>
                                                                <a href=""><img src={closeIcon} /></a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="membersRow">
                                                            <img src={user} className="mr-2" />
                                                            <h3>0xsd3f1d6sd74gv...</h3>
                                                            <div className="ml-auto">
                                                                <select className="mr-2">
                                                                    <option>Author</option>
                                                                    <option>Author1</option>
                                                                    <option>Author2</option>
                                                                    <option>Author3</option>
                                                                </select>
                                                                <a href=""><img src={closeIcon} /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
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