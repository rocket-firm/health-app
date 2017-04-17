import Navigator from 'react-native'

export default (state: Navigator.SceneConfigs.FloatFromRight, action) => {
  switch (action.type) {
    case 'NAVIGATOR_BACK':
      return Navigator.SceneConfigs.FloatFromLeft

    default:
      return state;
  }
}
