document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.hunburger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('left-0');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

const xburger = document.getElementById('hello');

  xburger.addEventListener('click', () => {
      xburger.classList.toggle('active');
  });

  const budy = document.getElementById('budy');

  xburger.addEventListener('click', () => {
      budy.classList.toggle('overflow-hidden');
  });

  const togle = document.getElementById('wrraper');
  const swith = document.getElementById('switch-toggle');

  togle.addEventListener('click', () => {
    swith.classList.toggle('bg-white')
  })

  togle.addEventListener('click', () => {
    swith.classList.toggle('left-[35px]')
  })

  togle.addEventListener('click', () => {
    togle.classList.toggle('bg-space-green')
  })

  const togle1 = document.getElementById('wrraper1');
  const swith1 = document.getElementById('switch-toggle1');

  togle1.addEventListener('click', () => {
    swith1.classList.toggle('bg-white')
  })

  togle1.addEventListener('click', () => {
    swith1.classList.toggle('left-[35px]')
  })

  togle1.addEventListener('click', () => {
    togle1.classList.toggle('bg-space-green')
  })

  const togle2 = document.getElementById('wrraper2');
  const swith2 = document.getElementById('switch-toggle2');

  togle2.addEventListener('click', () => {
    swith2.classList.toggle('bg-white')
  })

  togle2.addEventListener('click', () => {
    swith2.classList.toggle('left-[35px]')
  })

  togle2.addEventListener('click', () => {
    togle2.classList.toggle('bg-space-green')
  })

  const togle3 = document.getElementById('wrraper3');
  const swith3 = document.getElementById('switch-toggle3');

  togle3.addEventListener('click', () => {
    swith3.classList.toggle('bg-white')
  })

  togle3.addEventListener('click', () => {
    swith3.classList.toggle('left-[35px]')
  })

  togle3.addEventListener('click', () => {
    togle3.classList.toggle('bg-space-green')
  })

  const togle4 = document.getElementById('wrraper4');
  const swith4 = document.getElementById('switch-toggle4');

  togle4.addEventListener('click', () => {
    swith4.classList.toggle('bg-white')
  })

  togle4.addEventListener('click', () => {
    swith4.classList.toggle('left-[35px]')
  })

  togle4.addEventListener('click', () => {
    togle4.classList.toggle('bg-space-green')
  })

  const togle5 = document.getElementById('wrraper5');
  const swith5 = document.getElementById('switch-toggle5');

  togle5.addEventListener('click', () => {
    swith5.classList.toggle('bg-white')
  })

  togle5.addEventListener('click', () => {
    swith5.classList.toggle('left-[35px]')
  })

  togle5.addEventListener('click', () => {
    togle5.classList.toggle('bg-space-green')
  })