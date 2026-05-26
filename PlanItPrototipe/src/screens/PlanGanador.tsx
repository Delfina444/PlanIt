import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AppHeader, { Avatar } from "../components/AppHeader";

const AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuDJR0yQ1FsrWB_92fECSbSSgZQp_RY4Cl5h8SvsCJ9pOyW8gd3__PnBtB28cYIBQfO-vpODx9IchgqyUrUT7vF8HPGjgJuoOSFksvXnvLBvAO4mb81jmidczviUL3uC8-nfM0JWTfgBR2rJL-Qls2BI8vE9WU-iq5MvHjnMJUBMBlkSHKkJ527z6Vls8Lq5jlG-uXxO2w4DUxbAGL-VGnUodtFPF7h9DSgC7jDzI0Zw3c4KoOlCCkTvy5PpAMd3f5FnYlUQAKDAKcMD";
const GROUP_PHOTO = "https://lh3.googleusercontent.com/aida-public/AB6AXuDKOgq3yPKVVsPJsmfo_97PNNXOgGUHbVE_71sGrJxJ_D4ahimMr9Hq4tAnj4Xl3ESOocHea4alE8gaeO1pykkPUmBDRu1kMmsKt0nNfWfMqZFQpS8PXMp8nPfUVrXVmYHXXB_aKAzsfG462t-UbR-txR_yuQ6ogX3sy0ZS9YUid9ZH0UHL3aSxn4JjaPxukV6fzERPbsU2OX9SS4hpgZnHJDqesDnGIIPEU6o-jROIPVBUlIVFqNjWfF_YMCUG4PszIws17kK7DEYU";

const PLAN_OPTIONS = ["Bowling", "Cena", "Juntada en una casa", "Merienda", "Salida al aire libre", "Otro"];

type ModalState = "none" | "confirm" | "success";

const fieldClass = "w-full h-14 px-4 rounded-xl bg-secondary-container/30 border-none focus:ring-2 focus:ring-secondary/40 text-[15px] placeholder:text-on-surface-variant/60 outline-none transition-all";
const iconFieldClass = "w-full h-14 pl-11 pr-4 rounded-xl bg-secondary-container/30 border-none focus:ring-2 focus:ring-secondary/40 text-[15px] outline-none transition-all";

export default function PlanGanador() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isVoteMode = searchParams.get("mode") === "vote";
  const [modal, setModal] = useState<ModalState>("none");
  const [planType, setPlanType] = useState("");
  const [selectedDates, setSelectedDates] = useState<Set<string>>(new Set());
  const [calendarMonth, setCalendarMonth] = useState(() => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  });

  const calendarDays = useMemo(() => {
    const { year, month } = calendarMonth;
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const blanks = Array(firstDay).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    return [...blanks, ...days];
  }, [calendarMonth]);

  const MONTH_NAMES = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
  const DAY_NAMES = ["Do","Lu","Ma","Mi","Ju","Vi","Sa"];

  function toggleDate(day: number) {
    const key = `${calendarMonth.year}-${calendarMonth.month + 1}-${day}`;
    setSelectedDates((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  function isDaySelected(day: number) {
    return selectedDates.has(`${calendarMonth.year}-${calendarMonth.month + 1}-${day}`);
  }

  function prevMonth() {
    setCalendarMonth(({ year, month }) =>
      month === 0 ? { year: year - 1, month: 11 } : { year, month: month - 1 }
    );
  }

  function nextMonth() {
    setCalendarMonth(({ year, month }) =>
      month === 11 ? { year: year + 1, month: 0 } : { year, month: month + 1 }
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setModal("confirm");
  }

  return (
    <div className="min-h-screen bg-background">
      <AppHeader
        showClose
        onClose={() => navigate(isVoteMode ? "/mis-planes" : "/home")}
        rightSlot={<Avatar src={AVATAR} alt="Mi perfil" />}
      />

      <main className="pt-[80px] pb-10 px-6 flex justify-center">
        <div className="max-w-[640px] w-full">
          <div className="my-6 text-center">
            <h2 className="text-[36px] font-extrabold text-primary tracking-tight leading-tight">
              Plan Ganador
            </h2>
            <p className="text-[15px] text-on-surface-variant mt-1.5">
              Reúne a tu gente y organiza algo increíble hoy mismo.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-5 border border-surface-container-high">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Group selector */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[14px] text-on-surface-variant" htmlFor="group">
                  ¿Con quién nos juntamos?
                </label>
                <select id="group" defaultValue="" className={fieldClass + " appearance-none"}>
                  <option value="" disabled>Selecciona un grupo</option>
                  <option>Los de la facu</option>
                  <option>La banda</option>
                  <option>La flia</option>
                  <option>Los de Siempre</option>
                  <option>Gourmet Club</option>
                </select>
              </div>

              {/* Plan type — dropdown with "Otro" */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[14px] text-on-surface-variant" htmlFor="plan">
                  ¿Qué plan te copa?
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                    explore
                  </span>
                  <select
                    id="plan"
                    value={planType}
                    onChange={(e) => setPlanType(e.target.value)}
                    className={"w-full h-14 pl-11 pr-4 rounded-xl bg-secondary-container/30 border-none focus:ring-2 focus:ring-secondary/40 text-[15px] outline-none transition-all appearance-none"}
                  >
                    <option value="" disabled>Tipo de planes</option>
                    {PLAN_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                {planType === "Otro" && (
                  <input
                    type="text"
                    placeholder="¿Qué tenés en mente?"
                    className={fieldClass + " mt-1"}
                    autoFocus
                  />
                )}
              </div>

              {/* Available dates — multi-select calendar */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-baseline">
                  <label className="font-bold text-[14px] text-on-surface-variant">
                    ¿Qué días estás disponible?
                  </label>
                  <span className="text-[11px] text-on-surface-variant/60">Podés elegir más de uno</span>
                </div>
                <div className="rounded-xl bg-secondary-container/30 p-3">
                  {/* Month nav */}
                  <div className="flex items-center justify-between mb-3 px-1">
                    <button type="button" onClick={prevMonth} className="p-1 rounded-full hover:bg-secondary-container active:scale-90 transition-all">
                      <span className="material-symbols-outlined text-[20px] text-primary">chevron_left</span>
                    </button>
                    <span className="text-[14px] font-bold text-primary">
                      {MONTH_NAMES[calendarMonth.month]} {calendarMonth.year}
                    </span>
                    <button type="button" onClick={nextMonth} className="p-1 rounded-full hover:bg-secondary-container active:scale-90 transition-all">
                      <span className="material-symbols-outlined text-[20px] text-primary">chevron_right</span>
                    </button>
                  </div>
                  {/* Day headers */}
                  <div className="grid grid-cols-7 mb-1">
                    {DAY_NAMES.map((d) => (
                      <span key={d} className="text-center text-[11px] font-bold text-on-surface-variant/60 py-1">{d}</span>
                    ))}
                  </div>
                  {/* Days grid */}
                  <div className="grid grid-cols-7 gap-y-1">
                    {calendarDays.map((day, i) => (
                      <div key={i} className="flex items-center justify-center">
                        {day ? (
                          <button
                            type="button"
                            onClick={() => toggleDate(day)}
                            className={`w-8 h-8 rounded-full text-[13px] font-semibold transition-all active:scale-90 ${
                              isDaySelected(day)
                                ? "bg-primary text-on-primary font-bold"
                                : "hover:bg-secondary-container text-on-surface"
                            }`}
                          >
                            {day}
                          </button>
                        ) : null}
                      </div>
                    ))}
                  </div>
                  {selectedDates.size > 0 && (
                    <p className="text-[12px] text-secondary font-semibold mt-2 text-center">
                      {selectedDates.size} {selectedDates.size === 1 ? "día seleccionado" : "días seleccionados"}
                    </p>
                  )}
                </div>
              </div>

              {/* Time */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[14px] text-on-surface-variant" htmlFor="time">
                  Hora
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                    schedule
                  </span>
                  <input id="time" type="time" className={iconFieldClass} />
                </div>
              </div>

              {/* Location suggestion */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[14px] text-on-surface-variant" htmlFor="lugar">
                  Sugerí un lugar
                </label>
                <textarea
                  id="lugar"
                  rows={3}
                  placeholder="Alguna zona de preferencia..."
                  className="w-full p-4 rounded-xl bg-secondary-container/30 border-none focus:ring-2 focus:ring-secondary/40 text-[15px] placeholder:text-on-surface-variant/60 outline-none transition-all resize-none"
                />
              </div>

              {/* Group photo */}
              <div className="h-40 w-full rounded-xl overflow-hidden">
                <img src={GROUP_PHOTO} alt="Grupo disfrutando un plan" className="w-full h-full object-cover" />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-14 bg-primary text-on-primary rounded-xl text-[16px] font-extrabold active:scale-[0.98] transition-all duration-200 mt-1"
              >
                {isVoteMode ? "Enviar Respuestas" : "Crear Juntada"}
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* ── VOTE MODE modals ── */}
      {isVoteMode && modal === "confirm" && (
        <div className="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 px-4 pb-8 sm:pb-0">
          <div className="bg-secondary-container w-full max-w-[360px] rounded-2xl p-6 shadow-2xl text-center">
            <p className="text-[12px] font-bold text-secondary uppercase tracking-wider mb-2">
              Hora de confirmar
            </p>
            <h3 className="text-[22px] font-extrabold text-primary mb-6">
              ¿Quieres enviar tu respuesta?
            </h3>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setModal("success")}
                className="w-full bg-primary text-on-primary py-3.5 rounded-xl text-[15px] font-bold active:scale-95 transition-transform"
              >
                Sí, listo
              </button>
              <button
                onClick={() => setModal("none")}
                className="w-full bg-primary/70 text-on-primary py-3.5 rounded-xl text-[15px] font-bold active:scale-95 transition-transform"
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      )}

      {isVoteMode && modal === "success" && (
        <div className="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 px-4 pb-8 sm:pb-0">
          <div className="bg-primary w-full max-w-[360px] rounded-2xl p-6 shadow-2xl text-center">
            <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-[36px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
            </div>
            <h3 className="text-[24px] font-extrabold text-on-primary mb-1">
              ¡Respuesta enviada!
            </h3>
            <p className="text-[13px] font-bold text-on-primary/70 uppercase tracking-wider mb-6">
              Ya notificamos al grupo
            </p>
            <button
              onClick={() => navigate("/home")}
              className="w-full bg-secondary-fixed text-on-secondary-fixed py-4 rounded-xl text-[15px] font-extrabold active:scale-95 transition-transform"
            >
              Volver a la Home
            </button>
          </div>
        </div>
      )}

      {/* ── CREATE MODE modals ── */}
      {!isVoteMode && modal === "confirm" && (
        <div className="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 px-4 pb-8 sm:pb-0">
          <div className="bg-secondary-container w-full max-w-[380px] rounded-2xl p-6 shadow-2xl text-center">
            <h3 className="text-[22px] font-extrabold text-primary mb-6">
              ¿Quieres crear el plan?
            </h3>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setModal("success")}
                className="w-full bg-primary text-on-primary py-4 rounded-xl text-[15px] font-extrabold active:scale-95 transition-transform"
              >
                Sí, plan listo!
              </button>
              <button
                onClick={() => setModal("none")}
                className="w-full bg-primary/70 text-on-primary py-3.5 rounded-xl text-[15px] font-bold active:scale-95 transition-transform"
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      )}

      {!isVoteMode && modal === "success" && (
        <div className="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 px-4 pb-8 sm:pb-0">
          <div className="bg-primary rounded-2xl p-6 w-full max-w-[380px] shadow-2xl text-center">
            <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-[36px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
            </div>
            <h3 className="text-[24px] font-extrabold text-on-primary mb-1">
              ¡Creaste tu plan!
            </h3>
            <p className="text-[13px] font-bold text-on-primary/70 uppercase tracking-wider mb-6">
              Ya notificamos al grupo
            </p>
            <button
              onClick={() => navigate("/home")}
              className="w-full bg-secondary-fixed text-on-secondary-fixed py-4 rounded-xl text-[15px] font-extrabold active:scale-95 transition-transform"
            >
              Volver a la Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
