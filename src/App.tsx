import { DynamicDigitalClock } from "components";
import { Fragment } from "react";
import "./App.css";

function App() {
  // const [collapsed, setCollapsed] = useState(false);
  // const handleToggleSidebar = () => {
  //   setCollapsed(!collapsed);
  // };
  return (
    <Fragment>
      {/* <Sidebar collapsed={collapsed} /> */}
      {/* <Header onCollapse={handleToggleSidebar} /> */}
      {/* <Switch /> */}
      {/* <Button>Click me</Button> */}
      {/* <Loading /> */}
      <DynamicDigitalClock />
    </Fragment>
  );
}

export default App;
