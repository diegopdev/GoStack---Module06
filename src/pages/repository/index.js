import React from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

function Repository({ navigation }) {
  const repo = navigation.getParam('item');
  return <WebView source={{ uri: repo.html_url }} style={{ flex: 1 }} />;
}

Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

Repository.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('item').name,
});

export default Repository;
