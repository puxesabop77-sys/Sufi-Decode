/* =====================================
   SUFIDECODE TRUTH LAB ENGINE V1
===================================== */

(function(){

const searchInput =
document.getElementById(
"truth-search"
);

const searchBtn =
document.getElementById(
"truth-search-btn"
);

const resultBox =
document.getElementById(
"truth-result"
);

if(
!searchInput ||
!searchBtn ||
!resultBox
) return;

// =====================================
// SAMPLE KNOWLEDGE BASE
// =====================================

const database = [

{
keywords:[
"fake",
"edited",
"viral"
],
score:25,
verdict:"Likely Fake"
},

{
keywords:[
"misleading",
"out of context"
],
score:55,
verdict:"Misleading"
},

{
keywords:[
"verified",
"official",
"confirmed"
],
score:92,
verdict:"Verified"
}

];

// =====================================
// ANALYZE CLAIM
// =====================================

function analyzeClaim(claim){

claim =
claim.toLowerCase();

let bestResult = {

score:
CONFIG.truthMeterDefault,

verdict:
"Needs Investigation"

};

database.forEach(item=>{

item.keywords.forEach(word=>{

if(
claim.includes(word)
){

bestResult = {

score:item.score,

verdict:item.verdict

};

}

});

});

return bestResult;

}

// =====================================
// RENDER RESULT
// =====================================

function showResult(data){

resultBox.innerHTML =

`
<div class="truth-card">

<h3>
Investigation Result
</h3>

<div class="truth-score">

${data.score}%

</div>

<p>

${data.verdict}

</p>

</div>
`;

}

// =====================================
// SEARCH EVENT
// =====================================

searchBtn.addEventListener(
"click",
()=>{

const claim =
searchInput.value.trim();

if(!claim){

resultBox.innerHTML =

`
<div class="truth-warning">

Please enter a claim.

</div>
`;

return;

}

const result =
analyzeClaim(claim);

showResult(result);

}
);

// ENTER KEY SUPPORT

searchInput.addEventListener(
"keydown",
(e)=>{

if(
e.key === "Enter"
){

searchBtn.click();

}

}
);

})();
