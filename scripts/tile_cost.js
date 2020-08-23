function tile_calculate(){
    width = parseInt(document.getElementById("width_input").value);
    length = parseInt(document.getElementById("length_input").value);
    cost = parseInt(document.getElementById("cost_input").value);

    document.getElementById("tile_output").value = width*length*cost + "";
}