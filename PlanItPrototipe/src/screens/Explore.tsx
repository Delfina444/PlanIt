import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppHeader, { Avatar } from "../components/AppHeader";
import BottomNav from "../components/BottomNav";

const AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuDJR0yQ1FsrWB_92fECSbSSgZQp_RY4Cl5h8SvsCJ9pOyW8gd3__PnBtB28cYIBQfO-vpODx9IchgqyUrUT7vF8HPGjgJuoOSFksvXnvLBvAO4mb81jmidczviUL3uC8-nfM0JWTfgBR2rJL-Qls2BI8vE9WU-iq5MvHjnMJUBMBlkSHKkJ527z6Vls8Lq5jlG-uXxO2w4DUxbAGL-VGnUodtFPF7h9DSgC7jDzI0Zw3c4KoOlCCkTvy5PpAMd3f5FnYlUQAKDAKcMD";

const categories = ["Todos", "Próximos", "Gratis", "Destacados"];

const plans = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEgcmJFIQW5JOHD3iWwsnUEPKypN_y9d6q_P3sxmNdCOSB-ecXMK9a6yBmzPl6fc9IDQcB2piMpys8ScA2QsELc8CO_lv8faKOpLKIvJpaxLX43dA4CPyVK_qTkOKijXX-Hcisqgc-vDJ8B4SSOGS-_hTrDfdG1rK2yKL5Nuacr-CM2gPZV8JE70B3KBbZIkClgX8VlRceG4IaXbKfnEcq7RMkNgyTIjlyfH2W5iG90O-0HtJ9j4GeVhzPNEvSnZq4fSQ4fESXVc0Z",
    rating: "4.9",
    name: "Cata de Vinos Orgánicos",
    price: "$45",
    date: "Sábado, 14 Oct • 19:00",
    place: "Viñedo El Olivar, Mendoza",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV-lI5zmNqIeavj1ayFw5CpkbHrFyS3VlsPU-veSxwpw001AB70wKzEAvrX0XHg4EROMBDUWKnjseWBYX0jmYl7qi1UwNcFKd0Qp4vnlod6cCh2iVCthLIWEdl1H65dO13P7Gu0O49L9dsLxLKBcfd_ILZ6U7RaNND7bs5cwOPhQgN9JCZ4BdFLYCusP-ljzfiXI6liUC6hGn8MCJ8-a5u1Wx_efjtjl9kRvccUBv8_40CtKia6IRpWVnqnlx8t7PFPdc5zOEpjsUu",
    rating: "4.7",
    name: "Senderismo & Meditación",
    price: "Gratis",
    date: "Domingo, 15 Oct • 08:30",
    place: "Parque Nacional Sierra",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARtiqOqf4tHmCeJSSsPlq77u7sUDzuuFap-4Cgz_BdfQ4jttoPNtdvUQ-8QWgdOUy3yJvjWS0v7FkblTLVW33__gIShPfVxW5IPtHNgIRMNM4kyqyoNuA3MpI1nuYzDiWt7ftlFHoQzpDWkJDsxqA4zsrhzIirnj1ni4JpTmCji1wQhOpv1N5P-ux2_3Cw2oCsdHYjWAG4-x7dKy32KUCGeylm5Wh-3ALHxtR-lQsgz9RMzy1SRklTnwy234qQd2nE5OP-iQG9gzNn",
    badge: "Pop-up Event",
    name: "Taller de Cerámica",
    price: "$30",
    date: "Jueves, 19 Oct • 17:00",
    place: "Estudio Barro Vivo, Madrid",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvB280K3glQXBCUIfgyeQBaFllB7xUuJl3wKMd76zkQZc8kiTrFzB1hZCVE8FYM3XhGwr5UMLgzxyehSa9p9Ho9VlvIXlU55_q_DtHU43hHoKyX13OshP0t41u7hpGBjxfxKLD94NmD_UNFdvC8v46N5GWUZCuG6flIp27VtDtb9kYg3obeseN7RUCx_TgG7Nj-K60SgVUBPR6L3HluvrHTfSUWKgfB1CwMpavqzA1pQFZCCzlv2Ox1AFPHV5xXA7KhIWFNRW-mKA",
    name: "Cena Clandestina: Chef's Table",
    price: "$85",
    date: "Viernes, 20 Oct • 21:00",
    place: "Ubicación Secreta",
  },
];

const featured = {
  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBflgcEh1N0aFd8Xtn440-DjvhfVkR_dK3RjZx3bLWa5zjoURlt68xXs08ohVAF89oTO1x0EiSoB3tjGpsVRScHEmNVeDtLXvaEZR4du1QtWP2Ko6wfBKsZG3Qpz_7wdX2M7glQqCqKAdNpazBgwi_n1k11MdWwoi12GEpA-4chqS4o0bdjJBJSOtc2afRKYumNlRW67fC1TbCuYxbiPpXMSlbyFWCvRPYnEFXLC--oc7Gw_07nWCQ3IxnJ3KCntYkmFYereYDP_Bvp",
  name: "Festival Jazz en el Parque",
  desc: "Disfrutá de una noche bajo las estrellas con los mejores exponentes del jazz contemporáneo y una oferta gastronómica local increíble.",
  date: "21-23 Octubre",
  place: "Parque Central",
};

export default function Explore() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface">
      <AppHeader rightSlot={<Avatar src={AVATAR} alt="Mi perfil" />} />

      <main className="pt-[80px] pb-[120px] px-6 max-w-[900px] mx-auto">
        {/* Search + categories */}
        <section className="mt-4 mb-6">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[22px]">
              search
            </span>
            <input
              type="text"
              placeholder="¿Qué planes buscás hoy?"
              className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl text-body-md focus:ring-2 focus:ring-primary/20 outline-none placeholder:text-outline-variant transition-all"
            />
          </div>
          <div className="flex gap-3 mt-4 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-[14px] font-bold whitespace-nowrap transition-all active:scale-95 ${
                  activeCategory === cat
                    ? "bg-primary text-on-primary"
                    : "bg-secondary-container/30 hover:bg-secondary-container/50 text-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Plan cards list */}
        <section className="flex flex-col gap-4">
          {plans.map(({ img, rating, badge, name, price, date, place }) => (
            <article
              key={name}
              onClick={() => navigate("/plan")}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline/10 cursor-pointer"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover"
                />
                {rating && (
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <span
                      className="material-symbols-outlined text-[13px] text-secondary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="text-[12px] font-bold text-on-surface">{rating}</span>
                  </div>
                )}
                {badge && (
                  <div className="absolute top-3 left-3 bg-secondary text-on-secondary px-2.5 py-1 rounded-full text-[12px] font-bold">
                    {badge}
                  </div>
                )}
              </div>
              <div className="px-4 py-3">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-[16px] font-bold text-primary leading-tight flex-1 mr-2">{name}</h3>
                  <span className="text-[14px] font-bold text-secondary whitespace-nowrap">{price}</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    <span className="text-[13px]">{date}</span>
                  </div>
                  <span className="text-outline/40">·</span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                    <span className="text-[13px]">{place}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

<BottomNav />
    </div>
  );
}
