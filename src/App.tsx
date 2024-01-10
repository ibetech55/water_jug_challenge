import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import { theme } from "./Theme";
import "./App.css";

function App() {

  return (
    <>
      <div className="App">
        <ConfigProvider theme={theme}>
          <RouterProvider router={router} />
        </ConfigProvider>
      </div>
    </>
  );
}

export default App;