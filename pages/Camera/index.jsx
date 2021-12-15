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
        <View style={{width: '100%', flex: 1}}>
            <CameraExpo ratio="16:9" ref={ref => setCamera(ref)} type={typeCamera} style={{height, width: '100%'}}>
            <Options>
                <Option onPress={() => {
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
                <Option style={{marginLeft: 'auto', marginRight: '39%'}} onPress={async () => setFoto(await camera.takePictureAsync())}>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="#ffffff" class="bi bi-circle" viewBox="0 0 16 16">
                        <Path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    </Svg>
                </Option>
            </Options>
            </CameraExpo>
        </View>
    )
}