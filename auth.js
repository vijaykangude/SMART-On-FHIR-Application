

// INCOMPLETE CODE
//  BECAUSE ACCESS TOKEN IS NOT STORED ANYWHERE AND I CANT ACCESS IT IN HERE


const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const Token =  //how i can retrive that genrated token here i don't know

  if (!Token) {
    return res.status(403).send("A token is required for authentication");
  }
  const verify = jwt.verify(Token)

};

module.exports = verifyToken;