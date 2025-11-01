/* styles.css — Futuristic dark + electric blue + violet theme */
/* Paste next to index.html in repo root. */

:root{
  --bg0:#03040a;
  --bg1:#071428;
  --glass: rgba(255,255,255,0.03);
  --glass-2: rgba(255,255,255,0.02);
  --muted:#9fb0c8;
  --accent1:#1f7bd9;
  --accent2:#7b3bff;
  --accent-grad: linear-gradient(90deg,var(--accent1),var(--accent2));
  --text:#e7f0ff;
  --radius:14px;
  --maxw:1100px;
}

/* Base */
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0; font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Poppins", Arial;
  background: radial-gradient(800px 300px at 10% 20%, rgba(31,123,217,0.05), transparent),
              radial-gradient(700px 250px at 90% 80%, rgba(123,59,255,0.03), transparent),
              linear-gradient(180deg,var(--bg0),var(--bg1));
  color:var(--text); -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale; line-height:1.45; overflow-x:hidden;
}

.bg-animated{
  position:fixed; inset:0; z-index:0; pointer-events:none;
  background: conic-gradient(from 120deg at 10% 10%, rgba(31,123,217,0.02), transparent 60%),
              radial-gradient(400px 140px at 80% 40%, rgba(123,59,255,0.03), transparent);
  filter: blur(60px) saturate(120%);
  transform: translateZ(0);
}

/* Wrapper */
.wrap{max-width:var(--maxw); padding:28px; margin:0 auto; position:relative; z-index:2}

/* Header */
.site-header{position:sticky; top:0; z-index:50; backdrop-filter: blur(8px); background: linear-gradient(180deg, rgba(2,6,20,0.45), rgba(2,6,20,0.18)); border-bottom:1px solid rgba(255,255,255,0.02)}
.site-header .wrap{display:flex; align-items:center; justify-content:space-between}
.brand{display:flex; gap:12px; align-items:center}
.logo{width:46px; height:46px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-weight:800; background:linear-gradient(135deg,var(--accent1),var(--accent2)); color:white; box-shadow:0 10px 30px rgba(31,123,217,0.08)}
.brand-text .brand-name{font-weight:700}
.brand-text .brand-sub{font-size:12px; color:var(--muted)}

.nav{display:flex; gap:14px; align-items:center}
.nav a{color:var(--text); text-decoration:none; padding:8px 10px; border-radius:10px; font-weight:600; font-size:14px}
.nav a:hover{background:rgba(255,255,255,0.02); transform:translateY(-3px)}
.nav .cta{border:1px solid rgba(255,255,255,0.04); padding:8px 12px;}

/* HERO */
.hero{padding:48px 0 18px}
.hero-grid{display:grid; grid-template-columns:1fr 380px; gap:28px; align-items:start}
.hero-title{font-family:Poppins, Inter; font-size:clamp(26px,5vw,40px); margin:0 0 12px; line-height:1.02}
.hero-title .accent{background:var(--accent-grad); -webkit-background-clip:text; background-clip:text; color:transparent}
.hero-lead{color:var(--muted); margin:0 0 18px}
.hero-actions{display:flex; gap:12px; margin-bottom:12px}

.btn{display:inline-block; text-decoration:none; border-radius:12px; padding:10px 16px; font-weight:700}
.primary{background:var(--accent1); background-image:linear-gradient(90deg,var(--accent1),var(--accent2)); color:white; box-shadow:0 12px 40px rgba(31,123,217,0.12)}
.ghost{background:transparent; border:1px solid rgba(255,255,255,0.06); color:var(--text)}
.small{padding:8px 10px; font-size:13px}

/* Hero right card */
.hero-card{border-radius:14px; padding:14px; background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border:1px solid rgba(255,255,255,0.04)}
.profile{display:flex; gap:12px; align-items:center}
.avatar{width:72px; height:72px; border-radius:12px; object-fit:cover; box-shadow:0 12px 40px rgba(8,18,40,0.6)}
.pname{font-weight:700}
.prole{color:var(--muted); font-size:13px}

/* Reel preview vertical thumbnails */
.reel-preview{display:flex; gap:10px; margin-top:12px; align-items:center}
.reel{display:block; width:110px; border-radius:12px; overflow:hidden; text-decoration:none; color:inherit; transition:transform .22s ease}
.reel img{width:100%; height:196px; object-fit:cover; display:block}
.reel-label{font-size:12px; color:var(--muted); margin-top:6px; text-align:center}
.reel:hover{transform:translateY(-8px)}

/* SERVICE CARDS */
.section{padding:44px 0}
.section-title{font-size:20px; margin:0 0 6px; font-weight:700}
.section-lead{color:var(--muted); margin:6px 0 18px}

.cards{display:grid; grid-template-columns:repeat(2,1fr); gap:18px; margin-top:18px}
.service-card{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); padding:18px; border-radius:14px; border:1px solid rgba(255,255,255,0.04); transition:transform .2s ease}
.service-card:hover{transform:translateY(-8px)}
.service-card .icon{font-size:22px; margin-bottom:10px}

/* WORK / REELS GRID (vertical tiles) */
.dark{background:linear-gradient(180deg, rgba(2,6,20,0.35), transparent); padding-top:36px}
.reels-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin-top:18px}
.reel-card{background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.005)); border-radius:12px; overflow:hidden; border:1px solid rgba(255,255,255,0.03); transition:transform .22s ease}
.reel-card:hover{transform:translateY(-10px)}
.reel-thumb{height:360px; overflow:hidden}
.reel-thumb img{width:100%; height:100%; object-fit:cover; display:block}
.reel-meta{padding:12px}
.meta-sub{color:var(--muted); font-size:13px; margin-top:6px}

/* ABOUT */
.about-grid{display:grid; grid-template-columns:1fr 360px; gap:20px; align-items:start}
.card{border-radius:12px}
.glass{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); padding:16px; border:1px solid rgba(255,255,255,0.04)}
.list{margin:12px 0 18px; padding-left:18px}
.wins{list-style:none; padding:0; margin:8px 0}
.skill-bars .bar{margin-top:10px; background:rgba(255,255,255,0.02); border-radius:10px; overflow:hidden}
.bar-name{display:block; font-weight:700; margin-bottom:6px; font-size:13px}
.bar-fill{height:10px; background:linear-gradient(90deg,var(--accent1),var(--accent2)); width:var(--w,50%); transition:width .8s ease}

/* CONTACT */
.contact-grid{display:grid; grid-template-columns:360px 1fr; gap:18px; margin-top:18px}
.contact-card a{color:var(--muted); text-decoration:none}
.contact-form label{display:block; margin-bottom:12px}
.contact-form span{display:block; font-weight:700; margin-bottom:6px}
.contact-form input, .contact-form textarea{width:100%; padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,0.04); background:transparent; color:var(--text)}

/* FOOTER */
.site-footer{padding:18px 0; border-top:1px solid rgba(255,255,255,0.02); margin-top:34px}
.footer-inner{display:flex; justify-content:space-between; align-items:center; gap:12px}

/* small screens */
@media (max-width:980px){
  .hero-grid{grid-template-columns:1fr; gap:18px}
  .reels-grid{grid-template-columns:repeat(2,1fr)}
  .about-grid{grid-template-columns:1fr}
  .cards{grid-template-columns:1fr}
  .contact-grid{grid-template-columns:1fr}
  .nav{display:none}
  .nav-toggle{display:block}
}

@media (max-width:520px){
  .reels-grid{grid-template-columns:1fr}
  .reel-thumb{height:420px}
  .reel img{height:340px}
  .reel{width:120px}
}
