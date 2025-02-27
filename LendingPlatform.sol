// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DeFiLending {
    mapping(address => uint256) public deposits;
    mapping(address => uint256) public loans;
    uint256 public interestRate = 5; // 5% interest rate

    event Deposited(address indexed user, uint256 amount);
    event Borrowed(address indexed user, uint256 amount);
    event Repaid(address indexed user, uint256 amount);

    function deposit() external payable {
        require(msg.value > 0, "Deposit amount must be greater than zero");
        deposits[msg.sender] += msg.value;
        emit Deposited(msg.sender, msg.value);
    }

    function borrow(uint256 amount) external {
        require(amount > 0, "Borrow amount must be greater than zero");
        require(deposits[msg.sender] >= amount / 2, "Insufficient collateral");
        loans[msg.sender] += amount + (amount * interestRate / 100);
        payable(msg.sender).transfer(amount);
        emit Borrowed(msg.sender, amount);
    }

    function repay() external payable {
        require(loans[msg.sender] > 0, "No outstanding loan");
        require(msg.value >= loans[msg.sender], "Amount must cover the loan");
        loans[msg.sender] = 0;
        emit Repaid(msg.sender, msg.value);
    }
}
