(async function(){

const imageList =
Object.values(ASSETS.images);

const promises =
imageList.map(src => {

return new Promise(resolve => {

const img = new Image();

img.onload = resolve;
img.onerror = resolve;

img.src = src;

});

});

await Promise.all(promises);

console.log(
"All images preloaded"
);

})();
