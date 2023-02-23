import { useEffect, useState } from "react";
import { Button } from "shared/ui/Button/Button";

// Компонент для тестирования
export const BugButton = () => {
  const [error, setError] = useState(false);
  const addThrow = () => setError(true);
  useEffect(() => {
    if (error) {
      throw new Error("");
    }
  }, [error])
  return (
    <Button onClick={addThrow} >throw error</Button>
  )
}