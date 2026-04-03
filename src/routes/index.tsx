import { Title } from "@solidjs/meta";
import "./index.css";

export default function Home() {
  return (
    <main class="home">
      <Title>Yukti Arora</Title>
      <h1 class="home-greeting">Hi!</h1>
      <div class="home-content">
        <div class="home-text">
          <p>
            I'm <strong>Yukti</strong>- a counselling psychologist, researcher, and someone who has
            navigated studying abroad myself. I'm currently based in Dublin, where I also work as a
            research assistant at Dublin City University.
          </p>
          <p class="home-tagline">Two things, one space.</p>
          <p>
            I offer one-to-one therapy for adults working through difficult periods- anxiety, low
            mood, transitions, relationships, and the emotional weight of living far from home. I
            also work with Indian students who are considering psychology as a career path abroad.
          </p>
        </div>
        <div class="home-photo">
          <img src="/photo.jpg" alt="Yukti Arora" />
        </div>
      </div>
    </main>
  );
}
