import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    allColors: ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond",
      "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate",
      "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod",
      "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange",
      "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey",
      "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue",
      "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod",
      "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki",
      "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan",
      "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon",
      "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow",
      "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
      "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise",
      "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy",
      "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen",
      "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue",
      "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen",
      "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen",
      "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke",
      "Yellow", "YellowGreen"],
    colorsForBoxes: [],
  };
  componentWillMount() {
    const copyAllColors = [...this.state.allColors]
    const randomColorsForBoxes = []
    for (let i = 0; i < 32; i++) {
      let randomNumber = Math.floor(Math.random() * copyAllColors.length)
      randomColorsForBoxes.push(copyAllColors[randomNumber])
    }
    this.setState({
      colorsForBoxes: randomColorsForBoxes
    }, () => { console.log(this.state.colorsForBoxes) })
  }
  componentDidMount() {
    setInterval(() => {
      const copyAllColors = [...this.state.allColors]
      const copyAllColorsForBoxes = [...this.state.colorsForBoxes]
      let randomColorNumber = Math.floor(Math.random() * copyAllColors.length)
      let randomTargetColorNumber = Math.floor(Math.random() * copyAllColorsForBoxes.length)

      copyAllColorsForBoxes[randomTargetColorNumber] = copyAllColors[randomColorNumber]

      this.setState({
        colorsForBoxes: copyAllColorsForBoxes
      })
    }, 500);
  }
  render() {
    const colorBoxes = this.state.colorsForBoxes.map((color, index) => {
      return <div key={index} className="box" style={{ background: `${color}` }}></div>
    })

    return (
      <div className="container">
        <div className="App">
          {colorBoxes}
        </div>

      </div>

    );
  }
}



export default App;