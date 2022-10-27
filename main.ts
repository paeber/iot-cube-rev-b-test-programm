function testGrovePorts () {
    basic.showString("J")
    resGrove = -1
    pins.analogWritePin(AnalogPin.P0, 800)
    basic.pause(100)
    if (pins.analogReadPin(AnalogPin.P1) == 800) {
        resGrove = 1
    } else {
        resGrove = 0
    }
}
input.onButtonPressed(Button.A, function () {
    UserConfirm = 0
})
function testPortExpander () {
    basic.showString("P")
    music.playTone(262, music.beat(BeatFraction.Whole))
    UserConfirm = -1
    while (UserConfirm == -1) {
        IoTCube.togglePin(MCP_Pins.USR_LED)
        basic.pause(500)
    }
    return UserConfirm
}
input.onButtonPressed(Button.B, function () {
    UserConfirm = 1
})
let resGrove = 0
let UserConfirm = 0
basic.showString("B-TEST")
basic.pause(2000)
while (!(input.logoIsPressed())) {
	
}
UserConfirm = -1
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
datalogger.setColumnTitles(
"Micro:Bit",
"DevEUI",
"Version"
)
datalogger.log(
datalogger.createCV("DevEUI", IoTCube.getParameter(eRUI3_PARAM.DEVEUI)),
datalogger.createCV("Version", IoTCube.getParameter(eRUI3_PARAM.VERSION)),
datalogger.createCV("Micro:Bit", control.deviceName())
)
testPortExpander()
datalogger.log(datalogger.createCV("PortExpander", UserConfirm))
testGrovePorts()
datalogger.log(datalogger.createCV("GrovePorts", resGrove))
basic.showIcon(IconNames.Yes)
music.playTone(523, music.beat(BeatFraction.Whole))
basic.forever(function () {
	
})
