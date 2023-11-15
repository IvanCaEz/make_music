def on_button_pressed_a():
    music.stop_all_sounds()
    music.play(music.string_playable("A F E F D G E F ", 120),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    music.stop_all_sounds()
    music.play(music.string_playable("G B C5 F D B A C ", 120),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    if input.is_gesture(Gesture.TILT_LEFT):
        music.set_tempo(80)
        basic.show_number(music.tempo())
    elif input.is_gesture(Gesture.TILT_RIGHT):
        music.set_tempo(160)
        basic.show_number(music.tempo())
basic.forever(on_forever)
