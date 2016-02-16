'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  ListView,
  ToolbarAndroid
} from 'react-native';

import Message from './message';

const fixture = [
  {id: 1, from: 'Ola folkestad', text: 'Wtf mate, ballene på bordet'},
  {id: 2, from: 'Jobi', text: 'Vi trenger mer POW og WOW.'},
  {id: 3, from: 'Toan', text: 'Jeg trenger nytt visittkort:'},
];


class MessagePage extends Component {
  constructor(props) {
    super(props);
    
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(fixture)
    };
  }

  render() {
    return (
      <ListView 
        style={styles.container}
        dataSource={this.state.dataSource} 
        renderRow={(data) => <Message {...data} />} />
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }

});

export default MessagePage;
    