import React from 'react';

const styles = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  display: 'inline-block'
}


class Box extends React.Component {
  render() {
    const { title, left, right } = this.props;
    return (
      <div style={{...styles}}>
        {title}
      </div>
    )
  }
}

export default Box;
