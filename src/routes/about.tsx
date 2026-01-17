import { Title } from "@solidjs/meta";
import "./about.css";

export default function About() {
  return (
    <div class="about-container">
      <Title>About - Yukti Arora</Title>

      <main class="about-content">
        <h1>About Me</h1>

        <div class="about-text">
          <p>
            As a Counseling Psychology graduate, I am deeply passionate about mental health. I am eager to explore and study in-depth strategic methods of therapeutic interventions for trauma and risk behaviours. My research interests encompass trauma psychology, caregivers' mental health, working with children and adolescents, and understanding counselling from a cross-cultural perspective.
          </p>

          <p>
            Currently, I am working as a Research Assistant at the School of Nursing, Psychotherapy & Community Health at Dublin City University on The CHUMS Study (Cultural Humility in Mental Health Services). In this role, I contribute to developing an optimised model of cultural humility in mental health care, ensuring it is context-responsive, implementable, and measurable. I am also engaged in a research project with YWP, exploring dissociation in female sex workers in India. This project aims to understand the psychological impacts and coping mechanisms related to dissociation in this demographic, providing insights for better mental health interventions.
          </p>

          <p>
            Through my experiences at various organisations and on-ground learning, I have developed a comprehensive skill set. I am proficient in communication, program implementation, event management, and content development.
          </p>

          <div class="about-links">
            <a
              href="https://www.linkedin.com/in/yuktiarora1/"
              target="_blank"
              rel="noopener noreferrer"
              class="linkedin-link"
            >
              Connect on LinkedIn →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
