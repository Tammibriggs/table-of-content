import './content.css'

const DummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const MainContent = () => {

  return (
    <div className='content'>
      <h1>Table of Content with Item highlight in React</h1>
      <p>{DummyText}</p>
      <h2 id="initial-header">Setting up React</h2>
      <p>{DummyText}</p>
      <h2 id="second-header">Create a table of content</h2>
      <p>{DummyText}</p>
      <p>{DummyText}</p>
      <h3 id="third-header">Create a TOC component</h3>
      <p>{DummyText}</p>
      <p>{DummyText}</p>
      <h3 id="fourth-header">Find the headings on the page</h3>
      <p>{DummyText}</p>
      <p>{DummyText}</p>
      <h3 id="fifth-header">Listing all found heading</h3>
      <p>{DummyText}</p>
      <p>{DummyText}</p>
      <h3 id="sixth-header">Linking heading to there respective sections</h3>
      <p>{DummyText}</p>
      <p>{DummyText}</p>
      <h3 id="find-highlight">Find and highlight the currently active heading</h3>
      <p>{DummyText}</p>
      <p>{DummyText}</p>
      <h2 id='conclusion'>Conclusion</h2>
      <p>{DummyText}</p>
    </div>
  )
}

export default MainContent
