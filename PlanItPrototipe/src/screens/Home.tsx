import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppHeader, { Avatar } from "../components/AppHeader";
import BottomNav from "../components/BottomNav";

const AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuDJR0yQ1FsrWB_92fECSbSSgZQp_RY4Cl5h8SvsCJ9pOyW8gd3__PnBtB28cYIBQfO-vpODx9IchgqyUrUT7vF8HPGjgJuoOSFksvXnvLBvAO4mb81jmidczviUL3uC8-nfM0JWTfgBR2rJL-Qls2BI8vE9WU-iq5MvHjnMJUBMBlkSHKkJ527z6Vls8Lq5jlG-uXxO2w4DUxbAGL-VGnUodtFPF7h9DSgC7jDzI0Zw3c4KoOlCCkTvy5PpAMd3f5FnYlUQAKDAKcMD";

type Modal = "none" | "picker" | "group-picker" | "create-group" | "join-group";

const INITIAL_GROUPS = [
  { icon: "groups", bg: "bg-primary-fixed", color: "text-primary", name: "Los de Siempre", members: "12 miembros" },
  { icon: "sports_basketball", bg: "bg-secondary-fixed", color: "text-secondary", name: "Basquet Jueves", members: "8 miembros" },
  { icon: "restaurant", bg: "bg-tertiary-fixed", color: "text-tertiary", name: "Gourmet Club", members: "5 miembros" },
];
const PIC1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCj4xWyyweDEinEvZDu1EN9hG7kGvwZcWGpkLx0MMpAhtQ9chrAuImuqEVoMZdrjpz-qWq6hvBX9_qdf-lgfIJPdURsrPCwPcF3LgJsHVxt1wFdnLvLtlXX4yXSuTwlIKkpf-3eQsXIoIp9EAXhk6Sge-KDZivGcH5gaUvaaO6xDqH_DvVrzl6JhvqdzBo3Cft2rGSVsEoNNJkrS8deKPl-f-2lT5b2Pj51ViMVBU4G5wEp1mVK0EaZZO9cbr6TK-kqZY27UFGnmFNq";
const PIC2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAFHZGfiCfbzvvw5TRowPp4YA1tXx10BHUHvt9C4AZi_ekvNhH7NZBSLeVwIzzYw2AKDqI_5NPGJ096tBQGGLGTVmoVTGWg1jNWQrXyFKxC90QgMCVlV5WloXmZCqcAyjYwTZRy0MoIoiT8jQdarktZemlAvbJBoXZxFYaxgnBCw_Fe0OqySkLg9JKSVmYf_qzo266RbF8XST4tyF3ldfYr3PGRTTnpEMEfuLI_acyhK-fkSJ90_xl5_Up4YvY4rAybt4i99FwJwfTH";
const PIC3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCFruOW0Usd6l6ladILNscHU4DkxLHMAcJRnchMrlWbX-qS_m1HdO0a1lWcGm3x3R8J_9cNShKSTyzc4FabZzBbi_fYbMRhCIUNY5nZt3Lv4KswnHv6_uSpJ_AYVatTdGMqO6T8GIhhSJxccvYhFfUFCmCklV0eKFjk-tjsfhg7DCSHMxPNjzEG90dlVEdK3qczKwbWkclkX7SFIjmPDhx7bSXaL50VvpZALOaFm7mdkFciC9TvZ0-oAec1Z1TcYVhgd6D1tnRM2B7q";

export default function Home() {
  const navigate = useNavigate();
  const [modal, setModal] = useState<Modal>("none");
  const [groups, setGroups] = useState(INITIAL_GROUPS);
  const [groupName, setGroupName] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  function closeModal() {
    setModal("none");
    setGroupName("");
    setJoinCode("");
  }

  function handleCreateGroup(e: React.FormEvent) {
    e.preventDefault();
    if (!groupName.trim()) return;
    const icons = ["groups", "celebration", "sports_tennis", "music_note", "favorite"];
    const styles = [
      { icon: icons[groups.length % icons.length], bg: "bg-primary-fixed", color: "text-primary" },
      { icon: icons[groups.length % icons.length], bg: "bg-secondary-fixed", color: "text-secondary" },
      { icon: icons[groups.length % icons.length], bg: "bg-tertiary-fixed", color: "text-tertiary" },
    ];
    const style = styles[groups.length % styles.length];
    setGroups((prev) => [...prev, { ...style, name: groupName.trim(), members: "1 miembro" }]);
    setToast(`Grupo "${groupName.trim()}" creado.`);
    closeModal();
  }

  function handleJoinGroup(e: React.FormEvent) {
    e.preventDefault();
    if (!joinCode.trim()) return;
    setToast("¡Te uniste al grupo!");
    closeModal();
  }

  return (
    <div className="min-h-screen bg-background">
      <AppHeader
        rightSlot={<Avatar src={AVATAR} alt="Mi perfil" />}
      />

      <main className="pt-[80px] pb-[120px] px-6 max-w-[640px] mx-auto">
        {/* Greeting */}
        <section className="mt-4 mb-5">
          <h1 className="text-[40px] font-extrabold text-primary leading-tight tracking-tight">
            ¡Hola! ¿Qué sale hoy?
          </h1>
          <p className="text-[15px] text-on-surface-variant mt-1">
            El plan perfecto está a un quiz de realizarse.
          </p>
        </section>

        {/* CTA */}
        <section className="mb-6">
          <button
            onClick={() => setModal("picker")}
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
            {/* Card regular — fecha confirmada */}
            <div
              onClick={() => navigate("/plan?creator=1")}
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
                <span className="flex items-center gap-1.5 text-secondary text-[13px] font-bold">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  Anfitrión
                </span>
              </div>
            </div>

            {/* Card Plan Ganador — en votación, sin fecha pactada */}
            <div
              onClick={() => navigate("/plan-ganador?mode=vote")}
              className="rounded-2xl px-5 py-4 border-2 border-dashed border-secondary-fixed bg-secondary-fixed/20 hover:bg-secondary-fixed/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary text-on-primary px-2.5 py-0.5 rounded-full text-[12px] font-bold uppercase tracking-wide flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    how_to_vote
                  </span>
                  Votación activa
                </span>
              </div>
              <h3 className="text-[17px] font-bold text-on-surface mb-0.5">Bowling con La Banda</h3>
              <p className="text-[13px] text-on-surface-variant mb-3">
                Fecha por definir · El grupo está votando
              </p>

              {/* Voting progress */}
              <div className="mb-3">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wide">
                    Respuestas recibidas
                  </span>
                  <span className="text-[12px] font-bold text-primary">5 de 8</span>
                </div>
                <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-secondary-fixed rounded-full" style={{ width: "62%" }} />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <img src={PIC2} alt="Amigo" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src={PIC3} alt="Amiga" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <div className="w-8 h-8 rounded-full bg-outline-variant flex items-center justify-center text-[11px] font-bold border-2 border-white">
                    +3
                  </div>
                </div>
                <button className="bg-secondary-fixed text-on-secondary-fixed px-4 py-2 rounded-xl text-[13px] font-bold active:scale-95 transition-transform shadow-[0_2px_0_0_#bad075]">
                  Votar →
                </button>
              </div>
            </div>

            {/* Card regular — confirmado */}
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
            <button
              onClick={() => setModal("group-picker")}
              className="p-2 rounded-full bg-surface-container-high text-primary active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[22px]">add</span>
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {groups.map(({ icon, bg, color, name, members }) => (
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

      {/* Toast */}
      {toast && (
        <div
          className="fixed top-4 left-1/2 -translate-x-1/2 z-[60] max-w-[90%] bg-primary text-on-primary px-5 py-3 rounded-xl shadow-lg text-[13px] font-semibold cursor-pointer"
          onClick={() => setToast(null)}
        >
          {toast}
        </div>
      )}

      {/* Nueva Juntada picker bottom sheet */}
      {modal === "picker" && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-end justify-center"
          onClick={closeModal}
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
                onClick={() => { closeModal(); navigate("/create"); }}
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
                onClick={() => { closeModal(); navigate("/plan-ganador"); }}
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

      {/* Mis Grupos picker bottom sheet */}
      {modal === "group-picker" && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-end justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-surface-container-lowest w-full max-w-[480px] rounded-t-3xl px-6 pt-5 pb-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-10 h-1 bg-outline-variant rounded-full mx-auto mb-5" />
            <h3 className="text-[20px] font-extrabold text-primary mb-1">¿Qué querés hacer?</h3>
            <p className="text-[13px] text-on-surface-variant mb-5">Elegí una opción</p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => setModal("create-group")}
                className="flex items-center justify-between w-full bg-secondary-container/40 hover:bg-secondary-container/60 px-5 py-4 rounded-2xl transition-colors active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[22px]">group_add</span>
                  </div>
                  <div className="text-left">
                    <span className="text-[16px] font-bold text-primary block">Crear un grupo</span>
                    <span className="text-[12px] text-on-surface-variant">Y obtené un código para invitar</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline text-[22px]">chevron_right</span>
              </button>

              <button
                onClick={() => setModal("join-group")}
                className="flex items-center justify-between w-full bg-secondary-container/40 hover:bg-secondary-container/60 px-5 py-4 rounded-2xl transition-colors active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-[22px]">login</span>
                  </div>
                  <div className="text-left">
                    <span className="text-[16px] font-bold text-primary block">Unirme a un grupo</span>
                    <span className="text-[12px] text-on-surface-variant">Con un código de invitación</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline text-[22px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create group modal */}
      {modal === "create-group" && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center px-4 pb-8 sm:pb-0" onClick={closeModal}>
          <form
            onSubmit={handleCreateGroup}
            className="bg-surface-container-lowest w-full max-w-[400px] rounded-2xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-[22px] font-extrabold text-primary mb-4">Crear un grupo</h3>
            <input
              type="text"
              autoFocus
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Nombre del grupo (ej. Los de Siempre)"
              className="w-full h-14 px-4 rounded-xl bg-secondary-container/30 border-none focus:ring-2 focus:ring-secondary/40 text-[15px] outline-none transition-all mb-3"
            />
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-3.5 rounded-xl text-[15px] font-bold active:scale-95 transition-transform"
              >
                Crear grupo
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="w-full bg-surface-container-high text-on-surface py-3 rounded-xl text-[14px] font-semibold"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Join group modal */}
      {modal === "join-group" && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center px-4 pb-8 sm:pb-0" onClick={closeModal}>
          <form
            onSubmit={handleJoinGroup}
            className="bg-surface-container-lowest w-full max-w-[400px] rounded-2xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-[22px] font-extrabold text-primary mb-4">Unirme a un grupo</h3>
            <input
              type="text"
              autoFocus
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value)}
              placeholder="Código de invitación"
              className="w-full h-14 px-4 rounded-xl bg-secondary-container/30 border-none focus:ring-2 focus:ring-secondary/40 text-[15px] outline-none transition-all mb-3 font-mono uppercase"
            />
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-3.5 rounded-xl text-[15px] font-bold active:scale-95 transition-transform"
              >
                Unirme
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="w-full bg-surface-container-high text-on-surface py-3 rounded-xl text-[14px] font-semibold"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
