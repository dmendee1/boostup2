import React from 'react';
import PageTitle from '../components/pagetitle';

import NftItemDetails from './NftItemDetails'
import code from '../assets/code/unit-test';
import Slider from '../components/slider';
import dataSlider from '../assets/fake-data/data-slider-unit-test';
import dataSliderCoding from '../assets/fake-data/data-slider-unit-test-coding';
import dataSliderResult from '../assets/fake-data/data-slider-unit-test-result';


function UnitTest(props) {
    return (
        <div>
            <PageTitle title='Unit test' />

            <section className="tf-section tf-video">
                <div className="container">
                    <div className="tf-section row">
                        <NftItemDetails code={code} title={"Unit test implementation"} subtitle={"Unit test"} desc={["We created LoyaltyService. Started to initialize usage client and static classes.", "What happens if the integer list is null? Way too much code is spent on null-checking values. A lot of legacy code will null check and suppress or apply a default value, but the real issue is the value not being set (or set correctly) initially. Let's put that discussion aside for the moment. Can our class handle a null list?"]}/>
                    </div>
                    <div className="tf-section row">
                        <center><h4>Writing test cases</h4>
                        <p>Mockito junit framework</p>
                        </center>
                        <Slider data={dataSlider} />
                        <div className="col-md-12">
                            {/* <div className="video" data-aos="fade-up" data-aos-duration="800"> */}
                                {/* <img src={require('../assets/images/background/automation.png')} alt="" /> */}
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="tf-section row">
                        <center><h4>Code coverage reporting</h4>
                        <p>Jacoco test coverage plugin report</p>
                        </center>
                        <Slider data={dataSlider} />
                        <div className="col-md-12">
                            {/* <div className="video" data-aos="fade-up" data-aos-duration="800"> */}
                                {/* <img src={require('../assets/images/background/automation.png')} alt="" /> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="i7EMACWuErA" onClose={() => setOpen(false)} /> */}
            </section>
        </div>
    );
}

export default UnitTest;