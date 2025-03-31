import {useState} from "react"
import { useNavigate } from "react-router-dom"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants/constants"
import api from "../../api"

function Form ({ route, method }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const name = method === "login" ? "Login" : "Register"

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()

        try{
            const res = await api.post(route, {username, password})

            if (method === "login"){
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                navigate("/")
            }else{
                navigate("/login")
            }
        }catch(err){
            alert(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>

            <div className="back z-0 bg-[#121212] grid justify-center items-center text-white md:mt-[-3%] mt-[-5%]">
                <div className="w-30 md:h-135 md:w-105 py-20 md:px-20 m-6 rounded-2xl shadow-lg border border-white">
                    <h1 className=" pl-5 pd-5 text-4xl font-semibold text-center">{name}</h1>
                    <form className="justify-center items-center mt-10 grid">
                        <label className="md:text-xl"> Name: </label>
                        <input className="bg-white text-black w-xs mt-2 p-2.5 border-none rounded-2xl"
                            placeholder="Enter Your Name"
                            required
                            type="text"
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                        
                        <label className="md:text-xl mt-5"> Password: </label>
                        <input className="bg-white text-black pl-2 border-none mt-2 rounded-2xl p-2.5"
                            placeholder="Enter Your Password"
                            required
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="grid justify-center content-center mt-9">
                            <button type="submit" 
                            className="p-2 bg-blue-500 hover:bg-blue-600 transition-all duration-300 font-light text-xl text-white rounded-lg shadow-lg mt-4 hover:cursor-pointer"
                            onClick={handleSubmit}>
                                {name}
                            </button>
                            { name === "Login" ? <a href="/Register" className=" underline italic mt-4 underline-offset-2 hover:text-amber-200"> Create Account</a> : <div className="mt-4"><span className="italic mt-4">Already have an account? Login </span><span><a href="/Login" className="underline italic hover:text-amber-200 underline-offset-2">here</a></span></div>} 
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}

export default Form;