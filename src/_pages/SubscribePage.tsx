import { useRef, useEffect } from "react"

export default function SubscribePage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        window.electronAPI.updateContentDimensions({
          width: 400,
          height: 200
        })
      }
    }
    updateDimensions()
  }, [])

  return (
    <div
      ref={containerRef}
      className="h-[200px] w-[400px] bg-black flex items-center justify-center"
    >
      <div className="w-full px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Welcome to Interview Coder
        </h2>
        <p className="text-gray-400 text-sm mb-2">
          This app is now open and does not require a subscription or login.
        </p>
        <p className="text-gray-500 text-xs italic">
          All features are available for free use.
        </p>
      </div>
    </div>
  )
}
