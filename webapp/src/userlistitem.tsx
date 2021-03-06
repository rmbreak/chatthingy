import * as React from 'react';

interface Props {
  name: string;
}

class UserListItem extends React.Component<Props, {}> {
  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
}

export default UserListItem;
