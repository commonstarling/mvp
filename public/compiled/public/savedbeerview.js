'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SavedBeerView = function (_React$Component) {
  _inherits(SavedBeerView, _React$Component);

  function SavedBeerView() {
    _classCallCheck(this, SavedBeerView);

    return _possibleConstructorReturn(this, (SavedBeerView.__proto__ || Object.getPrototypeOf(SavedBeerView)).apply(this, arguments));
  }

  _createClass(SavedBeerView, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'saved-beers' },
        React.createElement(
          'h1',
          null,
          'Saved Beers'
        )
      );
    }
  }]);

  return SavedBeerView;
}(React.Component);

window.SavedBeerView = SavedBeerView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NhdmVkYmVlcnZpZXcuanN4Il0sIm5hbWVzIjpbIlNhdmVkQmVlclZpZXciLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxhOzs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ1E7QUFBQTtBQUFBLFVBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BRFI7QUFLRDs7OztFQVB5QkMsTUFBTUMsUzs7QUFVbENDLE9BQU9ILGFBQVAsR0FBdUJBLGFBQXZCIiwiZmlsZSI6InNhdmVkYmVlcnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTYXZlZEJlZXJWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2F2ZWQtYmVlcnMnPlxuICAgICAgICAgICAgICA8aDE+U2F2ZWQgQmVlcnM8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICB9XG59XG5cbndpbmRvdy5TYXZlZEJlZXJWaWV3ID0gU2F2ZWRCZWVyVmlldzsiXX0=