/* global React */
const { useState, useRef } = React;

// =============== Promo bar + Nav ===============
function PromoBar({ text }) {
  return (
    <div className="promo-bar">
      <strong>★</strong>&nbsp;&nbsp;{text}&nbsp;&nbsp;<strong>★</strong>
    </div>
  );
}

function Nav({ ctaLabel, onCta }) {
  return (
    <nav className="top">
      <div className="inner">
        <div className="logo">
          <div className="logo-img"><img src="assets/logo.png" alt="Training Norte" /></div>
          <span>TN BOX</span>
        </div>
        <div className="nav-links">
          <a href="#problema">El problema</a>
          <a href="#solucion">Solución</a>
          <a href="#programas">Programas</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#precios">Precios</a>
          <a href="#faq">FAQ</a>
        </div>
        <button className="btn btn-primary" onClick={onCta}>
          {ctaLabel} <span className="arrow">→</span>
        </button>
      </div>
    </nav>
  );
}

// =============== HERO ===============
function Hero({ headline, sub, primaryCta, secondaryCta, onPrimary, onSecondary }) {
  // turn last word into accent
  const parts = headline.split(" ");
  const last = parts.pop();
  const rest = parts.join(" ");

  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero-inner">
        <div>
          <div className="eyebrow on-dark">Programación para boxes · Desde 2014</div>
          <h1 className="display">
            {rest} <span className="accent">{last}</span>
          </h1>
          <p className="sub">{sub}</p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={onPrimary}>
              {primaryCta} <span className="arrow">→</span>
            </button>
            <button className="btn btn-ghost on-dark" onClick={onSecondary}>
              {secondaryCta}
            </button>
          </div>
          <div className="hero-trust">
            <div className="stat">
              <span className="num">+100</span>
              <span className="lbl">Boxes confían</span>
            </div>
            <div className="divider"></div>
            <div className="stat">
              <span className="num">95%</span>
              <span className="lbl">Clases prueba se quedan</span>
            </div>
            <div className="divider"></div>
            <div className="stat">
              <span className="num">+15</span>
              <span className="lbl">Años de experiencia</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <img src="assets/group-training.jpeg" alt="Comunidad Training Norte" />
          <div className="frame"></div>
          <div className="badge">
            <div className="dot"></div>
            <div className="txt">
              <strong>Programación de la semana</strong>
              <span>Entregada con +15 días de antelación</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============== Logo strip ===============
function LogoStrip() {
  const boxes = ["VERSUS CROSSFIT", "BOX MADRID", "FUNCTIONAL VIGO", "WOD BILBAO", "ATLAS BCN", "RAW SEVILLA"];
  return (
    <div className="strip">
      <div className="strip-inner">
        <div className="label"><strong>+100 BOXES</strong> en España y Europa confían en TN</div>
        <div className="logos">
          {boxes.map((b) => (
            <div className="logo-item" key={b}>{b}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

// =============== Pain ===============
function PainSection() {
  return (
    <section className="block pain" id="problema" data-screen-label="02 Problema">
      <div className="block-head">
        <div className="eyebrow">El problema</div>
        <h2 className="display">Un atleta lesionado <br />no solo se va.</h2>
        <p className="lead">
          Puede dañar la reputación de tu centro y de tu equipo. Tus alumnos vienen a mejorar
          su calidad de vida, y la clave para lograrlo es optimizar su calidad de movimiento.
        </p>
      </div>
      <div className="pain-grid">
        <div className="pain-card">
          <div className="num">01</div>
          <div>
            <div className="ttl">Programar te roba horas que necesitas en otro sitio</div>
            <div className="desc">Cada semana invertida en planificar es tiempo que dejas de dedicar a tus atletas, a tu equipo y a hacer crecer tu negocio.</div>
          </div>
        </div>
        <div className="pain-card">
          <div className="num">02</div>
          <div>
            <div className="ttl">Sesiones sin objetivo claro fatigan a tus coaches</div>
            <div className="desc">¿En qué debe enfocarse el coach? ¿Cómo sacar lo mejor de cada atleta? Sin estructura, cada clase depende de la inspiración del momento.</div>
          </div>
        </div>
        <div className="pain-card">
          <div className="num">03</div>
          <div>
            <div className="ttl">Atletas estancados acaban abandonando</div>
            <div className="desc">Sin progresión visible ni adaptaciones por nivel, la motivación cae. Y un atleta con dolor o sin progreso es un atleta que se va.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============== Solution ===============
function SolutionSection({ onCta, ctaLabel }) {
  return (
    <section className="block solution" id="solucion" data-screen-label="03 Solución">
      <div className="solution-grid">
        <div className="solution-img">
          <img src="assets/group-versus.jpg" alt="Comunidad de un box afiliado a Training Norte" />
          <div className="tag">★ Comunidad TN</div>
        </div>
        <div>
          <div className="eyebrow">La solución</div>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4.6vw, 56px)", marginTop: 16 }}>
            Una estructura única para mantener a tus deportistas en progreso constante y libres de lesiones.
          </h2>
          <div className="solution-bullets">
            <div className="bullet">
              <div className="icon">✓</div>
              <div>
                <div className="ttl">Guía diaria para tus entrenadores</div>
                <div className="desc">Mejora la postura y los rangos de movimiento de cada atleta — los movimientos más complejos se vuelven accesibles para todos.</div>
              </div>
            </div>
            <div className="bullet">
              <div className="icon">✓</div>
              <div>
                <div className="ttl">Cada sesión con un objetivo claro</div>
                <div className="desc">Recibirás herramientas y recomendaciones detalladas — texto y vídeo — para que tu equipo entrene mejor y enseñe mejor.</div>
              </div>
            </div>
            <div className="bullet">
              <div className="icon">✓</div>
              <div>
                <div className="ttl">Eficaz, segura y basada en evidencia</div>
                <div className="desc">Cada entrenamiento está respaldado por estudios y probado en la práctica. Resultados medibles, adaptados a las necesidades de tu box.</div>
              </div>
            </div>
            <div className="bullet">
              <div className="icon">✓</div>
              <div>
                <div className="ttl">Nos involucramos al 100% con tu box</div>
                <div className="desc">No te damos una programación y ya está. Desde técnica hasta motivación, tendrás todo para elevar el nivel de tus clases.</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 40 }}>
            <button className="btn btn-dark" onClick={onCta}>
              {ctaLabel} <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============== Programs ===============
function ProgramsSection() {
  const programs = [
    { tag: "Programa principal", name: "TN BOX", desc: "La programación de referencia. Estructura completa, progresiones por nivel y vídeos explicativos." },
    { tag: "Complemento", name: "Accesorios", desc: "Trabajo específico de fuerza, hipertrofia y prevención para complementar el WOD diario." },
    { tag: "Especialidad", name: "Halterofilia", desc: "Snatch, clean & jerk. Técnica y ciclos de fuerza diseñados por especialistas." },
    { tag: "Especialidad", name: "Gimnásticos", desc: "Progresiones para hombros y caderas fuertes. Movimientos avanzados accesibles." },
    { tag: "Especialidad", name: "Powerbuilding", desc: "Combinación de fuerza absoluta e hipertrofia para atletas que quieren más volumen." },
    { tag: "Especialidad", name: "Endurance", desc: "Capacidad aeróbica y umbrales. Para preparar atletas de larga distancia." },
    { tag: "Competición", name: "Hyrox", desc: "Preparación específica para competidores de Hyrox: ritmos, transiciones y resistencia." },
    { tag: "Especialidad", name: "Landmine", desc: "Programa diseñado alrededor de la barra landmine. Variedad sin necesidad de material extra." },
  ];
  return (
    <section className="block programs" id="programas" data-screen-label="04 Programas">
      <div className="block-head">
        <div className="eyebrow on-dark">Qué incluye</div>
        <h2 className="display" style={{ color: "var(--fg-on-dark)" }}>
          8 programaciones, <span style={{ color: "var(--accent)" }}>1 sola suscripción.</span>
        </h2>
        <p className="lead on-dark">
          Recibirás con +15 días de antelación las programaciones TN BOX, Accesorios, Halterofilia, Gimnásticos,
          Powerbuilding, Endurance, Hyrox y Landmine. Cada programa incluye guía detallada con vídeos explicativos.
        </p>
      </div>
      <div className="programs-grid">
        {programs.map((p) => (
          <div className="prog-card" key={p.name}>
            <div className="corner"></div>
            <div className="tag">{p.tag}</div>
            <div className="name">{p.name}</div>
            <div className="desc">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// =============== Steps ===============
function StepsSection() {
  const steps = [
    { n: "Paso 01", t: "Reservas tu llamada", d: "Hablamos 20 minutos sobre tu box, tu comunidad y dónde estás ahora." },
    { n: "Paso 02", t: "Elegimos tu plan", d: "TN BOX solo o combinado con especialidades — el que mejor encaje con tu box." },
    { n: "Paso 03", t: "Recibes la programación", d: "Llega cada semana con +15 días de antelación, vídeos y guía para tus coaches." },
    { n: "Paso 04", t: "Tus atletas progresan", d: "Comunidad más fuerte, menos lesiones, retención alta — y tú con tiempo libre." },
  ];
  return (
    <section className="block" style={{ background: "var(--bg)" }} data-screen-label="05 Cómo funciona">
      <div className="block-head">
        <div className="eyebrow">Cómo funciona</div>
        <h2 className="display">Cuatro pasos. <br />Cero excusas.</h2>
      </div>
      <div className="steps">
        {steps.map((s) => (
          <div className="step" key={s.n}>
            <div className="num">{s.n}</div>
            <div className="ttl">{s.t}</div>
            <div className="desc">{s.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// =============== Video Testimonials ===============
function VideoTestimonial({ src, name, role, idx }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onClick = () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) {
      v.pause();
      setPlaying(false);
    } else {
      v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  return (
    <div className={"test-card " + (playing ? "playing" : "")} onClick={onClick}>
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        playsInline
        controls={playing}
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
      />
      <div className="overlay"></div>
      <div className="play-btn" aria-label="Reproducir testimonio">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </div>
      <div className="meta">
        <div className="stars">★★★★★</div>
        <div className="name">{name}</div>
        <div className="role">{role}</div>
      </div>
    </div>
  );
}

function Testimonials() {
  const items = [
    { src: "https://videos-academia-tn.nyc3.cdn.digitaloceanspaces.com/TN/Testimonios/T1-SUBTITLED.mov", name: "Testimonio 01", role: "Dueño de box afiliado TN" },
    { src: "https://videos-academia-tn.nyc3.cdn.digitaloceanspaces.com/TN/Testimonios/T6-SUBTITLED.mov", name: "Testimonio 02", role: "Dueño de box afiliado TN" },
    { src: "https://videos-academia-tn.nyc3.cdn.digitaloceanspaces.com/TN/Testimonios/T3-SUBTITLED.mov", name: "Testimonio 03", role: "Dueño de box afiliado TN" },
    { src: "https://videos-academia-tn.nyc3.cdn.digitaloceanspaces.com/TN/Testimonios/T1-SUBTITLED.mov", name: "Testimonio 04", role: "Dueño de box afiliado TN" },
  ];
  return (
    <section className="block testimonials" id="testimonios" data-screen-label="06 Testimonios">
      <div className="block-head">
        <div className="eyebrow">Lo que dicen los boxes</div>
        <h2 className="display">No te lo decimos nosotros. <br />Te lo dicen ellos.</h2>
        <p className="lead">
          Boxes reales que confiaron su programación a Training Norte. Sus comunidades, sus palabras.
        </p>
      </div>
      <div className="test-grid">
        {items.map((it, i) => (<VideoTestimonial key={i} idx={i} {...it} />))}
      </div>
    </section>
  );
}

// =============== Authority ===============
function Authority() {
  return (
    <section className="block authority" data-screen-label="07 Autoridad">
      <div className="auth-grid">
        <div className="auth-img">
          <img src="assets/group-versus.jpg" alt="Comunidad de un box trabajando con TN" />
        </div>
        <div>
          <div className="eyebrow">Quién está detrás</div>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4.6vw, 56px)", marginTop: 16 }}>
            Calidad y confianza. <br/>La que nos llevó a los <span style={{ color: "var(--accent)" }}>Games</span>.
          </h2>
          <p style={{ marginTop: 24, color: "var(--fg-dim)", fontSize: 17, lineHeight: 1.65, maxWidth: 580 }}>
            Queremos transmitir y compartir nuestra forma de entrenar y programar — la que nos ha llevado a los
            CrossFit Games y a las Olimpiadas. Con la que hemos ayudado a miles de atletas de todos los niveles.
          </p>
          <div className="auth-credentials">
            <div className="cred"><div className="v"><span className="acc">+15</span></div><div className="l">Años programando para boxes</div></div>
            <div className="cred"><div className="v"><span className="acc">+100</span></div><div className="l">Boxes confían en TN</div></div>
            <div className="cred"><div className="v">Games</div><div className="l">Atletas en CrossFit Games</div></div>
            <div className="cred"><div className="v">JJ.OO.</div><div className="l">Experiencia olímpica</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============== Pricing ===============
function PricingSection({ onCta }) {
  const plans = [
    {
      plan: "Plan Esencial",
      name: "TN BOX",
      price: "Desde 89€",
      per: "/ mes",
      features: [
        "Programación TN BOX semanal con +15 días de antelación",
        "Guía detallada para coaches",
        "Vídeos explicativos de cada sesión",
        "Adaptaciones por nivel (RX / Scaled / Intro)",
        "Soporte por email",
      ],
      featured: false,
    },
    {
      plan: "Más popular",
      name: "TN BOX Pro",
      price: "Desde 149€",
      per: "/ mes",
      features: [
        "Todo lo del plan Esencial",
        "+ Accesorios y Gimnásticos",
        "+ Halterofilia y Powerbuilding",
        "Soporte directo con el equipo TN",
        "Onboarding personalizado de tu box",
        "Formación continua para coaches",
      ],
      featured: true,
    },
    {
      plan: "Plan completo",
      name: "TN BOX Elite",
      price: "Desde 219€",
      per: "/ mes",
      features: [
        "Todo lo del plan Pro",
        "+ Endurance, Hyrox y Landmine",
        "Acceso a las 8 programaciones",
        "Consultoría mensual 1:1",
        "Prioridad absoluta en soporte",
      ],
      featured: false,
    },
  ];
  return (
    <section className="block pricing" id="precios" data-screen-label="08 Precios">
      <div className="block-head">
        <div className="eyebrow">Planes y precios</div>
        <h2 className="display">El precio de un café <br/>por una clase mejor.</h2>
        <p className="lead">
          Sin permanencia. Empieza este mes, cancela cuando quieras. El coste por atleta es ridículo
          frente al tiempo que liberas y la retención que ganas.
        </p>
      </div>
      <div className="price-grid">
        {plans.map((p) => (
          <div key={p.name} className={"price-card " + (p.featured ? "featured" : "")}>
            {p.featured && <div className="badge">★ Más elegido</div>}
            <div className="plan">{p.plan}</div>
            <div className="name">{p.name}</div>
            <div className="price">
              <span className="amount">{p.price}</span>
              <span className="per">{p.per}</span>
            </div>
            <ul>
              {p.features.map((f) => (<li key={f}>{f}</li>))}
            </ul>
            <div className="cta-wrap">
              <button
                className={"btn " + (p.featured ? "btn-primary" : "btn-dark")}
                onClick={onCta}
              >
                Empezar ahora <span className="arrow">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// =============== FAQ ===============
function FAQ() {
  const [open, setOpen] = useState(0);
  const items = [
    {
      q: "¿En qué se diferencia TN BOX de otras programaciones?",
      a: "No te damos una programación y ya está. Nos involucramos al 100% con tu box, con herramientas y recomendaciones detalladas — en texto y vídeo — para que tu equipo no solo entrene mejor, sino también enseñe mejor. Cada sesión tiene un objetivo claro y un enfoque para el coach.",
    },
    {
      q: "¿Cuándo recibo la programación cada semana?",
      a: "Recibirás todas las programaciones con +15 días de antelación, de modo que tus coaches puedan preparar las clases con tiempo, planificar el material y formarse en los movimientos que vienen.",
    },
    {
      q: "¿Es apta para atletas noveles y avanzados a la vez?",
      a: "Sí. Las clases las disfruta quien es su primer día y quien lleva años practicando este deporte. Las adaptaciones por nivel forman parte de la estructura: cada sesión incluye opciones RX, escaladas e introducción.",
    },
    {
      q: "¿Y si mis coaches no tienen experiencia programando?",
      a: "Mejor. La programación incluye guía detallada para tus entrenadores: en qué fijarse, qué corregir, cómo progresar a los atletas. Es formación continua disfrazada de planificación diaria.",
    },
    {
      q: "¿Está basada en evidencia o es 'intuición'?",
      a: "Nuestra programación está diseñada para ser eficaz, segura y basada en evidencia científica. Cada entrenamiento está respaldado por estudios y probado en la práctica, lo que asegura resultados medibles y adaptados a las necesidades de tu box.",
    },
    {
      q: "¿Hay permanencia?",
      a: "No. Empieza este mes, cancela cuando quieras. Si la programación no funciona para tu box, no te queremos atado.",
    },
  ];
  return (
    <section className="block faq-wrap" id="faq" data-screen-label="09 FAQ">
      <div className="block-head">
        <div className="eyebrow">Preguntas frecuentes</div>
        <h2 className="display">¿Alguna duda?</h2>
      </div>
      <div className="faq">
        {items.map((it, i) => (
          <div key={i} className={"faq-item " + (open === i ? "open" : "")}>
            <button onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{it.q}</span>
              <span className="plus">+</span>
            </button>
            <div className="answer"><div className="answer-inner">{it.a}</div></div>
          </div>
        ))}
      </div>
    </section>
  );
}

// =============== Final CTA ===============
function FinalCTA({ onPrimary, onSecondary, primaryCta, secondaryCta }) {
  return (
    <section className="final-cta" data-screen-label="10 CTA final">
      <div className="eyebrow on-yellow" style={{ color: "var(--accent-fg)" }}>Da el siguiente paso</div>
      <h2 className="display" style={{ marginTop: 20 }}>Tus alumnos te dedican <br/>tiempo, ilusión y esfuerzo. <br/>Merecen sólo lo mejor.</h2>
      <p className="sub">
        Reserva una llamada de 20 minutos. Te contamos exactamente cómo encaja TN BOX en tu centro
        y resolvemos cualquier duda — sin compromiso.
      </p>
      <div className="ctas">
        <button className="btn btn-dark" onClick={onPrimary}>{primaryCta} <span className="arrow">→</span></button>
        <button className="btn btn-ghost" onClick={onSecondary}>{secondaryCta}</button>
      </div>
      <div className="guarantee">★ Sin permanencia · Cancela cuando quieras ★</div>
    </section>
  );
}

// =============== Footer ===============
function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="col">
          <div className="logo" style={{ color: "var(--fg-on-dark)" }}>
            <div className="logo-img"><img src="assets/logo.png" alt="Training Norte" /></div>
            <span>TN BOX</span>
          </div>
          <div className="brand">
            Plataforma de acondicionamiento físico para atletas individuales y centros de entrenamiento funcional.
          </div>
        </div>
        <div className="col">
          <h4>Producto</h4>
          <a href="#programas">Programaciones</a>
          <a href="#precios">Precios</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="col">
          <h4>Empresa</h4>
          <a href="#">Sobre nosotros</a>
          <a href="#">Contacto</a>
          <a href="#">Afiliados</a>
        </div>
        <div className="col">
          <h4>Legal</h4>
          <a href="#">Condiciones</a>
          <a href="#">Privacidad</a>
          <a href="#">Cookies</a>
        </div>
      </div>
      <div className="bottom">
        <div>© 2026 TN BOX · Training Norte</div>
        <div>Hecho con ★ en el norte</div>
      </div>
    </footer>
  );
}

// Expose to window
Object.assign(window, {
  PromoBar, Nav, Hero, LogoStrip, PainSection, SolutionSection,
  ProgramsSection, StepsSection, Testimonials, Authority,
  PricingSection, FAQ, FinalCTA, Footer, VideoTestimonial,
});
