import Chat from "./components/Chat";
import User from "./components/User";

function App() {
  return (
    <>
      <div className="columns-2 flex justify-center pt-10 gap-5 h-screen">
        <div className="w-1/5">
          <User />
        </div>
        <div className="w-3/5 h-5/6 bg-gray-300 rounded-2xl">
          <Chat />
        </div>
      </div>
    </>
  );
}

export default App;
