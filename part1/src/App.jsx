import {Header} from "./Header.jsx";
import {Content} from "./Content.jsx";
import {Total} from "./Total.jsx";

function App() {
    const exercises1 = 10
    const exercises2 = 7
    const exercises3 = 14
  return (
      <div>
          <Header course={'Half Stack application development'}/>
          <Content/>
          <Total total={exercises1 + exercises2 + exercises3}/>
      </div>
  )
}

export default App
