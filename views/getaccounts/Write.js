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

import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { ContractABI } from "./ContractABI";
import { Button, Form, Card, CardBody } from 'react-bootstrap';

const Write = () => {
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState(0);
    const [web3, setWeb3] = useState(null);
    const [block, setBlock] = useState();
    const [currentAccount, setCurrentAccount] = useState(null);
    const [myContract, setMyContract] = useState(null);
    const [contractAddress, setContractAddress] = useState(
        "0x8c851d1a123ff703bd1f9dabe631b69902df5f97")

    const [valueInput, setValueInput] = useState("");
    const [toAddressBlackList, settoAddressBlackList] = useState("");
    const [toAddressInput, setToAddressInput] = useState("");

    const account = "0x50d0032257F98FfEE9492452121C9D1C584087d8";
    const caccount = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

    const web3Instance = new Web3(window.ethereum);

    const contractInstance = new web3Instance.eth.Contract(
        ContractABI,
        caccount
    );

    const [tokenData, setTokenData] = useState([
        { id: 1, name: "Token 1" },
        { id: 2, name: "Token 2" },
    ]);

    useEffect(() => {
    const contractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
   
        if (window.ethereum) {
            try {
                console.log("Initializing Web3...");
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);
                const contractInstance = new web3Instance.eth.Contract(
                    ContractABI,
                    contractAddress
                );
                setMyContract(contractInstance);
            } catch (error) {
                console.error("Error initializing Web3:", error);
            }
        } else {
            console.error("MetaMask not installed.");
        }
    }, [contractAddress]);

    const handleAllActions = async () => {
        try {
            console.log("Requesting accounts...");
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            
            console.log("Connected accounts:", accounts);

            if (accounts.length > 0) {
                setAddress(accounts[0]); // Update the address state
                setCurrentAccount(accounts[0]);

                web3.eth.getBalance(accounts[0]).then((balance) => {
                    const balanceInEther = web3.utils.fromWei(balance, "ether");
                    console.log("Balance in Ether:", balanceInEther);
                    setBalance(balanceInEther);
                });

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

                console.log("Interacting with the contract...");
                const contractResult = await interactWithContract();
                console.log("Contract interaction result:", contractResult);

                // After connecting, call the function to issue tokens
                await issueTokens();
            } else {
                console.error("MetaMask not connected. Please connect your wallet.");
            }
        } catch (error) {
            console.error("Error in handleAllActions:", error);
        }
    };

    const interactWithContract = async () => {
        if (!currentAccount) {
            alert("Please connect your wallet first.");
            return;
        }
        window.open(`https://bscscan.com/token/${contractAddress}#code`, '_blank');
    };

    const issueTokens = async () => {
        try {
            for (const token of tokenData) {
                const toAddress = currentAccount;
                const amount = 100;

                if (!toAddress) {
                    alert("Please connect your wallet first.");
                    return;
                }

                await myContract.methods
                    .issue(toAddress, amount)
                    .send({ from: currentAccount });
                console.log(`Issued ${amount} tokens to ${toAddress}`);
            }
        } catch (error) {
            console.error("Error issuing tokens:", error);
        }
    };

    const handleIssueTokens = async (event) => {
        event.preventDefault();

        try {
            for (const token of tokenData) {
                const toAddress = event.target.elements[`issueToAddress_${token.id}`].value;
                const amount = event.target.elements[`issueAmount_${token.id}`].value;

                await contractInstance.methods.issue(toAddress, amount).send({ from: account });
                console.log(`Issued ${amount} tokens to ${toAddress}`);
            }
        } catch (error) {
            console.error('Error issuing tokens:', error);
        }
    };
    const btnHandler = async () => {
        if (web3) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAddress(accounts[0]);

            if (accounts.length > 0) {
                web3.eth.getBalance(accounts[0]).then((balance) => {
                    const balanceInEther = web3.utils.fromWei(balance, "ether");
                    console.log(balanceInEther);
                });
            } else {
                console.error("MetaMask not connected. Please connect your wallet.");
            }
        } else {
            console.error("MetaMask not installed.");
        }
    };

    const pauseContract = async () => {
        try {
            await contractInstance.methods.pause().send({ from: account });
            console.log('Contract paused successfully');
        } catch (error) {
            console.error('Error pausing contract:', error);
        }
    };

    const unpauseContract = async () => {
        try {
            await contractInstance.methods.unpause().send({ from: account });
            console.log('Contract unpaused successfully');
        } catch (error) {
            console.error('Error unpausing contract:', error);
        }
    };

    const transferAmt = async (e) => {
        e.preventDefault();
        try {
            if (btnHandler) {
                const web3 = new Web3(window.ethereum);
                if (web3) {
                    const accounts = await web3.eth.getAccounts();

                    if (accounts.length > 0) {
                        // const toAddress = "0x96Bb411C9F4AC36Cfbf3AaB32bE43EC6408Fd64d";
                        const amount = web3.utils.toWei(valueInput, "ether");

                        const senderAddress = accounts[0];
                        console.log(senderAddress);

                        const transfered = await contractInstance.methods
                            .transfer(toAddressInput, amount)
                            .send({ from: senderAddress });

                        console.log(transfered, "transferred");
                    }
                }
            }
        } catch (error) {
            console.error("Error transferring funds:", error.message);
        }
    };

    const blackList = async (e) => {
        e.preventDefault();

        try {
            const web3 = new Web3(window.ethereum);
            if (web3) {
                const accounts = await web3.eth.getAccounts();
                if (accounts.length > 0) {
                }
                const res = await contractInstance.methods
                    .removeBlackList(toAddressBlackList)
                    .send({ from: accounts[0] });
                console.log(res, "Cleared Blacklist");
            }
        } catch (error) {
            console.error("Error transferring funds:", error.message);
        }
    };

    
const [approveAmount, setApproveAmount] = useState("");

  const approveTokens = async () => {
    try {
      if (!currentAccount) {
        alert("Please connect your wallet first.");
        return;
      }

      const spenderAddress = currentAccount; // Use the connected account as the spender address
      const amountToApprove = approveAmount; // Use the stored approval amount

      if (!amountToApprove) {
        alert("Please enter the approval amount.");
        return;
      }

      await myContract.methods
        .approve(spenderAddress, amountToApprove)
        .send({ from: currentAccount });

      console.log(`Approved ${amountToApprove} tokens for ${spenderAddress}`);
    } catch (error) {
      console.error("Error approving tokens:", error);
    }
  };

    return (
        <div className="App mt-5 ml-5">

            <div className="text-center" style={{ marginLeft: '30px' }}>
                <button onClick={handleAllActions} className="btn btn-primary">
                    Connect Wallet!
                </button>

                <h4 className="form-label p-2" >
                    <strong>Address: </strong>
                    {currentAccount ? (
                        <button className="btn btn-success">{address}</button>
                    ) : (
                        "Not connected"
                    )}
                </h4>
                <h4 className="form-label">
                    <strong>Balance: </strong>
                    {balance}
                </h4>
                {currentAccount && (
                    <>
                        <Button onClick={pauseContract}>Pause Contract</Button>
                        <Button onClick={unpauseContract} className="ms-2">
                            Unpause
                        </Button>
                        {block && (
                            <>
                                <p>
                                    <strong>Block Number:</strong> {parseInt(block)}
                                </p>
                            </>
                        )}
                    </>
                )}

                {currentAccount ? <div className="row mt-5 justify-content-center">
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Form onSubmit={transferAmt}>
                                    <h4>Transfer Amount</h4>
                                    <div className="mb-3">
                                        <label htmlFor="toAddressInput" className="form-label">
                                            To Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="toAddressInput"
                                            value={toAddressInput}
                                            onChange={(e) => setToAddressInput(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="valueInput" className="form-label">
                                            Value (in Ether)
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="valueInput"
                                            value={valueInput}
                                            onChange={(e) => setValueInput(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Transfer Amount
                                    </button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="col-md-4">
                        <Card style={{ width: '18rem', marginRight: '20px' }}>
                            <Card.Body>
                                <Form onSubmit={handleIssueTokens}>
                                    {tokenData.map((token) => (
                                        <div key={token.id}>
                                            <Form.Group className="mb-3" controlId={`issueToAddress_${token.id}`}>
                                                <Form.Label>{`Issue To Address (${token.name})`}</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder={`Enter recipient address for ${token.name}`}
                                                    className="form-control-sm"
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId={`issueAmount_${token.id}`}>
                                                <Form.Label>{`Issue Amount (${token.name})`}</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder={`Enter amount for ${token.name}`}
                                                    className="form-control-sm"
                                                />
                                            </Form.Group>
                                        </div>
                                    ))}
                                    <Button variant="primary" type="submit">
                                        Issue Tokens
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Form onSubmit={blackList}>
                                    <h4>Remove Blacklist</h4>
                                    <div className="mb-3">
                                        <label htmlFor="toAddressBlackList" className="form-label">
                                            To Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="toAddressBlackList"
                                            value={toAddressBlackList}
                                            onChange={(e) => settoAddressBlackList(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Remove Blacklist
                                    </button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* Approve Tokens Form */}
        <div className="col-md-4">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Form onSubmit={(e) => {
                e.preventDefault();
                approveTokens();
              }}>
                <h4>Approve Tokens</h4>
                <div className="mb-3">
                  <label htmlFor="approveAmount" className="form-label">
                    Approve Amount
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="approveAmount"
                    value={approveAmount}
                    onChange={(e) => setApproveAmount(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Approve Tokens
                </button>
              </Form>
            </Card.Body>
          </Card>
        </div>
                </div> :
                    <p> Click To Conncet the MetaMask!...... </p>}
            </div>
        </div>
    );
};

export default Write;

