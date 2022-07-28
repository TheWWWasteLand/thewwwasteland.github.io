function nextPage() {
  var i, one, two;
  i = document.getElementById('page-i');
  one = document.getElementById('page-2');
  two = document.getElementById('page-3')
  if (i.getAttribute('style') != "display: none;") {
    i.style.display="none";
    one.style.display="block";
    document.getElementById('add-1').style.display="none";
    document.getElementById('add-2').classList.add('hidden');
    document.getElementById('add-3').classList.add('hidden');
  }
  else if (one.getAttribute('style') == "display: block;") {
    one.style.display="none";
    two.style.display="block";
  }
};

function prevPage() {
  var i, one, two;
  i = document.getElementById('page-i');
  one = document.getElementById('page-2');
  two = document.getElementById('page-3')
  if (one.getAttribute('style') == "display: block;") {
    one.style.display="none";
    i.style.display="block";
  }
  else if (two.getAttribute('style') == "display: block;") {
    two.style.display="none";
    one.style.display="block";
  }
};

function finalVer() {
  var i, one, two;
  i = document.getElementById('page-i');
  one = document.getElementById('page-2');
  two = document.getElementById('page-3')
  if (i.getAttribute('style') != "display: none;") {
    document.getElementById("rdg-1").style.display="inline";
  }
  else if (one.getAttribute('style') == "display: block;") {
    document.getElemenyById('add-1').style.display="inline";
    document.getElementById('rdg-2').classList.add('total-del');
    document.getElementById('note-1').style.display="block";
    document.getElementById('note-2').style.display="block";
    document.getElementById('del-4').classList.add('line-del');
    document.getElementById('del-5').classList.add('line-del');
    document.getElementById('del-6').classList.add('line-del');    
    document.getElementById('del-7.1').classList.add('line-del');
    document.getElementById('del-7.2').classList.add('line-del');
    document.getElementById('del-9').classList.add('line-del');
    document.getElementById('del-8.1').classList.add('line-del');
    document.getElementById('del-8.2').classList.add('line-del');
    document.getElementById('del-10').classList.add('line-del');
    document.getElementById('add-2').classList.remove('hidden');
    document.getElementById('add-3').classList.remove('hidden');
  }
  else if (two.getAttribute('style') == "display: block;") {
    const arrow = document.createElement("img");
    arrow.setAttribute('src', 'https://thewwwasteland.github.io/images/arrow1.png');
    arrow.setAttribute('id', 'back-1');
    document.body.appendChild(arrow);
  }
};

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - 1100 - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}
