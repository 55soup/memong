import logo from "./logo.svg";
import "./App.css";
import { CopyToClipboard } from "react-copy-to-clipboard/src";

function App() {
  return (
    <div className="App">
      <CopyToClipboard
        className="Toram"
        text="토람은행 123-456-7890"
        onCopy={() => alert("클립보드에 복사되었습니다.")}
      >
        <text>클립보드에 복사될 텍스트</text>
      </CopyToClipboard>
    </div>
  );
}

export default App;
