# DeFi-Lending-Borrowing-DApp

"COMPANY": COTECH IT SOLUTIONS

"NAME": SARVATH KOUNEIN

"INTERN ID": CT08IYZ

"DOMAIN": BLOCK CHAIN TECHNOLOGY

"DURATION": 4 WEEKS

"MENTOR": NEELA SANTHOSH KUMAR

"DESCRIPTION":
##Task 3:

#DeFi Lending and Borrowing Smart Contract

#Overview
This project implements a decentralized finance (DeFi) lending and borrowing system using Solidity. Users can deposit ETH, borrow against their collateral, and repay loans with interest.

#Features
Users can deposit ETH as collateral.
Users can borrow ETH up to 50% of their deposited amount.
Loans accrue a 5% interest rate.
Users can repay their loans to clear their debt.
Secure and transparent transactions.

#Smart Contract: LendingPlatform.sol
#Functions
deposit(): Allows users to deposit ETH as collateral.
borrow(uint256 amount): Enables users to borrow ETH based on their deposited collateral.
repay(): Allows users to repay their loans.
interestRate(): Fixed interest rate applied to borrowed amounts.

#Deployment Steps
1.Open Remix IDE.
2.Create a new file and paste the DeFiLending.sol code.
3.Compile the contract using Solidity 0.8.x compiler.
4.Deploy the contract using MetaMask on a test Ethereum network (Goerli, Sepolia, etc.).
5.Use Remix UI or Web3.js to interact with the contract.

#Example Transactions
Deposit: User deposits 1 ETH as collateral.
Borrow: User borrows 0.5 ETH (50% of collateral) with 5% interest.
Repay: User repays the loan along with interest (0.525 ETH).
Dependencies
Solidity ^0.8.0

MetaMask for Ethereum transactions

Remix IDE or Hardhat for deployment

Web3.js for contract interaction

"OUTPUT":

Task3:

![output1](https://github.com/user-attachments/assets/f6814d07-5d8a-4603-b461-263136ec2e84)

