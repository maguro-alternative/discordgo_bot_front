

function Index(){
    return (
        <div>
            <h1>Index</h1>
            <a href={`${import.meta.env.VITE_SERVER_URL}/discord/auth`}>Login</a>
        </div>
    )
}
export default Index;