import { useState } from "react"
import {
  Textarea,
  Progress,
  Box,
  Flex,
  Spacer,
  ButtonGroup,
  Button
} from "@chakra-ui/react"

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

  function disableButton() {
    return wordCount === 0
  }

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <Box w="60%">
          <Textarea value={body} onChange={handleChange} rows="5" w="100%" />
          <Box mt={3}>
            <Progress
              value={wordCount}
              max={100}
              colorScheme="yellow"
              borderRadius="md"
            ></Progress>
          </Box>
          <Flex>
            <p>Length: {calculateLengthPoint()}/5 points</p>
            <Spacer />
            <p>{wordCount}/100</p>
          </Flex>
          <Flex justifyContent="flex-end">
            <ButtonGroup mt="3">
              <Button size="sm" disabled={disableButton()}>
                保存する
              </Button>
              <Button colorScheme="teal" size="sm" disabled={disableButton()}>
                提出する
              </Button>
            </ButtonGroup>
          </Flex>
        </Box>
      </div>
    </>
  )
}

export default App
