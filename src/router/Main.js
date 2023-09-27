import axios from "axios"
import { useState, useEffect } from "react"
import TodoList from "../components/TodoList"

const Main = () =>{
    // const navigate = useNavigate()

const [listContent, setListContent] = useState([])

    useEffect(()=>{
    listTodo()
    },[])

  //추가
    const insertTodo = (data)=>{
    
    axios.post("/insert",{
    title: data.title,
    summary: data.summary
    }).then((resp)=>{
        alert("추가완료")
        setListContent(listContent.concat(
        {
            title: resp.data.title,
            summary: resp.data.summary,
        ...listContent
        }
    ))
        // navigate("/TodoList")
    })
}

  //전체보기
    const listTodo = ()=>{
    axios.get("/list").then((resp)=>{
        console.log(resp.data)
        setListContent(resp.data)
    })
}

  //삭제
    const deleteId = (id)=>{
    axios.delete("/delete/"+id).then(()=>{
        alert("삭제성공")
        setListContent(listContent.filter(todo=>todo.id !== id))
    })
}

  return(
    <div>
        <TodoList todos={listContent} deleteId={deleteId}/>
    </div>
)
}
export default Main;