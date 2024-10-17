import { useState } from "react"
import {
  Textarea,
  Progress,
  Box,
  Flex,
  Spacer,
  ButtonGroup,
  Button,
  Tooltip,
} from "@chakra-ui/react"
import { QuestionIcon } from "@chakra-ui/icons"

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
            <p>
              Length: {calculateLengthPoint()}/5 points{" "}
              <Tooltip label={lengthGradeText()}>
                <QuestionIcon color="gray.500" />
              </Tooltip>
            </p>
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

function lengthGradeText() {
  return (
    <>
      1point: 90~120words
      <br />
      2point: ~145words
      <br />
      3point: ~175words
      <br />
      4point: ~200words
      <br />
      5point: ~230words
    </>
  )
}
export default App
