function formatName(name) {
  return `hello ${name}`;
}

if (require.main === module) {
  const name = process.argv[2] || "demo";
  console.log(formatName(name));
}

module.exports = { formatName };
