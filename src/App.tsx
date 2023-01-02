import { Header, Sidebar } from "components";
import { useState, Fragment } from "react";
import "./App.css";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Fragment>
      <Sidebar collapsed={collapsed}/>
      <Header onCollapse={handleToggleSidebar} />
    </Fragment>
  );
}

export default App;
