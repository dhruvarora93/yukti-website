import { Title } from "@solidjs/meta";
import "./study-abroad.css";

export default function StudyAbroad() {
  return (
    <div class="study-abroad-container">
      <Title>Study Abroad Consultation - Yukti Arora</Title>

      <section class="study-abroad-intro">
        <div class="study-abroad-text">
          <h1>Study Abroad Consultation</h1>
          <p>
            I work with students who are considering studying psychology abroad and don't want to
            navigate the process on their own.
          </p>
          <p>
            Having gone through this myself, I know how overwhelming it can be- researching
            programmes, understanding different academic systems, and making decisions without clear
            guidance specific to psychology.
          </p>
          <p>
            I've personally navigated applications across multiple systems, including receiving
            offers from universities in the United States and Ireland, such as Trinity College Dublin
            and Columbia University, where I was also awarded a scholarship, among others. That
            experience- including decisions around funding, scholarships, and relocation- shapes how
            I support students now, practically and realistically, rather than in theory.
          </p>
          <p>
            This work is about approaching the process together: not only applications and course
            choices, but also the realities of moving countries, adjusting to new cultures, and
            building a life away from home.
          </p>
          <p>
            I offer a <a href="/contact" class="study-abroad-link">free 15-minute consultation call</a> where
            we can discuss your plans and see how I can help.
          </p>
        </div>
        <div class="study-abroad-photo">
          <img src="/studyAbroad.jpeg" alt="Study Abroad" />
        </div>
      </section>
      {/* Practical details */}
      <section class="study-abroad-practical">
        <h2>Practical details</h2>

        <div class="study-abroad-detail-section">
          <h3>What we can work on together:</h3>
          <ul>
            <li>Choosing the right programme — making sense of different universities, systems, and what actually fits your background and goals</li>
            <li>Personal statements and applications — developing materials that reflect who you are, not just what sounds good on paper</li>
            <li>Visas and relocation — the practical side of actually moving countries, including what to expect and how to prepare</li>
            <li>The emotional side of going abroad — adjusting to a new culture, being far from home, and building a life in a new place</li>
          </ul>
        </div>

        <div class="study-abroad-detail-section">
          <h3>How it works:</h3>
          <ul>
            <li>We start with a <em>free 15-minute consultation call</em> to talk through where you are in the process and what kind of support would be most useful. From there, we can figure out together what makes sense.</li>
            <li>Fees are discussed during the initial consultation call. I aim to keep this accessible and am happy to talk through what works for you.</li>
            <li>Get in touch to book your free consultation call.</li>
          </ul>
        </div>

        <div class="study-abroad-cta">
          <a href="/contact" class="study-abroad-btn">Get In Touch</a>
        </div>
      </section>

    </div>
  );
}
