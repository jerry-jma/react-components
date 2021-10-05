
var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
)


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.item}</li>
    )
  }
}


var App = () => (
  <div>
    <h2>YOU CAN DO IT</h2>
    <GroceryList items={['Eggplant', 'Apple', 'Pineapple']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));



