input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    set_reading = input.lightLevel()
    basic.pause(500)
    basic.showString("M")
})
let set_reading = 0
basic.showString("M")
set_reading = input.lightLevel()
basic.pause(100)
basic.forever(function () {
	
})
