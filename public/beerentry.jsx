class BeerEntry extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
            <div className='beer-entry'>
              <h1>{this.props.beer.name}</h1>
              <p>ABV: {this.props.beer.abv}%</p>
              <p>Brewery: <a href={this.props.beer.breweries[0].website}>{this.props.beer.breweries[0].name}</a></p>
              <p>Style: {this.props.beer.style.name}</p>
            </div>
            );
  }
}

window.BeerEntry = BeerEntry;