import React, { Component } from "react";
import { messageService } from "./services/message.service";

export default class Consumer1 extends Component {
  state = { messages: [] };

  componentDidMount() {
    this.subscription = messageService.getMessage().subscribe((msg) => {
      if (msg) {
        this.setState({ messages: [...this.state.messages, msg] });
      } else {
        this.setState({ messages: [] });
      }
    });
  }
  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <div className="bg-primary">
        <h2>I am consumer 1</h2>
        {this.state.messages.map((msg, index) => (
          <div key={index} className="alert alert-primary">
            {msg.text}
          </div>
        ))}
      </div>
    );
  }
}
