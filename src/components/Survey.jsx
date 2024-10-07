import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const startState = {
    colour: "",
    spendTime: [],
    review: "",
    username: "",
    email: ""
  }

  const [listOfAnswers, setListOfAnswers] = useState([])

  const [formData, setFormData] = useState(startState);

const submitForm = (event) => {
  event.preventDefault();
  console.log("form submitted")
  console.log(formData)

  listOfAnswers.push(formData)

  setFormData(startState)
  document.getElementsByClassName("form")[0].reset()
}


const onChange = (event) => {
  setFormData({...formData, [event.target.name]: event.target.value})
}

const setValueRadio = (event) => {
  setFormData({...formData, colour: event.target.value})
}

const setValueCheck = (event) => {
  if(event.target.checked){
    setFormData({...formData, spendTime: [...formData.spendTime, event.target.value]})
  }
  else{
    const newFormData = formData.spendTime
    const index = newFormData.indexOf(event.target.value)
    newFormData.splice(index, 1)
  }
}

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList props={listOfAnswers} />
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={submitForm}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {/* Radio inputs go here */}
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" onClick={setValueRadio}/><label
                  htmlFor="color-one"
                  >1</label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2"  onClick={setValueRadio}/><label
                  htmlFor="color-two"
                  >2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3"  onClick={setValueRadio}/><label
                  htmlFor="color-three"
                  >3</label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4"  onClick={setValueRadio}/><label
                  htmlFor="color-four"
                  >4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label
                  ><input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onClick={setValueCheck}
                  />Swimming</label>
              </li>
              <li>
                <label><input name="spend-time" type="checkbox" value="bathing" onClick={setValueCheck}/>Bathing</label>
              </li>
              <li>
                <label
                  ><input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onClick={setValueCheck}
                  />Chatting</label>
              </li>
              <li>
                <label
                  // eslint-disable-next-line react/no-unescaped-entities
                  ><input name="spend-time" type="checkbox" value="noTime" onClick={setValueCheck} />I don't like to spend time with it</label>
              </li>
            </ul>

          </div>
          <label
            >What else have you got to say about your rubber duck?<textarea onChange={onChange} onClick={onChange}
              name="review"
              cols="30"
              rows="10"
            >
            </textarea></label>
            <label>Put your name here (if you feel like it):
              <input
                type="text"
                name="username"
                onChange={onChange}
                />
            </label>
            <label>Leave us your email pretty please??
              <input
                type="email"
                name="email"
                onChange={onChange} />
            </label>
          <input className="form__submit" type="submit" value="Submit Survey!"/>
        </form>
      </section>
    </main>
  );
}

export default Survey;
