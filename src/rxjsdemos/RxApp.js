import React, { Component } from "react";
import { messageService } from "./services/message.service";

export default class RxApp extends Component {
  sendMessage() {
    messageService.sendMessage("Message from provider RxJS 7 has come");
  }
  clearMessages() {
    messageService.clearMessages();
  }
  render() {
    return (
      <div className="bg-warning">
        <h2>React + RxJS component communication</h2>
        <button onClick={this.sendMessage} className="btn btn-success">
          Send message to all
        </button>
        <button onClick={this.clearMessages} className="btn btn-danger">
          Clear message
        </button>
      </div>
    );
  }
}
