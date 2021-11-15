fetch('https://random-words-api.vercel.app/word')
    .then(data => data.json())
    .then(Data => {
        const Text = Data[0].word;
        const Des = Data[0].definition;
        const Element1 = document.getElementById('wordElement');
        const Element2 = document.getElementById('wordDes');

        Element1.innerHTML = Text;
        Element2.innerHTML = Des;
    })