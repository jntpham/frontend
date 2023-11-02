// Inserting the Images
// getBoard()

tog = 1
whiteCastleChance=true
blackCastleChance=true
// user = "white" or "black"
// color = "white";
function insertImage() {
    document.querySelectorAll('.box').forEach(image => {

        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerTex == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class='allimg allpawn' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'

            }

            else {

                image.innerHTML = `${image.innerText} <img class='allimg' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()


//Coloring

function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(color => {

        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(240, 201, 150)'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = 'rgb(100, 75, 43)'
        }
        // if (a % 2 == 0) {
        //     color.style.backgroundColor = 'seagreen'
        // }
        // if (a % 2 !== 0) {
        //     color.style.backgroundColor = 'lime'
        // }

    })
}
coloring()




//function to not remove the same team element

function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'pink') {

            document.querySelectorAll('.box').forEach(i2 => {

                if (i2.style.backgroundColor == 'green' && i2.innerText.length !== 0) {


                    greenText = i2.innerText

                    pinkText = i1.innerText

                    pinkColor = ((Array.from(pinkText)).shift()).toString()
                    greenColor = ((Array.from(greenText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup

                    if (a % 2 == 0 && pinkColor == greenColor) {
                        i2.style.backgroundColor = 'rgb(240, 201, 150)'
                    }
                    if (a % 2 !== 0 && pinkColor == greenColor) {
                        i2.style.backgroundColor = 'rgb(100, 75, 43)'
                    }

                    // if (pinkColor == greenColor) {
                    //     i2.style.backgroundColor = 'rgb(253, 60, 60)'
                    // }
                }
            })
        }
    })
}












document.querySelectorAll('.box').forEach(item => {



    item.addEventListener('click', function () {

        // To delete the opposite element

        if (item.style.backgroundColor == 'green' && item.innerText.length == 0) {
            tog = tog + 1
            console.log("TEST!")
        }
        else if (item.style.backgroundColor == 'aqua' && item.innerText.length == 0) {
            tog = tog + 1
            console.log("TEST2")
        }

        else if (item.style.backgroundColor == 'green' && item.innerText.length !== 0) {

            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'pink') {
                    console.log("TEST3")
                    pinkId = i.id
                    pinkText = i.innerText

                    document.getElementById(pinkId).innerText = ''
                    item.innerText = pinkText
                    coloring()
                    insertImage()
                    tog = tog + 1
                    if(userTurn(color)){
                        sendBoard()
                    }
                }
            })
        }



        getId = item.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        arr.push('0')
        aup = eval(arr.join(''))
        a = aside + aup



        // Function to display the available paths for all pieces

        function whosTurn(toggle) {
            // PAWN

            if (item.innerText == `${toggle}pawn`) {
                item.style.backgroundColor = 'pink'

                if (tog % 2 !== 0 && aup < 800) {

                    if (aup == 200 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                        if (aup == 200 && document.getElementById(`b${a + 200}`).innerText.length == 0) {
                            document.getElementById(`b${a + 200}`).style.backgroundColor = 'green'
                        }
                    }

                    if (aup !== 200 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                    }

                    if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                    }

                    if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'

                    }
                    // if (aup == 800) {
                    //     document.getElementById(`b${a}`).innerText = 'Wqueen'
                    //     coloring()
                    //     insertImage()
                    // }
                    // if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length == 0 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                    //     document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                    // }

                    // if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length == 0 && document.getElementById(`b${a + 100}`).innerText.length == 0) {
                    //     document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'

                    // }
                }

                if (tog % 2 == 0 && aup > 100) {

                    if (aup == 700 && document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                        if (aup == 700 && document.getElementById(`b${a - 200}`).innerText.length == 0) {
                            document.getElementById(`b${a - 200}`).style.backgroundColor = 'green'
                        }
                    }

                    if (aup !== 700 && document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                    }
                    if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                    }
                    if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'

                    }
                }


            }

            // KING

            if (item.innerText == `${toggle}king`) {


                if (aside < 8) {
                    document.getElementById(`b${a + 1}`).style.backgroundColor = 'green'

                }
                if (aside > 1) {

                    document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'
                }
                if (aup < 800) {

                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                }
                if (aup > 100) {

                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                }

                if (aup > 100 && aside < 8) {

                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                }
                if (aup > 100 && aside > 1) {

                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                }
                if (aup < 800 && aside < 8) {

                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                }
                if (aup < 800 && aside > 1) {

                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                }
                
                if(whiteCastleChance==true && a==105 && document.getElementById('b106').innerText== '' && document.getElementById('b107').innerText== '' && document.getElementById('b108').innerText== 'Wrook'){
                    document.getElementById(`b107`).style.backgroundColor = 'aqua'

                }
                if(whiteCastleChance==true && a==105 && document.getElementById('b104').innerText== '' && document.getElementById('b103').innerText== '' && document.getElementById('b102').innerText== '' && document.getElementById('b101').innerText== 'Wrook'){
                    document.getElementById(`b103`).style.backgroundColor = 'aqua'

                }
                if(blackCastleChance==true && a==805 && document.getElementById('b806').innerText== '' && document.getElementById('b807').innerText== '' && document.getElementById('b808').innerText== 'Brook'){
                    document.getElementById(`b807`).style.backgroundColor = 'aqua'

                }
                if(blackCastleChance==true && a==805 && document.getElementById('b804').innerText== '' && document.getElementById('b803').innerText== '' && document.getElementById('b802').innerText== '' && document.getElementById('b801').innerText== 'Brook'){
                    document.getElementById(`b803`).style.backgroundColor = 'aqua'

                }

                item.style.backgroundColor = 'pink'

            }


            // ROOK

            if (item.innerText == `${toggle}rook`) {

                for (let i = 1; i < 9; i++) {

                    if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                    }
                    else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                    }
                    else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                    }
                    else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                    }
                    else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                item.style.backgroundColor = 'pink'
            }



            // BISHOP

            if (item.innerText == `${toggle}bishop`) {


                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }

                }


                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }
                }



                item.style.backgroundColor = 'pink'

            }



            // QUEEN

            if (item.innerText == `${toggle}queen`) {


                for (let i = 1; i < 9; i++) {

                    if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                    }
                    else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                    }
                    else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                    }
                    else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                    }
                    else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'green'
                        break
                    }
                }



                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                    }
                    else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'green'
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }

                }


                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                    }
                    else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'green'
                        break
                    }
                }



                item.style.backgroundColor = 'pink'

            }

            // KNIGHT

            if (item.innerText == `${toggle}knight`) {


                if (aside < 7 && aup < 800) {
                    document.getElementById(`b${a + 100 + 2}`).style.backgroundColor = 'green'
                }
                if (aside < 7 && aup > 200) {
                    document.getElementById(`b${a - 100 + 2}`).style.backgroundColor = 'green'
                }
                if (aside < 8 && aup < 700) {
                    document.getElementById(`b${a + 200 + 1}`).style.backgroundColor = 'green'
                }
                if (aside > 1 && aup < 700) {
                    document.getElementById(`b${a + 200 - 1}`).style.backgroundColor = 'green'
                }
                if (aside > 2 && aup < 800) {
                    document.getElementById(`b${a - 2 + 100}`).style.backgroundColor = 'green'
                }
                if (aside > 2 && aup > 100) {
                    document.getElementById(`b${a - 2 - 100}`).style.backgroundColor = 'green'
                }
                if (aside < 8 && aup > 200) {
                    document.getElementById(`b${a - 200 + 1}`).style.backgroundColor = 'green'
                }
                if (aside > 1 && aup > 200) {
                    document.getElementById(`b${a - 200 - 1}`).style.backgroundColor = 'green'
                }

                item.style.backgroundColor = 'pink'

            }
        }


        // Toggling the turn

        if (tog % 2 !== 0) {
            document.getElementById('tog').innerText = "White's Turn"
            whosTurn('W')
        }
        if (tog % 2 == 0) {
            document.getElementById('tog').innerText = "Black's Turn"
            whosTurn('B')
        }

        reddish()



        // winning()

        numOfKings = 0


        document.querySelectorAll('.box').forEach(win => {
            if (win.innerText == 'Wking' || win.innerText == 'Bking') {
                numOfKings += 1
            }

        })

        if (numOfKings == 1) {
            setTimeout(() => {
                // console.log(`${toggle}`) 
                if (tog % 2 == 0) {
                    alert('White Wins !!')
                    location.reload()
                    resetBoard()
                }
                else if (tog % 2 !== 0) {
                    alert('Black Wins !!')
                    location.reload();
                    resetBoard();
                }
            }, 100)
        }
    


    })

})

// Moving the element
document.querySelectorAll('.box').forEach(item => {

    item.addEventListener('click', function () {

        if (item.style.backgroundColor == 'pink') {

            pinkId = item.id
            pinkText = item.innerText

            document.querySelectorAll('.box').forEach(item2 => {

                item2.addEventListener('click', function () {
                    getId = item2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    arr.push('0')
                    aup = eval(arr.join(''))
                    a = aside + aup

                    if (item2.style.backgroundColor == 'green' && item2.innerText.length == 0) {
                        if (pinkText == `Wpawn` && aup == 800) {

                            document.getElementById(`b${a}`).innerText = 'Wqueen'
                            document.getElementById(pinkId).innerText = ''
                            coloring()
                            insertImage()

                        }
                        else if (pinkText == `Bpawn` && aup == 100) {

                            document.getElementById(`b${a}`).innerText = 'Bqueen'
                            document.getElementById(pinkId).innerText = ''
                            coloring()
                            insertImage()

                        }
                        else {



                            document.getElementById(pinkId).innerText = ''
                            item2.innerText = pinkText
                            coloring()
                            insertImage()
                        }
                        if(userTurn(color)){
                            sendBoard()
                        }
                        console.log(seeBoard())
                    }
                    

                    else if (item2.style.backgroundColor == 'aqua') {
                        if(item2.id=='b103'){
                            document.getElementById('b101').innerText = ''
                            document.getElementById('b102').innerText = ''
                            document.getElementById('b103').innerText = 'Wking'
                            document.getElementById('b104').innerText = 'Wrook'
                            document.getElementById('b105').innerText = ''
                            document.getElementById(pinkId).innerText = ''
                            whiteCastleChance=false
                            coloring()
                            insertImage()
                        }
                        else if(item2.id=='b107'){
                            document.getElementById('b105').innerText = ''
                            document.getElementById('b106').innerText = 'Wrook'
                            document.getElementById('b107').innerText = 'Wking'
                            document.getElementById('b108').innerText = ''
                            document.getElementById(pinkId).innerText = ''
                            whiteCastleChance=false
                            coloring()
                            insertImage()
                        }
                        else if(item2.id=='b803'){
                            document.getElementById('b801').innerText = ''
                            document.getElementById('b802').innerText = ''
                            document.getElementById('b803').innerText = 'Bking'
                            document.getElementById('b804').innerText = 'Brook'
                            document.getElementById('b805').innerText = ''
                            document.getElementById(pinkId).innerText = ''
                            blackCastleChance=false
                            coloring()
                            insertImage()
                        }
                        else if(item2.id=='b807'){
                            document.getElementById('b805').innerText = ''
                            document.getElementById('b806').innerText = 'Brook'
                            document.getElementById('b807').innerText = 'Bking'
                            document.getElementById('b808').innerText = ''
                            document.getElementById(pinkId).innerText = ''
                            blackCastleChance=false
                            coloring()
                            insertImage()
                        }
                    }
                })
            })
        }
    })
    
})
    

// Prvents from selecting multiple elements
z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function () {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== 'green' && ee.style.backgroundColor !== 'aqua') {
            coloring()
        }
    })
})




/* CHESS STUFF */
function userTurn(color){
    if(tog%2==1 && color == "black"){
        return true;
    }
    else if(tog%2==0 && color=="white"){
        return true;
    }
    return false;
}
var reset = [
    ['Brook', 'Bknight', 'Bbishop', 'Bqueen', 'Bking', 'Bbishop', 'Bknight', 'Brook'],
    ['Bpawn', 'Bpawn', 'Bpawn', 'Bpawn', 'Bpawn', 'Bpawn', 'Bpawn', 'Bpawn'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['Wpawn', 'Wpawn', 'Wpawn', 'Wpawn', 'Wpawn', 'Wpawn', 'Wpawn', 'Wpawn'],
    ['Wrook', 'Wknight', 'Wbishop', 'Wqueen', 'Wking', 'Wbishop', 'Wknight', 'Wrook']
];
function getBoard() {
    // const apiUrl = "http://127.0.0.1:5001/chessboardDB";
    const apiUrl = "https://whispbackend.duckdns.org/chessboardDB"
    fetch(apiUrl, {
        method: "GET"
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => { // there should be an if statement somewhere here cuz its running updateBoard periodically
        // data = JSON.stringify(data);
        data = JSON.parse(data);

        // console.log(data["board"][0]);
        // console.log(data["board"]);
        
        // updateBoard(data["board"]);
        // tog = data["turn"];
        // blackCastleChance = data["bCastleChance"];
        // whiteCastleChance = data["wCastleChance"];
        // console.log(data["board"] == seeBoard())
        const equalsCheck = (a, b) => {
            return JSON.stringify(a) === JSON.stringify(b);
        }
        if(!(equalsCheck(data["board"],seeBoard()))){ //the board was changed
            // console.log(seeBoard())
            // console.log(data["board"])
            console.log('Getting the board')
            tog = data["turn"];
            blackCastleChance = data["bCastleChance"];
            whiteCastleChance = data["wCastleChance"];
            updateBoard(data["board"]);
        }
        else{} // no board changes
    })
    .catch(error => {
        // document.getElementById("response").textContent = "Error: " + error;
    });
    return "HELLO"
}
function setColor(){
    playerColor = prompt("ENTER PLAYER COLOR ('white'/'black')");
    while(true){
        if(playerColor.toLowerCase() == "black" || playerColor.toLowerCase() == "white"){
            break;
        }
        playerColor = prompt("ENTER PLAYER COLOR ('white'/'black')");
    }
    color = playerColor.toLowerCase();
}
function seeBoard()
{
    const board = new Array(8);
    for (let i = 0; i < 8; i++) 
    {
        board[i] = new Array(8).fill(null);
    }
    for(let i = 0; i < board.length; i ++)
    {
        for(let k = 0; k < board[i].length; k++)
        {
            var iden = "b" + (i+1).toString() + "0" + (k+1).toString();
            board[7-i][k] = document.getElementById(iden).innerText;
        }
    }
    return board;
} 

// var prevBoard = seeBoard()
// function checkPush(){
//     const equalsCheck = (a, b) => {
//         return JSON.stringify(a) === JSON.stringify(b);
//     }
//     if(equalsCheck(prevBoard,seeBoard())){ // CHECK FOR A BETTER WAY TO SOMEHOW CHECK IF A PIECE HAS BEEN MOVED
//         console.log(prevBoard);
//         console.log(seeBoard());
//         return true;
//     }
//     else{
//         prevBoard = seeBoard();
//         return false;
//     }
//     return false;
// }


function sendBoard(cBoard = seeBoard(), qReset = false) { // SEND THE items CONSTANT IN POST
    // const apiUrl = "http://127.0.0.1:5001/chessboardDB"
    const apiUrl = "https://whispbackend.duckdns.org/chessboardDB"
    const currentBoard = cBoard;
    const items = {
        board : currentBoard, //actual board
        turn : tog, //integer (odd is white's turn/even is black's turn)
        bCastleChance : blackCastleChance, //boolean
        wCastleChance : whiteCastleChance //boolean
    }
    console.log("Sending data:", JSON.stringify(items["board"])); // Add this line
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({board: items}), // Ensure the data is in the correct format
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log the response from the server
    })
    .catch(error => {
        console.error(error);
    });
}
function updateBoard(board){ // update the board based on the new board list
    for(let i = 0; i < 8; i++) {
        for(let k = 0; k < 8; k++) {
            var iden = "b" + (i+1).toString() + "0" + (k+1).toString();
            document.getElementById(iden).innerText = board[7-i][k];
            coloring();
            insertImage();
            // if(tog%2 == 0) // if black's turn, display board upside down
            // {
            //     var iden = "b" + (i+1).toString() + "0" + (k+1).toString();
            //     document.getElementById(iden).innerText = board[i][k];
            //     coloring();
            //     insertImage();
            // }
            // else{ //if white's turn
            //     var iden = "b" + (i+1).toString() + "0" + (k+1).toString();
            //     document.getElementById(iden).innerText = board[7-i][k];
            //     coloring();
            //     insertImage();
            // }
        }
    }
}
function resetBoard(){
    tog = 1;
    updateBoard(reset);    
    sendBoard(reset, true);
    console.log("BOARD CLEARED")
}

// var demo = [
//     ['Brook', 'Bknight', 'Bbishop', 'Bqueen', 'Bking', 'Bbishop', 'Bknight', 'Brook'],
//     ['Bpawn', 'Bpawn', 'Bpawn', 'Bpawn', 'Bpawn', 'Bpawn', 'Bpawn', 'Bpawn'],
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
//     ['', '', '', 'Wpawn', '', '', '', ''],
//     ['', '', '', '', '', '', '', ''],
//     ['Wpawn', 'Wpawn', 'Wpawn', '', 'Wpawn', 'Wpawn', 'Wpawn', 'Wpawn'],
//     ['Wrook', 'Wknight', 'Wbishop', 'Wqueen', 'Wking', 'Wbishop', 'Wknight', 'Wrook']
// ];



// RUN GET BEFORE SEND
setInterval(getBoard, 70);
// setInterval(sendBoard, 100);
// updateBoard(demo)