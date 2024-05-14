import URLS from "@/constants/urls";
import axios from "axios";

interface SignUpInterface {
    email: string;
    password: string;
    confirm_password: string;
    name: string;
    username: string;

}
interface LoginInterface {
    email: string;
    password: string;
}


const signupuser = async (data: SignUpInterface) => {
    try {
        if (data.password !== data.confirm_password) {
            throw new Error("Passwords do not match");
        }
        const res = await axios.post(URLS.singup, data);
        console.log(res)
        if (res.status === 201) {
            //save token in local storage
            localStorage.setItem("token", res.data.token);
            
            return "success";
        }
        return res.data.message;
    }
    catch (err) {
        return err;
    }
}

const loginuser = async (data: LoginInterface) => {
    try {
        const res = await axios.post(URLS.login, data);
        if (res.status === 200) {
            //save token in local storage
            alert(res.data.token)
            localStorage.setItem("token", res.data.token);
            return "success";
        }
        return res.data.message;
    }
    catch (err) {
        return err;
    }
}

export { signupuser, loginuser };