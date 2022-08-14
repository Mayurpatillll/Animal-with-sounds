var numberOfAnimalButtons = document.querySelectorAll(".animal").length;

for (var i = 0; i < numberOfAnimalButtons; i++) {

    document.querySelectorAll(".animal")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;



        switch (buttonInnerHTML) {
            case "bats":
                var bats = new Audio('sounds/Bats.mp3');
                bats.play();
                break;

            case "cow":
                var cow = new Audio("sounds/Cow.mp3");
                cow.play();
                break;

            case "coyote":
                var coyote = new Audio("sounds/Coyote.mp3");
                coyote.play();
                break;

            case "dog":
                var dog = new Audio('sounds/Dog.mp3');
                dog.play();
                break;

            case "dolphin":
                var dolphin = new Audio('sounds/Dolphin.mp3');
                dolphin.play();
                break;

            case "dove":
                var dove = new Audio('sounds/Dove.mp3');
                dove.play();
                break;

            case "duck":
                var duck = new Audio('sounds/Duck.mp3');
                duck.play();
                break;

            case "elk":
                var elk = new Audio('sounds/Elk.mp3');
                elk.play();
                break;

            case "frog":
                var frog = new Audio('sounds/Frog.mp3');
                frog.play();
                break;

            case "guinea-pig":
                var guinea = new Audio('sounds/Guinea-pig.mp3');
                guinea.play();
                break;



            case "owl":
                var owl = new Audio('sounds/Owl.mp3');
                owl.play();
                break;


            case "pig":
                var pig = new Audio('sounds/Pig.mp3');
                pig.play();
                break;


            case "robin-bird":
                var robin = new Audio('sounds/Robin-Bird.mp3');
                robin.play();
                break;


            case "rooster":
                var rooster = new Audio('sounds/Rooster.mp3');
                rooster.play();
                break;


            case "seagull":
                var seagull = new Audio('sounds/Seagull.mp3');
                seagull.play();
                break;


            case "sheep":
                var sheep = new Audio('sounds/Sheep.mp3');
                sheep.play();
                break;


            case "squirrel":
                var squirrel = new Audio('sounds/Squirrel.mp3');
                squirrel.play();
                break;


            case "tiger":
                var tiger = new Audio('sounds/Tiger.mp3');
                tiger.play();
                break;


            case "turkey":
                var turkey = new Audio('sounds/turkey.mp3');
                turkey.play();
                break;


            default:
                alert("Click On Animal Image");

        }


    });

}