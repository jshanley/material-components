angular.module('material.components.input')
  .directive('materialInput', ['MaterialInputBehaviors', function(MaterialInputBehaviors) {

    return {
      restrict: 'A',
      link: function(scope, elem, attrs) {

        var inputType = attrs.type;

        if (!inputType) return;

        elem.wrap('<div class="material-input-wrapper"></div>')

        elem.addClass('material-input-type-' + inputType);

        MaterialInputBehaviors[inputType](elem, attrs);

      }
    }
  }])
