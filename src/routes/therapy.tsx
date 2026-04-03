import { Title } from "@solidjs/meta";
import "./therapy.css";

export default function Therapy() {
  return (
    <div class="therapy-container">
      <Title>Therapy - Yukti Arora</Title>

      <section class="therapy-intro">
        <h1>My Therapeutic Practice</h1>
        <p>I offer one-to-one therapy for adults.</p>
        <p>
          My way of working is thoughtful, paced, and trauma-informed. I'm interested not only in
          what brings someone to therapy, but in how their experiences, relationships, and inner
          patterns have taken shape over time. For me, therapy is a space to slow things down and
          think together, rather than rush toward solutions.
        </p>
        <p>
          I currently work with adults around issues such as anxiety, low mood, everyday stress,
          relationship difficulties, self-esteem, and periods of transition or uncertainty. This
          includes people who are preparing to move abroad, have recently relocated, or are adjusting
          to life in a new country, and are trying to make sense of the emotional and relational
          impact of that change.
        </p>
        <p class="therapy-callout">
          You don't need a diagnosis or a clear goal to begin therapy.
        </p>
        <p>
          My approach draws on narrative and reflective ways of working, alongside psychoanalytic
          thinking. In practice, this means paying attention to the stories people tell about
          themselves; where those stories come from, how they've been shaped by relationships and
          context, and whether they still feel helpful or fair. We might explore recurring patterns,
          moments that feel stuck, or parts of experience that are difficult to put into words.
        </p>
        <p>
          I work collaboratively and at a pace that feels manageable. I'm attentive to safety,
          boundaries, and the wider context of someone's life- including cultural, relational, and
          social factors- and I don't assume there is a single "right" way to understand or change
          things.
        </p>
      </section>

      <section class="therapy-practical">
        <h2>Practical details</h2>

        <div class="therapy-detail-section">
          <h3>Sessions</h3>
          <ul>
            <li>One-to-one therapy for adults</li>
            <li>Sessions are typically 50–60 minutes</li>
            <li>Offered online</li>
            <li>Usually weekly, though this can be discussed depending on need and capacity</li>
            <li>Sessions are scheduled in advance by appointment.</li>
          </ul>
        </div>

        <div class="therapy-detail-section">
          <h3>Fees</h3>
          <ul>
            <li>Session fee: ₹1100</li>
            <li>Sliding scale: Limited spots available</li>
            <li>
              Premium session times (early morning 8:00–10:00 am IST, late evening 10:00–11:30 pm
              IST): ₹1600
            </li>
          </ul>
        </div>

        <div class="therapy-detail-section">
          <h3>Approach &amp; Boundaries</h3>
          <ul>
            <li>Therapy is confidential and conducted within clear professional and ethical boundaries</li>
            <li>I work collaboratively and at a pace that feels manageable</li>
          </ul>
        </div>

        <div class="therapy-detail-section">
          <h3>What happens next?</h3>
          <ul>
            <li>
              Once you fill out the contact form (linked below), I'll get in touch within 24–48
              hours to set up a free 15-minute consultation call.
            </li>
            <li>
              This is a chance for us to connect, you can ask questions, share anything that feels
              important, and get a feel for how I work.
            </li>
            <li>
              If you feel aligned with my work, I will share a therapy agreement form via email.
              Once signed, we will schedule our first full session.
            </li>
          </ul>
        </div>

        <div class="therapy-detail-section">
          <h3>Booking</h3>
          <p>Sessions can be booked via the link below.</p>
          <a href="/contact" class="therapy-book-btn">Contact me to book a session</a>
        </div>

        <p class="therapy-footer-note">
          <em>
            If you're unsure whether therapy with me would be a good fit, you're welcome to get in
            touch with questions.
          </em>
        </p>
      </section>
    </div>
  );
}
