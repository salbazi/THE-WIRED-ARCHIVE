const chatScreen = document.getElementById("chat-screen");

let currentQuestion = 0;
const questions = [
    {
        layer: "REALITY",
        question:
            "Has the Wired changed the way you experience the physical world?",
        choices: [
            {
                text: "Yes — It feels different now", response: ["Different how?", "You noticed the change."]
            },

            {
                text: "No — The physical world is still real",
                response: ["You're certain?", "Then why do you need the Wired?"]
            },

            {
                text: "Both worlds feel real",
                response: ["Both?", "Then where does one end?"]
            },

            {
                text: "I'm not sure anymore",
                response: ["That's probably closer to the truth."]
            }
        ]
    },

    {
        layer: "REALITY",
        question: "If something feels real to you…does it matter if it actually exists?",
        choices: [
            {
                text: "Yes — Reality exists outside me",
                response: ["Then reality exists whether you perceive it or not.", "Doesn't it?"]
            },

            {
                text: "No — Experience makes it real",
                response: ["Then your experience is your reality.", "What happens when your experience changes?"]
            },

            {
                text: "It depends on what it is",
                response: ["Depends on what?", "The thing...", "...or the person experiencing it?"]
            },

            {
                text: "I don't know",
                response: ["Neither do I."]
            }
        ]
    },

    {
        layer: "REALITY",
        question: "If you could no longer tell where the physical world ended and the Wired began…would you care?",
        choices: [
            {
                text: "Yes — I need to know what is real",
                response: ["You need a boundary.", "Why?"]
            },

            {
                text: "No — The difference wouldn't matter",
                response: ["Then perhaps there was never a boundary."]
            },

            {
                text: "I'd want to know why",
                response: ["You want an explanation.", "Would you believe it?"]
            },

            {
                text: "I'd be afraid",
                response: ["Of the Wired?", "Or of yourself?"]
            }
        ]
    },

    {
        layer: "IDENTITY",
        question: "Are you the same person in the physical world that you are in the Wired?",
        choices: [
            {
                text: "Yes — I'm still me",
                response: ["You're still you.", "How do you know?"]
            },

            {
                text: "No — I'm different here",
                response: ["Then which one is real?"]
            },

            {
                text: "Part of me is the same",
                response: ["Only part?", "What happened to the rest?"]
            },

            {
                text: "I don't know who I am here",
                response: ["Maybe that's why you're here."]
            }
        ]
    },

    {
        layer: "IDENTITY",
        question:"Do you know how much of who you are has been shaped by the Wired?",
        choices: [
            {
                text: "A lot — It changed me",
                response: ["Then the Wired changed you.", "Did you choose to change?"]
            },

            {
                text: "Very little — I'm still myself",
                response: ["Are you sure?", "You may not notice what changes slowly."
                ]
            },

            {
                text: "More than I realize",
                response: ["Probably.", "Most people don't notice."
                ]
            },

            {
                text: "I can't separate the two",
                response: ["Then perhaps there aren't two versions of you anymore."]
            }
        ]
    },


    {
        layer: "IDENTITY",
        question:"If you created another version of yourself inside the Wired…which one would you be?",
        choices: [
            {
                text: "The original",
                response: ["Original.", "What makes the original more real?"]
            },

            {
                text: "The version in the Wired",
                response: ["So you could leave your physical self behind."]
            },

            {
                text: "Both of them",
                response: ["Then there would be two of you.", "Which one would remember being the original?"]
            },

            {
                text: "Neither",
                response: ["Interesting.", "Then perhaps identity was never that simple."]
            }
        ]
    },

    {
        layer: "MEMORY",
        question: "If the Wired remembers something you have forgotten…is it still your memory?",
        choices: [
            {
                text: "Yes — It still happened to me",
                response: ["It happened to you.", "Even if you can't remember it."]
            },

            {
                text: "No — A record isn't a memory",
                response: ["Then a record isn't the same as remembering."]
            },

            {
                text: "Maybe — I would need to remember it",
                response: ["Maybe memory isn't something you can prove."]
            },

            {
                text: "I don't know",
                response: ["You don't have to remember everything.", "The Wired might remember for you."
                ]
            }
        ]
    },

    {
        layer: "MEMORY",
        question:"Will the Wired hold onto pieces of you after you are gone?",
        choices: [
            {
                text: "Yes — Everything leaves a trace",
                response: ["A trace.", "Is that enough to keep someone alive?"]
            },

            {
                text: "No — Information can disappear",
                response: ["Then nothing lasts forever.", "Not even here."]
            },

            {
                text: "Only a version of me",
                response: ["A version.", "Would you recognize it?"]
            },

            {
                text: "I hope it doesn't",
                response: ["You don't want to be remembered?"]
            }
        ]
    },

    {
        layer: "MEMORY",
        question: "How would you want the Wired to remember you?",
        choices: [
            {
                text: "As I really was",
                response: ["Would the Wired know who you really were?"]
            },

            {
                text: "As others remembered me",
                response: ["Then your identity belongs to the people who remember you."]
            },

            {
                text: "As I wanted to be",
                response: ["So the Wired could preserve the person you wanted to become."]
            },

            {
                text: "I wouldn't want it to",
                response: ["Then you would want to disappear completely."]
            }
        ]
    },

    {
        layer: "PERCEPTION",
        question:"Has the Wired changed the way you receive information?",
        choices: [
            {
                text: "Yes — It changes what I notice",
                response: ["Then what you notice isn't entirely your choice."]
            },

            {
                text: "No — I choose what I see",
                response: ["You choose what you see.", "Do you?"]
            },

            {
                text: "It does both",
                response: ["You choose...", "...and something chooses for you."]
            },

            {
                text: "I don't know",
                response: ["You don't notice everything you're shown."]
            }
        ]
    },

    {
        layer: "PERCEPTION",
        question: "If two people see the same thing differently…which one is seeing the truth?",
        choices: [
            {
                text: "One of them",
                response: ["How would you know which one?"]
            },

            {
                text: "Both of them",
                response: ["Then truth can have more than one shape."]
            },

            {
                text: "Neither of them",
                response: ["Maybe perception was never truth."]
            },

            {
                text: "There is no single truth",
                response: ["Then what are we looking for?"]
            }
        ]
    },

    {
        layer: "PERCEPTION",
        question: "If the Wired controls what you see…can you still choose what to believe?",
        choices: [
            {
                text: "Yes — I can think for myself",
                response: ["You think you're choosing.", "That's interesting."]
            },

            {
                text: "No — I'm being influenced",
                response: ["Then someone else is choosing for you."]
            },

            {
                text: "I can try",
                response: ["Trying isn't the same as knowing."]
            },

            {
                text: "I don't know anymore",
                response: ["Neither do most people.", "They just don't say it."]
            }
        ]
    },

    {
        layer: "CONNECTION",
        question: "Has the Wired changed the way you interact with other people?",
        choices: [
            {
                text: "Yes — I feel more connected",
                response: ["More connected.", "Do you feel closer to them?"]
            },

            {
                text: "Yes — I feel more distant",
                response: ["You can reach them whenever you want...", "...and still feel alone."]
            },

            {
                text: "Both",
                response: ["Closer and farther.", "At the same time."]
            },

            {
                text: "No — People are still people",
                response: ["Are they?", "Even here?"]
            }
        ]
    },

    {
        layer: "CONNECTION",
        question: "Can someone understand you without ever meeting you?",
        choices: [
            {
                text: "Yes — Connection doesn't require distance",
                response: ["Then distance doesn't matter."]
            },

            {
                text: "No — You have to know someone in person",
                response: ["You need to be seen in the physical world."]
            },

            {
                text: "Partially",
                response: ["You can know someone...", "...without knowing all of them."]
            },

            {
                text: "I'm not sure",
                response: ["Maybe understanding isn't the same as knowing."]
            }
        ]
    },

    {
        layer: "CONNECTION",
        question:"If everyone is connected…can anyone truly be alone?",
        choices: [
            {
                text: "No — We are always connected",
                response: ["Then you're never alone."]
            },

            {
                text: "Yes — Connection isn't understanding",
                response: ["Being connected isn't the same as being known."]
            },

            {
                text: "Both are possible",
                response: ["Connected...", "...and alone."]
            },

            {
                text: "I don't know",
                response: ["Maybe that's something you have to discover."]
            }
        ]
    }
];

function wait(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function scrollChat() {
    chatScreen.scrollTo({
        top: chatScreen.scrollHeight,
        behavior: "smooth"
    });
}

function revealMessage(type, text, speed = 22) {
    return new Promise(resolve => {

        const message = document.createElement("div");
        message.className = `chat-line ${type}`;

        const speaker = document.createElement("span");
        speaker.className = "speaker";
        speaker.textContent = type === "lain" ? "[ LAIN ]" : "[ USER ]";

        const messageText = document.createElement("p");
        messageText.textContent = "";

        message.appendChild(speaker);
        message.appendChild(messageText);
        chatScreen.appendChild(message);

        let index = 0;

        const interval = setInterval(() => {
            messageText.textContent += text.charAt(index);
            index++;

            scrollChat();
            if (index >= text.length) {
                clearInterval(interval);
                resolve();
            }
        }, speed);
    });
}

function createIntroChoice(text) {
    return new Promise(resolve => {

        const options = document.createElement("div");
        options.className = "chat-options";

        const button = document.createElement("button");
        button.type = "button";
        button.textContent = text;
        button.addEventListener("click", () => {
            button.disabled = true;
            button.classList.add("selected");

            setTimeout(() => {
                options.remove();
                resolve(text);
            }, 180);
        });

        options.appendChild(button);
        chatScreen.appendChild(options);

        scrollChat();
    });
}

function createChoices(question) {
    return new Promise(resolve => {

        const options = document.createElement("div");
        options.className = "chat-options";

        question.choices.forEach(choice => {
            const button = document.createElement("button");
            button.type = "button";
            button.textContent = choice.text;
            button.addEventListener("click", () => {
                options.querySelectorAll("button").forEach(btn => {
                    btn.disabled = true;
                });

                button.classList.add("selected");

                setTimeout(() => {
                    options.remove();

                    resolve(choice);
                }, 180);
            });
            options.appendChild(button);
        });
        chatScreen.appendChild(options);

        scrollChat();
    });
}

async function startIntroduction() {

    const systemMessage = document.createElement("div");
    systemMessage.className = "chat-line system";
    systemMessage.textContent = "// CONNECTION ESTABLISHED WITH USER: LAIN";

    chatScreen.appendChild(systemMessage);
    await wait(600);
    await revealMessage("lain", "Are you connected?");
    await wait(350);
   
    const answer1 = await createIntroChoice("Yes.");
    await revealMessage("user", answer1);
    await wait(550);
    await revealMessage("lain", "Are you sure?");
    await wait(350);

    
    const answer2 = await createIntroChoice("Yes.");
    await revealMessage("user", answer2);
    await wait(550);
    await revealMessage("lain", "How do you know…?");
    await wait(350);
   
    const answer3 = await createIntroChoice("…");
    await revealMessage("user", answer3);
    await wait(700);
    await revealMessage("lain", "You don't, but you're here…");
    await wait(450);
    await revealMessage("lain", "Maybe that's all that matters.");
    await wait(800);

    startQuestion(0);
}

async function startQuestion(index) {
    currentQuestion = index;

    const question = questions[index];

    if (
        index === 0 ||
        questions[index - 1].layer !== question.layer
    ) {

        const layerMessage = document.createElement("div");
        layerMessage.className = "chat-layer";
        layerMessage.textContent = `// LAYER: ${question.layer}`;
        chatScreen.appendChild(layerMessage);

        scrollChat();

        await wait(450);
    }

    await revealMessage("lain", question.question);
    await wait(350);


    const selectedChoice = await createChoices(question);
    await revealMessage("user", selectedChoice.text);
    await wait(550);

    for (const response of selectedChoice.response) {
    await revealMessage("lain", response);
    await wait(450);
}

await wait(2500);

if (index < questions.length - 1) {
    startQuestion(index + 1);

} else {
    finishConversation();
}

}

async function finishConversation() {
    await wait(1200);
    await revealMessage("lain", "Perhaps…");
    await wait(700);
    await revealMessage("lain", "…you were connected all along.");
    await wait(1200);

    const systemMessage = document.createElement("div");
    systemMessage.className = "chat-line system";
    systemMessage.textContent = "// CONNECTION TERMINATED";
    chatScreen.appendChild(systemMessage);

    scrollChat();
}

startIntroduction();