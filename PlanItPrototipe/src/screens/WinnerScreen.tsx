import { useNavigate } from "react-router-dom";
import AppHeader, { Avatar } from "../components/AppHeader";
import BottomNav from "../components/BottomNav";

const AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDJR0yQ1FsrWB_92fECSbSSgZQp_RY4Cl5h8SvsCJ9pOyW8gd3__PnBtB28cYIBQfO-vpODx9IchgqyUrUT7vF8HPGjgJuoOSFksvXnvLBvAO4mb81jmidczviUL3uC8-nfM0JWTfgBR2rJL-Qls2BI8vE9WU-iq5MvHjnMJUBMBlkSHKkJ527z6Vls8Lq5jlG-uXxO2w4DUxbAGL-VGnUodtFPF7h9DSgC7jDzI0Zw3c4KoOlCCkTvy5PpAMd3f5FnYlUQAKDAKcMD";

const FRIENDS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBigMMq18YsgyVYEs03i9HK0aFxSYzv2otY03AuXy_Nq7tr8LgK5YI9j8LjtiWFjrGuaq0BZqYuu-uTrk5lQRCASOth34oA5USk3sOn-HNmKyZMynXOWZyvFgYrUXaFyMeHPOHbeeS-InyJnezgXQvg96ixk5--zb4wmrEKs-yv-JYEH2E1c2JKxlQKclBvXZWSbwvmwdJVWfTTOR-YcuWbzxSbhxDXHW0x_nQk-B2u4r5NAExKyI5M9J87P0SvoyjX04BCtxek6xRG",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBJE-m79mw7QifPxavh2_-1OkkUljXmLvx4l04GBCkgBGPHjC-87lx8oif2acoAOV9VG8yLNaiXpXu30QmuRMnfe4sYz4AGr0C686s4mOx4uvjw98_BhrvF7JZ1DiZ_GsZ6js_em9o-CIXSFA0_9jK9nYNsfDY7wNGZjyc7T9hFaXjYHd_4spqhgGFLncU_sAUf5wGhI1RACEZ8dloivqvZi24O4vf-H0t0_FMfbUyeKRLB42hS-pJ2KisRSkKswzh2BzI0yqbRxNJ0",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDsfXHPdd4g6C2JQnm8mvtRSHRMmTZpSQMsfFPbLF3blamW1761C2v7JdJ1fkDjhShuvwYBA1eYl1Sa4qmTz1QasTUqPKPFnd1zKFlFUa2Uy_t24kAckMa5wC69QaBPu-Wfa2lEe_tnp98n0Q-y6zbT-FBfLIJ7pKmxMSWTas3CRsb3z2HwZJhe--Mcu8TA0ZdJbm4LpSDkhMZfy320A-ypSiIQQf-UNc_qdPBSS9rX7Ct_DuLvEmGnn4nmL7gT12FOFoqJVVld2sli",
];

export default function WinnerScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <AppHeader rightSlot={<Avatar src={AVATAR} alt="Mi perfil" />} />

      <main className="pt-[80px] pb-[100px] px-6 max-w-[640px] mx-auto flex flex-col items-center">
        {/* Hero */}
        <div className="flex flex-col items-center mt-8 mb-8 w-full">
          <div className="relative mb-4">
            <div className="w-32 h-32 bg-secondary-fixed rounded-full flex items-center justify-center shadow-[0_6px_0_0_#bad075] animate-bounce">
              <span
                className="material-symbols-outlined text-[68px] text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                emoji_events
              </span>
            </div>

            {/* Confetti pings */}
            <div
              className="absolute w-2.5 h-2.5 bg-secondary-fixed rounded-full animate-ping"
              style={{ left: "-18px", top: "18px" }}
            />
            <div
              className="absolute w-2 h-2 bg-tertiary-fixed rounded-full animate-ping"
              style={{ right: "-10px", top: "48px", animationDelay: "0.25s" }}
            />
            <div
              className="absolute w-3 h-3 bg-primary-fixed rounded-full animate-ping"
              style={{ bottom: "-10px", left: "-28px", animationDelay: "0.5s" }}
            />
            <div
              className="absolute w-2 h-2 bg-secondary-container rounded-full animate-ping"
              style={{ right: "-20px", bottom: "20px", animationDelay: "0.75s" }}
            />
          </div>

          <h1 className="text-[36px] font-extrabold text-primary text-center tracking-tight leading-tight">
            ¡Tenemos Plan Ganador!
          </h1>
          <p className="text-[15px] text-on-surface-variant mt-2 text-center">
            El grupo eligió. ¡Es hora de hacer el plan!
          </p>
        </div>

        {/* Winning plan card */}
        <div className="w-full bg-surface-container-lowest border-2 border-primary rounded-2xl p-6 mb-5 flex flex-col items-center text-center shadow-[0_4px_0_0_#334529]">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-bold uppercase tracking-wider mb-4">
            Opción más votada
          </span>

          <h2 className="text-[30px] font-extrabold text-on-background leading-tight mb-6">
            Asado en lo de Juan
          </h2>

          <div className="flex gap-3 w-full">
            <div className="flex-1 bg-surface-container-low border border-outline-variant rounded-xl p-3 flex flex-col items-center">
              <span className="material-symbols-outlined text-primary text-[22px] mb-1">
                calendar_today
              </span>
              <p className="text-[10px] font-bold text-outline uppercase tracking-wider">Fecha</p>
              <p className="text-[15px] font-semibold text-on-surface">Sábado 24</p>
            </div>
            <div className="flex-1 bg-surface-container-low border border-outline-variant rounded-xl p-3 flex flex-col items-center">
              <span className="material-symbols-outlined text-primary text-[22px] mb-1">
                schedule
              </span>
              <p className="text-[10px] font-bold text-outline uppercase tracking-wider">Hora</p>
              <p className="text-[15px] font-semibold text-on-surface">21:00 hs</p>
            </div>
            <div className="flex-1 bg-surface-container-low border border-outline-variant rounded-xl p-3 flex flex-col items-center">
              <span className="material-symbols-outlined text-primary text-[22px] mb-1">
                location_on
              </span>
              <p className="text-[10px] font-bold text-outline uppercase tracking-wider">Lugar</p>
              <p className="text-[15px] font-semibold text-on-surface">Palermo</p>
            </div>
          </div>
        </div>

        {/* Voting summary */}
        <div className="w-full bg-surface-container rounded-2xl p-5 mb-6 border border-outline-variant/30">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[18px] font-bold text-on-surface">Resultados</h3>
            <span className="text-[14px] font-bold text-primary">85% consenso</span>
          </div>

          <div className="w-full h-5 bg-surface-container-high rounded-full overflow-hidden border border-outline-variant mb-4 relative">
            <div
              className="h-full bg-secondary-fixed rounded-r-full transition-all"
              style={{ width: "85%" }}
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-3">
              {FRIENDS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Amigo ${i + 1}`}
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="w-9 h-9 rounded-full border-2 border-white bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center text-[11px] font-bold">
                +5
              </div>
            </div>
            <p className="text-[13px] text-on-surface-variant ml-1">
              Votaron por este plan
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="w-full flex flex-col gap-3">
          <button
            onClick={() => navigate("/home")}
            className="w-full bg-secondary-fixed text-on-secondary-fixed py-4 rounded-2xl text-[16px] font-extrabold shadow-[0_4px_0_0_#bad075] active:translate-y-[3px] active:shadow-none transition-all duration-100"
          >
            ¡Confirmar y Avisar!
          </button>
          <button
            onClick={() => navigate("/mis-planes")}
            className="w-full text-primary text-[15px] font-bold py-2.5 hover:bg-primary-fixed rounded-xl transition-colors"
          >
            Ver otras opciones
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
