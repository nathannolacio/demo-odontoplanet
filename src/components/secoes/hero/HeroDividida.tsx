import { Botao } from "@/components/ui/Botao";
import { Estrelas } from "@/components/ui/Estrelas";
import { Foto } from "@/components/ui/Foto";
import { Chip, Detalhe, Forma, SeloCircular } from "@/components/ui/Ornamentos";
import { Secao } from "@/components/ui/Secao";
import { ANCORAS } from "@/content/conteudo";
import { linkWhatsapp, nota } from "@/lib/links";
import { espacoNavbar, type SecaoProps } from "../tipos";

/**
 * Texto à esquerda; à direita, uma composição com a foto principal recortada,
 * uma segunda foto sobreposta, a forma da marca ao fundo, o selo girando e uma etiqueta.
 */
export function HeroDividida({ c, tom }: SecaoProps) {
  const { negocio, identidade, avaliacoes, contato } = c;
  const segunda = c.galeria.fotos[0];
  return (
    <Secao id={ANCORAS.hero} tom={tom} espaco={false} className={`${espacoNavbar(c)} pb-20 md:pb-28`}>
      {/* fundo com profundidade: luzes suaves, anel e detalhes da marca em camadas */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-8rem] bottom-8 size-[20rem] rounded-full bg-[color-mix(in_oklab,var(--acento)_9%,transparent)] blur-3xl sm:-top-24 sm:bottom-auto sm:-right-32 sm:size-[34rem] sm:bg-[color-mix(in_oklab,var(--acento)_10%,transparent)]" />
        <div className="absolute -bottom-32 -left-24 hidden size-[26rem] rounded-full sm:block bg-[color-mix(in_oklab,var(--cor-destaque)_14%,transparent)] blur-3xl" />
        <div className="absolute top-[22%] -right-40 hidden size-[30rem] rounded-full border-2 sm:block border-[color-mix(in_oklab,var(--acento)_9%,transparent)] lg:-right-24" />
        <div className="absolute top-[30%] -right-24 hidden size-[21rem] rounded-full border sm:block border-[color-mix(in_oklab,var(--acento)_9%,transparent)] lg:-right-8" />
        <Detalhe estilo={identidade.estilo} className="absolute bottom-6 left-[4%] hidden size-20 rotate-[-12deg] opacity-15 sm:block md:size-28" />
        <Detalhe estilo={identidade.estilo} className="absolute top-28 right-[46%] hidden size-14 rotate-12 opacity-20 lg:block" />
      </div>
      <div className="container-site relative grid items-center gap-16 lg:grid-cols-[1.02fr_1fr] lg:gap-14">
        <div className="entrada relative">
          <Detalhe estilo={identidade.estilo} className="mb-6 size-12" />
          <h1 className="titulo t-1">{negocio.frase}</h1>
          <p className="t-lead medida mt-6 text-texto-suave">{negocio.descricao}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:justify-start">
            <Botao href={linkWhatsapp(contato.whatsapp, contato.mensagemWhatsapp)} whatsapp grande>
              Chamar no WhatsApp
            </Botao>
            <Botao href={`#${ANCORAS.servicos}`} estilo="texto">
              Ver o que fazemos
            </Botao>
          </div>
          {avaliacoes.itens.length > 0 && (
            <a
              href={`#${ANCORAS.avaliacoes}`}
              className="mt-12 flex w-fit items-center gap-4 border-t border-linha pt-6 text-[0.95rem] text-texto-suave hover:text-texto"
            >
              <span className="titulo text-4xl text-texto">{nota(avaliacoes.nota)}</span>
              <span className="flex flex-col gap-1">
                <Estrelas nota={avaliacoes.nota} />
                <span>{avaliacoes.total} avaliações no Google</span>
              </span>
            </a>
          )}
        </div>

        <div className="relative mx-auto w-full max-w-[33rem] pb-10 sm:pb-0 lg:mr-0">
          <Forma estilo={identidade.estilo} className="absolute -bottom-6 -left-8 w-[34%] opacity-90 sm:-left-14" />
          {/* luz suave atrás da foto: a pessoa é o destaque, as formas só complementam */}
          <div aria-hidden className="pointer-events-none absolute inset-x-[4%] top-[12%] aspect-square rounded-full bg-[color-mix(in_oklab,var(--cor-superficie)_92%,transparent)] blur-2xl" />
          <div className="relative ml-auto aspect-[4/5] w-[94%]">
            <Foto foto={c.fotos.hero} recorte={identidade.recorte} prioridade sizes="(min-width: 1024px) 28rem, 80vw" />
          </div>
          {segunda && (
            <div className="absolute bottom-0 left-0 aspect-square w-[38%] overflow-hidden rounded-grande border-[6px] border-fundo shadow-marca sm:-bottom-8">
              <Foto foto={segunda} sizes="13rem" />
            </div>
          )}
          <SeloCircular
            estilo={identidade.estilo}
            texto={identidade.seloTexto}
            icone={identidade.icone}
            className="absolute -top-8 left-0 w-20 drop-shadow-xl sm:-top-8 sm:-right-2 sm:left-auto sm:w-28 lg:-right-6 lg:w-32"
          />
          {negocio.selo && (
            <Chip
              estilo={identidade.estilo}
              icone={identidade.icone}
              titulo={negocio.selo}
              className="absolute -bottom-4 left-0 sm:bottom-6 sm:-left-6"
            />
          )}
        </div>
      </div>
    </Secao>
  );
}
