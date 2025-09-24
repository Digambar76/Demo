
import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = ()=>{
      let newText = text.toUpperCase();
      setText(newText); 
    }
   const handleLoclick = ()=>{
      let newText = text.toLowerCase();
      setText(newText); 
    }
  

    const handleOnChange = (event)=>{
      setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
<>

    <div className="container my-3" style={{color: props.mode==='dark'?'#042743':'white', }}>
      <h1 style={{color: props.mode==='light'?'#042743':'white', }}>{props.heading} </h1>
      <form>
        <div className="mb-3">
          <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
        </div>
        <button type='button' disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>Convert to uppercase</button>
        <button type='button' disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoclick}>Convert to lowercase</button>

      </form>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white', }}>
        <h2>Your text summary</h2> 
        
        <p>
  {text.length} characters and {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words
</p>

        <h2>Preview</h2>
        <p>{text}</p>
   

    </div>
    </>

  )
}

