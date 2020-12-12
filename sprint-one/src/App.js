import "./App.scss";
import Header from "../src/components/Header/Header";
import Video from "../src/components/Video/Video";
import Player from "../src/components/Player/Player";
import Conversation from "./components/Conversation/Conversation";
import Comments from "./components/Comments/Comments";
import Next from "./components/Next/Next";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Video />
        <div className="main__text-container">
          <Player />
          <Conversation />
          <Comments />
        </div>
        <div className="main__next-video-container">
          <Next />
        </div>
      </main>
    </div>
  );
}

export default App;
