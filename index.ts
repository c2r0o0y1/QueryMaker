import express, {Application, Request, Response} from "express"
import cors from "cors"
import OpenAI from 'openai';

const PORT: number = 8000

const App: Application = express()
App.use(cors())
App.use(express.json())

const API_KEY: string = "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"

const openAI = new OpenAI({
    apiKey: API_KEY
})

App.post("/test", async(request: Request, response: Response) => {
    try {
        const completion = await openAI.chat.completions.create({
            model: "gpt-4",
            messages: [{ 
            role: 'user', 
            /*content: 'Say this is a test'*/ content: "Create Prompt" + request.body.messages
        }]
        })
        response.send(completion.choices[0].message)
    }
    catch(error){
        console.error(error)
        response.status(500).send("Internal Server Error")
    }
})

App.listen(PORT, () => console.log('Your serever is running on ${PORT}'))