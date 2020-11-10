var engine_sound;
function fn1(btn)
{
    bool_check_div = document.getElementById('bool_check');
    bool_check = parseInt(bool_check_div.value);
    track = document.getElementById('track');
    car = document.getElementById('car');
    wheel1_img = document.getElementById('wheel1_img');
    wheel2_img = document.getElementById('wheel2_img');
    if (bool_check == 0)
    {
        track.style.animation = 'moveCarFunction linear 13s infinite';
        car.style.animation = 'bounceFunction linear .3s infinite';
        wheel1_img.style.animation = 'rotateWheelFunction linear 0.6s infinite';
        wheel2_img.style.animation = 'rotateWheelFunction linear 0.6s infinite';
        bool_check_div.value = '1';
        btn.innerHTML = 'Stop Car';
        engine_sound = document.createElement('audio');
        engine_sound.id = 'engine_sound_element';
        engine_sound.setAttribute('src','engine_sound.mp3');
        engine_sound.loop = true;
        engine_sound.play();
    }
    else
    {
        track.style.animation = 'moveCarFunction linear 0.1s 1s';
        car.style.animation = 'bounceFunction linear .1s 1s';
        wheel1_img.style.animation = 'rotateWheelFunction linear 0.1s 1s';
        wheel2_img.style.animation = 'rotateWheelFunction linear 0.1s 1s';
        bool_check_div.value = '0';
        btn.innerHTML = 'Start Car';
        engine_sound.pause();
    }
}