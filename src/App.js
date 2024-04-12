import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./screens/Home";
import { ViewWorkers } from "./components/ViewWorkers";
import { AddWorker } from "./components/AddWorker";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<AddWorker />} />
        <Route path="all-workers" element={<ViewWorkers />} />
      </Route>
    </Routes>
  );
}

export default App;
