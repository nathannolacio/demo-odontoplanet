import { Botao } from "@/components/ui/Botao";
import { Icone } from "@/components/ui/Icone";
import { Foto } from "@/components/ui/Foto";
import { Detalhe, Forma } from "@/components/ui/Ornamentos";
import { Secao } from "@/components/ui/Secao";
import { ANCORAS } from "@/content/conteudo";
import { linkWhatsapp } from "@/lib/links";
import type { SecaoProps } from "../tipos";

/**
 * Cards com ícone, nome e descrição (e foto no topo, quando o serviço tem uma). O primeiro card ocupa
 * duas colunas para quebrar a monotonia; com 4 serviços a grade vira 2x2.
 */
export function ServicosGrade({ c, tom }: SecaoProps) {
  const { servicos, contato } = c;
  const n = servicos.itens.length;
  const quatro = n === 4;
  return (
    <Secao id={ANCORAS.servicos} tom={tom}>
      {/* fundo em camadas: luzes suaves, anéis, forma da marca e detalhes soltos (os cards cobrem o miolo) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 size-[22rem] rounded-full bg-[color-mix(in_oklab,var(--cor-destaque)_16%,transparent)] blur-3xl" />
        <div className="absolute -right-28 bottom-10 size-[26rem] rounded-full bg-[color-mix(in_oklab,var(--acento)_8%,transparent)] blur-3xl" />
        <div className="absolute -top-40 -right-32 size-[24rem] rounded-full border-2 border-[color-mix(in_oklab,var(--acento)_10%,transparent)] md:size-[32rem]" />
        <div className="absolute -top-20 -right-12 size-[14rem] rounded-full border border-[color-mix(in_oklab,var(--acento)_8%,transparent)] md:size-[20rem]" />
        <div className="absolute -bottom-40 -left-32 size-[22rem] rounded-full border-2 border-[color-mix(in_oklab,var(--acento)_8%,transparent)] md:size-[30rem]" />
        <Forma estilo={c.identidade.estilo} className="absolute -right-24 -bottom-20 w-72 opacity-[0.06] md:w-96" />
        <Detalhe estilo={c.identidade.estilo} className="absolute top-8 right-[6%] size-12 rotate-12 opacity-25 md:top-14 md:size-16" />
        <Detalhe estilo={c.identidade.estilo} className="absolute top-[34%] left-[2%] hidden size-14 -rotate-12 opacity-15 md:block" />
        <Detalhe estilo={c.identidade.estilo} className="absolute bottom-6 left-[6%] size-14 rotate-[18deg] opacity-20 md:size-20" />
        <Detalhe estilo={c.identidade.estilo} className="absolute right-[38%] bottom-8 hidden size-12 -rotate-6 opacity-15 lg:block" />
      </div>
      <div className="container-site relative">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="titulo t-2 max-w-[16ch]">{servicos.titulo}</h2>
          <p className="medida max-w-[44ch] text-texto-suave">{servicos.intro}</p>
        </div>

        <ul className={`mt-14 grid gap-4 sm:grid-cols-2 ${quatro ? "" : "lg:grid-cols-3"}`}>
          {servicos.itens.map((s, i) => (
            <li
              key={s.nome}
              className={`relative flex flex-col overflow-hidden rounded-grande bg-cartao p-7 md:p-8 ${
                i === 0 && n % 3 !== 0 && !quatro ? "lg:col-span-2" : ""
              } ${i === 0 ? "bg-acento! text-sobre-acento" : ""}`}
            >
              {i === 0 && (
                <Forma estilo={c.identidade.estilo} cor="var(--sobre-acento)" className="absolute -right-12 -bottom-14 w-56 opacity-15" />
              )}
              {s.foto && (
                <div className="relative -mx-7 -mt-7 aspect-[16/10] md:-mx-8 md:-mt-8">
                  <Foto foto={s.foto} sizes="(min-width: 1024px) 34rem, (min-width: 640px) 50vw, 100vw" />
                </div>
              )}
              <span
                className={`relative grid size-14 place-items-center rounded-base ${
                  s.foto ? "-mt-12 ring-4 " + (i === 0 ? "ring-acento" : "ring-cartao") : ""
                } ${i === 0 ? "bg-[color-mix(in_oklab,var(--sobre-acento)_14%,var(--acento))]" : "bg-fundo text-acento"}`}
              >
                <Icone nome={s.icone} className="size-7" />
              </span>
              <h3 className={`titulo t-3 relative ${s.foto ? "mt-5" : "mt-8"}`}>{s.nome}</h3>
              <p className={`relative mt-2.5 ${i === 0 ? "opacity-85" : "text-texto-suave"}`}>{s.descricao}</p>
              {s.preco && <p className="mt-auto pt-6 font-semibold">{s.preco}</p>}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center md:justify-start">
          <Botao href={linkWhatsapp(contato.whatsapp, contato.mensagemWhatsapp)} whatsapp estilo="secundario">
            Pedir orçamento no WhatsApp
          </Botao>
        </div>
      </div>
    </Secao>
  );
}
