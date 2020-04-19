import { toArray } from 'lodash'
const canvases = toArray(document.querySelectorAll('.js-navi-chart')) as HTMLCanvasElement[]
canvases.forEach((canvas) => pieChart(canvas))

export function pieChart(canvas: HTMLCanvasElement) {

    if (!canvas) return

    const COLOR_DATA = ['#ea6f6c','#f9c270','#fff67f','#69bd83','#54c3f1']
    let canvasData = JSON.parse(canvas.dataset.grah!).map(function (data: string) { return Number(data); })
    let total = 0
    let start : number = -Math.PI / 2
    
    for (let i=0; i< canvasData.length; i++) {
        total += canvasData[i]
    }

    const ctx = canvas.getContext('2d')

    if (!ctx) return

    for (let i=0; i < canvasData.length; i++) {
        let end = start + 2 * Math.PI * (canvasData[i] / total);
        ctx.beginPath();
        ctx.moveTo(80, 80);
        ctx.arc(80, 80, 80, start, end, false)
        ctx.closePath()
        ctx.fillStyle = COLOR_DATA[i]
        ctx.fill()
        Math.atan2(end, start)
        start = end
    }
}
