import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import QuizSetup from './components/QuizSetup';
import Quiz from './components/Quiz';
import Results from './components/Results';
import NotFound from './components/NotFound';

function App() {
  return (
    <QuizProvider>
      <Router basename="/Quiz-Game">
        <div className="min-h-screen bg-background font-sans antialiased">
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<QuizSetup />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/results" element={<Results />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </QuizProvider>
  );
}

export default App;
