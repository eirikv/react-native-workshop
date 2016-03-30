'use strict';

import React, {
  Component,
  View,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import MessageList from './message-list';
import { fetchMessages, postMessage } from '../actions/actions';
import { ErrorMessage } from './error-message'
import { newMessage } from './navigation/routes';
import { navigateTo } from '../actions/actions';
import { Colors } from './../config/design';

class MessageListContainer extends Component {
  componentWillMount() {
    this.props.fetchMessages();
  }

  render() {
    if (this.props.failedToFetchMessages) {
      return <ErrorMessage />
    }

    return (
      <View style={{ flex: 1, paddingTop: 66, backgroundColor: Colors.White }}>
        <MessageList
          refreshing={ this.props.isFetchingMessages }
          messages={ this.props.messages }
          refreshView={ this.props.fetchMessages }
          navigator={this.props.navigator}
        />
      </View>
    );
  }
}

MessageListContainer.propTypes = {
  failedToFetchMessages: React.PropTypes.bool,
  isFetchingMessages: React.PropTypes.bool,
  messages: React.PropTypes.array
};

const mapStateToProps = state => {
  return {
    failedToFetchMessages: state.failedToFetchMessages,
    isFetchingMessages: state.isFetchingMessages,
    messages: state.messages
  }
}

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages(dispatch)),
  goToNewMessage: () => dispatch(navigateTo(newMessage))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageListContainer);
