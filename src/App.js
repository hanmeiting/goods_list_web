import "./App.less";
import LayoutCom from "@/layout/LayoutCom";
import RouterCom from "@/router/RouterCom";

function App() {
  return (
    <div className="App">
      <LayoutCom>
        <RouterCom></RouterCom>
      </LayoutCom>
    </div>
  );
}

export default App;
