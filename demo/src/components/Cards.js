import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards(){
    return (
        <>
        <p id="projects"/>
        <div className='cards'>
            <h1 className='heading'>PROJECTS</h1><hr/>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/AI.jpg"
                            text="AI is revolutionizing the way we live and work."
                            label='Artificial Intelligence'
                            path='/AIUpload'
                        />
                        <CardItem
                            src="images/BC.png"
                            text="Blockchain ensures secure and transparent digital transactions."
                            label='Block Chain'
                            path='/BCUpload'
                        />
                        <CardItem
                            src="images/CC.png"
                            text="Flexible, scalable computing power delivered through clouds."
                            label='Cloud Computing'
                            path='/CCUpload'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/CS.jpg"
                            text="Protecting digital assets from evolving online threats."
                            label='Cyber Security'
                            path='/CSUpload'
                        />
                        <CardItem
                            src="images/DL.jpg"
                            text="Advanced algorithms mimicking human brain for automation."
                            label='Deep Learn'
                            path='/DLUpload'
                        />
                        <CardItem
                            src="images/FS.jpg"
                            text="End-to-end development expertise across multiple technologies."
                            label='Full Stack'
                            path='/FSUpload'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/IP.jpg"
                            text="Analyzing and manipulating digital images for insights."
                            label='Image Processing'
                            path='/IPUpload'
                        />
                        <CardItem
                            src="images/ML.jpg"
                            text="Training computers to learn from data patterns."
                            label='Machine Learning'
                            path='/MLUpload'
                        />
                        <CardItem
                            src="images/NLP.jpeg"
                            text="Teaching machines to understand and process human language."
                            label='Natural Language Processing'
                            path='/NLPUpload'
                        />
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default Cards;