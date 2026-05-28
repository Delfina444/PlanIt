import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AppHeader, { Avatar } from "../components/AppHeader";

const AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuDJR0yQ1FsrWB_92fECSbSSgZQp_RY4Cl5h8SvsCJ9pOyW8gd3__PnBtB28cYIBQfO-vpODx9IchgqyUrUT7vF8HPGjgJuoOSFksvXnvLBvAO4mb81jmidczviUL3uC8-nfM0JWTfgBR2rJL-Qls2BI8vE9WU-iq5MvHjnMJUBMBlkSHKkJ527z6Vls8Lq5jlG-uXxO2w4DUxbAGL-VGnUodtFPF7h9DSgC7jDzI0Zw3c4KoOlCCkTvy5PpAMd3f5FnYlUQAKDAKcMD";

const MOODS = ["Relajado", "Festivo", "Romántico", "Familiar", "Aventurero", "Tranqui"];
const BUDGETS = ["$", "$$", "$$$"];
const GROUPS = ["Los de la facu", "La banda", "La flia", "Los de Siempre", "Gourmet Club"];

const fieldClass =
  "w-full h-14 px-4 rounded-xl bg-secondary-container/30 border-none focus:ring-2 focus:ring-secondary/40 text-[15px] outline-none transition-all";

export default function PlanGanador() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const groupName = searchParams.get("groupName") ?? "";

  const [group, setGroup] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [mood, setMood] = useState("");
  const [budget, setBudget] = useState("");
  const [petFriendly, setPetFriendly] = useState(false);
  const [wheelchairAccessible, setWheelchairAccessible] = useState(false);

  const isVoteMode = searchParams.get("mode") === "vote";

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!neighborhood.trim() || !mood || !budget) {
      setError("Completá barrio, mood y presupuesto.");
      return;
    }

    if (isVoteMode) {
      setLoading(true);
      setTimeout(() => navigate("/plan"), 2500);
    } else {
      setSent(true);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <AppHeader
        showClose
        onClose={() => navigate("/home")}
        rightSlot={<Avatar src={AVATAR} alt="Mi perfil" />}
      />

      <main className="pt-[80px] pb-10 px-6 flex justify-center">
        <div className="max-w-[640px] w-full">
          <div className="my-6 text-center">
            <h2 className="text-[36px] font-extrabold text-primary tracking-tight leading-tight">
              Plan Ganador
            </h2>
            <p className="text-[15px] text-on-surface-variant mt-1.5">
              {groupName
                ? `Respondé el quiz para ${groupName}. Organizá algo increíble hoy mismo.`
                : "Respondé el quiz y organizá algo increíble hoy mismo."}
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-5 border border-surface-container-high">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Grupo */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[14px] text-on-surface-variant" htmlFor="group">
                  ¿Con quién nos juntamos?
                </label>
                <select
                  id="group"
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                  className={fieldClass + " appearance-none"}
                >
                  <option value="" disabled>Seleccioná un grupo</option>
                  {GROUPS.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>

              {/* Barrio */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[14px] text-on-surface-variant" htmlFor="neighborhood">
                  ¿En qué barrio / zona?
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                    location_on
                  </span>
                  <input
                    id="neighborhood"
                    type="text"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    placeholder="Ej. Palermo"
                    className="w-full h-14 pl-11 pr-4 rounded-xl bg-secondary-container/30 border-none focus:ring-2 focus:ring-secondary/40 text-[15px] outline-none transition-all"
                  />
                </div>
              </div>

              {/* Mood */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[14px] text-on-surface-variant" htmlFor="mood">
                  ¿Qué onda buscás?
                </label>
                <select
                  id="mood"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  className={fieldClass + " appearance-none"}
                >
                  <option value="" disabled>Elegí un mood</option>
                  {MOODS.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              {/* Presupuesto */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[14px] text-on-surface-variant">Presupuesto</label>
                <div className="grid grid-cols-3 gap-2">
                  {BUDGETS.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b)}
                      className={`h-14 rounded-xl text-[16px] font-bold transition-all active:scale-95 ${
                        budget === b
                          ? "bg-primary text-on-primary"
                          : "bg-secondary-container/30 text-on-surface-variant hover:bg-secondary-container/50"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div className="flex flex-col gap-2 mt-1">
                {[
                  { label: "Pet friendly", value: petFriendly, set: setPetFriendly, icon: "pets" },
                  { label: "Accesible (silla de ruedas)", value: wheelchairAccessible, set: setWheelchairAccessible, icon: "accessible" },
                ].map(({ label, value, set, icon }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => set(!value)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-secondary-container/30 active:scale-[0.99] transition-all"
                  >
                    <span className="flex items-center gap-3 text-[14px] font-semibold text-on-surface">
                      <span className="material-symbols-outlined text-secondary text-[20px]">{icon}</span>
                      {label}
                    </span>
                    <span
                      className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors ${
                        value ? "bg-primary justify-end" : "bg-outline-variant justify-start"
                      }`}
                    >
                      <span className="w-5 h-5 rounded-full bg-white shadow" />
                    </span>
                  </button>
                ))}
              </div>

              {error && (
                <div className="bg-error-container/60 text-on-error-container text-[13px] font-semibold rounded-xl px-4 py-3">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 bg-primary text-on-primary rounded-xl text-[16px] font-extrabold active:scale-[0.98] transition-all duration-200 mt-1 disabled:opacity-60"
              >
                {loading ? "Buscando lugares..." : isVoteMode ? "Enviar respuestas" : "Crear Plan Ganador"}
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Modal: quiz enviado al grupo (modo crear) */}
      {sent && (
        <div className="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 px-4 pb-8 sm:pb-0">
          <div className="bg-primary rounded-2xl p-6 w-full max-w-[380px] shadow-2xl text-center">
            <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-4">
              <span
                className="material-symbols-outlined text-[36px] text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                mark_email_read
              </span>
            </div>
            <h3 className="text-[24px] font-extrabold text-on-primary mb-1">
              ¡Quiz enviado al grupo!
            </h3>
            <p className="text-[13px] font-semibold text-on-primary/70 mb-6">
              Avisamos a todos para que completen sus preferencias. Cuando el grupo responda, te dejaremos saber cuál es el mejor plan.
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

      {/* Loading overlay: IA procesando (modo votar, cuando todos ya respondieron) */}
      {loading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-surface-container-lowest rounded-2xl p-8 max-w-[340px] w-full text-center shadow-2xl">
            <div className="w-14 h-14 mx-auto mb-4 border-4 border-secondary-container border-t-primary rounded-full animate-spin" />
            <h3 className="text-[20px] font-extrabold text-primary mb-1">Eligiendo el plan ganador</h3>
            <p className="text-[13px] text-on-surface-variant">
              Estamos pensando el mejor plan para tu juntada. Esto puede tardar unos segundos...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
