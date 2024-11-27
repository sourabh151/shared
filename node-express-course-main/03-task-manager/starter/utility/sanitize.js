function sanitize(str) {
  return str.trim().replace(/[<>]/g, "");
}

module.exports = sanitize;
