'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BeerEntry = function (_React$Component) {
  _inherits(BeerEntry, _React$Component);

  function BeerEntry(props) {
    _classCallCheck(this, BeerEntry);

    var _this = _possibleConstructorReturn(this, (BeerEntry.__proto__ || Object.getPrototypeOf(BeerEntry)).call(this, props));

    _this.state = {
      expandedBeer: false
    };
    _this.toggleBeerEntry = _this.toggleBeerEntry.bind(_this);
    return _this;
  }

  _createClass(BeerEntry, [{
    key: 'toggleBeerEntry',
    value: function toggleBeerEntry() {
      this.setState({ expandedBeer: !this.state.expandedBeer });
    }
  }, {
    key: 'render',
    value: function render() {
      var description = this.props.beer.breweries[0].description || 'See brewery website';
      var region = this.props.beer.breweries[0].locations[0].region || 'See brewery website';
      return React.createElement(
        'div',
        { className: 'beer-entry ' + (this.state.expandedBeer ? 'expanded-beer' : 'normal-beer'), onClick: this.toggleBeerEntry },
        React.createElement(
          'h3',
          null,
          this.props.beer.name
        ),
        React.createElement(
          'p',
          null,
          React.createElement(
            'strong',
            null,
            'ABV'
          ),
          ': ',
          this.props.beer.abv,
          '%'
        ),
        React.createElement(
          'p',
          null,
          React.createElement(
            'strong',
            null,
            'Brewery'
          ),
          ': ',
          React.createElement(
            'a',
            { href: this.props.beer.breweries[0].website },
            this.props.beer.breweries[0].name
          )
        ),
        React.createElement(
          'p',
          null,
          React.createElement(
            'strong',
            null,
            'Beer Region'
          ),
          ': ',
          region
        ),
        React.createElement(
          'p',
          null,
          React.createElement(
            'strong',
            null,
            'Brewery Info'
          ),
          ': ',
          description
        )
      );
    }
  }]);

  return BeerEntry;
}(React.Component);

window.BeerEntry = BeerEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2JlZXJlbnRyeS5qc3giXSwibmFtZXMiOlsiQmVlckVudHJ5IiwicHJvcHMiLCJzdGF0ZSIsImV4cGFuZGVkQmVlciIsInRvZ2dsZUJlZXJFbnRyeSIsImJpbmQiLCJzZXRTdGF0ZSIsImRlc2NyaXB0aW9uIiwiYmVlciIsImJyZXdlcmllcyIsInJlZ2lvbiIsImxvY2F0aW9ucyIsIm5hbWUiLCJhYnYiLCJ3ZWJzaXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSxzSEFDVkEsS0FEVTs7QUFFaEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG9CQUFjO0FBREgsS0FBYjtBQUdBLFVBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFMZ0I7QUFNakI7Ozs7c0NBQ2lCO0FBQ2hCLFdBQUtDLFFBQUwsQ0FBYyxFQUFFSCxjQUFjLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxZQUE1QixFQUFkO0FBQ0Q7Ozs2QkFDUTtBQUNQLFVBQUlJLGNBQWMsS0FBS04sS0FBTCxDQUFXTyxJQUFYLENBQWdCQyxTQUFoQixDQUEwQixDQUExQixFQUE2QkYsV0FBN0IsSUFBNEMscUJBQTlEO0FBQ0EsVUFBSUcsU0FBUyxLQUFLVCxLQUFMLENBQVdPLElBQVgsQ0FBZ0JDLFNBQWhCLENBQTBCLENBQTFCLEVBQTZCRSxTQUE3QixDQUF1QyxDQUF2QyxFQUEwQ0QsTUFBMUMsSUFBb0QscUJBQWpFO0FBQ0EsYUFDUTtBQUFBO0FBQUEsVUFBSyw0QkFBeUIsS0FBS1IsS0FBTCxDQUFXQyxZQUFYLEdBQTBCLGVBQTFCLEdBQTRDLGFBQXJFLENBQUwsRUFBMkYsU0FBUyxLQUFLQyxlQUF6RztBQUNFO0FBQUE7QUFBQTtBQUFLLGVBQUtILEtBQUwsQ0FBV08sSUFBWCxDQUFnQkk7QUFBckIsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSDtBQUFBO0FBQTBCLGVBQUtYLEtBQUwsQ0FBV08sSUFBWCxDQUFnQkssR0FBMUM7QUFBQTtBQUFBLFNBRkY7QUFHRTtBQUFBO0FBQUE7QUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUg7QUFBQTtBQUE2QjtBQUFBO0FBQUEsY0FBRyxNQUFNLEtBQUtaLEtBQUwsQ0FBV08sSUFBWCxDQUFnQkMsU0FBaEIsQ0FBMEIsQ0FBMUIsRUFBNkJLLE9BQXRDO0FBQWdELGlCQUFLYixLQUFMLENBQVdPLElBQVgsQ0FBZ0JDLFNBQWhCLENBQTBCLENBQTFCLEVBQTZCRztBQUE3RTtBQUE3QixTQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFIO0FBQUE7QUFBa0NGO0FBQWxDLFNBSkY7QUFLRTtBQUFBO0FBQUE7QUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUg7QUFBQTtBQUFtQ0g7QUFBbkM7QUFMRixPQURSO0FBU0Q7Ozs7RUF2QnFCUSxNQUFNQyxTOztBQTBCOUJDLE9BQU9qQixTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJiZWVyZW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCZWVyRW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleHBhbmRlZEJlZXI6IGZhbHNlLFxuICAgIH1cbiAgICB0aGlzLnRvZ2dsZUJlZXJFbnRyeSA9IHRoaXMudG9nZ2xlQmVlckVudHJ5LmJpbmQodGhpcyk7XG4gIH1cbiAgdG9nZ2xlQmVlckVudHJ5KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleHBhbmRlZEJlZXI6ICF0aGlzLnN0YXRlLmV4cGFuZGVkQmVlciB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5wcm9wcy5iZWVyLmJyZXdlcmllc1swXS5kZXNjcmlwdGlvbiB8fCAnU2VlIGJyZXdlcnkgd2Vic2l0ZSc7XG4gICAgdmFyIHJlZ2lvbiA9IHRoaXMucHJvcHMuYmVlci5icmV3ZXJpZXNbMF0ubG9jYXRpb25zWzBdLnJlZ2lvbiB8fCAnU2VlIGJyZXdlcnkgd2Vic2l0ZSc7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmVlci1lbnRyeSAke3RoaXMuc3RhdGUuZXhwYW5kZWRCZWVyID8gJ2V4cGFuZGVkLWJlZXInIDogJ25vcm1hbC1iZWVyJ31gfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUJlZXJFbnRyeX0+XG4gICAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5iZWVyLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgPHA+PHN0cm9uZz5BQlY8L3N0cm9uZz46IHt0aGlzLnByb3BzLmJlZXIuYWJ2fSU8L3A+XG4gICAgICAgICAgICAgIDxwPjxzdHJvbmc+QnJld2VyeTwvc3Ryb25nPjogPGEgaHJlZj17dGhpcy5wcm9wcy5iZWVyLmJyZXdlcmllc1swXS53ZWJzaXRlfT57dGhpcy5wcm9wcy5iZWVyLmJyZXdlcmllc1swXS5uYW1lfTwvYT48L3A+XG4gICAgICAgICAgICAgIDxwPjxzdHJvbmc+QmVlciBSZWdpb248L3N0cm9uZz46IHtyZWdpb259PC9wPlxuICAgICAgICAgICAgICA8cD48c3Ryb25nPkJyZXdlcnkgSW5mbzwvc3Ryb25nPjoge2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgfVxufVxuXG53aW5kb3cuQmVlckVudHJ5ID0gQmVlckVudHJ5OyJdfQ==