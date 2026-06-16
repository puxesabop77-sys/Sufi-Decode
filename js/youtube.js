/* =====================================
   SUFIDECODE YOUTUBE ENGINE V1
===================================== */

(function(){

const container =
document.getElementById(
"youtube-videos"
);

if(!container) return;

async function loadVideos(){

try{

container.innerHTML =
`
<div class="yt-loading">
Loading Investigations...
</div>
`;

const response =
await fetch(
CONFIG.youtube.apiEndpoint
);

if(!response.ok){

throw new Error(
"Failed to fetch videos"
);

}

const videos =
await response.json();

renderVideos(videos);

}catch(error){

console.error(error);

container.innerHTML =
`
<div class="yt-error">
Unable to load videos.
</div>
`;

}

}

function renderVideos(videos){

container.innerHTML = "";

videos
.slice(
0,
CONFIG.youtube.maxResults
)
.forEach(video=>{

const card =
document.createElement("div");

card.className =
"yt-card";

card.innerHTML =

`
<a
href="https://youtube.com/watch?v=${video.id}"
target="_blank"
>

<img
src="${video.thumbnail}"
alt="${video.title}"
>

<div class="yt-content">

<h3>
${video.title}
</h3>

<p>
${video.date}
</p>

</div>

</a>
`;

container.appendChild(card);

});

}

loadVideos();

})();
