"use client";

import React from "react";

type Props = {
  teamA: string;
  teamB: string;
  logoA: string;
  logoB: string;
  scoreA: number | null;
  scoreB: number | null;
  utcDate: string;
  status: string;
};

export default function MatchCard({
  teamA,
  teamB,
  logoA,
  logoB,
  scoreA,
  scoreB,
  utcDate,
  status,
}: Props) {
  const date = new Date(utcDate);

  const datePart = date.toLocaleDateString(undefined, {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  const timePart = date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  const showScore =
    status === "IN_PLAY" || status === "PAUSED" || status === "FINISHED";

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 mb-4 flex items-center justify-between">
      {/* Fecha y hora */}
      <div className="text-center min-w-[64px]">
        <div className="text-xs text-gray-400 dark:text-gray-400 leading-tight">
          {datePart}
        </div>
        <div className="text-sm font-semibold text-gray-600 dark:text-gray-300">
          {timePart}
        </div>
      </div>

      {/* Equipos */}
      <div className="flex-1 flex flex-col sm:flex-row justify-between items-center mx-4 gap-2 w-full">
        {/* Equipo A */}
        <div className="flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto">
          <img src={logoA} alt={teamA} className="w-6 h-6 sm:w-8 sm:h-8" />
          <span className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100">
            {teamA}
          </span>
        </div>

        {/* VS */}
        <span className="text-gray-700 dark:text-gray-200 text-xs sm:text-base my-1 sm:my-0">
          vs
        </span>

        {/* Equipo B */}
        <div className="flex items-center justify-center sm:justify-end gap-2 w-full sm:w-auto">
          <img
            src={logoB}
            alt={teamB}
            className="w-6 h-6 sm:w-8 sm:h-8 sm:order-2"
          />
          <span className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100 sm:order-1">
            {teamB}
          </span>
        </div>
      </div>

      {/* Marcador */}
      <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md px-3 py-1 text-sm min-w-[48px] text-center">
        {showScore ? `${scoreA} - ${scoreB}` : "-"}
      </div>
    </div>
  );
}
