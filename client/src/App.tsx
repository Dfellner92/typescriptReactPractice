import React from "react";
import "./App.css";
import UseReducerComponent from "./components/UseReducerComponent";
import UseRefComponent from "./components/UseRefComponent";
import CustomHookComponent from "./components/CustomHookComponent";

function App() {
  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <CustomHookComponent/>
      <h1>Use Ref</h1>
      <UseRefComponent />
      <h1>Use Reducer</h1>
      <UseReducerComponent />
    </div>
  );
}

export default App;
