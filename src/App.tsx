import './globals.css'

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import {useState} from "react"

function App() {
  const [csvString, setCsvString] = useState("")
  const [ignoreWords, setIgnoreWords] = useState("")
  const [result, setResult] = useState("")
  
  const handleChangeCsvString = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCsvString(e.target.value)
  }

  const handleChangeIgnoreWords = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIgnoreWords(e.target.value)
  }

  const onClickFilter = () => {
    const csvLines = csvString.split("\n")
    const ignoreWordsArray = ignoreWords.split("\n")

    const result = csvLines.filter((line) => {
      let isIgnore = false
      ignoreWordsArray.forEach((word) => {
        if (line.includes(word)) {
          isIgnore = true
        }
      })

      return !isIgnore
    }).join("\n")

    setResult(result)
  }

  return (
    <div className="p-16">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl">3955 csv filter app</h1>
        <Button onClick={onClickFilter}>Filter!</Button>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3 flex flex-col gap-2">
            <p>csv</p>
            <Textarea className="h-96" onChange={handleChangeCsvString} value={csvString}/>
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <p>ignore words</p>
            <Textarea className="h-96" onChange={handleChangeIgnoreWords} value={ignoreWords}/>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>result</p>
          <Textarea className="h-96" value={result} disabled/>
        </div>
      </div>
    </div>
  )
}
export default App
