window.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('img.header-logo__image[alt="Logo"]');
    images.forEach(function(image) {
      image.style.pointerEvents = 'none';
      image.style.opacity = '0.5';
      // También puedes ocultar la imagen completamente usando: image.style.display = 'none';
    });
  });