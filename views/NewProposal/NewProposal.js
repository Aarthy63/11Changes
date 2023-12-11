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

import newPrpsBckArrw from '../../assets/images/new-prps-bck-arrw.svg';
import infoIcon from '../../assets/images/info-icon.svg';
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
                    <div className="PrpsalMain ">
                        <div className="BluBg107 mb-4 CreatMain ">
                            <div className="NwPrpsHdd mb-4">
                                <h4><img src={newPrpsBckArrw} alt="" className="img-fluid" /> Create New Proposals</h4>
                            </div>
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="BluDrkBg mb-4">
                                        <p><img src={infoIcon} alt="" className="img-fluid mr-2" /> You need to be a core member of the space in order to submit a proposal.</p>
                                    </div>
                                    <form className="SupprtFrmMain NewPrpsFrm">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group ">
                                                    <label for="inputEmail4" className="FrmLbl">Title</label>
                                                    <input type="email" className="form-control pl-4" id="inputEmail4" placeholder="Growth" />
                                                </div>
                                                <div className="form-group TxtArea1">
                                                    <label for="exampleFormControlTextarea1" className="FrmLbl d-flex justify-content-between"><div>Description (optional)</div><div>0 / 14,400</div></label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                                    <p className="AreBtch">Attach images by dropping, selecting or pasting them.</p>
                                                </div>
                                                <div className="form-group DiscusInpt">
                                                    <label for="inputEmail4" className="FrmLbl">Discussion (optional)</label>
                                                    <input type="email" className="form-control" id="inputEmail4" placeholder="https//: forum.balance .fi/proposal" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-3">
                                    <div className="BluBg0b0 mb-4 PrpslBtn">
                                        <button className="btn PrvwBtn mb-2" type="button">Preview</button>
                                        <button className="btn PrvwBtn CntnueBtn mb-2" type="button">Continue</button>
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