var canvas = document.getElementById('crime');
var ctx = crime.getContext('2d');
document.body.appendChild(crime);

canvas.width = 1000;
canvas.height = 100;

ctx.fillStyle = 'gray';
ctx.fillRect(10,30, canvas.width, canvas.height);

ctx.fillStyle = 'orange';

var array =
[
"plagiarize a website",
"steal sharks from zoo and set free in ocean",
"pirate snapchat",
"set fire to abandoned buildings",
"impersonate a charity",
"steal toilet paper from a public bathroom",
"draw on your desk",
"streak in any public place",
"cause chemical reactions in a public pool",
"smuggle drugs internationally",
"steal a road sign",
"take food out of dining hall",
"wear open-toed shoes in chemical lab",
"don't wear a helmet when riding your bike",
"do graffiti",
"play pokemon go while driving",
"bring weapons into church",
"ride your bike on the sidewalk",
"don't wear seatbelt while driving",
"sell a car on Sunday",
"don't turn down music when your neighbors complain",
"do LSD",
"pirate music",
"torrent",
"send chain mail with death threats",
"buy goldfish at petsmart under 21",
"remove price tag from clothes in clothing store",
"steal from a thrift store",
"vape on an airplane",
"put drugs in someone else's locker",
"prepare food without washing your hands",
"drive without a license",
"switch two license plates",
"spy on people",
"prank call the police",
"get involved in a riot",
"swat somebody",
"show your shoulders at school",
"rev your motorcycle in a residential neighborhood at night",
"drive past curfew",
"eat or drink in a lab",
"threaten the president through a tweet",
"get a fake ID while wearing a high school tshirt",
"buy bleach under 18",
"shoplift from Walmart",
"put recycling in a trash can",
"be an illegal immigrant",
"hide your money in offshore banks",
"don't pay taxes for profit from a lemonade stand",
"spit in someone's food",
"start a food fight",
"trespass"
];

var num = Math.random()* 51;
num = Math.floor(num);
ctx.fillText(array[num], 150, 65);
