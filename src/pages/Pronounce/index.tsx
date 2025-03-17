import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
  Container,
  Card,
  Korean,
  Translation,
  AudioContainer,
  AudioItemWrapper,
  AudioItem,
  ButtonContainer,
} from './styles';
import TopBar from '../../components/TopBar';
import { StyledText } from '../../components/StyledText/StyledText.styles';
import CircleButton from '../../components/CircleButton';
import Microphone from '../../components/Icons/Microphone';
import Pause from '../../components/Icons/Pause';
import Retry from '../../components/Icons/Retry';
import Sound from '../../components/Icons/Sound';
import MySound from '../../components/Icons/MySound';
import ArrowLeft from '../../components/Icons/ArrowLeft';
import ArrowRight from '../../components/Icons/ArrowRight';
import HighlightedText from '../../components/HighlightedText';
import theme from '../../styles/theme';
import { dummySentences } from '../SentenceList/dummySentences';
import { dummyPronunciationAnalysis } from './dummyPronounciationAnalysis';

const PronouncePage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const location = useLocation();
  const initialIndex = location.state?.index ?? 0;

  // 나중에 백엔드 연동하면, 이 부분을 API 호출로 대체
  const [sentences, setSentences] = useState(dummySentences);
  const [currentSentenceIndex, setCurrentSentenceIndex] =
    useState<number>(initialIndex);

  useEffect(() => {
    // 나중에 백엔드 연동 시 `fetchSentences(topicId)`로 대체
    if (topicId) {
      const filtered = dummySentences.filter(
        (sentence) => sentence.topic_id === Number(topicId)
      );
      setSentences(filtered);
    }
  }, [topicId]);

  const currentSentence = sentences[currentSentenceIndex];

  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null);
  const [userText, setUserText] = useState<string | null>(null);
  const [pronunciationErrors, setPronunciationErrors] = useState<
    { char: string; index: number }[]
  >([]);

  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // 문장 업데이트 시 초기화
  useEffect(() => {
    if (currentSentence) {
      setUserText(null);
      setRecordedAudio(null);
      setPronunciationErrors([]);
    }
  }, [currentSentenceIndex, sentences]);

  const playModelPronunciation = () => {
    //new Audio(currentSentence.modelPronunciation).play();
    console.log(currentSentence.modelAudioUrl, ' 재생');
  };

  const requestMicrophoneAccess = async () => {
    try {
      // 권한 상태 확인
      const permission = await navigator.permissions.query({
        name: 'microphone' as any,
      });

      if (permission.state === 'denied') {
        alert(
          '마이크 사용이 차단되었습니다. 브라우저 설정에서 마이크 권한을 허용해주세요.'
        );
        return false;
      }

      return true;
    } catch (error) {
      console.error('마이크 권한 확인 실패:', error);
      return false;
    }
  };

  const startRecording = async () => {
    const hasPermission = await requestMicrophoneAccess();
    if (!hasPermission) return;

    setRecordedAudio(null);
    setUserText(null);
    setPronunciationErrors([]);
    setIsRecording(true);
    audioChunksRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: 'audio/wav',
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordedAudio(audioUrl);

        await uploadAudio(audioBlob);
      };

      mediaRecorder.start();
    } catch (error) {
      console.error('마이크 권한 오류:', error);
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: 'audio/wav',
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordedAudio(audioUrl);

        await uploadAudio(audioBlob);
      };
    }
  };

  const uploadAudio = async (audioBlob: Blob) => {
    try {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recorded_audio.wav'); // 파일 추가
      formData.append('sentenceId', String(currentSentence.id)); // 문장 ID 추가 (필요 시)

      const response = await fetch('https://your-api.com/sentences/pronounce', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('오디오 업로드 실패');

      const responseData = await response.json();
      console.log('서버 응답:', responseData);

      // 서버에서 반환된 피드백 반영
      //setUserText(responseData.userText);
      //setPronunciationErrors(responseData.pronunciationErrors);
      setUserText(dummyPronunciationAnalysis.data.userText);
      setPronunciationErrors(
        dummyPronunciationAnalysis.data.pronunciationErrors
      );
    } catch (error) {
      console.error('오디오 업로드 중 오류:', error);
    }
  };

  useEffect(() => {
    if (recordedAudio && audioPlayerRef.current) {
      audioPlayerRef.current.src = recordedAudio;
    }
  }, [recordedAudio]);

  const playRecordedAudio = () => {
    /*
    if (dummyPronunciationAnalysis.data.userPronunciation) {
      new Audio(dummyPronunciationAnalysis.data.userPronunciation).play();
    }
    */
    console.log(dummyPronunciationAnalysis.data.userAudioUrl, ' 재생');
  };

  const handlePrev = () => {
    if (currentSentenceIndex > 0) {
      setCurrentSentenceIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentSentenceIndex < sentences.length - 1) {
      setCurrentSentenceIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Container>
      <TopBar />
      <Card>
        <Korean>
          {!userText ? (
            <StyledText $variant="headingXL" color={theme.colors.text.tertiary}>
              {currentSentence.korean}
            </StyledText>
          ) : (
            <HighlightedText
              original={userText}
              correct={currentSentence.korean}
              errors={pronunciationErrors}
              size="headingXL"
            />
          )}
        </Korean>

        <AudioContainer>
          <AudioItemWrapper>
            <AudioItem onClick={playModelPronunciation}>
              <Sound color={theme.colors.brand.primary} />
              <StyledText
                $variant="bodyMediumRegular"
                color={theme.colors.brand.primary}
              >
                모범 발음
              </StyledText>
            </AudioItem>
          </AudioItemWrapper>

          <AudioItemWrapper>
            {recordedAudio ? (
              <AudioItem onClick={playRecordedAudio}>
                <MySound color={theme.colors.brand.primary} />
                <StyledText
                  $variant="bodyMediumRegular"
                  color={theme.colors.brand.primary}
                >
                  내 발음
                </StyledText>
              </AudioItem>
            ) : (
              <div style={{ width: '100px' }} /> // 내 발음이 없을 때 빈 공간 유지
            )}
          </AudioItemWrapper>
        </AudioContainer>

        <Translation
          $variant="captionRegular"
          color={theme.colors.text.primary}
        >
          {currentSentence.translation}
        </Translation>

        <ButtonContainer>
          <CircleButton
            size="small"
            bgColor={theme.colors.bg.black3}
            icon={<ArrowLeft color={theme.colors.gray[500]} />}
            onClick={handlePrev}
            disabled={currentSentenceIndex === 0}
          />

          <CircleButton
            size="big"
            bgColor={theme.colors.brand.primary}
            icon={
              isRecording ? (
                <Pause />
              ) : recordedAudio ? (
                <Retry />
              ) : (
                <Microphone />
              )
            }
            onClick={isRecording ? stopRecording : startRecording}
          />

          <CircleButton
            size="small"
            bgColor={theme.colors.bg.black3}
            icon={<ArrowRight color={theme.colors.gray[500]} />}
            onClick={handleNext}
            disabled={currentSentenceIndex === dummySentences.length - 1}
          />
        </ButtonContainer>
      </Card>
    </Container>
  );
};

export default PronouncePage;
