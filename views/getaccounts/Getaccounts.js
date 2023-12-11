import React, { useState, Fragment, useEffect } from "react";
import Web3 from "web3";
import { ContractABI } from "./ContractABI";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  Container, Row, Col, Modal, ModalHeader, ModalBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem, NavLink
} from 'reactstrap';
import metamask from '../../assets/images/MetaMask.svg';
import logoInr from '../../assets/images/logo.png';
import mdlCloseIcon from '../../assets/images/mdl-close-icon.svg';

const Getaccounts = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(0);
  const [web3, setWeb3] = useState(null);
  const [block, setBlock] = useState();
  const [currentAccount, setCurrentAccount] = useState(null);
  const [myContract, setMyContract] = useState(null); // State to store contract instance
  const [contractAddress, setContractAddress] = useState("0x8c851d1a123ff703bd1f9dabe631b69902df5f97");
  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);



  useEffect(() => {
    if (window.ethereum) {
      try {
        console.log("Initializing Web3...");
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        const contractAddress = "0x50d0032257F98FfEE9492452121C9D1C584087d8";
        const contractInstance = new web3Instance.eth.Contract(ContractABI,
          contractAddress);
        setMyContract(contractInstance);
      } catch (error) {
        console.error("Error initializing Web3:", error);
      }
    } else {
      console.error("MetaMask not installed.");
    }
  }, []);

  const handleAllActions = async () => {
    try {
      console.log("Requesting accounts...");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      console.log("Connected accounts:", accounts);
      setAddress(accounts);
      setCurrentAccount(accounts[0]);

      if (accounts.length > 0) {
        web3.eth.getBalance(accounts[0]).then((balance) => {
          const balanceInEther = web3.utils.fromWei(balance, "ether");
          console.log("Balance in Ether:", balanceInEther);
          setBalance(balanceInEther);
        });
      } else {
        console.error("MetaMask not connected. Please connect your wallet.");
      }
      console.log("Switching network...");
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            chainId: "0x38"
          }
        ]
      });

      console.log("Network switched successfully.");

      console.log("Fetching block number...");
      const blockNumber = await web3.eth.getBlockNumber();
      console.log("Block number:", blockNumber);
      setBlock(blockNumber);

      if (!currentAccount) {
        alert("Please connect your wallet first.");
        return;
      }

      console.log("Interacting with the contract...");
      //const contractResult = await interactWithContract();
      //console.log("Contract interaction result:", contractResult);
    } catch (error) {
      console.error("Error in handleAllActions:", error);
    }

  }


  return (
    <Fragment>
      <div class="DskTpViewCnt">
        <ul class="d-flex align-items-center">
          <li>
            <button class="btn BtnPrimry mr-3 Btn160-42" onClick={toggle}>Connect Wallet</button>
          </li>
        </ul>
      </div>
     <Modal isOpen={modal} toggle={toggle} modalClassName="fade CmmnMdl ClaimMdl" className="modal-dialog-centered">
        <div className="BluBg107 ClaimMdlSec mb-4">
          <div className="BwCloseIcn">
            <button className="btn btn-link close" type="button" onClick={toggle}><img src={mdlCloseIcon} alt="" className="img-fluid" /> </button>
          </div>
          <div className="ClmRwrdHdd mb-4 text-center">
            <h5>Connect Wallet</h5>
          </div>
          <div className="StkBlnDtlsFlx d-block">
            <div className="StkBlnDtls1">
              <img src={metamask} className="img-fluid d-block mx-auto" />
              <p className="text-center" style={{ marginTop: '-25px' }}>Metamask</p>
              <button onClick={handleAllActions} className="btn BtnPrimry Btn120-42 center" style={{ marginLeft:'80px'}}>
                       Connect Wallet
              </button>
              {block && (
          <>
            <p><strong>Block Number:</strong> {parseInt(block)}</p>
          </>
        )}
        <br />
        <p>Connected Account: {currentAccount || "Not connected"}</p>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};



export default Getaccounts;
