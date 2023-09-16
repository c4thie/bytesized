import { useState, useEffect } from "react";
import "./App.css";
import Loading from "./components/Loading";
import GetStarted from "./components/GetStarted";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 1500);

  return (
    <>
      <div className="container">
        {isLoading && <Loading />}
        <AnimatePresence>
          {!isLoading && <GetStarted styles={{ display: "none" }} />}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
