import React, { useState } from "react";

const App = () =>{
    const [state, setState] = useState({ name: '', class: '' });
    const [array, setArray] = useState([]);

    const onInputChange = (key, value) => {
      setState({
        ...state,
        [key]: value
      })
    }
    console.log("state", state);

    const onServe = () => {
        setArray([...array, state]);
      };
    console.log(array);
    return(
        
            <label>
                name:<input type="text" name="name" onChange={(e) => onInputChange("nme", e.target.value)} /> <br/>
                class:<input type="text" name="class" onChange={(e) => onInputChange("class", e.target.value)}/><br/>
                password:<input type="password" name="password" /><br/>
                {/* <button onClick={() => setState({ ...state, name: "name"})}>
                    Click me
                </button> */}
                <button onClick={onServe}>HHH</button>
            </label>
        
    )
}

export default App;


--------------------------------------------------

import React, { useState } from "react";

const app = () =>{
    
const [age, setAge] = useState(10);

return(
  <div>
    <p>u aged {age} times </p>
    <button onClick={() => setAge(age + 1)}>get older!!</button>
  </div>
)




export default app;

--------------------------------------------------



import React, { useState } from "react";

const App = (props) =>{
  const [state, setState] = useState({ firstName: '', lastName: '', fatherName: '',motherName: ''});
  const onInputChange = (key, value) => {
    setState({
      ...state,
      [key]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const val = {
      firstName,
      LastName,
      fatherName,
      motherName,
    };
    props.func(val);
    clearState();
  }
  //   console.log(state);
  

  return(
    <div className="pa5 bg-light-blue">
      <label>
          firstName: <input type="text" name="text" placeholder="firstname" onChange={(e) => onInputChange("firstName",e.target.value)}/> <br/>
          lastName: <input type="text" name="text" placeholder="lastname" onChange={(e) => onInputChange("lastName",e.target.value)}/> <br/>
          fatherName: <input type="text" name="text" placeholder="fathername" onChange={(e) => onInputChange("fatherName",e.target.value)}/> <br/>
          motherName: <input type="text" name="text" placeholder="mothername" onChange={(e) => onInputChange("motherName",e.target.value)}/> <br/>
          homeTown: <input type="text" name="text" placeholder="residence" /> <br/>
          email: <input type="email" name="text" placeholder="Email" onChange={(e) => onInputChange("email",e.target.value)}/> <br/>
          <button onClick={handleSubmit}>submit</button>
        </label> 
    </div>
  )
}
export default App;


------------------------------------------------------

import React, { useState } from "react";

const App = (props) =>{
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  // const [fatherName, setfatherName] = useState('');
  // const [motherName, setmotherName] = useState('');

  const changefirstName = (event) => {
    setfirstName(event.target.value);
  };

  const changelastName = (event) => {
    setlastName(event.target.value);
  };

  const finalSubmit = (event) => {
    event.preventDefault();
    const val = {
      firstName,
      lastName,
    };
    // props.func(val);
    clearState();
  };

  const clearState = () => {
    setfirstName('');
    setlastName('');
  };
  //   console.log(state);
  
  console.log(firstName);
  return(
    <div className="pa5 bg-light-blue">
      <label>
          firstName: <input type="text" name="text" placeholder="firstname" onChange={changefirstName}/> <br/>
          lastName: <input type="text" name="text" placeholder="lastname" onChange={changelastName}/> <br/>
          fatherName: <input type="text" name="text" placeholder="fathername" /> <br/>
          motherName: <input type="text" name="text" placeholder="mothername" /> <br/>
          homeTown: <input type="text" name="text" placeholder="residence" /> <br/>
          email: <input type="email" name="text" placeholder="Email" /> <br/>
          <button onClick={finalSubmit}>submit</button>
        </label> 
    </div>
  )
}
export default App;