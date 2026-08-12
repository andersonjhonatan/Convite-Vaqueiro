'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, Clock, MapPin, ChevronDown, Sparkles } from 'lucide-react';

const party = {
  name: 'João Bento',
  age: 7,
  date: '18 de outubro de 2026',
  time: '16h30',
  place: 'Sítio Riacho do Umbuzeiro',
  city: 'Ibimirim · Pernambuco',
};

function LittleCowboy() {
  return (
    <div className="cowboy" aria-label="Ilustração de um vaqueirinho nordestino">
      <div className="leatherHat"><span /></div>
      <div className="cowboyHead">
        <i className="ear earLeft" /><i className="ear earRight" />
        <span className="hair" /><span className="eye eyeLeft" /><span className="eye eyeRight" />
        <span className="nose" /><span className="smile" />
      </div>
      <div className="neck" />
      <div className="gibao"><span className="gibaoDetail" /><span className="scarf" /></div>
      <div className="arm armLeft" /><div className="arm armRight" />
    </div>
  );
}

function HorseScene({ progress }: { progress: number }) {
  return (
    <div className="trailScene">
      <div className="trailSun" />
      <div className="distantMountains" />
      <span className="mandacaru m1" /><span className="mandacaru m2" /><span className="mandacaru m3" />
      <div className="partyHouse"><span>FESTA</span></div>
      <motion.div className="ridingGroup" animate={{ left: `${progress}%` }} transition={{ type: 'spring', stiffness: 55, damping: 15 }}>
        <div className="miniRider">♞</div>
      </motion.div>
      <div className="dustRoad" />
    </div>
  );
}

export default function Home() {
  const [gateOpen, setGateOpen] = useState(false);
  const [ride, setRide] = useState(5);

  return (
    <main>
      <section className={`opening ${gateOpen ? 'openingDone' : ''}`}>
        <div className="openingSky"><div className="openingSun" /></div>
        <div className="sertaoLayer back" />
        <div className="sertaoLayer front" />
        <span className="openingCactus cactusOne" /><span className="openingCactus cactusTwo" />

        <motion.div className="heroCowboy" initial={{ x: -70, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }}>
          <LittleCowboy />
          <div className="horseSilhouette"><span className="horseHead" /><span className="horseBody" /><i className="leg l1" /><i className="leg l2" /><i className="leg l3" /><i className="leg l4" /></div>
        </motion.div>

        <motion.div className="openingCopy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35, duration: .8 }}>
          <p className="kicker">LÁ VEM O DONO DA FESTA</p>
          <h1><span>João</span> Bento</h1>
          <p className="openingAge">7 anos de coragem, aventura e alegria</p>
          <div className="openingRule"><i /><Sparkles size={14}/><i /></div>
          <p className="openingText">Do coração do sertão vem chegando um vaqueirinho arretado para viver um dia que vai ficar na memória.</p>
          <button className="gateButton" onClick={() => setGateOpen(true)}>ABRIR A PORTEIRA <span>→</span></button>
        </motion.div>

        <div className={`woodGate leftGate ${gateOpen ? 'openLeft' : ''}`}><b /></div>
        <div className={`woodGate rightGate ${gateOpen ? 'openRight' : ''}`}><b /></div>
        <div className="gateSign">SÍTIO RIACHO DO UMBUZEIRO</div>

        <AnimatePresence>
          {gateOpen && (
            <motion.div className="enterCue" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: .8 }}>
              <span>ENTRE, A FESTA É LOGO ALI</span><ChevronDown size={20}/>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="heroInvite">
        <p className="kicker">UMA TARDE DE SERTÃO, FAMÍLIA E ALEGRIA</p>
        <h2>O pequeno vaqueiro<br/><em>faz 7 anos</em></h2>
        <p className="lead">João Bento ajeitou o chapéu, selou o cavalo e chamou quem faz parte da história dele para comemorar.</p>
        <div className="portraitMedal"><LittleCowboy /><div className="medalRing"><span>JOÃO BENTO · 7 ANOS ·</span></div></div>
      </section>

      <section className="partyDetails">
        <div className="sectionHeading"><p className="kicker">ANOTE NA FOLHINHA</p><h2>O grande dia</h2><p>Venha de coração leve e pronto para uma tarde bonita no sertão.</p></div>
        <div className="detailGrid">
          <article><CalendarDays/><span>DATA</span><strong>18</strong><b>OUTUBRO · 2026</b></article>
          <article><Clock/><span>HORÁRIO</span><strong>16:30</strong><b>ATÉ O SOL SE PÔR</b></article>
          <article><MapPin/><span>LOCAL</span><strong className="placeName">Sítio Riacho<br/>do Umbuzeiro</strong><b>IBIMIRIM · PE</b></article>
        </div>
      </section>

      <section className="journey">
        <p className="kicker">MISSÃO DO VAQUEIRINHO</p>
        <h2>Leve João Bento até<br/><em>o terreiro da festa</em></h2>
        <p className="journeyIntro">Use os controles para cavalgar pela estrada de terra. Quando chegar ao terreiro, uma surpresa aparece.</p>
        <HorseScene progress={ride} />
        <div className="rideMeter"><span style={{ width: `${Math.min(100, ride + 7)}%` }} /></div>
        <div className="rideControls">
          <button onClick={() => setRide(Math.max(5, ride - 10))}>← VOLTAR</button>
          <button className="rideMain" onClick={() => setRide(Math.min(88, ride + 12))}>CAVALGAR</button>
          <button onClick={() => setRide(Math.min(88, ride + 10))}>AVANÇAR →</button>
        </div>
        <AnimatePresence>{ride >= 88 && <motion.div className="arrivalCard" initial={{ opacity: 0, scale: .85, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}><Sparkles/><div><small>MISSÃO CUMPRIDA</small><strong>Ô trem bom! Você chegou à festa!</strong><p>Agora só falta confirmar sua presença.</p></div></motion.div>}</AnimatePresence>
      </section>

      <section className="rsvp">
        <div className="rsvpBadge">JB</div>
        <p className="kicker">JOÃO BENTO QUER VOCÊ POR PERTO</p>
        <h2>Confirme sua<br/><em>presença</em></h2>
        <p>Vai ser bom demais dividir esse dia com você e sua família.</p>
        <div className="rsvpSummary"><span>{party.date}</span><i>•</i><span>{party.time}</span><i>•</i><span>{party.city}</span></div>
        <button>EU VOU PRA FESTA</button>
      </section>

      <footer><span>Desenvolvido por</span> Anderson Jhonatan da K2 Tech</footer>
    </main>
  );
}
