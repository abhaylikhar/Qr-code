import React, { useEffect, useState } from 'react'
import { SketchPicker } from 'react-color' 

const Qrcode = () => {

    const [text, setText] = useState("")
    const [url, setUrl] = useState("")



    const GenerateQR = async(e) =>{

        e.preventDefault();
    

        setUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`); 
        setText("")

    }

       

    
  return (

   
    
    <div className="container w-50">
        <form onSubmit={GenerateQR}>
            <div className="mt-5">
                <input value={text} type="text" required className="form-control" placeholder='Enter here...' onChange={(e)=>setText(e.target.value)}/>
                <button type="submit" className="btn btn-primary mt-2">Generate QR</button>
            </div>
           
            
           
        </form>
        <div className="Qr-section">

        <img src={url}/>
        </div>
        
    </div>
    
  )
}

export default Qrcode