const nodemailer = require('nodemailer')
const config = require('./config')


function sendEmail(email,subject,body,callback){
    console.log(`inside sendEmail function`)
    
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:config.emailUser,
            pass:config.emailPassword
        }
    })
    const options = {
        from : config.emailUser,
        to:email,
        subject:subject,
        html:body
        }
    transport.sendMail(options,callback)
}
module.exports = {
    sendEmail:sendEmail
}
/* 
transport.sendMail(options,(error,info)=>{
        console.log(error)
        console.log(info)
    })
*/