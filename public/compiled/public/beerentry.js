'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BeerEntry = function (_React$Component) {
  _inherits(BeerEntry, _React$Component);

  function BeerEntry(props) {
    _classCallCheck(this, BeerEntry);

    return _possibleConstructorReturn(this, (BeerEntry.__proto__ || Object.getPrototypeOf(BeerEntry)).call(this, props));
  }

  _createClass(BeerEntry, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'beer-entry' },
        React.createElement(
          'h1',
          null,
          this.props.beer.name
        ),
        React.createElement(
          'p',
          null,
          'ABV: ',
          this.props.beer.abv,
          '%'
        ),
        React.createElement(
          'p',
          null,
          'Brewery: ',
          React.createElement(
            'a',
            { href: this.props.beer.breweries[0].website },
            this.props.beer.breweries[0].name
          )
        ),
        React.createElement(
          'p',
          null,
          'Style: ',
          this.props.beer.style.name
        )
      );
    }
  }]);

  return BeerEntry;
}(React.Component);

window.BeerEntry = BeerEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2JlZXJlbnRyeS5qc3giXSwibmFtZXMiOlsiQmVlckVudHJ5IiwicHJvcHMiLCJiZWVyIiwibmFtZSIsImFidiIsImJyZXdlcmllcyIsIndlYnNpdGUiLCJzdHlsZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsaUhBQ1ZBLEtBRFU7QUFFakI7Ozs7NkJBQ1E7QUFDUCxhQUNRO0FBQUE7QUFBQSxVQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLLGVBQUtBLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkM7QUFBckIsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQVMsZUFBS0YsS0FBTCxDQUFXQyxJQUFYLENBQWdCRSxHQUF6QjtBQUFBO0FBQUEsU0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQVk7QUFBQTtBQUFBLGNBQUcsTUFBTSxLQUFLSCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JHLFNBQWhCLENBQTBCLENBQTFCLEVBQTZCQyxPQUF0QztBQUFnRCxpQkFBS0wsS0FBTCxDQUFXQyxJQUFYLENBQWdCRyxTQUFoQixDQUEwQixDQUExQixFQUE2QkY7QUFBN0U7QUFBWixTQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBVyxlQUFLRixLQUFMLENBQVdDLElBQVgsQ0FBZ0JLLEtBQWhCLENBQXNCSjtBQUFqQztBQUpGLE9BRFI7QUFRRDs7OztFQWJxQkssTUFBTUMsUzs7QUFnQjlCQyxPQUFPVixTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJiZWVyZW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCZWVyRW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JlZXItZW50cnknPlxuICAgICAgICAgICAgICA8aDE+e3RoaXMucHJvcHMuYmVlci5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgIDxwPkFCVjoge3RoaXMucHJvcHMuYmVlci5hYnZ9JTwvcD5cbiAgICAgICAgICAgICAgPHA+QnJld2VyeTogPGEgaHJlZj17dGhpcy5wcm9wcy5iZWVyLmJyZXdlcmllc1swXS53ZWJzaXRlfT57dGhpcy5wcm9wcy5iZWVyLmJyZXdlcmllc1swXS5uYW1lfTwvYT48L3A+XG4gICAgICAgICAgICAgIDxwPlN0eWxlOiB7dGhpcy5wcm9wcy5iZWVyLnN0eWxlLm5hbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICB9XG59XG5cbndpbmRvdy5CZWVyRW50cnkgPSBCZWVyRW50cnk7Il19