import React, { FC, useState, useEffect, useRef } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import { Dimensions } from 'react-native'
import { Camera as CameraExpo, CameraCapturedPicture } from 'expo-camera'
import * as fileSystem from 'expo-file-system'
import * as MediaLibrary from 'expo-media-library'
import { IconMaterial, Container, ContainerCamera, CameraComponent, Options, ButtonBack, ContainerFlip, ContainerCircle, IconFontAwesome, ContainerFlash } from './style'
import { url, key } from '../../env'

type Iprops = NativeStackScreenProps<Inavigation, 'Camera'>

const Camera: FC<Iprops> = ({ route, navigation }) => {
    const { aluno } = route.params
    const [permissionCamera, setPermissionCamera] = useState(false)
    const [typeCamera, setTypeCamera] = useState(CameraExpo.Constants.Type.back)
    const [flashCamera, setFlashCamera] = useState(CameraExpo.Constants.FlashMode.off)
    const [camera, setCamera] = useState<CameraExpo | null>(null)
    const [foto, setFoto] = useState<CameraCapturedPicture | null>(null)
    
    useEffect(() => {
        async function veri() {
            const { status } = await CameraExpo.requestCameraPermissionsAsync()
            setPermissionCamera(status === 'granted')
        }

        veri().then()
    }, [])
    
    useEffect(() => {
        async function save() {
            navigation.navigate('Turmas', {
                success: true
            })

            // await MediaLibrary.createAssetAsync(foto.uri)
            
            await fileSystem.uploadAsync(`${url}/alunos/fotos`, foto!.uri, {
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

    const dimensions = useRef(Dimensions.get('window'))
    const screenWidth = dimensions.current.width
    const height = Math.round((screenWidth*16)/9)
    
    function VeriFlash() {
        if (flashCamera === CameraExpo.Constants.FlashMode.off) {
            return <IconMaterial name="flash-on" size="54"/>
        } else {
            return <IconMaterial name="flash-off" size="54"/>
        }
    }

    return (
        <Container>
            <ContainerCamera>
                <CameraComponent
                    ratio="16:9"
                    height={height}
                    type={typeCamera}
                    flashMode={flashCamera}
                    ref={ref => setCamera(ref)}
                >
                    <Options>
                        <ButtonBack onClick={() => navigation.goBack()}/>
                        <ContainerFlip 
                            onPress={() => setTypeCamera(typeCamera === CameraExpo.Constants.Type.back? CameraExpo.Constants.Type.front : CameraExpo.Constants.Type.back)}
                        >
                            <IconMaterial name="refresh" size={54}/>
                        </ContainerFlip>
                        <ContainerCircle 
                            onPress={async () => (
                                setFoto(await camera!.takePictureAsync())
                            )}
                        >
                            <IconFontAwesome name="circle-thin" size={66}/>
                        </ContainerCircle>
                        <ContainerFlash
                            onPress={() => setFlashCamera(flashCamera === CameraExpo.Constants.FlashMode.off? CameraExpo.Constants.FlashMode.torch : CameraExpo.Constants.FlashMode.off)}
                        >
                            <VeriFlash/>
                        </ContainerFlash>
                    </Options>
                </CameraComponent>
            </ContainerCamera>
        </Container>
    )
}

export default Camera