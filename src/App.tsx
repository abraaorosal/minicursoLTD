import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import SectionTitle from "./components/SectionTitle";
import CourseCard from "./components/CourseCard";
import AvailabilityBoard, { type AvailabilitySlot } from "./components/AvailabilityBoard";
import CallToAction from "./components/CallToAction";
import FaqAccordion from "./components/FaqAccordion";
import Footer from "./components/Footer";
import { miniCourses, highlights, faqs } from "./data/content";

const availabilityPresencial: AvailabilitySlot[] = [
  {
    label: "Front-end Presencial",
    days: "Segundas • 27/10, 03/11, 10/11 e 17/11",
    hours: "14h00 – 15h30",
    focus: "Laboratório de Transformação Digital • encontros de 1h30 focados em páginas institucionais"
  },
  {
    label: "Python Presencial",
    days: "Terças • 28/10, 04/11, 11/11 e 18/11",
    hours: "16h00 – 17h30",
    focus: "Sessões vespertinas com prática guiada de lógica e projeto final"
  }
];

const availabilityOnline: AvailabilitySlot[] = [
  {
    label: "Front-end Online",
    days: "Quartas • 29/10, 05/11, 12/11 e 19/11",
    hours: "19h00 – 20h30",
    focus: "Aulas noturnas ao vivo de 1h30 com fundamentos de HTML e CSS"
  },
  {
    label: "Python Online",
    days: "Sábados • 01/11, 08/11, 15/11 e 22/11",
    hours: "14h00 – 15h30",
    focus: "Tardes remotas para aprender lógica, estruturas e mini sistema em Python"
  }
];

const App = () => {
  const presencialCourses = miniCourses.filter((course) => course.modality === "Presencial");
  const onlineCourses = miniCourses.filter((course) => course.modality === "Online");

  return (
    <div className="min-h-screen bg-brand-dark bg-[radial-gradient(circle_1200px_at_10%_0%,rgba(15,154,201,0.3),transparent),radial-gradient(circle_900px_at_90%_10%,rgba(113,214,192,0.2),transparent)] pb-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-5 py-12 md:px-8">
        <header className="flex items-center justify-between rounded-3xl border border-white/5 bg-brand-dark/80 px-6 py-4 text-sm text-white/60 shadow-lg shadow-brand-blue/10">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-purple/30 text-lg font-semibold text-white">
              LTD
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-purple">Módulo Básico 2025.2</p>
              <p className="text-sm font-semibold text-white">Laboratório de Transformação Digital</p>
            </div>
          </div>
          <nav className="hidden items-center gap-5 text-xs uppercase tracking-[0.3em] text-white/60 md:flex">
            <a href="#agenda" className="hover:text-white">
              Agenda
            </a>
            <a href="#disponibilidade" className="hover:text-white">
              Disponibilidade
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a href="#inscricoes" className="hover:text-white">
              Inscrições
            </a>
          </nav>
        </header>

        <Hero />

        <Highlights items={highlights} />

        <section className="space-y-10">
          <SectionTitle
            id="agenda"
            eyebrow="Módulo Básico 2025.2"
            title="Escolha seu curso e acompanhe os quatro encontros"
            description="De 27/10 a 22/11, cada mini-curso percorre conceitos essenciais em encontros semanais de 1h30 e conclui com um projeto guiado. Combine formatos presencial e online conforme sua disponibilidade."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {presencialCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {onlineCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <SectionTitle
            id="disponibilidade"
            eyebrow="Disponibilidade de horários"
            title="Confira os blocos de dias e horários"
            description="Organize-se com antecedência: todas as turmas têm quatro encontros fixos de 1h30, sempre nos mesmos dias e horários."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <AvailabilityBoard title="Experiência presencial · Laboratório LTD" slots={availabilityPresencial} />
            <AvailabilityBoard title="Experiência online · Plataformas remotas" slots={availabilityOnline} />
          </div>
        </section>

        <CallToAction />

        <section className="space-y-10">
          <SectionTitle
            id="faq"
            eyebrow="FAQ"
            title="Dúvidas frequentes"
            description="Não encontrou sua resposta? Entre em contato pelo e-mail comunidade@ltd.tech."
          />
          <FaqAccordion items={faqs} />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default App;
