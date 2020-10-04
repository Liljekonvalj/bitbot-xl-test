input.onButtonPressed(Button.A, function () {
    bitbot.driveMilliseconds(600, 400)
    basic.pause(500)
    bitbot.driveTurnMilliseconds(BBRobotDirection.Left, 100, 400)
    basic.pause(500)
    bitbot.driveMilliseconds(-600, 400)
})
basic.forever(function () {
	
})
