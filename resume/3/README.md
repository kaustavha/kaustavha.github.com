# To compile
Tis' a lil hacky

    cd src
    sudo npm install -g coffee-script jade stylus
    sudo npm install chokidar
    sudo cake dev

Theres also a cake prod which I recommend instead 
It doesn't use chokidar which isnt the most performant file watcher so you won't need to locally install it
And it outputs compressed HTML and CSS