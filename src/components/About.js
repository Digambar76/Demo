import React from 'react'

export default function About(props) {
let myStyle = {
color: props.mode==='dark'?'white':'#042743',
backgroundColor: props.mode==='dark'?'#042743':'white',
border: '1px solid ',
borderColor: props.mode==='dark'?'white':'#042743',
boxShadow: 'none'
}
  return (
    < >
   < div className="container-fluid  my-3 "  style={{
    ...myStyle,
    border: 'none'
  }}>
   <h1>About Us</h1>
      <div className="accordion " id="accordionExample">
  <div className="accordion-item " style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Uppercase
      </button>
    </h2>
    <div id="collapseOne"  className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Use of Uppercase.</strong>Uppercase refers to the letters or characters that are written using capital letters, which are typically larger and bolder than their lowercase counterparts. Uppercase letters are often used for emphasis, such as in titles, headings, or to indicate proper nouns, and they are also commonly used for acronyms.
      </div>
    </div>
  </div>
  <div className="accordion-item " style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Lowercase
      </button>
    </h2>
    <div id="collapseTwo"  className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Use of Lowercase.</strong> Lowercase refers to the letters or characters that are written using small letters, which are typically smaller and less bold than their uppercase counterparts. Lowercase letters are often used for general text, and they are also commonly used for acronyms.
      </div>
    </div>
  </div>
  <div className="accordion-item " style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree"  className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

    </div>
    </>
  )
}
