function nextPage() {
  document.getElementById('page-i').style.display="none";
  document.getElementById('page-2').style.display="block";
};

function finalVer() {
  document.getElementById('rdg-2').classList.add('total-del');
  document.getElementById('note-1').style.display="block";
  document.getElementById('del-4').style.textDecoration = "line-through";
  document.getElementById('del-5').style.textDecoration = "line-through";
  document.getElementById('del-6').style.textDecoration = "line-through";
}
