// gonna try to do a screen cloak

function hide(){
  document.documentElement.style.visibility = 'hidden';
};

function show(){
  document.documentElement.style.visibility = 'visible';
};

function checkFocus(){
  if (document.hasFocus()){
    show();
  } else {
    hide();
  }
}

setInterval(checkFocus, 100);
