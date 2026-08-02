import type { NewsRequest } from "../validators/news.validator.js";

export function generateNewsTemplate({
  title,
  summary,
  image,
}: NewsRequest): string {
  return `
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
/>

<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
}

html,
body{

width:1080px;
height:1350px;

overflow:hidden;

font-family:'Poppins',sans-serif;

background:#000;

}

.container{

position:relative;

width:1080px;
height:1350px;

overflow:hidden;

}

.container img{

position:absolute;

top:0;
left:0;

width:100%;
height:100%;

object-fit:cover;

}

.overlay{

position:absolute;

inset:0;

background:
linear-gradient(
180deg,
rgba(0,0,0,.35) 0%,
rgba(0,0,0,.05) 18%,
rgba(0,0,0,.05) 45%,
rgba(0,0,0,.55) 68%,
rgba(0,0,0,.95) 100%
);

}

/* ---- top bar ---- */

.top{

position:absolute;

top:36px;
left:36px;
right:36px;

display:flex;

justify-content:space-between;

align-items:center;

z-index:10;

}

.brand{

display:flex;

align-items:center;

gap:16px;

}

.brand-avatar{

width:64px;
height:64px;

border-radius:50%;

background:white;

display:flex;

align-items:center;

justify-content:center;

font-size:26px;

font-weight:800;

color:#111;

overflow:hidden;

}

.brand-name{

color:white;

font-size:30px;

font-weight:700;

text-shadow:0 2px 6px rgba(0,0,0,.5);

}

.top-right{

display:flex;

align-items:center;

gap:18px;

}

.page{

padding:10px 22px;

border-radius:999px;

background:rgba(0,0,0,.35);

border:1px solid rgba(255,255,255,.25);

color:white;

font-size:24px;

font-weight:600;

}

.menu-dots{

color:white;

font-size:32px;

font-weight:800;

line-height:1;

}

/* ---- decorative badge icon ---- */

.badge{

position:absolute;

top:160px;
left:40px;

width:96px;
height:96px;

border-radius:50%;

background:white;

z-index:10;

display:flex;

align-items:center;

justify-content:center;

gap:10px;

}

.badge .eye{

width:22px;
height:22px;

border-radius:50%;

background:#111;

}

/* ---- content ---- */

.content{

position:absolute;

left:42px;
right:42px;
bottom:70px;

z-index:20;

}

.title{

font-size:56px;

font-weight:800;

line-height:1.28;

color:#111;

}

.title span{

display:inline;

background:white;

padding:6px 16px;

box-decoration-break:clone;
-webkit-box-decoration-break:clone;

}

.summary{

margin-top:32px;

font-size:34px;

line-height:1.5;

font-weight:700;

color:white;

display:-webkit-box;

-webkit-box-orient:vertical;

-webkit-line-clamp:4;

overflow:hidden;

text-shadow:
0 2px 8px rgba(0,0,0,.5);

}

</style>

</head>

<body>

<div class="container">

<img
src="${image}"
alt="News"
/>

<div class="overlay"></div>

<div class="top">

<div class="brand">
<div class="brand-avatar">N</div>
<div class="brand-name">newsscoop</div>
</div>

<div class="top-right">
<div class="page">1/1</div>
<div class="menu-dots">&#8942;</div>
</div>

</div>

<div class="badge">
<div class="eye"></div>
<div class="eye"></div>
</div>

<div class="content">

<h1 class="title">
<span>${title}</span>
</h1>

<p class="summary">
${summary}
</p>

</div>

</div>

</body>

</html>
`;
}