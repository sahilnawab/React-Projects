import Card from './Compnents/Card';
import './App.css';

function App() {
  
const people ={
  username:"sahil",
  age:43,
}
const people1 ={
  username:"sahnail",

}
  return (
    <>
   <Card object={people}></Card>
   <Card object={people1}></Card>
    </>
  )
}

export default App
