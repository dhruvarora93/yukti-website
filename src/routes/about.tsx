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
          <img src="/AboutMe.jpeg" alt="Yukti presenting" class="about-photo-top" />
          <img src="/yukti@trinity.jpeg" alt="Yukti at Trinity College Dublin" class="about-photo-bottom" />
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

      {/* Section 3: Publications */}
      <section class="about-background">
        <div class="about-background-left">
          <h2>Publications</h2>
        </div>
        <div class="about-background-right">
          <div class="about-bg-section">
            <div class="about-publication">
              <p>
                Arora, Y., Farahani, Z. T., Matarutse, E., Murphy, R., et al. (2025). Creating safe spaces through
                community-based participatory research: Early reflections from the CHUMS study (Cultural Humility in
                Mental Health Services). In <em>Collective Voices in Neurodiversity Initiative (CVNI) Conference</em>{" "}
                (Conference abstract). Cork, Ireland.{" "}
                <a href="https://cvni.ie/2025-2/" target="_blank" rel="noopener noreferrer">
                  https://cvni.ie/2025-2/
                </a>
              </p>
            </div>
            <div class="about-publication">
              <p>
                Farahani, Z. T., Arora, Y., Matarutse, E., Bounekdja, D., Marchelewska, E., Villani, J., &amp; Murphy,
                R. (2025). Creating a national mental health engagement infrastructure for migrant and ethnic minorities.
                Cairde.
              </p>
            </div>
            <div class="about-publication">
              <p>
                Farahani, Z. T., Arora, Y., Matarutse, E., et al. (2025). The practice and operationalisation of
                "Cultural Humility" across disciplines: A scoping review protocol. <em>HRB Open Research</em>, 8:38.
              </p>
            </div>
            <div class="about-publication">
              <p>
                Arora, Y., et al. (2022). The Impact of Self-Stigma of Seeking Help on Stress Perceived by Family
                Caregivers of COVID-19 Patients: A Mixed-Methods Approach. <em>International Journal of Indian
                Psychology</em>, 10(4).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Training & Applied Experience */}
      <section class="about-background">
        <div class="about-background-left">
          <h2>Training &amp; Applied Experience</h2>
        </div>
        <div class="about-background-right">
          <div class="about-bg-section">
            <p>
              My background includes training in trauma-informed approaches, psychological first aid, and peer-based
              mental health support, alongside supervised experience in therapeutic settings.
            </p>
            <p>
              I was selected to attend a research training school in Brussels focused on carrying out sensitive
              qualitative fieldwork, with emphasis on ethics, reflexivity, and researcher accountability when working
              with vulnerable groups, particularly in mental health and migration-related research.
            </p>
            <p>
              Together, these experiences shape how I approach vulnerability, power, and context in mental health work,
              with care and close attention to how people are affected in practice.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Courses & Certifications */}
      <section class="about-background">
        <div class="about-background-left">
          <h2>Selected Courses &amp; Certifications</h2>
        </div>
        <div class="about-background-right">
          <div class="about-bg-section">
            <ul class="about-courses-list">
              <li>Trauma-informed approaches to mental health care</li>
              <li>Qualitative research methodology and data analysis</li>
              <li>Community-based participatory research (CBPR)</li>
              <li>Psychological First Aid (Johns Hopkins University)</li>
              <li>Positive Psychiatry and Mental Health (University of Sydney)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LinkedIn */}
      <div class="about-linkedin">
        <a
          href="https://www.linkedin.com/in/yuktiarora1/"
          target="_blank"
          rel="noopener noreferrer"
          class="about-linkedin-btn"
        >
          Connect with me on LinkedIn
        </a>
      </div>

    </div>
  );
}
