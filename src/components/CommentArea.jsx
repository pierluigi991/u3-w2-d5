import { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const CommentArea = props=>{
    const [comments, setComments] = useState([]);
    
    const fetchComments = async () => {
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.params {
                headers: {
                    Authorization:
                      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjZjZWY4MWI0MjAwMTM5YjI3ZDkiLCJpYXQiOjE2ODA1MjkxNTcsImV4cCI6MTY4MTczODc1N30.xcCrn-hPyCaecrCSZraKU10zzxzSRHiMFnhhNvegIx0"
                  }
            } );
            if (response.ok){
                const arrayComment = await response.json()
                setComments(commentsArr);
            }
           
        }catch (error) {
            console.log(error);
          }
    }
    useEffect(() => {
        fetchComments();
      }, [props.params]);
      return (
        <>
        <ListGroup className="mt-3">
              {comments.map(comment => (
                <ListGroup.Item className="bg-black text-white" key={comment._id}>
                  <Row>
                    <Col className="text-truncate" xs={12}>
                      <strong>Autore:</strong> {comment.author}
                    </Col>
                    <Col xs={12}>
                      <strong>Commento:</strong> {comment.comment}
                    </Col>
                    <Col xs={12}>
                      <strong>Rate:</strong> <Badge bg="danger">{comment.rate}</Badge>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
        </>
      );

}
export default CommentArea;