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

      event.preventDefault();
      console.log('The type of beer you want to see is: ' + this.state.value);
      console.log('here is the event ', event);
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
                  { value: 'all' },
                  'All'
                ),
                React.createElement(
                  'option',
                  { value: 'AmericanIPAs' },
                  'American-Style IPAs'
                ),
                React.createElement(
                  'option',
                  { value: 'cider' },
                  'Ciders'
                ),
                React.createElement(
                  'option',
                  { value: 'Dortmunder' },
                  'Dortmunders'
                ),
                React.createElement(
                  'option',
                  { value: 'ScotchAle' },
                  'Scotch Ales'
                ),
                React.createElement(
                  'option',
                  { value: 'BelgianFrench' },
                  'Belgian/French Ales'
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
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5qc3giXSwibmFtZXMiOlsidGVzdERhdGEiLCJhYnYiLCJuYW1lIiwiYnJld2VyaWVzIiwid2Vic2l0ZSIsInN0eWxlIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiYmVlcnMiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIiQiLCJnZXQiLCJkYXRhIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxXQUFXLEVBQUNDLEtBQUssR0FBTixFQUFXQyxNQUFNLHVCQUFqQixFQUEwQ0MsV0FBVyxDQUFDLEVBQUNELE1BQU0sa0JBQVAsRUFBMkJFLFNBQVMsOEVBQXBDLEVBQUQsQ0FBckQsRUFBNEtDLE9BQU0sRUFBQ0gsTUFBTSxPQUFQLEVBQWxMLEVBQWY7O0lBRU1JLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQUNDLE9BQU8sS0FBUjtBQUNDQyxhQUFPLENBQUNWLFFBQUQ7QUFEUixLQUFiO0FBR0EsVUFBS1csWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFOaUI7QUFPbEI7Ozs7aUNBRVlFLEssRUFBTztBQUNsQixXQUFLQyxRQUFMLENBQWMsRUFBQ04sT0FBT0ssTUFBTUUsTUFBTixDQUFhUCxLQUFyQixFQUFkO0FBQ0Q7OztpQ0FFWUssSyxFQUFPO0FBQUE7O0FBQ2xCQSxZQUFNRyxjQUFOO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSwwQ0FBMEMsS0FBS1gsS0FBTCxDQUFXQyxLQUFqRTtBQUNBUyxjQUFRQyxHQUFSLENBQVksb0JBQVosRUFBa0NMLEtBQWxDO0FBQ0FNLFFBQUVDLEdBQUYsT0FBVSxLQUFLYixLQUFMLENBQVdDLEtBQXJCLEVBQThCLFVBQUNhLElBQUQsRUFBVTtBQUN0QyxlQUFLUCxRQUFMLENBQWMsRUFBQ0wsT0FBT1ksSUFBUixFQUFkO0FBQ0FKLGdCQUFRQyxHQUFSLENBQVksY0FBWixFQUE0QixPQUFLWCxLQUFMLENBQVdFLEtBQXZDO0FBQ0EsT0FIRjtBQUlEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsU0FBZixFQUF5QixJQUFHLFFBQTVCO0FBQ0U7QUFBQTtBQUFBLGNBQU0sVUFBVSxLQUFLRyxZQUFyQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUU7QUFBQTtBQUFBLGtCQUFRLE9BQU8sS0FBS0wsS0FBTCxDQUFXQyxLQUExQixFQUFpQyxVQUFVLEtBQUtFLFlBQWhEO0FBQ0U7QUFBQTtBQUFBLG9CQUFRLE9BQU0sS0FBZDtBQUFBO0FBQUEsaUJBREY7QUFFRTtBQUFBO0FBQUEsb0JBQVEsT0FBTSxjQUFkO0FBQUE7QUFBQSxpQkFGRjtBQUdFO0FBQUE7QUFBQSxvQkFBUSxPQUFNLE9BQWQ7QUFBQTtBQUFBLGlCQUhGO0FBSUU7QUFBQTtBQUFBLG9CQUFRLE9BQU0sWUFBZDtBQUFBO0FBQUEsaUJBSkY7QUFLRTtBQUFBO0FBQUEsb0JBQVEsT0FBTSxXQUFkO0FBQUE7QUFBQSxpQkFMRjtBQU1FO0FBQUE7QUFBQSxvQkFBUSxPQUFNLGVBQWQ7QUFBQTtBQUFBO0FBTkY7QUFGRixhQURGO0FBWUUsMkNBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sUUFBM0I7QUFaRjtBQURGLFNBREY7QUFpQkU7QUFBQTtBQUFBLFlBQUssSUFBRyxXQUFSO0FBQW9CLDhCQUFDLFlBQUQsSUFBYyxPQUFPLEtBQUtILEtBQUwsQ0FBV0UsS0FBaEM7QUFBcEI7QUFqQkYsT0FERjtBQXFCRDs7OztFQTlDZWEsTUFBTUMsUzs7QUFpRHhCQyxPQUFPbkIsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciB0ZXN0RGF0YSA9IHthYnY6IDQuNSwgbmFtZTogJ01vb25saWdodCBXaGl0ZSBXaGVhdCcsIGJyZXdlcmllczogW3tuYW1lOiAnU3ljYW1vcmUgQnJld2luZycsIHdlYnNpdGU6ICdodHRwOi8vc3ljYW1vcmVicmV3LmNvbS9hZ2V2ZXJpZmljYXRpb24/dXJsPWh0dHA6Ly9zeWNhbW9yZWJyZXcuY29tL2Fib3V0LTEvJ31dLCBzdHlsZTp7bmFtZTogJ0xhZ2VyJ319O1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge3ZhbHVlOiAnYWxsJyxcbiAgICAgICAgICAgICAgICAgIGJlZXJzOiBbdGVzdERhdGFdXG4gICAgICAgICAgICAgICAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdUaGUgdHlwZSBvZiBiZWVyIHlvdSB3YW50IHRvIHNlZSBpczogJyArIHRoaXMuc3RhdGUudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKCdoZXJlIGlzIHRoZSBldmVudCAnLCBldmVudCk7XG4gICAgJC5nZXQoYC8ke3RoaXMuc3RhdGUudmFsdWV9YCwgKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2JlZXJzOiBkYXRhfSk7XG4gICAgICBjb25zb2xlLmxvZygncHJvcHMgPT09PT0gJywgdGhpcy5zdGF0ZS5iZWVycyk7XG4gICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdmlkZXInIGlkPSdzZWFyY2gnPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIFBpY2sgdGhlIHR5cGUgb2YgYmVlciB5b3UnZCBsaWtlIHRvIGRyaW5rOlxuICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj5BbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQW1lcmljYW5JUEFzXCI+QW1lcmljYW4tU3R5bGUgSVBBczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjaWRlclwiPkNpZGVyczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJEb3J0bXVuZGVyXCI+RG9ydG11bmRlcnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2NvdGNoQWxlXCI+U2NvdGNoIEFsZXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQmVsZ2lhbkZyZW5jaFwiPkJlbGdpYW4vRnJlbmNoIEFsZXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD0nbGlzdC12aWV3Jz48QmVlckxpc3RWaWV3IGJlZXJzPXt0aGlzLnN0YXRlLmJlZXJzfS8+PC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==