import { useState } from "react";

function App() {
  const [idea, setIdea] = useState("");
  const [ideas, setIdeas] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    if (idea.trim() === "") {
      return;
    }

    const newIdea = {
      id: Date.now(),
      text: idea,
    };

    setIdeas([...ideas, newIdea]);
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

      <ul>
        {ideas.map((idea) => (
          <li key={idea.id}>{idea.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
