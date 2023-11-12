"use client"

import {findHack} from "@/helpers/score";
import React from "react";
import SQLInjectionHackFoundModal from "@/components/SQLInjectionHackFoundModal";
import Confetti from "react-dom-confetti";
import {playSound, randomYay} from "@/helpers/sound";

export default function SearchPage(): React.ReactNode {
  const bannedWords = ["SELECT", "UPDATE", "DELETE", "INSERT", "ALTER", "CREATE", "DROP"];

  const queryParameters = new URLSearchParams(window.location.search);
  const query = queryParameters.get("query");
  const re = new RegExp(/((SELECT|UPDATE|DELETE|)\s+([a-zA-Z]|\*)+\s+(FROM|INTO|DATABASE|TABLE|INDEX)\s+)|(INSERT INTO|CREATE DATABASE|ALTER DATABASE|CREATE TABLE|ALTER TABLE|DROP TABLE|CREATE INDEX|DROP INDEX)/);
  const [isValid, setIsValid] = React.useState(true);
  const [isExploding, setIsExploding] = React.useState(false);

  // Check if the query contains any banned words
  React.useEffect(() => {
    bannedWords.forEach((word) => {
      if (query && re.exec(query.toUpperCase())) {
        findHack("SQL")
        setIsValid(false);
        setTimeout(() => {
          setIsExploding(true);
          playSound(randomYay());
        }, 500)
      }
    });
  }, [query]);

  return (
    <main>
      {isValid ? (
        <p>no results found for: {query}</p>
      ) : (
        <>
          <SQLInjectionHackFoundModal>
            <Confetti
              active={isExploding}
              config={{
                spread: 360,
                elementCount: 300,
                startVelocity: 30
              }}
            />
          </SQLInjectionHackFoundModal>
          <p>INVALID</p>
        </>
      )}
    </main>
  );
}
