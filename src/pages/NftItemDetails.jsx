import React from 'react';
import PageTitle from '../components/pagetitle';
import img from '../assets/images/common/img15.jpg';
import { Link } from 'react-router-dom';
import Project from '../features/project/nftdetails';
import Coder from "../components/code/Coder"
import dataProject from '../assets/fake-data/dataProject';
import { propTypes } from 'react-bootstrap/esm/Image';

function NftItemDetails(props) {
    return (
        <div className='page-item-details'>
            <section className="tf-section tf-item-details pb-mobie">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="image-details" data-aos="fade-right" data-aos-duration="800">
                                <Coder code={props.code} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="item-details" data-aos="fade-left" data-aos-duration="800">
                                <h5>{props.title}</h5>
                                <p className="sub">{props.subtitle}</p>

                                {/* <p className="sub">a</p>
                                <p className="sub">a</p>
                                <p className="sub">a</p>
                                <p className="sub">a</p>
                                <p className="sub">a</p>
                                <p className="sub">a</p> */}
                                {
                                        props.desc.map(item => 
                                            <p className="sub">{item}</p>
                                        )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Project data={dataProject} /> */}
        </div>
    );
}

export default NftItemDetails;