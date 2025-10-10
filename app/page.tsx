"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import GameBoard from "@/components/game-board";
import { Sparkles, Trophy } from "lucide-react";

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false);
  const [team1Name, setTeam1Name] = useState("");
  const [team2Name, setTeam2Name] = useState("");

  const handleStartGame = () => {
    if (team1Name.trim() && team2Name.trim()) {
      setGameStarted(true);
    }
  };

  const handleNewGame = () => {
    setGameStarted(false);
    setTeam1Name("");
    setTeam2Name("");
  };

  if (gameStarted) {
    return (
      <GameBoard
        team1Name={team1Name}
        team2Name={team2Name}
        onNewGame={handleNewGame}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 md:p-12 shadow-2xl border-4 border-primary/30 bg-card/95 backdrop-blur">
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Trophy className="w-20 h-20 text-accent animate-bounce" />
              <Sparkles className="w-8 h-8 text-primary absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-2 text-balance">
            ¡10 Estudiantes Dijeron!
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-semibold text-balance">
            Trivia de Computación Básica
          </p>
          <p className="text-muted-foreground text-lg">
            ¡Prepárense para demostrar sus conocimientos! 🖥️💡
          </p>

          <div className="space-y-6 mt-8">
            <div className="space-y-3">
              <label className="text-lg font-semibold text-primary block text-left">
                🔵 Nombre del Equipo 1:
              </label>
              <Input
                type="text"
                placeholder="Ej: Los Hackers"
                value={team1Name}
                onChange={(e) => setTeam1Name(e.target.value)}
                className="text-lg p-6 border-2 border-primary/50 focus:border-primary text-center font-semibold"
                maxLength={20}
              />
            </div>

            <div className="space-y-3">
              <label className="text-lg font-semibold text-secondary block text-left">
                🟢 Nombre del Equipo 2:
              </label>
              <Input
                type="text"
                placeholder="Ej: Los Programadores"
                value={team2Name}
                onChange={(e) => setTeam2Name(e.target.value)}
                className="text-lg p-6 border-2 border-secondary/50 focus:border-secondary text-center font-semibold"
                maxLength={20}
              />
            </div>

            <Button
              onClick={handleStartGame}
              disabled={!team1Name.trim() || !team2Name.trim()}
              className="w-full text-xl py-7 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-6 h-6 mr-2" />
              ¡Comenzar el Juego!
              <Sparkles className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
