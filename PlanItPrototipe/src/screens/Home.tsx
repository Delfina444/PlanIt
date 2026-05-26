import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppHeader, { Avatar } from "../components/AppHeader";
import BottomNav from "../components/BottomNav";

const AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuDJR0yQ1FsrWB_92fECSbSSgZQp_RY4Cl5h8SvsCJ9pOyW8gd3__PnBtB28cYIBQfO-vpODx9IchgqyUrUT7vF8HPGjgJuoOSFksvXnvLBvAO4mb81jmidczviUL3uC8-nfM0JWTfgBR2rJL-Qls2BI8vE9WU-iq5MvHjnMJUBMBlkSHKkJ527z6Vls8Lq5jlG-uXxO2w4DUxbAGL-VGnUodtFPF7h9DSgC7jDzI0Zw3c4KoOlCCkTvy5PpAMd3f5FnYlUQAKDAKcMD";
const PIC1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCj4xWyyweDEinEvZDu1EN9hG7kGvwZcWGpkLx0MMpAhtQ9chrAuImuqEVoMZdrjpz-qWq6hvBX9_qdf-lgfIJPdURsrPCwPcF3LgJsHVxt1wFdnLvLtlXX4yXSuTwlIKkpf-3eQsXIoIp9EAXhk6Sge-KDZivGcH5gaUvaaO6xDqH_DvVrzl6JhvqdzBo3Cft2rGSVsEoNNJkrS8deKPl-f-2lT5b2Pj51ViMVBU4G5wEp1mVK0EaZZO9cbr6TK-kqZY27UFGnmFNq";
const PIC2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAFHZGfiCfbzvvw5TRowPp4YA1tXx10BHUHvt9C4AZi_ekvNhH7NZBSLeVwIzzYw2AKDqI_5NPGJ096tBQGGLGTVmoVTGWg1jNWQrXyFKxC90QgMCVlV5WloXmZCqcAyjYwTZRy0MoIoiT8jQdarktZemlAvbJBoXZxFYaxgnBCw_Fe0OqySkLg9JKSVmYf_qzo266RbF8XST4tyF3ldfYr3PGRTTnpEMEfuLI_acyhK-fkSJ90_xl5_Up4YvY4rAybt4i99FwJwfTH";
const PIC3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCFruOW0Usd6l6ladILNscHU4DkxLHMAcJRnchMrlWbX-qS_m1HdO0a1lWcGm3x3R8J_9cNShKSTyzc4FabZzBbi_fYbMRhCIUNY5nZt3Lv4KswnHv6_uSpJ_AYVatTdGMqO6T8GIhhSJxccvYhFfUFCmCklV0eKFjk-tjsfhg7DCSHMxPNjzEG90dlVEdK3qczKwbWkclkX7SFIjmPDhx7bSXaL50VvpZALOaFm7mdkFciC9TvZ0-oAec1Z1TcYVhgd6D1tnRM2B7q";

export default function Home() {
  const navigate = useNavigate();
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <AppHeader
        rightSlot={
          <>
            <button className="p-2 rounded-full hover:bg-surface-container/60 transition-colors active:scale-95">
              <span className="material-symbols-outlined text-[26px] text-primary">search</span>
            </button>
            <button
              onClick={() => setShowPicker(true)}
              className="p-2 rounded-full hover:bg-surface-container/60 transition-colors active:scale-95"
            >
              <span className="material-symbols-outlined text-[26px] text-primary">add</span>
            </button>
            <Avatar src={AVATAR} alt="Mi perfil" />
          </>
        }
      />

      <main className="pt-[80px] pb-[88px] px-6 max-w-[640px] mx-auto">
        {/* Greeting */}
        <section className="mt-4 mb-5">
          <h1 className="text-[40px] font-extrabold text-primary leading-tight tracking-tight">
            ¡Hola! ¿Qué sale hoy?
          </h1>
          <p className="text-[15px] text-on-surface-variant mt-1">
            El plan perfecto está a un paso.
          </p>
        </section>

        {/* CTA */}
        <section className="mb-6">
          <button
            onClick={() => setShowPicker(true)}
            className="w-full bg-secondary-container hover:bg-secondary-container/90 text-primary px-5 py-4 rounded-2xl flex justify-between items-center transition-transform active:scale-[0.98]"
          >
            <span className="text-[17px] font-extrabold">Nueva Juntada</span>
            <div className="bg-primary text-white p-2 rounded-xl">
              <span className="material-symbols-outlined text-[20px]">add</span>
            </div>
          </button>
        </section>

        {/* Próximas Juntadas */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[22px] font-extrabold text-primary">Próximas Juntadas</h2>
            <button
              onClick={() => navigate("/mis-planes")}
              className="text-[13px] font-bold text-secondary underline underline-offset-2"
            >
              Ver todas
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {/* Card 1 */}
            <div
              onClick={() => navigate("/plan")}
              className="bg-white rounded-2xl px-5 py-4 border border-outline/10 hover:bg-surface-container-low transition-colors cursor-pointer"
            >
              <div className="mb-2">
                <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-2.5 py-0.5 rounded-full text-[12px] font-bold uppercase tracking-wide">
                  El finde
                </span>
              </div>
              <h3 className="text-[17px] font-bold text-on-surface mb-1">Asado en lo de Juan</h3>
              <p className="text-[13px] text-on-surface-variant mb-3">
                21:30 hs · Palermo, CABA
              </p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <img src={PIC1} alt="Amigo" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src={PIC2} alt="Amiga" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <div className="w-8 h-8 rounded-full bg-outline-variant flex items-center justify-center text-[11px] font-bold border-2 border-white">
                    +8
                  </div>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-xl text-[13px] font-bold active:scale-95 transition-transform">
                  Confirmar
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div
              onClick={() => navigate("/plan")}
              className="bg-white rounded-2xl px-5 py-4 border border-outline/10 hover:bg-surface-container-low transition-colors cursor-pointer"
            >
              <div className="mb-2">
                <span className="bg-primary-fixed text-on-primary-fixed-variant px-2.5 py-0.5 rounded-full text-[12px] font-bold uppercase tracking-wide">
                  Jueves
                </span>
              </div>
              <h3 className="text-[17px] font-bold text-on-surface mb-1">Fútbol 5 Mixto</h3>
              <p className="text-[13px] text-on-surface-variant mb-3">
                19:00 hs · 9 compañeros
              </p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <img src={PIC3} alt="Amigo" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <div className="w-8 h-8 rounded-full bg-outline-variant flex items-center justify-center text-[11px] font-bold border-2 border-white">
                    +4
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-secondary">
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-[13px] font-bold">Confirmado</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promo */}
        <section className="mb-6">
          <div className="bg-[#d8ef90]/40 rounded-2xl px-5 py-4 flex items-center justify-between border border-[#d8ef90]/60">
            <div>
              <h3 className="text-[16px] font-extrabold text-primary">¿Sin ideas para el finde?</h3>
              <p className="text-[13px] text-on-surface-variant mt-0.5">
                Explorá los mejores planes de la comunidad.
              </p>
            </div>
            <button
              onClick={() => navigate("/explore")}
              className="bg-primary text-white px-4 py-2.5 rounded-xl text-[13px] font-bold whitespace-nowrap ml-4 active:scale-95 transition-transform"
            >
              Explorar
            </button>
          </div>
        </section>

        {/* Mis Grupos */}
        <section className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[22px] font-extrabold text-primary">Mis Grupos</h2>
            <button className="p-2 rounded-full bg-surface-container-high text-primary active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-[22px]">add</span>
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {[
              { icon: "groups", bg: "bg-primary-fixed", color: "text-primary", name: "Los de Siempre", members: "12 miembros" },
              { icon: "sports_basketball", bg: "bg-secondary-fixed", color: "text-secondary", name: "Basquet Jueves", members: "8 miembros" },
              { icon: "restaurant", bg: "bg-tertiary-fixed", color: "text-tertiary", name: "Gourmet Club", members: "5 miembros" },
            ].map(({ icon, bg, color, name, members }) => (
              <div
                key={name}
                className="flex items-center justify-between px-4 py-3.5 bg-white rounded-2xl border border-outline/10 hover:bg-surface-container-low transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center ${color}`}>
                    <span className="material-symbols-outlined text-[22px]">{icon}</span>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-on-surface">{name}</h4>
                    <p className="text-[13px] text-on-surface-variant">{members}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline text-[22px]">chevron_right</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />

      {/* Nueva Juntada picker bottom sheet */}
      {showPicker && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-end justify-center"
          onClick={() => setShowPicker(false)}
        >
          <div
            className="bg-surface-container-lowest w-full max-w-[480px] rounded-t-3xl px-6 pt-5 pb-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-10 h-1 bg-outline-variant rounded-full mx-auto mb-5" />
            <h3 className="text-[20px] font-extrabold text-primary mb-1">Nueva Juntada</h3>
            <p className="text-[13px] text-on-surface-variant mb-5">Elige tu preferencia</p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => { setShowPicker(false); navigate("/create"); }}
                className="flex items-center justify-between w-full bg-secondary-container/40 hover:bg-secondary-container/60 px-5 py-4 rounded-2xl transition-colors active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[22px]">edit_note</span>
                  </div>
                  <div className="text-left">
                    <span className="text-[16px] font-bold text-primary block">Crear un Plan</span>
                    <span className="text-[12px] text-on-surface-variant">Definí todos los detalles</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline text-[22px]">chevron_right</span>
              </button>

              <button
                onClick={() => { setShowPicker(false); navigate("/plan-ganador"); }}
                className="flex items-center justify-between w-full bg-secondary-container/40 hover:bg-secondary-container/60 px-5 py-4 rounded-2xl transition-colors active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[22px]">emoji_events</span>
                  </div>
                  <div className="text-left">
                    <span className="text-[16px] font-bold text-primary block">Plan Ganador</span>
                    <span className="text-[12px] text-on-surface-variant">El grupo vota el mejor plan</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline text-[22px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
