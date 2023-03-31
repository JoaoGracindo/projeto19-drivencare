import db from '../config/database.js';

async function findEmail(email){

    return await db.query(`
        SELECT *
        FROM patients
        WHERE email=$1;
    `, 
        [email]);
}

async function signUp({name, email, password}){

    return await db.query(`
        INSERT INTO patients
        (name, email, password)
        VALUES ($1, $2, $3);
    `,
        [name, email, password]);
}

export default {
    findEmail,
    signUp
}