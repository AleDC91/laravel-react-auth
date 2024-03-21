import "./App.css";
import axios from "./api/axios";
import { useState } from "react";


function App() {

  async function handleSubmit(e) {
    e.preventDefault();
  
    await axios.get("/sanctum/csrf-cookie");
    await axios.post("/login", {
      email: email,
      password: password,
    });
  }
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      email
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      password
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">invia</button>
    </form>
  );
}

export default App;

// async function handleSubmit(e) {
//   e.preventDefault();

//   await axios.get("http://localhost:8000/sanctum/csrf-cookie");
//   await axios.post("http://localhost:8000/login", {
//     email: email,
//     password: password,
//   });
//   // await axios.get("http://localhost:8000/user");
// }

// const [email, setEmail] = useState();
// const [password, setPassword] = useState();

// return (
//   <form onSubmit={(e) => handleSubmit(e)}>
//     email
//     <input
//       type="text"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//     />
//     password
//     <input
//       type="text"
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//     />
//     <button type="submit">invia</button>
//   </form>
// );
