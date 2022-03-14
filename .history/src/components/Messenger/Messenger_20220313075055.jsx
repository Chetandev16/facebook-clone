import React,{useState} from 'react'
// <button onClick={handleChange}>change</button>
const Messenger = ({handleChange}) => {

    const [input, setInput] = useState("");

  return (
    <div className="app">
        <h1>Messenger</h1>
        <input value={input} onChange={(e)=>{
            setInput(e.target.value)
        }}/>
        <button>send message</button>
        {/* input field */}
        {/* button */}

        {/* messages */}




        <button onClick={handleChange}>change</button>
    </div>
  )
}

export default Messenger