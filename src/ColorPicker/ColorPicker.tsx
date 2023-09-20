import React from "react";

import { Container, ColorList, ColorItem } from "./ColorPicker.styled";

const options = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

interface IState {
  activeOptionIndex: number;
}

export class ColorPicker extends React.Component<{}, IState> {
  state = {
    activeOptionIndex: 0,
  };

  onClick = (index: number): void => {
    this.setState({ activeOptionIndex: index });
  };

  render() {
    const currentColor = options[this.state.activeOptionIndex];

    return (
      <Container>
        <h2>Color Picker</h2>
        <p>Current color: {currentColor.label}</p>

        <ColorList>
          {options.map(({ label, color }, index) => (
            <ColorItem
              onClick={() => this.onClick(index)}
              key={label}
              style={{
                backgroundColor: color,
                transform: `scale(${
                  index === this.state.activeOptionIndex ? 1.2 : 1
                })`,
              }}
            ></ColorItem>
          ))}
        </ColorList>
      </Container>
    );
  }
}
