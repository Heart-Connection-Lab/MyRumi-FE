// import {
//   RecordingPresets,
//   useAudioRecorder,
//   useAudioRecorderState,
// } from "expo-audio";
// import * as MediaLibrary from "expo-media-library";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  // const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  // const recorderState = useAudioRecorderState(audioRecorder);
  // const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  // const record = async () => {
  //   await audioRecorder.prepareToRecordAsync();
  //   audioRecorder.record();
  // };
  // const router = useRouter();

  // 추후 로그인되지 않았을 경우에만 이동하도록 수정 예정
  // useEffect(() => {
  //   // 아직 라우터가 준비되지 않음
  //   router.replace("/entry");
  // }, [router]);
  // const stopRecording = async () => {
  //   await audioRecorder.stop();
  //   const uri = recorderState.url;
  //   if (!uri) {
  //     Alert.alert("실패", "녹음 파일 경로를 찾을 수 없습니다.");
  //     return;
  //   }

  //   try {
  //     // 녹음 asset 생성
  //     const asset = await MediaLibrary.createAssetAsync(uri);
  //     // 녹음을 저장할 album(MyRumi) 존재 여부 확인
  //     const album = await MediaLibrary.getAlbumAsync("MyRumi");
  //     if (!album) {
  //       await MediaLibrary.createAlbumAsync("MyRumi", asset, false);
  //     } else {
  //       // await MediaLibrary.addAssetsToAlbumAsync();
  //     }
  //   } catch (e) {
  //     Alert.alert("저장 실패", "녹음 파일을 앨범에 저장할 수 없습니다.");
  //   }
  // };

  // useEffect(() => {
  //   (async () => {
  //     const { status: audioStatus } =
  //       await AudioModule.requestRecordingPermissionsAsync();
  //     const { status: mediaLibStatus } = await requestPermission();
  //     if (audioStatus! == "granted") {
  //       Alert.alert("마이크 권한이 부여되지 않았습니다.");
  //     }
  //     if (mediaLibStatus !== "granted") {
  //       Alert.alert("미디어 라이브러리 권한이 부여되지 않았습니다.");
  //     }

  //     setAudioModeAsync({
  //       playsInSilentMode: true,
  //       allowsRecording: true,
  //     });
  //   })();
  // }, []);

  return (
    <View style={styles.container}>
      {/* <Button
        title={recorderState.isRecording ? "Stop Recording" : "Start Recording"}
        onPress={recorderState.isRecording ? stopRecording : record}
      /> */}
      <Text>스플래시</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});
