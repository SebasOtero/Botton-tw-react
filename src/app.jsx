import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="app">
      <TwitterFollowCard  userName="midudev">
        Miguel Angel Duran
      </TwitterFollowCard>

      <TwitterFollowCard  userName="quentin_rip">
        Ill Quentin
      </TwitterFollowCard>

      <TwitterFollowCard >
        Ye
      </TwitterFollowCard>
    </section>
  );
}
