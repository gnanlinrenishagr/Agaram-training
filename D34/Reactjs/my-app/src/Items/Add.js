import { useState } from 'react';

export function Add(props) {
    let [inputvalue, changeinputvalue] = useState("")
    return (
        <form>
            <input type="test" onKeyUp={(e) => changeinputvalue(e.target.value)} />
            <button type="button" onClick={() => props.setitem([...props.item, inputvalue])} >Add</button>
        </form>
    )
}