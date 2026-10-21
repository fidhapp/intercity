import { createContext, useCallback, useContext, useMemo, useState } from "react";

const QuoteContext = createContext(null);

export function QuoteProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [seed, setSeed] = useState({ service: "", message: "" });
  const [token, setToken] = useState(0);
  const [picks, setPicks] = useState([]);

  const openQuote = useCallback((next = {}) => {
    setSeed({
      service: next.service || "",
      message: next.message || "",
    });
    setToken((t) => t + 1);
    setOpen(true);
  }, []);

  const closeQuote = useCallback(() => setOpen(false), []);

  const togglePick = useCallback((pick) => {
    setPicks((prev) => {
      const exists = prev.some((item) => item.id === pick.id);
      if (exists) return prev.filter((item) => item.id !== pick.id);
      return [...prev, pick];
    });
  }, []);

  const clearPicks = useCallback(() => setPicks([]), []);

  const isPicked = useCallback((id) => picks.some((item) => item.id === id), [picks]);

  const openWithPicks = useCallback(() => {
    const lines = picks.map((item) => `• ${item.service}: ${item.scope}`).join("\n");
    openQuote({
      service: picks[0]?.service || "",
      message: lines ? `We would like support with:\n${lines}\n` : "",
    });
  }, [openQuote, picks]);

  const value = useMemo(
    () => ({
      open,
      openQuote,
      closeQuote,
      seed,
      token,
      picks,
      togglePick,
      clearPicks,
      isPicked,
      openWithPicks,
    }),
    [open, openQuote, closeQuote, seed, token, picks, togglePick, clearPicks, isPicked, openWithPicks],
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used within QuoteProvider");
  return ctx;
}
