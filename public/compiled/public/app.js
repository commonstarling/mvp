"use strict";

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
    key: "render",
    value: function render() {
      return React.createElement(
        "section",
        null,
        React.createElement(
          "div",
          { className: "beers-list", id: "list" },
          React.createElement(
            "h1",
            null,
            "Beer Suggestions"
          ),
          this.props.beers.map(function (beer) {
            return React.createElement(
              "div",
              { className: "beer-entry" },
              React.createElement(
                "h5",
                null,
                React.createElement(
                  "a",
                  { href: "#" },
                  beer.name
                )
              ),
              React.createElement(
                "p",
                null,
                beer.abv
              ),
              React.createElement(
                "p",
                null,
                beer.description
              )
            );
          })
        ),
        React.createElement(
          "div",
          { className: "saved-beers" },
          React.createElement(
            "h1",
            null,
            "Saved Beers"
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

var beerData = [{
  name: "Alternating Currant Sour",
  abv: '4.8%',
  description: 'American sour ales can be very light to black or take on the color of added fruits or other ingredients.'
}, {
  name: 'Street Pineapple Blonde',
  abv: '4.6%',
  description: 'Street Pineapple Blonde is the lightest beer we have on tap.'
}, {
  name: '"Mike Saw a Sasquatch" Session Ale',
  abv: '4.7',
  description: 'The true Summer Ale of Central Oregon! A Golden Ale, light and smooth. You can taste the craftsmanship in this easy drinking ale with a smooth blend of Cascade and Sterling hops and finished with a touch of Honey malt to balance it out. This is a great introduction if you are new to the world of Craft Brewing.  For established craft enthusiasts, 10 Barrel Summer Ale is a good reprieve from overly hopped and overly malty alternatives.'
}];

ReactDOM.render(React.createElement(App, { beers: beerData }), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsImJlZXJzIiwibWFwIiwiYmVlciIsIm5hbWUiLCJhYnYiLCJkZXNjcmlwdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiYmVlckRhdGEiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxhQUFTO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZixFQUE0QixJQUFHLE1BQS9CO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUcsZUFBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxJQUFEO0FBQUEsbUJBQ2xCO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDTTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsb0JBQUcsTUFBSyxHQUFSO0FBQWFBLHVCQUFLQztBQUFsQjtBQUFKLGVBRE47QUFFTTtBQUFBO0FBQUE7QUFBSUQscUJBQUtFO0FBQVQsZUFGTjtBQUdNO0FBQUE7QUFBQTtBQUFJRixxQkFBS0c7QUFBVDtBQUhOLGFBRGtCO0FBQUEsV0FBckI7QUFGSCxTQUREO0FBVUM7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBVkQsT0FBVDtBQWVEOzs7O0VBakJlQyxNQUFNQyxTOztBQW9CeEIsSUFBSUMsV0FBVyxDQUNiO0FBQ0VMLFFBQU0sMEJBRFI7QUFFRUMsT0FBSyxNQUZQO0FBR0VDLGVBQWE7QUFIZixDQURhLEVBTWI7QUFDRUYsUUFBTSx5QkFEUjtBQUVFQyxPQUFLLE1BRlA7QUFHRUMsZUFBYTtBQUhmLENBTmEsRUFXYjtBQUNFRixRQUFNLG9DQURSO0FBRUVDLE9BQUssS0FGUDtBQUdFQyxlQUFhO0FBSGYsQ0FYYSxDQUFmOztBQWtCQUksU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELElBQUssT0FBT0YsUUFBWixHQUFoQixFQUF5Q0csU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICggPHNlY3Rpb24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmVlcnMtbGlzdFwiIGlkPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgIDxoMT5CZWVyIFN1Z2dlc3Rpb25zPC9oMT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5iZWVycy5tYXAoKGJlZXIpID0+XG4gICAgICAgICAgICAgICAgICAgKDxkaXYgY2xhc3NOYW1lPVwiYmVlci1lbnRyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+PGEgaHJlZj1cIiNcIj57YmVlci5uYW1lfTwvYT48L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YmVlci5hYnZ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YmVlci5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PikpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYXZlZC1iZWVyc1wiPlxuICAgICAgICAgICAgICAgIDxoMT5TYXZlZCBCZWVyczwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgKTtcbiAgfVxufVxuXG52YXIgYmVlckRhdGEgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkFsdGVybmF0aW5nIEN1cnJhbnQgU291clwiLFxuICAgIGFidjogJzQuOCUnLFxuICAgIGRlc2NyaXB0aW9uOiAnQW1lcmljYW4gc291ciBhbGVzIGNhbiBiZSB2ZXJ5IGxpZ2h0IHRvIGJsYWNrIG9yIHRha2Ugb24gdGhlIGNvbG9yIG9mIGFkZGVkIGZydWl0cyBvciBvdGhlciBpbmdyZWRpZW50cy4nXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnU3RyZWV0IFBpbmVhcHBsZSBCbG9uZGUnLFxuICAgIGFidjogJzQuNiUnLFxuICAgIGRlc2NyaXB0aW9uOiAnU3RyZWV0IFBpbmVhcHBsZSBCbG9uZGUgaXMgdGhlIGxpZ2h0ZXN0IGJlZXIgd2UgaGF2ZSBvbiB0YXAuJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ1wiTWlrZSBTYXcgYSBTYXNxdWF0Y2hcIiBTZXNzaW9uIEFsZScsXG4gICAgYWJ2OiAnNC43JyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSB0cnVlIFN1bW1lciBBbGUgb2YgQ2VudHJhbCBPcmVnb24hIEEgR29sZGVuIEFsZSwgbGlnaHQgYW5kIHNtb290aC4gWW91IGNhbiB0YXN0ZSB0aGUgY3JhZnRzbWFuc2hpcCBpbiB0aGlzIGVhc3kgZHJpbmtpbmcgYWxlIHdpdGggYSBzbW9vdGggYmxlbmQgb2YgQ2FzY2FkZSBhbmQgU3RlcmxpbmcgaG9wcyBhbmQgZmluaXNoZWQgd2l0aCBhIHRvdWNoIG9mIEhvbmV5IG1hbHQgdG8gYmFsYW5jZSBpdCBvdXQuIFRoaXMgaXMgYSBncmVhdCBpbnRyb2R1Y3Rpb24gaWYgeW91IGFyZSBuZXcgdG8gdGhlIHdvcmxkIG9mIENyYWZ0IEJyZXdpbmcuICBGb3IgZXN0YWJsaXNoZWQgY3JhZnQgZW50aHVzaWFzdHMsIDEwIEJhcnJlbCBTdW1tZXIgQWxlIGlzIGEgZ29vZCByZXByaWV2ZSBmcm9tIG92ZXJseSBob3BwZWQgYW5kIG92ZXJseSBtYWx0eSBhbHRlcm5hdGl2ZXMuJ1xuICB9XG5dO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCBiZWVycz17YmVlckRhdGF9Lz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il19