import logo from "./logo.svg";
import "./App.css";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
// CopyToClipboard 태그 사이에 <text>, <button>, .. 등의 태그가 포함되어야 정상적으로 인식된다. 없다면 렌더링 오류가 발생함!

function App() {
  let keyArr = { ctrlKey: 17, cmdKey: 91, vKey: 86, cKey: 67 };
  const handleKeyDown = (e) => {
    e.preDefault();
    let charCode = String.fromCharCode(e.which).toLowerCase();
    if ((e.ctrlKey || e.metaKey) && charCode === "c") {
      alert("CTRL+C Pressed");
      navigator.clipboard.writeText(this.state.textToCopy);
    } else if ((e.ctrlKey || e.metaKey) && charCode === "v") {
      alert("CTRL+V Pressed");
    }
  };
  return (
    <div className="App">
      <CopyToClipboard
        text="토람은행 123-456-7890"
        onKeyDown={(e) => {
          if (e.key === "Enter") alert("enter");
        }}
      >
        <text>클립보드에 복사될 텍스트</text>
      </CopyToClipboard>
      <div
        onKeyDown={(e) => {
          if (e.key === "Enter") alert("enter");
        }}
      >
        ㅎㅇ욤
      </div>
    </div>
  );
}

export default App;
