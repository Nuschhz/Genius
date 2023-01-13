import { useCallback, useState } from "react";

export const useRound = () => {
  const [round, setRound] = useState(0);

  const sumRound = useCallback(() => {
    setRound(round + 1);
  }, [round]);

  return [round, setRound, sumRound];
};
