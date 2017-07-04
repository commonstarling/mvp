'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BeerListView = function (_React$Component) {
  _inherits(BeerListView, _React$Component);

  function BeerListView(props) {
    _classCallCheck(this, BeerListView);

    return _possibleConstructorReturn(this, (BeerListView.__proto__ || Object.getPrototypeOf(BeerListView)).call(this, props));
  }

  _createClass(BeerListView, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'beers-list' },
        React.createElement(
          'h4',
          null,
          'Click on each beer for more info:'
        ),
        this.props.beers.map(function (beer) {
          return React.createElement(BeerEntry, { beer: beer });
        })
      );
    }
  }]);

  return BeerListView;
}(React.Component);

window.BeerListView = BeerListView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2JlZXJsaXN0dmlldy5qc3giXSwibmFtZXMiOlsiQmVlckxpc3RWaWV3IiwicHJvcHMiLCJiZWVycyIsIm1hcCIsImJlZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxZOzs7QUFDSix3QkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLHVIQUNWQSxLQURVO0FBRWpCOzs7OzZCQUNRO0FBQ1AsYUFDUTtBQUFBO0FBQUEsVUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFHSSxhQUFLQSxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXNCLFVBQUNDLElBQUQsRUFBVTtBQUNoQyxpQkFBTyxvQkFBQyxTQUFELElBQVcsTUFBTUEsSUFBakIsR0FBUDtBQUNDLFNBRkQ7QUFISixPQURSO0FBVUQ7Ozs7RUFmd0JDLE1BQU1DLFM7O0FBa0JqQ0MsT0FBT1AsWUFBUCxHQUFzQkEsWUFBdEIiLCJmaWxlIjoiYmVlcmxpc3R2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQmVlckxpc3RWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZWVycy1saXN0Jz5cbiAgICAgICAgICAgICAgPGg0PkNsaWNrIG9uIGVhY2ggYmVlciBmb3IgbW9yZSBpbmZvOjwvaDQ+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmJlZXJzLm1hcCggKGJlZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPEJlZXJFbnRyeSBiZWVyPXtiZWVyfS8+O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgfVxufVxuXG53aW5kb3cuQmVlckxpc3RWaWV3ID0gQmVlckxpc3RWaWV3OyJdfQ==