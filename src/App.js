import Toolbar from "./components/Toolbar";
import { AppContext } from "./shared/app-context";

const data = {
  foobar: [
    { id: 1, name: "Foo", email: "foo@email.com" },
    { id: 2, name: "Bar", email: "bar@email.com" },
  ],
  bizbaz: [
    { id: 1, name: "Biz", email: "biz@email.com" },
    { id: 2, name: "Baz", email: "baz@email.com" },
  ],
};

function App() {
  return (
    <AppContext.Provider value={data}>
      <Toolbar />
    </AppContext.Provider>
  );
}

export default App;
