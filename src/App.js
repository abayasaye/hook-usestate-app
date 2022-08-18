import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import User from './User';
import TableUser from './UserTable';
const App = ()=>{
return(
  <div>
    <h1>useState-APP</h1>
    <Counter num={0}/>
    <hr/>
    <User/>
    <TableUser/>
  </div>
)
}
export default App


































// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
