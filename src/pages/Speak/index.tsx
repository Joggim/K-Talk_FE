import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Container,
  Card,
  Korean,
  Feedback,
  Translation,
  AudioContainer,
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
import { dummyAudio } from './dummyAudio';

const SpeakPage: React.FC = () => {
  const location = useLocation();
  const { korean, translation } = location.state || {
    korean: '문장이 없습니다.',
    translation: 'No translation available.',
  };

  const [audioUrl, setAudioUrl] = useState(dummyAudio.generated.audioUrl);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [userText, setUserText] = useState<string | null>(null);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const playAudio = () => {
    new Audio(audioUrl).play();
  };

  const startRecording = async () => {
    setRecordedAudio(null);
    setFeedback(null);
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
      setFeedback(dummyAudio.analysis.data.feedback);
    }, 2000);
  };

  const compareText = (original: string, userText: string) => {
    if (!userText) return [];
    return original.split('').map((char, index) => ({
      char,
      correct: userText[index] === char, // 해당 글자가 맞으면 true, 틀리면 false
    }));
  };
  const comparedText = userText ? compareText(korean, userText) : null;

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
    console.log('prev');
  };

  const handleNext = () => {
    console.log('next');
  };

  return (
    <Container>
      <TopBar />
      <Card>
        <Korean>
          {!comparedText ? (
            <StyledText $variant="headingXL" color={theme.colors.text.tertiary}>
              {korean}
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

        {feedback && (
          <Feedback $variant="captionRegular" color={theme.colors.state.error}>
            {feedback}
          </Feedback>
        )}

        <AudioContainer>
          {!isRecording && (
            <AudioItem onClick={playAudio}>
              <Sound color={theme.colors.brand.primary} />
              <StyledText
                $variant="bodyMediumRegular"
                color={theme.colors.brand.primary}
              >
                모범 발음
              </StyledText>
            </AudioItem>
          )}
          {recordedAudio && (
            <AudioItem onClick={playRecordedAudio}>
              <MySound color={theme.colors.brand.primary} />
              <StyledText
                $variant="bodyMediumRegular"
                color={theme.colors.brand.primary}
              >
                내 발음
              </StyledText>
            </AudioItem>
          )}
        </AudioContainer>

        <Translation
          $variant="captionRegular"
          color={theme.colors.text.primary}
        >
          {translation}
        </Translation>

        <ButtonContainer>
          {recordedAudio && (
            <CircleButton
              size="small"
              bgColor={theme.colors.bg.black3}
              icon={<ArrowLeft color={theme.colors.gray[500]} />}
              onClick={handlePrev}
            />
          )}
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
          {recordedAudio && (
            <CircleButton
              size="small"
              bgColor={theme.colors.bg.black3}
              icon={<ArrowRight color={theme.colors.gray[500]} />}
              onClick={handleNext}
            />
          )}
        </ButtonContainer>
      </Card>
    </Container>
  );
};

export default SpeakPage;
