import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import get from 'lodash/get';
import {LIVE_STATUS} from '../../utils/constants';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  roomName: {
    fontSize: 16,
    color: 'black',
  },
  liveStatus: {
    fontSize: 16,
    marginTop: 10,
    color: 'black',
  },
  statusIcon: {
    width: 20,
    height: 20,
  },
  onLiveIcon: {
    width: 20,
    height: 10,
  },
});

const LiveStreamCard = ({data, onPress}) => {
  const roomName = get(data, 'roomName', '');
  const liveStatus = get(data, 'liveStatus', LIVE_STATUS.PREPARE);
  let statusIcon = null;
  switch (liveStatus) {
    case LIVE_STATUS.PREPARE:
      statusIcon = (
        <Image
          source={require(`../../assets/ico_wait.png`)}
          style={styles.statusIcon}
        />
      );
      break;
    case LIVE_STATUS.ON_LIVE:
      statusIcon = (
        <Image
          source={require(`../../assets/ico_live.png`)}
          style={styles.onLiveIcon}
        />
      );
      break;
    case LIVE_STATUS.FINISH:
      statusIcon = (
        <Image
          source={require(`../../assets/ico_replay.png`)}
          style={styles.statusIcon}
        />
      );
      break;
    default:
      statusIcon = (
        <Image
          source={require(`../../assets/ico_wait.png`)}
          style={styles.statusIcon}
        />
      );
      break;
  }
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(data)}>
      <Text style={styles.roomName}>Streamer by: {roomName}</Text>
      {statusIcon}
    </TouchableOpacity>
  );
};

LiveStreamCard.propTypes = {
  data: PropTypes.shape({}),
  onPress: PropTypes.func,
};

LiveStreamCard.defaultProps = {
  data: null,
  onPress: () => null,
};
export default LiveStreamCard;
