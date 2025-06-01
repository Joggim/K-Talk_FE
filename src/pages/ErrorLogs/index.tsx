import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  ContentArea,
  ErrorLogSummaryCard,
  LeftWrapper,
  RightWrapper,
  ErrorCountBadge,
} from './styles';
import TopBar from '../../components/TopBar';
import ErrorItem from '../../components/ErrorItem';
import { ErrorItemProps } from '../../components/ErrorItem/dto';
import { StyledText } from '../../components/StyledText/styles';
import theme from '../../styles/theme';
import Info from '../../components/Icons/Info';
import { getErrorLogsApi } from '../../apis/pronunciationIssue';
//import { dummyErrorLogList } from './dummyErrorLogList';

const ErrorLogsPage: React.FC = () => {
  const { issueId } = useParams<{ issueId: string }>();
  const [errorCount, setErrorCount] = useState<number>(0);
  const [errorLogList, setErrorLogList] = useState<ErrorItemProps[]>([]);

  // 조회 API
  const getErrorLogList = async () => {
    if (!issueId) return;

    try {
      const response = await getErrorLogsApi(Number(issueId));
      if (response.success) {
        setErrorCount(response.data.totalErrorLogCount);
        const errorItems: ErrorItemProps[] = response.data.errorLogs.map(
          (log) => ({
            ...log,
            errors: log.error ? [log.error] : [], // errors가 undefined일 경우 빈 배열
          })
        );

        setErrorLogList(errorItems);
      }
    } catch (error) {
      console.error('Error fetching error log list:', error);
    }
  };

  useEffect(() => {
    getErrorLogList();
  }, []);

  return (
    <Container>
      <TopBar />
      <ContentArea>
        <ErrorLogSummaryCard>
          <LeftWrapper>
            <Info />
            <StyledText
              $variant="captionRegular"
              color={theme.colors.text.secondary}
            >
              Where did I pronounce wrong?
            </StyledText>
          </LeftWrapper>
          <RightWrapper>
            <ErrorCountBadge>
              <StyledText
                $variant="captionRegular"
                color={theme.colors.brand.primary}
              >
                {errorCount ?? 0}
              </StyledText>
            </ErrorCountBadge>
          </RightWrapper>
        </ErrorLogSummaryCard>

        {errorLogList?.map((error) => (
          <ErrorItem
            key={error.id}
            id={error.id}
            translation={error.translation}
            correctText={error.correctText}
            correctIpa={error.correctIpa}
            userText={error.userText}
            userIpa={error.userIpa}
            errors={error.errors}
          />
        ))}
      </ContentArea>
    </Container>
  );
};

export default ErrorLogsPage;
