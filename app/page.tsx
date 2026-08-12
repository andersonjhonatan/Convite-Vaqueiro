'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CalendarDays,
  ChevronDown,
  Clock3,
  MapPin,
  Music2,
  Sparkles,
  Volume2,
  VolumeX,
} from 'lucide-react';

const party = {
  child: 'Benício',
  age: 5,
  date: '24 de outubro de 2026',
  day: '24',
  month: 'OUTUBRO · 2026',
  time: '16:30',
  place: 'Fazenda Encanto do Sertão',
  city: 'Ibimirim · Pernambuco',
};

function CowboyPortrait({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={compact ? 'portraitSvg compact' : 'portraitSvg'}
      viewBox="0 0 520 620"
      role="img"
      aria-label="Ilustração fictícia de Benício vestido de vaqueiro nordestino"
    >
      <defs>
        <linearGradient id="skin" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#d68b5d" />
          <stop offset="1" stopColor="#a95e3f" />
        </linearGradient>
        <linearGradient id="leather" x1="0" x2="1">
          <stop offset="0" stopColor="#5f301c" />
          <stop offset=".52" stopColor="#9a5b2e" />
          <stop offset="1" stopColor="#4c2417" />
        </linearGradient>
        <linearGradient id="gibao" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#9c6135" />
          <stop offset="1" stopColor="#5e321f" />
        </linearGradient>
        <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#160b05" floodOpacity=".45" />
        </filter>
      </defs>

      <ellipse cx="260" cy="580" rx="165" ry="26" fill="#150d08" opacity=".38" />
      <g filter="url(#softShadow)">
        <path d="M145 505c20-112 48-167 115-167s99 56 116 167v74H145z" fill="url(#gibao)" />
        <path d="M209 347l51 55 53-55-17 117h-75z" fill="#e3b76d" opacity=".75" />
        <path d="M225 356l35 46 36-46 20 34-56 50-55-50z" fill="#7e241d" />
        <path d="M226 378l34 27 35-27-9 74-27 18-27-18z" fill="#c03d2c" />
        <path d="M176 394c-39 21-64 75-75 128l50 18 45-128z" fill="url(#gibao)" />
        <path d="M344 394c38 21 63 75 74 128l-50 18-44-128z" fill="url(#gibao)" />
        <path d="M172 425l-27 110M348 425l27 110" stroke="#d09a56" strokeWidth="9" strokeLinecap="round" opacity=".4" />
        <path d="M193 473h135M188 510h145" stroke="#d8ad66" strokeWidth="7" opacity=".28" />

        <rect x="229" y="307" width="62" height="74" rx="27" fill="url(#skin)" />
        <ellipse cx="260" cy="238" rx="104" ry="124" fill="url(#skin)" />
        <ellipse cx="157" cy="246" rx="20" ry="29" fill="#b96e4b" />
        <ellipse cx="363" cy="246" rx="20" ry="29" fill="#b96e4b" />
        <path d="M168 207c13-88 69-112 95-112 57 0 91 43 91 117-23-27-50-42-83-43-39-1-71 12-103 38z" fill="#2b1710" />
        <path d="M192 209c12-23 38-31 56-20M274 188c24-10 50-1 61 22" stroke="#3a1d13" strokeWidth="9" strokeLinecap="round" />
        <ellipse cx="220" cy="235" rx="10" ry="12" fill="#251711" />
        <ellipse cx="303" cy="235" rx="10" ry="12" fill="#251711" />
        <circle cx="217" cy="231" r="3" fill="#fff" />
        <circle cx="300" cy="231" r="3" fill="#fff" />
        <path d="M259 241l-8 31 18 2" fill="none" stroke="#88462f" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M218 295c23 20 58 22 83-1" fill="none" stroke="#763725" strokeWidth="8" strokeLinecap="round" />
        <path d="M229 296c19 11 44 12 62 0" fill="#fff6df" opacity=".9" />
        <circle cx="193" cy="276" r="15" fill="#d8705c" opacity=".32" />
        <circle cx="327" cy="276" r="15" fill="#d8705c" opacity=".32" />

        <g transform="translate(0 -16)">
          <path d="M137 142c35-25 75-38 123-38 50 0 91 13 126 39-19 29-38 38-52 40-27 5-48-12-74-12-27 0-48 17-75 12-18-3-34-15-48-41z" fill="url(#leather)" />
          <path d="M173 132c11-86 48-120 87-120 44 0 78 37 88 121-54-26-120-26-175-1z" fill="url(#leather)" />
          <path d="M189 111c51-23 97-23 143 0" fill="none" stroke="#d8a55f" strokeWidth="12" opacity=".65" />
          <path d="M216 38l44 30 43-30M260 67v38" fill="none" stroke="#d4a15d" strokeWidth="8" strokeLinecap="round" opacity=".75" />
          <path d="M158 143c25 18 62 25 103 25 44 0 83-8 112-27" fill="none" stroke="#3a1c12" strokeWidth="7" opacity=".45" />
        </g>
      </g>
    </svg>
  );
}

function HorseAndRider({ moving = false }: { moving?: boolean }) {
  return (
    <div className={`horseRider ${moving ? 'moving' : ''}`} aria-label="Benício cavalgando">
      <svg viewBox="0 0 760 450" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="horseCoat" x1="0" x2="1">
            <stop offset="0" stopColor="#6b351f" />
            <stop offset=".55" stopColor="#9d5a32" />
            <stop offset="1" stopColor="#512817" />
          </linearGradient>
          <linearGradient id="riderLeather" x1="0" x2="1">
            <stop offset="0" stopColor="#6c351f" />
            <stop offset="1" stopColor="#a46a3b" />
          </linearGradient>
        </defs>
        <ellipse cx="390" cy="404" rx="270" ry="22" fill="#1b100b" opacity=".25" />
        <path d="M211 264c35-86 117-106 213-71l88 31c48 17 95 16 142 2l18 33c-41 30-89 40-145 28l-29-6c-12 50-45 90-91 107-76 28-171 1-205-55-13-21-10-45 9-69z" fill="url(#horseCoat)" />
        <path d="M518 234c43-75 96-117 158-123l38 28-19 24 32 30-23 17-3 72-51 15-67-42z" fill="url(#horseCoat)" />
        <path d="M647 128l9-59 27 52M690 132l34-47-5 63" fill="#4a2417" />
        <path d="M674 160c26 4 41 19 45 45M669 184l37 8" fill="none" stroke="#e3bd76" strokeWidth="8" strokeLinecap="round" />
        <circle cx="683" cy="151" r="7" fill="#120c09" />
        <path d="M205 272c-74-6-123 24-149 90 32-37 74-51 126-40" fill="none" stroke="#3b1e14" strokeWidth="28" strokeLinecap="round" />
        <path d="M289 344l-28 72M372 350l-1 70M479 329l32 79M546 302l51 90" stroke="#4e2819" strokeWidth="24" strokeLinecap="round" />
        <path d="M247 415h42M352 420h43M492 410h42M582 392h41" stroke="#1b110d" strokeWidth="12" strokeLinecap="round" />
        <path d="M311 185c55-26 121-21 170 13l-24 56H316z" fill="#4e2a20" />
        <path d="M338 185l102 3 27 34H318z" fill="#bd8a50" opacity=".75" />

        <g transform="translate(348 12)">
          <path d="M23 175c4-63 27-97 67-97s68 36 71 98l-10 99H36z" fill="url(#riderLeather)" />
          <path d="M53 171l37 31 38-31 5 53-43 31-42-31z" fill="#922f27" />
          <rect x="70" y="107" width="41" height="52" rx="18" fill="#c77850" />
          <ellipse cx="90" cy="67" rx="63" ry="70" fill="#cb7a52" />
          <path d="M37 52C44 6 66-8 91-8c32 0 51 24 56 66-37-21-73-24-110-6z" fill="#28160f" />
          <circle cx="70" cy="70" r="6" fill="#20120d" /><circle cx="111" cy="70" r="6" fill="#20120d" />
          <path d="M73 96c11 10 25 10 36 0" fill="none" stroke="#713623" strokeWidth="6" strokeLinecap="round" />
          <path d="M13 11C39-10 64-18 91-18c29 0 57 9 83 30-16 19-33 25-50 22-21-4-40-4-62 0-18 4-34-3-49-23z" fill="#75411f" />
          <path d="M36 6C42-44 64-65 91-65c29 0 51 23 56 72-38-17-75-17-111-1z" fill="#8f5529" />
          <path d="M50-3c26-13 53-13 80 0" fill="none" stroke="#d4a15d" strokeWidth="8" />
          <path d="M118 185l88 49" stroke="#542b19" strokeWidth="9" strokeLinecap="round" />
          <path d="M196 232l55-50" stroke="#542b19" strokeWidth="6" strokeLinecap="round" />
        </g>
      </svg>
      <div className="dustPuff d1" />
      <div className="dustPuff d2" />
      <div className="dustPuff d3" />
    </div>
  );
}

function Mandacaru({ className = '' }: { className?: string }) {
  return (
    <svg className={`mandacaruSvg ${className}`} viewBox="0 0 100 180" aria-hidden="true">
      <path d="M45 175V42c0-15 21-15 21 0v133z" fill="#385339" />
      <path d="M47 102H25c-13 0-19-9-19-21V56c0-13 18-13 18 0v22c0 5 3 8 8 8h15z" fill="#385339" />
      <path d="M64 83h17c5 0 8-3 8-8V49c0-12 17-12 17 0v29c0 13-8 21-21 21H64z" fill="#385339" />
      <path d="M55 43v129M16 58v23M97 51v25" stroke="#6d8154" strokeWidth="4" opacity=".55" />
    </svg>
  );
}

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [ride, setRide] = useState(7);
  const [soundOn, setSoundOn] = useState(false);
  const [hasStartedRide, setHasStartedRide] = useState(false);

  const arrived = ride >= 91;
  const rideLabel = useMemo(() => (arrived ? 'Chegamos ao terreiro!' : `${Math.round(ride)}% do caminho`), [arrived, ride]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setHasStartedRide(true);
        setRide((value) => Math.min(93, value + 7));
      }
      if (event.key === 'ArrowLeft') setRide((value) => Math.max(7, value - 7));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openGate = () => {
    setEntered(true);
    window.setTimeout(() => document.querySelector('#convite')?.scrollIntoView({ behavior: 'smooth' }), 1150);
  };

  const rideForward = () => {
    setHasStartedRide(true);
    setRide((value) => Math.min(93, value + 10));
  };

  return (
    <main>
      <section className={`opening ${entered ? 'entered' : ''}`} aria-label="Abertura do convite">
        <div className="skyGlow" />
        <div className="openingSun" />
        <div className="cloud cloudOne" />
        <div className="cloud cloudTwo" />
        <div className="hills hillsBack" />
        <div className="hills hillsFront" />
        <Mandacaru className="openingCactus cactusA" />
        <Mandacaru className="openingCactus cactusB" />
        <div className="birds">⌁　⌁　⌁</div>

        <button
          className="soundToggle"
          type="button"
          aria-label={soundOn ? 'Desativar ambientação sonora' : 'Ativar ambientação sonora'}
          onClick={() => setSoundOn((value) => !value)}
        >
          {soundOn ? <Volume2 size={17} /> : <VolumeX size={17} />}
          <span>{soundOn ? 'AMBIENTE LIGADO' : 'AMBIENTE'}</span>
        </button>

        <motion.div
          className="openingRider"
          initial={{ x: '-35vw', opacity: 0 }}
          animate={{ x: entered ? '10vw' : 0, opacity: 1, scale: entered ? .92 : 1 }}
          transition={{ duration: entered ? 1.05 : 1.8, ease: [0.2, 0.7, 0.1, 1] }}
        >
          <HorseAndRider moving={!entered} />
        </motion.div>

        <motion.div
          className="openingCopy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: entered ? 0 : 1, y: entered ? -18 : 0 }}
          transition={{ delay: entered ? 0 : .45, duration: .8 }}
        >
          <p className="kicker">DO CORAÇÃO DO SERTÃO</p>
          <h1>A Cavalgada<br/><em>de Benício</em></h1>
          <div className="openingSeal"><span>5</span><b>ANOS</b></div>
          <p className="openingLead">Ajeite o chapéu e venha viver uma tarde arretada com o nosso pequeno vaqueiro.</p>
          <button className="primaryButton" type="button" onClick={openGate}>
            ABRIR A PORTEIRA <span>→</span>
          </button>
        </motion.div>

        <div className="gateFrame" aria-hidden="true">
          <div className={`gateLeaf gateLeft ${entered ? 'gateOpenLeft' : ''}`}><i /><i /><i /></div>
          <div className={`gateLeaf gateRight ${entered ? 'gateOpenRight' : ''}`}><i /><i /><i /></div>
          <div className="gatePost leftPost" />
          <div className="gatePost rightPost" />
          <div className="gateBoard">FAZENDA ENCANTO DO SERTÃO</div>
        </div>

        <AnimatePresence>
          {entered && (
            <motion.div className="gateMessage" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .65 }}>
              <Sparkles size={17} />
              <span>ENTRE. A FESTA É LOGO ALI.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="inviteHero" id="convite">
        <div className="textureOverlay" />
        <div className="heroCopy">
          <p className="kicker">UM CONVITE FEITO COM CARINHO</p>
          <h2>Nosso pequeno<br/><em>vaqueiro</em> faz 5!</h2>
          <p className="bodyCopy">
            Entre couro, poeira e pôr do sol, Benício prepara um dia cheio de brincadeira, abraço apertado e alegria do tamanho do sertão.
          </p>
          <div className="heroSignature">
            <span>BENÍCIO</span><i /> <span>24 · 10 · 26</span>
          </div>
        </div>
        <div className="portraitStage">
          <div className="portraitSun" />
          <Mandacaru className="portraitCactus" />
          <div className="portraitArch"><CowboyPortrait /></div>
          <div className="portraitCaption"><small>O DONO DA FESTA</small><strong>Benício, 5 anos</strong></div>
        </div>
        <ChevronDown className="sectionArrow" size={24} />
      </section>

      <section className="detailsSection">
        <div className="sectionIntro light">
          <p className="kicker">MARQUE NA FOLHINHA</p>
          <h2>O grande dia</h2>
          <p>Chegue com disposição para brincar, sorrir e celebrar com a gente.</p>
        </div>
        <div className="detailGrid">
          <article className="detailCard">
            <CalendarDays size={25} />
            <small>DATA</small>
            <strong>{party.day}</strong>
            <span>{party.month}</span>
          </article>
          <article className="detailCard featured">
            <Clock3 size={25} />
            <small>HORÁRIO</small>
            <strong>{party.time}</strong>
            <span>ATÉ O SOL SE PÔR</span>
          </article>
          <article className="detailCard">
            <MapPin size={25} />
            <small>LOCAL</small>
            <strong className="placeTitle">Fazenda Encanto<br/>do Sertão</strong>
            <span>{party.city.toUpperCase()}</span>
          </article>
        </div>
        <div className="dressNote"><span>✦</span> TRAJE LIVRE · CHAPÉU DE VAQUEIRO É BEM-VINDO <span>✦</span></div>
      </section>

      <section className="journeySection">
        <div className="journeyHeading">
          <p className="kicker">A MISSÃO DO VAQUEIRINHO</p>
          <h2>Leve Benício até o<br/><em>terreiro da festa</em></h2>
          <p>Toque em cavalgar ou use as setas do teclado. No caminho, o sertão vai ganhando vida.</p>
        </div>

        <div className="gameFrame">
          <div className="gameTopbar">
            <div><span className="liveDot" /> CAVALGADA EM ANDAMENTO</div>
            <b>{rideLabel}</b>
          </div>
          <div className="gameScene">
            <div className="gameSun" />
            <div className="gameMountains" />
            <div className="gameCloud gc1" /><div className="gameCloud gc2" />
            <Mandacaru className="gameCactus gameCactusOne" />
            <Mandacaru className="gameCactus gameCactusTwo" />
            <div className="woodSign"><span>TERREIRO</span><b>→</b></div>
            <div className="partyBarn"><div className="barnRoof" /><span>BENÍCIO 5</span><i /><i /><i /></div>
            <div className="bunting">◆　◇　◆　◇　◆</div>
            <motion.div
              className="gameRider"
              animate={{ left: `${ride}%` }}
              transition={{ type: 'spring', stiffness: 55, damping: 16 }}
            >
              <HorseAndRider moving={hasStartedRide && !arrived} />
            </motion.div>
            <div className="roadLayer" />
            <AnimatePresence>{arrived && <motion.div className="confetti" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>✦　✧　✦　✧　✦　✧　✦</motion.div>}</AnimatePresence>
          </div>
          <div className="progressTrack"><motion.span animate={{ width: `${ride}%` }} /></div>
          <div className="gameControls">
            <button type="button" onClick={() => setRide((value) => Math.max(7, value - 8))}>← VOLTAR</button>
            <button type="button" className="rideButton" onClick={rideForward} disabled={arrived}>
              {arrived ? 'CHEGAMOS!' : 'CAVALGAR'}
            </button>
            <button type="button" onClick={rideForward} disabled={arrived}>AVANÇAR →</button>
          </div>
        </div>

        <AnimatePresence>
          {arrived && (
            <motion.div className="arrivalCard" initial={{ opacity: 0, y: 28, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }}>
              <div className="arrivalIcon"><Sparkles /></div>
              <div>
                <small>MISSÃO CUMPRIDA</small>
                <h3>Ô trem bom! Você chegou!</h3>
                <p>O terreiro está pronto. Agora só falta dizer que vem comemorar com Benício.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="storySection">
        <div className="storyPortrait"><div className="storyRing"><CowboyPortrait compact /></div></div>
        <div className="storyText">
          <Music2 size={22} />
          <p className="kicker">UM RECADO DO DONO DA FESTA</p>
          <blockquote>“Eu já deixei meu chapéu pronto. Só falta você chegar pra gente brincar!”</blockquote>
          <span>— Benício</span>
        </div>
      </section>

      <section className="rsvpSection">
        <div className="rsvpStars">✦　·　✦　·　✦</div>
        <p className="kicker">VOCÊ FAZ PARTE DESSA HISTÓRIA</p>
        <h2>Confirme sua<br/><em>presença</em></h2>
        <p className="rsvpLead">Vai ser bom demais ter você e sua família nessa cavalgada.</p>
        <div className="rsvpMeta"><span>{party.date}</span><i>•</i><span>{party.time}</span><i>•</i><span>{party.city}</span></div>
        <button className="confirmButton" type="button">EU VOU PRA FESTA <span>→</span></button>
        <small className="rsvpNote">Confirmação demonstrativa para o modelo de portfólio.</small>
      </section>

      <footer>
        <span>Desenvolvido por</span>
        <strong>Anderson Jhonatan da K2 Tech</strong>
      </footer>
    </main>
  );
}
