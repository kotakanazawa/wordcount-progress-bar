import { useState } from "react"

function App() {
  const [body, setBody] = useState("")
  const [wordCount, setWordCount] = useState(0)

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div>
          <textarea
            value={body}
            onChange={(e) => {
              setBody(e.target.value)
              setWordCount(e.target.value.split(/\s+/).filter(Boolean).length)
            }}
            rows="10"
            cols="50"
          />
          <p>Word Count: {wordCount}</p>
          <progress value={wordCount} max={100}></progress>
        </div>
      </div>
    </>
  )
}

export default App
