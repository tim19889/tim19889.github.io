import React, { useState } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import useStateInCustomProperties from "https://cdn.skypack.dev/use-state-in-custom-properties";

let editorFlag = 1;
let previewerFlag = 1;
let inlineCode = "`<div></div>`";
let multiLineCode = ["```", "function() {", "console.log('Hello World!')}", "```"];

let defaultText = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, ${inlineCode}, between 2 backticks.


You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

Here's some multi-line code:

${multiLineCode[0]}
${multiLineCode[1]}
${multiLineCode[2]}
${multiLineCode[3]}

`;

class ControlledInput extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      input: defaultText

    };

    // Change code below this line

    this.handleChange = this.handleChange.bind(this);
    this.expandEditor = this.expandEditor.bind(this);
    this.expandPreviewer = this.expandPreviewer.bind(this);
    
    

    // Change code above this line

  }

  // Change code below this line

  handleChange (event) {

    this.setState({

      input: event.target.value

    });
  }
//Should really use classes for this so there are less lines of code. Tidy up later. 
  expandEditor() {
    if (editorFlag === 1) {
      document.getElementById("preview").style.display = "none";    
 document.getElementById("preview-top").style.display = "none"; 
      
    document.getElementById("editor").style.width = "840px"; 
      document.getElementById("editor").style.height = "900px"; 
      document.getElementById("editor-top").style.width = "845px"; 
      document.getElementById("controlled-input").style.display = "none"; 
      document.getElementById("editor-top-button").innerHTML = "Shrink";
      
      editorFlag = 2;
    }
    else if (editorFlag === 2) {
     document.getElementById("editor").style.height = "20em"; 
      document.getElementById("editor").style.width = "800px"; 
      document.getElementById("editor-top").style.width = "806px"; 
      document.getElementById("preview-top").style.display = "block"; 
      document.getElementById("preview").style.display = "block"; 
      document.getElementById("controlled-input").style.display = "block";
      document.getElementById("editor-top-button").innerHTML = "Expand";
      editorFlag = 1;
    }
  }
  
  expandPreviewer() {
    if (previewerFlag === 1) {
      document.getElementById("editor").style.display = "none";    
 document.getElementById("editor-top").style.display = "none"; 
      
    document.getElementById("preview").style.width = "1100px"; 
      document.getElementById("preview").style.height = "900px"; 
      document.getElementById("preview-top").style.width = "1103px"; 
      document.getElementById("controlled-input").style.display = "none"; 
      document.getElementById("preview-top-button").innerHTML = "Shrink";
      
      previewerFlag = 2;
    }
    else if (previewerFlag === 2) {
     document.getElementById("preview").style.height = "20em"; 
      document.getElementById("preview").style.width = "1000px"; 
      document.getElementById("preview-top").style.width = "1005px"; 
      document.getElementById("editor-top").style.display = "block"; 
      document.getElementById("editor").style.display = "block"; 
      document.getElementById("controlled-input").style.display = "block";
      document.getElementById("preview-top-button").innerHTML = "Expand";
      previewerFlag = 1;
    }
  }
  
  render() {

    return (

      <div>

        { /* Change code below this line */}
        <div id="editor-top"><img className="top-image" src="https://d33wubrfki0l68.cloudfront.net/bbfa33a202e8612d49b6c1ed05c1fdd8e4001566/bbdd1/img/fcc_secondary_small.svg"></img><p className="top-text">Editor</p>
          <button id="editor-top-button" onClick = {this.expandEditor}>Expand</button>
            
          </div>
        <textarea id="editor" onChange={this.handleChange}>{this.state.input}</textarea>

        { /* Change code above this line */}
        
        <h4 id="controlled-input">Controlled Input:</h4>
        <div id="preview-top"><img className="top-image" src="https://d33wubrfki0l68.cloudfront.net/bbfa33a202e8612d49b6c1ed05c1fdd8e4001566/bbdd1/img/fcc_secondary_small.svg"></img><p className="top-text">Previewer</p>
          <button id="preview-top-button" onClick = {this.expandPreviewer}>Expand</button>

        </div>
        <div id="preview" dangerouslySetInnerHTML= {{__html: marked.parse(this.state.input, {breaks: true})}} />
      </div>

    );
  }
  
};
ReactDOM.render(<ControlledInput/>, document.getElementById('root'))