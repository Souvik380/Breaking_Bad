import React,{useState} from 'react'

function Search({getQuery}) {
    const [text,setText]=useState("");
    
    const onChange=(q)=>{
        setText(q);
        getQuery(q);
    }

    return (
        <section className="search">
            <form>
                <input 
                    className="focus-control"
                    type="text" 
                    placeholder="search characters" 
                    value={text}
                    onChange={(event)=>onChange(event.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search
