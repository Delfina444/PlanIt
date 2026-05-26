import { useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import BottomNav from "../components/BottomNav";

const PROFILE_PIC = "https://lh3.googleusercontent.com/aida-public/AB6AXuBw-ReAqE4C2bZGAln54DcW2dOXfoB1DxYshrqz6FddqA0isrUTQjVE2Vk8-2tZtUgFxkrxTCx1jEsdHmwfQXSyfGzMXJb46A176Ew8H5HresOeBIS8XvQNUqd81Mf2jaWY_D3i2FtUGiR8XGPRt-wVMjEJzb-rnSGcMfcuTlvsNo_wBdJ97VuvLTzEhNy1FjANxXnSX76pYpmhzXkq88WbQ1_kK182TgfQw1FePq6NlZ5XMIbn8gvvPeik0MP13LhR8wPbKonMnFVh";

const menuItems = [
  { icon: "event_note", label: "Tus Planes", path: "/mis-planes", bg: "bg-primary-fixed", color: "text-on-primary-fixed" },
  { icon: "notifications", label: "Notificaciones", badge: "3", bg: "bg-surface-variant", color: "text-on-surface-variant" },
];

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-[88px]">
      <AppHeader
        rightSlot={
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors active:scale-95">
            <span className="material-symbols-outlined text-on-surface-variant text-[22px]">settings</span>
          </button>
        }
      />

      <main className="max-w-[640px] mx-auto px-6 pt-[80px]">
        {/* Profile header */}
        <section className="flex flex-col items-center md:flex-row md:items-start md:gap-10 mt-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-secondary-container rounded-full blur opacity-25 group-hover:opacity-40 transition duration-700" />
            <img
              src={PROFILE_PIC}
              alt="Julián García"
              className="relative w-32 h-32 rounded-full object-cover border-4 border-background shadow-xl"
            />
            <button className="absolute bottom-1 right-1 bg-primary text-on-primary p-2 rounded-full shadow-lg active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-[16px]">edit</span>
            </button>
          </div>
          <div className="mt-6 md:mt-2 text-center md:text-left flex-1">
            <h1 className="text-[40px] font-extrabold text-on-surface leading-tight tracking-tight">
              Julián García
            </h1>
            <p className="text-on-surface-variant text-[16px] mt-1">@juli_garcia</p>
            <p className="mt-3 text-outline text-[15px] max-w-sm leading-relaxed">
              Explorador de eventos culturales y entusiasta de las caminatas grupales. Siempre
              buscando el próximo plan ideal.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-surface-container-low p-5 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="text-[32px] font-extrabold text-primary">24</span>
            <span className="text-[13px] font-bold text-on-surface-variant mt-1">Juntadas</span>
          </div>
          <div className="bg-secondary-container p-5 rounded-xl flex flex-col items-center justify-center text-center">
            <span className="text-[32px] font-extrabold text-on-secondary-container">6</span>
            <span className="text-[13px] font-bold text-on-secondary-container mt-1">Planes creados</span>
          </div>
        </section>

        {/* Menu */}
        <section className="mt-10 mb-6">
          <h2 className="text-[20px] font-bold text-on-surface px-1 mb-4">Ajustes y Personalización</h2>
          <div className="bg-surface-container-low rounded-2xl overflow-hidden divide-y divide-outline-variant/30">
            {menuItems.map(({ icon, label, badge, bg, color, path }) => (
              <button
                key={label}
                onClick={() => path && navigate(path)}
                className="w-full flex items-center justify-between p-5 hover:bg-surface-container-high transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-full ${bg} flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined text-[20px]">{icon}</span>
                  </div>
                  <span className="text-[16px] font-semibold text-on-surface">{label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {badge && (
                    <span className="bg-error text-on-error text-[11px] font-extrabold px-2 py-0.5 rounded-full">
                      {badge}
                    </span>
                  )}
                  <span className="material-symbols-outlined text-outline text-[22px]">chevron_right</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Logout */}
        <section className="mb-10 flex flex-col items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="w-full md:w-auto px-10 py-4 bg-background border-2 border-outline-variant rounded-xl text-error font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-error-container hover:border-error-container transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            Cerrar Sesión
          </button>
          <p className="text-outline text-[12px] font-semibold">Versión 2.4.0 (Kinetic Olive)</p>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
