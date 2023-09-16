import { useState, useEffect } from "react";
import "./App.css";
import Loading from "./components/Loading";
import GetStarted from "./components/GetStarted";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 1000);

  return (
    <>
      <div>
        {isLoading && <Loading />}
        {!isLoading && <GetStarted />}
      </div>
    </>
  );
}

export default App;
