const App = () => (
    <div>
        <Tweet username="Builtinlen" name="Lenny Rodriguez" date={new Date().toDateString()} message="Today, I am learning the fundamentals of React.js"/>
        <Tweet username="Johnsmith13" name="Johnson Smith" date={new Date().toDateString()} message="I'm learning to weld!"/>
        <Tweet username="LupinsMoon" name="Remus Lupin" date={new Date().toDateString()} message="Full moon tonight."/>
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))