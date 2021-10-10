import './App.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button,Form } from 'react-bootstrap';
function App() {
 
  const [validated, setValidated] = useState(false);
 
  const onSubmit = data => console.log(data);
  const [loginState, setLoginState] = useState({
    email:"",
    password:"",
    checkMeOut:false,
  });
  const {  handleSubmit, formState: {  } } = useForm();
  return (
  

    <div className="container my-5">
           <h1 className="display-1 text-decoration-underline">Sign-up page DEMO(Botspot AI)</h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label lead ">
          Email address
          </label>
          <input 
          onSubmit={handleSubmit(onSubmit)}
          
          type="email" 
          className="form-control " 
          aria-describedby="emailHelp" 
          onChange={ (event) => {
            const value = event.target.value;
            setLoginState({ ...loginState, email: value });
          } }
    
          />         
          <div id="emailHelp" className ="form-text">
          We'll never share your email with anyone else.</div>
        </div>
        <div className ="mb-3">
          <label for="exampleInputPassword1" class="form-label lead">
          Password</label>
          <input 
          type="password" 
          class="form-control" 
          id="exampleInputPassword1" 
          onChange={ (event) => {
            const value = event.target.value;
            setLoginState({ ...loginState, password: value });
          } }
          />
        </div>
        <div class="mb-3 form-check">
          <input
           type="checkbox" 
           class="form-check-input" 
           id="exampleCheck1" 
           onChange={ (event) => {
            const value = event.target.checked;
            setLoginState({ ...loginState, checkMeOut: value });
          } }
           />
          <label class ="form-check-label" for="exampleCheck1">
          Remember me
          </label>
        </div>
        <button type="submit" class="btn btn-primary" disabled={
          !loginState.email || !loginState.password}>Submit</button>
        
      </form>
      <footer>
    
      </footer>
    </div>
    
  );
}

export default App;
//{JSON.stringify(loginState)}