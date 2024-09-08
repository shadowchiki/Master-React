import './App.css'

function App() {

  return (
    <>
      <div>
          <h1>Greetings</h1>
          <Hello name={"Alejandro"} age={15}/>
          <Hello name={"Pedro"} age={30} />
          <Hello name={"Antonio"} age={29} />
      </div>
    </>
  )
}

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old</p>
        </div>
    )
}

export default App
