window.onload=function(){
  (function(){
    var info = document.getElementsByClassName('info')[0];
    var music = document.getElementsByTagName('audio')[0];
    console.log(music, 'music')
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
        music.volume -= 0.1;
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
