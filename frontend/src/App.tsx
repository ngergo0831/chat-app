import React from "react";
import axios from "axios";

function App() {
    axios.get("/messages").then(function (response) {
        console.log(response);
    });
    return <div className="App">Hello</div>;
}

export default App;
