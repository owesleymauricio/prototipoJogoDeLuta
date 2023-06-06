// game1 e monster
class game1{
     
    _life= 1
    maxlife= 1
    atack = 0
    defense = 0 

    constructor (name) {
        this.name = name
    }

    get life () {
        return this._life
    }
    set life(newlife){
        this._life = newlife < 0 ? 0 : newlife;
    }
}

class knigth extends game1{
    constructor(name){
        super(name)
        this.life = 100
        this.atack = 10
        this.defense = 8
        this.maxlife = this.life
    }

}

class mago extends game1{
    constructor(name){
        super(name)
        this.life = 80
        this.atack = 14
        this.defense = 4
        this.maxlife = this.life
    }
}

class monstrinho extends game1 {
    constructor() {
        super('Monstrinho')
        this._life = 50
        this.atack = 10
        this.defense = 6
        this.maxlife = this.life
    }
}

class monstrao extends game1 {
    constructor() {
        super('Monstrão') 
        this._life = 120
        this.atack = 16
        this.defense = 5
        this.maxlife = this.life
        
    }
}

class Stage {
    constructor(f1, f2, f1el, f2el, logObj){
        this.f1 = f1;
        this.f2 = f2;
        this.f1el = f1el;
        this.f2el = f2el;
        this.log = logObj
    }
    start() {
        this.update()
        //atque
        this.f1el.querySelector('.atack').addEventListener('click', () => this.doatack(this.f1, this.f2))
        this.f2el.querySelector('.atack').addEventListener('click', () => this.doatack(this.f2, this.f1))

    }
    update() {
        //fighter1 barra de vida
       this.f1el.querySelector('.name').innerHTML = `${this.f1.name} - ${this.f1.life.toFixed(1)}HP`
       let f1pct = (this.f1.life / this.f1.maxlife) * 100
       this.f1el.querySelector('.barra').style.width = `${f1pct}%`
        //fighter2 barra de vida
        this.f2el.querySelector('.name').innerHTML = `${this.f2.name} - ${this.f2.life.toFixed(1)}HP`
        let f2pct = (this.f2.life / this.f2.maxlife) * 100
        this.f2el.querySelector('.barra').style.width = `${f2pct}%`
    }
        // comando de atacar 
    doatack(atacou, atacado){
        if (atacou.life <= 0 || atacado.life <= 0  ){
            this.log.addMessage('O jogo acabou !!')
            return           
        }
        
        let fatorAtaque = (Math.random() * 2) .toFixed(2);
        let fatorDefesa = (Math.random() * 2) .toFixed(2);

        let ataqueAtual = atacou.atack * fatorAtaque
        let defesaAtual = atacado.defense * fatorDefesa

        if (ataqueAtual > defesaAtual){
            atacado.life -= ataqueAtual;
            this.log.addMessage(`${atacou.name} casou ${ataqueAtual.toFixed(2)} de dano em ${atacado.name}`)
        } else {
            this.log.addMessage(`${atacado.name} conseguiu defender.`)
        }

        this.update()
    }
}
// faz a lista aparecer na tela,adiciona a lista
class Log{
    list = []

    constructor(listeEL) {
        this.listeEL = listeEL
    }

    addMessage(msg){
        this.list.push(msg)
        this.render()
    }

    render(){
        this.listeEL.innerHTML = '';

        for (let i in this.list) {
            this.listeEL.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}