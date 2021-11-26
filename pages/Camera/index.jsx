import React, { useState, useEffect, useRef } from 'react'
import { View, Dimensions, TouchableOpacity, Text } from 'react-native'
import { Camera as CameraExpo } from 'expo-camera'
import * as fileSystem from 'expo-file-system'
import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library'
import { API_KEY, API_URL } from '@env'

export default function Camera({ onFullScreen, aluno }) {
    const [permissionCamera, setPermissionCamera] = useState(false)
    const [typeCamera, setTypeCamera] = useState(CameraExpo.Constants.Type.back)
    const [camera, setCamera] = useState(false)
    const [foto, setFoto] = useState(null)

    useEffect(() => {
        onFullScreen(true)
    }, [])

    useEffect(() => {
        (async () => {
            const { status } = await CameraExpo.requestCameraPermissionsAsync();
            setPermissionCamera(status === 'granted');
        })();
    }, [])

    

    useEffect(() => {
        if (foto) {
            // MediaLibrary.createAssetAsync(foto.uri).then(resu => {
            //     console.log(resu)
            // })
            console.log(aluno)
            fileSystem.uploadAsync(`${API_URL}/mobile-foto`, foto.uri, {
                headers: {
                    'Authorization': `key ${API_KEY}`
                },
                fieldName: 'foto',
                httpMethod: 'PATCH',
                parameters: {
                    id: aluno
                },
                uploadType: fileSystem.FileSystemUploadType.MULTIPART
            }).then(() => console.log('Foto enviada'))
        }
    }, [foto])

    const dimensions = useRef(Dimensions.get("window"))
    const screenWidth = dimensions.current.width
    const height = Math.round((screenWidth*16)/9)

    return (
        <View style={{width: '100%', flex: 1}}>
            <CameraExpo ratio="16:9" ref={ref => setCamera(ref)} type={typeCamera} style={{height, width: '100%'}}>
            <View style={{flex: 1, backgroundColor: 'transparent', flexDirection: 'row', margin: 20}}>
                <TouchableOpacity
                style={{flex: 0.1, alignSelf: 'flex-end', alignItems: 'center'}}
                onPress={() => {
                    setTypeCamera(
                    typeCamera === CameraExpo.Constants.Type.back
                        ? CameraExpo.Constants.Type.front
                        : CameraExpo.Constants.Type.back
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
            </CameraExpo>
        </View>
    )
}