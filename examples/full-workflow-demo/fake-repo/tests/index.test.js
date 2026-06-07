const { formatName } = require("../src/index");

if (formatName("demo") !== "hello demo") {
  throw new Error("formatName should return a stable greeting");
}
