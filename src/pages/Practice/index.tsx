import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  Card,
  Passed,
  FeedbackText,
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
import { useRecoilValue } from 'recoil';
import { sentenceListState } from '../../recoil/atoms/sentenceListAtom';
import { SentenceItemDTO } from '../../apis/topics/dto';
import { FeedbackResponseData } from '../../apis/sentences/dto';
import { postSentenceFeedbackApi } from '../../apis/sentences';

const PracticePage: React.FC = () => {
  const location = useLocation();
  const sentenceId = (location.state as { sentenceId: string })?.sentenceId;

  const sentenceList = useRecoilValue(sentenceListState);
  const [sentence, setSentence] = useState<SentenceItemDTO>();

  const navigate = useNavigate();

  const getSentence = () => {
    if (!sentenceId) return;
    const id = Number(sentenceId);
    const found = sentenceList.find((s) => s.id === id);
    if (found) setSentence(found);
  };

  useEffect(() => {
    getSentence();
  }, [sentenceId]);

  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<FeedbackResponseData | null>(null);

  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const playModelPronunciation = () => {
    //new Audio(sentence.modelPronunciation).play();
    console.log(sentence?.modelAudioUrl, ' 재생');
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
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Audio = (reader.result as string).split(',')[1]; // data:audio/wav;base64,~~ 제거
        if (!sentence?.id) return;

        const response = await postSentenceFeedbackApi(
          sentence.id,
          base64Audio
        );

        if (response.success) {
          setFeedback(response.data);
        } else {
          alert('피드백 분석에 실패했습니다.');
        }
      };

      reader.readAsDataURL(audioBlob);
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
    if (feedback.userPronunciation) {
      new Audio(feedback.userPronunciation).play();
    }
    */
    console.log(feedback?.userAudioUrl, ' 재생');
  };

  // handlePrev
  const handlePrev = () => {
    const currentIndex = sentenceList.findIndex((s) => s.id === sentence?.id);
    if (currentIndex > 0) {
      const prevSentence = sentenceList[currentIndex - 1];
      setSentence(prevSentence);
      setFeedback(null);
      navigate('.', { state: { sentenceId: String(prevSentence.id) } });
    }
  };

  // handleNext
  const handleNext = () => {
    const currentIndex = sentenceList.findIndex((s) => s.id === sentence?.id);
    if (currentIndex < sentenceList.length - 1) {
      const nextSentence = sentenceList[currentIndex + 1];
      setSentence(nextSentence);
      setFeedback(null);
      navigate('.', { state: { sentenceId: String(nextSentence.id) } });
    }
  };

  return (
    <Container>
      <TopBar />
      {sentence && (
        <Card>
          {feedback && (
            <Passed $passed={feedback.passed}>
              {feedback.passed ? '통과' : '실패'}
            </Passed>
          )}

          {!feedback?.passed && (
            <FeedbackText
              $variant="captionRegular"
              color={theme.colors.state.error}
            >
              {feedback?.feedBack}
            </FeedbackText>
          )}

          <Korean>
            {feedback ? (
              <HighlightedText
                original={feedback.userText}
                correct={sentence.korean}
                errors={
                  Array.isArray(feedback.pronunciationErrors)
                    ? feedback.pronunciationErrors.map(
                        ({ correct, index }) => ({
                          char: correct,
                          index,
                        })
                      )
                    : []
                }
                size="headingXL"
              />
            ) : (
              <StyledText
                $variant="headingXL"
                color={theme.colors.text.tertiary}
              >
                {sentence.korean}
              </StyledText>
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
            {sentence.translation}
          </Translation>

          <ButtonContainer>
            <CircleButton
              size="small"
              bgColor={theme.colors.bg.black3}
              icon={<ArrowLeft color={theme.colors.gray[500]} />}
              onClick={handlePrev}
              disabled={
                sentenceList.findIndex((s) => s.id === Number(sentenceId)) === 0
              }
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
              disabled={
                sentenceList.findIndex((s) => s.id === Number(sentenceId)) ===
                sentenceList.length - 1
              }
            />
          </ButtonContainer>
        </Card>
      )}
    </Container>
  );
};

export default PracticePage;
