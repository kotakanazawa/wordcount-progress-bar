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

  function handleChange(e) {
    const newBody = e.target.value
    const newWordCount = newBody.split(/\s+/).filter(Boolean).length
    if (newWordCount <= 100) {
      setBody(newBody)
      setWordCount(newWordCount)
    }
  }

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div>
          <Textarea
            value={body}
            onChange={handleChange}
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
