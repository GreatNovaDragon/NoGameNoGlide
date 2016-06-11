#pragma strict

function Start () {
}

function Update () {
    if(Input.GetKeyDown("left")){
        transform.Translate(-10, 0, Time.deltaTime);
    }
    if(Input.GetKeyDown("right")){
        transform.Translate(10, 0, Time.deltaTime);  
    }
}
