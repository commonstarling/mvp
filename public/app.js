class App extends React.Component {
  render() {
    return ( <section>
              <div className="beers-list" id="list">
                <h1>Beer Suggestions</h1>
                {this.props.beers.map((beer) =>
                   (<div className="beer-entry">
                          <h5><a href="#">{beer.name}</a></h5>
                          <p>{beer.abv}</p>
                          <p>{beer.description}</p>
                          </div>))}
              </div>
              <div className="saved-beers">
                <h1>Saved Beers</h1>
              </div>
            </section>
            );
  }
}

var beerData = [
  {
    name: "Alternating Currant Sour",
    abv: '4.8%',
    description: 'American sour ales can be very light to black or take on the color of added fruits or other ingredients.'
  },
  {
    name: 'Street Pineapple Blonde',
    abv: '4.6%',
    description: 'Street Pineapple Blonde is the lightest beer we have on tap.'
  },
  {
    name: '"Mike Saw a Sasquatch" Session Ale',
    abv: '4.7',
    description: 'The true Summer Ale of Central Oregon! A Golden Ale, light and smooth. You can taste the craftsmanship in this easy drinking ale with a smooth blend of Cascade and Sterling hops and finished with a touch of Honey malt to balance it out. This is a great introduction if you are new to the world of Craft Brewing.  For established craft enthusiasts, 10 Barrel Summer Ale is a good reprieve from overly hopped and overly malty alternatives.'
  }
];

ReactDOM.render(<App beers={beerData}/>, document.getElementById('app'));