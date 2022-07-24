import { useLocation } from "react-router-dom"
export default function Success(params) {
    const location = useLocation()
    console.log(location)
    return (<div>Successful</div>)
}