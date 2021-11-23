import React, { useState, useEffect, useRef } from 'react'
import { Title } from './style'
import LoadingData from '../../components/loadingData'
import { get } from '../../api'
import { FlatList, View, TouchableOpacity, Text, Dimensions } from 'react-native'
import Aluno from '../../components/Aluno'
import { Camera } from 'expo-camera'

export default function Alunos({ turma, onFullScreen }) {
  const { data: alunos } = get(`/turmas/alunos/${turma}`)
  const [permissionCamera, setPermissionCamera] = useState(false)
  const [typeCamera, setTypeCamera] = useState(Camera.Constants.Type.back)
  const [camera, setCamera] = useState(false)
  const [foto, setFoto] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermissionCamera(status === 'granted');
    })()
  }, [])

  useEffect(() => {
    console.log(foto)
  }, [foto])

  onFullScreen(true)

  const dimensions = useRef(Dimensions.get("window"))
  const screenWidth = dimensions.current.width
  const height = Math.round((screenWidth*16)/9)

  return (
    <View style={{width: '100%', flex: 1}}>
        <Camera ratio="16:9" ref={ref => setCamera(ref)} type={typeCamera} style={{height, width: '100%'}}>
          <View style={{flex: 1, backgroundColor: 'transparent', flexDirection: 'row', margin: 20}}>
            <TouchableOpacity
              style={{flex: 0.1, alignSelf: 'flex-end', alignItems: 'center'}}
              onPress={() => {
                setTypeCamera(
                  typeCamera === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={{fontSize: 18, color: '#ffffff'}}> Flip </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 0.1, alignSelf: 'flex-end', alignItems: 'center'}}
              onPress={async () => setFoto(await camera.takePictureAsync())}>
              <Text style={{fontSize: 18, color: '#ffffff'}}> Tirar </Text>
            </TouchableOpacity>
          </View>
        </Camera>
        </View>
  )
  
  return (
    <LoadingData loading={alunos}>
        <Title>Escolha um aluno para adicionar uma foto</Title>
        <FlatList data={alunos} renderItem={({ item }) => <Aluno nome={item.nome} id={item._id} onClick={id => console.log(id)}/>} keyExtractor={item => item._id}/>
        
    </LoadingData>
  )
}