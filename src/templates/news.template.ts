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
rgba(0,0,0,.08) 0%,
rgba(0,0,0,.15) 35%,
rgba(0,0,0,.45) 65%,
rgba(0,0,0,.88) 100%
);

}

.top{

position:absolute;

top:40px;
left:40px;
right:40px;

display:flex;

justify-content:space-between;

align-items:center;

z-index:10;

}

.logo{

background:white;

padding:18px 34px;

border-radius:999px;

font-size:28px;

font-weight:800;

color:#111;

}

.page{

padding:12px 22px;

border-radius:999px;

background:rgba(255,255,255,.18);

backdrop-filter:blur(10px);

color:white;

font-size:26px;

font-weight:700;

}

.content{

position:absolute;

left:45px;
right:45px;
bottom:70px;

z-index:20;

}

.category{

display:inline-block;

margin-bottom:28px;

padding:12px 24px;

background:#ff3b30;

border-radius:999px;

color:white;

font-size:24px;

font-weight:700;

}

.title{

font-size:72px;

font-weight:800;

line-height:1.18;

color:#111;

}

.title span{

display:inline;

background:white;

padding:8px 18px;

box-decoration-break:clone;
-webkit-box-decoration-break:clone;

}

.summary{

margin-top:40px;

font-size:36px;

line-height:1.6;

font-weight:500;

color:white;

display:-webkit-box;

-webkit-box-orient:vertical;

-webkit-line-clamp:3;

overflow:hidden;

text-shadow:
0 2px 8px rgba(0,0,0,.45);

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

<div class="logo">
AI NEWS
</div>

<div class="page">
1/1
</div>

</div>

<div class="content">

<div class="category">
BREAKING NEWS
</div>

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