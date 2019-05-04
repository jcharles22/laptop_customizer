import React from 'react';
import FeatureComponent from './Feature';

function MainForm (props) {

    return (
        <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <FeatureComponent 
                features={props.features} 
                selected={props.selected}
                updateFeature={props.updateFeature} />
            </section>
    )
    }

export default MainForm;