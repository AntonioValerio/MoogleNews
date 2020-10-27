import React from "react";
import {Container, Button,Col,Row,Jumbotron,Badge,Spinner,Alert } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBook } from "@fortawesome/free-solid-svg-icons";
import article from "../../services/article";
import RemoveDialogComponent from "../../components/article/RemoveDialogComponent"
import SubmitDialogComponent from "../../components/article/SubmitDialogComponent"

export default class ArticleDetailsPage extends React.Component{
    contructor(props){
        super(props);
        this.state={
            article : undefined,
            error : undefined,
            toRemove : false,
            toUpdate :false,
        };
    }


    componentDidMount(){
        article
        .getOne(this.props.match.params.id)
        .then((value)=> this.setState({article:value}))
        .catch((err)=> this.setState({error:err}))
    }

    render(){
        const { article,error,toRemove,toUpdate} = this.state;

        return (
            <Container>
                <Button variant="outline-primary" style={{margin: "10px 0"}} onClick={()=> this.props.history.goBack()}>
                    <FontAwesomeIcon icon ={faArrowLeft} />
                    &nsbp;Back to list
                </Button>
                {error !== undefined && <Alert variant="danger">{error}</Alert>}
                {article !==undefined ? (
                    <div>
                        <Jumbotron>´
                            <Row>
                                <Col xs={6} md={4} lg={3}>
                                <h1>{article.title}</h1>
                                <h5>{article._id}</h5>
                                
                                <Row>
                                    <Col xs={4} md={3} lg={2}>
                                        <Badge variant="secondary">Author</Badge>
                                    </Col>
                                    <Col xs={8} md={9} lg ={10}>
                                        {article.author} 
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={4} md={3} lg={2}>
                                        <Badge variant="secondary">Article</Badge>
                                    </Col>
                                    <Col xs={8} md={9} lg ={10}>
                                        {article.text}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={4} md={3} lg={2}>
                                        <Badge variant="secondary">Article</Badge>
                                    </Col>
                                    <Col>
                                        {article.text}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={4} md={3} lg={2}>
                                         <Badge variant="secondary">Publish year</Badge>
                                    </Col>
                                     <Col xs={8} md={9} lg={10}>
                                        {article.publish_date}
                                     </Col>
                                 </Row>
                                 <br />
                                 <p>
                                    <Button variant="dark" onClick={() => this.setState({ toUpdate: true })}>
                                    Update
                                   </Button>
                                     &nbsp;
                                  <Button variant="danger" onClick={() => this.setState({ toRemove: true })}>
                                    Remove
                                  </Button>
                                 </p>
                              </Col>
                            </Row>
                        </Jumbotron>

                        <RemoveDialogComponent 
                            article={article}
                            show={toRemove}
                            handleClose={()=> this.setState({toRemove : false})}
                            removed={()=> this.props.history.goBack()}

                        />
                        <SubmitDialogComponent
                            article={article}
                            show ={toUpdate}
                            handleClose={()=> this.setState({toUpdate : false})}
                            submited={(updatedArticle)=> this.setState({book: updatedBook, toUpdate:false })}
                        />
                    </div>
                ): (
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                )}
            </Container>
        );
    }


}