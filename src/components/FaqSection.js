import React from 'react';
import styled from 'styled-components';
import { AnimateSharedLayout } from "framer-motion";

import { About } from '../style';
import Toggle from './Toggle';
import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';

const FaqSection = () => {

    const [element, controls] = useScroll();

    return (
        <Faq variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How Do I Start?">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illum hic blanditiis cum similique harum.</p>
                        </div>
                </Toggle>

                <Toggle title="Schedule?">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illum hic blanditiis cum similique harum.</p>
                        </div>
                </Toggle>

                <Toggle title="How much does it cost?">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illum hic blanditiis cum similique harum.</p>
                        </div>
                </Toggle>

                <Toggle title="What Prestation?">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illum hic blanditiis cum similique harum.</p>
                        </div>
                </Toggle>
            </AnimateSharedLayout>
      </Faq>
  );
}


const Faq = styled(About)`
    display:block;
    span{
        display:block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight:lighter;
    }
    .faq-line{
        background: #cccccc;
        height:0.2rem;
        margin:2rem 0rem;
        width:100%auto;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;
