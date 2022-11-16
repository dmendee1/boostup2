import React , {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import Button from '../../components/button';
import AboutItem from './about-item'
import phonea from '../../assets/code/flutter-phonea'
import phoneb from '../../assets/code/flutter-phoneb'


import Coder from "../../components/code/Coder"

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            subtitle : 'Integration test samples',
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
                            <Coder code={phonea}/>
                            <br></br>
                            <Coder code={phoneb}/>
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