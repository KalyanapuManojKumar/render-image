// import type { NewsRequest } from "../validators/news.validator.js";

// export function generateNewsTemplate({
//   title,
//   summary,
//   image,
// }: NewsRequest): string {
//   return `
// <!DOCTYPE html>
// <html lang="en">
// <head>

// <meta charset="UTF-8" />
// <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">

// <style>

// *{
// margin:0;
// padding:0;
// box-sizing:border-box;
// }

// body{

// width:1080px;
// height:1350px;

// font-family:'Poppins',sans-serif;

// background:#111;

// overflow:hidden;

// }

// .container{

// position:relative;

// width:100%;
// height:100%;

// overflow:hidden;

// }

// .image{

// position:absolute;

// top:0;
// left:0;

// width:100%;
// height:100%;

// }

// .image img{

// width:100%;
// height:100%;

// object-fit:cover;

// }

// .overlay{

// position:absolute;

// inset:0;

// background:
// linear-gradient(
// 180deg,
// rgba(0,0,0,.15) 0%,
// rgba(0,0,0,.15) 30%,
// rgba(0,0,0,.55) 70%,
// rgba(0,0,0,.92) 100%
// );

// }

// .header{

// position:absolute;

// top:40px;
// left:40px;
// right:40px;

// display:flex;

// justify-content:space-between;

// align-items:center;

// z-index:2;

// }

// .logo{

// background:#ffffff;

// color:#000;

// padding:16px 26px;

// border-radius:50px;

// font-size:26px;

// font-weight:800;

// letter-spacing:1px;

// }

// .page{

// background:rgba(255,255,255,.18);

// color:white;

// padding:10px 20px;

// border-radius:999px;

// font-size:24px;

// font-weight:600;

// backdrop-filter:blur(12px);

// }

// .content{

// position:absolute;

// left:50px;
// right:50px;
// bottom:60px;

// z-index:2;

// }

// .category{

// display:inline-block;

// background:#ff3b30;

// color:white;

// padding:10px 22px;

// border-radius:999px;

// font-size:24px;

// font-weight:700;

// margin-bottom:30px;

// }

// .title{

// display:inline;

// background:white;

// color:#111;

// font-size:68px;

// font-weight:800;

// line-height:1.18;

// padding:10px 18px;

// box-decoration-break:clone;
// -webkit-box-decoration-break:clone;

// }

// .summary{

// margin-top:45px;

// font-size:34px;

// font-weight:500;

// line-height:1.55;

// color:white;

// display:-webkit-box;

// -webkit-line-clamp:3;
// -webkit-box-orient:vertical;

// overflow:hidden;

// }

// .footer{

// margin-top:45px;

// display:flex;

// justify-content:space-between;

// align-items:center;

// color:white;

// font-size:26px;

// font-weight:600;

// opacity:.9;

// }

// </style>

// </head>

// <body>

// <div class="container">

// <div class="image">
// <img src="${image}">
// </div>

// <div class="overlay"></div>

// <div class="header">

// <div class="logo">
// AI NEWS
// </div>

// <div class="page">
// 1 / 1
// </div>

// </div>

// <div class="content">

// <div class="category">
// BREAKING NEWS
// </div>

// <h1 class="title">
// ${title}
// </h1>

// <p class="summary">
// ${summary}
// </p>

// <div class="footer">

// <span>
// www.ainews.com
// </span>

// <span>
// Powered by AI
// </span>

// </div>

// </div>

// </div>

// </body>

// </html>
// `;
// }

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

<meta charset="UTF-8" />

<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{

width:1080px;
height:1350px;

font-family:'Poppins',sans-serif;

background:#111;

overflow:hidden;

}

.container{

position:relative;

width:100%;
height:100%;

overflow:hidden;

}

.image{

position:absolute;

top:0;
left:0;

width:100%;
height:100%;

}

.image img{

width:100%;
height:100%;

object-fit:cover;

}

.overlay{

position:absolute;

inset:0;

background:linear-gradient(

180deg,

rgba(0,0,0,.05) 0%,

rgba(0,0,0,.12) 35%,

rgba(0,0,0,.45) 60%,

rgba(0,0,0,.82) 80%,

rgba(0,0,0,.97) 100%

);

}

.header{

position:absolute;

top:38px;
left:38px;
right:38px;

display:flex;

justify-content:space-between;

align-items:center;

z-index:5;

}

.logo{

background:#ffffff;

color:#111;

padding:14px 28px;

border-radius:999px;

font-size:28px;

font-weight:800;

letter-spacing:.5px;

}

.page{

background:rgba(255,255,255,.22);

backdrop-filter:blur(12px);

color:#fff;

padding:12px 20px;

border-radius:999px;

font-size:26px;

font-weight:700;

}

.content{

position:absolute;

left:48px;
right:48px;

bottom:85px;

z-index:5;

}

.category{

display:inline-block;

background:#ff3b30;

color:#fff;

padding:12px 22px;

border-radius:999px;

font-size:22px;

font-weight:700;

margin-bottom:22px;

}

.title{

display:-webkit-box;

-webkit-line-clamp:4;

-webkit-box-orient:vertical;

overflow:hidden;

font-size:56px;

font-weight:800;

line-height:1.18;

color:#111;

background:#fff;

padding:10px 16px;

box-decoration-break:clone;
-webkit-box-decoration-break:clone;

}

.summary{

margin-top:26px;

font-size:30px;

line-height:1.45;

font-weight:500;

color:#fff;

text-shadow:0 2px 8px rgba(0,0,0,.8);

display:-webkit-box;

-webkit-line-clamp:3;

-webkit-box-orient:vertical;

overflow:hidden;

max-width:940px;

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
1 / 1
</div>

</div>

<div class="content">

<div class="category">
BREAKING NEWS
</div>

<div class="title">
${title}
</div>

<div class="summary">
${summary}
</div>

</div>

</div>

</body>

</html>
`;
}