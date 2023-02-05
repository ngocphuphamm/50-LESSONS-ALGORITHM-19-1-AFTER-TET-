/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz") {
    if (words.length < 2) { return true; }
    const map = new Map();
    map.set('∅', order.length + 1);
    for (let i = 0; i < order.length; i++) {
      map.set(order.charAt(i), order.length - i);
    }

    for (let i = 1; i < words.length; ++i) {
        let first = `${words[i - 1]}∅`, second = `${words[i]}∅`;
        let minLen = Math.min(first.length, second.length);
        let index = 0;
        while ((first.charAt(index) === second.charAt(index)) && index < minLen) {
          index++;
        }
    
        if (map.get(first.charAt(index)) < map.get(second.charAt(index))) {
          return false;
        }
      }    
    return true
    
};

console.log(isAlienSorted());