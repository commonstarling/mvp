'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BeerListView = function (_React$Component) {
  _inherits(BeerListView, _React$Component);

  function BeerListView() {
    _classCallCheck(this, BeerListView);

    return _possibleConstructorReturn(this, (BeerListView.__proto__ || Object.getPrototypeOf(BeerListView)).apply(this, arguments));
  }

  _createClass(BeerListView, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'beers-list' },
        React.createElement(
          'h1',
          null,
          'Beer Suggestions'
        )
      );
    }
  }]);

  return BeerListView;
}(React.Component);

window.BeerListView = BeerListView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2JlZXJsaXN0dmlldy5qc3giXSwibmFtZXMiOlsiQmVlckxpc3RWaWV3IiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsWTs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxhQUNRO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQURSO0FBS0Q7Ozs7RUFQd0JDLE1BQU1DLFM7O0FBVWpDQyxPQUFPSCxZQUFQLEdBQXNCQSxZQUF0QiIsImZpbGUiOiJiZWVybGlzdHZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCZWVyTGlzdFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZWVycy1saXN0Jz5cbiAgICAgICAgICAgICAgPGgxPkJlZXIgU3VnZ2VzdGlvbnM8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICB9XG59XG5cbndpbmRvdy5CZWVyTGlzdFZpZXcgPSBCZWVyTGlzdFZpZXc7Il19