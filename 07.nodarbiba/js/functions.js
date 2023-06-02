function counter(paragraph_name, end_value, step_value){
    let text = "";
    let i = 1;

    while (i <= end_value){
    console.log(" i: " + i);
    console.log("i%2:" + (i % 2));
    if (i % step_value == 0) {
        text += "<br>" + i;
    }
    i++
    }
    document.getElementById(paragraph_name).innerHTML = text;
}

counter("demo_function_1",40,4)
counter("demo_function_2",50,5)