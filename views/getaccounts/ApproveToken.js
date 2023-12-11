// import React, { useState } from 'react';
// import Web3 from 'web3';
// import { ContractABI } from '../getaccounts/ContractABI';
// import { Button, Form, Card } from 'react-bootstrap';

// const Write = () => {
//     const account = "0x50d0032257F98FfEE9492452121C9D1C584087d8";
//     const caccount = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

//     const web3Instance = new Web3(window.ethereum);
//     const contractInstance = new web3Instance.eth.Contract(
//         ContractABI,
//         caccount
//     );

//     const [tokenData, setTokenData] = useState([
//         { id: 1, name: 'Token 1' },
//         { id: 2, name: 'Token 2' },
//         // Add more tokens as needed
//     ]);

//     const handleIssueTokens = async (event) => {
//         event.preventDefault();

//         try {
//             for (const token of tokenData) {
//                 const toAddress = event.target.elements[`issueToAddress_${token.id}`].value;
//                 const amount = event.target.elements[`issueAmount_${token.id}`].value;

//                 await contractInstance.methods.issue(toAddress, amount).send({ from: account });
//                 console.log(`Issued ${amount} tokens to ${toAddress}`);
//             }
//         } catch (error) {
//             console.error('Error issuing tokens:', error);
//         }
//     };

//     return (
//         <div>
//             <p>Connected Account: {account}</p>

//             <Button onClick={handleIssueTokens} style={{ marginLeft: '20px' }}>Issue Tokens</Button>

//             <Card style={{ width: '18rem' }}>
//                 <Card.Body>
//                     <Form onSubmit={handleIssueTokens}>
//                         {tokenData.map((token) => (
//                             <div key={token.id}>
//                                 <Form.Group className="mb-3" controlId={`issueToAddress_${token.id}`}>
//                                     <Form.Label>{`Issue To Address (${token.name})`}</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder={`Enter recipient address for ${token.name}`}
//                                         className="form-control-sm"
//                                     />
//                                 </Form.Group>
//                                 <Form.Group className="mb-3" controlId={`issueAmount_${token.id}`}>
//                                     <Form.Label>{`Issue Amount (${token.name})`}</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder={`Enter amount for ${token.name}`}
//                                         className="form-control-sm"
//                                     />
//                                 </Form.Group>
//                             </div>
//                         ))}
//                         <Button variant="primary" type="submit">
//                             Issue Tokens
//                         </Button>
//                     </Form>
//                 </Card.Body>
//             </Card>
//         </div>
//     );
// };

// export default Write;
// import React, { useState, useEffect } from "react";
// import Web3 from "web3";
// import { ABI } from './ABI';
// import { Button, Form, Card } from 'react-bootstrap';

// const Write = () => {
//     const [currentAccount, setCurrentAccount] = useState(null);
//     const [spenderAddress, setSpenderAddress] = useState("");
//     const [myContract, setMyContract] = useState(null);

//     const [contractAddress, setContractAddress] = useState(
//         "0x1411B5ADcD381c6a40ac10a59De79259102f1565"
//     );

//     useEffect(() => {
//         if (window.ethereum) {
//             try {
//                 console.log("Initializing Web3...");
//                 const web3Instance = new Web3(window.ethereum);
//                 const contractInstance = new web3Instance.eth.Contract(
//                     ABI,
//                     '0x1411B5ADcD381c6a40ac10a59De79259102f1565',
//                 );
//                 setMyContract(contractInstance);

//                 window.ethereum.request({
//                     method: "eth_requestAccounts"
//                 }).then((accounts) => {
//                     setCurrentAccount(accounts[0]);
//                 });
//             } catch (error) {
//                 console.error("Error initializing Web3:", error);
//             }
//         } else {
//             console.error("MetaMask not installed.");
//         }
//     }, [contractAddress]);

//     const approveTokens = async () => {
//         try {
//             if (!currentAccount) {
//                 alert("Please connect your wallet first.");
//                 return;
//             }

//             await myContract.methods
//                 .approve(spenderAddress)
//                 .send({ from: currentAccount });

//             console.log(`Approved tokens for ${spenderAddress}`);
//         } catch (error) {
//             console.error("Error approving tokens:", error);
//         }
//     };

//     return (
//         <div className="col-md-4">
//             <Card style={{ width: '18rem' }}>
//                 <Card.Body>
//                     <Form onSubmit={(e) => {
//                         e.preventDefault();
//                         approveTokens();
//                     }}>
//                         <h4>Approve Tokens</h4>
//                         <div className="mb-3">
//                             <label htmlFor="spenderAddress" className="form-label">
//                                 Spender Address
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="spenderAddress"
//                                 value={spenderAddress}
//                                 onChange={(e) => setSpenderAddress(e.target.value)}
//                             />
//                         </div>
//                         <button type="submit" className="btn btn-primary">
//                             Approve Tokens
//                         </button>
//                     </Form>
//                 </Card.Body>
//             </Card>
//         </div>
//     );
// };

// export default Write;


import React, { useState } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { toast } from 'react-toastify';
import { ABI} from './ABI';
import { Button, Card, Container, Form } from 'react-bootstrap';

const ApproveToken = () => {
    const [account, setAccount] = useState('');
    const [web3, setWeb3] = useState(null);
    const [toAddress, setToAddress] = useState('');
    const contractAddress = '0x1411B5ADcD381c6a40ac10a59De79259102f1565';

    const connectWallet = async () => {
        try {
            const provider = await detectEthereumProvider();
            if (provider) {
                const web3Instance = new Web3(provider);
                setWeb3(web3Instance);

                const accounts = await web3Instance.eth.requestAccounts();
                setAccount(accounts[0]);
                toast.success('Successfully connected', { autoClose: 1000 });
            } else {
                alert('Please install MetaMask to use this feature');
            }
        } catch (error) {
            console.error('Error while connecting to MetaMask: ', error);
            toast.error('Error while connecting', { autoClose: 1000 });
        }
    };

    const handleTransfer = async (e) => {
        e.preventDefault();
        try {
            if (web3) {
                const contractInstance = new web3.eth.Contract(ABI, 
                    contractAddress);
                const transfered = await contractInstance.methods.approveToken(toAddress).send({ from: account });
                console.log(transfered, 'transferred');
            } else {
                console.error('Web3 not initialized.');
                toast.error('Web3 is not initialized', { autoClose: 1000 });
            }
        } catch (error) {
            console.error('Error transferring funds:', error.message);
        }
        setToAddress('');
    };

    return (
        <Container className="homecon" style={{ height: '800px' }}>
        <Container style={{ padding: '50px' }}>
        <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>MetaMask</Card.Title>
                    <Button
                        className="button"
                        type="submit"
                        onClick={connectWallet}
                        style={{
                            borderRadius: '10px',
                            color: 'white',
                            backgroundColor: 'indigo',
                            border: 'none',
                            padding: '10px',
                            margin: '2px',
                        }}
                    >
                        {account ? <h5>{account}</h5> : 'Connect'}
                    </Button>
                </Card.Body>
            </Card>
        </Container>
        <Container style={{ paddingLeft: '50px', paddingRight: '50px' }}>
        <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Transfer Form</Card.Title>
                    <Form className="formhook" onSubmit={handleTransfer}>
                        <Form.Label htmlFor="toaddress" style={{ color: 'white' }}>
                            To Address:
                        </Form.Label>
                        <Form.Control
                            className="form-control"
                            id="toaddress"
                            autoFocus
                            value={toAddress}
                            onChange={(e) => setToAddress(e.target.value)}
                        />

                        <Button
                            className="button"
                            type="submit"
                            style={{
                                borderRadius: '10px',
                                color: 'white',
                                backgroundColor: 'indigo',
                                border: 'none',
                                padding: '10px',
                                marginTop: '20px',
                            }}
                        >
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    </Container>
    );
};

export default ApproveToken;
