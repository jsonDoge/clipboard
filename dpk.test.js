const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns '0' when event paritionKey is string '0'", () => {
    const event = { partitionKey: '0' };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("0");
  });

  it("Returns '0' when event paritionKey is number 0", () => {
    const event = { partitionKey: 0 };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("0");
  });

  it("Returns '1' when event paritionKey is number 1", () => {
    const event = { partitionKey: 1 };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("1");
  });

  it("Returns sha3 hash of event partitionKey if its length exceeds 256", () => {
    const longString = new Array(266).fill(0).toString();
    const event = {
      partitionKey: longString
    };
  
    const hash = crypto.createHash("sha3-512").update(longString).digest("hex")
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(hash);
  });

  it("Returns sha3 hash of event if partitionKey not present", () => {
    const event = {};
    const hash = crypto.createHash("sha3-512").update(
      JSON.stringify(event)
    ).digest("hex")
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe(hash);
  });
});
