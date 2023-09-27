import {Col, Container, Row} from "react-bootstrap"
import TodoItem from "./TodoItem"



const TodoList = ({todos, deleteId})=>{
    return(
        <Container>
            <Row>
                {todos.map((todo)=>{
                        return(
                        <Col md={3}>
                            <TodoItem key={todo.id}
                            todo={todo}
                            deleteId={deleteId}/>
                            <br/>
                        </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}
export default TodoList;