import React from 'react';
import ChannellList from './ChannelList';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { channels, messages } = this.props;
    return (
      <div className="row h-100">
        <ChannellList channels={channels} />
        <div className="d-flex flex-column col-sm-10 border no-gutter">
          <div className="d-flex flex-grow-1">
            <textarea className="flex-grow-1">{messages}</textarea>
          </div>
          <div>
            <input className="form-control form-control-sm" type="text" placeholder="Print your message here..." />
          </div>
        </div>
      </div>
    );
  }
}
