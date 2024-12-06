import React, { useState } from 'react'

const Para = ({ children }) => {
    const [value, setValue] = useState(children)
    const [btnText, setBtnText] = useState("I am Noob 🥲")

    function unScramble() {
        if (value == children) {
            let v = ''
            for (let i of children) {
                let n = i.charCodeAt();
                n = n - 1
                let s = String.fromCharCode(n)
                v = v + s
            }
            setValue(v)
            setBtnText("I was Noob 🫨")

        }

        else {
            setBtnText("You are Noob 🤫");
            setValue(children)
        }

    }
    return (<>
        <div className='center'>
            <h3 >{value}</h3>
            <button onClick={() => unScramble()}>{btnText}</button>
        </div>
    </>
    )
}

export default Para