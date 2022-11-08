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
});
