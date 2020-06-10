var samplejson=
  [{
    "name": "Connie",
    "college": "Cornell",
    "major": "information science"
},
{
    "name": "Jim",
    "college": "Ithaca College",
    "major": "computer science"
  }
];
const header = document.querySelector('header');
const section = document.querySelector('section');
for (let i = 0; i < samplejson.length; i++) {
  const myArticle = document.createElement('article');
  const myH2 = document.createElement('h2');
  const myPara1 = document.createElement('p');
  const myPara2 = document.createElement('p');

  myH2.textContent = samplejson[i].name;
  myPara1.textContent = 'college: ' + samplejson[i].college;
  myPara2.textContent = 'major: ' + samplejson[i].major;
      
  myArticle.appendChild(myH2);
  myArticle.appendChild(myPara1);
  myArticle.appendChild(myPara2);
  section.appendChild(myArticle);
}
//this is based off of https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON