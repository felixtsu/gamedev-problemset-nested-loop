namespace SpriteKind {
    export const Tower = SpriteKind.create()
}
function placeTower (列: number, 行: number) {
    towerSprite = sprites.create(img`
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c d . . . . . . . 
        . . . . . . . c b . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . c 2 . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . e 2 . . . . . . . 
        . . . . . . e e 4 e . . . . . . 
        . . . . . . e 2 4 e . . . . . . 
        . . . . . c c c e e e . . . . . 
        . . . . e e 2 2 2 4 e e . . . . 
        . . c f f f c c e e f f e e . . 
        . c c c c e e 2 2 2 2 4 2 e e . 
        c c c c c c e e 2 2 2 4 2 2 e e 
        c c c c c c e e 2 2 2 2 4 2 e e 
        `, SpriteKind.Tower)
    tiles.placeOnTile(towerSprite, tiles.getTileLocation(列, 行))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    laser.drawLine(catSprite, towerSprite)
})
/**
 * 请实现在每个tower都都向猫射出一道激光；
 * 
 * 其中Laser模块下的drawLine指令可以从一个精灵向另外一个精灵射出激光（按A键试试）
 */
let towerSprite: Sprite = null
let catSprite: Sprite = null
tiles.setTilemap(tilemap`level`)
placeTower(2, 2)
placeTower(6, 5)
placeTower(2, 5)
placeTower(6, 2)
for (let index = 0; index < 4; index++) {
    catSprite = sprites.create(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(catSprite, sprites.castle.tilePath5)
    catSprite.setVelocity(50, 50)
    catSprite.setFlag(SpriteFlag.BounceOnWall, true)
}
