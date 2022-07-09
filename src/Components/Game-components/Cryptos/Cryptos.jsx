class Cryptos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      elapsed: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.gameOver !== this.props.gameOver && nextProps.gameOver) {
      clearInterval(this.timer);
      this.setState({ elapsed: 0 });
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ elapsed: this.state.elapsed + 1 });
    }, 1000);
  }

  render() {
    return (
      <div className="area_footer">
        <p>Turns : {this.props.turns}</p>
        <p>Time : {this.state.elapsed} sec</p>
      </div>
    );
  }
}

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.status === "unselected") {
      this.props.onClickListener(this.props.index);
    } else {
      console.warn("The tile has already been " + this.props.status);
    }
  }
  render() {
    return (
      <div
        onClick={this.handleClick}
        className={
          "tile" +
          (this.props.status === "selected"
            ? "tile--selected"
            : this.props.status === "matched"
            ? "tile--selected tile--matched"
            : "")
        }
      >
        <div className="tile--front" />
        <div
          className="tile--back"
          style={{ backgroundColor: this.props.accent }}
        >
          {this.props.icon}
        </div>
      </div>
    );
  }
}
class PlayArea extends React.Component{
    tiles= [
        {
            name: "DogeCoin", 
            accent: "",
            icon: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Dogecoin-DOGE-icon.png",
        },
        {
            name: "Ethereum", 
            accent: "",
            icon: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Ethereum-ETH-icon.png",
        },
        {
            name: "Bitcoin", 
            accent: "",
            icon: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Dogecoin-DOGE-icon.png",
        },
        {
            name: "Bitcoin", 
            accent: "",
            icon: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Dogecoin-DOGE-icon.png",
        },
        {
            name: "Bitcoin", 
            accent: "",
            icon: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Dogecoin-DOGE-icon.png",
        },
        {
            name: "Bitcoin", 
            accent: "",
            icon: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Dogecoin-DOGE-icon.png",
        },
        {
            name: "Bitcoin", 
            accent: "",
            icon: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Dogecoin-DOGE-icon.png",
        },
        {
            name: "Bitcoin", 
            accent: "",
            icon: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Dogecoin-DOGE-icon.png",
        },

    ]
}
