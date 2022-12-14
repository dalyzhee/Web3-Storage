const SimpleStorage = artifacts.require("./SimpleStorage");

contract("SimpleStorage", accounts =>{
    it("Should_work", async () => {
        const simpleStorage = await SimpleStorage.deployed();

        await simpleStorage.set(100, { from: accounts[0]});

        const value = await simpleStorage.get.call();
        assert.equal(value, 100, "The value 100 was not stored.");

    })
});