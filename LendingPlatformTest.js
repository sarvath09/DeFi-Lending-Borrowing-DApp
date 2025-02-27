const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DeFiLending", function () {
  let DeFiLending, lending, owner, addr1;

  beforeEach(async function () {
    DeFiLending = await ethers.getContractFactory("DeFiLending");
    [owner, addr1] = await ethers.getSigners();
    lending = await DeFiLending.deploy();
    await lending.waitForDeployment();
  });

  it("Should allow deposits", async function () {
    await lending.connect(addr1).deposit({ value: ethers.parseEther("1") });
    expect(await lending.deposits(addr1.address)).to.equal(ethers.parseEther("1"));
  });

  it("Should allow borrowing", async function () {
    await lending.connect(addr1).deposit({ value: ethers.parseEther("1") });
    await lending.connect(addr1).borrow(ethers.parseEther("0.5"));
    expect(await lending.loans(addr1.address)).to.be.above(ethers.parseEther("0.5"));
  });

  it("Should allow loan repayment", async function () {
    await lending.connect(addr1).deposit({ value: ethers.parseEther("1") });
    await lending.connect(addr1).borrow(ethers.parseEther("0.5"));
    await lending.connect(addr1).repay({ value: ethers.parseEther("0.525") });
    expect(await lending.loans(addr1.address)).to.equal(0);
  });
});
