const App = () => (
    <div>
        <Person name="Lenny" age="30" hobbies={['cooking', 'working out', 'reading']} />
        <Person name="John" age="27" hobbies={['gardening', 'making music', 'traveling']} />
        <Person name="Remus" age="32" hobbies={['tutoring', 'order of the pheonix', 'resting']} />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))