import React, { useState, useRef } from 'react';
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
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const playAudio = () => {
    new Audio(audioUrl).play();
  };

  const startRecording = async () => {
    setRecordedAudio(null);
    setFeedback(null);
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
      setFeedback(dummyAudio.analysis.data.feedback);
    }, 2000);
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
        <Korean $variant="headingXL" color={theme.colors.text.tertiary}>
          {korean}
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
            <AudioItem>
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
