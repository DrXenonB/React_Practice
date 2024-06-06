import "./App.css";
import ExpandableText from "./Components/ExpandableText";

function App() {
  return (
    <div className="app">
      <ExpandableText maxChars={50}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta
        lacinia metus, non condimentum libero porttitor eget. Praesent feugiat
        faucibus nisi, eu vestibulum mauris mollis sit amet. Vestibulum eget
        malesuada est, sit amet imperdiet dolor. Praesent enim lacus, vestibulum
        in ligula vel, semper aliquam quam. Sed consectetur ut mauris et dictum.
        Maecenas mollis dignissim neque, ut sagittis erat faucibus tincidunt.
        Vivamus vel nisl vitae quam dapibus egestas.
      </ExpandableText>
    </div>
  );
}

export default App;
