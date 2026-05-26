import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AppHeader, { Avatar } from "../components/AppHeader";
import BottomNav from "../components/BottomNav";

const AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuDJR0yQ1FsrWB_92fECSbSSgZQp_RY4Cl5h8SvsCJ9pOyW8gd3__PnBtB28cYIBQfO-vpODx9IchgqyUrUT7vF8HPGjgJuoOSFksvXnvLBvAO4mb81jmidczviUL3uC8-nfM0JWTfgBR2rJL-Qls2BI8vE9WU-iq5MvHjnMJUBMBlkSHKkJ527z6Vls8Lq5jlG-uXxO2w4DUxbAGL-VGnUodtFPF7h9DSgC7jDzI0Zw3c4KoOlCCkTvy5PpAMd3f5FnYlUQAKDAKcMD";
const HERO = "https://lh3.googleusercontent.com/aida-public/AB6AXuC15PHmlcq5dzqjyAGGYfjTidA0ifuXumB8zsG3LFkiuPLfM1q8XqyXEmTWqwtU3DV8kD23PNgnxSRNIEM9bTFV2hIpcJ_ym5zIXcLqkdc_3XS7ZhcN5kjrf7hTQ08e_CZ8AUpY3iPpKgRiRTNaqywihkuSC7kILwkSbzGAw1sVxChLjWkV_qcJ-16KxDWbtwFhUi5gwKGoi3CgYY0gk3OZ-wZ8ovh3qhuvqM3REKBXsx7Jj2Lz8aca4r9NdfgfTsJA-og3ojWBw2lX";
const MAP = "https://lh3.googleusercontent.com/aida-public/AB6AXuAlABeoz9K_vNygYVXJGzMrlhYxexoZkcdFZ61zloYwQ0E_U4kKDhWNwIUh2VopMUCyf6DnwLKwgTkLSbzQqwa8eQNxxilznoa1MRlfv4V4vn21RcXZTd-mFZtm3wbLKBSJeLy6gS6tkLlqiqEm4SvxcUMPktfEgoWfE4NWygr6k8hCI9SX9HQMc8INPnKFVj7mpvXo9SvWoGldjfsdL4YzW4MK938n-sZW0Q10-NbrMTIz-f8qlD-Q8NW4qSbw_7aRsYSFbnUMl44O";

const attendees = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBigMMq18YsgyVYEs03i9HK0aFxSYzv2otY03AuXy_Nq7tr8LgK5YI9j8LjtiWFjrGuaq0QZqYuu-uTrk5lQRCASOth34oA5USk3sOn-HNmKyZMynXOWZyvFgYrUXaFyMeHPOHbeeS-InyJnezgXQvg96ixk5--zb4wmrEKs-yv-JYEH2E1c2JKxlQKclBvXZWSbwvmwdJVWfTTOR-YcuWbzxSbhxDXHW0x_nQk-B2u4r5NAExKyI5M9J87P0SvoyjX04BCtxek6xRG",
    name: "Coti (Host)",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJE-m79mw7QifPxavh2_-1OkkUljXmLvx4l04GBCkgBGPHjC-87lx8oif2acoAOV9VG8yLNaiXpXu30QmuRMnfe4sYz4AGr0C686s4mOx4uvjw98_BhrvF7JZ1DiZ_GsZ6js_em9o-CIXSFA0_9jK9nYNsfDY7wNGZjyc7T9hFaXjYHd_4spqhgGFLncU_sAUf5wGhI1RACEZ8dloivqvZi24O4vf-H0t0_FMfbUyeKRLB42hS-pJ2KisRSkKswzh2BzI0yqbRxNJ0",
    name: "Marcos",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsfXHPdd4g6C2JQnm8mvtRSHRMmTZpSQMsfFPbLF3blamW1761C2v7JdJ1fkDjhShuvwYBA1eYl1Sa4qmTz1QasTUqPKPFnd1zKFlFUa2Uy_t24kAckMa5wC69QaBPu-Wfa2lEe_tnp98n0Q-y6zbT-FBfLIJ7pKmxMSWTas3CRsb3z2HwZJhe--Mcu8TA0ZdJbm4LpSDkhMZfy320A-ypSiIQQf-UNc_qdPBSS9rX7Ct_DuLvEmGnn4nmL7gT12FOFoqJVVld2sli",
    name: "Julián",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBGhSr9TfCeX4IPYW3osvaBpvIAJ6aGOnT0vE_nbm57Iajl08iyFza5OGIzHGNUXFQ7jSlSt8aN0hqZvItxR2dUcZBFTipDsgeulyfzWkKCOshTQNwgOHR49b1zfitj5gvPbq_CJEfdICjN0-foxpVnw1cNfeg22etQ8yc7RLdmlol4xRB2KwDbWp7_0QSSjMm7B19jBgLX9BM57p5WFfgiENb0bum8F0iTcTt0bXuIvcDq1WLNplA9zsBV9sCX7SYQ_0QZSXcddrY",
    name: "Elena",
  },
];

type ModalState = "none" | "cancelConfirm" | "cancelled";

export default function PlanDetail() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [confirmed, setConfirmed] = useState(searchParams.get("confirmed") === "1");
  const [modal, setModal] = useState<ModalState>("none");

  function handleConfirmAttendance() {
    setConfirmed(true);
  }

  function handleCancelAttendance() {
    setModal("cancelConfirm");
  }

  function handleConfirmCancel() {
    setModal("cancelled");
    setConfirmed(false);
  }

  return (
    <div className="min-h-screen bg-background pb-[88px]">
      <AppHeader rightSlot={<Avatar src={AVATAR} alt="Mi perfil" />} />

      <main className="pt-[64px] px-6 max-w-[800px] mx-auto">
        {/* Hero image */}
        <section className="mt-4 relative rounded-2xl overflow-hidden shadow-lg aspect-[16/9]">
          <img src={HERO} alt="Pizza en lo de Coti" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <h2 className="text-[32px] font-extrabold text-white mb-1 tracking-tight">
              Pizza en lo de Coti
            </h2>
            <p className="text-[16px] text-white/90">
              Una noche clásica de viernes entre amigos.
            </p>
          </div>
        </section>

        {/* Quick info */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { icon: "calendar_today", title: "Viernes 24", sub: "21:00 hs" },
            { icon: "location_on", title: "Calle Olivos 123", sub: "Barrio Norte" },
            { icon: "group", title: "8 Amigos", sub: "Confirmados" },
          ].map(({ icon, title, sub }) => (
            <div
              key={icon}
              className="bg-surface-container-low p-4 rounded-xl flex flex-col items-center text-center"
            >
              <span className="material-symbols-outlined text-primary mb-2 text-[22px]">{icon}</span>
              <span className="text-[15px] font-bold block mb-0.5">{title}</span>
              <span className="text-[13px] text-on-surface-variant">{sub}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Description */}
            <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded-xl shadow-[0_4px_12px_rgba(74,93,63,0.04)]">
              <h3 className="text-[28px] font-extrabold text-primary mb-4">Sobre la juntada</h3>
              <p className="text-[17px] text-on-surface-variant leading-relaxed mb-6">
                Che, ¡sale pizza casera! Coti se puso la 10 y amasa hoy. Traigan algo para tomar
                (cerveza o vino). El postre corre por cuenta de los que lleguen tarde.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-5 py-3 rounded-xl hover:bg-secondary-fixed-dim transition-colors text-[15px] font-semibold">
                  <span className="material-symbols-outlined text-[20px]">map</span>
                  Ver ubicación
                </button>
                <button className="flex items-center gap-2 bg-surface-container-highest text-primary px-5 py-3 rounded-xl hover:bg-surface-container-high transition-colors text-[15px] font-semibold">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  Chat del grupo
                </button>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden h-56 w-full border border-outline-variant/50 relative shadow-sm">
              <img src={MAP} alt="Mapa del lugar" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {/* Who's coming */}
            <div className="bg-surface-container-low p-5 rounded-xl">
              <h3 className="text-[13px] font-bold text-primary uppercase tracking-wider mb-4">
                ¿Quiénes van?
              </h3>
              <div className="flex flex-col gap-4">
                {attendees.map(({ src, name }) => (
                  <div key={name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={src} alt={name} className="w-11 h-11 rounded-full object-cover" />
                      <span className="text-[17px] font-semibold">{name}</span>
                    </div>
                    <span
                      className="material-symbols-outlined text-secondary text-[26px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  </div>
                ))}
                <div className="pt-4 border-t border-outline-variant/30 flex items-center gap-2 text-on-surface-variant">
                  <div className="inline-flex w-9 h-9 rounded-full ring-2 ring-surface-container-low bg-surface-container-highest items-center justify-center text-[13px] font-bold">
                    +4
                  </div>
                  <span className="text-[15px]">otros amigos confirmados</span>
                </div>
              </div>
            </div>

            {/* Confirmation / Confirmed state */}
            {!confirmed ? (
              <div className="bg-primary text-white p-5 rounded-xl shadow-lg">
                <h4 className="text-[26px] font-extrabold mb-1">¿Vas?</h4>
                <p className="text-primary-fixed-dim text-[14px] mb-4">
                  Confirmá antes del Jueves 23
                </p>
                <button
                  onClick={handleConfirmAttendance}
                  className="w-full bg-secondary-fixed text-on-secondary-fixed font-bold text-[16px] py-4 rounded-xl active:scale-95 transition-transform shadow-md"
                >
                  Confirmar Asistencia
                </button>
              </div>
            ) : (
              <div className="bg-primary text-white p-5 rounded-xl shadow-lg">
                <h4 className="text-[22px] font-extrabold mb-1">¡Confirmaste Asistencia!</h4>
                <p className="text-primary-fixed-dim text-[13px] mb-4">
                  Nos vemos el Viernes 24 a las 21:00 hs.
                </p>
                <button
                  onClick={handleCancelAttendance}
                  className="w-full bg-error text-white font-bold text-[15px] py-3 rounded-xl active:scale-95 transition-transform"
                >
                  Cancelar Asistencia
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <BottomNav />

      {/* Cancel confirmation modal */}
      {modal === "cancelConfirm" && (
        <div className="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 px-4 pb-8 sm:pb-0">
          <div className="bg-secondary-container w-full max-w-[360px] rounded-2xl p-6 shadow-2xl">
            <p className="text-[13px] font-bold text-secondary uppercase tracking-wider text-center mb-2">
              ¿No te sumás?
            </p>
            <h3 className="text-[22px] font-extrabold text-primary text-center mb-6">
              ¿Queres cancelar asistencia?
            </h3>
            <div className="flex flex-col gap-3">
              <button
                onClick={handleConfirmCancel}
                className="w-full bg-primary text-on-primary py-3.5 rounded-xl text-[15px] font-bold active:scale-95 transition-transform"
              >
                Sí, no puedo asistir
              </button>
              <button
                onClick={() => setModal("none")}
                className="w-full bg-primary/80 text-on-primary py-3.5 rounded-xl text-[15px] font-bold active:scale-95 transition-transform"
              >
                Todavía no me decido
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cancelled confirmation modal */}
      {modal === "cancelled" && (
        <div className="fixed inset-0 bg-black/40 flex items-end sm:items-center justify-center z-50 px-4 pb-8 sm:pb-0">
          <div className="bg-primary w-full max-w-[360px] rounded-2xl p-6 shadow-2xl text-center">
            <h3 className="text-[24px] font-extrabold text-on-primary mb-5">
              Cancelaste Asistencia
            </h3>
            <button
              onClick={() => navigate("/home")}
              className="bg-secondary-fixed text-on-secondary-fixed py-3 px-8 rounded-xl text-[15px] font-bold active:scale-95 transition-transform"
            >
              Volver a la Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
