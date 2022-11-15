import React , {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import Button from '../../components/button';
import AboutItem from './about-item'

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            subtitle : 'Integration test',
            title: 'Flutter Integration tests',
            desc : 'Unit tests and widget tests are handy for testing individual classes, functions, or widgets. However, they generally don\u2019t test how individual pieces work together as a whole, or capture the performance of an application running on a real device. These tasks are performed with integration tests.\r\n\r\nIntegration tests are written using the integration_test package, provided by the SDK.\r\n\r\nIn this recipe, learn how to test a counter app. It demonstrates how to setup integration tests, how to verify specific text is displayed by the app, how to tap specific widgets, and how to run integration tests.\r\n\r\nThis recipe uses the following steps:\r\n\r\nCreate an app to test.\r\nAdd the integration_test dependency.\r\nCreate the test files.\r\nWrite the integration test.\r\nRun the integration test.\r\n.'
        }
    )

    return (
        <section className="tf-section tf-about">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-md-12">
                        <div className="content-about mobie-40" data-aos="fade-up" data-aos-duration="800">
                            <div className="tf-title st2">
                                <p className="h8 sub-title">{dataBlock.subtitle}</p>
                                <h4 className="title">{dataBlock.title}</h4>
                            </div>
                            <p>{dataBlock.desc}</p>
                                {/* <Button title="More than" path='/' /> */}
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-12">
                        <div className="wrap-about" data-aos="fade-up" data-aos-duration="800">
                           <iframe src='https://fss-web.mobicom.mn/public/9c2537ace826' width={320} height={640}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;