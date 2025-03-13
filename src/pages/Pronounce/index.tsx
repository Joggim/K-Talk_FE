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
import theme from '../../styles/theme';
import { dummySentences } from '../SentenceList/dummySentences';
import { dummyAudio } from './dummyAudio';

const PronouncePage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const location = useLocation();
  const initialIndex = location.state?.index ?? 0;

  // 나중에 백엔드 연동하면, 이 부분을 API 호출로 대체 가능
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

  const [audioUrl, setAudioUrl] = useState(dummyAudio.generated.audioUrl);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null);
  const [userText, setUserText] = useState<string | null>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // 문장 업데이트
  useEffect(() => {
    if (currentSentence) {
      setUserText(null);
      setRecordedAudio(null);
      setAudioUrl(dummyAudio.generated.audioUrl);
    }
  }, [currentSentenceIndex, sentences]);

  const playAudio = () => {
    new Audio(audioUrl).play();
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

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: 'audio/wav',
        });
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordedAudio(audioUrl);
        analyzeAudio();
      };

      mediaRecorder.start();
    } catch (error) {
      console.error('마이크 권한 오류:', error);
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    mediaRecorderRef.current?.stop();
  };

  const analyzeAudio = () => {
    setTimeout(() => {
      setUserText(dummyAudio.analysis.data.text);
    }, 2000);
  };

  const compareText = (original: string, userText: string) => {
    if (!userText) return [];
    return original.split('').map((char, index) => ({
      char,
      correct: userText[index] === char, // 해당 글자가 맞으면 true, 틀리면 false
    }));
  };
  const comparedText = userText
    ? compareText(currentSentence.korean, userText)
    : null;

  useEffect(() => {
    if (recordedAudio && audioPlayerRef.current) {
      audioPlayerRef.current.src = recordedAudio;
    }
  }, [recordedAudio]);

  const playRecordedAudio = () => {
    if (recordedAudio && audioPlayerRef.current) {
      audioPlayerRef.current.play().catch((error) => {
        console.error('오디오 재생 오류:', error);
      });
    }
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
          {!comparedText ? (
            <StyledText $variant="headingXL" color={theme.colors.text.tertiary}>
              {currentSentence.korean}
            </StyledText>
          ) : (
            comparedText.map((charInfo, index) => (
              <StyledText
                key={index}
                $variant="headingXL"
                color={
                  charInfo.correct
                    ? theme.colors.state.success // 맞으면 초록색
                    : theme.colors.state.error // 틀리면 빨간색
                }
              >
                {charInfo.char}
              </StyledText>
            ))
          )}
        </Korean>

        <AudioContainer>
          <AudioItemWrapper>
            <AudioItem onClick={playAudio}>
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
