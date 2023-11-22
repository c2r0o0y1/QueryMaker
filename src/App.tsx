import PromptDisplay from './Components/prompt-container';
import SqlDisplay from './Components/sqldisplay';

function App() {
  const generateCode = async () => {
    try{
      const options = {
        method: "POST",
        header: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
            message: "create a table"
        })
      }
      const res = await fetch("http://localhost:8000/test", options)
      const data = await res.json()
      console.log(data)
    }
    catch(error){
      console.error(error)
    }
  }
  return (
    <div className="App">
      <PromptDisplay/>
      <input/>
      <SqlDisplay/>
      <div className='buttons'>
        <button id='generate-code' onClick={generateCode}>
          Generate Sql Code
        </button>
        <button id='clear-chat'>
          Clear Chat
        </button>
      </div>
    </div>
  );
}

export default App;
