import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    // if(!token)
    // {
    //   console.log("Token Expired");
    //   res.status(401).send({error:"Please authenticate using valid token"});
    // }
    const isCustomAuth = token.length < 500;//the length of token will always be less than 500 if you do sign in using jwt token
    let decodedData;
    if (token && isCustomAuth) {//manual sing up      
      decodedData = jwt.verify(token, secret);//email and id are there inside token as a primary key and they are decoded after that and stored in decodedData
      req.userId = decodedData?.id;//take id from decodedData
    } else {//google sign in
      decodedData = jwt.decode(token);
      console.log("decoded",decodedData);
      req.userId = decodedData?.sub;
    }    
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;