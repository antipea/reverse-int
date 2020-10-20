module.exports = function reverse (n) {
  n = Math.abs(n).toString();
    let newN = '';
    for ( let i = 0; i < n.length; i++) {
        newN = `${n[i]}${newN}`;
    }
    newN = Number(newN);
    return newN;
}
