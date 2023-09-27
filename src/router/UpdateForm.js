import axios from "axios"
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { Button, Container, Form} from "react-bootstrap"


const UpdateForm = ()=> {
    const navigate = useNavigate() 
    const param = useParams();
  
    const [formData, setFormData] = useState({
      id: param.id,
      title: '',
      summary: ''
    });
  
  
    useEffect(()=>{
      detailContent();
    },[]);
  
  //상세보기
  const detailContent =()=>{
    axios.get(`/detail/${param.id}`)
    .then((resp)=>{
      setFormData(resp.data)
    })
  }
  
    const getValue = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value,
          id: param.id
      });
  }
  
  //수정하기
  const modifySubmit=()=>{
    axios.put(`/update/${param.id}`,{
      id: param.id,
      title: formData.title,
      summary: formData.summary
    }).then((resp)=>{
      alert("수정 완료")
      setFormData(resp.data)
      navigate("/")
    })
  }
  
  
  
  
    return (
      <Container>
        <Form>
          <h2>할 일 수정</h2>
  
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>제목</Form.Label>
            <Form.Control type="text" placeholder="title" name="title" onChange={getValue} value={formData.title} />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="summary">
            <Form.Label>내용</Form.Label>
            <Form.Control as="textarea" rows={10} cols={30} name="summary" onChange={getValue} value={formData.summary} /><br />
            <Button variant="outline-danger" onClick={modifySubmit}>수정하기</Button>
          </Form.Group>
        </Form>
      </Container>
    )
  }
  
  export default UpdateForm;