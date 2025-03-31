import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import api from "../../api";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";


const Frame = () => {
    const [showCamera, setShowCamera] = useState(false)
    const [question, setQuestion] = useState(null)
    const [isListening, setIsListening] = useState(false)
    const [chatHistory, setChatHistory] = useState([
        {"role": "model",
        "parts":[{
          "text": 'Hello, I am the AI java interviewer. I will be asking you some questions. Please answer them to the best of your ability. Let us begin.'}]},
        
        {"role":"user",
        "parts":[{
          "text": "Hello, I am the interviewee. I am ready to answer your questions."}]},

        ])
    const [note, setNote] = useState(null);
    const [savedNotes, setSavedNotes] = useState([])

    useEffect(() => {
        handleListen()
    }, [isListening])


    const handleListen = () => {
        if (isListening) {
            mic.start()
            mic.onend = () => {
                console.log('continue..')
                mic.start()
            }
        } else {
            mic.stop()
            mic.onend = () => {
                console.log('Stopped Mic on Click')

            }
        }
        mic.onstart = () => {
            console.log('Mic is on')
        }
        mic.onresult = event => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')

            setNote(transcript)

            console.log(transcript)

            mic.onerror = event => {
                console.log(event.error)
            }
        }
    }

    const handleSaveNote = async () => {
        setSavedNotes([...savedNotes, note])

        try {
            const res = await api.post('/api/questions/', {data: chatHistory})
            console.log(res)
            if (res.status === 200) {
                const newQuestion = res.data.candidates[0].content.parts[0].text
                setQuestion(newQuestion)
                setChatHistory([...chatHistory, {"role":"model",
                    "parts":[{
                      "text": newQuestion}]},
                   {"role": "user",
                    "parts":[{
                      "text": note}]}])
            }
            setNote("")
        } catch (e) {
            alert(e)
        }
        console.log(chatHistory)

        
    }

    const handleclick = () => {
        setShowCamera(true);
        setIsListening(prevState => !prevState);
    }

    return (
        <>
            <div className="flex flex-col items-center md:gap-10 bg-black">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                    <br />
                    <div className="text-white">
                        <h1 className="lg:text-4xl text-2xl text-center font-semibold">Java Development Intern</h1>
                        <br />
                        <div className="f1 h-52 w-100 lg:h-110 lg:w-220 rounded-2xl border-2 border-gray-400">{showCamera ? <Webcam className="h-full w-full rounded-2xl" /> : null} </div>
                    </div>

                    <br />


                    <div>

                        <div className="lg:h-150 text-white ">
                            <h1 className="lg:text-4xl text-2xl text-center font-semibold">Questions</h1>
                            <br />
                            <div className="h-50 w-100 lg:h-110 lg:w-120 rounded-2xl border-2 border-gray-400 overflow-y-auto p-2" onChange={(e) => setQuestion(e.target.value)}>
                                {question}
                            </div>
                        </div>
                        <div className="lg:h-150 text-white ">
                            <h1 className="lg:text-4xl text-2xl text-center font-semibold">Notes</h1>
                            <br />
                            <div className="text-white overflow-y-auto">
                                <p>{note}</p>
                            </div>
                           
                            <button onClick={handleSaveNote} disabled={!note} className="underline hover:text-blue-300">Save Note</button>
                            <div className="h-50 w-100 lg:h-110 lg:w-120 rounded-2xl border-2 border-gray-400 overflow-scroll">
                                {savedNotes.map((n) => (
                                    <p key={n}>{n}</p>
                                ))}
                            </div>
                        </div>

                    </div>


                </div>

                <div className="flex p-4 justify-center">
                    {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
                    <button
                        id="btn"
                        onClick={handleclick}
                        className="  p-4 bg-blue-500 hover:bg-blue-600 hover:scale-105 hover:cursor-pointer transition-all duration-200 font-light lg:text-3xl text-white rounded-2xl shadow-lg lg:mt-4"
                    >
                        {isListening ? "Stop Interview" : "Start Interview"}
                    </button>
                </div>

            </div>

        </>
    );

}

export default Frame;