const { keyDownHandler, keyUpHandler, collisionDetection, drawBall, drawPaddle, drawBricks, drawScore, rightPressed, leftPressed, bricks, x, y, dx, dy, paddleX, score, resetCanvasContext } = require('../src/script');

beforeEach(() => {
    document.body.innerHTML = `
        <canvas id="gameCanvas" width="480" height="320"></canvas>
        <div id="score"></div>
    `;

    // Thiết lập lại canvas và context
    resetCanvasContext();
});

test('keyDownHandler sets rightPressed to true when Right arrow is pressed', () => {
    const event = { key: "Right" };
    keyDownHandler(event);
    expect(rightPressed).toBe(true);
});

test('keyUpHandler sets rightPressed to ýe false when Right arrow is released', () => {
    const event = { key: "Right" };
    keyUpHandler(event);
    expect(rightPressed).toBe(false);
});

test('collisionDetection detects collision and updates score', () => {
    // Thiết lập trạng thái ban đầu của trò chơi
    bricks[0][0] = { x: 50, y: 50, status: 1 };
    x = 60;
    y = 60;
    dy = 2;

    collisionDetection();

    expect(bricks[0][0].status).toBe(0);
    expect(score).toBe(1);
    expect(dy).toBe(-2); // hướng bóng phải thay đổi
});

test('drawBall, drawPaddle, drawBricks, drawScore do not throw errors', () => {
    expect(() => drawBall()).not.toThrow();
    expect(() => drawPaddle()).not.toThrow();
    expect(() => drawBricks()).not.toThrow();
    expect(() => drawScore()).not.toThrow();
});
