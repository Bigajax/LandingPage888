import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import EcoBubbleOneEye from "../components/EcoBubbleOneEye";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-eco-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(167,132,108,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(107,144,128,0.06),transparent_50%)]" aria-hidden />

      <div className="w-full max-w-md relative z-10 fade-in-up">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center justify-center gap-2.5 mb-8 font-display font-semibold text-2xl text-eco-ink hover:text-eco-clay transition-colors duration-300 focus-eco"
          aria-label="Voltar para a página inicial"
        >
          <EcoBubbleOneEye size={36} />
          <span>ECO</span>
        </Link>

        {/* Login Card */}
        <div className="glass rounded-3xl border border-eco-gold/30 shadow-eco-float p-8 sm:p-10">
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-semibold text-eco-ink mb-2">
              Bem-vindo de volta
            </h1>
            <p className="text-eco-ink-soft text-organic">
              Continue sua jornada de autoconhecimento
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-eco-ink mb-2">
                E-mail
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-eco-ink-subtle" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-eco-gold/30 glass text-eco-ink placeholder:text-eco-ink-subtle focus:outline-none focus:border-eco-clay focus:ring-2 focus:ring-eco-clay/10 transition-all duration-300 ease-calm"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-eco-ink mb-2">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-eco-ink-subtle" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 rounded-2xl border border-eco-gold/30 glass text-eco-ink placeholder:text-eco-ink-subtle focus:outline-none focus:border-eco-clay focus:ring-2 focus:ring-eco-clay/10 transition-all duration-300 ease-calm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-eco-ink-subtle hover:text-eco-clay transition-colors duration-300 focus-eco"
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-eco-gold/30 text-eco-clay focus:ring-2 focus:ring-eco-clay/10 focus:ring-offset-0 transition-all duration-300 cursor-pointer"
                />
                <span className="text-eco-ink-soft group-hover:text-eco-ink transition-colors duration-300">
                  Lembrar de mim
                </span>
              </label>
              <a
                href="#"
                className="text-eco-clay hover:text-eco-clay-light transition-colors duration-300 font-medium focus-eco"
              >
                Esqueceu a senha?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full gradient-eco px-6 py-3.5 rounded-pill text-white font-medium shadow-eco-soft hover-lift transition-all duration-300 ease-calm focus-eco"
            >
              Entrar
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-eco-gold/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-eco-bg text-eco-ink-subtle">ou</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-pill border border-eco-gold/30 glass text-eco-ink font-medium hover:bg-eco-bg-subtle hover-lift transition-all duration-300 ease-calm focus-eco"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continuar com Google
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-sm text-eco-ink-soft">
            Não tem uma conta?{" "}
            <a
              href="#"
              className="text-eco-clay hover:text-eco-clay-light font-medium transition-colors duration-300 focus-eco"
            >
              Criar conta
            </a>
          </p>
        </div>

        {/* Footer Links */}
        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-eco-ink-subtle">
          <a
            href="#"
            className="hover:text-eco-clay transition-colors duration-300 focus-eco"
          >
            Termos
          </a>
          <span>•</span>
          <a
            href="#"
            className="hover:text-eco-clay transition-colors duration-300 focus-eco"
          >
            Privacidade
          </a>
          <span>•</span>
          <a
            href="#"
            className="hover:text-eco-clay transition-colors duration-300 focus-eco"
          >
            Ajuda
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
