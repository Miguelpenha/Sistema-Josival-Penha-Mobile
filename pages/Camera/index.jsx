import React, { useState, useEffect, useRef } from 'react'
import { View, Dimensions } from 'react-native'
import { Camera as CameraExpo } from 'expo-camera'
import * as fileSystem from 'expo-file-system'
import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library'
import { API_KEY, API_URL } from '@env'
import { Options, Option } from './style'
import { Svg, Path } from 'react-native-svg'

export default function Camera({ route, navigation }) {
    const { aluno } = route.params
    const [permissionCamera, setPermissionCamera] = useState(false)
    const [typeCamera, setTypeCamera] = useState(CameraExpo.Constants.Type.back)
    const [flashCamera, setFlashCamera] = useState(CameraExpo.Constants.FlashMode.off)
    const [camera, setCamera] = useState(false)
    const [foto, setFoto] = useState(null)

    useEffect(() => {
        (async () => {
            const { status } = await CameraExpo.requestCameraPermissionsAsync();
            setPermissionCamera(status === 'granted');
        })();
    }, [])

    useEffect(() => {
        async function save() {
            MediaLibrary.createAssetAsync(foto.uri).then()
            navigation.navigate('Turmas', {
                success: true
            })
            const url = API_URL
            const key = API_KEY
            await fileSystem.uploadAsync(`${url}/alunos/fotos`, foto.uri, {
                headers: {
                    'Authorization': `key ${key}`
                },
                fieldName: 'foto',
                httpMethod: 'PATCH',
                parameters: {
                    id: aluno
                },
                uploadType: fileSystem.FileSystemUploadType.MULTIPART
            })
        }

        if (foto) {
            save().then()
        }
    }, [foto])

    const dimensions = useRef(Dimensions.get("window"))
    const screenWidth = dimensions.current.width
    const height = Math.round((screenWidth*16)/9)

    return (
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#000000', paddingTop: '4.5%'}}>
            <CameraExpo ratio="16:9" ref={ref => setCamera(ref)} flashMode={flashCamera} type={typeCamera} style={{height, width: '100%'}}>
                <Options>
                    <Option style={{alignSelf: 'flex-start', margin: '2%', position: 'absolute'}} margin onPress={() => navigation.goBack()}>
                        <Svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#ffffff">
                            <Path d="M0 0h24v24H0V0z" fill="none"/>
                            <Path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                        </Svg>
                    </Option>
                    <Option style={{marginRight: 'auto'}} onPress={() => {
                        setTypeCamera(
                        typeCamera === CameraExpo.Constants.Type.back
                            ? CameraExpo.Constants.Type.front
                            : CameraExpo.Constants.Type.back
                        )
                    }}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#ffffff" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                            <Path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                            <Path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                        </Svg>
                    </Option>
                    <Option style={{marginLeft: 'auto', marginRight: 'auto'}} onPress={async () => setFoto(await camera.takePictureAsync())}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="#ffffff" class="bi bi-circle" viewBox="0 0 16 16">
                            <Path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        </Svg>
                    </Option>
                    <Option style={{}} onPress={() => {
                        console.log(CameraExpo.Constants.FlashMode)
                        setFlashCamera(
                        flashCamera === CameraExpo.Constants.FlashMode.off
                            ? CameraExpo.Constants.FlashMode.torch
                            : CameraExpo.Constants.FlashMode.off
                        )
                    }}>
                        {flashCamera === CameraExpo.Constants.FlashMode.off ? <Svg xmlns="http://www.w3.org/2000/svg" height="46px" viewBox="0 0 24 24" width="46px" fill="#ffffff">
                            <Path d="M0 0h24v24H0V0z" fill="none"/>
                            <Path d="M17 10h-3.61l2.28 2.28zm0-8H7v1.61l6.13 6.13zm-13.59.86L2 4.27l5 5V13h3v9l3.58-6.15L17.73 20l1.41-1.41z"/>
                        </Svg> : <Svg xmlns="http://www.w3.org/2000/svg" height="46px" viewBox="0 0 24 24" width="46px" fill="#ffffff">
                            <Path d="M0 0h24v24H0V0z" fill="none"/>
                            <Path d="M7 2v11h3v9l7-12h-4l3-8z"/>
                        </Svg>}
                    </Option>
                </Options>
            </CameraExpo>
        </View>
    )
}