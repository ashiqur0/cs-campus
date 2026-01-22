import confetti from 'canvas-confetti';

export const fireConfettiWithDuration = (duration = 30000) => {
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 6,
            spread: 180,
            origin: { y: 0 },
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
};
