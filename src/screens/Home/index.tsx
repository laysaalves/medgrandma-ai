import { useState } from 'react'
import { Alert, Image, ScrollView, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as ImageManipulator from 'expo-image-manipulator'

import { styles } from './styles'

import { Identification } from '../../components/Identification';
import { Button } from '../../components/Button'
import { Voice } from '../../components/Voice'

export function Home() {
  const [selectedImageUri, setSelectedImageUri] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSelectImage() {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if(status !== ImagePicker.PermissionStatus.GRANTED){
        return Alert.alert("Vovó, habilite a permissão de usar a galera para eu ver a foto do seu remédio!")
      }

      setIsLoading(true);

      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4,4],
        quality: 1
      });

      if(response.canceled){
        return setIsLoading(false);
      }

      if(!response.canceled){
        const ImgManipuled = await ImageManipulator.manipulateAsync(
          response.assets[0].uri,
          [{ resize: {width: 900}}],
          {
            compress: 1,
            format: ImageManipulator.SaveFormat.JPEG,
            base64: true
          }
        );

        setSelectedImageUri(ImgManipuled.uri);
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Button onPress={handleSelectImage} />

          <Image
            source={{ uri: selectedImageUri }}
            style={styles.image}
            resizeMode="cover"
          />

      <View style={styles.bottom}>
      <Voice message="Primeiro clique aqui, vovó!" />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 24 }}>
          <View style={styles.identification}>
            <Identification data={{ name: 'Descrição' }} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
 }