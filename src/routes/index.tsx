import { Title } from "@solidjs/meta";
import "./index.css";

export default function Home() {
  return (
    <main class="home">
      <Title>Yukti Arora</Title>

      {/* Intro */}
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
            also work with Indian students who are considering psychology programmes abroad, and want
            guidance that's honest and grounded in real experience.
          </p>
          <p>
            My approach in both areas is the same- thoughtful, unhurried, and shaped by what you
            actually need. If either of those sounds like you,
          </p>
          <p class="home-righplace"><em>you're in the right place.</em></p>
        </div>
        <div class="home-photo">
          <img src="/Home.jpeg" alt="Yukti Arora" />
        </div>
      </div>

      {/* Service Cards */}
      <div class="home-services">
        <div class="home-service-wrapper">
          <img src="/Mental health-bro.svg" alt="" class="home-service-img" />
          <a href="/therapy" class="home-service-card">
            Therapy and Counselling
          </a>
        </div>
        <div class="home-service-wrapper">
          <img src="/Study abroad-bro.svg" alt="" class="home-service-img" />
          <a href="/study-abroad" class="home-service-card">
            Study Abroad and Psychology Mentoring
          </a>
        </div>
      </div>

      {/* How I work */}
      <section class="home-how">
        <div class="home-how-text">
          <h2>How I work?</h2>
          <p>
            My approach is thoughtful, empathetic, and collaborative. Whether in therapy or
            study-abroad guidance, I create a space where you feel supported, understood, and
            empowered to make informed, meaningful decisions.
          </p>
          <a href="/about" class="home-learn-btn">Learn More</a>
        </div>
        <img src="/how-i-work.svg" alt="" class="home-how-img" />
      </section>

      {/* My Approach */}
      <section class="home-approach">
        <h2>My Approach</h2>
        <div class="home-approach-items">
          <div class="home-approach-item">
            <h3>Confidentiality</h3>
            <p>
              Confidentiality is at the core of my therapy practice. I prioritise privacy and trust,
              ensuring that your personal information and sessions remain completely confidential.
            </p>
          </div>
          <div class="home-approach-item">
            <h3>Empathy</h3>
            <p>
              Empathy is the foundation of my therapeutic approach. I provide a compassionate and
              understanding environment where you can feel heard, validated, and supported throughout
              your healing journey.
            </p>
          </div>
          <div class="home-approach-item">
            <h3>Personalized Care</h3>
            <p>
              I believe in offering personalised care to every client. My tailored therapy sessions
              focus on your unique needs and goals, allowing for a customized therapeutic experience.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section class="home-faq">
        <div class="home-faq-header">
          <h2>Frequently Asked Questions</h2>
          <img src="/FAQs-cuate.svg" alt="" class="home-faq-img" />
        </div>
        <div class="home-faq-items">
          <div class="home-faq-item">
            <h3>What services do you offer?</h3>
            <p>
              I provide a range of therapy services tailored to individual needs, including cognitive
              behavioral therapy, mindfulness techniques, and stress management. Each session is
              personalized to address specific concerns and promote overall well-being. I also guide
              students interested in studying psychology abroad and help them with their applications.
            </p>
          </div>
          <div class="home-faq-item">
            <h3>How do I schedule an appointment?</h3>
            <p>
              Scheduling an appointment with me is easy. Simply go to the contact page and fill out
              the form. I will get back to you and strive to accommodate your schedule and provide
              prompt assistance.
            </p>
          </div>
          <div class="home-faq-item">
            <h3>What can I expect during a therapy session?</h3>
            <p>
              During a therapy session, you can expect a safe and confidential environment where you
              can openly discuss your thoughts and feelings. I will listen attentively, offer
              guidance, and work collaboratively with you to explore solutions and promote personal
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <p class="home-footer-note">I do not currently offer crisis support or emergency services.</p>
    </main>
  );
}
