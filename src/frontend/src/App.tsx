import {
  BookOpen,
  ChevronDown,
  ExternalLink,
  Heart,
  Instagram,
  Menu,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// ── Brand Heart ────────────────────────────────────────────────────────────────
function BrandHeart({
  size = 24,
  className = "",
  color = "#FF7518",
}: {
  size?: number;
  className?: string;
  color?: string;
}) {
  return (
    <Heart
      style={{ width: size, height: size, color, fill: color }}
      className={className}
    />
  );
}

// ── Section Label ──────────────────────────────────────────────────────────────
function SectionLabel({
  children,
  variant = "light",
}: {
  children: React.ReactNode;
  variant?: "light" | "dark" | "white";
}) {
  const styles = {
    light: { bg: "#FFF0E6", color: "#FF7518", heartColor: "#FF7518" },
    dark: {
      bg: "rgba(255,117,24,0.18)",
      color: "#FF9A4A",
      heartColor: "#FF9A4A",
    },
    white: {
      bg: "rgba(255,255,255,0.18)",
      color: "white",
      heartColor: "white",
    },
  };
  const s = styles[variant];
  return (
    <div
      className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full font-body font-bold text-xs uppercase tracking-widest"
      style={{ background: s.bg, color: s.color }}
    >
      <BrandHeart size={11} color={s.heartColor} />
      {children}
    </div>
  );
}

// ── Heart Divider ───────────────────────────────────────────────────────────────
function HeartDivider({ color = "#FFD9B8" }: { color?: string }) {
  return (
    <div className="flex items-center gap-3 justify-center py-2">
      <div className="h-px flex-1" style={{ background: color }} />
      <BrandHeart size={16} color={color === "#FFD9B8" ? "#FF7518" : color} />
      <div className="h-px flex-1" style={{ background: color }} />
    </div>
  );
}

// ── NavBar ─────────────────────────────────────────────────────────────────────
function NavBar() {
  const [open, setOpen] = useState(false);
  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const links: [string, string][] = [
    ["Information", "information"],
    ["Deep Dive", "leukemia-deep-dive"],
    ["PH+ ALL", "ph-all"],
    ["Stories", "stories"],
    ["Coping", "coping"],
    ["How to Help", "how-to-help"],
    ["Support Guide", "support-guide"],
    ["Resources", "resources"],
    ["Instagram", "cta"],
  ];

  return (
    <nav
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md"
      style={{ borderBottom: "1.5px solid #FFD9B8" }}
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        <button
          type="button"
          data-ocid="nav.home.link"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5"
        >
          <BrandHeart size={20} />
          <span
            className="font-display font-bold text-lg tracking-tight"
            style={{ color: "#1a1108" }}
          >
            Beyond the Blood
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map(([label, id]) => (
            <button
              type="button"
              key={id}
              data-ocid={`nav.${id}.link`}
              onClick={() => scrollTo(id)}
              className="px-4 py-2 rounded-full text-sm font-body font-semibold text-stone-500 hover:text-[#FF7518] hover:bg-orange-50 transition-all"
            >
              {label}
            </button>
          ))}
        </div>

        <button
          type="button"
          data-ocid="nav.menu.toggle"
          className="md:hidden p-2 rounded-lg hover:bg-orange-50 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="w-5 h-5" style={{ color: "#FF7518" }} />
          ) : (
            <Menu className="w-5 h-5 text-stone-500" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t border-stone-100"
          >
            <div className="flex flex-col px-5 py-3 gap-1">
              {links.map(([label, id]) => (
                <button
                  type="button"
                  key={id}
                  data-ocid={`nav.mobile.${id}.link`}
                  onClick={() => scrollTo(id)}
                  className="text-left px-3 py-3 rounded-lg text-base font-body font-semibold text-stone-600 hover:text-[#FF7518] hover:bg-orange-50 transition-all"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #1a0a00 0%, #3d1800 55%, #5c2800 100%)",
        minHeight: "92vh",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      {(["h0", "h1", "h2", "h3", "h4", "h5", "h6", "h7"] as const).map(
        (hk, i) => (
          <motion.div
            key={hk}
            className="absolute pointer-events-none"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              opacity: 0.06 + (i % 3) * 0.03,
            }}
            animate={{ y: [0, -12, 0], rotate: [0, i % 2 === 0 ? 8 : -8, 0] }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Heart
              style={{
                width: 24 + i * 8,
                height: 24 + i * 8,
                fill: "#FF7518",
                color: "#FF7518",
              }}
            />
          </motion.div>
        ),
      )}

      <div
        className="relative max-w-7xl mx-auto px-5 flex flex-col items-center justify-center text-center"
        style={{ minHeight: "92vh" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full font-body font-semibold text-sm"
            style={{
              background: "rgba(255,117,24,0.15)",
              color: "#FF9A4A",
              border: "1px solid rgba(255,117,24,0.3)",
            }}
          >
            <BrandHeart size={13} color="#FF9A4A" />
            Leukemia Awareness
          </motion.div>

          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 120,
            }}
            className="mb-8"
          >
            <div className="relative inline-flex">
              <div
                className="absolute inset-0 blur-3xl opacity-40 rounded-full"
                style={{ background: "#FF7518", transform: "scale(1.8)" }}
              />
              <Heart
                className="relative"
                style={{
                  width: 100,
                  height: 100,
                  fill: "#FF7518",
                  color: "#FF7518",
                  filter: "drop-shadow(0 0 32px rgba(255,117,24,0.7))",
                }}
              />
            </div>
          </motion.div>

          <h1
            className="font-display font-bold leading-none mb-6"
            style={{
              color: "white",
              fontSize: "clamp(3.5rem, 11vw, 9rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Beyond
            <br />
            <span style={{ color: "#FF7518" }}>the Blood</span>
          </h1>

          <p
            className="font-body text-xl md:text-2xl max-w-2xl leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            A space of hope, knowledge, and community for those touched by
            leukemia. You are not alone on this journey.
          </p>

          <p
            className="font-body text-xs tracking-widest uppercase mb-6"
            style={{ color: "rgba(255,255,255,0.32)" }}
          >
            ✦ Danny&apos;s Senior Exit Project
          </p>

          <motion.button
            type="button"
            data-ocid="hero.primary_button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document
                .getElementById("information")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-body font-bold text-lg"
            style={{ background: "#FF7518", color: "white" }}
          >
            Explore <ChevronDown className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-10"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ChevronDown
            className="w-6 h-6"
            style={{ color: "rgba(255,117,24,0.5)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

// ── Information ────────────────────────────────────────────────────────────────
function InformationSection() {
  const facts = [
    {
      title: "What is Leukemia?",
      body: "Leukemia is a cancer of the blood and bone marrow. It causes the body to make too many abnormal white blood cells, which crowd out healthy cells and make it hard for the blood to work normally.",
      size: "large",
    },
    {
      title: "Types of Leukemia",
      body: "There are four main types: Acute Lymphocytic (ALL), Acute Myeloid (AML), Chronic Lymphocytic (CLL), and Chronic Myeloid (CML). Each type behaves differently and is treated differently.",
      size: "normal",
    },
    {
      title: "Common Symptoms",
      body: "Symptoms can include fatigue, frequent infections, easy bruising or bleeding, bone pain, swollen lymph nodes, and unexplained weight loss. These vary widely by person and type.",
      size: "normal",
    },
    {
      title: "Treatment Options",
      body: "Treatment depends on the type and stage and may include chemotherapy, targeted therapy, radiation, stem cell transplant, or immunotherapy. A team of specialists builds a personalized plan.",
      size: "large",
    },
    {
      title: "How is Leukemia Diagnosed?",
      body: "Blood tests (CBC), bone marrow biopsy, imaging tests like CT or X-ray, and cytogenetic analysis help doctors identify leukemia type and severity. Early detection leads to better outcomes.",
      size: "normal",
    },
    {
      title: "Risk Factors",
      body: "While the exact cause is unknown, risk factors include previous chemotherapy or radiation exposure, genetic conditions like Down syndrome, certain blood disorders, smoking, and family history of leukemia.",
      size: "normal",
    },
    {
      title: "Survival Rates and Outlook",
      body: "Survival rates have greatly improved. For ALL, the 5-year survival rate in children is over 90%. CLL is often manageable for many years. New targeted therapies are improving outcomes across all types.",
      size: "large",
    },
    {
      title: "Living During Treatment",
      body: "Many patients continue aspects of normal life during treatment. Diet, gentle exercise, mental health support, and staying socially connected all play important roles in overall wellbeing during treatment.",
      size: "normal",
    },
  ];

  return (
    <section
      id="information"
      className="py-24"
      style={{ background: "#fdf6ee" }}
    >
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionLabel variant="light">Understanding Leukemia</SectionLabel>
          <h2
            className="font-display font-bold text-5xl md:text-6xl"
            style={{ color: "#1a0a00", letterSpacing: "-0.025em" }}
          >
            What you need
            <br />
            <span style={{ color: "#FF7518" }}>to know</span>
          </h2>
          <p
            className="font-body text-lg mt-4 max-w-2xl"
            style={{ color: "#7a5c42" }}
          >
            Leukemia affects hundreds of thousands of people each year.
            Understanding the disease is the first step toward navigating it
            with clarity and confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.title}
              data-ocid={`information.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              className={`rounded-3xl p-8 flex flex-col gap-4 ${
                fact.size === "large" ? "md:col-span-2" : "md:col-span-1"
              } ${i === 0 ? "text-white" : ""}`}
              style={
                i === 0
                  ? {
                      background:
                        "linear-gradient(135deg, #FF7518 0%, #e05500 100%)",
                    }
                  : {
                      background: "white",
                      border: "1.5px solid #e8d9c8",
                      boxShadow: "0 2px 16px 0 rgba(0,0,0,0.05)",
                    }
              }
            >
              <div className="flex items-center gap-3">
                <Heart
                  style={{
                    width: 22,
                    height: 22,
                    fill: i === 0 ? "rgba(255,255,255,0.75)" : "#FF7518",
                    color: i === 0 ? "rgba(255,255,255,0.75)" : "#FF7518",
                  }}
                />
                <h3
                  className="font-display font-bold text-xl"
                  style={{ color: i === 0 ? "white" : "#1a0a00" }}
                >
                  {fact.title}
                </h3>
              </div>
              <p
                className="font-body leading-relaxed text-base"
                style={{
                  color: i === 0 ? "rgba(255,255,255,0.85)" : "#5a4a3a",
                }}
              >
                {fact.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Leukemia Deep Dive ─────────────────────────────────────────────────────────
function LeukemiaDeepDiveSection() {
  const cards = [
    {
      title: "The Blood and Bone Marrow",
      body: "Blood is produced in the bone marrow, the spongy tissue inside your bones. Every day, the marrow makes billions of new blood cells: red cells that carry oxygen, platelets that help clotting, and white cells that fight infection. In leukemia, this process goes wrong. Abnormal white blood cells are produced in large numbers. They do not function properly and they crowd out the healthy cells the body needs to survive. This disruption affects the immune system, the ability to clot blood, and the ability to carry oxygen throughout the body.",
      highlight: true,
    },
    {
      title: "Acute vs. Chronic Leukemia",
      body: "Leukemia is described as either acute or chronic. Acute leukemia progresses rapidly. Abnormal cells multiply quickly and require immediate treatment. Without treatment, acute leukemia can be life-threatening within weeks or months. Chronic leukemia progresses more slowly. Abnormal cells accumulate over time, and patients may live for years before symptoms become serious. Chronic leukemia is often discovered incidentally during routine blood tests. Both types can affect lymphoid cells (lymphocytic) or myeloid cells (myeloid), giving us the four main types: ALL, AML, CLL, and CML.",
      highlight: false,
    },
    {
      title: "What Causes Leukemia?",
      body: "The exact cause of leukemia is not fully understood, but it involves changes (mutations) in the DNA of blood cells. These mutations can be spontaneous or triggered by environmental or genetic factors. Exposure to high levels of radiation, certain chemicals like benzene, previous cancer treatments, smoking, specific genetic conditions such as Down syndrome, and a family history of leukemia can all increase risk. However, most people who develop leukemia have none of these risk factors, and most people with these risk factors never develop leukemia.",
      highlight: false,
    },
  ];

  return (
    <section id="leukemia-deep-dive" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionLabel variant="light">Deep Dive</SectionLabel>
          <h2
            className="font-display font-bold text-5xl md:text-6xl"
            style={{ color: "#1a0a00", letterSpacing: "-0.025em" }}
          >
            Leukemia
            <br />
            <span style={{ color: "#FF7518" }}>Explained</span>
          </h2>
          <p
            className="font-body text-lg mt-4 max-w-2xl"
            style={{ color: "#7a5c42" }}
          >
            Understanding the biology behind leukemia helps patients and
            families make sense of their diagnosis, ask better questions, and
            engage more fully with their care team.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              data-ocid={`deep-dive.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="rounded-3xl p-8 md:p-10"
              style={
                card.highlight
                  ? {
                      background:
                        "linear-gradient(135deg, #FF7518 0%, #e05500 100%)",
                    }
                  : {
                      background: "white",
                      border: "1.5px solid #e8d9c8",
                      boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
                    }
              }
            >
              <div className="flex items-center gap-3 mb-4">
                <Heart
                  style={{
                    width: 22,
                    height: 22,
                    fill: card.highlight ? "rgba(255,255,255,0.75)" : "#FF7518",
                    color: card.highlight
                      ? "rgba(255,255,255,0.75)"
                      : "#FF7518",
                  }}
                />
                <h3
                  className="font-display font-bold text-2xl"
                  style={{ color: card.highlight ? "white" : "#1a0a00" }}
                >
                  {card.title}
                </h3>
              </div>
              <p
                className="font-body text-base leading-relaxed"
                style={{
                  color: card.highlight ? "rgba(255,255,255,0.88)" : "#5a4a3a",
                }}
              >
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── PH+ ALL ────────────────────────────────────────────────────────────────────
function PhAllSection() {
  const cards = [
    {
      title: "What is the Philadelphia Chromosome?",
      body: "The Philadelphia chromosome is formed when parts of chromosome 9 and chromosome 22 swap places, a process called translocation. This creates an abnormal gene called BCR-ABL1, which produces a protein that signals cells to grow and divide uncontrollably. This mutation is present in all leukemic cells in Ph+ ALL patients.",
    },
    {
      title: "How Common is Ph+ ALL?",
      body: "Ph+ ALL accounts for approximately 25% of adult ALL cases and a smaller proportion of childhood ALL. Its frequency increases with age. Before targeted treatments existed, Ph+ ALL had one of the worst prognoses of all ALL subtypes. Today, advances in therapy have dramatically improved outcomes.",
    },
    {
      title: "Treatment: Targeted Therapy",
      body: "The discovery of the BCR-ABL1 protein led to the development of tyrosine kinase inhibitors (TKIs) such as imatinib, dasatinib, and ponatinib. These drugs specifically block the abnormal BCR-ABL1 protein, halting cell growth. TKIs are now combined with chemotherapy as the standard of care for Ph+ ALL, and have transformed it from a high-risk diagnosis into a more manageable one.",
    },
    {
      title: "Stem Cell Transplant",
      body: "For many Ph+ ALL patients, especially those at high risk of relapse, a stem cell transplant (also called a bone marrow transplant) may be recommended after achieving remission. This replaces the patient's diseased bone marrow with healthy donor marrow. Research continues to refine which patients benefit most from transplant versus TKI therapy alone.",
    },
  ];

  return (
    <section id="ph-all" className="py-24" style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="md:sticky md:top-28"
          >
            <SectionLabel variant="dark">Ph+ ALL</SectionLabel>
            <h2
              className="font-display font-bold text-4xl md:text-5xl mb-2"
              style={{ color: "white", letterSpacing: "-0.025em" }}
            >
              Philadelphia Chromosome-Positive ALL
            </h2>
            <h3
              className="font-display font-bold text-2xl mb-6"
              style={{ color: "#FF7518" }}
            >
              Anita&apos;s Diagnosis
            </h3>
            <p
              className="font-body text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Philadelphia chromosome-positive Acute Lymphoblastic Leukemia (Ph+
              ALL) is a specific subtype of ALL defined by a genetic mutation
              called the Philadelphia chromosome. This mutation is named after
              the city where it was first discovered in 1960. It is one of the
              most studied chromosomal abnormalities in leukemia research.
            </p>
            <div className="mt-8 h-px w-24" style={{ background: "#FF7518" }} />
          </motion.div>

          {/* Right — info cards */}
          <div className="flex flex-col gap-5">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                data-ocid={`ph-all.item.${i + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-6"
                style={{
                  background: "#1e1e1e",
                  borderLeft: "4px solid #FF7518",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.3)",
                }}
              >
                <h4
                  className="font-display font-bold text-lg mb-3"
                  style={{ color: "white" }}
                >
                  {card.title}
                </h4>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl p-10 text-center"
          style={{ background: "#FF7518" }}
        >
          <BrandHeart
            size={28}
            color="rgba(255,255,255,0.7)"
            className="mx-auto mb-4"
          />
          <p
            className="font-display font-bold text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "white" }}
          >
            &ldquo;A diagnosis of Ph+ ALL is life-changing, but today more
            people than ever are achieving remission and living full lives
            beyond their diagnosis.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Stories ────────────────────────────────────────────────────────────────────
function StoriesSection() {
  const stories = [
    {
      name: "Anita",
      role: "Leukemia Patient",
      description: "A leukemia patient sharing her journey firsthand.",
      videoUrl: "https://www.youtube.com/embed/RJNpmkN8BsA?si=zhvzDog1_aHVO099",
      icon: (
        <Heart className="w-4 h-4" style={{ fill: "white", color: "white" }} />
      ),
    },
    {
      name: "Melissa",
      role: "Nurse and Anita's Daughter",
      description:
        "A nurse and Anita's daughter sharing both her professional insight and personal experience.",
      videoUrl: "https://www.youtube.com/embed/DMxZ4tz-UB0?si=PlaP-kXgcgpRhsB4",
      icon: <Users className="w-4 h-4 text-white" />,
    },
  ];

  const stats = [
    { value: "1 in 5", label: "blood cancers are leukemia" },
    { value: "60,000+", label: "new cases in the US each year" },
    { value: "90%+", label: "childhood ALL survival rate" },
  ];

  return (
    <section id="stories" className="py-24" style={{ background: "#1a1a1a" }}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left sticky heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="md:sticky md:top-28"
          >
            <SectionLabel variant="dark">Their Stories</SectionLabel>
            <h2
              className="font-display font-bold text-5xl md:text-6xl mb-6"
              style={{ color: "white", letterSpacing: "-0.025em" }}
            >
              Real people.
              <br />
              <span style={{ color: "#FF7518" }}>Real stories.</span>
            </h2>
            <p
              className="font-body text-lg leading-relaxed mb-4"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Every story matters. Hearing from those who have lived through
              leukemia can provide comfort, perspective, and hope.
            </p>
            <p
              className="font-body text-base leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Hearing real stories helps reduce the isolation that often
              accompanies a leukemia diagnosis. Research shows that peer
              connection and shared experience are powerful components of
              emotional resilience during cancer treatment.
            </p>
            <div className="flex items-center gap-3 mb-10">
              <BrandHeart size={18} />
              <span
                className="font-display italic text-2xl"
                style={{ color: "#FF7518" }}
              >
                &ldquo;Every story matters.&rdquo;
              </span>
            </div>

            {/* Stats block */}
            <div
              className="rounded-2xl p-6 grid grid-cols-1 gap-5"
              style={{
                background: "rgba(255,117,24,0.08)",
                border: "1px solid rgba(255,117,24,0.2)",
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <span
                    className="font-display font-bold text-3xl"
                    style={{ color: "#FF7518", minWidth: "5rem" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-body text-sm leading-snug"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Decorative orange rule */}
            <div
              className="mt-10 h-px w-24"
              style={{ background: "#FF7518" }}
            />
          </motion.div>

          {/* Right video cards */}
          <div className="flex flex-col gap-8">
            {stories.map((story, i) => (
              <motion.div
                key={story.name}
                data-ocid={`stories.item.${i + 1}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="rounded-2xl overflow-hidden"
                style={{
                  border: "2px solid #FF7518",
                  boxShadow: "0 0 40px rgba(255,117,24,0.15)",
                }}
              >
                <div className="aspect-video w-full">
                  <iframe
                    src={story.videoUrl}
                    title={`${story.name}'s Story`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6" style={{ background: "#242424" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="inline-flex items-center justify-center w-7 h-7 rounded-full"
                      style={{ background: "#FF7518" }}
                    >
                      {story.icon}
                    </span>
                    <span
                      className="font-body font-semibold text-sm"
                      style={{ color: "#FF7518" }}
                    >
                      {story.role}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-1 text-white">
                    {story.name}
                  </h3>
                  <p
                    className="font-body"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {story.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Coping ─────────────────────────────────────────────────────────────────────
function CopingSection() {
  const strategies = [
    {
      emoji: "🌱",
      title: "Find Your Routine",
      body: "Small daily rituals create stability. A morning walk, a cup of tea, journaling, whatever grounds you.",
    },
    {
      emoji: "👥",
      title: "Build a Support Network",
      body: "Connect with others who understand through support groups, online communities, and counseling services.",
    },
    {
      emoji: "🎨",
      title: "Express Yourself",
      body: "Art, writing, music, and other creative outlets can help process emotions that are hard to put into words.",
    },
    {
      emoji: "🔋",
      title: "Manage Your Energy",
      body: "It is okay to rest. Learn to recognize your limits and give yourself permission to take breaks without guilt.",
    },
    {
      emoji: "🌿",
      title: "Mindfulness and Breathing",
      body: "Simple breathing exercises and mindfulness practices can reduce anxiety and help you stay present.",
    },
    {
      emoji: "📞",
      title: "Ask for Professional Support",
      body: "Therapists and social workers who specialize in cancer care can provide tools to navigate the emotional journey.",
    },
    {
      emoji: "🌞",
      title: "Celebrate Small Wins",
      body: "Finishing a treatment cycle, a good lab result, or simply getting through a hard day are all victories worth acknowledging. Small celebrations reinforce hope and forward momentum.",
    },
    {
      emoji: "🍽️",
      title: "Nourish Your Body",
      body: "Treatment can affect appetite and nutrition. Working with a dietitian who understands oncology can help you maintain strength and energy. Even small nutritious meals make a difference.",
    },
    {
      emoji: "💤",
      title: "Prioritize Rest and Sleep",
      body: "Fatigue is one of the most common challenges during leukemia treatment. Good sleep hygiene, short naps, and honest conversations with your care team about energy levels are essential.",
    },
  ];

  return (
    <section id="coping" className="py-24" style={{ background: "#fff3e8" }}>
      <div className="max-w-4xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel variant="light">Coping Strategies</SectionLabel>
          <h2
            className="font-display font-bold text-5xl md:text-6xl"
            style={{ color: "#1a0a00", letterSpacing: "-0.025em" }}
          >
            Getting through
            <br />
            <span style={{ color: "#FF7518" }}>one day at a time</span>
          </h2>
          <p
            className="font-body text-lg mt-5 max-w-2xl mx-auto"
            style={{ color: "#7a5c42" }}
          >
            Coping with a leukemia diagnosis is deeply personal. These
            strategies are not a checklist, but a collection of approaches that
            have helped others find stability, meaning, and moments of peace
            throughout their journey.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #FF7518 10%, #FF7518 90%, transparent)",
            }}
          />

          <div className="flex flex-col">
            {strategies.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="flex items-start gap-8 pl-16 pr-2 py-6 relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[18px] top-7 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{
                    background: i % 2 === 0 ? "#FF7518" : "#fff3e8",
                    border: "2px solid #FF7518",
                  }}
                >
                  {i % 2 === 0 && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>

                <div
                  className="flex-1 rounded-2xl p-6"
                  style={{
                    background: "white",
                    boxShadow: "0 2px 20px rgba(255,117,24,0.08)",
                    border: "1px solid rgba(255,117,24,0.15)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{s.emoji}</span>
                    <h3
                      className="font-display font-bold text-xl"
                      style={{ color: "#1a0a00" }}
                    >
                      {s.title}
                    </h3>
                    <span
                      className="ml-auto font-display font-bold text-3xl"
                      style={{ color: "#ffd3aa" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p
                    className="font-body leading-relaxed"
                    style={{ color: "#6b5242" }}
                  >
                    {s.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Coping Tools ───────────────────────────────────────────────────────────────
function CopingToolsSection() {
  const tools = [
    {
      emoji: "📓",
      title: "Keep a Symptom and Mood Journal",
      body: "Tracking how you feel physically and emotionally each day can reveal patterns, help you communicate clearly with your care team, and give you a sense of control. Apps like MyChart or even a simple notebook work well. Note energy levels, pain, appetite, and emotions.",
    },
    {
      emoji: "⏱️",
      title: "Use the Two-Minute Rule",
      body: "On overwhelming days, commit to just two minutes of one healthy habit: two minutes of breathing, two minutes of stretching, two minutes of writing one grateful thought. Small actions build momentum without adding pressure.",
    },
    {
      emoji: "📁",
      title: "Build a Treatment Binder",
      body: "Keep all medical records, test results, medication lists, and appointment summaries in one organized binder or digital folder. Being organized reduces anxiety and ensures nothing falls through the cracks, especially when seeing multiple specialists.",
    },
    {
      emoji: "🫂",
      title: "Create a Circle of Support",
      body: "Identify three to five people who can reliably help you. Assign them specific roles: one for emotional support, one for practical tasks, one for medical appointments. Clear roles prevent burnout in your support network and ensure you always have someone to call.",
    },
    {
      emoji: "🛡️",
      title: "Set Boundaries Lovingly",
      body: "It is okay to decline visitors when you are too tired, limit conversations about illness, or take a day away from being the patient. Protecting your energy is not selfish. Communicating your needs clearly helps others support you better.",
    },
    {
      emoji: "🧰",
      title: "Prepare for Hard Days",
      body: "Create a hard day kit: a playlist that calms or uplifts you, a list of names to call, a comfort show to watch, your favorite snack, a journal prompt. Having a plan ready means you do not have to think when thinking is hardest.",
    },
  ];

  return (
    <section
      id="coping-tools"
      className="py-24"
      style={{ background: "#fdf6ee" }}
    >
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionLabel variant="light">Practical Tools</SectionLabel>
          <h2
            className="font-display font-bold text-5xl md:text-6xl"
            style={{ color: "#1a0a00", letterSpacing: "-0.025em" }}
          >
            Daily coping
            <br />
            <span style={{ color: "#FF7518" }}>in practice</span>
          </h2>
          <p
            className="font-body text-lg mt-4 max-w-2xl"
            style={{ color: "#7a5c42" }}
          >
            Beyond strategies, these are concrete tools and techniques you can
            put into action today. Each one is designed to be simple enough to
            use even on the hardest days.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              data-ocid={`coping-tools.item.${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-7 bg-white flex flex-col gap-4"
              style={{
                boxShadow: "0 4px 24px rgba(255,117,24,0.08)",
                border: "1.5px solid #e8d9c8",
              }}
            >
              <span className="text-4xl">{tool.emoji}</span>
              <h3
                className="font-display font-bold text-xl"
                style={{ color: "#1a0a00" }}
              >
                {tool.title}
              </h3>
              <p
                className="font-body text-sm leading-relaxed flex-1"
                style={{ color: "#6b5242" }}
              >
                {tool.body}
              </p>
              <div
                className="h-0.5 w-10 rounded-full"
                style={{ background: "#FF7518" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── How to Help ────────────────────────────────────────────────────────────────
function HowToHelpSection() {
  const tips = [
    {
      icon: "💬",
      title: "Just Listen",
      body: "Sometimes the best gift is a listening ear. Let your loved one talk without trying to fix things or offer solutions.",
    },
    {
      icon: "🍲",
      title: "Offer Practical Help",
      body: "Bring meals, help with errands, or offer rides to appointments. Concrete offers are easier to accept than a general offer.",
    },
    {
      icon: "📖",
      title: "Learn Together",
      body: "Read about their specific diagnosis so you can understand what they are going through and have more meaningful conversations.",
    },
    {
      icon: "💌",
      title: "Stay in Touch",
      body: "A short message, a card, or a quick call can mean the world. Consistency matters more than the size of the gesture.",
    },
    {
      icon: "🧘",
      title: "Respect Their Pace",
      body: "Some days will be harder than others. Follow their lead and do not pressure them to feel or act a certain way.",
    },
    {
      icon: "🤝",
      title: "Take Care of Yourself Too",
      body: "Supporting someone through illness is emotionally demanding. Finding your own support ensures you can keep showing up for them.",
    },
    {
      icon: "📅",
      title: "Help With Scheduling",
      body: "Treatment often involves many appointments and medications. Offering to manage a shared calendar, set reminders, or coordinate with other helpers can reduce an enormous mental burden.",
    },
    {
      icon: "🏡",
      title: "Create a Healing Environment",
      body: "Help create a calm, clean, low-stress home environment. Simple things like reducing clutter, keeping supplies organized, or setting up a comfortable resting space make a real difference.",
    },
    {
      icon: "🎁",
      title: "Thoughtful Comfort Gifts",
      body: "Soft blankets, audiobooks, puzzles, warm socks, or a favorite snack basket can bring comfort during long treatment days. The gesture of remembering shows you care.",
    },
  ];

  return (
    <section id="how-to-help" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionLabel variant="light">How to Help a Loved One</SectionLabel>
          <h2
            className="font-display font-bold text-5xl md:text-6xl"
            style={{ color: "#1a0a00", letterSpacing: "-0.025em" }}
          >
            When someone you love
            <br />
            <span style={{ color: "#FF7518" }}>is diagnosed</span>
          </h2>
          <p
            className="font-body text-lg mt-4 max-w-2xl"
            style={{ color: "#6b5242" }}
          >
            It can feel overwhelming not knowing how to help. The truth is, even
            the smallest acts of care leave a lasting impression. These
            practical approaches can guide you in showing up for the person you
            love.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
              className="rounded-2xl p-7 bg-white transition-all"
              style={{
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                border: "1px solid #f0ede9",
              }}
            >
              {/* Large number + emoji row */}
              <div className="flex items-start justify-between mb-5">
                <span
                  className="font-display font-bold leading-none"
                  style={{ fontSize: "4rem", color: "#ffe5cc", lineHeight: 1 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-3xl mt-1">{tip.icon}</span>
              </div>
              <h3
                className="font-display font-bold text-xl mb-2"
                style={{ color: "#1a0a00" }}
              >
                {tip.title}
              </h3>
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "#6b5a4e" }}
              >
                {tip.body}
              </p>
              {/* Bottom accent */}
              <div
                className="mt-5 h-0.5 w-10"
                style={{ background: "#FF7518", borderRadius: "99px" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Support Guide ──────────────────────────────────────────────────────────────
function SupportGuideSection() {
  const cards = [
    {
      emoji: "💛",
      title: "Understanding What They Are Going Through",
      body: "A leukemia diagnosis creates an immediate rupture in ordinary life. Your loved one is likely processing fear of the unknown, grief for their previous life, anxiety about treatment, and uncertainty about the future. Understanding this emotional landscape helps you respond with empathy rather than false positivity. Phrases like everything will be fine can feel dismissive. Instead, try I am here, whatever you need. Validate their feelings without trying to immediately solve them.",
    },
    {
      emoji: "🏥",
      title: "Navigating the Medical System Together",
      body: "Appointments can be overwhelming, especially early in diagnosis. Offer to accompany them, take notes, and write down questions in advance. Many patients leave appointments having heard only fragments of what was said due to shock or anxiety. Having a second set of ears is invaluable. Learn the terminology around their specific diagnosis. Understanding what their doctor means when they say remission, blast count, or consolidation therapy helps you engage meaningfully and reduces your own fear of the unknown.",
    },
    {
      emoji: "🧘",
      title: "Managing Your Own Emotions as a Caregiver",
      body: "Caregiver burnout is real and widely documented. Feelings of helplessness, resentment, exhaustion, guilt, and grief are all normal. Suppressing them does not help. Seek your own support through a therapist, a caregiver support group, or honest conversations with trusted friends. You cannot sustain long-term support if you are running on empty. Taking care of yourself is not a luxury. It is a requirement for being able to show up for your loved one consistently over what may be a long journey.",
    },
    {
      emoji: "🌅",
      title: "When Treatment Ends: Supporting Recovery",
      body: "The end of treatment is often described as a surprisingly difficult time. The structure and routine of hospital visits ends, but anxiety and fear of recurrence often intensify. Your loved one may feel pressure to return to normal while still processing trauma. Be patient. Recovery is not linear. Celebrate milestones without placing expectations on pace. Continue checking in, even when things seem fine. Long-term survivors still benefit enormously from knowing that their support network has not forgotten what they went through.",
    },
  ];

  return (
    <section id="support-guide" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionLabel variant="light">Support Guide</SectionLabel>
          <h2
            className="font-display font-bold text-5xl md:text-6xl"
            style={{ color: "#1a0a00", letterSpacing: "-0.025em" }}
          >
            Supporting a loved one:
            <br />
            <span style={{ color: "#FF7518" }}>a deeper guide</span>
          </h2>
          <p
            className="font-body text-lg mt-4 max-w-2xl"
            style={{ color: "#7a5c42" }}
          >
            Helping someone through leukemia is one of the most meaningful
            things you can do. It is also one of the most challenging. This
            guide goes deeper into what support really looks like at every
            stage.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              data-ocid={`support-guide.item.${i + 1}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="flex flex-col md:flex-row gap-6 rounded-3xl p-8"
              style={{
                background: i % 2 === 0 ? "white" : "#fdf6ee",
                border: "1.5px solid #e8d9c8",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              }}
            >
              <div className="flex-shrink-0 flex items-start">
                <span
                  className="text-5xl w-16 h-16 flex items-center justify-center rounded-2xl"
                  style={{ background: "#FFF0E6" }}
                >
                  {card.emoji}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="font-display font-bold text-4xl"
                    style={{ color: "#ffe5cc", lineHeight: 1 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-display font-bold text-xl"
                    style={{ color: "#1a0a00" }}
                  >
                    {card.title}
                  </h3>
                </div>
                <p
                  className="font-body leading-relaxed"
                  style={{ color: "#5a4a3a" }}
                >
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Learn More ─────────────────────────────────────────────────────────────────
function LearnMoreSection() {
  const sources = [
    {
      name: "Leukemia and Lymphoma Society",
      url: "https://www.lls.org",
      type: "Organization",
      description:
        "The world's largest voluntary health organization dedicated to funding blood cancer research, education, and patient services.",
    },
    {
      name: "American Cancer Society",
      url: "https://www.cancer.org",
      type: "Organization",
      description:
        "Provides comprehensive cancer information, research funding, and support programs for patients and families across all cancer types.",
    },
    {
      name: "National Cancer Institute",
      url: "https://www.cancer.gov",
      type: "Government",
      description:
        "The US government's principal agency for cancer research, offering evidence-based information on diagnosis, treatment, and clinical trials.",
    },
    {
      name: "CancerCare",
      url: "https://www.cancercare.org",
      type: "Support",
      description:
        "Offers free professional support services including counseling, support groups, educational workshops, and limited financial assistance.",
    },
    {
      name: "Be The Match",
      url: "https://bethematch.org",
      type: "Transplant Registry",
      description:
        "Operates the world's largest bone marrow registry and connects patients in need of stem cell transplants with potential donors.",
    },
    {
      name: "Stupid Cancer (Young Adults)",
      url: "https://stupidcancer.org",
      type: "Community",
      description:
        "A community and advocacy organization focused on the unique challenges faced by young adults diagnosed with cancer.",
    },
    {
      name: "ASCO (American Society of Clinical Oncology)",
      url: "https://www.asco.org",
      type: "Medical Society",
      description:
        "Represents oncology professionals worldwide and provides patients with oncologist-approved cancer information via cancer.net.",
    },
    {
      name: "Bone Marrow Foundation",
      url: "https://www.bonemarrow.org",
      type: "Transplant Support",
      description:
        "Helps patients navigate the bone marrow transplant process with financial assistance, patient support, and educational resources.",
    },
    {
      name: "Children's Oncology Group",
      url: "https://childrensoncologygroup.org",
      type: "Pediatric Research",
      description:
        "A leading research organization conducting clinical trials and studies focused on improving outcomes for children and adolescents with cancer.",
    },
    {
      name: "Living Beyond Breast and Blood Cancer",
      url: "https://lbbc.org",
      type: "Survivorship",
      description:
        "Supports people living with and beyond blood cancers through education, community connections, and survivorship programs.",
    },
  ];

  return (
    <section
      id="learn-more"
      className="py-24 relative overflow-hidden"
      style={{ background: "#FF7518" }}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionLabel variant="white">Ways to Learn More</SectionLabel>
          <h2
            className="font-display font-bold text-5xl md:text-6xl"
            style={{ color: "white", letterSpacing: "-0.025em" }}
          >
            Trusted{" "}
            <span style={{ color: "rgba(255,255,255,0.55)" }}>resources</span>
          </h2>
          <p
            className="font-body text-lg mt-4 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            Explore these organizations for education, support, and community.
            From newly diagnosed to long-term survivorship, each resource below
            offers something meaningful for patients, caregivers, and families.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sources.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid={`learn.item.${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4, background: "rgba(255,255,255,0.28)" }}
              className="group flex items-start gap-4 p-6 rounded-2xl transition-all"
              style={{
                background: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                style={{ background: "rgba(255,255,255,0.25)" }}
              >
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-body font-semibold text-white leading-snug">
                  {s.name}
                </p>
                <p
                  className="text-xs font-body mt-1"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {s.type}
                </p>
                <p
                  className="text-xs font-body mt-2 leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {s.description}
                </p>
              </div>
              <ExternalLink
                className="w-4 h-4 flex-shrink-0 mt-1"
                style={{ color: "rgba(255,255,255,0.5)" }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Resources ──────────────────────────────────────────────────────────────────
function ResourcesSection() {
  const resources = [
    {
      emoji: "📞",
      title: "LLS Information Helpline",
      detail: "1 800 955 4572",
      sub: "Free professional support for patients and families",
    },
    {
      emoji: "💻",
      title: "Cancer.gov Patient Resources",
      detail: "cancer.gov",
      sub: "Comprehensive research and clinical trial info",
    },
    {
      emoji: "🤗",
      title: "CancerCare Counseling",
      detail: "cancercare.org",
      sub: "Free online and phone counseling",
    },
    {
      emoji: "🏥",
      title: "Find a Cancer Center",
      detail: "cancer.gov",
      sub: "Locate NCI designated cancer centers near you",
    },
    {
      emoji: "🧬",
      title: "Clinical Trials Search",
      detail: "clinicaltrials.gov",
      sub: "Explore active studies and experimental treatments",
    },
    {
      emoji: "📚",
      title: "Patient Advocacy Foundation",
      detail: "patientadvocate.org",
      sub: "Case management and financial assistance",
    },
    {
      emoji: "🌐",
      title: "Smart Patients Community",
      detail: "smartpatients.com",
      sub: "Online peer network for cancer patients and caregivers",
    },
    {
      emoji: "💊",
      title: "NeedyMeds Drug Assistance",
      detail: "needymeds.org",
      sub: "Find patient assistance programs for expensive medications",
    },
    {
      emoji: "🩺",
      title: "NMDP (formerly Be The Match)",
      detail: "nmdp.org",
      sub: "Bone marrow and stem cell transplant registry and support",
    },
    {
      emoji: "📋",
      title: "Cancer.Net Patient Education",
      detail: "cancer.net",
      sub: "ASCO approved oncologist-reviewed patient resources",
    },
  ];

  return (
    <section id="resources" className="py-24" style={{ background: "#f5f5f5" }}>
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionLabel variant="light">Resources</SectionLabel>
          <h2
            className="font-display font-bold text-5xl md:text-6xl"
            style={{ color: "#1a1a1a", letterSpacing: "-0.025em" }}
          >
            You are not
            <br />
            <span style={{ color: "#FF7518" }}>alone</span>
          </h2>
          <p
            className="font-body text-lg mt-4 max-w-2xl"
            style={{ color: "#6b6b6b" }}
          >
            Whether you are newly diagnosed, mid-treatment, or in remission,
            these resources can connect you with the care, information, and
            community you need.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              data-ocid={`resources.item.${i + 1}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              className="flex items-start gap-5 bg-white rounded-xl p-6"
              style={{
                borderLeft: "4px solid #FF7518",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              <span className="text-3xl flex-shrink-0 mt-0.5">{r.emoji}</span>
              <div>
                <h3
                  className="font-display font-bold text-lg mb-0.5"
                  style={{ color: "#1a1a1a" }}
                >
                  {r.title}
                </h3>
                <p
                  className="font-body font-semibold text-sm"
                  style={{ color: "#FF7518" }}
                >
                  {r.detail}
                </p>
                <p className="font-body text-xs mt-1" style={{ color: "#999" }}>
                  {r.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Instagram CTA ──────────────────────────────────────────────────────────────
function InstagramSection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-32"
      style={{
        background:
          "linear-gradient(160deg, #1a0a00 0%, #3d1800 55%, #5c2800 100%)",
      }}
    >
      {(["d0", "d1", "d2", "d3", "d4"] as const).map((dk, i) => (
        <div
          key={dk}
          className="absolute pointer-events-none"
          style={{
            right: `${5 + i * 18}%`,
            top: `${10 + (i % 2) * 40}%`,
            opacity: 0.05 + i * 0.02,
          }}
        >
          <Heart
            style={{
              width: 32 + i * 16,
              height: 32 + i * 16,
              fill: "#FF7518",
              color: "#FF7518",
            }}
          />
        </div>
      ))}

      <div className="relative max-w-3xl mx-auto px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{
              background: "rgba(255,117,24,0.15)",
              border: "1px solid rgba(255,117,24,0.3)",
            }}
          >
            <Instagram className="w-8 h-8" style={{ color: "#FF7518" }} />
          </div>
          <h2
            className="font-display font-bold text-5xl md:text-6xl text-white mb-5"
            style={{ letterSpacing: "-0.025em" }}
          >
            Follow
            <br />
            <span style={{ color: "#FF7518" }}>Along</span>
          </h2>
          <p
            className="font-body text-lg mb-4 max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Our Instagram shares the latest information, research updates, and
            stories about leukemia. Follow along to stay informed and connected.
          </p>
          <p
            className="font-body text-base mb-8 max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.52)" }}
          >
            This page was created as part of Danny&apos;s senior exit project,
            inspired by Anita&apos;s personal journey with Ph+ ALL. Follow along
            to see what motivated this project and the story behind it.
          </p>
          <motion.a
            href="https://www.instagram.com/bey0nd.blood?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="instagram.primary_button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-body font-bold text-lg"
            style={{ background: "#FF7518", color: "white" }}
          >
            <Instagram className="w-5 h-5" />
            @bey0nd.blood
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "#1a0a00" }} className="py-14">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <BrandHeart size={20} />
              <h3 className="font-display font-bold text-2xl text-white">
                Beyond the Blood
              </h3>
            </div>
            <p
              className="font-body text-sm max-w-xs"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              A community of hope, knowledge, and support for everyone touched
              by leukemia.
            </p>
          </div>

          <div className="flex items-end gap-1.5">
            <Heart
              style={{
                width: 18,
                height: 18,
                fill: "#FF7518",
                color: "#FF7518",
                opacity: 0.4,
              }}
            />
            <Heart
              style={{
                width: 28,
                height: 28,
                fill: "#FF7518",
                color: "#FF7518",
                opacity: 0.7,
              }}
            />
            <Heart
              style={{
                width: 40,
                height: 40,
                fill: "#FF7518",
                color: "#FF7518",
              }}
            />
            <Heart
              style={{
                width: 28,
                height: 28,
                fill: "#FF7518",
                color: "#FF7518",
                opacity: 0.7,
              }}
            />
            <Heart
              style={{
                width: 18,
                height: 18,
                fill: "#FF7518",
                color: "#FF7518",
                opacity: 0.4,
              }}
            />
          </div>

          <div className="text-center md:text-right">
            <a
              href="https://www.instagram.com/bey0nd.blood?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.instagram.link"
              className="inline-flex items-center gap-2 text-white hover:text-[#FF7518] transition-colors font-body text-sm"
            >
              <Instagram className="w-4 h-4" />
              @bey0nd.blood
            </a>
          </div>
        </div>

        <HeartDivider color="rgba(255,117,24,0.25)" />

        <div className="mt-6 text-center">
          <p className="font-body text-sm text-white">
            &copy; {year}. Built with{" "}
            <Heart
              className="inline w-3.5 h-3.5"
              style={{ fill: "white", color: "white" }}
            />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline text-white"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── App ────────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen font-body">
      <NavBar />
      <main>
        <HeroSection />
        <InformationSection />
        <LeukemiaDeepDiveSection />
        <PhAllSection />
        <StoriesSection />
        <CopingSection />
        <CopingToolsSection />
        <HowToHelpSection />
        <SupportGuideSection />
        <LearnMoreSection />
        <ResourcesSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
}
