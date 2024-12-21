input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
    strip.show()
})
input.onButtonPressed(Button.AB, function () {
    strip.clear()
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
