import React from 'react';
import PageTitle from '../components/pagetitle';

import Partner from '../features/partner';
import dataPartner from '../assets/fake-data/data-partner';
import code from '../assets/code/flutter'


import NftItemDetails from './NftItemDetails'



function UnitTest(props) {
    let descs = ["This example works as successful case of sending donation.", "1. Test case starts from home page with authenticated user", "2. Clicks on show all mini app button", "3. Find and click donation miniapp from all miniapp list", "4. Selects first possible donation item", "5. Sends donation using environment (development\/release) config's amount, description, pin code", "6. Lastly click on success button from success dialog"]
    return (
        <div className='home-1'>
            <PageTitle title='Integration Test' />

            <NftItemDetails code={code} title={"Integration test implementation"} subtitle={"Donation test"} desc={descs}/>
            <Partner data={dataPartner} />

            
        </div>
    );
}

export default UnitTest;