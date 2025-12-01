const img = document.getElementById("image");
// console.log(img);
if(img.src=="http://127.0.0.1:5500/JavaScript/ImageEditor/index.html"){
    document.getElementById("image").style.display = "none"
}
// Shortcut to apply ternary operator using && instead of ?

/* document.getElementById("image").src ===
  "http://127.0.0.1:5500/JavaScript/ImageEditor/index.html"?
  (document.getElementById("image").style.display = "none"):"";*/

let b = 1,
  c = 1,
  gs = 0,
  s = 0,
  i = 0;

// document.getElementById("image").src ===
//   "http://127.0.0.1:5500/JavaScript/ImageEditor/index.html" &&
//   (document.getElementById("image").style.display = "none");

function uploadImage() {
  const file = document.getElementById("upload").files[0];
  const fileURL = URL.createObjectURL(file);

  document.getElementById("image").src = fileURL;
  document.getElementById("image").style.display = "block";

  document.getElementById("uploadlabel").style.display = "none";
  applyFilter()
}

function applyFilter() {
  document.getElementById(
    "image"
  ).style.filter = `brightness(${b}) contrast(${c}) grayscale(${gs}) sepia(${s}) invert(${i}) `;
}

function changeBrightness() {
  const value = document.getElementById("Brightness").value;
  b = (value * 2) / 100;
   applyFilter()
  // document.getElementById("image").style.filter=`brightness(${value*2/100})`;
}
function changeContrast() {
  const value = document.getElementById("Contrast").value;
  c = (value * 2) / 100;
   applyFilter()
  // document.getElementById("image").style.filter=`contrast(${value*2/100})`;
}

function changegrayScale() {
  const value = document.getElementById("grayScale").value;
  gs=value;
   applyFilter()
//   document.getElementById("image").style.filter = `grayscale(${value}%)`;
}

function changesepia() {
  const value = document.getElementById("sepia").value;
  s=(value * 2) / 100
//   document.getElementById("image").style.filter = `sepia(${(value * 2) / 100})`;
}

function changesaturate() {
  const value = document.getElementById("saturate").value;
  document.getElementById("image").style.filter = `saturate(${
    (value * 2) / 100
  })`;
}

function changehueRotate() {
  const value = document.getElementById("hueRotate").value;
  document.getElementById("image").style.filter = `hue-rotate(${
    (value * 2) / 100
  })`;
}

function changeblur() {
  const value = document.getElementById("blur").value;
  document.getElementById("image").style.filter = `blur(${(value * 2) / 100})`;
}

function changeinvert() {
  const value = document.getElementById("invert").value;
  document.getElementById("image").style.filter = `invert(${
    (value * 2) / 100
  })`;
}

function reset()
{
    b = 1,
  c = 1,
  gs = 0,
  s = 0,
  i = 0;
  applyFilter();
   document.getElementById("grayScale").value="50";
    document.getElementById("Contrast").value="50";
    document.getElementById("grayScale").value="0";
    document.getElementById("sepia").value="0";
    document.getElementById("invert").value="0";;

}

function download(){
    if(img.src=="http://127.0.0.1:5500/JavaScript/ImageEditor/index.html"){
 alert("Please upload the image first");
 return;
}

 if(!img.complete){
 alert("Image upload is in progress. Please Wait...");
 return;
}
const canvas=document.createElement("canvas")
const ctx=canvas.getContext("2d");
canvas.width=img.naturalWidth;
canvas.height=img.naturalHeight;
console.log("canvas.width,canvas.height");

const filter=getComputedStyle(img).filter;

ctx.filter=filter==="none"?"none":filter;
ctx.drawImage(img,0,0,canvas.width,canvas.height);

const dataURL = canvas.toDataURL("image/png");
const anchorTag=document.createElement("a");

anchorTag.href=dataURL;
anchorTag.download="editedImage.png";
document.body.appendChild(anchorTag);
anchorTag.click()
document.body.remove(anchorTag);
}
