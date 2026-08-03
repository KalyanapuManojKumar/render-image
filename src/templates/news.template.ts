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

<meta charset="UTF-8"/>

<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
/>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link
href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
rel="stylesheet"
/>

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

font-family:"Poppins",sans-serif;

background:#000;

}

.container{

position:relative;

width:100%;
height:100%;

overflow:hidden;

}

.image{

position:absolute;

inset:0;

}

.image img{

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
rgba(0,0,0,0) 0%,
rgba(0,0,0,.10) 35%,
rgba(0,0,0,.45) 60%,
rgba(0,0,0,.80) 78%,
rgba(0,0,0,.96) 100%
);

}

.header{

position:absolute;

top:40px;
left:40px;
right:40px;

display:flex;

justify-content:space-between;

align-items:center;

z-index:20;

}

.logo{

background:white;

padding:14px 28px;

border-radius:50px;

font-size:24px;

font-weight:800;

color:#111;

letter-spacing:.5px;

}

.page{

background:rgba(255,255,255,.18);

backdrop-filter:blur(12px);

color:white;

padding:12px 22px;

border-radius:999px;

font-size:24px;

font-weight:700;

}

.content{

position:absolute;

left:50px;
right:50px;
bottom:100px;

z-index:10;

}

.title{

display:-webkit-box;

-webkit-line-clamp:3;

-webkit-box-orient:vertical;

overflow:hidden;

font-size:52px;

font-weight:800;

line-height:1.28;

color:#111;

}

.title span{

background:white;

padding:8px 14px;

box-decoration-break:clone;
-webkit-box-decoration-break:clone;

}

.summary{

margin-top:26px;

font-size:26px;

font-weight:500;

line-height:1.5;

color:white;

text-shadow:
0 2px 10px rgba(0,0,0,.8);

display:-webkit-box;

-webkit-line-clamp:4;

-webkit-box-orient:vertical;

overflow:hidden;

max-width:900px;

}

</style>

</head>

<body>

<div class="container">

<div class="image">

<img
src="${image}"
alt="News"
/>

</div>

<div class="overlay"></div>

<div class="header">

<div class="logo">

AI NEWS

</div>

<div class="page">

1/1

</div>

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