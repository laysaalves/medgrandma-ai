import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';

export function Button({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      {...rest}
    >
      <MaterialIcons
        name="add-a-photo"
        color="#000"
        size={24}
      />
    </TouchableOpacity>
  );
}