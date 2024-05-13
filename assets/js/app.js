var btn = document.getElementById('btn');

var quote = [
    {'author': 'Norman Vincent Peale',
     'quote': '“Christmas waves a magic wand over this world, and behold, everything is softer and more beautiful.”',
     'img': 'assets/img/Norman Vincent Peale.jpg'
    },
    {'author': 'Charles M. Schulz',
     'quote': '“Christmas is doing a little something extra for someone.”',
     'img': 'assets/img/Charles M. Schulz.avif'
    },
    {'author': 'Charles Dickens',
     'quote': '“I will honor Christmas in my heart, and try to keep it all the year.”',
     'img': 'assets/img/Charles Dickens.jpg'
    },
    {'author': 'Roy L. Smith',
     'quote': '“He who has not Christmas in his heart will never find it under a tree.”',
     'img': 'assets/img/Roy L. Smith.avif'
    },
    {'author': 'Hamilton Wright Mabie',
     'quote': '“Blessed is the season which engages the whole world in a conspiracy of love.”',
     'img': 'assets/img/Hamilton Wright Mabie.avif'
    },
    {'author': 'Ernest Hemingway',
     'quote': '“If my Valentine you won’t be, I’ll hang myself on your Christmas tree.”',
     'img': 'assets/img/Ernest Hemingway.avif'
    },
    {'author': ' Calvin Coolidge',
     'quote': '“Christmas is not a time nor a season, but a state of mind. To cherish peace and goodwill, to be plenteous in mercy, is to have the real spirit of Christmas.”',
     'img': 'assets/img/Calvin Coolidge.avif'
    },
    {'author': 'Eric Severeid',
     'quote': '“Christmas is a necessity. There has to be at least one day of the year to remind us that we’re here for something else besides ourselves.”',
     'img': 'assets/img/Eric Severeid.avif'
    },
    {'author': 'Bess Streeter Aldrich',
     'quote': '“Christmas Eve was a night of song that wrapped itself about you like a shawl. But it warmed more than your body. It warmed your heart...filled it, too, with melody that would last forever.”',
     'img': 'assets/img/Bess Streeter Aldrich.avif'
    }
]

var random;
var randomStore = [];

btn.addEventListener('click', function() {

    if (randomStore.length === quote.length) {
        randomStore = [];
    }

    do {
        random = Math.floor(Math.random() * quote.length);
    } while(randomStore.indexOf(random) !== -1);

    randomStore.push(random)

    var box = `
        <h3 id="quote">${quote[random].quote}</h3>
        <h2 id="author">${quote[random].author}</h2>
        <img src="${quote[random].img}" alt="quote image" id="img">
    `;

    document.getElementById('quote-box').innerHTML = box;
});
