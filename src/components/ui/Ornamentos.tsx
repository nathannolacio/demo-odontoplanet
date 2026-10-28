import { useId } from "react";
import type { EstiloGrafico } from "@/content/tipos";
import { Icone } from "./Icone";

/*
 * Elementos gráficos soltos da marca. Todos mudam de desenho conforme o estilo
 * (identidade.estilo no cliente.json):
 *   organico   → formas arredondadas, folhas, traço solto
 *   geometrico → círculos, meias-luas, quadrados sólidos
 *   linear     → traço fino, arcos e brilhos delicados
 *   artesanal  → carimbo, traço tremido, asteriscos desenhados à mão
 *   moderno    → grade técnica, sinais de mais, cantos retos
 *   odonto     → dentes, escova, pasta, aparelho, espelho e sonda (e, para marcas com tema espacial, foguete e planeta)
 */

type Base = { estilo: EstiloGrafico; className?: string; cor?: string };

/** Contorno de um molar, no quadro 64x64 (usado pelo estilo odonto). */
const DENTE = "M32 14c-3-3-7-5-12-4-7 1-11 7-10 15 1 7 4 11 5 18 1 8 2 15 6 15 5 0 4-14 11-14s6 14 11 14c4 0 5-7 6-15 1-7 4-11 5-18 1-8-3-14-10-15-5-1-9 1-12 4Z";

const DESTAQUE = "var(--cor-destaque)";
const TINTA = "var(--cor-tinta)";

/** Forma grande de fundo, atrás de fotos e cartões. */
export function Forma({ estilo, className = "", cor = "var(--acento)" }: Base) {
  const comum = { viewBox: "0 0 240 240", "aria-hidden": true, className: `pointer-events-none ${className}`, style: { color: cor } } as const;
  switch (estilo) {
    case "organico":
      return (
        <svg {...comum}>
          <path
            fill="currentColor"
            d="M168 34c34 20 54 60 46 100-8 42-44 84-90 90-48 6-94-24-106-66C6 116 30 66 66 42c30-20 70-26 102-8Z"
          />
          <path fill={DESTAQUE} d="M206 168c12 10 14 30 2 42s-32 12-42 0-8-30 4-40 26-12 36-2Z" />
          <path d="M18 214c40-30 70-34 112-22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".55" />
        </svg>
      );
    case "geometrico":
      return (
        <svg {...comum}>
          <circle cx="98" cy="142" r="82" fill="currentColor" />
          <path d="M124 92a58 58 0 0 1 116 0Z" fill={DESTAQUE} />
          <rect x="30" y="18" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="7" transform="rotate(12 50 38)" />
          <circle cx="212" cy="204" r="12" fill={TINTA} />
        </svg>
      );
    case "linear":
      return (
        <svg {...comum} fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M34 238V122a86 86 0 0 1 172 0v116" />
          <path d="M56 238V124a64 64 0 0 1 128 0v114" />
          <path d="M78 238V126a42 42 0 0 1 84 0v112" />
          <path d="M214 18c1.6 9.4 4.6 12.4 14 14-9.4 1.6-12.4 4.6-14 14-1.6-9.4-4.6-12.4-14-14 9.4-1.6 12.4-4.6 14-14Z" fill={DESTAQUE} stroke="none" />
          <circle cx="20" cy="40" r="3.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "artesanal":
      return (
        <svg {...comum}>
          <path
            fill="currentColor"
            d="M121 26c48-2 88 32 92 80 4 50-30 94-82 100-52 6-100-30-104-80-4-50 40-98 94-100Z"
          />
          <circle cx="120" cy="120" r="112" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="1 9" strokeLinecap="round" />
          <g stroke={DESTAQUE} strokeWidth="6" strokeLinecap="round" transform="translate(206 38)">
            <path d="M0-16v32M-14-8l28 16M-14 9l27-17" />
          </g>
        </svg>
      );
    case "moderno":
      return (
        <svg {...comum}>
          <g stroke="currentColor" strokeWidth="1" opacity=".35">
            {[40, 80, 120, 160, 200].map((v) => (
              <g key={v}>
                <line x1={v} y1="0" x2={v} y2="240" />
                <line x1="0" y1={v} x2="240" y2={v} />
              </g>
            ))}
          </g>
          <path d="M240 240V112A128 128 0 0 0 112 240Z" fill="currentColor" />
          <rect x="40" y="40" width="40" height="40" fill={DESTAQUE} />
          <g stroke={TINTA} strokeWidth="3">
            <path d="M160 34v12M154 40h12M200 74v12M194 80h12" />
          </g>
        </svg>
      );
    case "odonto":
      return (
        <svg {...comum}>
          <path d={DENTE} fill="currentColor" transform="translate(-6 6) scale(3.9)" />
          <path d="M62 82c0-18 12-32 30-34" fill="none" stroke="var(--cor-fundo)" strokeWidth="9" strokeLinecap="round" opacity=".55" />
          <circle cx="206" cy="44" r="15" fill={DESTAQUE} />
          <circle cx="226" cy="80" r="7" fill={DESTAQUE} />
          <circle cx="24" cy="208" r="9" fill={DESTAQUE} />
          <path d="M34 22c1.8 10 5 13.4 15 15-10 1.6-13.2 5-15 15-1.8-10-5-13.4-15-15 10-1.6 13.2-5 15-15Z" fill={TINTA} />
        </svg>
      );
  }
}

/** Detalhe pequeno: acompanha títulos, cartões e cantos. */
export function Detalhe({ estilo, className = "", cor = "var(--acento)", variante = 0 }: Base & { variante?: number }) {
  const comum = { viewBox: "0 0 64 64", "aria-hidden": true, className: `pointer-events-none ${className}`, style: { color: cor } } as const;
  switch (estilo) {
    case "organico":
      return (
        <svg {...comum}>
          <path d="M12 56C24 42 34 26 52 8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M22 44c-9-1-13-8-11-15 8 1 12 7 11 15Z" fill="currentColor" />
          <path d="M26 39c2-9 9-12 16-9-2 8-8 11-16 9Z" fill={DESTAQUE} />
          <path d="M33 29c-8-3-10-11-6-17 7 3 9 10 6 17Z" fill="currentColor" />
          <path d="M39 22c3-8 11-10 17-6-3 7-10 9-17 6Z" fill="currentColor" />
        </svg>
      );
    case "geometrico":
      return (
        <svg {...comum}>
          <circle cx="16" cy="46" r="11" fill={DESTAQUE} />
          <path d="M30 57h24L42 36Z" fill="currentColor" />
          <rect x="34" y="6" width="18" height="18" fill="currentColor" transform="rotate(15 43 15)" />
        </svg>
      );
    case "linear":
      return (
        <svg {...comum} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
          <path d="M28 6c2.4 14 7 18.6 21 21-14 2.4-18.6 7-21 21-2.4-14-7-18.6-21-21 14-2.4 18.6-7 21-21Z" />
          <path d="M51 40c1 5.6 2.8 7.4 8.4 8.4-5.6 1-7.4 2.8-8.4 8.4-1-5.6-2.8-7.4-8.4-8.4 5.6-1 7.4-2.8 8.4-8.4Z" fill={DESTAQUE} stroke="none" />
        </svg>
      );
    case "artesanal":
      return (
        <svg {...comum} fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round">
          <path d="M31 8c1 16 0 30 2 48" />
          <path d="M10 20c14 6 30 16 44 22" />
          <path d="M12 44c13-9 27-16 42-25" />
          <path d="M44 56c3-2 7-2 9 1" stroke={DESTAQUE} strokeWidth="3.5" />
        </svg>
      );
    case "moderno":
      return (
        <svg {...comum} fill="none" stroke="currentColor" strokeWidth="3.5">
          <path d="M8 8h18v18" />
          <path d="M26 8 8 26" />
          <path d="M44 34v20M34 44h20" stroke={DESTAQUE} />
        </svg>
      );
    case "odonto":
      return <DetalheOdonto variante={variante} {...comum} />;
  }
}

type SvgComum = { viewBox: string; "aria-hidden": true; className: string; style: { color: string } };

/** Desenhos do consultório. `variante` escolhe qual aparece, para não repetir o mesmo dente em toda parte. */
function DetalheOdonto({ variante, ...comum }: SvgComum & { variante: number }) {
  const v = ((variante % 8) + 8) % 8;
  switch (v) {
    case 1: // escova
      return (
        <svg {...comum}>
          <g transform="rotate(-40 32 32)">
            <rect x="2" y="28" width="38" height="8" rx="4" fill="currentColor" />
            <rect x="40" y="26" width="20" height="12" rx="3" fill="currentColor" />
            {[43, 47.5, 52, 56.5].map((x) => (
              <rect key={x} x={x} y="17" width="3" height="10" rx="1.5" fill={DESTAQUE} />
            ))}
          </g>
        </svg>
      );
    case 2: // pasta de dente
      return (
        <svg {...comum}>
          <g transform="rotate(35 32 32)">
            <rect x="6" y="24" width="6" height="16" rx="1.5" fill="currentColor" />
            <rect x="12" y="21" width="36" height="22" rx="5" fill="currentColor" />
            <rect x="21" y="21" width="7" height="22" fill={DESTAQUE} />
            <rect x="48" y="26" width="6" height="12" fill="currentColor" />
            <rect x="54" y="27" width="6" height="10" rx="2.5" fill={DESTAQUE} />
          </g>
        </svg>
      );
    case 3: // aparelho
      return (
        <svg {...comum}>
          {[3, 22, 41].map((x) => (
            <rect key={x} x={x} y="18" width="19" height="30" rx="8" fill="currentColor" />
          ))}
          <path d="M0 33h64" stroke={TINTA} strokeWidth="3" />
          {[7.5, 26.5, 45.5].map((x) => (
            <rect key={x} x={x} y="27" width="10" height="12" rx="2.5" fill={DESTAQUE} stroke={TINTA} strokeWidth="1.6" />
          ))}
        </svg>
      );
    case 4: // dente feliz
      return (
        <svg {...comum}>
          <path d={DENTE} fill="currentColor" />
          <circle cx="24" cy="29" r="2.6" fill={TINTA} />
          <circle cx="40" cy="29" r="2.6" fill={TINTA} />
          <path d="M25 37c4 5 10 5 14 0" fill="none" stroke={TINTA} strokeWidth="2.6" strokeLinecap="round" />
          <circle cx="20" cy="35" r="2.6" fill={DESTAQUE} />
          <circle cx="44" cy="35" r="2.6" fill={DESTAQUE} />
        </svg>
      );
    case 5: // espelho e sonda
      return (
        <svg {...comum}>
          <path d="M30 30 56 56" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
          <circle cx="22" cy="22" r="14" fill="currentColor" />
          <circle cx="22" cy="22" r="8" fill={DESTAQUE} />
          <path d="M8 56 38 26" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" fill="none" />
          <path d="M38 26c4-4 10-4 14-1" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 6: // foguete (vem da logo)
      return (
        <svg {...comum}>
          <g transform="rotate(40 32 32)">
            <path d="M22 32 12 46h10ZM42 32l10 14H42Z" fill="currentColor" />
            <path d="M32 4c8 8 11 19 10 34H22C21 23 24 12 32 4Z" fill="currentColor" />
            <circle cx="32" cy="22" r="5" fill={DESTAQUE} />
            <path d="M26 42q6 16 12 0Z" fill={DESTAQUE} />
          </g>
        </svg>
      );
    case 7: // planeta com anel
      return (
        <svg {...comum}>
          <g transform="rotate(-20 32 32)">
            <path d="M4 32a28 8 0 0 1 56 0" fill="none" stroke={DESTAQUE} strokeWidth="4" />
            <circle cx="32" cy="32" r="14" fill="currentColor" />
            <path d="M4 32a28 8 0 0 0 56 0" fill="none" stroke={DESTAQUE} strokeWidth="4" />
          </g>
        </svg>
      );
    default: // dente com brilho
      return (
        <svg {...comum}>
          <path d={DENTE} fill="currentColor" />
          <path d="M18 24c0-4 3-7 7-7" fill="none" stroke="var(--cor-fundo)" strokeWidth="3.2" strokeLinecap="round" opacity=".6" />
          <path d="M50 4c.8 4.4 2.2 5.8 6.6 6.6-4.4.8-5.8 2.2-6.6 6.6-.8-4.4-2.2-5.8-6.6-6.6 4.4-.8 5.8-2.2 6.6-6.6Z" fill={DESTAQUE} />
        </svg>
      );
  }
}

/* Aparência do selo circular por estilo: fundo, cor do texto, aro e miolo */
const SELO: Record<EstiloGrafico, { fundo: string; texto: string; aro?: { cor: string; traco?: string }; miolo: string; corIcone: string; caixa: boolean }> = {
  organico: { fundo: DESTAQUE, texto: "var(--cor-sobre-destaque)", miolo: "var(--cor-marca)", corIcone: "var(--cor-marca-contraste)", caixa: false },
  geometrico: { fundo: "var(--cor-marca)", texto: "var(--cor-marca-contraste)", miolo: DESTAQUE, corIcone: "var(--cor-sobre-destaque)", caixa: true },
  linear: { fundo: "var(--cor-fundo)", texto: TINTA, aro: { cor: TINTA }, miolo: "var(--cor-fundo)", corIcone: "var(--cor-marca)", caixa: false },
  artesanal: { fundo: "var(--cor-fundo)", texto: TINTA, aro: { cor: TINTA, traco: "2 5" }, miolo: DESTAQUE, corIcone: "var(--cor-sobre-destaque)", caixa: true },
  moderno: { fundo: TINTA, texto: "var(--cor-fundo)", miolo: "var(--cor-marca)", corIcone: "var(--cor-marca-contraste)", caixa: true },
  odonto: { fundo: "var(--cor-marca)", texto: "var(--cor-marca-contraste)", miolo: DESTAQUE, corIcone: "var(--cor-sobre-destaque)", caixa: false },
};

/**
 * Selo redondo com uma frase girando em volta do ícone do negócio.
 * Fica por cima de fotos e cantos de seção. Para de girar para quem prefere menos movimento.
 */
export function SeloCircular({ estilo, texto, icone, className = "" }: { estilo: EstiloGrafico; texto: string; icone: string; className?: string }) {
  const id = `selo${useId().replace(/:/g, "")}`;
  if (!texto) return null;
  const s = SELO[estilo];
  const r = 70;
  const volta = 2 * Math.PI * r;
  const frase = s.caixa ? texto.toUpperCase() : texto;
  const repeticoes = Math.max(1, Math.round(volta / (frase.length * (s.caixa ? 9.6 : 8.6))));
  const linha = Array.from({ length: repeticoes }, () => frase).join(" ");
  return (
    <div className={className} role="img" aria-label={texto.replace(/✦/g, ",")}>
      <div className="relative aspect-square w-full">
      <svg viewBox="0 0 200 200" className="absolute inset-0 size-full overflow-visible" aria-hidden>
        <defs>
          <path id={id} d={`M100,100 m-${r},0 a${r},${r} 0 1,1 ${r * 2},0 a${r},${r} 0 1,1 -${r * 2},0`} />
        </defs>
        <circle cx="100" cy="100" r="98" fill={s.fundo} />
        {s.aro && <circle cx="100" cy="100" r="93" fill="none" stroke={s.aro.cor} strokeWidth="1.2" strokeDasharray={s.aro.traco} />}
        {s.aro && <circle cx="100" cy="100" r="49" fill="none" stroke={s.aro.cor} strokeWidth="1.2" strokeDasharray={s.aro.traco} />}
        <g className="girar" style={{ transformOrigin: "100px 100px" }}>
          <text
            fill={s.texto}
            fontSize={s.caixa ? 13.5 : 15}
            fontWeight={600}
            letterSpacing={s.caixa ? 2 : 0.5}
            style={{ fontFamily: "var(--fonte-texto)" }}
          >
            <textPath href={`#${id}`} textLength={volta - 6} lengthAdjust="spacing">
              {linha}
            </textPath>
          </text>
        </g>
        <circle cx="100" cy="100" r="42" fill={s.miolo} />
      </svg>
      <span className="absolute inset-0 grid place-items-center" style={{ color: s.corIcone }}>
        <Icone nome={icone} className="size-[24%]" strokeWidth={1.8} />
      </span>
      </div>
    </div>
  );
}

const CHIP: Record<EstiloGrafico, string> = {
  organico: "rounded-full bg-[var(--cor-fundo)] text-[var(--cor-tinta)] shadow-[0_14px_30px_-12px_rgb(0_0_0/0.35)] px-4 py-2.5",
  geometrico: "rounded-none bg-[var(--cor-destaque)] text-[var(--cor-sobre-destaque)] shadow-[5px_5px_0_var(--cor-tinta)] px-4 py-3",
  linear: "rounded-[var(--raio)] border border-[color-mix(in_oklab,var(--cor-tinta)_25%,transparent)] bg-[color-mix(in_oklab,var(--cor-fundo)_86%,transparent)] text-[var(--cor-tinta)] backdrop-blur-md px-4 py-2.5",
  artesanal: "rounded-[6px] border-[1.5px] border-dashed border-[var(--cor-tinta)] bg-[var(--cor-fundo)] text-[var(--cor-tinta)] -rotate-2 px-4 py-2.5",
  moderno: "rounded-[2px] bg-[var(--cor-tinta)] text-[var(--cor-fundo)] px-4 py-3",
  odonto: "rounded-full bg-[var(--cor-fundo)] text-[var(--cor-tinta)] border-2 border-[var(--cor-destaque)] shadow-[0_14px_30px_-12px_rgb(0_0_0/0.35)] px-4 py-2.5",
};

/** Etiqueta solta que fica por cima de fotos (nota no Google, horário do forno, especialidade). */
export function Chip({ estilo, icone, titulo, texto, className = "" }: { estilo: EstiloGrafico; icone?: string; titulo: string; texto?: string; className?: string }) {
  return (
    <div className={`inline-flex max-w-[16rem] items-center gap-3 text-left ${CHIP[estilo]} ${className}`}>
      {icone && (
        <span
          className={`grid size-9 shrink-0 place-items-center ${estilo === "geometrico" || estilo === "moderno" ? "rounded-none" : "rounded-full"}`}
          style={{
            background: estilo === "geometrico" ? "var(--cor-tinta)" : estilo === "moderno" ? "var(--cor-destaque)" : "var(--cor-marca)",
            color: estilo === "geometrico" ? "var(--cor-fundo)" : estilo === "moderno" ? "var(--cor-sobre-destaque)" : "var(--cor-marca-contraste)",
          }}
        >
          <Icone nome={icone} className="size-[18px]" strokeWidth={2} />
        </span>
      )}
      <span className="min-w-0 leading-tight">
        <span className="block text-[0.95rem] font-semibold">{titulo}</span>
        {texto && <span className="mt-0.5 block text-[0.8rem] opacity-75">{texto}</span>}
      </span>
    </div>
  );
}
