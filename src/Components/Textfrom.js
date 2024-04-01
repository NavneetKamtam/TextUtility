import React,{useState} from 'react'

export default function Textfrom(props) {

    const handleonchange = (event)=>{
        settext(event.target.value)
    }

    const handleonclick = ()=>{
        let newtext = text.toUpperCase()
        settext(newtext)
        props.showalert("Text is converted to Uppercase","success")

    }

    const handleonclick1 = ()=>{
        let newtext = text.toLowerCase()
        settext(newtext)
        props.showalert("Text is converted to Lowercase","success")
    }

    const handleonclick2 = ()=>{
        let newtext = ''
        settext(newtext)
        props.showalert("Textarea is cleared!","success")
    }

    const handleonclick3 = ()=>{
        let newtext = text.charAt(0).toUpperCase()+text.slice(1)
        settext(newtext)
        props.showalert("First Character of whole Text is set as Capital!","success")
    }

    const handleonclick4 = ()=>{
        // let newtext = text.charAt(0).toUpperCase()+text.substring(1).toLowerCase()
        let word = text.split(" ")
        for (let i=0 ; i<word.length ; i++)
        {
            word[i]=word[i][0].toUpperCase() + word[i].substring(1);
        }
        let newtext = word.join(" ")
        console.log(newtext)
        settext(newtext)
        props.showalert("Of every word first character is set as Capital!","success")
    }

    const [text , settext] = useState("")

  return (
    <>
    <div className={`container my-3 text-${props.mode==='light'? 'dark':'light'}`}>
        <h3>{props.heading}</h3>
    <div className="mb-3">
      <textarea className={`form-control bg-${props.mode==='light'?'light text-black':'dark text-light'}`} onChange={handleonchange} value={text} id="mybox" rows="8"></textarea>
    </div>
      <button className='btn btn-primary mx-2' onClick={handleonclick}>Conver To UpperCase</button>
      <button className='btn btn-primary mx-2' onClick={handleonclick1}>Conver To LowerCase</button>
      <button className='btn btn-primary mx-2' onClick={handleonclick2} >Clear</button>
      <button className='btn btn-primary mx-2' onClick={handleonclick3} >Captialize Case</button>
      <button className='btn btn-primary mx-2' onClick={handleonclick4} >Captialize Sentecnce</button>
      <div className='container'>
        <h2 className='my-2'>Your Text Summury is here:- </h2>
        <p>In your text there are <b>{text.split(" ").length}</b> word and <b>{text.length}</b> characters !</p>
        <p>You can read the summury in <i><b>{Math.round(0.00546448087*text.split(" ").length)}</b></i> Minutes</p>
        <p>no. off character without space <b>{text.replace(/ /g,'').length}</b></p>
        <hr></hr>
        <h2 className='my-2'>Text Preview :-</h2>
        <p>{text}</p>
        {/* <p>{newtext}</p> */}
      </div>
      </div>
    </>
  )
}
