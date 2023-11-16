import { MqttContext } from './MqttContext';
import { MirrorContext } from '../contexts/MirrorContext';
import { useContext } from 'react';
import { get } from 'lodash';

function useMqttContextTopic(topic) {
    const { messages = {} } = useContext(MirrorContext);

    return () => {
        return get(messages, topic, null);
    }
}

export default useMqttContextTopic;
