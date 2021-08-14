module.exports = function reverse (n) {
    
    let strNumRevers = n.toString().split('').reverse().join('');

    return parseInt(strNumRevers);
}
