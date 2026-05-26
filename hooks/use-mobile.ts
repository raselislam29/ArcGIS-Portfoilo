import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Only run on the client
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    mql.addEventListener("change", onChange)
    
    // Defer the initial state check nicely if needed or just let it update asynchronously,
    // though matchMedia directly works.
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // Provide initial check outside effect safely for Client Side Rendering
  React.useEffect(() => {
     if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
     }
  }, [])

  return !!isMobile
}
