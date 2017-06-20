class App extends React.Component {

  render() {
    return ( <section>
              <div className='divider' id='search'></div>
              <div id='list-view'></div>
              <div id='saved-view'></div>
            </section>
            );
  }
}

var choices = ['Please choose an option', 'All'];

window.App = App;

