import { useContext, useEffect, useRef, useState } from "react";
import { CircleProgress, DayButton, DayHeading, DaySection, Eyebrow, Quiz } from "../../components/components";
import { QUIZ_CONTENT } from "../../contents/quizContent";
import { ICONS } from "../../utils/constants";
import { animationOpacityFadeIn, animationShake } from "../../core/animations";
import { OverlayContext } from "../../components/overlay/overlayContext";

const getEndingPageText = (percentage: number) => {
  if (percentage === 100) {
    return "¡Excelente resultado! ¡Te sabes todo de mi!";
  }
  
  if (percentage < 50) {
    return "Mmmmmmmmmmmmmmmm ya";
  }
  
  if (percentage < 75) {
    return "La intención es lo que cuenta, ¿no?";
  }
  
  if (percentage < 100) {
    return "Te faltó solo un poco, creo que está bien";
  }
};

export const Day6 = () => {
  
  const handleCloseOverlay = useContext<(() => void) | null>(OverlayContext);
  
  // STATES
  
  const [ quizStarted, setQuizStarted ] = useState<boolean>(false);
  const [ quizEnded, setQuizEnded ] = useState<boolean>(false);
  
  const [ optionSelected, setOptionSelected ] = useState<number | null>(null);
  
  const [ question, setQuestion ] = useState<number>(0);
  
  const [ correctCounter, setCorrectCounter ] = useState<number>(0);
  const [ hasMounted, setHasMounted ] = useState<boolean>(false);
  
  // REFS
  
  const stageRef = useRef<HTMLDivElement | null>(null);
  const verifyRef = useRef<HTMLButtonElement>(null);
  
  const [ stageHeight, setStageHeight ] = useState<number>(0);
  
  useEffect(() => {
    const element = stageRef.current;
    
    if (!element) return;
    
    const updateHeight = () => {
      const nextHeight = element.scrollHeight;
      setStageHeight(nextHeight);
    };
    
    updateHeight();
    
    if (!hasMounted) {
      const frameId = requestAnimationFrame(() => {
        setHasMounted(true);
      });
      
      return () => cancelAnimationFrame(frameId);
    }
    
    animationOpacityFadeIn(element);
    
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(element);
    
    return () => resizeObserver.disconnect();
    
  }, [question, quizStarted, quizEnded, hasMounted]);
  
  // HANDLERS
  
  const currentQuiz = QUIZ_CONTENT[question];
  const totalQuestions = QUIZ_CONTENT.length;
  
  const handleClickOption = (optionIndex: number) => {
    if (optionIndex === optionSelected) {
      setOptionSelected(null);
      return;
    }
    
    setOptionSelected(optionIndex);
  };
  
  const handleClickVerify = () => {
    const verifyButton = verifyRef.current;
    
    if (!verifyButton) return;
    
    if (optionSelected === null) {
      animationShake(verifyButton);
      return;
    }
    
    const isCorrect = currentQuiz.options[optionSelected].isCorrect;
    
    if (isCorrect) {
      setCorrectCounter(prev => prev + 1);
    }
    
    setOptionSelected(null);
    
    const nextQuestion: number = question + 1;
    
    if (nextQuestion >= totalQuestions) {
      setQuizEnded(true);
      return;
    }
    
    setQuestion(nextQuestion);
  };
  
  const handleClickSkip = () => {
    
    setOptionSelected(null);
    
    const nextQuestion: number = question + 1;
    
    if (nextQuestion >= totalQuestions) {
      setQuizEnded(true);
      return;
    }
    
    setQuestion(nextQuestion);
  };
  
  // RENDER
  
  const currentPage = quizEnded
    ? (
      <>
        <DayHeading
          title = "Tu resultado"
          description = {getEndingPageText(correctCounter / totalQuestions * 100)}
        />
        
        <div className = "ending-page__wrapper">
          
          <div className = "ending-page__stats">
            
            <div className = "ending-page__info">
              
              <Eyebrow text = "CORRECTAS: " accent/>
              
              <span className = "ending-page__number">{correctCounter}</span>
              
            </div>
            
            <div className = "ending-page__info">
              
              <Eyebrow text = "INCORRECTAS: "/>
              
              <span className = "ending-page__number">{totalQuestions - correctCounter}</span>
              
            </div>
          </div>
          
          <div className = "ending-page__progress">
            <CircleProgress
              total = {totalQuestions}
              correct = {correctCounter}
            />
          </div>
          
        </div>
        
        <div className = "ending-page__cta-wrapper">
          
          <DayButton
            subtle
            onClick = {() => {
              setQuizEnded(false);
              setQuestion(0);
              setCorrectCounter(0);
            }}
          >
            Repetir quiz
          </DayButton>
          
          <DayButton
            ref = {verifyRef}
            onClick = {() => {
              if (!handleCloseOverlay) return;
              handleCloseOverlay();
            }}
          >
            Cerrar
          </DayButton>
          
        </div>
      </>
    )
    : quizStarted
      ? (
        <>
          <Quiz
            index = {question}
            prompt = {currentQuiz.prompt}
            options = {currentQuiz.options}
            optionSelected = {optionSelected}
            onClickOption = {handleClickOption}
          />
          
          <div className = "quiz-page__cta-wrapper">
            
            <DayButton
              subtle
              onClick = {handleClickSkip}
            >
              Saltar
            </DayButton>
            
            <DayButton
              ref = {verifyRef}
              onClick = {handleClickVerify}
            >
              Continuar
            </DayButton>
            
          </div>
        </>
      )
      : (
        <>
          <DayHeading
            title = "¿Me conoces?"
            description = "Un pequeño quiz para comprobar qué tanto sabes de mí"
          />
          
          <DayButton
            iconName = {ICONS.RIGHT}
            onClick = {() => setQuizStarted(true)}
          >
            Iniciar quiz
          </DayButton>
        </>
      );
  
  return (
    <DaySection
      day = {6}
      className = {quizEnded ? "ending-page" : quizStarted ? "quiz-page" : "starting-page"}
    >
      <div
        className = "day-6__transition-shell"
        style = {{
          height: hasMounted ? `${stageHeight}px` : "auto",
          transition: hasMounted
            ? "height 250ms ease"
            : "none",
        }}
      >
        <div ref = {stageRef} className = "day-6__transition-content">
          {currentPage}
        </div>
      </div>
    </DaySection>
  );
};