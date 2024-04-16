import React from 'react';
import cl from './Overlay.module.css'

const Overlay = ({saturation = ''}) => {
    return (
        <div className={[cl.overlay, saturation === 'hard' ? cl.hard : saturation === 'soft' ? cl.soft : ''].join(' ')}>
        </div>
    );
}

export default Overlay;
