function nextPage() {
  var i, one, two, three, four, five;
  i = document.getElementById('page-i');
  one = document.getElementById('page-2');
  two = document.getElementById('page-3');
  three = document.getElementById('page-4');
  four = document.getElementById('page-5');
  five = document.getElementById('page-6')
  if (i.getAttribute('style') != "display: none;") {
    i.style.display="none";
    one.style.display="block";
    document.getElementById('prev').style.display="block";
    document.getElementById('add-1').classList.add('hidden');
    document.getElementById('add-2a').classList.add('hidden');
    document.getElementById('add-2b').classList.add('hidden');
    document.getElementById('add-2c').classList.add('hidden');
    document.getElementById('add-3').classList.add('hidden');
    document.getElementById('add-4').classList.add('hidden');
  }
  else if (one.getAttribute('style') == "display: block;") {
    one.style.display="none";
    two.style.display="block";
  }
  else if (two.getAttribute('style') == "display: block;") {
    two.style.display="none";
    document.getElementById("back-1").remove();
    three.style.display="block";
  }
  else if (three.getAttribute('style') == "display: block;") {
    three.style.display="none";
    four.style.display="block";
  }
  else if (four.getAttribute('style') == "display: block;") {
    four.style.display="none";
    five.style.display="block";
  }
};

function prevPage() {
  var i, one, two, three, four, five;;
  i = document.getElementById('page-i');
  one = document.getElementById('page-2');
  two = document.getElementById('page-3');
  three = document.getElementById('page-4');
  four = document.getElementById('page-5');
  five = document.getElementById('page-6')
  if (one.getAttribute('style') == "display: block;") {
    one.style.display="none";
    i.style.display="block";
    document.getElementById('prev').style.display="none";
  }
  else if (two.getAttribute('style') == "display: block;") {
    two.style.display="none";
    document.getElementById("back-1").remove();
    one.style.display="block";
  }
  else if (three.getAttribute('style') == "display: block;") {
    three.style.display="none";
    two.style.display="block";
  }
  else if (four.getAttribute('style') == "display: block;") {
    four.style.display="none";
    three.style.display="block";
  }
  else if (five.getAttribute('style') == "display: block;") {
    five.style.display="none";
    four.style.display="block";
  }
};

function finalVer() {
  var i, one, two;
  i = document.getElementById('page-i');
  one = document.getElementById('page-2');
  two = document.getElementById('page-3');
  document.getElementById('selectAuthors').classList.remove('hidden');
  if (i.getAttribute('style') != "display: none;") {
    document.getElementById("rdg-1").style.display="inline";
  }
  else if (one.getAttribute('style') == "display: block;") {
    document.getElementById('lg-1').classList.toggle('highlight');
    document.getElementById('add-1').classList.toggle('hidden');
    document.getElementById('add-2a').classList.toggle('hidden');
    document.getElementById('add-2b').classList.toggle('hidden');
    document.getElementById('add-2c').classList.toggle('hidden');
    document.getElementById('add-3').classList.toggle('hidden');
    document.getElementById('add-4').classList.toggle('hidden');
    document.getElementById('rdg-2').classList.toggle('total-del');
    document.getElementById('del-4').classList.toggle('line-del');
    document.getElementById('del-5').classList.toggle('line-del');
    document.getElementById('del-6a').classList.toggle('line-del'); 
    document.getElementById('del-6b').classList.toggle('line-del');        
    document.getElementById('del-6c').classList.toggle('line-del');        
    document.getElementById('del-6d').classList.toggle('line-del');        
    document.getElementById('del-7a').classList.toggle('line-del');
    document.getElementById('del-7b').classList.toggle('line-del');
    document.getElementById('del-9').classList.toggle('line-del');
    document.getElementById('del-8a').classList.toggle('line-del');
    document.getElementById('del-8b').classList.toggle('line-del');
    document.getElementById('del-10').classList.toggle('line-del');
    document.getElementById('del-11').classList.toggle('line-del');
    document.getElementById('note-1').style.display="block";
    document.getElementById('note-2').style.display="block";
    document.getElementById('note-3').style.display="block";
    document.getElementById('note-4').style.display="block";
  }
  else if (two.getAttribute('style') == "display: block;") {
    const arrow = document.createElement("img");
    arrow.setAttribute('src', 'https://thewwwasteland.github.io/images/arrow1.png');
    arrow.setAttribute('id', 'back-1');
    document.body.appendChild(arrow);
  }
};

function closeList() {
  document.getElementById('selectAutList').classList.toggle('hidden');
};

function lens() {
  var i, one, two, three;
  i = document.getElementById('page-i');
  one = document.getElementById('page-2');
  two = document.getElementById('page-3');
  three = document.getElementById('page-4')
  if (i.getAttribute('style') != "display: none;") {
    magnify('page-i-pic', 3);
  }
  else if (one.getAttribute('style') == "display: block;") {
    magnify('page-1-pic', 3);
  }
  else if (two.getAttribute('style') == "display: block;") {
    magnify('page-2-pic', 3);
  }
  else if (three.getAttribute('style') == "display: block;") {
    magnify('page-3-pic', 3);
  }
};

function sec() {
  document.getElementById('secList').classList.toggle('hidden');
};
function page() {
  document.getElementById('pageList').classList.toggle('hidden');
};

function TEliot() {
  var i, one, two, three, four, five;;
  i = document.getElementById('page-i');
  one = document.getElementById('page-2');
  two = document.getElementById('page-3');
  three = document.getElementById('page-4');
  four = document.getElementById('page-5');
  five = document.getElementById('page-6')
  if (i.getAttribute('style') != "display: none;") {
    const rdg1 = document.getElementById('rdg-1');
    if (rdg1.getAttribute('style') == "inline") {
      rdg1.style.display="none";
    }
    else {
      rdg1.style.display="inline";
    }
  }
}  

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
