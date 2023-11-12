"use client"

import {findHack} from "@/helpers/score";
import React from "react";

export default function SearchPage(): React.ReactNode {
  const bannedWords = ["SELECT", "UPDATE", "DELETE", "INSERT", "ALTER", "CREATE", "DROP"];

  const queryParameters = new URLSearchParams(window.location.search);
  const query = queryParameters.get("query");
  const re = new RegExp(/((SELECT|UPDATE|DELETE|INSERT|ALTER|CREATE|DROP)\s+([a-zA-Z]|\*)+\s+(FROM|INTO|DATABASE|TABLE|INDEX)\s+)/);
  const [isValid, setIsValid] = React.useState(true);

  // Check if the query contains any banned words
  React.useEffect(() => {
    bannedWords.forEach((word) => {
      if (query && re.exec(query.toUpperCase())) {
        findHack("SQL")
        setIsValid(false);
      }
    });
  }, [query]);

  return (
    <main>
      {isValid ? (
        <p>no results found for: {query}</p>
      ) : (
        <p>INVALID</p>
      )}
    </main>
  );
}
