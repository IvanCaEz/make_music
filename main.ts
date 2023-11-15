input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.LoopingInBackground)
})
input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.LoopingInBackground)
})
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        music.setTempo(80)
        basic.showNumber(music.tempo())
    } else if (input.isGesture(Gesture.TiltRight)) {
        music.setTempo(160)
        basic.showNumber(music.tempo())
    }
})
