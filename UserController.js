const registerUser = (req, res) =>{
    const username=req.body.name;
    const useremail=req.body.email;
    const userpassword=req.body.password;

    res.json({
        success:true,
        name:username,
        email:useremail,
        password:userpassword,
       });
};

module.exports = registerUser;