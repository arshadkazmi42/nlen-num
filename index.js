module.exports = (length) => {

  length = length || 3;

  return Math.round(new Date().getTime() * Math.random())
    .toString(16)
    .substr(0, length);
};
