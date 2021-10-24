const express = require("express");
const db = require("../../db");
const config = require("../../config");
const utils = require("../../utils");
const crypto = require("crypto-js");
const mailer = require("../../mailer");
const jwt = require("jsonwebtoken");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");

const router = express.Router();
//------------------------------------
//                GET
//------------------------------------
router.get("/activate/:token", (request, response) => {
  const { token } = request.params;
  const statement = `update user set active = 1, activationToken = '' where activationToken = '${token}'`;
  db.query(statement, (error, data) => {
    const htmlPath = path.join(
      __dirname,
      "/../template/activation_result.html"
    );
    const body = "" + fs.readFileSync(htmlPath);
    response.header("Content-Type", "text/html");
    response.send(body);
  });
});

router.get("/forget-password/:email", (request, response) => {
  try {
    const { email } = request.params;
    const statement = `select userId, firstName, lastName from user where email = '${email}'`;
    db.query(statement, (error, users) => {
      if (error) {
        response.send(utils.createError(error));
      } else if (users.length == 0) {
        response.send(`user does not exist`);
      } else {
        const user = users[0];
        const otp = utils.generateOTP();
        const body = `your otp = ${otp}`;
        mailer.sendEmail(email, "Reset your password", body, (error, info) => {
          console.log(`Error for mail :  ${error}`);
          console.log(info);
          response.send(
            utils.createResult(error, {
              otp: otp,
              email: email,
            })
          );
        });
      }
    });
  } catch (ex) {
    response.send(ex);
  }
});

//------------------------------------
//                POST
//------------------------------------
router.post("/signup", (request, response) => {
  const { firstName, lastName, email, password } = request.body;
  console.log(request.body);
  const activationToken = uuid.v4();
  const activationLink = `http://localhost:4000/user/activate/${activationToken}`;
  const htmlPath = path.join(
    __dirname,
    "/../template/send_activation_link.html"
  );
  console.log(htmlPath);
  let body = "" + fs.readFileSync(htmlPath);
  body = body.replace("{firstName}", firstName);
  body = body.replace("{activationLink}", activationLink);

  console.log(`activation token = ${activationToken}`);
  console.log(`activation link = ${activationLink}`);
  console.log(`body = ${body}`);

  const statement = `insert into user (firstName, lastName, email, password,activationToken) values 
('${firstName}','${lastName}','${email}','${crypto.SHA256(
    password
  )}','${activationToken}')`;
  console.log(statement);
  db.query(statement, (error, data) => {
    console.log(data);

    console.log(`inside utils.createResult  : ${data}`);
    mailer.sendEmail(
      email,
      "welcome to jabalpurwala.com",
      body,
      (error, info) => {
        console.log(`Error for mail :  ${error}`);
        console.log(info);
        response.send(utils.createResult(error, data));
      }
    );
  });
});

//------------------------------------
//                GET
//------------------------------------
router.post("/signin", (request, response) => {
  try {
    //console.log(urlMethod.urlMethod(request))
    const { email, password } = request.body;
    const statement = `select userId, firstName, lastName, active from user 
    where email = '${email}' and password = '${crypto.SHA256(password)}'`;
    console.log(crypto.SHA256(password));
    db.query(statement, (error, users) => {
      if (error) {
        response.send({ status: "error", error: error });
      } else if (users.length == 0) {
        console.log(users);
        response.send({ status: "error", error: "user does not exist" });
      } else {
        const user = users[0];
        const active = user['active']
        console.log(active)
        if (user['active'] == 1) {
          //user is an active user
          const token = jwt.sign({ userId: user["userId"] }, config.secret);
          console.log(config.secret);
          response.send(
            utils.createResult(error, {
              firstName: user["firstName"],
              lastName: user["lastName"],
              token: token,
            })
          );
        } else {
          //user is a suspended user
          response.send(`your account is not active.`);
        }
      }
    });
  } catch (ex) {
    response.send(`Error in your code`);
  }
});

//------------------------------------
//                PUT
//------------------------------------

//------------------------------------
//                DELETE
//------------------------------------

module.exports = router;

/*
 const activationLink = `http://localhost:4000/activation/${activationToken}`
 const body = `<h1>Welcome to mystore</h1>
 <p>Hello ${firstName}</p>
 <p></p>
 <p>Please activate your account by visiting following url</p>
 <p><a herf="${activationLink}">activate</a></p>
 <p>Best Regards</p>
 ` */

/*mailer.sendEmail(email,'welcome to jabalpurwala.com','<p>hello</p>',(error,info)=>{
    console.log(`Error for mail :  ${error}`)
    console.log(`mailInfo :  ${info}`)*/

/*
 router.post('/signup',(request,response)=>{
 const {firstName, lastName, email, password} = request.body
 console.log(request.body)
 const activationToken = uuid.v4()
 const activationLink = `http://localhost:4000/user/activate/${activationToken}`
 const body = `<h1>Welcome to mystore</h1>
 <p>Hello ${firstName}</p>
 <p></p>
 <p>Please activate your account by visiting following url</p>
 <p><a href="${activationLink}">activate</a></p>
 <p>Best Regards</p>
 `
 const statement = `insert into user (firstName, lastName, email, password,activationToken) values 
('${firstName}','${lastName}','${email}','${crypto.SHA256(password)}','${activationToken}')`
console.log(statement)
db.query(statement,(error, data)=>{
    console.log(data)

    console.log(`inside utils.createResult  : ${data}`)
    mailer.sendEmail(email,'welcome to jabalpurwala.com',body,(error,info)=>{
        console.log(`Error for mail :  ${error}`)
        console.log(`mailInfo :  ${info}`)
    response.send(utils.createResult(error,data))
   })
  })
})
  */
