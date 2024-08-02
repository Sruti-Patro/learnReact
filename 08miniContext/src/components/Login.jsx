export default function Login(){

    const handleSubmit = () => {
        
    }
    return (
        <>
            <h2>Login</h2>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}