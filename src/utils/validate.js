
const checkvaliddata=(email,password)=>{
    const isemail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const ispass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isemail)return "Error in Email";
    if(!ispass)return "Error in Password";

    return null;
}

export default checkvaliddata;
