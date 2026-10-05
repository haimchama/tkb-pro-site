/* Renders the "Our apps" grid and footer privacy links from /apps.json. */
(function(){
  var grid=document.getElementById('app-grid'), foot=document.getElementById('foot-links');
  if(!grid) return;
  function el(t,c,x){var e=document.createElement(t); if(c)e.className=c; if(x!=null)e.textContent=x; return e;}
  fetch('/apps.json').then(function(r){return r.json();}).then(function(apps){
    grid.textContent=''; foot&&(foot.textContent='');
    apps.forEach(function(a){
      var card=el('a','card app'); card.href=a.page;
      var head=el('div','head'), img=new Image(); img.src=a.icon; img.alt=''; img.width=76; img.height=76;
      head.appendChild(img); head.appendChild(el('h3',null,a.name));
      var chips=el('div','chips');
      (a.platforms||[]).forEach(function(p){chips.appendChild(el('span','chip',p));});
      var live=a.status==='live', testing=a.status==='testing';
      var st=el('span','chip '+(live?'live':'status'), live?'Available now':testing?'In testing on Google Play':'Coming soon to Google Play');
      chips.appendChild(st);
      card.appendChild(head); card.appendChild(el('p',null,a.pitch)); card.appendChild(chips);
      grid.appendChild(card);
      if(foot&&a.privacy){var li=el('li'),l=el('a',null,a.name+' privacy policy'); l.href=a.privacy; li.appendChild(l); foot.appendChild(li);}
    });
    grid.appendChild(el('div','card next','Next game: in the workshop'));
  }).catch(function(){grid.innerHTML='<p>Could not load the app list. <a href="/zen-room/">Open Zen Room</a>.</p>';});
})();
