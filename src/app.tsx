import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import BottomToolbar from "./BottomToolbar";
import "./app.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div>
          <h1>Rocky</h1>
        </div>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={preactLogo} alt="Preact logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p>
          Click on the Vite and React logos to learn more. Proident quis
          proident tempor cillum dolor qui. Aliqua consequat nostrud pariatur ea
          labore. Aliquip veniam pariatur enim fugiat fugiat tempor non ut id
          fugiat. Quis sit fugiat duis pariatur. Ullamco mollit reprehenderit
          nulla irure ipsum sint proident qui voluptate commodo. Ipsum fugiat
          exercitation commodo magna. Dolor minim duis esse in cillum nostrud
          dolor dolor fugiat elit et. Sunt do ea laboris voluptate sint esse
          deserunt cupidatat irure minim laboris ad ex aliqua. Non irure tempor
          pariatur do commodo consectetur nostrud fugiat occaecat sunt in sunt
          pariatur aliquip. Fugiat aliqua sit culpa aliquip magna laboris magna
          veniam non. Sit est cillum reprehenderit incididunt sint velit labore
          commodo veniam. Aute magna consequat dolore eiusmod sit. Lorem culpa
          veniam aute ea duis veniam ex. Veniam consectetur tempor eu fugiat do
          anim duis ea nulla est nisi ut dolore qui ad. Enim sint cillum veniam
          duis enim anim amet do officia reprehenderit aliqua sit ut velit. Qui
          dolor labore sunt officia commodo culpa cillum tempor tempor. Ipsum
          est pariatur aute ipsum amet in officia nostrud qui Lorem do
          adipisicing ex. Ex minim elit excepteur. Ut officia aute non veniam do
          occaecat deserunt ipsum sit enim. Consequat reprehenderit officia
          dolor laboris ad incididunt do ipsum non velit amet laboris aute.
          Pariatur incididunt non ea veniam sunt eiusmod do laboris. Voluptate
          cillum sint id magna aute irure in reprehenderit sunt. Aliqua anim
          elit nisi anim irure occaecat ea fugiat qui incididunt Lorem pariatur
          occaecat cupidatat ullamco. Dolore dolore sit commodo ipsum Lorem est
          excepteur veniam sunt magna ipsum sit veniam. Nulla ipsum elit
          reprehenderit. Velit ipsum occaecat minim consectetur et occaecat. Id
          voluptate laboris eu ex nisi duis velit Lorem fugiat adipisicing
          cupidatat velit cupidatat. Nostrud ea consequat eu labore quis irure
          ea Lorem. Labore commodo minim Lorem irure incididunt sit est
          voluptate fugiat tempor. Cupidatat sint ad veniam deserunt incididunt
          est nisi irure dolore esse sit irure. Cillum minim aliquip sint eu
          sunt ad duis laboris nisi. Dolore ullamco in dolore laborum commodo.
          Deserunt ullamco laborum sunt laboris eiusmod adipisicing ad laborum
          elit id Lorem amet eiusmod adipisicing veniam. Consequat consequat
          pariatur aliquip ex exercitation laborum. Consectetur non officia esse
          est ipsum. Nulla nostrud eu velit dolore laborum dolor cupidatat
          laborum veniam nisi velit est ad ut.
        </p>
      </div>
      <BottomToolbar />
    </>
  );
}

export default App;
