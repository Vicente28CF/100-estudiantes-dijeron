"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { questions } from "@/lib/questions"
import { ChevronLeft, ChevronRight, RotateCcw, Trophy, Zap, Home } from "lucide-react"

interface GameBoardProps {
  team1Name: string
  team2Name: string
  onNewGame: () => void
}

export default function GameBoard({ team1Name, team2Name, onNewGame }: GameBoardProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [revealedAnswers, setRevealedAnswers] = useState<number[]>([])
  const [team1Score, setTeam1Score] = useState(0)
  const [team2Score, setTeam2Score] = useState(0)
  const [showAllAnswers, setShowAllAnswers] = useState(false)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Audio autoplay prevented:", error)
      })
      setIsAudioPlaying(true)
    }
  }, [])

  const currentQuestion = questions[currentQuestionIndex]

  const revealAnswer = (index: number) => {
    if (!revealedAnswers.includes(index)) {
      setRevealedAnswers([...revealedAnswers, index])
    }
  }

  const addPointsToTeam = (team: 1 | 2, points: number) => {
    if (team === 1) {
      setTeam1Score(team1Score + points)
    } else {
      setTeam2Score(team2Score + points)
    }
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setRevealedAnswers([])
      setShowAllAnswers(false)
    }
  }

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setRevealedAnswers([])
      setShowAllAnswers(false)
    }
  }

  const resetQuestion = () => {
    setRevealedAnswers([])
    setShowAllAnswers(false)
  }

  const revealAll = () => {
    setShowAllAnswers(true)
    setRevealedAnswers(currentQuestion.answers.map((_, i) => i))
  }

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsAudioPlaying(!isAudioPlaying)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-4 md:p-8">
      <audio ref={audioRef} loop>
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suspense-tension-building-398328-9Yz4b48xkxzswLMBUrN2ekCEJ543WM.mp3" type="audio/mpeg" />
      </audio>

      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex justify-end gap-2 mb-4">
          <Button
            onClick={toggleAudio}
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-card/95 backdrop-blur font-semibold"
          >
            {isAudioPlaying ? "🔊 Pausar Música" : "🔇 Reproducir Música"}
          </Button>
          <Button
            onClick={onNewGame}
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-card/95 backdrop-blur font-semibold"
          >
            <Home className="w-5 h-5 mr-2" />
            Nuevo Juego
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4 md:p-6 bg-primary/10 border-4 border-primary shadow-lg">
            <div className="text-center">
              <div className="text-4xl mb-2">🔵</div>
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-2 text-balance">{team1Name}</h2>
              <div className="text-4xl md:text-5xl font-bold text-primary">{team1Score}</div>
              <p className="text-sm text-muted-foreground mt-1">puntos</p>
            </div>
          </Card>

          <Card className="p-4 md:p-6 bg-secondary/10 border-4 border-secondary shadow-lg">
            <div className="text-center">
              <div className="text-4xl mb-2">🟢</div>
              <h2 className="text-xl md:text-2xl font-bold text-secondary mb-2 text-balance">{team2Name}</h2>
              <div className="text-4xl md:text-5xl font-bold text-secondary">{team2Score}</div>
              <p className="text-sm text-muted-foreground mt-1">puntos</p>
            </div>
          </Card>
        </div>

        <Card className="p-6 md:p-8 bg-card/95 backdrop-blur border-4 border-accent/50 shadow-2xl">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-accent" />
              <span className="text-lg font-semibold text-muted-foreground">
                Pregunta {currentQuestionIndex + 1} de {questions.length}
              </span>
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-foreground text-balance leading-relaxed">
              {currentQuestion.question}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6">
            {currentQuestion.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => revealAnswer(index)}
                className={`p-4 md:p-6 rounded-xl border-3 transition-all duration-300 ${
                  revealedAnswers.includes(index) || showAllAnswers
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground border-primary shadow-lg scale-100"
                    : "bg-muted/50 border-border hover:border-primary/50 hover:bg-muted hover:scale-105"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                        revealedAnswers.includes(index) || showAllAnswers
                          ? "bg-primary-foreground text-primary"
                          : "bg-primary/20 text-primary"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span
                      className={`text-left text-lg md:text-xl font-semibold ${
                        revealedAnswers.includes(index) || showAllAnswers
                          ? "text-primary-foreground"
                          : "text-transparent"
                      }`}
                    >
                      {revealedAnswers.includes(index) || showAllAnswers ? answer.text : "???"}
                    </span>
                  </div>
                  <div
                    className={`text-2xl md:text-3xl font-bold px-4 py-2 rounded-lg ${
                      revealedAnswers.includes(index) || showAllAnswers
                        ? "bg-primary-foreground text-primary"
                        : "bg-primary/20 text-primary"
                    }`}
                  >
                    {revealedAnswers.includes(index) || showAllAnswers ? answer.points : "?"}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <p className="text-center font-semibold text-primary mb-2">Sumar puntos a {team1Name}</p>
              <div className="grid grid-cols-3 gap-2">
                {currentQuestion.answers.map((answer, index) => (
                  <Button
                    key={index}
                    onClick={() => addPointsToTeam(1, answer.points)}
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold"
                  >
                    +{answer.points}
                  </Button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-center font-semibold text-secondary mb-2">Sumar puntos a {team2Name}</p>
              <div className="grid grid-cols-3 gap-2">
                {currentQuestion.answers.map((answer, index) => (
                  <Button
                    key={index}
                    onClick={() => addPointsToTeam(2, answer.points)}
                    variant="outline"
                    className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold"
                  >
                    +{answer.points}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              onClick={previousQuestion}
              disabled={currentQuestionIndex === 0}
              variant="outline"
              className="border-2 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Anterior
            </Button>
            <Button
              onClick={resetQuestion}
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              <RotateCcw className="w-5 h-5 mr-1" />
              Reiniciar
            </Button>
            <Button
              onClick={revealAll}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Trophy className="w-5 h-5 mr-1" />
              Revelar Todo
            </Button>
            <Button
              onClick={nextQuestion}
              disabled={currentQuestionIndex === questions.length - 1}
              variant="outline"
              className="border-2 bg-transparent"
            >
              Siguiente
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
