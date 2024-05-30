let lastTapTime = 0;
let tapIntervals = [];

document.getElementById('tap-button').addEventListener('click', () => {
    const currentTime = Date.now();

    if (lastTapTime !== 0) {
        const interval = currentTime - lastTapTime;
        tapIntervals.push(interval);

        // 直近の5つのタップ間隔を使用してBPMを計算
        if (tapIntervals.length > 5) {
            tapIntervals.shift(); // 古い間隔を削除
        }

        const averageInterval = tapIntervals.reduce((a, b) => a + b) / tapIntervals.length;
        const bpm = 60000 / averageInterval; // ミリ秒を分に変換してBPM計算
        document.getElementById('bpm-display').textContent = `BPM: ${Math.round(bpm)}`;
    }

    lastTapTime = currentTime;
});
