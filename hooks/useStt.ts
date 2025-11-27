import {
  ExpoSpeechRecognitionModule,
  useSpeechRecognitionEvent,
} from "expo-speech-recognition";
import { useEffect, useState } from "react";

type UseSttProps = {
  isListening: boolean;
  onFinalResult?: (text: string) => void;
  onPartialResult?: (text: string) => void;
};

export function useStt({
  isListening,
  onFinalResult,
  onPartialResult,
}: UseSttProps) {
  const [transcript, setTranscript] = useState("");

  useSpeechRecognitionEvent("start", () => {
    console.log("🎤 STT 시작");
  });

  useSpeechRecognitionEvent("end", () => {
    console.log("⛔ STT 종료");
  });

  useSpeechRecognitionEvent("result", (event) => {
    const text = event.results[0]?.transcript || "";
    const isFinal = event.isFinal;

    console.log(`📩 STT (${isFinal ? "최종" : "중간"}):`, text);
    setTranscript(text);

    if (isFinal && onFinalResult) onFinalResult(text);
    if (!isFinal && onPartialResult) onPartialResult(text);
  });

  // 🔥 network / no-speech 자동 재시작
  useSpeechRecognitionEvent("error", (event) => {
    console.log("❌ STT 오류:", event);

    // Android 특유 "no-speech" "network" 둘 다 재시작하면 고쳐짐
    if (event.error === "no-speech" || event.error === "network") {
      console.log("🔁 STT 자동 재시작...");
      setTimeout(() => {
        ExpoSpeechRecognitionModule.start({
          lang: "ko-KR",
          continuous: false,
          interimResults: false,
        });
      }, 350);
    }
  });

  // 🎤 STT 시작/종료
  useEffect(() => {
    if (isListening) {
      ExpoSpeechRecognitionModule.requestPermissionsAsync().then((res) => {
        if (!res.granted) {
          console.warn("⚠️ STT 권한 없음");
          return;
        }

        // Android는 반드시 delay 필요
        setTimeout(() => {
          ExpoSpeechRecognitionModule.start({
            lang: "ko-KR",
            continuous: false,
            interimResults: false,
          });
          console.log("🎙 STT auto-start");
        }, 300);
      });
    } else {
      console.log("🛑 STT auto-stop");
      ExpoSpeechRecognitionModule.stop();
      setTranscript("");
    }
  }, [isListening]);

  return { transcript };
}
