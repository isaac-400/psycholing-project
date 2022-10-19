/* Animate Stimulus */
const Delay = ms => new Promise(r => setTimeout(r, ms));
const target_area = document.getElementById("show");
const fixation_target = "+";

async function trigger_stimulus() {
    const stimulus = JSON.parse(document.getElementById('stimulus-input').value);

    await Delay(1000); // delay by 1 second before stimulus
                       //
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

    clear_target_area(target_area);
}

function clear_target_area(area) {
    area.innerHTML = fixation_target;
    area.style.color = "";
}

/* CSV conversion utility */

const csv_text_area = document.getElementById("csv-text")

function convert_csv_text_area() {
    words_and_colors = Papa.parse(String(csv_text_area.value));
    console.log(words_and_colors);
    words_map = new Map();
    for (let i = 0; i < words_and_colors.data.length; i++) {
        a = words_and_colors.data[i];
        words_map.set(a[0], a[1]);
    }
    const d = {
        "delay": 500,
        "words": Object.fromEntries(words_map)
    }
    Object.defineProperties(d, {
        words: {
            value: Object.fromEntries(words_map),
            writable: true
        }
    });

    //json_stim =  JSON.stringify(Object.fromEntries(words_map)));
    console.log(JSON.stringify(d))
    document.getElementById('stimulus-input').value = JSON.stringify(d);
    return words_map
}
