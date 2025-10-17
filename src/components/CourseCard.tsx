import type { FC } from "react";
import type { MiniCourse } from "../data/content";

interface Props {
  course: MiniCourse;
}

const CourseCard: FC<Props> = ({ course }) => (
  <article className="group relative flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-brand-dark/60 p-6 shadow-lg shadow-brand-blue/10 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-brand-blue/20">
    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
      {course.modality} · {course.axis}
    </span>

    <div className="space-y-2">
      <h3 className="text-2xl font-semibold text-white">{course.title}</h3>
      <p className="text-sm font-medium uppercase tracking-[0.16em] text-brand-purple">
        {course.tagline}
      </p>
      <p className="text-sm text-white/70">{course.summary}</p>
    </div>

    <div className="rounded-2xl border border-white/5 bg-brand-dark/70 p-4 text-sm text-white/75">
      <p className="font-medium text-white/80">Local • Turma</p>
      <p className="text-white/70">{course.location}</p>
      {course.address && <p className="text-white/40">{course.address}</p>}
      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-brand-blue/90">{course.capacity}</p>
    </div>

    <div className="space-y-2">
      <p className="text-sm font-semibold text-white/80">Tech stack e ferramentas</p>
      <div className="flex flex-wrap gap-2">
        {course.stack.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className="space-y-3">
      <p className="text-sm font-semibold text-white/80">Agenda dos encontros</p>
      <ul className="space-y-2 text-sm text-white/65">
        {course.sessions.map((session) => (
          <li
            key={`${course.id}-${session.date}`}
            className="flex flex-col gap-1 rounded-xl border border-white/5 bg-brand-dark/70 px-4 py-3 transition hover:border-brand-blue/50"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-brand-blue">
              {session.weekday} · {session.date}
            </span>
            <span className="text-sm font-semibold text-white/90">{session.time}</span>
            <span className="text-sm text-white/70">{session.focus}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-auto">
      <a
        href={course.link}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-brand-blue/70 bg-brand-blue/80 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue"
      >
        Reservar vaga {course.modality === "Online" ? "online" : "presencial"}
        <span aria-hidden className="transition-transform group-hover:translate-x-1">↗</span>
      </a>
    </div>
  </article>
);

export default CourseCard;
