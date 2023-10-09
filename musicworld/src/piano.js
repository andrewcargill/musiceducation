import React, { Component } from 'react';
import { Howl, Howler } from 'howler';

class LowLatencyPiano extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latency: null,
    };
    this.sound = null;
  }

  handleClick = () => {
    const startTime = performance.now();

    this.sound = new Howl({
      src: ['your-audio-file.mp3'], // Replace with your MP3 file path
      onload: () => {
        const endTime = performance.now();
        const latency = endTime - startTime;
        this.setState({ latency });
        this.sound.play();
      },
    });
  };

  render() {
    const { latency } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Play with Latency</button>
        {latency !== null && (
          <p>Latency: {latency.toFixed(2)} milliseconds</p>
        )}
      </div>
    );
  }
}

export default LowLatencyPiano;
