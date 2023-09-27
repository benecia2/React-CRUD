import axios from "axios";
import {useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form} from "react-bootstrap"

const TodoForm = ()=>{
    const navigate = useNavigate()
    const[formContent, setFormContent] = useState({
        title: '',
        summary: ''
    })

    const getValue = (e) =>{
        setFormContent({
            ...formContent,
            [e.target.name]: e.target.value
        })
    }

    //submit
    const submitTodo =()=>{
        axios.post('/insert',{
            title: formContent.title,
            summary: formContent.summary
        }).then(()=>{
            alert("등록완료")
            navigate("/") 
        })
        
    }

    return(
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="text" placeholder="title" name="title"
                    onChange={getValue} value={formContent.title}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="summary">
                    <Form.Label>내용</Form.Label>
                    <Form.Control as="textarea" rows={10} cols={30} name="summary"
                    onChange={getValue} value={formContent.summary}/><br/>
                    <Button variant="outline-danger" onClick={submitTodo}>추가</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}
export default TodoForm;