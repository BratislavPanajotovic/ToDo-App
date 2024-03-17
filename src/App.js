import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToDoProvider } from "./context/Context";
function App() {
  return (
    <div className="App">
      <ToDoProvider>
        <Header />
        <List />
        <Footer />
      </ToDoProvider>
    </div>
  );
}

export default App;
