import { useState, useEffect } from "react";
import "./App.css";
import Loading from "./components/Loading";
import { AnimatePresence } from "framer-motion";
import GetStarted from "./components/GetStarted";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 1750);

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
