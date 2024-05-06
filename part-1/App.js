const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name='Lenny' />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))