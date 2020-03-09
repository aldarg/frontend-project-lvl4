import React from 'react';

const ChannelList = (props) => {
  const { channels } = props;
  return (
    <div className="col-sm-2 border no-gutter">
      Channels
      <ul className="nav flex-column">
        {channels.map((c) => (
          <li className="nav-item" key={c.id}>
            <a className="nav-link" href="#"># {c.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChannelList;
