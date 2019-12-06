App Outline:

load page
    have array of santa's options ready to go
    
when "check list" button is clicked:
    •randomly choose option from array
    •append chosen option to a <div> 
    •depending on which option is chosen, update message to user
        -if selection = "naughty", display "oh no! better shape up before christmas!"
        -if selection = "not sure", display "hmmm... better check that list again"
        -if selection = "nice", display "of course you're on the nice list"
    •display button to reset the game and play again

css animations happening simultaneously when button is clicked:
    •start with 3 red boxes with "naughty", "nice", and "not sure"
    •randomly animate each box to turn green for 5 seconds
    •depending on which option is chosen for "selection" variable, •make the corresponding box green
        -if selection = "naughty", turn naughty box green
        -if selection = "nice", turn nice box green
        -"if selection ="not sure", turn not sure box green

CheckList.onClick(checklist){
    //start css animations
    get selection variable from math.random
    turn the correct box green
        //if statements to get correct green box
    append selection to <div>
    update message to the user
        //if statements to get correct message
    share to facebook?
    reset game
}