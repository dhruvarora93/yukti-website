import { Title } from "@solidjs/meta";
import "./about.css";

export default function About() {
  return (
    <div class="about-container">
      <Title>About me - Yukti Arora</Title>

      {/* Section 1: Who am I */}
      <section class="about-intro">
        <div class="about-intro-left">
          <h1>Who am I?</h1>
          <p>
            I'm a counselling psychologist working across therapy, mental health research, and
            mentoring students considering psychology.
          </p>
          <p>
            My psychoanalytic training shapes a reflective, theory-informed practice, attentive to
            listening, meaning, and the impact of personal and social contexts.
          </p>
          <p>
            I'm especially interested in how psychological ideas are used in real settings, and how
            this shapes experience over time.
          </p>
        </div>
        <div class="about-intro-photos">
          <img src="/about-photo-1.jpg" alt="Yukti presenting" class="about-photo-top" />
          <img src="/about-photo-2.jpg" alt="Yukti at Trinity College Dublin" class="about-photo-bottom" />
        </div>
      </section>

      {/* Section 2: My Background */}
      <section class="about-background">
        <div class="about-background-left">
          <h2>My Background</h2>
        </div>
        <div class="about-background-right">
          <div class="about-bg-section">
            <h3>Education</h3>
            <div class="about-edu-item">
              <strong>MPhil in Psychoanalytic Studies</strong>
              <span>Trinity College Dublin</span>
            </div>
            <div class="about-edu-item">
              <strong>MA in Counselling Psychology</strong>
              <span>Amity University, Noida</span>
            </div>
            <div class="about-edu-item">
              <strong>BA (Hons) in Philosophy</strong>
              <span>Lady Shri Ram College for Women, University of Delhi</span>
            </div>
          </div>

          <div class="about-bg-section">
            <h3>Research &amp; Academic Work</h3>
            <p>
              I currently work as a Research Assistant at Dublin City University, contributing to
              the CHUMS Study (Cultural HUmility in Mental health Services), a community-based
              participatory research project focused on culturally responsive mental health care in
              Ireland. My work involves qualitative research, literature reviews, data analysis, and
              collaborative engagement with service users and stakeholders.
            </p>
            <p>
              More about the project:{" "}
              <a
                href="https://www.dcu.ie/nursing-and-human-sciences/chums-study"
                target="_blank"
                rel="noopener noreferrer"
              >
                The CHUMS Study
              </a>
            </p>
            <p>
              My broader research experience includes trauma-informed, community-based, and
              qualitative projects across diverse populations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
