var projects = document.querySelector('.projects');
projects.addEventListener('click', function(e) {
  console.log(e.target.href);
  if (e.target.href) {
    var p = document.querySelector('#playground');
    var i = document.createElement('iframe');
    i.src = e.target.href;
    // i.style.height = window.outerHeight - (projects.offsetTop - p.offsetHeight);

    var ifr = p.querySelector('iframe');
    if (ifr) ifr.remove();
    p.append(i);
  }
  e.preventDefault();
});
