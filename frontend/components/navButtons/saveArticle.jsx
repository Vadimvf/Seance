import React from 'react';
import ErrorStore from '../../stores/error';

class SaveArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
    };
  }
  componentDidMount() {
    this.statusListener = ErrorStore.addListener(this.onChange);
  }
  componentWillUnmount = () => {
    this.statusListener.remove();
  }
  onChange = () => {
    this.setState({
      status: ErrorStore.currentStatus(),
    });
  }
  render() {
    return (
      <li className="article--info-save-status" >
        {this.state.status}
      </li>
    );
  }
}

export default SaveArticle;
