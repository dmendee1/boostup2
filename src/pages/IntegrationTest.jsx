import React from 'react';
import PageTitle from '../components/pagetitle';

import Partner from '../features/partner';
import dataPartner from '../assets/fake-data/data-partner';
import code from '../assets/code/flutter'


import NftItemDetails from './NftItemDetails'



function UnitTest(props) {
    return (
        <div className='home-1'>
            <PageTitle title='Integration Test' />

            <NftItemDetails code={code} title={"Integration test implementation"} subtitle={"Donation test"} desc={""}/>
            <Partner data={dataPartner} />

            
        </div>
    );
}

export default UnitTest;