const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  if (!event.partitionKey && event.partitionKey !== 0) {
    const data = JSON.stringify(event);
    return crypto.createHash("sha3-512").update(data).digest("hex");
  }

  const candidate = typeof event.partitionKey !== "string"
    ? JSON.stringify(event.partitionKey)
    : event.partitionKey

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};