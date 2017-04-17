import React from 'react';
import moment from 'moment';

import { View, Text } from 'react-native';
import {ListItem} from 'react-native-elements';

const badgeConfig = (color) => {
  return {
    value: '',
    badgeContainerStyle: { backgroundColor: color }
  }
};

export default class Project extends React.Component {
  render() {
    const {title, url, availability} = this.props;

    const getAvailabilityColor = () => {
      if (!availability) {
        return 'grey';
      }
      switch (availability.status) {
        case 0:
          return 'grey';
        case 10:
          return 'green';
        case 20:
          return 'orange';
        case 30:
          return 'red';
        case 40:
          return 'grey';
        default:
          return 'grey';
      }
    }

    const lastCheckDate = () => {
      if (!availability) {
        return 'Never checked';
      }

      const checkDate = moment(availability.createdAt).calendar();
      return `Last checked: ${checkDate}`;
    };

    return (
      <ListItem
        title={title}
        subtitle={lastCheckDate()}
        badge={badgeConfig(getAvailabilityColor())}
        hideChevron
      />
    );
  }
}
