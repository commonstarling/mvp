'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'section',
        null,
        React.createElement('div', { className: 'divider', id: 'search' }),
        React.createElement('div', { id: 'list-view' }),
        React.createElement('div', { id: 'saved-view' })
      );
    }
  }]);

  return App;
}(React.Component);

var choices = ['Please choose an option', 'All'];

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjaG9pY2VzIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7Ozs7Ozs7Ozs7OzZCQUVLO0FBQ1AsYUFBUztBQUFBO0FBQUE7QUFDQyxxQ0FBSyxXQUFVLFNBQWYsRUFBeUIsSUFBRyxRQUE1QixHQUREO0FBRUMscUNBQUssSUFBRyxXQUFSLEdBRkQ7QUFHQyxxQ0FBSyxJQUFHLFlBQVI7QUFIRCxPQUFUO0FBTUQ7Ozs7RUFUZUMsTUFBTUMsUzs7QUFZeEIsSUFBSUMsVUFBVSxDQUFDLHlCQUFELEVBQTRCLEtBQTVCLENBQWQ7O0FBRUFDLE9BQU9KLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKCA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdmlkZXInIGlkPSdzZWFyY2gnPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGlkPSdsaXN0LXZpZXcnPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGlkPSdzYXZlZC12aWV3Jz48L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICk7XG4gIH1cbn1cblxudmFyIGNob2ljZXMgPSBbJ1BsZWFzZSBjaG9vc2UgYW4gb3B0aW9uJywgJ0FsbCddO1xuXG53aW5kb3cuQXBwID0gQXBwO1xuXG4iXX0=