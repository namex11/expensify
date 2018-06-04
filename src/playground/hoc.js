const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is the information: {props.info}</p>
    </div>
)

const requireAuthentication = (WrappedContent) => {
    return (props) =>(
        <div>
            {props.isAuthenticated === true ? <WrappedContent {...props}/> : <p>Please login to admin account</p>}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('root'));