const delay = (t) => {
    return new Promise(res => setTimeout(res, t))
}

function trigger_stimulus() {
	
    const target_area = document.getElementById("show");
    const fixation_target = "+";
    const stimulus = {"delay":500,"words":{"one":"random","two":"random","three":"random","four":"random","five":"random"}}

    words = Object.keys(stimulus.words);
    console.log(words);
    
    delay(stimulus.delay*(words.length+1)).then(() => {
        target_area.innerHTML = fixation_target;
        target_area.style.color = "";});
    
    for (let i = 0; i < words.length; i++) {
        

        
		delay(stimulus.delay*(i+1)).then(() => {
            console.log(i);

            word = words[i]
            target_area.innerHTML = words[i];

            if (stimulus.words[word] == "random") {
                color = ['red','orange','yellow','green','blue','purple'][Math.random()*6|0];
                target_area.style.color = color;
            } else if (stimulus.words[word] == "monochrome" || stimulus.words[word] == "") {
                target_area.style.color = "";
            } else {
                target_area.style.color = stimulus.words[word];
            }
		});
    }
    



}
