import React from "react";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import Project5 from "./components/Project5";

function App() {
  return (
    <>
      <div style={{ padding: "20px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Weekly Test 1 Projects</h1>

        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ marginBottom: "15px" }}>Project 1: Grocery List App</h2>
          <Project1 />
        </section>

        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ marginBottom: "15px" }}>Project 2: Login Status Toggle</h2>
          <Project2 />
        </section>

        <section>
          <h2 style={{ marginBottom: "15px" }}>Project 3: Age Increaser Card</h2>
          <Project3 name="John Doe" />
        </section>

        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ marginBottom: "15px" }}>Project 4: Live Character Counter</h2>
          <Project4 />
        </section>

        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ marginBottom: "15px" }}>Project 5: Favorite Fruit Selector</h2>
          <Project5 />
        </section>
      </div>
    </>
  );
}

export default App;
