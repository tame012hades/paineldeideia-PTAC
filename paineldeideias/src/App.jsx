import { useState } from "react";

function App() {
  const [idea, setIdea] = useState("");
  const [ideas, setIdeas] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    if (idea.trim() === "") {
      return;
    }

    setIdeas([...ideas, idea]);
    setIdea("");
  }

  return (
    <div>
      <h1>Ideias do jvmenez</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={idea}
          onChange={(event) => setIdea(event.target.value)}
          placeholder="Digite uma ideia"
        />

        <button type="submit">Adicionar</button>
      </form>

      {ideas.map((idea, index) => (
        <p key={index}>{idea}</p>
      ))}
    </div>
  );
}

export default App;
