'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BeerForm = function (_React$Component) {
  _inherits(BeerForm, _React$Component);

  function BeerForm(props) {
    _classCallCheck(this, BeerForm);

    var _this = _possibleConstructorReturn(this, (BeerForm.__proto__ || Object.getPrototypeOf(BeerForm)).call(this, props));

    _this.state = { value: 'all' };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(BeerForm, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      console.log('The type of beer you want to see is: ' + this.state.value);
      event.preventDefault();
      $.get('/' + this.state.value, function (data) {
        console.log(data);
        data.forEach(function (beer) {
          var info = {
            name: beer.name,
            abv: beer.abv,
            brewery: beer.breweries[0].name,
            website: beer.breweries[0].website,
            style: beer.style.name
          };
          console.log(info);
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
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
      );
    }
  }]);

  return BeerForm;
}(React.Component);

window.BeerForm = BeerForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2JlZXJmb3JtLmpzeCJdLCJuYW1lcyI6WyJCZWVyRm9ybSIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiJCIsImdldCIsImRhdGEiLCJmb3JFYWNoIiwiYmVlciIsImluZm8iLCJuYW1lIiwiYWJ2IiwiYnJld2VyeSIsImJyZXdlcmllcyIsIndlYnNpdGUiLCJzdHlsZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFDQyxPQUFPLEtBQVIsRUFBYjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE9BQXBCO0FBSmlCO0FBS2xCOzs7O2lDQUVZRSxLLEVBQU87QUFDbEIsV0FBS0MsUUFBTCxDQUFjLEVBQUNMLE9BQU9JLE1BQU1FLE1BQU4sQ0FBYU4sS0FBckIsRUFBZDtBQUNEOzs7aUNBRVlJLEssRUFBTztBQUNsQkcsY0FBUUMsR0FBUixDQUFZLDBDQUEwQyxLQUFLVCxLQUFMLENBQVdDLEtBQWpFO0FBQ0FJLFlBQU1LLGNBQU47QUFDQUMsUUFBRUMsR0FBRixPQUFVLEtBQUtaLEtBQUwsQ0FBV0MsS0FBckIsRUFBOEIsVUFBU1ksSUFBVCxFQUFlO0FBQzNDTCxnQkFBUUMsR0FBUixDQUFZSSxJQUFaO0FBQ0NBLGFBQUtDLE9BQUwsQ0FBYSxVQUFTQyxJQUFULEVBQWU7QUFDM0IsY0FBSUMsT0FBTztBQUNUQyxrQkFBTUYsS0FBS0UsSUFERjtBQUVUQyxpQkFBS0gsS0FBS0csR0FGRDtBQUdUQyxxQkFBU0osS0FBS0ssU0FBTCxDQUFlLENBQWYsRUFBa0JILElBSGxCO0FBSVRJLHFCQUFTTixLQUFLSyxTQUFMLENBQWUsQ0FBZixFQUFrQkMsT0FKbEI7QUFLVEMsbUJBQU9QLEtBQUtPLEtBQUwsQ0FBV0w7QUFMVCxXQUFYO0FBT0FULGtCQUFRQyxHQUFSLENBQVlPLElBQVo7QUFDQSxTQVREO0FBVUQsT0FaRjtBQWFEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFNLFVBQVUsS0FBS1osWUFBckI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUVFO0FBQUE7QUFBQSxjQUFRLE9BQU8sS0FBS0osS0FBTCxDQUFXQyxLQUExQixFQUFpQyxVQUFVLEtBQUtDLFlBQWhEO0FBQ0U7QUFBQTtBQUFBLGdCQUFRLE9BQU0sTUFBZDtBQUFBO0FBQUE7QUFERjtBQUZGLFNBREY7QUFPRSx1Q0FBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQjtBQVBGLE9BREY7QUFXRDs7OztFQTFDb0JxQixNQUFNQyxTOztBQTZDN0JDLE9BQU8zQixRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiJiZWVyZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJlZXJGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt2YWx1ZTogJ2FsbCd9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnVGhlIHR5cGUgb2YgYmVlciB5b3Ugd2FudCB0byBzZWUgaXM6ICcgKyB0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQuZ2V0KGAvJHt0aGlzLnN0YXRlLnZhbHVlfWAsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbihiZWVyKSB7XG4gICAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICAgIG5hbWU6IGJlZXIubmFtZSxcbiAgICAgICAgICBhYnY6IGJlZXIuYWJ2LFxuICAgICAgICAgIGJyZXdlcnk6IGJlZXIuYnJld2VyaWVzWzBdLm5hbWUsXG4gICAgICAgICAgd2Vic2l0ZTogYmVlci5icmV3ZXJpZXNbMF0ud2Vic2l0ZSxcbiAgICAgICAgICBzdHlsZTogYmVlci5zdHlsZS5uYW1lXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coaW5mbyk7XG4gICAgICAgfSk7XG4gICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgUGljayB0aGUgdHlwZSBvZiBiZWVyIHlvdSdkIGxpa2UgdG8gZHJpbms6XG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIvYWxsXCI+QWxsPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxud2luZG93LkJlZXJGb3JtID0gQmVlckZvcm07Il19