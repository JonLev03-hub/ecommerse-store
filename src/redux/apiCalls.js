import { publicRequest } from "../requestMethod"
import { loginStart,loginFailure ,loginSuccess} from "./userRedux"
export const login = async (disbatch, user) => {
    disbatch(loginStart())
    try{
        const res = await publicRequest.post("auth/login",user)
        disbatch(loginSuccess(res.data))
    }catch{
        disbatch(loginFailure())
    }
}