import { useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  // After Render
  useEffect(() => {
    // Side Effect
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div className="app">
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
}

export default App;
