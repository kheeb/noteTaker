// instantly exports function to generate a string of random numbers/letters
 module.exports = function uuid() {
    let hex = "abcdef123456";
    let id = "";
    for (let i = 0; i < 20; i++) {
       let randomIndex = Math.floor(Math.random() * hex.length);
       id+=hex[randomIndex];
    }
    
    return id;
  }