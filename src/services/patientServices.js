import bcrypt from 'bcrypt';

import patientRepositories from '../repositories/patientRepositories.js';

async function signUp({name, email, password}){
    const {rowCount} = await patientRepositories.findEmail(email);
    if(rowCount) throw new Error("E-mail already in use.");

    const hash = bcrypt.hash(password, 10);
    await patientRepositories.signUp({name, email, password: hash});
}

export default {signUp};