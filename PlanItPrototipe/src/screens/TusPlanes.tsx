import { useNavigate } from "react-router-dom";
import AppHeader, { Avatar } from "../components/AppHeader";
import BottomNav from "../components/BottomNav";

const AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuDJR0yQ1FsrWB_92fECSbSSgZQp_RY4Cl5h8SvsCJ9pOyW8gd3__PnBtB28cYIBQfO-vpODx9IchgqyUrUT7vF8HPGjgJuoOSFksvXnvLBvAO4mb81jmidczviUL3uC8-nfM0JWTfgBR2rJL-Qls2BI8vE9WU-iq5MvHjnMJUBMBlkSHKkJ527z6Vls8Lq5jlG-uXxO2w4DUxbAGL-VGnUodtFPF7h9DSgC7jDzI0Zw3c4KoOlCCkTvy5PpAMd3f5FnYlUQAKDAKcMD";

const PIC1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCj4xWyyweDEinEvZDu1EN9hG7kGvwZcWGpkLx0MMpAhtQ9chrAuImuqEVoMZdrjpz-qWq6hvBX9_qdf-lgfIJPdURsrPCwPcF3LgJsHVxt1wFdnLvLtlXX4yXSuTwlIKkpf-3eQsXIoIp9EAXhk6Sge-KDZivGcH5gaUvaaO6xDqH_DvVrzl6JhvqdzBo3Cft2rGSVsEoNNJkrS8deKPl-f-2lT5b2Pj51ViMVBU4G5wEp1mVK0EaZZO9cbr6TK-kqZY27UFGnmFNq";
const PIC2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAFHZGfiCfbzvvw5TRowPp4YA1tXx10BHUHvt9C4AZi_ekvNhH7NZBSLeVwIzzYw2AKDqI_5NPGJ096tBQGGLGTVmoVTGWg1jNWQrXyFKxC90QgMCVlV5WloXmZCqcAyjYwTZRy0MoIoiT8jQdarktZemlAvbJBoXZxFYaxgnBCw_Fe0OqySkLg9JKSVmYf_qzo266RbF8XST4tyF3ldfYr3PGRTTnpEMEfuLI_acyhK-fkSJ90_xl5_Up4YvY4rAybt4i99FwJwfTH";
const PIC3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuCFruOW0Usd6l6ladILNscHU4DkxLHMAcJRnchMrlWbX-qS_m1HdO0a1lWcGm3x3R8J_9cNShKSTyzc4FabZzBbi_fYbMRhCIUNY5nZt3Lv4KswnHv6_uSpJ_AYVatTdGMqO6T8GIhhSJxccvYhFfUFCmCklV0eKFjk-tjsfhg7DCSHMxPNjzEG90dlVEdK3qczKwbWkclkX7SFIjmPDhx7bSXaL50VvpZALOaFm7mdkFciC9TvZ0-oAec1Z1TcYVhgd6D1tnRM2B7q";

interface Plan {
  badge: string;
  badgeStyle: string;
  name: string;
  meta: string;
  pics: string[];
  status: "confirmed" | "pending" | "none";
  type: "plan" | "planGanador" | "winner";
  creator?: boolean;
}

const planes: Plan[] = [
  {
    badge: "El finde",
    badgeStyle: "bg-secondary-fixed text-on-secondary-fixed-variant",
    name: "Asado en lo de Juan",
    meta: "21:30 hs · Palermo, CABA",
    pics: [PIC1, PIC2],
    status: "confirmed",
    type: "plan",
    creator: true,
  },
  {
    badge: "Jueves",
    badgeStyle: "bg-primary-fixed text-on-primary-fixed-variant",
    name: "Bowling",
    meta: "20:00 hs · Boomerang, Flores",
    pics: [PIC2, PIC3],
    status: "pending",
    type: "planGanador",
  },
  {
    badge: "Lunes",
    badgeStyle: "bg-tertiary-fixed text-on-tertiary-fixed",
    name: "Cena grupal",
    meta: "19:00 hs · Por decidir",
    pics: [PIC1],
    status: "pending",
    type: "planGanador",
  },
  {
    badge: "Tarde",
    badgeStyle: "bg-secondary-fixed text-on-secondary-fixed-variant",
    name: "Merienda en La Esquina",
    meta: "18:00 hs · La Esquina Café",
    pics: [PIC3, PIC1],
    status: "confirmed",
    type: "winner",
  },
  {
    badge: "Jueves",
    badgeStyle: "bg-primary-fixed text-on-primary-fixed-variant",
    name: "Pádel",
    meta: "20:30 hs · 5 compañeros",
    pics: [PIC2],
    status: "confirmed",
    type: "plan",
  },
  {
    badge: "Lunes",
    badgeStyle: "bg-secondary-fixed text-on-secondary-fixed-variant",
    name: "Fútbol 5 Mixto",
    meta: "19:00 hs · Complejo El Sol",
    pics: [PIC1, PIC3],
    status: "none",
    type: "plan",
  },
];

export default function TusPlanes() {
  const navigate = useNavigate();

  function handlePlanTap(plan: Plan) {
    if (plan.type === "winner") {
      navigate("/plan-winner");
    } else if (plan.type === "planGanador") {
      navigate("/plan-ganador?mode=vote");
    } else {
      navigate(plan.creator ? "/plan?creator=1" : plan.status === "confirmed" ? "/plan?confirmed=1" : "/plan");
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <AppHeader rightSlot={<Avatar src={AVATAR} alt="Mi perfil" />} />

      <main className="pt-[80px] pb-[120px] px-6 max-w-[640px] mx-auto">
        <section className="mt-5 mb-6">
          <h1 className="text-[32px] font-extrabold text-primary leading-tight tracking-tight">
            Tus Planes
          </h1>
          <p className="text-[14px] text-on-surface-variant mt-1">
            Reúne a tu gente y organiza algo increíble hoy mismo.
          </p>
        </section>

        <div className="flex flex-col gap-3">
          {planes.map((plan, i) => (
            <div
              key={i}
              onClick={() => handlePlanTap(plan)}
              className="bg-white rounded-2xl px-4 py-3.5 border border-outline/10 hover:bg-surface-container-low transition-colors cursor-pointer"
            >
              {/* Date badge + type badge */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wide ${plan.badgeStyle}`}>
                  {plan.badge}
                </span>
                {plan.type === "planGanador" && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary text-on-primary text-[10px] font-bold uppercase tracking-wide">
                    <span className="material-symbols-outlined text-[11px]">how_to_vote</span>
                    Votación activa
                  </span>
                )}
                {plan.type === "winner" && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold uppercase tracking-wide">
                    <span className="material-symbols-outlined text-[11px]" style={{ fontVariationSettings: "'FILL' 1" }}>emoji_events</span>
                    Plan Ganador
                  </span>
                )}
              </div>

              <h3 className="text-[16px] font-bold text-on-surface mb-0.5">{plan.name}</h3>
              <p className="text-[13px] text-on-surface-variant mb-3">{plan.meta}</p>

              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {plan.pics.map((src, j) => (
                    <img
                      key={j}
                      src={src}
                      alt="Amigo"
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                {plan.status === "confirmed" && plan.type === "plan" && (
                  <div className="flex items-center gap-1.5 text-secondary">
                    <span
                      className="material-symbols-outlined text-[16px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="text-[13px] font-bold">Confirmado</span>
                  </div>
                )}
                {(plan.status === "pending" || plan.status === "none") && plan.type === "plan" && (
                  <span className="text-[12px] font-semibold text-secondary">
                    Confirmar →
                  </span>
                )}
                {plan.type === "planGanador" && (
                  <span className="text-[12px] font-semibold text-secondary">
                    Votar →
                  </span>
                )}
                {plan.type === "winner" && (
                  <span className="text-[12px] font-semibold text-primary">
                    Ver ganador →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>


      </main>

      <BottomNav />
    </div>
  );
}
