'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SavedBeers = function (_React$Component) {
  _inherits(SavedBeers, _React$Component);

  function SavedBeers() {
    _classCallCheck(this, SavedBeers);

    return _possibleConstructorReturn(this, (SavedBeers.__proto__ || Object.getPrototypeOf(SavedBeers)).apply(this, arguments));
  }

  _createClass(SavedBeers, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Saved Beers'
        )
      );
    }
  }]);

  return SavedBeers;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('saved-beers'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NhdmVkQmVlcnMuanMiXSwibmFtZXMiOlsiU2F2ZWRCZWVycyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFU7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsYUFBUztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsT0FBVDtBQUlEOzs7O0VBTnNCQyxNQUFNQyxTOztBQVMvQkMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXdCQyxTQUFTQyxjQUFULENBQXdCLGFBQXhCLENBQXhCIiwiZmlsZSI6InNhdmVkQmVlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTYXZlZEJlZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoIDxkaXY+XG4gICAgICAgICAgICAgIDxoMT5TYXZlZCBCZWVyczwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmVkLWJlZXJzJykpOyJdfQ==