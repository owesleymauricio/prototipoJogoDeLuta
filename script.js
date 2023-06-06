let log = new Log(document.querySelector('.log'))

let char = new knigth("wesley")
let mons = new monstrinho()

const stage = new Stage (
    char,
    mons,
    document.querySelector('#game1'),
    document.querySelector('#monster'),
    log
)

stage.start()