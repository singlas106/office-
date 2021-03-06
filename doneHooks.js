import React, { useState } from "react";
import table from "./tables";

const App = () =>{
  const [state, setState] = useState({ firstName: '', lastName: '', fatherName: '', motherName: ''});
  const [array, setArray] = useState([]);

  const onInputChange = (key, value) => {
    setState({
      ...state,
      [key]: value
    })
    
}

  const onSupport = () => {
    setArray([
      ...array,
      state
    ])
    setState({
      firstName: '',
      lastName: '',
      fatherName: '',
      motherName: ''

    })
  }


  console.log(array);
  // const clearState = () => {
  //   input.value.length = '';
  // }
  // const onServe = () => { setArray([...array, state])};



  return(
    <div className="pa5 bg-light-blue">
      <label>
          firstName: <input type="text" name="text" placeholder="firstname" value={state.firstName} onChange={(e) => onInputChange("firstName",e.target.value)}/> <br/>
          lastName: <input type="text" name="text" placeholder="lastname" value={state.lastName} onChange={(e) => onInputChange("lastName",e.target.value)}/> <br/>
          fatherName: <input type="text" name="text" placeholder="fathername" value={state.fatherName} onChange={(e) => onInputChange("fatherName",e.target.value)}/> <br/>
          motherName: <input type="text" name="text" placeholder="mothername" value={state.motherName} onChange={(e) => onInputChange("motherName",e.target.value)}/> <br/>
          {/* homeTown: <input type="text" name="text" placeholder="residence" /> <br/> */}
          {/* email: <input type="email" name="text" placeholder="Email" onChange={(e) => onInputChange("email",e.target.value)}/> <br/> */}
          <button onClick={onSupport}>submit</button>
        </label> 



        <table>
      <tr>
        <th>firstName</th>
        <th>lastName</th>
        <th>fatherName</th>
        <th>motherName</th>
      </tr>{array.map(item => (
        <tr>
        <th>{item.firstName}</th>
        <th>{item.lastName}</th>
        <th>{item.fatherName}</th>
        <th>{item.motherName}</th>
      </tr>
      ))}
   </table> 
    </div>
  )
}
export default App;