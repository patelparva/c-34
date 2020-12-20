class Form{
    constructor() {

    }

    display() {
        var title=createElement('h2');
        title.html("Multiplayer Car Racing Game");
        title.position(130,0);

        var input=createInput('Enter Your Name');
        input.position(130,160)

        var button=createButton('Play');
        button.position(130,250);
        button.mousePressed(function() {
            input.hide();
            button.hide();
            var name=input.value();
            player.update(name);
            playerCount++
            player.updateCount(playerCount);
            
            var Greeting=createElement('h3')
            Greeting.html("Hello "+name);
            Greeting.position(130,160);
        })
    }

}