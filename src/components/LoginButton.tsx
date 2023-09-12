import { useState } from "react"

function LoginButton() {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <button>Login</button>
    )
}

export default LoginButton