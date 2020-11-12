// 在此处添加您的代码
namespace laser{

    let pairs:{start:Sprite, to:Sprite}[] = []

    //%block="draw line from %start=variables_get(mySprite) to %to=variables_get(mySprite)"
    //%blockid=drealinefromstarttoto
    export function drawLine(start:Sprite, to:Sprite) {      
        pairs.push({start:start, to:to})
    }

    game.onShade(()=> {
        let canvas = image.create(160, 120)
        pairs.forEach(function(p) {
            canvas.drawLine(p.start.x, p.start.y, p.to.x, p.to.y, 4)
        })
        screen.drawTransparentImage(canvas,0,0)
    })

}