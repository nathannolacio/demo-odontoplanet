import { Botao } from "@/components/ui/Botao";
import { Detalhe } from "@/components/ui/Ornamentos";
import { Secao } from "@/components/ui/Secao";
import { ANCORAS } from "@/content/conteudo";
import { linkWhatsapp } from "@/lib/links";
import type { SecaoProps } from "../tipos";

/**
 * Faixa de ponta a ponta com título grande e o botão do WhatsApp. Direta e objetiva.
 */
export function CtaFaixa({ c, tom }: SecaoProps) {
  const { cta, contato, identidade } = c;
  return (
    <Secao id={ANCORAS.cta} tom={tom} espaco={false} className="py-16 md:py-24">
      {/* fundo em camadas: anéis, luz suave e detalhes da marca, sempre atrás do texto */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-28 size-[26rem] rounded-full border-2 border-[color-mix(in_oklab,var(--cor-marca-contraste)_10%,transparent)] md:size-[34rem]" />
        <div className="absolute -top-14 -right-10 size-[15rem] rounded-full border border-[color-mix(in_oklab,var(--cor-marca-contraste)_8%,transparent)] md:size-[22rem]" />
        <div className="absolute -bottom-40 left-[28%] size-[22rem] rounded-full bg-[color-mix(in_oklab,var(--cor-destaque)_13%,transparent)] blur-3xl" />
        <div className="absolute -bottom-24 -left-20 size-[16rem] rounded-full bg-[color-mix(in_oklab,var(--cor-marca-contraste)_6%,transparent)] blur-2xl" />
        <Detalhe estilo={identidade.estilo} variante={4} cor="var(--cor-destaque)" className="absolute top-6 right-[6%] size-14 rotate-12 opacity-50 md:size-20" />
        <Detalhe estilo={identidade.estilo} variante={7} cor="var(--cor-marca-contraste)" className="absolute right-[34%] bottom-5 hidden size-12 -rotate-12 opacity-35 md:block" />
      </div>
      <div className="container-site relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="titulo t-1 max-w-[18ch]">{cta.titulo}</h2>
          <p className="t-lead mt-5 text-texto-suave">{cta.texto}</p>
        </div>
        <Botao href={linkWhatsapp(contato.whatsapp, contato.mensagemWhatsapp)} whatsapp grande className="shrink-0">
          {cta.botao}
        </Botao>
      </div>
    </Secao>
  );
}
