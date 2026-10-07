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
      feita: false,
    };

    setIdeas([...ideas, newIdea]);
    setIdea("");
  }

  function marcarComoFeita(id) {
    setIdeas(
      ideas.map((idea) =>
        idea.id === id
          ? { ...idea, feita: !idea.feita }
          : idea
      )
    );
  }

  function removerIdea(id) {
    setIdeas(ideas.filter((idea) => idea.id !== id));
  }

  const total = ideas.length;
const concluidas = ideas.filter((idea) => idea.feita).length;

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
          <li key={idea.id}>
            <input
              type="checkbox"
              checked={idea.feita}
              onChange={() => marcarComoFeita(idea.id)}
            />

            <span className={idea.feita ? "riscado" : ""}>
              {idea.text}
            </span>

            <button onClick={() => removerIdea(idea.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
<footer>
  {`${total} ideias no painel · ${concluidas} concluídas`}
</footer>


export default App;
