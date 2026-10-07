import { Playground } from "./playground";
import { Header } from "./playground/Header";

function App() {
  return (
    <main className="h-screen max-h-screen flex flex-col">
      <Header />
      <Playground />
    </main>
  );
}

export default App;
