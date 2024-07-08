import jwt from 'jsonwebtoken';
export default function(req,res,next){
    const token=req.header('authorization');
    if(!token){
        return res.status(401).send('access denied');

    }
    try{
        const verified=jwt.verify(token,process.env.jwt_SECRET);
        req.user=verified;
        next();
    }catch(err){
        console.log(err);
        res.status(400).send("invalid token");
    }
};