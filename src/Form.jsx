
import './App.css'

function Form() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" />

      <button type="submit">Submit</button>
    </form>
  ); 

}

export default Form