import { useNavigate } from "react-router-dom";
import AppHeader, { Avatar } from "../components/AppHeader";

const AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuDJR0yQ1FsrWB_92fECSbSSgZQp_RY4Cl5h8SvsCJ9pOyW8gd3__PnBtB28cYIBQfO-vpODx9IchgqyUrUT7vF8HPGjgJuoOSFksvXnvLBvAO4mb81jmidczviUL3uC8-nfM0JWTfgBR2rJL-Qls2BI8vE9WU-iq5MvHjnMJUBMBlkSHKkJ527z6Vls8Lq5jlG-uXxO2w4DUxbAGL-VGnUodtFPF7h9DSgC7jDzI0Zw3c4KoOlCCkTvy5PpAMd3f5FnYlUQAKDAKcMD";
const INSPIRATION = "https://lh3.googleusercontent.com/aida-public/AB6AXuDKOgq3yPKVVsPJsmfo_97PNNXOgGUHbVE_71sGrJxJ_D4ahimMr9Hq4tAnj4Xl3ESOocHea4alE8gaeO1pykkPUmBDRu1kMmsKt0nNfWfMqZFQpS8PXMp8nPfUVrXVmYHXXB_aKAzsfG462t-UbR-txR_yuQ6ogX3sy0ZS9YUid9ZH0UHL3aSxn4JjaPxukV6fzERPbsU2OX9SS4hpgZnHJDqesDnGIIPEU6o-jROIPVBUlIVFqNjWfF_YMCUG4PszIws17kK7DEYU";

export default function CreatePlan() {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate("/plan?creator=1");
  }

  return (
    <div className="min-h-screen bg-background">
      <AppHeader
        showClose
        onClose={() => navigate("/home")}
        rightSlot={<Avatar src={AVATAR} alt="Mi perfil" />}
      />

      <main className="pt-[80px] pb-[48px] px-6 flex justify-center">
        <div className="max-w-[640px] w-full">
          {/* Hero */}
          <div className="my-6 text-center">
            <h2 className="text-[36px] font-extrabold text-primary tracking-tight leading-tight">
              Crear un Plan
            </h2>
            <p className="text-[15px] text-on-surface-variant mt-1.5">
              Reúne a tu gente y organiza algo increíble hoy mismo.
            </p>
          </div>

          {/* Form */}
          <div className="bg-surface-container-lowest rounded-2xl p-5 border border-surface-container-high">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Title */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[14px] text-on-surface-variant" htmlFor="title">
                  Título del plan
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Ej. Asado Monumental, Fútbol..."
                  className="w-full h-14 px-4 rounded-xl bg-secondary-container/30 border-none focus:ring-2 focus:ring-secondary/40 text-[15px] placeholder:text-on-surface-variant/60 outline-none transition-all"
                />
              </div>

              {/* Location */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[14px] text-on-surface-variant" htmlFor="location">
                  Lugar
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                    location_on
                  </span>
                  <input
                    id="location"
                    type="text"
                    placeholder="¿Dónde nos juntamos?"
                    className="w-full h-14 pl-11 pr-4 rounded-xl bg-secondary-container/30 border-none focus:ring-2 focus:ring-secondary/40 text-[15px] placeholder:text-on-surface-variant/60 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[14px] text-on-surface-variant" htmlFor="date">
                  Fecha
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                    calendar_today
                  </span>
                  <input
                    id="date"
                    type="date"
                    className="w-full h-14 pl-11 pr-4 rounded-xl bg-secondary-container/30 border-none focus:ring-2 focus:ring-secondary/40 text-[15px] outline-none transition-all"
                  />
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
                  <input
                    id="time"
                    type="time"
                    className="w-full h-14 pl-11 pr-4 rounded-xl bg-secondary-container/30 border-none focus:ring-2 focus:ring-secondary/40 text-[15px] outline-none transition-all"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[14px] text-on-surface-variant" htmlFor="description">
                  Descripción corta
                </label>
                <textarea
                  id="description"
                  rows={3}
                  placeholder="Algún detalle extra, qué llevar o qué traer..."
                  className="w-full p-4 rounded-xl bg-secondary-container/30 border-none focus:ring-2 focus:ring-secondary/40 text-[15px] placeholder:text-on-surface-variant/60 outline-none transition-all resize-none"
                />
              </div>

              {/* Inspiration image */}
              <div className="h-40 w-full rounded-xl overflow-hidden">
                <img
                  src={INSPIRATION}
                  alt="Inspiración para tu juntada"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-14 bg-primary text-on-primary rounded-xl text-[16px] font-extrabold active:scale-[0.98] transition-all duration-200 mt-1"
              >
                Crear Juntada
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
