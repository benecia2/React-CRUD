import {Card, Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const TodoItem = ({todo, deleteId})=>{


    const navigate = useNavigate()

    const updateArrow = ()=>{
        navigate(`/detail/${todo.id}`)
    }

return(
    <Card style={{width:'18rem'}}>
        <Card.Body>
            <Card.Title>제목: {todo.title}</Card.Title>
            <Card.Text>내용:{todo.summary}<br/></Card.Text>
            <Button variant="outline-primary" onClick={updateArrow}>수정</Button>
            <Button variant="outline-danger" onClick={()=> deleteId(todo.id)}>삭제</Button>
        </Card.Body>
    </Card>
)
}
export default TodoItem;