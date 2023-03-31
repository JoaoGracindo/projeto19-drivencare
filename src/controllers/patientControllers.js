import patientServices from '../services/patientServices.js';

async function signUp (req, res){

    const {name, email, password} = req.body;

    try{
        await patientServices.signUp({name, email, password});
        return res.sendStatus(201);
    }catch(err){
        console.log(err)
        return res.status(500).send(err.message);
    }
}

export default {signUp};