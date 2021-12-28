const config = require('config.json');
const jwt = require('jsonwebtoken');
const pool = require('../_helpers/db');
const query = require('../_helpers/queries');
const {compareSync,hashSync,genSaltSync} = require('bcryptjs');

module.exports = {
    registerUser,
    checkEmail,
    authenticate,
    forgotPassword,
    getUserById
};


async function registerUser(data){
    const  salt = genSaltSync(10);
     data.password = hashSync(data.password,salt);
     data.salt = salt;
    const checkEmail = await this.checkEmail(data.email);
    console.log(checkEmail);
    if(checkEmail.isPresent){
       return {
        isError: false,
        result: {
            message:"User already Exits"
        }
       }
    }else{
        const SQL = query.createUsers;
        return new Promise ((resolve, reject)=>{
            pool.query(SQL,[data.first_name,
                data.last_name,
                data.email,
                data.password,
                data.contact_number,
                data.salt], (err, result) => {
                if (err) {
                    console.log(err);
                    resolve({
                        statusCode: 400,
                        error: err,
                    })
                } else {
                  resolve({
                    statusCode: 200,
                    result: {
                        message:"User created Successfully"
                    }
                })
                }
            });
        })
    }
}

async function checkEmail(email){
    const SQL = query.emailCheck;
    return new Promise ((resolve, reject)=>{
        pool.query(SQL,[email],(err, result) => {
            if (err) {
                console.log(err);
                resolve({
                    isError: true,
                    error: err,
                })
            } else {
                if(result.length != 0){
                    resolve({
                        isPresent: true,
                        data:result,
                    })
                }else{
                    resolve({
                        isPresent: false,
                    })
                }
            
            }
        });
    })
}

async function authenticate(data){
    const checkEmail = await this.checkEmail(data.email);
    if(!checkEmail.isPresent){
       return {
        isError: false,
        result: {
            statusCode: 404,
            message:"User Not present"
        }
       }
    }
    let user ={
        first_name: checkEmail.data[0].first_name,
        last_name: checkEmail.data[0].last_name,
        email:checkEmail.data[0].email,
        id: checkEmail.data[0].id,
        contact_number:checkEmail.data[0].contact_number
    }
    const result = compareSync(data.password,checkEmail.data[0].password);
    if(result){
        result.password= undefined;
        const jsontoken = jwt.sign({result:user},config.secret,{
            expiresIn:86400
        });
        const refreshToken = jwt.sign({result:user},config.secret,{
            expiresIn:86400
        })
        return{
            status:'success',
            code: 200,
            message:"login successfully",
            data: {
                user: user,
                token:jsontoken,
                refreshToken:refreshToken
            }
        }
    }else{
        return{
            status:'failure',
            code: 404,
            message:"Invalid user or password"
        }
    }
}

async function forgotPassword(data){
    const  salt = genSaltSync(10);
     data.newPassword = hashSync(data.newPassword,salt);
    const checkEmail = await this.checkEmail(data.email);
    if(!checkEmail.isPresent){
       return {
        isError: false,
        result: {
            statusCode: 404,
            message:"User Not present"
        }
       }
    }
    const SQL = query.updatePassword;
    return new Promise ((resolve, reject)=>{
        pool.query(SQL,[data.newPassword,data.email],(err, result) => {
            if (err) {
                console.log(err);
                resolve({
                    statusCode: 400,
                    error: err,
                })
            } else {
               if(result.affectedRows){
                resolve({
                    statusCode: 200,
                    message: 'User Password updated successfully'
                })
               }
          
            }
        });
    })

}

async function getUserById(data){
   let id = data.result.id;
   console.log(id)
   const SQL = query.getUserDetails;
   return new Promise ((resolve, reject)=>{
    pool.query(SQL,[id],(err, result) => {
        if (err) {
            console.log(err);
            resolve({
                statusCode: 400,
                error: err,
            })
        } else {
           if(result.length != 0){
               let user ={
                   first_name: result[0].first_name,
                   last_name: result[0].last_name,
                   email: result[0].email,
                   contact_number: result[0].contact_number,
               }
            resolve({
                statusCode: 200,
                message:'User fetched Successfully',
                data:user
            })
           }else{
            resolve({
                statusCode: 404,
                message:'User not found',
                data:{}
            })
           }
      
        }
    });
})
}

