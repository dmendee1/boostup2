import React from 'react';
import PageTitle from '../components/pagetitle';
import img from '../assets/images/common/img15.jpg';
import { Link } from 'react-router-dom';
import Project from '../features/project/nftdetails';
import Coder from "../components/code/Coder"
import code from "../assets/code/unit-test.js"
import dataProject from '../assets/fake-data/dataProject';

function NftItemDetails(props) {
    return (
        <div className='page-item-details'>
            <section className="tf-section tf-item-details pb-mobie">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="image-details" data-aos="fade-right" data-aos-duration="800">
                                <Coder code={code}/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="item-details" data-aos="fade-left" data-aos-duration="800">
                                <h5>Mockito implementatation</h5>
                                <p className="sub">Unit test</p>
                                <p className="desc">The most important and costly resourse has been LoyaltyResource. We decide to start sell and surprise resource requires to improvement. </p>


                                <p className="sub">Benefits</p>
                                <div className="list-product">
                                    <div className="box corner-box">
                                        {/* <p>Order support</p> */}
                                        <h6 className="h7">Order support</h6>
                                    </div>
                                    <div className="box corner-box">
                                        {/* <p>No handwriting</p>/ */}
                                        <h6 className="h7">No handwriting</h6>
                                    </div>
                                    <div className="box corner-box">
                                        {/* <p>Return values</p> */}
                                        <h6 className="h7">Return values</h6>
                                    </div>
                                    <div className="box corner-box">
                                        {/* <p>Safe refactoring</p> */}
                                        <h6 className="h7">Safe refactoring</h6>
                                    </div>
                                    <div className="box corner-box">
                                        {/* <p>Exception support</p> */}
                                        <h6 className="h7">Exception support</h6>
                                    </div>
                                    <div className="box corner-box">
                                        {/* <p>Annotation support</p> */}
                                        <h6 className="h7">Annotation support</h6>
                                    </div>
                                    <div className="box corner-box">
                                        {/* <p>Annotation support</p> */}
                                        <h6 className="h7">Order support</h6>
                                    </div>
                                </div>
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