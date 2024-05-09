import { Text, View } from 'react-native';

import { styles } from './styles';

export type IdentificationProps = {
  name: string;
}

type Props = {
  data: IdentificationProps;
}

export function Identification({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {data.name}
      </Text>
    </View>
  );
}