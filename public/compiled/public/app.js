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
        ),
        React.createElement('div', { id: 'saved-view' })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5qc3giXSwibmFtZXMiOlsidGVzdERhdGEiLCJhYnYiLCJuYW1lIiwiYnJld2VyaWVzIiwid2Vic2l0ZSIsInN0eWxlIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiYmVlcnMiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIiQiLCJnZXQiLCJkYXRhIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxXQUFXLEVBQUNDLEtBQUssR0FBTixFQUFXQyxNQUFNLHVCQUFqQixFQUEwQ0MsV0FBVyxDQUFDLEVBQUNELE1BQU0sa0JBQVAsRUFBMkJFLFNBQVMsOEVBQXBDLEVBQUQsQ0FBckQsRUFBNEtDLE9BQU0sRUFBQ0gsTUFBTSxPQUFQLEVBQWxMLEVBQWY7O0lBRU1JLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQUNDLE9BQU8sS0FBUjtBQUNDQyxhQUFPLENBQUNWLFFBQUQ7QUFEUixLQUFiO0FBR0EsVUFBS1csWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFOaUI7QUFPbEI7Ozs7aUNBRVlFLEssRUFBTztBQUNsQixXQUFLQyxRQUFMLENBQWMsRUFBQ04sT0FBT0ssTUFBTUUsTUFBTixDQUFhUCxLQUFyQixFQUFkO0FBQ0Q7OztpQ0FFWUssSyxFQUFPO0FBQUE7O0FBQ2xCQSxZQUFNRyxjQUFOO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSwwQ0FBMEMsS0FBS1gsS0FBTCxDQUFXQyxLQUFqRTtBQUNBUyxjQUFRQyxHQUFSLENBQVksb0JBQVosRUFBa0NMLEtBQWxDO0FBQ0FNLFFBQUVDLEdBQUYsT0FBVSxLQUFLYixLQUFMLENBQVdDLEtBQXJCLEVBQThCLFVBQUNhLElBQUQsRUFBVTtBQUN0QyxlQUFLUCxRQUFMLENBQWMsRUFBQ0wsT0FBT1ksSUFBUixFQUFkO0FBQ0FKLGdCQUFRQyxHQUFSLENBQVksY0FBWixFQUE0QixPQUFLWCxLQUFMLENBQVdFLEtBQXZDO0FBQ0EsT0FIRjtBQUlEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsU0FBZixFQUF5QixJQUFHLFFBQTVCO0FBQ0U7QUFBQTtBQUFBLGNBQU0sVUFBVSxLQUFLRyxZQUFyQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBRUU7QUFBQTtBQUFBLGtCQUFRLE9BQU8sS0FBS0wsS0FBTCxDQUFXQyxLQUExQixFQUFpQyxVQUFVLEtBQUtFLFlBQWhEO0FBQ0U7QUFBQTtBQUFBLG9CQUFRLE9BQU0sS0FBZDtBQUFBO0FBQUEsaUJBREY7QUFFRTtBQUFBO0FBQUEsb0JBQVEsT0FBTSxjQUFkO0FBQUE7QUFBQSxpQkFGRjtBQUdFO0FBQUE7QUFBQSxvQkFBUSxPQUFNLE9BQWQ7QUFBQTtBQUFBLGlCQUhGO0FBSUU7QUFBQTtBQUFBLG9CQUFRLE9BQU0sWUFBZDtBQUFBO0FBQUEsaUJBSkY7QUFLRTtBQUFBO0FBQUEsb0JBQVEsT0FBTSxXQUFkO0FBQUE7QUFBQSxpQkFMRjtBQU1FO0FBQUE7QUFBQSxvQkFBUSxPQUFNLGVBQWQ7QUFBQTtBQUFBO0FBTkY7QUFGRixhQURGO0FBWUUsMkNBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sUUFBM0I7QUFaRjtBQURGLFNBREY7QUFpQkU7QUFBQTtBQUFBLFlBQUssSUFBRyxXQUFSO0FBQW9CLDhCQUFDLFlBQUQsSUFBYyxPQUFPLEtBQUtILEtBQUwsQ0FBV0UsS0FBaEM7QUFBcEIsU0FqQkY7QUFrQkUscUNBQUssSUFBRyxZQUFSO0FBbEJGLE9BREY7QUFzQkQ7Ozs7RUEvQ2VhLE1BQU1DLFM7O0FBa0R4QkMsT0FBT25CLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdGVzdERhdGEgPSB7YWJ2OiA0LjUsIG5hbWU6ICdNb29ubGlnaHQgV2hpdGUgV2hlYXQnLCBicmV3ZXJpZXM6IFt7bmFtZTogJ1N5Y2Ftb3JlIEJyZXdpbmcnLCB3ZWJzaXRlOiAnaHR0cDovL3N5Y2Ftb3JlYnJldy5jb20vYWdldmVyaWZpY2F0aW9uP3VybD1odHRwOi8vc3ljYW1vcmVicmV3LmNvbS9hYm91dC0xLyd9XSwgc3R5bGU6e25hbWU6ICdMYWdlcid9fTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt2YWx1ZTogJ2FsbCcsXG4gICAgICAgICAgICAgICAgICBiZWVyczogW3Rlc3REYXRhXVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZygnVGhlIHR5cGUgb2YgYmVlciB5b3Ugd2FudCB0byBzZWUgaXM6ICcgKyB0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZygnaGVyZSBpcyB0aGUgZXZlbnQgJywgZXZlbnQpO1xuICAgICQuZ2V0KGAvJHt0aGlzLnN0YXRlLnZhbHVlfWAsIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtiZWVyczogZGF0YX0pO1xuICAgICAgY29uc29sZS5sb2coJ3Byb3BzID09PT09ICcsIHRoaXMuc3RhdGUuYmVlcnMpO1xuICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZpZGVyJyBpZD0nc2VhcmNoJz5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICBQaWNrIHRoZSB0eXBlIG9mIGJlZXIgeW91J2QgbGlrZSB0byBkcmluazpcbiAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxsXCI+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFtZXJpY2FuSVBBc1wiPkFtZXJpY2FuLVN0eWxlIElQQXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2lkZXJcIj5DaWRlcnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRG9ydG11bmRlclwiPkRvcnRtdW5kZXJzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNjb3RjaEFsZVwiPlNjb3RjaCBBbGVzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJlbGdpYW5GcmVuY2hcIj5CZWxnaWFuL0ZyZW5jaCBBbGVzPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9J2xpc3Qtdmlldyc+PEJlZXJMaXN0VmlldyBiZWVycz17dGhpcy5zdGF0ZS5iZWVyc30vPjwvZGl2PlxuICAgICAgICA8ZGl2IGlkPSdzYXZlZC12aWV3Jz48L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7Il19