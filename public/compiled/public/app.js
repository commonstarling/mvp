'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var testData = { abv: 4.5, name: 'Moonlight White Wheat', breweries: [{ name: 'Sycamore Brewing', website: 'http://sycamorebrew.com/ageverification?url=http://sycamorebrew.com/about-1/' }], style: { name: 'Lager' } };

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { value: 'all',
      beers: [testData]
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      console.log('The type of beer you want to see is: ' + this.state.value);
      event.preventDefault();
      $.get('/' + this.state.value, function (data) {
        _this2.setState({ beers: data });
        console.log('props ===== ', _this2.state.beers);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'section',
        null,
        React.createElement(
          'div',
          { className: 'divider', id: 'search' },
          React.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            React.createElement(
              'label',
              null,
              'Pick the type of beer you\'d like to drink:',
              React.createElement(
                'select',
                { value: this.state.value, onChange: this.handleChange },
                React.createElement(
                  'option',
                  { value: '/all' },
                  'All'
                )
              )
            ),
            React.createElement('input', { type: 'submit', value: 'Submit' })
          )
        ),
        React.createElement(
          'div',
          { id: 'list-view' },
          React.createElement(BeerListView, { beers: this.state.beers })
        ),
        React.createElement('div', { id: 'saved-view' })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5qc3giXSwibmFtZXMiOlsidGVzdERhdGEiLCJhYnYiLCJuYW1lIiwiYnJld2VyaWVzIiwid2Vic2l0ZSIsInN0eWxlIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiYmVlcnMiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsIiQiLCJnZXQiLCJkYXRhIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxXQUFXLEVBQUNDLEtBQUssR0FBTixFQUFXQyxNQUFNLHVCQUFqQixFQUEwQ0MsV0FBVyxDQUFDLEVBQUNELE1BQU0sa0JBQVAsRUFBMkJFLFNBQVMsOEVBQXBDLEVBQUQsQ0FBckQsRUFBNEtDLE9BQU0sRUFBQ0gsTUFBTSxPQUFQLEVBQWxMLEVBQWY7O0lBRU1JLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQUNDLE9BQU8sS0FBUjtBQUNDQyxhQUFPLENBQUNWLFFBQUQ7QUFEUixLQUFiO0FBR0EsVUFBS1csWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFOaUI7QUFPbEI7Ozs7aUNBRVlFLEssRUFBTztBQUNsQixXQUFLQyxRQUFMLENBQWMsRUFBQ04sT0FBT0ssTUFBTUUsTUFBTixDQUFhUCxLQUFyQixFQUFkO0FBQ0Q7OztpQ0FFWUssSyxFQUFPO0FBQUE7O0FBQ2xCRyxjQUFRQyxHQUFSLENBQVksMENBQTBDLEtBQUtWLEtBQUwsQ0FBV0MsS0FBakU7QUFDQUssWUFBTUssY0FBTjtBQUNBQyxRQUFFQyxHQUFGLE9BQVUsS0FBS2IsS0FBTCxDQUFXQyxLQUFyQixFQUE4QixVQUFDYSxJQUFELEVBQVU7QUFDdEMsZUFBS1AsUUFBTCxDQUFjLEVBQUNMLE9BQU9ZLElBQVIsRUFBZDtBQUNBTCxnQkFBUUMsR0FBUixDQUFZLGNBQVosRUFBNEIsT0FBS1YsS0FBTCxDQUFXRSxLQUF2QztBQUNBLE9BSEY7QUFJRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFNBQWYsRUFBeUIsSUFBRyxRQUE1QjtBQUNFO0FBQUE7QUFBQSxjQUFNLFVBQVUsS0FBS0csWUFBckI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUVFO0FBQUE7QUFBQSxrQkFBUSxPQUFPLEtBQUtMLEtBQUwsQ0FBV0MsS0FBMUIsRUFBaUMsVUFBVSxLQUFLRSxZQUFoRDtBQUNFO0FBQUE7QUFBQSxvQkFBUSxPQUFNLE1BQWQ7QUFBQTtBQUFBO0FBREY7QUFGRixhQURGO0FBT0UsMkNBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sUUFBM0I7QUFQRjtBQURGLFNBREY7QUFZRTtBQUFBO0FBQUEsWUFBSyxJQUFHLFdBQVI7QUFBb0IsOEJBQUMsWUFBRCxJQUFjLE9BQU8sS0FBS0gsS0FBTCxDQUFXRSxLQUFoQztBQUFwQixTQVpGO0FBYUUscUNBQUssSUFBRyxZQUFSO0FBYkYsT0FERjtBQWlCRDs7OztFQXpDZWEsTUFBTUMsUzs7QUE0Q3hCQyxPQUFPbkIsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0ZXN0RGF0YSA9IHthYnY6IDQuNSwgbmFtZTogJ01vb25saWdodCBXaGl0ZSBXaGVhdCcsIGJyZXdlcmllczogW3tuYW1lOiAnU3ljYW1vcmUgQnJld2luZycsIHdlYnNpdGU6ICdodHRwOi8vc3ljYW1vcmVicmV3LmNvbS9hZ2V2ZXJpZmljYXRpb24/dXJsPWh0dHA6Ly9zeWNhbW9yZWJyZXcuY29tL2Fib3V0LTEvJ31dLCBzdHlsZTp7bmFtZTogJ0xhZ2VyJ319O1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge3ZhbHVlOiAnYWxsJyxcbiAgICAgICAgICAgICAgICAgIGJlZXJzOiBbdGVzdERhdGFdXG4gICAgICAgICAgICAgICAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnVGhlIHR5cGUgb2YgYmVlciB5b3Ugd2FudCB0byBzZWUgaXM6ICcgKyB0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQuZ2V0KGAvJHt0aGlzLnN0YXRlLnZhbHVlfWAsIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtiZWVyczogZGF0YX0pO1xuICAgICAgY29uc29sZS5sb2coJ3Byb3BzID09PT09ICcsIHRoaXMuc3RhdGUuYmVlcnMpO1xuICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZpZGVyJyBpZD0nc2VhcmNoJz5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICBQaWNrIHRoZSB0eXBlIG9mIGJlZXIgeW91J2QgbGlrZSB0byBkcmluazpcbiAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiL2FsbFwiPkFsbDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPSdsaXN0LXZpZXcnPjxCZWVyTGlzdFZpZXcgYmVlcnM9e3RoaXMuc3RhdGUuYmVlcnN9Lz48L2Rpdj5cbiAgICAgICAgPGRpdiBpZD0nc2F2ZWQtdmlldyc+PC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwO1xuXG4iXX0=