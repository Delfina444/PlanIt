import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AppHeaderProps {
  rightSlot?: ReactNode;
  showClose?: boolean;
  onClose?: () => void;
}

export default function AppHeader({ rightSlot, showClose, onClose }: AppHeaderProps) {
  const navigate = useNavigate();

  function handleClose() {
    if (onClose) onClose();
    else navigate(-1);
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 h-16 bg-[#fdfdfc]/95 backdrop-blur-md border-b border-[#c4c8bd]/30 shadow-[0_2px_15px_-3px_rgba(74,93,63,0.07)]">
      <div className="flex items-center gap-3">
        {showClose && (
          <button
            onClick={handleClose}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-surface-container-high/60 transition-colors active:scale-95 mr-1"
          >
            <span className="material-symbols-outlined text-[22px] text-primary">close</span>
          </button>
        )}
        <span
          className="material-symbols-outlined text-[22px] text-primary"
          style={{ fontVariationSettings: "'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 24" }}
        >
          star
        </span>
        <span className="font-sans text-[22px] font-extrabold tracking-tight text-primary">
          Planit
        </span>
      </div>
      {rightSlot && (
        <div className="flex items-center gap-2">{rightSlot}</div>
      )}
    </header>
  );
}

export function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-primary-fixed/40 bg-secondary-fixed flex-shrink-0">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
