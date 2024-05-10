import { MaterialIcons } from '@expo/vector-icons';

import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type Props = {
  message: string;
}

export function Voice({ message, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      {...rest}
    >
      <MaterialIcons
        name="play-circle"
        color="#000"
        size={28}
      />

      <Text style={styles.message}>
        {message} 
      </Text>
      </TouchableOpacity>
    </View>
  );
}