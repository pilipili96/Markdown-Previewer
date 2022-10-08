marked.setOptions({
    brealks: true
});

const renderer = new marked.Renderer();


function App(){
    const [text,setText] = React.useState("");

    return (
        <div className="text-center px-4">
            <h1 className="p-4">My Markdown Previewer</h1>
            <textarea name="text" id="text" rows="10" value={text} className="textarea" placeholder="# Welcome to my React Markdown Previewer!
            ## This is a sub-heading... 
            - Preview window updates real time with markdown syntax
            - The editor has some predefined input on page load
            You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~."
         onChange={(e) => setText(e.target.value)} >
              
            </textarea>
        <h3 className="nt-3">Output</h3>
        <Preview markdown={text}/>
        </div>
    )
};

function Preview({markdown}){
    return(
        <div
        dangerouslySetInnerHTML={{
            __html: marked(markdown, {renderer:renderer}),
        }}
        id="preview"
        ></div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));
