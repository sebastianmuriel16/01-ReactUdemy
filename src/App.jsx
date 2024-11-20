import { Header } from "./components/Header";
import { CORE_CONCEPTS } from "./data";
import { CoreConcepts } from "./components/CoreConcepts";
import { Examples } from "./components/Examples";
import { EXAMPLES } from "./data";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts CORE_CONCEPTS={CORE_CONCEPTS} />
        <Examples examples={EXAMPLES} />
      </main>
    </>
  );
}

export default App;
