input.onButtonPressed(Button.A, function on_button_pressed_a() {
    music.stopAllSounds()
    music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.LoopingInBackground)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    music.stopAllSounds()
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.LoopingInBackground)
})
basic.forever(function on_forever() {
    if (input.isGesture(Gesture.LogoDown)) {
        music.setTempo(80)
        basic.showNumber(music.tempo())
    } else if (input.isGesture(Gesture.LogoUp)) {
        music.setTempo(160)
        basic.showNumber(music.tempo())
    }
    
})
