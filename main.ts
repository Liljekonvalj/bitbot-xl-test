input.onButtonPressed(Button.A, function () {
    bitbot.select_model(BBModel.XL)
    bitbot.driveMilliseconds(600, 400)
    basic.pause(500)
    bitbot.driveTurnMilliseconds(BBRobotDirection.Left, 100, 400)
    basic.pause(500)
    bitbot.driveMilliseconds(-600, 400)
})
bitbot.bbEnableBluetooth(BBBluetooth.btEnable)
bitbot.select_model(BBModel.XL)
basic.forever(function () {
	
})
