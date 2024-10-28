import React from "react";
import RouterConfig from "@/routes/RouterConfig";
import { AppProvider } from "./providers/app";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <RouterConfig />
        <ScrollToTop />
      </AppProvider>
    </div>
  );
}

export default App;
