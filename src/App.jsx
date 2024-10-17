import { useState } from "react"
import { Textarea } from "@chakra-ui/react"
import { Progress } from "@chakra-ui/react"

function App() {
  const [body, setBody] = useState("")
  const [wordCount, setWordCount] = useState(0)

  function calculateLengthPoint() {
    if (wordCount < 20) {
      return 1
    } else if (wordCount < 40) {
      return 2
    } else if (wordCount < 60) {
      return 3
    } else if (wordCount < 80) {
      return 4
    } else {
      return 5
    }
  }

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div>
          <Textarea
            value={body}
            onChange={(e) => {
              setBody(e.target.value)
              setWordCount(e.target.value.split(/\s+/).filter(Boolean).length)
            }}
            rows="10"
            cols="50"
          />
          <p>Max Word Count: 100</p>
          <p>Word Count: {wordCount}</p>
          <p>Length Point: {calculateLengthPoint()}</p>
          <Progress value={wordCount} max={100} colorScheme="yellow"></Progress>
        </div>
      </div>
    </>
  )
}

export default App
