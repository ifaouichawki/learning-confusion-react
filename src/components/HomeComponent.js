import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';


function Home(props){
    return(
        <div className="container">
            <div className="container">
                <div className="row align-items-start">
                    <div className="m-1 col-12 col-md-4">
                            <RenderCard item={props.dish} 
                                isLoading={props.dishesLoading} 
                                errMess={props.dishesErrMess} 
                            />
                    </div>
                    <div className="m-1 col-12 col-md">
                            <RenderCard item={props.promotion} 
                                isLoading={props.promoLoading} 
                                errMess={props.promoErrMess} 
                            />
                    </div>
                    <div className="m-1 col-12 col-md">
                            <RenderCard item={props.leader} 
                                isLoading={props.leadersLoading}
                                errMess={props.leadersErrMess}
                            />
                    </div>
                </div>
            </div>
        </div>
    );
}


function RenderCard({item,isLoading,errMess}){ 
    if (isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if(errMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{errMess}</h4>
                </div>
            </div>
        );
    } else 

        return(
            <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        )
}


export default Home;