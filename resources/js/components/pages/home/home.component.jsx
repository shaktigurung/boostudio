import React from 'react';
import './home.styles.scss';
import {Link} from 'react-router-dom';
import CustomButton from './../../custom-button/custom-button.component';

export default function Home() {
    return (
        <div className="jumbotron">
            <h1 className="display-4"> BooStudio! </h1>
            <p className="lead">This is a technical test for Junior Front End Developer role.</p>
            <hr className="my-4"/>
            <p> It is build using React and Laravel </p>
            <Link className="btn" > <CustomButton> Learn More </CustomButton> </Link>
        </div>
    )
}
