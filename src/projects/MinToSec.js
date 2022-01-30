import { useEffect, useState } from 'react'
import mintosecModules from './mintosecModules.css'

function MinToSec(){

    const [input, setInput] = useState(0)
    const [convertedValue, setConvertedValue] = useState(0)
    
    
    useEffect(() => {
        const conversorMinToSec = () => setConvertedValue(input * 60) 
        conversorMinToSec()
    }, [input])

    return(
        <section>
            <div className="content">
                <div className="title">MinToSec</div>
                <div className="inputLabel">
                    <label className="fontSize">Digite a quantidade minutos para converter</label>
                    <input className="fontSize" type="number" value={input} onChange={e => setInput(e.target.value)}/>
                </div>
                <button className="fontSize" onClick={() => setInput(0)}>Limpar</button>
                <p className="fontSeconds">{convertedValue}</p>
                <p>Secondos</p>
            </div>
        </section>
        
    )
}

export default MinToSec