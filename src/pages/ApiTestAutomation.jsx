import React from 'react';
import PageTitle from '../components/pagetitle';
import dataFaq from '../assets/fake-data/data-faq';
import FAQ from '../features/faq';
import code from '../assets/code/postman'
import NftItemDetails from './NftItemDetails'


function UnitTest(props) {
    return (
        <div>
            <PageTitle title='Api Test Automation' />

            <NftItemDetails code={code} title={"Unit test implementation"} subtitle={"Unit test"} desc={["We created LoyaltyService. Started to initialize usage client and static classes.", "What happens if the integer list is null? Way too much code is spent on null-checking values. A lot of legacy code will null check and suppress or apply a default value, but the real issue is the value not being set (or set correctly) initially. Let's put that discussion aside for the moment. Can our class handle a null list?"]}/>

            <FAQ data={dataFaq} />
        </div>
    );
}

export default UnitTest;