class Simon {
    constructor(start = false,
        player = [],
        computer = [],
        level = 1
        ) {
        this.start = start
        this.player = player
        this.computer = computer
        this.level = level
            document.addEventListener("keypress",() => {
                if (this.start == false) {
                    this.start = true
                    console.log(start)
                    document.getElementById("title").innerHTML = "Level "+ this.level
                    this.random_button()
                }
            })
    }

    onclickevent(id) {
        if (this.start == true) {
            document.getElementById(id).style.background = "white";
            document.getElementById(id+"voice").play()
            this.player.push(id)

            setTimeout(() => {
                document.getElementById(id).style.background = id;
            }, 100)

            if (this.comparison()) {
                if (this.player.length == this.computer.length){
                    setTimeout(() => {
                        this.random_button()
                        this.player = []
                        this.level += 1
                        document.getElementById("title").innerHTML = "Level "+ this.level
                    }, 500)
                }
                
            } else {
                this.start = false
                this.player = []
                this.computer = []
                document.getElementById("wrong").play()
                document.getElementById("title").innerHTML = "Press any key for start!"
                document.getElementById("title").innerHTML = "Game Over <br> Level "+this.level+"<br>Press eny key for new game!"
            }
        }
    }

    random_button() {
        if (this.player.length == this.computer.length) {
            let buttons = document.getElementById("game")
            let number = Math.floor(Math.random()*4)
            let selected = buttons.getElementsByTagName("div")[number].id
            
            document.getElementById(selected+"voice").play()

            document.getElementById(selected).style.background = "white";
            setTimeout(() => {
                document.getElementById(selected).style.background = selected;
            }, 100)
            this.computer.push(selected)
        }
    }

    comparison() {
       
        for (let i = 0; i < this.computer.length; i++) {
            if (this.player[i] != this.computer[i]) {
                if (this.player[i] == undefined) { 
                } else {
                    return false
                }
            }
        }
        return true
    }
}

const simon = new Simon()

