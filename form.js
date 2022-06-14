import React, { useState } from "react";

const Form = () =>{
    const [state, setState] = useState({ name: '', class: '' });
    const [array, setArray] = useState([]);

    const onServe = () => {
        setArray([...array, state]);
      };
    console.log(array);
    return(
        <form>
            <label>
                namef:<input type="text" name="name" />
                class:<input type="text" name="class" />
                password:<input type="password" name="password" />
                <button onClick={() => setState({ ...state, name: "name"})}>
                    Click me
                </button>
                <button onClick={onServe}>HHH</button>
            </label>
        </form>
    )
}

export default Form;