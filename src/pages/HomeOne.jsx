import React from 'react';

import '../scss/components/section.scss';
import '../scss/components/box.scss';
import Slider from '../components/slider';
import dataSlider from '../assets/fake-data/data-slider';
import About from '../features/about';
import Project from '../features/project';
import dataProject from '../assets/fake-data/dataProject';
import dataAbout from '../assets/fake-data/data-about';
import RoadMap from '../features/roadmap';
import dataRoadmap from '../assets/fake-data/data-roadmap';
import Work from '../features/work';
import dataWork from '../assets/fake-data/data-work';
import Team from '../features/team';
import dataTeam from '../assets/fake-data/data-team';
import Blog from '../features/blog';
import dataBlog from '../assets/fake-data/data-blog';
import Partner from '../features/partner';
import dataPartner from '../assets/fake-data/data-partner';
import FAQ from '../features/faq';
import NftItemDetails from './NftItemDetails'
import dataFaq from '../assets/fake-data/data-faq';
import code from '../assets/code/unit-test';


function HomeOne(props) {

    return (
        <div className='home-1'>
        <Slider data={dataSlider} />

        <About data={dataAbout} />

        <Project data={dataProject} />

        {/* <RoadMap data={dataRoadmap} /> */}

        <Work data={dataWork} />

        <Team data={dataTeam} />

        {/* <Blog data={dataBlog} /> */}

        <Partner data={dataPartner} />

        <NftItemDetails code={code} title={"Unit test implementation"} subtitle={"Unit test"} desc={["We created LoyaltyService. Started to initialize usage client and static classes.", "What happens if the integer list is null? Way too much code is spent on null-checking values. A lot of legacy code will null check and suppress or apply a default value, but the real issue is the value not being set (or set correctly) initially. Let's put that discussion aside for the moment. Can our class handle a null list?"]}/>

        <FAQ data={dataFaq} />
        
        </div>
    );
}

export default HomeOne;