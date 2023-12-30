import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Countdown from "react-countdown";

function App() {
  const [message, setMessage] = useState(["Bye 2023!"]);

  const particleInit = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newYearDate - nowDate;
    return remainingTime;
  }

  return (
    <>
      <Particles init={particleInit} options={{ preset: "fireworks" }} />
      <div className="flex flex-col justify-center items-center min-h-screen gap-5">
        <span className="text-white text-4xl font-bold px-4 z-50">
          <Typewriter words={message} loop={false} cursor cursorStyle={"✨"} />
        </span>
        <div className="text-white text-2xl font-bold z-50">
          <Countdown date={Date.now() + timeLeft()} onComplete={() => setMessage(["Happy New Year 2024!"])} />
        </div>
        <span className="flex flex-row z-0">
          <a href="https://github.com/ranggaydtm/Happy-newYear" target="_blank" rel="noopener noreferrer">
            <FaGithub size={25} style={{ color: "#FFFFFF" }} />
          </a>
          <span className="text-white text-2 ml-2 font-mono">ranggaydtm</span>
        </span>
      </div>
    </>
  );
}

export default App;
