/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakText, TweakRadio, TweakToggle */
/* eslint-disable no-undef */

const { useEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#F3C148",
  "primaryCta": "Reservar llamada gratis",
  "secondaryCta": "Ver programaciones",
  "heroHeadline": "La programación que llena tu BOX.",
  "heroSub": "Una estructura única — basada en evidencia y probada por +100 boxes — para mantener a tus atletas en progreso constante, libres de lesiones, y a tu equipo de coaches enseñando mejor. Tú te dedicas a tu negocio. Nosotros, a programar.",
  "promoBarText": "Sin permanencia · Soporte directo del equipo TN · Programación entregada con +15 días de antelación",
  "showPromoBar": true,
  "showMobileSticky": true,
  "headlineStyle": "punchy"
}/*EDITMODE-END*/;

const HEADLINES = {
  punchy: "La programación que llena tu BOX.",
  benefit: "Más retención. Menos lesiones. Cero programar.",
  authority: "La programación de referencia para tu BOX.",
  question: "¿Y si dejases de programar tú mismo?",
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply colors as CSS variables
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
  }, [t.accent]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const onPrimaryCta = () => scrollTo("precios");
  const onSecondaryCta = () => scrollTo("programas");

  const headline = t.headlineStyle === "custom" ? t.heroHeadline : HEADLINES[t.headlineStyle];

  return (
    <>
      {t.showPromoBar && <PromoBar text={t.promoBarText} />}
      <Nav ctaLabel={t.primaryCta} onCta={onPrimaryCta} />
      <Hero
        headline={headline}
        sub={t.heroSub}
        primaryCta={t.primaryCta}
        secondaryCta={t.secondaryCta}
        onPrimary={onPrimaryCta}
        onSecondary={onSecondaryCta}
      />
      <LogoStrip />
      <PainSection />
      <SolutionSection onCta={onPrimaryCta} ctaLabel={t.primaryCta} />
      <ProgramsSection />
      <StepsSection />
      <Testimonials />
      <Authority />
      <PricingSection onCta={onPrimaryCta} />
      <FAQ />
      <FinalCTA
        onPrimary={onPrimaryCta}
        onSecondary={onSecondaryCta}
        primaryCta={t.primaryCta}
        secondaryCta={t.secondaryCta}
      />
      <Footer />

      {t.showMobileSticky && (
        <div className="mobile-sticky">
          <div className="lbl">¿Listo para empezar?</div>
          <button className="btn" onClick={onPrimaryCta}>
            {t.primaryCta} →
          </button>
        </div>
      )}

      <TweaksPanel title="Tweaks · TN BOX" defaultWidth={340}>
        <TweakSection title="Identidad visual">
          <TweakColor
            label="Color de acento"
            value={t.accent}
            onChange={(v) => setTweak("accent", v)}
            options={["#F3C148", "#FFD55C", "#E6B23C", "#0a0a0a", "#ffffff"]}
          />
        </TweakSection>

        <TweakSection title="Copy de conversión">
          <TweakRadio
            label="Estilo de titular"
            value={t.headlineStyle}
            options={[
              { value: "punchy", label: "Directo" },
              { value: "benefit", label: "Beneficio" },
              { value: "authority", label: "Autoridad" },
              { value: "question", label: "Pregunta" },
            ]}
            onChange={(v) => setTweak("headlineStyle", v)}
          />
          <TweakText
            label="CTA principal"
            value={t.primaryCta}
            onChange={(v) => setTweak("primaryCta", v)}
          />
          <TweakText
            label="CTA secundario"
            value={t.secondaryCta}
            onChange={(v) => setTweak("secondaryCta", v)}
          />
          <TweakText
            label="Barra promocional"
            value={t.promoBarText}
            onChange={(v) => setTweak("promoBarText", v)}
          />
        </TweakSection>

        <TweakSection title="Elementos">
          <TweakToggle
            label="Barra promocional arriba"
            value={t.showPromoBar}
            onChange={(v) => setTweak("showPromoBar", v)}
          />
          <TweakToggle
            label="CTA sticky en móvil"
            value={t.showMobileSticky}
            onChange={(v) => setTweak("showMobileSticky", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
