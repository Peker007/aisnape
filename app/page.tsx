const services = [
  { number: "01", title: "KI-Potenzialscan", text: "Ein gemeinsamer Blick auf einen konkreten Büroprozess: Wie oft kommt er vor, wo entsteht Aufwand und welche Daten dürfen verarbeitet werden? Das Ergebnis ist eine Entscheidungsvorlage mit Nutzen, Kosten und Grenzen.", meta: "Geplanter Einstieg · ein Prozess · schriftliche Empfehlung" },
  { number: "02", title: "Anfragen & Dokumente", text: "E-Mails und PDF-Anhänge vorsortieren, Angaben in strukturierte Vorgänge übertragen und Antwortentwürfe vorbereiten. Fehlende Informationen und unklare Fälle gehen an Ihr Team.", meta: "Pilot: ein Postfach, ein Vorgangstyp, eine Zielanwendung" },
  { number: "03", title: "Internes Wissen", text: "Arbeitsanweisungen, Objektunterlagen und Servicewissen gezielt durchsuchen. Antworten verweisen auf freigegebene Quellen; bei fehlender Grundlage bleibt die Frage offen.", meta: "Pilot: eine Dokumentensammlung, eine Nutzergruppe" },
];

const process = [
  ["Verstehen", "Ablauf, Engpass, Datenarten und Verantwortliche gemeinsam erfassen."],
  ["Beweisen", "Einen begrenzten Pilot mit realistischen Testfällen und klaren Kennzahlen bauen."],
  ["Absichern", "Berechtigungen, Protokollierung, Fallback, Datenschutz und Abnahme dokumentieren."],
  ["Übergeben", "Verantwortliche benennen, Dokumentation übergeben und Betreuung mit vereinbarten Servicezeiten separat festlegen."],
];

const faq = [
  { question: "Kann ich bereits ein Projekt beauftragen?", answer: "AISNAPE befindet sich in Vorbereitung. Diese Seite stellt das geplante Angebot vor. Aktuell werden darüber keine Aufträge oder Kontaktanfragen angenommen; Kontakt und Leistungsstart werden nach Abschluss der Vorbereitungen freigeschaltet." },
  { question: "Was wird im Pilot konkret gemessen?", answer: "Vor Beginn werden Ausgangswerte und Abnahmekriterien vereinbart: etwa Bearbeitungszeit je Vorgang, korrekt übernommene Angaben und notwendige Nacharbeit. Auch unlesbare Dokumente, fehlende Daten und Fehlzuordnungen gehören in den Test. Einsparungen werden erst nach einer Auswertung beziffert." },
  { question: "Bleiben unsere bestehenden Systeme erhalten?", answer: "Geplant ist die Anbindung vorhandener E-Mail-, Dokumenten- und Branchensysteme über verfügbare Schnittstellen oder freigegebene Exporte. Zugriffsrechte, Lizenzen und technische Machbarkeit werden vorher geprüft. KI ist nur dort vorgesehen, wo feste Regeln nicht ausreichen." },
  { question: "Ist eine lokale KI automatisch sicherer und günstiger?", answer: "Nein. Die Wahl hängt von Datenarten, Modellqualität, Auslastung und Betriebsaufwand ab. Verglichen werden auch Hardware, Updates, Backups und Administration. Ein lokales Modell allein macht einen gesamten Arbeitsablauf weder lokal noch datenschutzkonform." },
  { question: "Sind Telefon-KI und eigene KI-Server auch geplant?", answer: "Ja, als mögliche spätere Erweiterung eines erprobten Ablaufs. Telefonassistenten benötigen eine klare KI-Kennzeichnung, geregelte Übergabe an Menschen und ein passendes Datenschutzkonzept. Arztpraxen und medizinische Entscheidungen gehören nicht zum vorgesehenen Einstiegsangebot." },
  { question: "Wie setzen sich die Kosten zusammen?", answer: "Der Potenzialscan, der begrenzte Pilot und die laufende Betreuung werden getrennt kalkuliert. Ein späteres Angebot benennt Leistungsumfang, Abnahmekriterien und wiederkehrende Kosten für Modelle, Hosting und Schnittstellen. Auf dieser Vorbereitungsseite werden noch keine verbindlichen Preise angeboten." },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="m4.5 10.5 3.2 3.2 7.8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="AISNAPE Startseite">
      <span className="logo-mark" aria-hidden="true"><span /><span /><span /></span>
      <span className="logo-word">AISNAPE</span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#leistungen">Zum Inhalt</a>
      <div className="prelaunch-banner">AISNAPE befindet sich in Vorbereitung · Einblick in das geplante Angebot</div>
      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav aria-label="Hauptnavigation">
            <a href="#leistungen">Leistungen</a>
            <a href="#ablauf">Ablauf</a>
            <a href="#branchen">Branchen</a>
            <a href="#ueber-uns">Über uns</a>
          </nav>
          <a className="header-cta" href="#kontakt">Startstatus <ArrowIcon /></a>
        </div>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Für Handwerk, Immobilien &amp; Gebäudeservice</div>
          <h1>Weniger Routine im Büro. <em>Mehr Zeit für Ihre Aufträge.</em></h1>
          <p className="hero-lead">
            AISNAPE plant KI-Automatisierung für Handwerksbetriebe, Immobilienverwaltungen und Gebäudeservices: Anfragen strukturieren, Dokumente verarbeiten und internes Wissen schneller finden – eingebunden in Ihre vorhandenen Abläufe.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#branchen">Anwendungsfälle ansehen <ArrowIcon /></a>
            <a className="button button-secondary" href="#leistungen">Leistungen ansehen</a>
          </div>
          <ul className="hero-principles" aria-label="Unsere Grundprinzipien">
            <li><CheckIcon /> Prozess vor Technologie</li>
            <li><CheckIcon /> Mensch behält Kontrolle</li>
            <li><CheckIcon /> Cloud, hybrid oder lokal</li>
          </ul>
        </div>

        <div className="system-card" aria-label="Beispiel eines kontrollierten KI-Prozesses">
          <div className="system-card-head">
            <span>BEISPIEL: SCHADENSMELDUNG</span>
            <span className="live-status">Konzept</span>
          </div>
          <div className="workflow">
            <div className="workflow-source">
              <span className="source-icon">01</span>
              <div><small>EINGANG</small><strong>E-Mail</strong></div>
            </div>
            <div className="flow-line"><i /></div>
            <div className="workflow-core">
              <div className="core-orbit orbit-one" />
              <div className="core-orbit orbit-two" />
              <span>AI</span>
            </div>
            <div className="flow-line"><i /></div>
            <div className="workflow-source align-right">
              <div><small>ERGEBNIS</small><strong>Vorgang</strong></div>
              <span className="source-icon accent">04</span>
            </div>
          </div>
          <div className="human-gate">
            <div className="gate-symbol"><span /><span /></div>
            <div><small>IHR TEAM ENTSCHEIDET</small><strong>Prüfung &amp; Freigabe</strong></div>
            <span className="gate-check"><CheckIcon /></span>
          </div>
          <div className="system-metrics">
            <div><small>ERKENNEN</small><strong>Objekt &amp; Anliegen</strong></div>
            <div><small>PRÜFEN</small><strong>Fehlende Angaben</strong></div>
            <div><small>ÜBERGEBEN</small><strong>Zuständiges Team</strong></div>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="AISNAPE Projektversprechen">
        <div className="section-shell signal-grid">
          <div><strong>01</strong><span>Ein konkreter Prozess</span></div>
          <div><strong>02</strong><span>Ein messbarer Pilot</span></div>
          <div><strong>03</strong><span>Ein klarer Betriebsweg</span></div>
        </div>
      </section>

      <section className="section section-shell" id="leistungen">
        <div className="section-intro">
          <div><p className="kicker">Das geplante Angebot</p><h2>Ein klarer Einstieg. Zwei konkrete Anwendungen.</h2></div>
          <p>Am Anfang steht ein einzelner, häufig wiederkehrender Vorgang. Ein begrenzter Pilot zeigt, ob sich die Automatisierung für Ihren Betrieb lohnt.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top"><span>{service.number}</span><span className="mini-arrow"><ArrowIcon /></span></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="service-meta">{service.meta}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="outcome-section">
        <div className="section-shell outcome-grid">
          <div className="outcome-copy">
            <p className="kicker light">Worauf es ankommt</p>
            <h2>Der Pilot muss sich im Arbeitsalltag bewähren.</h2>
            <p>Weniger Suchzeit und weniger manuelle Übertragung sind die Ziele. Ob sie erreicht werden, wird mit realistischen Testfällen und einem Vorher-nachher-Vergleich geprüft.</p>
          </div>
          <div className="outcome-list">
            <article><span>01</span><div><h3>Weniger Suchaufwand</h3><p>Freigegebenes Wissen mit Quellenbezug statt verstreuter Dateien und Rückfragen.</p></div></article>
            <article><span>02</span><div><h3>Schnellere Bearbeitung</h3><p>Wiederkehrende Anfragen vorsortieren und Informationen strukturiert übergeben.</p></div></article>
            <article><span>03</span><div><h3>Nachvollziehbare Qualität</h3><p>Testfälle, Protokollierung, Freigaben und Eskalationswege von Anfang an mitdenken.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section section-shell" id="ablauf">
        <div className="section-intro compact"><div><p className="kicker">Unser Vorgehen</p><h2>Vom Engpass zum geprüften Ablauf.</h2></div></div>
        <ol className="process-list">
          {process.map(([title, text], index) => (
            <li key={title}>
              <span className="process-number">0{index + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
              <span className="process-line" aria-hidden="true" />
            </li>
          ))}
        </ol>
        <div className="decision-note">
          <span className="note-tag">STOP / GO</span>
          <p>Nach dem Potenzialscan wird bewusst entschieden: Pilot bauen, Architektur ändern oder das Vorhaben stoppen. Auch ein begründetes Nein ist ein gutes Projektergebnis.</p>
        </div>
      </section>

      <section className="technology-section" id="technologie">
        <div className="section-shell">
          <div className="section-intro technology-intro">
            <div><p className="kicker light">Technologie ohne Dogma</p><h2>Die Architektur folgt der Aufgabe.</h2></div>
            <p>Die technische Grundlage wird im Potenzialscan bewertet. Eigene KI-Server sind eine mögliche Ausbaustufe, wenn Kontrolle, Auslastung und Betrieb dafür sprechen.</p>
          </div>
          <div className="architecture-grid">
            <article><div className="arch-icon cloud"><span /><span /><span /></div><h3>Cloud / API</h3><p>Schneller Pilot, aktuelle Modelle und flexible Nutzung – mit dokumentiertem externem Datenfluss.</p><ul><li>Geringe Startinvestition</li><li>Schnelle Modellupdates</li><li>Nutzungsabhängige Kosten</li></ul></article>
            <article className="featured"><span className="arch-badge">JE NACH DATENFLUSS</span><div className="arch-icon hybrid"><span /><span /><span /></div><h3>Hybrid</h3><p>Lokale Verarbeitung und externe Modelle kombinieren – mit vorher festgelegten und geprüften Datenflüssen.</p><ul><li>Balance aus Kontrolle und Qualität</li><li>Gezielte Datenminimierung</li><li>Flexible Weiterentwicklung</li></ul></article>
            <article><div className="arch-icon local"><span /><span /><span /></div><h3>Private / Lokal</h3><p>Für klare Daten-, Offline- oder Latenzanforderungen und eine langfristig stabile Auslastung.</p><ul><li>Lokale Datenkontrolle</li><li>Planbare Infrastruktur</li><li>Eigene Betriebsverantwortung</li></ul></article>
          </div>
        </div>
      </section>

      <section className="section section-shell audience-section" id="branchen">
        <div className="section-intro compact"><div><p className="kicker">Drei Branchen. Konkrete Abläufe.</p><h2>Wo im Büro Arbeit liegen bleibt.</h2></div><p>Illustrative Anwendungsfälle – keine Kundenreferenzen und keine bereits laufenden Systeme.</p></div>
        <div className="branch-grid">
          <article><span className="kicker">Handwerk</span><h3>Aus einer Anfrage wird ein vorbereiteter Vorgang.</h3><p>E-Mails nach Leistungsart sortieren, Kontaktdaten und Einsatzort übernehmen und fehlende Angaben markieren.</p><p><strong>Ihr Team prüft:</strong> Machbarkeit, Angebot und Termin bleiben beim Betrieb.</p><div className="service-meta">Messgröße: Bearbeitungszeit pro Anfrage</div></article>
          <article><span className="kicker">Immobilienverwaltung</span><h3>Schadensmeldungen strukturiert weitergeben.</h3><p>Objekt und Anliegen aus einer Nachricht erfassen, einem Vorgang zuordnen und einen Antwortentwurf vorbereiten.</p><p><strong>Ihr Team prüft:</strong> Dringlichkeit und Beauftragung. Notfälle benötigen einen gesonderten Meldeweg.</p><div className="service-meta">Messgröße: korrekt zugeordnete Vorgänge</div></article>
          <article><span className="kicker">Gebäudeservice</span><h3>Objektwissen dort finden, wo es gebraucht wird.</h3><p>Freigegebene Arbeitsanweisungen und Objektunterlagen durchsuchen – mit sichtbarer Quelle und Beachtung der Zugriffsrechte.</p><p><strong>Ihr Team prüft:</strong> Unklare und sicherheitsrelevante Fragen gehen an die verantwortliche Person.</p><div className="service-meta">Messgröße: Suchzeit und belegbare Antworten</div></article>
        </div>
      </section>

      <section className="section section-shell" id="ueber-uns">
        <div className="about-grid">
          <div className="about-copy">
            <p className="kicker">Über AISNAPE</p>
            <h2>Persönliche Projektführung. Technische Erfahrung.</h2>
            <p>AISNAPE ist ein Vorhaben in Vorbereitung. Der künftige Gründer soll die Projektführung und Kundenkommunikation übernehmen. Ein Diplom-Informatiker mit SAP- und Fullstack-Erfahrung unterstützt die technische Konzeption und Umsetzung.</p>
          </div>
          <div className="role-grid">
            <article><span className="role-code">01 / GRÜNDUNG</span><h3>Künftiger Gründer &amp; Projektleitung</h3><p>Geplant: Ihr Ansprechpartner für Bedarfsklärung, Angebot, Vertrag, Projektsteuerung und Abnahme.</p></article>
            <article><span className="role-code">02 / TECHNIK</span><h3>Technische Unterstützung</h3><p>Externe technische Unterstützung für Architektur, Schnittstellen, Prototypen und Tests. Umfang und Verfügbarkeit werden pro Projekt vereinbart.</p></article>
          </div>
        </div>
      </section>

      <section className="principles-section">
        <div className="section-shell principles-inner">
          <div><p className="kicker light">Unsere Leitplanken</p><h2>Verantwortung lässt sich nicht automatisieren.</h2></div>
          <ul>
            <li><CheckIcon /><span><strong>Menschliche Prüfung</strong> bei kritischen Freigaben und irreversiblen Aktionen.</span></li>
            <li><CheckIcon /><span><strong>Datensparsamkeit</strong> und klare Berechtigungen statt unkontrollierter Datenkopien.</span></li>
            <li><CheckIcon /><span><strong>Testbarkeit</strong> durch definierte Erfolgs-, Fehler- und Grenzfälle.</span></li>
            <li><CheckIcon /><span><strong>Geregelte Übergabe</strong> mit Dokumentation, Abschaltmöglichkeit und separat vereinbarter Betreuung.</span></li>
          </ul>
        </div>
      </section>

      <section className="contact-section" id="kontakt">
        <div className="section-shell contact-card">
          <div>
            <p className="kicker">Start in Vorbereitung</p>
            <h2>Ein guter Einstieg beginnt mit einem konkreten Engpass.</h2>
            <p>Zum geplanten Start hilft eine kurze Beschreibung: Welcher Vorgang wiederholt sich? Wie häufig? Welche Programme nutzen Sie und was soll sich verbessern? Bitte verwenden Sie dafür zunächst nur allgemeine Angaben, keine vertraulichen Dokumente.</p>
          </div>
          <div className="contact-action">
            <span className="contact-status">Kontakt zum Leistungsstart verfügbar</span>
            <p>Derzeit werden über diese Website keine Anfragen oder Aufträge angenommen.</p>
          </div>
        </div>
      </section>

      <section className="section section-shell faq-section">
        <div className="faq-heading"><p className="kicker">Häufige Fragen</p><h2>Klarheit vor Projektstart.</h2></div>
        <div className="faq-list">
          {faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}<span aria-hidden="true">+</span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section-shell draft-note" id="rechtliches">
        <h2>Hinweise zu diesem Entwurf</h2>
        <p>Diese Fassung dient der Durchsicht des geplanten Auftritts. Sie ist noch nicht für den öffentlichen Start fertiggestellt. Betreibername, ladungsfähige Anschrift und bestätigte Kontaktdaten fehlen. Ein vollständiges Impressum und eine auf den tatsächlichen Hosting- und Datenverarbeitungsumfang abgestimmte Datenschutzerklärung müssen vor der Veröffentlichung ergänzt werden.</p>
      </section>

      <footer>
        <div className="section-shell footer-main">
          <div><Logo /><p>KI-Automatisierung für Handwerk, Immobilien und Gebäudeservice.</p></div>
          <div className="footer-links"><a href="#leistungen">Leistungen</a><a href="#ablauf">Ablauf</a><a href="#branchen">Branchen</a><a href="#kontakt">Kontakt</a></div>
          <div className="footer-contact"><span>Vorhaben in Vorbereitung</span><a href="#rechtliches">Hinweise zu diesem Entwurf</a></div>
        </div>
        <div className="section-shell footer-bottom">
          <span>© 2026 AISNAPE</span>
          <span>Entwurfsfassung · Geplantes Leistungsangebot</span>
        </div>
      </footer>
    </main>
  );
}
