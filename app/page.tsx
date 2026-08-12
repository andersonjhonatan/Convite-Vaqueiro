'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CalendarDays,
  Heart,
  MapPin,
  Navigation,
  Sparkles,
  Star,
} from 'lucide-react';

const party = {
  child: 'Benício',
  age: 6,
  date: '24 de outubro de 2026',
  time: '16:30',
  place: 'Recanto do Vaqueirinho',
  address: 'Estrada do Açude, km 3 · Ibimirim – PE',
};

const photos = {
  childHorse:
    'https://images.pexels.com/photos/19087935/pexels-photo-19087935.jpeg?auto=compress&cs=tinysrgb&w=1800',
  farmRide:
    'https://images.pexels.com/photos/28252468/pexels-photo-28252468.jpeg?auto=compress&cs=tinysrgb&w=1800',
  childPortrait:
    'https://images.pexels.com/photos/11525066/pexels-photo-11525066.jpeg?auto=compress&cs=tinysrgb&w=1200',
  horse:
    'https://images.pexels.com/photos/13808309/pexels-photo-13808309.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

type Horseshoe = {
  id: string;
  label: string;
  x: number;
  y: number;
};

const horseshoes: Horseshoe[] = [
  { id: 'cerca', label: 'perto da cerca', x: 21, y: 67 },
  { id: 'arvore', label: 'ao lado da árvore', x: 76, y: 30 },
  { id: 'porteira', label: 'junto da porteira', x: 83, y: 72 },
  { id: 'capim', label: 'escondida no capim', x: 47, y: 49 },
];

const confetti = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  left: `${(index * 41) % 100}%`,
  delay: `${(index % 7) * 0.08}s`,
}));

function Countdown() {
  const eventDate = useMemo(() => new Date('2026-10-24T16:30:00-03:00'), []);
  const [remaining, setRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const distance = Math.max(0, eventDate.getTime() - Date.now());
      setRemaining({
        days: Math.floor(distance / 86_400_000),
        hours: Math.floor((distance / 3_600_000) % 24),
        minutes: Math.floor((distance / 60_000) % 60),
        seconds: Math.floor((distance / 1_000) % 60),
      });
    };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, [eventDate]);

  const units = [
    ['days', 'dias'],
    ['hours', 'horas'],
    ['minutes', 'min'],
    ['seconds', 'seg'],
  ] as const;

  return (
    <div className="countdown" aria-label="Contagem regressiva para o aniversário">
      {units.map(([key, label]) => (
        <div className="countdownUnit" key={key}>
          <strong>{String(remaining[key]).padStart(2, '0')}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function AmbientParticles() {
  return (
    <div className="ambientParticles" aria-hidden="true">
      {Array.from({ length: 18 }, (_, index) => (
        <i
          key={index}
          style={
            {
              '--particle-x': `${(index * 17 + 7) % 96}%`,
              '--particle-delay': `${(index % 6) * -0.9}s`,
              '--particle-size': `${4 + (index % 4) * 2}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [entering, setEntering] = useState(false);
  const [found, setFound] = useState<string[]>([]);
  const [avatar, setAvatar] = useState({ x: 10, y: 77 });
  const [gameMessage, setGameMessage] = useState(
    'Benício perdeu quatro ferraduras de lembrança pela fazendinha. Toque em uma delas para ele ir buscar.',
  );
  const [gameBusy, setGameBusy] = useState(false);
  const [rsvpSent, setRsvpSent] = useState(false);

  const complete = found.length === horseshoes.length;

  useEffect(() => {
    document.body.classList.toggle('inviteUnlocked', opened);
    return () => document.body.classList.remove('inviteUnlocked');
  }, [opened]);

  const enterInvite = () => {
    if (entering) return;
    setEntering(true);
    window.setTimeout(() => {
      setOpened(true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 1350);
  };

  const collectHorseshoe = (shoe: Horseshoe) => {
    if (gameBusy || found.includes(shoe.id) || complete) return;
    setGameBusy(true);
    setGameMessage(`Benício viu uma ferradura ${shoe.label}. Ele está indo buscar!`);
    setAvatar({ x: shoe.x, y: shoe.y });

    window.setTimeout(() => {
      const next = [...found, shoe.id];
      setFound(next);
      setGameBusy(false);
      if (next.length === horseshoes.length) {
        setGameMessage('Missão cumprida! Todas as ferraduras voltaram para o pequeno vaqueiro.');
      } else {
        setGameMessage(`Boa! ${next.length} de ${horseshoes.length} encontradas. Procure a próxima.`);
      }
    }, 720);
  };

  const resetGame = () => {
    setFound([]);
    setAvatar({ x: 10, y: 77 });
    setGameBusy(false);
    setGameMessage(
      'Benício perdeu quatro ferraduras de lembrança pela fazendinha. Toque em uma delas para ele ir buscar.',
    );
  };

  const submitRsvp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRsvpSent(true);
  };

  return (
    <main>
      <section
        className={`openingExperience ${entering ? 'openingExperience--entering' : ''} ${
          opened ? 'openingExperience--gone' : ''
        }`}
        aria-hidden={opened}
      >
        <div className="openingPhoto" aria-hidden="true"><img src={photos.childHorse} alt="" /></div>
        <div className="openingSun" />
        <div className="openingVignette" />
        <AmbientParticles />
        <div className="openingBirds" aria-hidden="true"><span>⌁</span><span>⌁</span><span>⌁</span></div>
        <div className="openingFence" aria-hidden="true"><i /><i /><i /><i /></div>

        <motion.div
          className="openingContent"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: opened ? 0 : 1, y: opened ? -18 : 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          <span className="openingEyebrow">UM CONVITE DO CORAÇÃO DO SERTÃO</span>
          <div className="openingTitle">
            <small>A aventura do pequeno vaqueiro</small>
            <h1>{party.child}</h1>
          </div>
          <div className="openingMeta">
            <span><strong>{party.age}</strong> anos</span><i /><span>{party.date}</span>
          </div>
          <p>O cavalo já está selado, a porteira está fechada e falta só você para essa aventura começar.</p>
          <button className="enterButton" type="button" onClick={enterInvite} disabled={entering}>
            <span>{entering ? 'ABRINDO A PORTEIRA...' : 'ENTRAR NESSA AVENTURA'}</span>
            <small>toque para entrar no aniversário</small>
          </button>
        </motion.div>

        <div className="openingGate" aria-hidden="true">
          <div className="gatePanel gatePanel--left"><span /><span /><span /></div>
          <div className="gatePanel gatePanel--right"><span /><span /><span /></div>
          <div className="gatePost gatePost--left" /><div className="gatePost gatePost--right" />
        </div>

        {entering && (
          <motion.div className="openingTransitionText" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.55 }}>
            <Sparkles size={18} /><span>Bem-vindo ao mundo de Benício</span>
          </motion.div>
        )}
      </section>

      <div className={`inviteShell ${opened ? 'inviteShell--ready' : ''}`} aria-hidden={!opened}>
        <header className="hero" id="inicio">
          <div className="heroPhoto" aria-hidden="true"><img src={photos.farmRide} alt="" /></div>
          <div className="heroOverlay" /><AmbientParticles />
          <nav className="topbar" aria-label="Navegação do convite">
            <a className="brand" href="#inicio"><span>✦</span> Benício no Sertão</a>
            <div className="navLinks"><a href="#aventura">Aventura</a><a href="#presenca">Presença</a></div>
          </nav>
          <div className="heroContent">
            <span className="eyebrow">A PORTEIRA ABRIU</span>
            <h2>Você entrou na<span>aventura do Benício</span></h2>
            <p>Nosso pequeno vaqueiro vai completar <strong>{party.age} anos</strong> e preparou uma tarde cheia de cavalo, brincadeira e carinho para viver com quem faz parte da história dele.</p>
            <div className="heroActions"><a className="primaryAction" href="#aventura">Aceitar a missão</a><a className="secondaryAction" href="#presenca">Confirmar presença</a></div>
          </div>
          <div className="heroBadge"><small>O DONO DA FESTA</small><strong>{party.age}</strong><span>ANOS</span></div>
          <div className="heroGround" />
        </header>

        <section className="eventSection" aria-labelledby="event-title">
          <div className="sectionHeading">
            <span className="eyebrow eyebrow--brown">MARQUE NA FOLHINHA</span>
            <h2 id="event-title">O grande dia está chegando</h2>
            <p>Uma tarde de criança, fazenda, cavalo e muita história boa para contar.</p>
          </div>
          <div className="detailGrid">
            <article className="detailCard"><CalendarDays /><small>QUANDO</small><h3>24 de outubro</h3><p>Sábado · {party.time}</p></article>
            <article className="detailCard detailCard--featured"><MapPin /><small>ONDE</small><h3>{party.place}</h3><p>{party.address}</p></article>
            <article className="detailCard"><Heart /><small>CLIMA DA FESTA</small><h3>Infância no sertão</h3><p>Brincadeiras, bichos, natureza e muita alegria.</p></article>
          </div>
          <Countdown />
        </section>

        <section className="storySection">
          <div className="storyPhoto">
            <img src={photos.childHorse} alt="Criança vestida de pequeno vaqueiro montada em um cavalo" />
            <div className="storyPhotoLabel"><small>PEQUENO VAQUEIRO</small><strong>{party.child}</strong></div>
          </div>
          <div className="storyCopy">
            <span className="eyebrow eyebrow--gold">UMA MENSAGEM PARA VOCÊ</span>
            <h2>Essa aventura só fica completa com gente especial por perto.</h2>
            <p>Benício está preparando seu chapéu, cuidando do cavalo e contando os dias para receber cada convidado. Você foi chamado porque faz parte das lembranças que queremos guardar para sempre.</p>
            <blockquote>“Vem brincar comigo, conhecer meu cavalo e fazer parte do meu dia mais arretado!”</blockquote>
            <span className="signature">— Benício e família</span>
          </div>
        </section>

        <section className="momentsSection" aria-labelledby="moments-title">
          <div className="sectionHeading sectionHeading--light">
            <span className="eyebrow">UM POUQUINHO DO UNIVERSO DELE</span>
            <h2 id="moments-title">Cavalo, campo e infância</h2>
            <p>O tema nasce da amizade de uma criança com o universo da fazenda.</p>
          </div>
          <div className="momentGrid">
            <figure className="momentCard momentCard--wide"><img src={photos.childHorse} alt="Pequeno vaqueiro sobre um cavalo" /><figcaption>O pequeno vaqueiro</figcaption></figure>
            <figure className="momentCard"><img src={photos.horse} alt="Cavalo marrom preparado para uma cavalgada" /><figcaption>O companheiro de aventura</figcaption></figure>
            <figure className="momentCard"><img src={photos.farmRide} alt="Criança cavalgando em ambiente de fazenda" /><figcaption>Uma tarde no campo</figcaption></figure>
          </div>
        </section>

        <section className="gameSection" id="aventura" aria-labelledby="game-title">
          <div className="sectionHeading sectionHeading--light">
            <span className="eyebrow">MISSÃO DO PEQUENO VAQUEIRO</span>
            <h2 id="game-title">Encontre as ferraduras perdidas</h2>
            <p>Observe a fazendinha. Quando achar uma ferradura, toque nela e veja Benício ir até o lugar.</p>
          </div>
          <div className="gameShell">
            <div className="gameTopbar"><span><i className="liveDot" /> AVENTURA EM ANDAMENTO</span><strong>{found.length}/{horseshoes.length} encontradas</strong></div>
            <div className="farmScene">
              <img className="farmScenePhoto" src={photos.farmRide} alt="" aria-hidden="true" /><div className="farmSceneOverlay" />
              <div className="gameFence" aria-hidden="true"><i /><i /><i /></div>
              {horseshoes.map((shoe) => {
                const isFound = found.includes(shoe.id);
                return (
                  <button key={shoe.id} className={`horseshoe ${isFound ? 'horseshoe--found' : ''}`} type="button" aria-label={`Ferradura ${shoe.label}${isFound ? ', já encontrada' : ''}`} style={{ left: `${shoe.x}%`, top: `${shoe.y}%` }} onClick={() => collectHorseshoe(shoe)} disabled={isFound || gameBusy || complete}>
                    <span />
                  </button>
                );
              })}
              <motion.div className="gameAvatar" animate={{ left: `${avatar.x}%`, top: `${avatar.y}%` }} transition={{ type: 'spring', stiffness: 75, damping: 18 }}>
                <div className={`avatarPhoto ${gameBusy ? 'avatarPhoto--moving' : ''}`}><img src={photos.childHorse} alt="" /></div>
                <span>{gameBusy ? 'Indo buscar!' : complete ? 'Conseguimos!' : 'Benício'}</span>
              </motion.div>
              <AnimatePresence>
                {complete && (
                  <motion.div className="gameConfetti" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-hidden="true">
                    {confetti.map((piece) => <i key={piece.id} style={{ left: piece.left, animationDelay: piece.delay }} />)}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="gameStatus" aria-live="polite">
              <div className="gameStatusIcon">{complete ? '🏆' : '🐴'}</div>
              <div><strong>{complete ? 'Missão cumprida!' : 'Benício está procurando'}</strong><p>{gameMessage}</p></div>
              <button type="button" onClick={resetGame}>Recomeçar</button>
            </div>
          </div>
          <AnimatePresence>
            {complete && (
              <motion.div className="missionSuccess" initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }}>
                <Star /><div><small>VOCÊ FAZ PARTE DA TURMA</small><h3>As quatro ferraduras voltaram para o lugar!</h3><p>Agora a cavalgada do aniversário pode começar.</p></div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <section className="locationSection">
          <div className="locationCopy"><span className="eyebrow eyebrow--brown">DESTINO DA AVENTURA</span><h2>{party.place}</h2><p>{party.address}</p></div>
          <a className="routeButton" href="https://www.google.com/maps/search/?api=1&query=Ibimirim%20Pernambuco" target="_blank" rel="noreferrer"><Navigation size={18} />Abrir localização</a>
        </section>

        <section className="rsvpSection" id="presenca" aria-labelledby="rsvp-title">
          <div className="rsvpBackdrop" aria-hidden="true"><img src={photos.horse} alt="" /></div><div className="rsvpOverlay" />
          <div className="rsvpCard">
            <div className="rsvpCopy">
              <span className="eyebrow">CONFIRMAÇÃO DE PRESENÇA</span><h2 id="rsvp-title">Vai ser bom demais ter você com a gente!</h2><p>Confirme sua presença para a família preparar tudo com carinho.</p>
              <ul><li><span>✓</span> {party.date}</li><li><span>✓</span> A partir das {party.time}</li><li><span>✓</span> Festa infantil no {party.place}</li></ul>
            </div>
            {rsvpSent ? (
              <div className="rsvpSuccess" role="status"><Sparkles /><h3>Presença confirmada!</h3><p>Seu nome entrou na lista da cavalgada de Benício. Nos vemos na festa!</p><button type="button" onClick={() => setRsvpSent(false)}>Corrigir resposta</button></div>
            ) : (
              <form className="rsvpForm" onSubmit={submitRsvp}>
                <label>Nome do convidado<input name="name" type="text" placeholder="Como podemos chamar você?" required /></label>
                <label>Quantas pessoas irão?<select name="guests" defaultValue="1" required><option value="1">1 pessoa</option><option value="2">2 pessoas</option><option value="3">3 pessoas</option><option value="4">4 pessoas</option></select></label>
                <label>Deixe um recado para o Benício <span>(opcional)</span><textarea name="message" rows={3} placeholder="Escreva uma mensagem carinhosa" /></label>
                <button className="confirmButton" type="submit">Confirmar minha presença</button>
              </form>
            )}
          </div>
        </section>

        <section className="closingSection">
          <div className="closingPhoto"><img src={photos.childHorse} alt="Pequeno vaqueiro montado no cavalo" /></div><div className="closingOverlay" />
          <div className="closingCopy"><span className="eyebrow">ATÉ O GRANDE DIA</span><h2>Benício e seu cavalo já estão esperando por você.</h2><p>Obrigado por fazer parte dessa aventura.</p><a href="#inicio">Voltar ao início</a></div>
        </section>

        <footer><span>Feito com carinho para a aventura de {party.child}.</span><small>Desenvolvido por Anderson Jhonatan da K2 Tech</small></footer>
      </div>
    </main>
  );
}
