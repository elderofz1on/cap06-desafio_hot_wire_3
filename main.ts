/**
 * Se você estiver utilizando a micro:bit v1, você pode substituir o bloco: no logotipo... por: no botão A+B pressionado.
 * 
 * Qual dos blocos (alterar falhas..., definir falhas...) você usaria para criar o cheat?
 */
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(falhas)
    basic.showLeds(`
        # # # . #
        # . # . #
        # . # # #
        # . . . .
        # . . . .
        `)
    basic.pause(200)
    soundExpression.spring.playUntilDone()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Falhas: ")
    basic.showNumber(falhas)
    basic.pause(500)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Skull)
    soundExpression.slide.play()
    basic.clearScreen()
})
let falhas = 0
falhas = 0
basic.showLeds(`
    # # # . #
    # . # . #
    # . # # #
    # . . . .
    # . . . .
    `)
basic.pause(200)
soundExpression.spring.playUntilDone()
basic.clearScreen()
