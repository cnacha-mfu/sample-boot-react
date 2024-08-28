import "./App.css";
import CreateCustomer from "./components/Customer/CreateCustomer";
import ListCustomer from "./components/Customer/ListCustomer";
import { Route, Routes } from "react-router-dom";
import EditCustomer from "./components/Customer/EditCustomer";
import ViewCustomer from "./components/Customer/ViewCustomer";
import Header from "./components/Common/Header";
import Home from "./components/Layout/Home";
function App() {
  return (
    <div className="App">
      <header className="container">
        <div className="">
          <Header />
          <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/edit-customer/:id" element={<EditCustomer />} />
            <Route path="/view-customer/:id" element={<ViewCustomer />} />
            <Route path="/create-customer" element={<CreateCustomer />} />
            <Route path="/show-customer" element={<ListCustomer />} />
          </Routes>
          
        </div>
      </header>
    </div>
  );
}

export default App;
