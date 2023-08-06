import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthProvider";


function LoginPage() {

    const [info, setInfo] = useState({
        username: "",
        password: ""
    })

    const auth = useAuth()

    const navigate = useNavigate()

    function onChange(event) {
        setInfo(prevState => ({...prevState, [event.target.name]: event.target.value}))
    }

    function onSubmit(e) {
        e.preventDefault()
        if (info.username.trim() && info.password.trim()) {
            auth.signIn(info, navigateToPages)

        } else {
            alert("add login and password")
        }

    }

    function navigateToPages() {
        navigate("/")
    }


    return (
        <form onChange={onChange} onSubmit={onSubmit} className="form">
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
            <button>log in</button>
        </form>
    );
}

export default LoginPage;