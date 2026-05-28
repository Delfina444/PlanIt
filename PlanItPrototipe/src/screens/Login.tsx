import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    navigate("/home");
  }

  return (
    <div className="font-sans text-on-surface antialiased min-h-screen flex flex-col items-center justify-center bg-background px-8 py-10">
      <main className="w-full max-w-[480px] flex flex-col items-center gap-10">
        {/* Hero */}
        <div className="flex flex-col items-center text-center gap-4">

          <div>
            <h1 className="text-[52px] font-extrabold tracking-tight text-primary leading-none">
              Planit
            </h1>
            <p className="text-[18px] text-on-surface-variant mt-2 max-w-xs leading-snug">
              Menos vueltas, más juntadas.
            </p>
          </div>
        </div>

        {/* Auth card */}
        <div className="w-full bg-surface-container-lowest p-8 rounded-2xl soft-glow-olive border border-surface-container-highest">
          <div className="mb-8">
            <h2 className="text-[26px] font-bold text-on-surface">Bienvenido</h2>
            <p className="text-body-md text-on-surface-variant mt-1">
              Ingresa tus credenciales para continuar
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-label-lg text-on-surface-variant ml-1" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                  mail
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-12 pr-4 text-body-md text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-label-lg text-on-surface-variant" htmlFor="password">
                  Contraseña
                </label>
                <a href="#" className="text-body-md text-primary hover:underline font-semibold">
                  ¿La olvidaste?
                </a>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                  lock
                </span>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-12 pr-12 text-body-md text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant"
                >
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 pt-2">
              <button
                type="submit"
                className="w-full bg-primary text-on-primary font-bold text-[16px] py-4 rounded-xl shadow-sm hover:shadow-md hover:bg-primary-container transition-all duration-300 active:scale-[0.98]"
              >
                Entrar
              </button>

            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-body-md text-on-surface-variant">
              ¿No tenés una cuenta?{" "}
              <button
                onClick={() => navigate("/home")}
                className="font-bold text-primary hover:underline decoration-2 underline-offset-4"
              >
                Registrarse
              </button>
            </p>
          </div>
        </div>

        {/* Decorative icons */}
        <div className="flex gap-8 text-outline-variant">
          <span className="material-symbols-outlined text-[28px]">celebration</span>
          <span className="material-symbols-outlined text-[28px]">restaurant</span>
          <span className="material-symbols-outlined text-[28px]">sports_tennis</span>
        </div>
      </main>

      <footer className="mt-10 text-center">
        <p className="text-body-md text-outline text-[13px]">
          © 2026 Planit. Menos vueltas, más juntadas.
        </p>
      </footer>
    </div>
  );
}
