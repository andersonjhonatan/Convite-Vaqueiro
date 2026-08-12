'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarDays, ChevronDown, Clock3, MapPin, Music2, Sparkles } from 'lucide-react';

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

function Mandacaru({ className = '' }: { className?: string }) {
  return (
    <svg className={`mandacaruSvg ${className}`} viewBox="0 0 100 180" aria-hidden="true">
      <path d="M45 175V42c0-15 21-15 21 0v133z" fill="#3d6b49" />
      <path d="M47 102H25c-13 0-19-9-19-21V56c0-13 18-13 18 0v22c0 5 3 8 8 8h15z" fill="#3d6b49" />
      <path d="M64 83h17c5 0 8-3 8-8V49c0-12 17-12 17 0v29c0 13-8 21-21 21H64z" fill="#3d6b49" />
      <path d="M55 43v129M16 58v23M97 51v25" stroke="#7e9a69" strokeWidth="4" opacity=".55" />
    </svg>
  );
}

function StorybookRider({ moving = false }: { moving?: boolean }) {
  return (
    <div className={`storybookRider ${moving ? 'isMoving' : ''}`} aria-label="Benício, uma criança de cinco anos vestida de vaqueiro, montada em um cavalo amigável">
      <svg viewBox="0 0 760 560" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="horseBody" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#d59458" />
            <stop offset=".55" stopColor="#b76a39" />
            <stop offset="1" stopColor="#8e4a2a" />
          </linearGradient>
          <linearGradient id="horseMuzzle" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#efc49a" />
            <stop offset="1" stopColor="#d89a69" />
          </linearGradient>
          <linearGradient id="kidLeather" x1="0" x2="1">
            <stop offset="0" stopColor="#8b4c27" />
            <stop offset=".55" stopColor="#b8703a" />
            <stop offset="1" stopColor="#6e351f" />
          </linearGradient>
          <filter id="softRiderShadow" x="-30%" y="-30%" width="160%" height="180%">
            <feDropShadow dx="0" dy="18" stdDeviation="14" floodColor="#4a2718" floodOpacity=".28" />
          </filter>
        </defs>

        <ellipse cx="395" cy="510" rx="265" ry="28" fill="#4d2a1b" opacity=".18" />

        <g filter="url(#softRiderShadow)">
          <path d="M204 330c42-93 136-120 241-83 56 20 96 20 142 1 41 39 52 92 27 139-29 55-91 78-174 60-54 53-153 65-221 25-57-34-64-91-15-142z" fill="url(#horseBody)" />
          <path d="M530 304c4-116 50-199 125-218 57-14 105 23 111 84 6 60-24 111-80 140l-90 46z" fill="url(#horseBody)" />
          <path d="M621 113l-2-72 38 56M689 104l36-58-8 76" fill="#8e4a2a" />
          <path d="M578 159c24-55 58-85 104-88-12 27-15 57-8 88-36-15-66-15-96 0z" fill="#5d311f" />
          <ellipse cx="666" cy="190" rx="79" ry="86" fill="#b86b39" />
          <ellipse cx="690" cy="236" rx="67" ry="49" fill="url(#horseMuzzle)" />
          <ellipse cx="638" cy="184" rx="22" ry="25" fill="#fff9ea" />
          <ellipse cx="694" cy="184" rx="22" ry="25" fill="#fff9ea" />
          <ellipse cx="643" cy="188" rx="9" ry="12" fill="#2d1b14" />
          <ellipse cx="689" cy="188" rx="9" ry="12" fill="#2d1b14" />
          <circle cx="646" cy="184" r="3.5" fill="#fff" />
          <circle cx="692" cy="184" r="3.5" fill="#fff" />
          <ellipse cx="672" cy="236" rx="6" ry="5" fill="#7e4d3b" />
          <ellipse cx="707" cy="236" rx="6" ry="5" fill="#7e4d3b" />
          <path d="M667 259c15 11 34 11 49 0" fill="none" stroke="#8a4e38" strokeWidth="6" strokeLinecap="round" />
          <path d="M612 167c28 8 68 8 104 0M628 211c33 8 64 8 94 0" fill="none" stroke="#f1cd81" strokeWidth="7" strokeLinecap="round" opacity=".9" />
          <circle cx="728" cy="210" r="7" fill="#e8b654" />

          <path d="M208 347c-72 4-124 41-153 105 46-35 91-43 139-25" fill="none" stroke="#5f3625" strokeWidth="30" strokeLinecap="round" />
          <path d="M279 421l-30 87M370 428l-2 82M474 416l31 91M556 393l47 96" stroke="#8c4b2a" strokeWidth="26" strokeLinecap="round" />
          <path d="M226 510h50M344 512h48M486 508h49M586 491h46" stroke="#4a2a1d" strokeWidth="14" strokeLinecap="round" />

          <path d="M276 292c62-35 138-34 201 3l-22 72H292z" fill="#633529" />
          <path d="M300 300h136l28 36H287z" fill="#e6b768" opacity=".92" />

          <g transform="translate(338 18)">
            <path d="M33 225c5-73 31-112 76-112 47 0 75 40 80 113l-6 92H39z" fill="url(#kidLeather)" />
            <path d="M67 218l43 35 43-35 5 52-48 37-48-37z" fill="#d74a36" />
            <rect x="86" y="137" width="48" height="57" rx="22" fill="#e99c6e" />
            <ellipse cx="110" cy="92" rx="76" ry="81" fill="#f3ae7b" />
            <ellipse cx="36" cy="99" rx="13" ry="18" fill="#df8a60" />
            <ellipse cx="184" cy="99" rx="13" ry="18" fill="#df8a60" />
            <path d="M45 78C51 20 76-4 110-4c41 0 68 29 74 88-44-28-94-30-139-6z" fill="#342017" />
            <ellipse cx="83" cy="98" rx="16" ry="19" fill="#fff8e7" />
            <ellipse cx="137" cy="98" rx="16" ry="19" fill="#fff8e7" />
            <ellipse cx="86" cy="102" rx="8" ry="10" fill="#24150f" />
            <ellipse cx="134" cy="102" rx="8" ry="10" fill="#24150f" />
            <circle cx="89" cy="98" r="3" fill="#fff" />
            <circle cx="137" cy="98" r="3" fill="#fff" />
            <path d="M86 132c15 17 34 17 49 0" fill="#7d3829" />
            <path d="M94 133c11 8 23 8 33 0" fill="#fff3db" />
            <circle cx="64" cy="126" r="11" fill="#ef766b" opacity=".25" />
            <circle cx="156" cy="126" r="11" fill="#ef766b" opacity=".25" />

            <path d="M16 35C45 8 77-3 110-3c36 0 68 12 98 38-20 24-41 31-63 27-25-5-49-5-74 0-24 4-43-5-55-27z" fill="#80451f" />
            <path d="M49 28c9-60 34-84 61-84 31 0 55 26 64 85-43-21-84-21-125-1z" fill="#a8632f" />
            <path d="M60 20c33-15 67-15 100 0" fill="none" stroke="#f0c469" strokeWidth="8" />

            <path d="M51 230c-36-4-61-18-78-42" fill="none" stroke="#9d5b34" strokeWidth="18" strokeLinecap="round" />
            <circle cx="-29" cy="185" r="13" fill="#f0aa79" />
            <path d="M-32 176l-8-20M-26 176l0-22M-20 178l8-18" stroke="#f0aa79" strokeWidth="6" strokeLinecap="round" />
            <path d="M158 235l85 34" stroke="#6b3b22" strokeWidth="9" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function KidPortrait({ compact = false }: { compact?: boolean }) {
  return (
    <svg className={compact ? 'portraitSvg compact kidPortraitSvg' : 'portraitSvg kidPortraitSvg'} viewBox="0 0 520 620" role="img" aria-label="Benício, criança de cinco anos caracterizada de vaqueiro nordestino">
      <defs>
        <linearGradient id="portraitSkin" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f3b07e" />
          <stop offset="1" stopColor="#d7774e" />
        </linearGradient>
        <linearGradient id="portraitLeather" x1="0" x2="1">
          <stop offset="0" stopColor="#8a4b26" />
          <stop offset=".5" stopColor="#b96e37" />
          <stop offset="1" stopColor="#6c341e" />
        </linearGradient>
      </defs>
      <ellipse cx="260" cy="575" rx="155" ry="25" fill="#1b100b" opacity=".18" />
      <path d="M157 540c10-118 51-174 103-174 56 0 96 59 105 174v53H157z" fill="url(#portraitLeather)" />
      <path d="M197 389c35 27 91 27 126 0l-12 76-51 37-51-37z" fill="#d44b35" />
      <path d="M213 385l47 48 48-48-15-46h-66z" fill="#f0c681" />
      <rect x="226" y="315" width="68" height="83" rx="31" fill="url(#portraitSkin)" />
      <ellipse cx="260" cy="238" rx="118" ry="126" fill="url(#portraitSkin)" />
      <path d="M155 214c9-77 49-117 105-117 62 0 101 46 105 119-31-26-67-39-106-39-38 0-73 12-104 37z" fill="#341b12" />
      <ellipse cx="215" cy="241" rx="20" ry="24" fill="#fff7e5" /><ellipse cx="305" cy="241" rx="20" ry="24" fill="#fff7e5" />
      <ellipse cx="218" cy="244" rx="10" ry="13" fill="#2a1711" /><ellipse cx="302" cy="244" rx="10" ry="13" fill="#2a1711" />
      <circle cx="222" cy="239" r="4" fill="#fff" /><circle cx="306" cy="239" r="4" fill="#fff" />
      <path d="M214 294c24 29 68 30 93 0" fill="#7e3426" /><path d="M226 296c20 14 48 14 68 0" fill="#fff6dc" />
      <circle cx="192" cy="285" r="18" fill="#e76e68" opacity=".22" /><circle cx="328" cy="285" r="18" fill="#e76e68" opacity=".22" />
      <path d="M121 134c38-30 85-44 139-44 57 0 103 15 140 44-20 27-43 37-67 33-51-9-94-9-146 0-25 4-46-7-66-33z" fill="#7c421f" />
      <path d="M166 117c12-91 51-127 94-127 48 0 86 40 96 128-57-29-132-29-190-1z" fill="url(#portraitLeather)" />
      <path d="M186 94c49-23 99-23 149 0" fill="none" stroke="#e4b25c" strokeWidth="12" />
      <path d="M215 23l45 28 45-28M260 50v38" fill="none" stroke="#efc66f" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  const [entryState, setEntryState] = useState<'locked' | 'opening' | 'entered'>('locked');
  const [ride, setRide] = useState(7);
  const [hasStartedRide, setHasStartedRide] = useState(false);

  const arrived = ride >= 91;
  const rideLabel = useMemo(() => (arrived ? 'Chegamos ao terreiro!' : `${Math.round(ride)}% do caminho`), [arrived, ride]);

  useEffect(() => {
    if (entryState !== 'entered') {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [entryState]);

  useEffect(() => {
    if (entryState !== 'entered') return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setHasStartedRide(true);
        setRide((value) => Math.min(93, value + 7));
      }
      if (event.key === 'ArrowLeft') setRide((value) => Math.max(7, value - 7));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [entryState]);

  const openGate = () => {
    if (entryState !== 'locked') return;
    setEntryState('opening');
    window.setTimeout(() => setEntryState('entered'), 1250);
  };

  const rideForward = () => {
    setHasStartedRide(true);
    setRide((value) => Math.min(93, value + 10));
  };

  if (entryState !== 'entered') {
    const opening = entryState === 'opening';
    return (
      <main className="entryOnlyMain">
        <section className={`premiumEntry ${opening ? 'isOpening' : ''}`} aria-label="Abertura do convite infantil">
          <div className="entrySky" />
          <div className="entrySun" />
          <div className="entryCloud ec1" /><div className="entryCloud ec2" />
          <div className="entryHill eh1" /><div className="entryHill eh2" />
          <Mandacaru className="entryCactus entryCactusLeft" />
          <Mandacaru className="entryCactus entryCactusRight" />
          <div className="entryConfetti" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>

          <div className="entryArch" aria-hidden="true">
            <div className="entryArchBoard"><span>♥</span> DO CORAÇÃO DO SERTÃO <span>♥</span></div>
            <div className="entryPost left" /><div className="entryPost right" />
            <div className="entryFlags"><i/><i/><i/><i/><i/><i/><i/><i/></div>
            <div className="entryLantern">✦</div>
          </div>

          <motion.div className="entryCopy" initial={{ opacity: 0, y: -22 }} animate={{ opacity: opening ? 0 : 1, y: opening ? -22 : 0 }} transition={{ duration: .55 }}>
            <small>A CAVALGADA DO PEQUENO</small>
            <h1>Benício</h1>
            <div className="entryAge"><strong>5</strong><span>ANOS</span></div>
          </motion.div>

          <motion.div className="entryRider" initial={{ opacity: 0, x: -120 }} animate={{ opacity: 1, x: opening ? 90 : 0, scale: opening ? 1.05 : 1 }} transition={{ duration: opening ? 1 : 1.1, ease: [0.2, .75, .2, 1] }}>
            <StorybookRider moving={!opening} />
          </motion.div>

          <motion.div className="entryAction" initial={{ opacity: 0, y: 18 }} animate={{ opacity: opening ? 0 : 1, y: opening ? 15 : 0 }} transition={{ delay: .25, duration: .5 }}>
            <p>Venha viver uma tarde <strong>arretada de alegria!</strong></p>
            <button type="button" onClick={openGate} disabled={opening}>ABRIR A PORTEIRA <span>→</span></button>
            <div className="entryChips"><span>🤠 Vaqueirinho</span><span>🐴 Cavalgada</span><span>🎉 Diversão</span></div>
          </motion.div>

          <div className="entryGate" aria-hidden="true">
            <div className={`entryGateLeaf left ${opening ? 'open' : ''}`}><i/><i/><i/></div>
            <div className={`entryGateLeaf right ${opening ? 'open' : ''}`}><i/><i/><i/></div>
          </div>

          <AnimatePresence>{opening && <motion.div className="entryWelcome" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}><Sparkles size={19}/><span>PODE ENTRAR! A FESTA COMEÇOU.</span></motion.div>}</AnimatePresence>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="inviteHero" id="convite">
        <div className="textureOverlay" />
        <div className="heroCopy">
          <p className="kicker">UM CONVITE FEITO COM CARINHO</p>
          <h2>Nosso pequeno<br/><em>vaqueiro</em> faz 5!</h2>
          <p className="bodyCopy">Entre brincadeiras, cavalos e um pôr do sol bonito, Benício prepara um dia cheio de sorriso, abraço apertado e alegria do tamanho do sertão.</p>
          <div className="heroSignature"><span>BENÍCIO</span><i/><span>24 · 10 · 26</span></div>
        </div>
        <div className="portraitStage">
          <div className="portraitSun" />
          <Mandacaru className="portraitCactus" />
          <div className="portraitArch"><KidPortrait /></div>
          <div className="portraitCaption"><small>O DONO DA FESTA</small><strong>Benício, 5 anos</strong></div>
        </div>
        <ChevronDown className="sectionArrow" size={24} />
      </section>

      <section className="detailsSection">
        <div className="sectionIntro light"><p className="kicker">MARQUE NA FOLHINHA</p><h2>O grande dia</h2><p>Chegue com disposição para brincar, sorrir e celebrar com a gente.</p></div>
        <div className="detailGrid">
          <article className="detailCard"><CalendarDays size={25}/><small>DATA</small><strong>{party.day}</strong><span>{party.month}</span></article>
          <article className="detailCard featured"><Clock3 size={25}/><small>HORÁRIO</small><strong>{party.time}</strong><span>ATÉ O SOL SE PÔR</span></article>
          <article className="detailCard"><MapPin size={25}/><small>LOCAL</small><strong className="placeTitle">Fazenda Encanto<br/>do Sertão</strong><span>{party.city.toUpperCase()}</span></article>
        </div>
        <div className="dressNote"><span>✦</span> CHAPÉU DE VAQUEIRO É BEM-VINDO <span>✦</span></div>
      </section>

      <section className="journeySection">
        <div className="journeyHeading"><p className="kicker">A MISSÃO DO VAQUEIRINHO</p><h2>Leve Benício até o<br/><em>terreiro da festa</em></h2><p>Toque em cavalgar ou use as setas do teclado. No caminho, o sertão vai ganhando vida.</p></div>
        <div className="gameFrame">
          <div className="gameTopbar"><div><span className="liveDot"/> CAVALGADA EM ANDAMENTO</div><b>{rideLabel}</b></div>
          <div className="gameScene">
            <div className="gameSun"/><div className="gameMountains"/><div className="gameCloud gc1"/><div className="gameCloud gc2"/>
            <Mandacaru className="gameCactus gameCactusOne"/><Mandacaru className="gameCactus gameCactusTwo"/>
            <div className="woodSign"><span>TERREIRO</span><b>→</b></div>
            <div className="partyBarn"><div className="barnRoof"/><span>BENÍCIO 5</span><i/><i/><i/></div>
            <div className="bunting">◆　◇　◆　◇　◆</div>
            <motion.div className="gameRider" animate={{ left: `${ride}%` }} transition={{ type: 'spring', stiffness: 55, damping: 16 }}><StorybookRider moving={hasStartedRide && !arrived}/></motion.div>
            <div className="roadLayer"/>
            <AnimatePresence>{arrived && <motion.div className="confetti" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>✦　✧　✦　✧　✦　✧　✦</motion.div>}</AnimatePresence>
          </div>
          <div className="progressTrack"><motion.span animate={{ width: `${ride}%` }}/></div>
          <div className="gameControls">
            <button type="button" onClick={() => setRide((value) => Math.max(7, value - 8))}>← VOLTAR</button>
            <button type="button" className="rideButton" onClick={rideForward} disabled={arrived}>{arrived ? 'CHEGAMOS!' : 'CAVALGAR'}</button>
            <button type="button" onClick={rideForward} disabled={arrived}>AVANÇAR →</button>
          </div>
        </div>
        <AnimatePresence>{arrived && <motion.div className="arrivalCard" initial={{ opacity: 0, y: 28, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }}><div className="arrivalIcon"><Sparkles/></div><div><small>MISSÃO CUMPRIDA</small><h3>Ô trem bom! Você chegou!</h3><p>O terreiro está pronto. Agora só falta dizer que vem comemorar com Benício.</p></div></motion.div>}</AnimatePresence>
      </section>

      <section className="storySection">
        <div className="storyPortrait"><div className="storyRing"><KidPortrait compact/></div></div>
        <div className="storyText"><Music2 size={22}/><p className="kicker">UM RECADO DO DONO DA FESTA</p><blockquote>“Eu já deixei meu chapéu pronto. Só falta você chegar pra gente brincar!”</blockquote><span>— Benício</span></div>
      </section>

      <section className="rsvpSection">
        <div className="rsvpStars">✦　·　✦　·　✦</div>
        <p className="kicker">VOCÊ FAZ PARTE DESSA HISTÓRIA</p>
        <h2>Confirme sua<br/><em>presença</em></h2>
        <p className="rsvpLead">Vai ser bom demais ter você e sua família nessa cavalgada.</p>
        <div className="rsvpMeta"><span>{party.date}</span><i>•</i><span>{party.time}</span><i>•</i><span>{party.city}</span></div>
        <button className="confirmButton" type="button">EU VOU PRA FESTA <span>→</span></button>
      </section>

      <footer><span>Desenvolvido por</span><strong>Anderson Jhonatan da K2 Tech</strong></footer>
    </main>
  );
}
