import { useState } from "react";

export const useRound = () => {
  const [round, setRound] = useState(0);

  return [round, setRound];
};
