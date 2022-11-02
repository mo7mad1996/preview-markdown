import React from "react"
import ReactMarkdown from 'react-markdown'


const App = _ => {
  const [code, setCode] = React.useState('## Welcome to preview markdown')

  return (
    <>
      <main className="app">
        <section className="section markdown" >
          <textarea className="input" value={code} onChange={e => setCode(e.target.value)}></textarea>
        </section>
        <section className="markdown-body px-5   ">
          <article className="result" >
            <ReactMarkdown>{code}</ReactMarkdown>
          </article>
        </section>
      </main>

      <footer>You will find the documentation in <a href="https://www.markdownguide.org/cheat-sheet/" target="_blank" rel="noopener noreferrer">markdownguide/cheat-sheet</a></footer>
    </>
  )
}

export default App