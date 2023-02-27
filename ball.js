var create = function(x,y,color){
  var div = document.createElement('div');
  div.id = 'ball';
  div.style.zIndex = '0';
  div.style.position = 'absolute';    
  div.style.left = x + 'px';    
  div.style.top = y + 'px';    
  div.style.width = '25px';    
  div.style.height = '25px';    
  div.style.borderRadius = '50%';
  div.style.background = color;    
  document.getElementsByTagName('body')[0].appendChild(div);
  return div;        
};

create(100, 50, 'red'); 
create(200, 100, 'green');
create(300, 150, 'blue'); 

setInterval(function() {
  for (var i = 0; i < 100; i++) {
    var x = Math.floor(Math.random() * 1000);
    var y = Math.floor(Math.random() * 1000);
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    create(x, y, color);
  }
}, 100); 