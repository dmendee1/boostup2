import React from 'react';
import PageTitle from '../components/pagetitle';
import dataFaq from '../assets/fake-data/data-faq';
import FAQ from '../features/faq';



function UnitTest(props) {
    return (
        <div>
            <PageTitle title='Api Test Automation' />

            <FAQ data={dataFaq} />
        </div>
    );
}

export default UnitTest;