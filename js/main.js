// Lien vers site du développeur sur les pages d'accueil

$('.developpeur span').click(function () {
  $('.developpeur').css('display', 'none');
});

// animation arrivée page accueil en fonction taille écran

var logo = $('.logoTest'),
  containerLogo = $('.logoOnLoad');


if ($('body').width() >= 581) { // Quand largeur écran supérieure ou égale à 581px
  logo.animate({
    width: '60%',
    left: '20%'
  }, 2500, function () {
    // Animation complete.
  });
  setTimeout(function () {
    containerLogo.fadeOut(800, function () { });
  }, 2000);
}

if ($('body').width() < 581) { // Quand largeur écran inférieure à 581px
  logo.animate({
    width: '100%',
    left: '0%'
  }, 2500, function () {
    // Animation complete.
  });
  setTimeout(function () {
    containerLogo.fadeOut(800, function () { });
  }, 2000);
}

// animation changement page

$('a').each(function () {
  if (location.hostname === this.hostname || !this.hostname.length) {

    var link = $(this).attr("href"),
      bouton = $('.boutonPied');

    if (link.match("^#")) {
      // Ne fait rien
    } else if (link.match("^javascript")) {
      // Ne fait rien
    }
    else {
      $(this).click(function (e) {
        e.preventDefault();
        $('html').addClass('fadeSiteOut');
        setTimeout(function () {
          window.location = link;
        }, 500);
      });
    }
  }
});

// ascenceur dynamique en fonction position scroll

window.onscroll = function (ev) {
  document.getElementById('cRetour').className = (window.pageYOffset > 300) ? 'cVisible' : 'cInvisible';
};

// Animation non agressive lors du clic d'un lien vers une ancre ( smooth scroll )

$("#cRetour").on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {
      window.location.hash = hash;
    });
  }
});

// HOVER SUR LE MENU UNIQUEMENT QUAND LARGEUR ECRAN SUPERIEURE A 1000px

if ($('body').width() > 1000) {
  function toggleDropdown(e) {
    const _d = $(e.target).closest('.dropdown'),
      _m = $('.dropdown-menu', _d);
    setTimeout(function () {
      const shouldOpen = e.type !== 'click' && _d.is(':hover');
      _m.toggleClass('show', shouldOpen);
      _d.toggleClass('show', shouldOpen);
      $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
    }, e.type === 'mouseleave' ? 50 : 0);
  }

  $('body')
    .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);
}

//  ALERT(S)

$('.anglais').click(function () {
  alert('Le site est en cours de traduction, come back soon !');
})
$('.boutonPied').click(function () {
  alert('La newsletter n\'est pas encore effective, nous mettons tout en oeuvre pour le faire au plus vite !');
})
$('.article a').click(function () {
  alert('Nous travaillons dur pour vous afficher au plus vite les dernières actualités liées au domaine hôtelier.');
})

const copyright = document.querySelector('.copyright h3');

if (copyright) {
  copyright.textContent = `${new Date().getFullYear()} ${copyright.textContent}`;
}


//  POP UP PUB

setTimeout(function () {
  $('#pub').css('display', 'inline-block');
}, 2500);
$('#pub span').click(function () {
  $('#pub').css('display', 'none');
});

//  CHRONO PUB
const chrono = document.getElementById("chrono");

if (chrono) {
  // paramétrer la date butoire
  const date = new Date();
  date.setDate(date.getDate() + 2);
  const countDownDate = date.getTime();


  var x = setInterval(function () { // mise a jour du compteur toutes les secondes


    var now = new Date().getTime();  // paramétrer la date et l'heure actuelle


    var distance = countDownDate - now; // Calculer la distance entre la date actuelle et la date de fin

    // Calcul du temps pour les jours, heures, minutes et secondes

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // afficher le résultat dans l'élément avec l'id="chrono"

    document.getElementById("chrono").innerHTML = days + "j " + hours + "h "
      + minutes + "m " + seconds + "s ";

    // Afficher du texte quand le compte à rebours arrive à 0 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("chrono").innerHTML = "Temps écoulé";
    }
  }, 1000);
}