angular.module('material.components.input')
  .factory('MaterialInputBehaviors', function() {

    $.easing.swiftOut = function(x, t, b, c, d) {
      var ts = (t/=d)*t;
      var tc = ts*t;
      return b+c*(3*tc*ts + -7*ts*ts + 4*tc + t);
    }

    var textBehaviors = function(elem, attrs) {
      var label = attrs.materialFloatingLabel
      if (!label) return;

      var inputHeight = elem.height();

      var fontSizeString = elem.css('font-size'),
          fontSize = parseInt(fontSizeString, 10);

      elem.before('<div class="material-floating-label">' + label + '</div>')

      var labelDefaultCss = {
        'bottom': (fontSize) + 'px',
        'font-size': fontSizeString,
        'letter-spacing': '0.01em'
      };

      var labelFloatingCss = {
        'bottom': (inputHeight + 8) + 'px',
        'font-size': '12px',
        'letter-spacing': '0.02em'
      };

      var $label = elem.parent().find('.material-floating-label');

      $label.css(labelDefaultCss);

      $label.on('click', function() { elem.focus(); })

      elem.focus(function() {
        $label
          .addClass('floating')
          .addClass('focused')
          .animate(labelFloatingCss, 125, 'swiftOut')
      })

      elem.blur(function() {
        $label.removeClass('focused');
        if (elem.val() === '') {
          $label
            .removeClass('floating')
            .animate(labelDefaultCss, 125, 'swiftOut')
        }
      })
    }

    // it's just a mapping of input-type to behaviors function
    return {
      'text': textBehaviors
    }

  })
