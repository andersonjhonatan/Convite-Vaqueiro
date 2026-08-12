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

function CowboyPortrait({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={compact ? 'portraitSvg compact kidPortraitSvg' : 'portraitSvg kidPortraitSvg'}
      viewBox="0 0 520 620"
      role="img"
      aria-label="Benício, uma criança de cinco anos caracterizada de vaqueiro nordestino"
    >
      <defs>
        <linearGradient id="kidSkin" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#f3b07e"/><stop offset="1" stopColor="#d7774e"/></linearGradient>
        <linearGradient id="kidLeather" x1="0" x2="1"><stop offset="0" stopColor="#8a4b26"/><stop offset=".5" stopColor="#b96e37"/><stop offset="1" stopColor="#6c341e"/></linearGradient>
        <filter id="kidShadow" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="14" stdDeviation="15" floodColor="#25120a" floodOpacity=".35"/></filter>
      </defs>
      <ellipse cx="260" cy="575" rx="155" ry="25" fill="#1b100b" opacity=".22"/>
      <g filter="url(#kidShadow)">
        <path d="M157 540c10-118 51-174 103-174 56 0 96 59 105 174v53H157z" fill="url(#kidLeather)"/>
        <path d="M197 389c35 27 91 27 126 0l-12 76-51 37-51-37z" fill="#d44b35"/>
        <path d="M213 385l47 48 48-48-15-46h-66z" fill="#f0c681"/>
        <rect x="226" y="315" width="68" height="83" rx="31" fill="url(#kidSkin)"/>
        <ellipse cx="260" cy="238" rx="118" ry="126" fill="url(#kidSkin)"/>
        <ellipse cx="146" cy="248" rx="22" ry="29" fill="#df875d"/><ellipse cx="374" cy="248" rx="22" ry="29" fill="#df875d"/>
        <path d="M155 214c9-77 49-117 105-117 62 0 101 46 105 119-31-26-67-39-106-39-38 0-73 12-104 37z" fill="#341b12"/>
        <ellipse cx="215" cy="241" rx="20" ry="24" fill="#fff7e5"/><ellipse cx="305" cy="241" rx="20" ry="24" fill="#fff7e5"/>
        <ellipse cx="218" cy="244" rx="10" ry="13" fill="#2a1711"/><ellipse cx="302" cy="244" rx="10" ry="13" fill="#2a1711"/>
        <circle cx="222" cy="239" r="4" fill="#fff"/><circle cx="306" cy="239" r="4" fill="#fff"/>
        <path d="M251 267c7 5 14 5 20 0" fill="none" stroke="#a9563b" strokeWidth="5" strokeLinecap="round"/>
        <path d="M214 294c24 29 68 30 93 0" fill="#7e3426"/>
        <path d="M226 296c20 14 48 14 68 0" fill="#fff6dc"/>
        <circle cx="192" cy="285" r="18" fill="#e76e68" opacity=".25"/><circle cx="328" cy="285" r="18" fill="#e76e68" opacity=".25"/>
        <g transform="translate(0 -22)">
          <path d="M121 156c38-30 85-44 139-44 57 0 103 15 140 44-20 27-43 37-67 33-51-9-94-9-146 0-25 4-46-7-66-33z" fill="#7c421f"/>
          <path d="M166 139c12-91 51-127 94-127 48 0 86 40 96 128-57-29-132-29-190-1z" fill="url(#kidLeather)"/>
          <path d="M186 116c49-23 99-23 149 0" fill="none" stroke="#e4b25c" strokeWidth="12"/>
          <path d="M215 45l45 28 45-28M260 72v38" fill="none" stroke="#efc66f" strokeWidth="8" strokeLinecap="round"/>
        </g>
        <path d="M172 452l-52 82M348 452l51 82" stroke="#9a5931" strokeWidth="34" strokeLinecap="round"/>
        <circle cx="112" cy="538" r="20" fill="url(#kidSkin)"/><circle cx="407" cy="538" r="20" fill="url(#kidSkin)"/>
      </g>
    </svg>
  );
}

function HorseAndRider({ moving = false }: { moving?: boolean }) {
  return (
    <div className={`horseRider cuteHorse ${moving ? 'moving' : ''}`} aria-label="Benício, criança de cinco anos, cavalgando em um cavalo infantil">
      <svg viewBox="0 0 760 540" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="cuteHorseCoat" x1="0" x2="1"><stop offset="0" stopColor="#c6793d"/><stop offset=".58" stopColor="#a85a2d"/><stop offset="1" stopColor="#79401f"/></linearGradient>
          <linearGradient id="cuteLeather" x1="0" x2="1"><stop offset="0" stopColor="#8a4c25"/><stop offset="1" stopColor="#bd7840"/></linearGradient>
        </defs>
        <ellipse cx="410" cy="500" rx="275" ry="25" fill="#382013" opacity=".2"/>
        <path d="M177 332c35-95 132-131 245-92 76 27 130 20 185-10 41 45 41 112 2 155-42 47-109 54-181 38-57 64-171 81-243 27-39-29-43-76-8-118z" fill="url(#cuteHorseCoat)"/>
        <path d="M526 276c-1-116 59-188 133-191 55-2 91 45 89 105-2 55-31 96-79 114l-82 31z" fill="url(#cuteHorseCoat)"/>
        <path d="M608 101l-9-61 35 47M679 92l31-51-3 66" fill="#77401f"/>
        <ellipse cx="665" cy="187" rx="71" ry="78" fill="#bb6e38"/>
        <ellipse cx="687" cy="213" rx="58" ry="47" fill="#e0a06b"/>
        <ellipse cx="633" cy="171" rx="24" ry="29" fill="#fff8e6"/><ellipse cx="688" cy="171" rx="24" ry="29" fill="#fff8e6"/>
        <ellipse cx="638" cy="176" rx="11" ry="14" fill="#251610"/><ellipse cx="683" cy="176" rx="11" ry="14" fill="#251610"/>
        <circle cx="642" cy="171" r="4" fill="#fff"/><circle cx="687" cy="171" r="4" fill="#fff"/>
        <ellipse cx="672" cy="222" rx="7" ry="5" fill="#6b3b28"/><ellipse cx="706" cy="222" rx="7" ry="5" fill="#6b3b28"/>
        <path d="M668 243c16 12 33 12 48 0" fill="none" stroke="#7b4129" strokeWidth="6" strokeLinecap="round"/>
        <path d="M587 137c20-45 50-69 92-73-9 23-12 48-9 75-33-13-57-14-83-2z" fill="#472619"/>
        <path d="M604 158c31 8 68 8 101 0M623 191c31 8 60 8 91 0" stroke="#efc36e" strokeWidth="8" fill="none" strokeLinecap="round"/>
        <circle cx="725" cy="190" r="8" fill="#e6b45e"/>
        <path d="M181 342c-67 2-115 36-140 96 42-32 83-41 127-25" fill="none" stroke="#54301f" strokeWidth="28" strokeLinecap="round"/>
        <path d="M265 410l-31 88M356 418l-3 82M474 403l29 94M553 382l49 100" stroke="#7b4324" strokeWidth="28" strokeLinecap="round"/>
        <path d="M216 499h51M330 502h52M485 499h51M586 484h49" stroke="#41261a" strokeWidth="14" strokeLinecap="round"/>
        <path d="M260 282c67-33 139-29 205 12l-26 71H282z" fill="#6d3c2b"/>
        <path d="M285 290h147l25 35H273z" fill="#e2ad62" opacity=".9"/>
        <g transform="translate(335 12)">
          <path d="M31 224c3-75 29-116 75-116 48 0 77 43 80 119l-8 91H38z" fill="url(#cuteLeather)"/>
          <path d="M65 215l42 36 42-36 7 54-49 36-49-36z" fill="#d84431"/>
          <rect x="83" y="133" width="48" height="57" rx="22" fill="#e89a6d"/>
          <ellipse cx="107" cy="87" rx="76" ry="80" fill="#f0a979"/>
          <path d="M43 73C48 17 73-5 107-5c40 0 67 29 72 84-45-25-91-27-136-6z" fill="#331b12"/>
          <ellipse cx="82" cy="92" rx="16" ry="19" fill="#fff8e9"/><ellipse cx="134" cy="92" rx="16" ry="19" fill="#fff8e9"/>
          <ellipse cx="85" cy="95" rx="8" ry="10" fill="#21130f"/><ellipse cx="131" cy="95" rx="8" ry="10" fill="#21130f"/>
          <circle cx="88" cy="91" r="3" fill="#fff"/><circle cx="134" cy="91" r="3" fill="#fff"/>
          <path d="M83 124c16 16 35 16 49 0" fill="#7c3528"/>
          <path d="M90 125c12 8 24 8 35 0" fill="#fff3d7"/>
          <circle cx="63" cy="119" r="11" fill="#ef6e69" opacity=".24"/><circle cx="151" cy="119" r="11" fill="#ef6e69" opacity=".24"/>
          <path d="M15 31C45 6 75-4 108-4c35 0 67 12 97 35-18 23-39 31-61 27-25-5-48-5-73 0-23 4-42-5-56-27z" fill="#81451f"/>
          <path d="M48 25c9-58 33-81 60-81 31 0 55 26 63 82-43-20-82-20-123-1z" fill="#a45f2d"/>
          <path d="M59 17c32-14 65-14 98 0" fill="none" stroke="#efc46d" strokeWidth="8"/>
          <path d="M151 235l86 35" stroke="#67371f" strokeWidth="10" strokeLinecap="round"/>
        </g>
      </svg>
      <div className="dustPuff d1"/><div className="dustPuff d2"/><div className="dustPuff d3"/>
    </div>
  );
}

function Mandacaru({ className = '' }: { className?: string }) {
  return (
    <svg className={`mandacaruSvg ${className}`} viewBox="0 0 100 180" aria-hidden="true">
      <path d="M45 175V42c0-15 21-15 21 0v133z" fill="#385339"/>
      <path d="M47 102H25c-13 0-19-9-19-21V56c0-13 18-13 18 0v22c0 5 3 8 8 8h15z" fill="#385339"/>
      <path d="M64 83h17c5 0 8-3 8-8V49c0-12 17-12 17 0v29c0 13-8 21-21 21H64z" fill="#385339"/>
      <path d="M55 43v129M16 58v23M97 51v25" stroke="#6d8154" strokeWidth="4" opacity=".55"/>
    </svg>
  );
}

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [ride, setRide] = useState(7);
  const [hasStartedRide, setHasStartedRide] = useState(false);

  const arrived = ride >= 91;
  const rideLabel = useMemo(() => arrived ? 'Chegamos ao terreiro!' : `${Math.round(ride)}% do caminho`, [arrived, ride]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') { setHasStartedRide(true); setRide((value) => Math.min(93, value + 7)); }
      if (event.key === 'ArrowLeft') setRide((value) => Math.max(7, value - 7));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openGate = () => {
    setEntered(true);
    window.setTimeout(() => document.querySelector('#convite')?.scrollIntoView({ behavior: 'smooth' }), 1350);
  };

  const rideForward = () => {
    setHasStartedRide(true);
    setRide((value) => Math.min(93, value + 10));
  };

  return (
    <main>
      <section className={`opening kidsOpening ${entered ? 'entered' : ''}`} aria-label="Abertura infantil do convite">
        <div className="kidsSky"/>
        <div className="kidsSun"/>
        <div className="kidsCloud cloudKidOne"/><div className="kidsCloud cloudKidTwo"/>
        <div className="kidsHills back"/><div className="kidsHills front"/>
        <Mandacaru className="openingCactus kidCactusA"/><Mandacaru className="openingCactus kidCactusB"/>
        <div className="colorConfetti" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/></div>

        <div className="woodArch" aria-hidden="true">
          <div className="archTop"><span>♥</span> DO CORAÇÃO DO SERTÃO <span>♥</span></div>
          <div className="archPost archLeft"/><div className="archPost archRight"/>
          <div className="buntingFlags"><i/><i/><i/><i/><i/><i/><i/></div>
          <div className="littleLantern">✦</div>
        </div>

        <motion.div className="openingTitle" initial={{ opacity: 0, y: -26 }} animate={{ opacity: entered ? 0 : 1, y: 0 }} transition={{ delay: .25, duration: .75 }}>
          <p>A CAVALGADA DO PEQUENO</p>
          <h1>BENÍCIO</h1>
        </motion.div>

        <div className="ageBadge"><strong>5</strong><span>ANOS</span></div>

        <motion.div className="openingRider kidsRider" initial={{ x: '-32vw', opacity: 0 }} animate={{ x: entered ? '14vw' : 0, opacity: 1, scale: entered ? .9 : 1 }} transition={{ duration: entered ? 1.1 : 1.65, ease: [0.2, .75, .1, 1] }}>
          <HorseAndRider moving={!entered}/>
        </motion.div>

        <motion.div className="kidsInviteCopy" initial={{ opacity: 0, y: 26 }} animate={{ opacity: entered ? 0 : 1, y: 0 }} transition={{ delay: .65, duration: .7 }}>
          <p>Venha viver uma tarde <b>arretada de alegria!</b></p>
          <button className="kidsGateButton" type="button" onClick={openGate}>ABRIR A PORTEIRA <span>→</span></button>
          <div className="openingMiniFeatures"><span>🤠 <b>VAQUEIRINHO</b></span><span>🐴 <b>CAVALGADA</b></span><span>🎉 <b>DIVERSÃO</b></span></div>
        </motion.div>

        <div className="gateFrame kidsGate" aria-hidden="true">
          <div className={`gateLeaf gateLeft ${entered ? 'gateOpenLeft' : ''}`}><i/><i/><i/></div>
          <div className={`gateLeaf gateRight ${entered ? 'gateOpenRight' : ''}`}><i/><i/><i/></div>
          <div className="gatePost leftPost"/><div className="gatePost rightPost"/>
        </div>

        <AnimatePresence>{entered && <motion.div className="gateMessage kidGateMessage" initial={{ opacity: 0, y: 15, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: .6 }}><Sparkles size={18}/><span>ÔBA! A PORTEIRA ABRIU. VEM FESTEJAR!</span></motion.div>}</AnimatePresence>
      </section>

      <section className="inviteHero" id="convite">
        <div className="textureOverlay"/>
        <div className="heroCopy">
          <p className="kicker">UM CONVITE FEITO COM CARINHO</p>
          <h2>Nosso pequeno<br/><em>vaqueiro</em> faz 5!</h2>
          <p className="bodyCopy">Entre brincadeiras, cavalos e um pôr do sol bonito, Benício prepara um dia cheio de sorriso, abraço apertado e alegria do tamanho do sertão.</p>
          <div className="heroSignature"><span>BENÍCIO</span><i/><span>24 · 10 · 26</span></div>
        </div>
        <div className="portraitStage">
          <div className="portraitSun"/><Mandacaru className="portraitCactus"/>
          <div className="portraitArch"><CowboyPortrait/></div>
          <div className="portraitCaption"><small>O DONO DA FESTA</small><strong>Benício, 5 anos</strong></div>
        </div>
        <ChevronDown className="sectionArrow" size={24}/>
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
            <div className="woodSign"><span>TERREIRO</span><b>→</b></div><div className="partyBarn"><div className="barnRoof"/><span>BENÍCIO 5</span><i/><i/><i/></div><div className="bunting">◆　◇　◆　◇　◆</div>
            <motion.div className="gameRider" animate={{ left: `${ride}%` }} transition={{ type: 'spring', stiffness: 55, damping: 16 }}><HorseAndRider moving={hasStartedRide && !arrived}/></motion.div>
            <div className="roadLayer"/>
            <AnimatePresence>{arrived && <motion.div className="confetti" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>✦　✧　✦　✧　✦　✧　✦</motion.div>}</AnimatePresence>
          </div>
          <div className="progressTrack"><motion.span animate={{ width: `${ride}%` }}/></div>
          <div className="gameControls"><button type="button" onClick={() => setRide((value) => Math.max(7, value - 8))}>← VOLTAR</button><button type="button" className="rideButton" onClick={rideForward} disabled={arrived}>{arrived ? 'CHEGAMOS!' : 'CAVALGAR'}</button><button type="button" onClick={rideForward} disabled={arrived}>AVANÇAR →</button></div>
        </div>
        <AnimatePresence>{arrived && <motion.div className="arrivalCard" initial={{ opacity: 0, y: 28, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }}><div className="arrivalIcon"><Sparkles/></div><div><small>MISSÃO CUMPRIDA</small><h3>Ôba! Você chegou!</h3><p>O terreiro está pronto. Agora só falta dizer que vem comemorar com Benício.</p></div></motion.div>}</AnimatePresence>
      </section>

      <section className="storySection">
        <div className="storyPortrait"><div className="storyRing"><CowboyPortrait compact/></div></div>
        <div className="storyText"><Music2 size={22}/><p className="kicker">UM RECADO DO DONO DA FESTA</p><blockquote>“Eu já deixei meu chapéu pronto. Só falta você chegar pra gente brincar!”</blockquote><span>— Benício</span></div>
      </section>

      <section className="rsvpSection">
        <div className="rsvpStars">✦　·　✦　·　✦</div><p className="kicker">VOCÊ FAZ PARTE DESSA HISTÓRIA</p><h2>Confirme sua<br/><em>presença</em></h2><p className="rsvpLead">Vai ser bom demais ter você e sua família nessa cavalgada.</p>
        <div className="rsvpMeta"><span>{party.date}</span><i>•</i><span>{party.time}</span><i>•</i><span>{party.city}</span></div>
        <button className="confirmButton" type="button">EU VOU PRA FESTA <span>→</span></button>
      </section>

      <footer><span>Desenvolvido por</span><strong>Anderson Jhonatan da K2 Tech</strong></footer>
    </main>
  );
}
