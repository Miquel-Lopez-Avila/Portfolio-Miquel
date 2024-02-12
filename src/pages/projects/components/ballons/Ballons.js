import React, { useRef, useEffect } from 'react';
import { Ballon, Anchor } from './Ballon.styled';
import ChromeExtension from '../../../../application/assets/projects-images/img.png';
import Carendar from '../../../../application/assets/projects-images/img_1.png';
import NodesNavigationFocus from '../../../../application/assets/projects-images/189481193-62e21400-840a-4fd4-b0fe-314ae153ffe7.gif';

function MovingElement({ container }) {
    const ballon1Ref = useRef(null);
    const ballon2Ref = useRef(null);
    const ballon3Ref = useRef(null);
    const canvasRef = useRef(null);
    const createBallonMovimient = (span, ctx, canvas, x, y) => {
        let dx = 1.5; // Velocidad horizontal
        let dy = 1.5; // Velocidad vertical
        const width = span.offsetWidth; // Ancho del elemento span
        const height = span.offsetHeight; // Alto del elemento span

        function update() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Mover el elemento span
            span.style.left = `${x}px`;
            span.style.top = `${y}px`;

            // Rebotar en los bordes horizontales
            if (x + dx > canvas.width - width || x + dx < 0) {
                dx = -dx;
            }

            // Rebotar en los bordes verticales
            if (y + dy > canvas.height - height || y + dy < 0) {
                dy = -dy;
            }

            // Actualizar posición
            x += dx;
            y += dy;
        }

        return setInterval(update, 10);
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Iniciar la animación
        const animation1FrameId = createBallonMovimient(ballon1Ref.current, ctx, canvas, 50, 50);
        const animation2FrameId = createBallonMovimient(ballon2Ref.current, ctx, canvas, 500, 500);
        const animation3FrameId = createBallonMovimient(ballon3Ref.current, ctx, canvas, 200, 500);

        // Detener la animación cuando el componente se desmonte
        return () => {
            clearInterval(animation1FrameId);
            clearInterval(animation2FrameId);
            clearInterval(animation3FrameId);
        };
    }, []);
    const width = parseFloat(window.getComputedStyle(container).width);
    const height = parseFloat(window.getComputedStyle(container).height);
    return (
        <>
            <canvas ref={canvasRef} width={width} height={height}></canvas>
            <Anchor href="https://github.com/Miquel-Lopez-Avila/FlowTime" target="_blank" rel="noreferrer">
                <Ballon ref={ballon1Ref} className={'moving-element'} urlImg={ChromeExtension}>
                    <div className="balloon1">
                        <span id="span1"></span>
                        <span id="span2"></span>
                        <span id="span3"></span>
                    </div>
                </Ballon>
            </Anchor>
            <Anchor href="https://github.com/Miquel-Lopez-Avila/nodes-navigation-focus" target="_blank" rel="noreferrer">
                <Ballon ref={ballon2Ref} className={'moving-element'} urlImg={NodesNavigationFocus}>
                    <div className="balloon1">
                        <span id="span1"></span>
                        <span id="span2"></span>
                        <span id="span3"></span>
                    </div>
                </Ballon>
            </Anchor><Anchor href="https://github.com/Miquel-Lopez-Avila/Carendar-REACT" target="_blank" rel="noreferrer">
            <Ballon ref={ballon3Ref} className={'moving-element'} urlImg={Carendar}>
                <div className="balloon1">
                    <span id="span1"></span>
                    <span id="span2"></span>
                    <span id="span3"></span>
                </div>
            </Ballon>
        </Anchor>

        </>
    );
}

export default MovingElement;