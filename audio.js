window.onload=function(){
  (function(){
    var info = document.getElementsByClassName('info')[0];
    var music = document.getElementsByTagName('audio')[0];
    var player = document.getElementById('player');

    var actions = {
      'play': function(){
        music.play();
        info.style.display= " ";
      },
      'stop': function(){
        music.pause();
      },
      'volup': function(){
        if(music.volume !== 1 ){
          music.volume += 0.1;
    }
      },
      'voldown': function(){
        if(music.volume !== 1.3877787807814457e-16){
            music.volume -= 0.1;
        }
      }
    };
    player.addEventListener('click', function(e){
      if(e){
        type = e.target.id;
        actions[type]();
      }
    });

  })()
}
