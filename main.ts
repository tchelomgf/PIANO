let ring = 0
let play = 0
let a = randint(0, 255)
let b = randint(0, 255)
let c = randint(0, 255)
let d = randint(0, 255)
// WSTouchPiano.TP_PlayMusic(440, music.beat(BeatFraction.Sixteenth))
basic.forever(function () {
    play = 0
    if (WSTouchPiano.TP_Press(TP_PIANO.C)) {
        play = 523
    } else if (WSTouchPiano.TP_Press(TP_PIANO.bD)) {
        play = 554
    } else if (WSTouchPiano.TP_Press(TP_PIANO.D)) {
        play = 587
    } else if (WSTouchPiano.TP_Press(TP_PIANO.bE)) {
        play = 622
    } else if (WSTouchPiano.TP_Press(TP_PIANO.E)) {
        play = 659
    } else if (!(WSTouchPiano.TP_Press(TP_PIANO.None))) {
        //WSTouchPiano.TP_PlayPiano()
        //ring = play
    }
    if (play != ring) {
        ring = play
        music.ringTone(play)
        // WSTouchPiano.TP_PlayMusic(play, music.beat(BeatFraction.Whole))
        WSTouchPiano.TP_ShowRGB(
        WSTouchPiano.TP_SetRGB(a, 0, 0),
        WSTouchPiano.TP_SetRGB(0, b, 0),
        WSTouchPiano.TP_SetRGB(0, 0, c),
        WSTouchPiano.TP_SetRGB(randint(0, 255), randint(0, 255), randint(0, 255))
        )
        a = a + 1
        if (a > 255) {
            a = 0
        }
        b = b + 1
        if (b > 255) {
            b = 0
        }
        c = c + 1
        if (c > 255) {
            c = 0
        }
        d = d + 1
        if (d > 255) {
            d = 0
        }
    }
})
