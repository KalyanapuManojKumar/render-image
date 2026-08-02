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

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{

    width:1080px;
    height:1080px;

    display:flex;
    justify-content:center;
    align-items:center;

    background:#f5f5f5;

    font-family:"Poppins",sans-serif;

}

.container{

    width:1000px;
    height:1000px;

    background:#ffffff;

    border-radius:32px;

    overflow:hidden;

    display:flex;

    flex-direction:column;

    box-shadow:
    0 30px 70px rgba(0,0,0,.25);

}

.image{

    height:58%;

    overflow:hidden;

    position:relative;

}

.image img{

    width:100%;
    height:100%;

    object-fit:cover;

}

.image::after{

    content:"";

    position:absolute;

    left:0;
    right:0;
    bottom:0;

    height:180px;

    background:

    linear-gradient(
        transparent,
        rgba(0,0,0,.55)
    );

}

.content{

    flex:1;

    display:flex;

    flex-direction:column;

    justify-content:space-between;

    padding:50px;

}

.title{

    font-size:48px;

    line-height:1.25;

    font-weight:700;

    color:#111827;

    display:-webkit-box;

    -webkit-line-clamp:3;

    -webkit-box-orient:vertical;

    overflow:hidden;

}

.summary{

    margin-top:30px;

    font-size:28px;

    line-height:1.7;

    color:#4b5563;

    display:-webkit-box;

    -webkit-line-clamp:5;

    -webkit-box-orient:vertical;

    overflow:hidden;

}

.footer{

    display:flex;

    justify-content:space-between;

    align-items:center;

}

.badge{

    background:#2563eb;

    color:white;

    padding:12px 24px;

    border-radius:999px;

    font-size:22px;

    font-weight:700;

}

.brand{

    font-size:24px;

    color:#6b7280;

    font-weight:600;

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

    <div class="content">

        <div>

            <h1 class="title">

                ${title}

            </h1>

            <p class="summary">

                ${summary}

            </p>

        </div>

        <div class="footer">

            <span class="badge">

                BREAKING NEWS

            </span>

            <span class="brand">

                AI NEWS

            </span>

        </div>

    </div>

</div>

</body>

</html>
`;
}