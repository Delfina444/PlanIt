import { useNavigate, useLocation } from "react-router-dom";

const tabs = [
  { label: "Inicio", icon: "home", path: "/home" },
  { label: "Explorar", icon: "explore", path: "/explore" },
  { label: "Perfil", icon: "person", path: "/profile" },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-[72px] bg-[#fdfdfc]/92 backdrop-blur-md border-t border-[#c4c8bd]/25 shadow-[0_-4px_20px_-2px_rgba(74,93,63,0.1)] rounded-t-2xl">
      {tabs.map(({ label, icon, path }) => {
        const isActive = pathname === path;
        return (
          <button
            key={path}
            onClick={() => navigate(path)}
            className={`flex flex-col items-center justify-center gap-0.5 px-5 py-1.5 rounded-2xl transition-all active:scale-90 duration-150 ${
              isActive
                ? "bg-secondary-container/30 text-primary"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            <span
              className="material-symbols-outlined text-[26px]"
              style={
                isActive
                  ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }
                  : undefined
              }
            >
              {icon}
            </span>
            <span className="text-[12px] font-bold font-sans leading-none">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
