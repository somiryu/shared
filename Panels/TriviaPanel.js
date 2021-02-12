//tag, no_message={false} //avoids showing no question message
//listener (returns api call response from answered trivias)
// multiple: allows multiple selection
import React, {useState, useEffect} from "react"
import {Trivia, Load} from "../Utils/engine"
import Button from "../Buttons/Button"

export default props =>{
	const [trivia, setTrivia] = useState(false)
	const [open, setOpen] = useState("")
	const [answers, setAnswers] = useState([])
	const [loading, setLoading] = useState(true)
	const [reload, setReload] = useState(true)
	const [feedback, setFeedback] = useState(false)

	useEffect(()=>{
		Trivia.get(props.tag, (d)=>{setTrivia(d); setLoading(false)})
	}, [reload, props.tag])

	const sendAnswers = () =>{
		setLoading(true)
		if(trivia.question.open_answer){
			Trivia.open_answer(trivia.question.question_id, open,(d)=>{
				if(props.listener) props.listener(d);
				setReload((e)=> e ? false : true)
			})
		} else {
			console.log("WILL SEND")
			Trivia.answer(trivia.question.question_id, answers, (res) =>{
				console.log(res)
				setFeedback(res)
				setLoading(false)
			})
		}
	}

	const next_trivia = () =>{
		setFeedback(false);
		setLoading(true)
		if(props.listener) props.listener();
		setReload((e)=> e ? false : true)
	}

	const processAnswer = (id) =>{
		let a = [...answers]
		if(answers.includes(id) ){
			const index = a.indexOf(id);
			if (index > -1) {
			  a.splice(index, 1);
			  setAnswers(a)
			}
		} else {
			if(!props.multiple){a = []}
			a.push(id)
			console.log(a)
			setAnswers(a)
		}
	}

	if(loading) return <Load id="trivia_load"/>
	if(feedback) return (
		<div className="trivia-feedback">
			<h3 className="correct-trivia">{feedback.correct === true ? "Correcta" : "Incorrecta"}</h3>
			{feedback.currencies_given && feedback.currencies_given.map((e,i)=>
				<div key={i} className="trivia-currency">
					<div>
						<img src={e.image.image} alt={e.name}/> 
					</div>
					<div>{e.quantity}</div>
				</div>
			)}
			<hr/>
			<div className="trivia trivia-answers">
				{trivia.question.answers.map((e,i)=>
					<div key={i} className={"trivia trivia-option " + (answers.includes(e.answer_id) ? "trivia-selected " : " ") + (e.correct ? "trivia-correct" : "") }>
						{e.answer}
					</div>
				)}
			</div>
			<div className="send">
				<Button id="next_trivia" label={feedback.correct === true ? "Reclamar Runas y siguiente" : "Siguiente Pregunta"} listener={next_trivia}/>
			</div>
		</div>
	);

	return(
		<div>
			{trivia.question ?
				<div>
					<h2 className="trivia trivia-title">{trivia.question.title}</h2>
					<p className="trivia trivia-question">{trivia.question.question}</p>
					{trivia.question.image.image.includes("system") &&
						<img className="trivia trivia-image" src={trivia.question.image.image} alt="imagen trivia"/>
					}
					{trivia.question.open_answer ? 
						<div className="trivia trivia-open">
							<textarea className="trivia trivia-textarea" value={open} onChange={(e)=>setOpen(e.target.value)}/>
						</div>
						:
						<div className="trivia trivia-answers">
							{trivia.question.answers.map((e,i)=>
								<div key={i} className={"trivia trivia-option " + (answers.includes(e.answer_id) ? "trivia-selected" : "") }
									onClick={()=>processAnswer(e.answer_id)}
								>
									{e.answer}
								</div>
							)}
						</div>
					}
					<div className="send">
						<Button id="send_trivia" label="Enviar respuesta" listener={sendAnswers}/>
					</div>
				</div>
				:
				<div className="trivia trivia-question trivia-no-trivia">{props.no_message ? "" : "No hay preguntas disponibles. Vuelve mañana"}</div>
			}
		</div>
	)
}
