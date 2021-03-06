import express from "express";
import UserNotAuthorizedException from "../exception/UserNotAuthorizedException";
import RequestWithUser from "../util/rest/request";
import jsonwebtoken from "jsonwebtoken";
import APP_CONSTANTS from "../constants";

const validRoles= ["KKK"]
const authorize = () => {
 return async (
   req: RequestWithUser,
   res: express.Response,
   next: express.NextFunction
 ) => {
   try {
     const token = getTokenFromRequestHeader(req);
     jsonwebtoken.verify(token, process.env.JWT_TOKEN_SECRET);
     console.log(jsonwebtoken.decode(token));
     const payload : any = jsonwebtoken.decode(token)
     console.log(payload)
     const isRolePresent: boolean = validRoles.includes(payload.role);
     if(!isRolePresent)
     {
      throw new UserNotAuthorizedException();
     }
     return next(); //goes to next middleware
   } catch (error) {
     return next(new UserNotAuthorizedException());
   }
 };
};

const getTokenFromRequestHeader = (req: RequestWithUser) => {
    const tokenWithBearerHeader = req.header(
      `${APP_CONSTANTS.authorizationHeader}`
    );    
    
    if (tokenWithBearerHeader) {
      return tokenWithBearerHeader.replace(`${APP_CONSTANTS.bearer} `, "");
    }
    return "";
   };
   
   export default authorize;
