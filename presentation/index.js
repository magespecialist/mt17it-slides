// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("../assets/custom.css");

const theme = createTheme({
  background: "#e0e0e0",
  heading: "black",
  text: "#333",
  secondary: "#296891",
  primary: "#d0007d"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const slidesImports = [
  import("./slides/00_splash.js"),
  import("./slides/01_intro.js"),
  import("./slides/02_problem.js"),
  import("./slides/03_history.js"),
  import("./slides/04_magento1.js"),
  import("./slides/05_fpc1.js"),
  import("./slides/06_fpc2.js"),
  import("./slides/07_magento2_solution.js"),
  import("./slides/08_magento2_solution.js"),
  import("./slides/09_idea.js"),
  import("./slides/10_choice.js"),
  import("./slides/11_react.js"),
  import("./slides/12_react.js"),
  import("./slides/13_react.js"),
  import("./slides/14_react.js"),
  import("./slides/15_react.js"),
  import("./slides/16_state.js"),
  import("./slides/17_flux.js"),
  import("./slides/18_state.js"),
  import("./slides/19_redux.js"),
  import("./slides/20_reducers_actions.js"),
  import("./slides/21_reducers_actions.js"),
  import("./slides/22_axios.js"),
  import("./slides/23_axios.js"),
  import("./slides/24_axios.js"),
  import("./slides/25_cors.js"),
  import("./slides/26_cors.js"),
  import("./slides/27_router.js"),
  import("./slides/28_area.js"),
  import("./slides/29_angular2.js"),
  import("./slides/30_qa.js"),
];

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading" />)
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then((slidesImportsResolved) => {
      slidesImportsResolved.forEach((slide) => {
        importedSlides.push(slide.default);
      });
      this.setState({ slides: importedSlides });
    });
  }


  render() {
    const { slides } = this.state;
    return (
      <Deck progress="pacman" transition={["zoom", "spin"]} transitionDuration={500} theme={theme}>
        {
          slides.map((slide, index) => {
            return React.cloneElement(slide, { key: index });
          })
        }
      </Deck>
    );
  }
}
