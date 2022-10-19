const Delay = ms => new Promise(r => setTimeout(r, ms));
const target_area = document.getElementById("show");
const fixation_target = "+";
const stimulus = {"delay":500,"words":{"one":"random","two":"random","three":"random","four":"random","five":"random"}};
await Delay(1000); // delay by 1 second before stimulus

for (var word in stimulus.words) {
    target_area.innerHTML = word;

    if (stimulus.words[word] == "random") {
        color = ['red','orange','yellow','green','blue','purple'][Math.random()*6|0];
        target_area.style.color = color;
    } else if (stimulus.words[word] == "monochrome" || stimulus.words[word] == "") {
        target_area.style.color = "";
    } else {
        target_area.style.color = stimulus.words[word];
    }
    await Delay(stimulus.delay);
}

area.innerHTML = fixation_target;
area.style.color = "";

