Routes
 
POST at /signup user get registered with its phone password email and receives jwt token for authentication

req : {

    name:req.body.name,
    phone:req.body.name,
    password:req.bofy.password

}

res: {

     "name":name,
    "phone":phone,
    "signup":true,
    "token":xxxxxxxxxxxxxxx

}


POST  /sigin user can sign in with and get jwt  token for authenticated Routes

req:{

    name:req.body.name,
    passsword:req.body.password

}
res:{

    success: true,
    message: 'Token Generated and Login Complete!',
    token: xxxxxxxxxxxxx

}



POST /addslots slots can be added with day,to,from,name

req:{

    name: req.body.name,
    day: req.body.day,
    from: req.body.from,
    to: req.body.to,
    token:"xxxxxxxxxxxXX"
}

res:{

    message:'slot Added Successfully'
}

POST /removeslots specific slot can be removed

req:{

     name: req.body.name,
    day: req.body.day,
    from: req.body.from,
    to: req.body.to
    token:"xxxXXXxxx"
}

res:{

    message:"'slot removed'
}


GET  /allslots all slots can be seen

req:{
headers
       token:"xxxxxxxxxxxxxxx"
}

res:{
   slots: slots
}
POST /addgroup group can be add

req:{
    name:xxx
    password:xxx
    token:xxx
}

res:{
    message:group added sucessfully
}