var blocks = document.querySelector(".blocks");

blocks.addEventListener('change', function(evt){

    var target = evt.target;

    if (target.name === "one"){
        alert( "One : " + target.value)
    }

    if (target.name === "two"){
        alert( "Two : " + target.value)
    }
    //alert(evt.target.innerHTML);
});


var tasks = [
    {id : 76, status : 'todo', task : "do this..."},
    {id : 71, status : 'todo', task : "What about this"},
    {id : 36, status : 'todo', task : "Do this..."}
];

blocks.addEventListener('click', function(evt){

    var target = evt.target;

    alert(evt.target.dataset.status);


    if (target.name === "buttonOne"){

        var one = document.querySelector('.one');
        var two = document.querySelector('.two');

        alert(evt.target.dataset.id + " :  " + one.value + "  " + two.value);
    }

    if (target.name === "buttonTwo"){

        var one = document.querySelector('.pageOne');
        var two = document.querySelector('.otherPage');

        one.classList.toggle('hidden');
        two.classList.toggle('show');

        //alert(evt.target.name + "  " + one.value + "  " + two.value);
    }

});
