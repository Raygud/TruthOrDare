function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}
    let OpenClose = 1;
    var Rand = generateRandomIntegerInRange(1, 251);
    var Dare = document.getElementById("Dare");
    var Truth = document.getElementById("Truth");
    var choices = document.getElementById("choices");
    var Menu = document.getElementById("dropdown");
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;

function dropdownmenu(){

  if (OpenClose === 1)
  {
    OpenClose = 2;
    Menu.classList.add("dropdownopen");
    console.log("menu clicked" + OpenClose)
  }

  else {
    OpenClose = 1;
    Menu.classList.remove("dropdownopen");
    console.log("menu clicked")
  }
}
function OpeningsceneD(){

    document.getElementById("Content").style.backgroundColor = "purple";
    Dare.classList.remove("SplitDb");
    Truth.classList.remove("SplitTb");
    choices.classList.remove("Spinoutb");
  Dare.classList.add("SplitD");
  Truth.classList.add("SplitT");
  choices.classList.add("Spinout");
  Menu.classList.remove("dropdownopen");
  console.log("D")
  Darre()
}
function OpeningsceneT(){

  document.getElementById("Content").style.backgroundColor = "#98FB98";
  Dare.classList.remove("SplitDb");
  Truth.classList.remove("SplitTb");
  choices.classList.remove("Spinoutb");
Dare.classList.add("SplitD");
Truth.classList.add("SplitT");
choices.classList.add("Spinout");
Menu.classList.remove("dropdownopen");
console.log("T")
Trruth()
}

function back(){
  Dare.classList.remove("SplitD");
  Truth.classList.remove("SplitT");
  choices.classList.remove("Spinout");
  Dare.classList.add("SplitDb");
  Truth.classList.add("SplitTb");
  choices.classList.add("Spinoutb");
  console.log("backed")
}





console.log(Rand);


const Truths = ["what’s the last lie you told?",
"what was the most embarrassing thing you’ve ever done on a date?",
"have you ever accidentally hit something (or someone!) with your car?",
"name someone you’ve pretended to like but actually couldn’t stand.",
"what’s your most bizarre nickname?",
"what’s been your most physically painful experience?",
"what bridges are you glad that you burned?",
"what’s the craziest thing you’ve done on public transportation?",
"if you met a genie, what would your three wishes be?",
"If you could write anyone on Earth in for President of the United States, who would it be and why?",
"What’s the meanest thing you’ve ever said to someone else?",
"Who was your worst kiss ever?",
"What’s one thing you’d do if you knew there no consequences?",
"What’s the craziest thing you’ve done in front of a mirror?",
"What’s the meanest thing you’ve ever said about someone else?",
"What’s something you love to do with your friends that you’d never do in front of your partner?",
"Who are you most jealous of?",
"What do your favorite pajamas look like?",
"Have you ever faked sick to get out of a party?",
"Who’s the oldest person you’ve dated?",
"How many selfies do you take a day?",
"Meatloaf says he’d do anything for love, but he won’t do “that.” What’s your “that?”",
"How many times a week do you wear the same pants?",
"Would you date your high school crush today?",
"Where are you ticklish?",
"Do you believe in any superstitions? If so, which ones?",
"What’s one movie you’re embarrassed to admit you enjoy?",
"What’s your most embarrassing grooming habit?",
"When’s the last time you apologized? What for?",
"How do you really feel about the Twilight saga?",
"Where do most of your embarrassing odors come from?",
"Have you ever considered cheating on a partner?",
"Have you ever cheated on a partner?",
"Boxers or briefs?",
"Have you ever peed in a pool?",
"What’s the weirdest place you’ve ever grown hair?",
"If you were guaranteed to never get caught, who on Earth would you murder?",
"What’s the cheapest gift you’ve ever gotten for someone else?",
"What app do you waste the most time on?",
"What’s the weirdest thing you’ve done on a plane?",
"Have you ever been nude in public?",
"How many gossip blogs do you read a day?",
"What is the youngest age partner you’d date?",
"Have you ever picked your nose in public?",
"Have you ever lied about your age?",
"If you had to delete one app from your phone, which one would it be?",
"What’s your most embarrassing late night purchase?",
"What’s the longest you’ve gone without showering?",
"Have you ever used a fake ID?",
"Who’s your hall pass?",
"TED: Would You Rather Questions",
"Be honest: Do you have a favorite child?",
"Which of your family members annoys you the most and why?",
"What is your greatest fear in a relationship?",
"What’s your biggest pet peeve about the person to your left?",
"What’s the most embarrassing text in your phone right now?",
"Have you ever seen a dead body?",
"What celebrity do you think is overrated?",
"Have you ever lied to your boss?",
"Have you ever stolen something from work?",
"What’s the longest you’ve gone without brushing your teeth?",
"What’s your biggest regret in life?",
"Who would you hate to see naked?",
"Describe the weirdest thing you’ve ever done while inebriated.",
"Have you ever regifted a present?",
"Would you break up with your partner for $1 million?",
"Have you ever had a crush on a coworker?",
"Do you still have feelings for any of your exes?",
"What’s the smallest tip you’ve ever left at a restaurant?",
"Have you ever regretted something you did to get a crush or partner’s attention?",
"What’s one job you could never do?",
"Have you ever ghosted a friend?",
"Have you ever ghosted a partner?",
"What’s the most scandalous photo in your cloud?",
"If you switched genders for a day, what would you do?",
"How many photo editing apps do you have on your phone?",
"How many pairs of granny panties do you own?",
"What are your favorite and least favorite of your body parts?",
"When’s the last time you got dumped?",
"What’s the most childish thing you still do?",
"When’s the last time you dumped someone?",
"If you had to pick someone in this room to be your partner on a game show, who would it be and why?",
"Would you date someone shorter than you?",
"Have you ever lied for a friend?",
"Name one thing you’d change about every person in this room.",
"When’s the last time you made someone else cry?",
"What’s the most embarrassing thing you’ve done in front of a crowd?",
"If you could become invisible, what’s the worst thing you’d do?",
"After you’ve dropped a piece of food, what’s the longest time you’ve left it on the floor before eating it?",
"What’s one thing in your life you wish you could change?",
"If you could date two people at once, would you do it? If so, who?",
"What’s something that overwhelms you?",
"What was the greatest day of your life?",
"What’s one useless skill you’d love to learn anyway?",
"If I went through your cabinets, what’s the weirdest thing I’d find?",
"Have you ever farted and blamed it on someone else?",
"What’s the worst thing you’ve ever done at work?",
"How many people have you kissed?",
"What’s your number?",
"Have you ever gotten mad at a friend for posting an unflattering picture of you?",
" What’s your most absurd dealbreaker?",
" Who in this room would you list as your emergency contact?",
" What’s something you would die if your mom found out about?",
" What’s the scariest thing that’s ever happened to you?",
" If you could set anyone here up with your best friend, who would it be and why?",
" How often do you wash your sheets?",
" Have you ever farted in an elevator?",
" Who was your first love?",
" What’s the last purchase you regretted?",
" Have you ever sent a sext?",
" Have you ever sent a sext to the wrong person? Who?",
" What’s the weirdest dream you’ve ever had?",
" Have you ever had a one-night stand?",
" Are you scared of getting old?",
" What do you want on your tombstone?",
" If you had one week to live and you had to marry someone in this room, who would it be?",
" What’s the last movie that made you cry?",
" List one positive and one negative thing about everyone in the room.",
" When was your first time?",
" Who was your first?",
" What’s the most sinful thing you’ve done in a house of worship?",
" Who would you call to help bury a body?",
" Who would call you to help bury a body? Would you do it?",
" When’s the last time you cried and why?",
" What’s your favorite possession?",
" Has anyone ever walked in on you in the bathroom?",
" Who in this group would you want to swap lives with for a week?",
" What was your biggest fear as a child?",
" What’s your biggest fear today?",
" What’s the most embarrassing thing your parents have caught you doing?",
" Name a band you only pretend to like.",
" What’s the last song that made you cry?",
" Have you ever had a wardrobe malfunction?",
" What’s the last thing you Googled?",
" What is that one thing you would never do for all the money in the world?",
" Who is your favorite person in your immediate family?",
" If you could only hear one song for the rest of your life, what would it be?",
" When’s the last time your partner embarrassed you?",
" What’s the last YouTube video you watched?",
" What’s the hardest drug you’ve ever tried?",
" When’s the last time you peed your pants?",
" Who in this room would be your one phone call if you were in jail?",
" Who do you most often text on the toilet?",
" What’s the craziest thing you’ve ever done in a movie theater?",
" What’s the craziest thing that has happened to you in a mall?",
" How long was your longest relationship?",
" What’s your biggest insecurity?",
" Have you ever been arrested?",
" Who’s the most surprising person to ever slide into your DMs?",
" Where’s one place you’re dying to visit?",
" What word do you hate the most?",
" What’s the most embarrassing thing you’ve ever posted on social media?",
" Have you ever kept a library book? For how long?",
" If you could hire someone to do one thing for you, what would it be?",
" Would you ever consider being a nudist?",
" Have you ever lied on your resume?",
" What’s the best lie you’ve ever told anyone?",
" Who’s the last person you lurked on social media?",
" What’s your most embarrassing childhood memory?",
" Have you ever pretended to not get a text to get out of doing something?",
" What’s the weirdest thing you’ve ever done in a bathroom?",
" What’s the most insane thing you’ve done to get out of a speeding ticket?",
" Do you have any hidden talents? What are they?",
" When’s the last time you got caught in a lie?",
" How do you really feel about your mother-in-law?",
" What do you think happens when you die?",
" When’s the last time you watched an adult movie?",
" Have you ever been in a fight?",
" Would you marry someone rich even if you weren’t in love with them?",
" Have you ever been caught checking someone out?",
" What’s the worst advice you’ve ever given someone else?",
" What’s the worst advice someone else has ever given you?",
" Would you volunteer as tribute for anyone in this room in The Hunger Games?",
" Is there an ex with whom you’d consider reconciling?",
" What’s the weirdest thing you do while driving?",
" Who’s the last person who called you?",
" When’s the last time you wanted to hit somebody?",
" What’s the grossest smell that you secretly enjoy?",
" What’s the biggest prank you’ve ever played on someone?",
" What’s one thing about your partner that you find least attractive?",
" When was the last time you were really angry? Why?",
" What’s your least favorite memory from college?",
" What’s the grossest thing that you do alone?",
" Have you ever intentionally sabotaged a coworker?",
" What’s your favorite guilty pleasure song?",
" Would you ever get plastic surgery?",
" Have you ever had a near-death experience?",
" What’s a skill you wish you had?",
" Have you ever compromised your morals for money? How?",
" Who was the last person you said, “I love you” to?",
" What was your first heartbreak?",
" Have you ever broken someone’s heart?",
" Have you ever peed in the shower?",
" What’s the most bogus rumor you’ve ever heard about yourself?",
" What’s the most bogus rumor you’ve ever spread or heard about someone else?",
" When and where was your first kiss? Who was it with?",
" Do you think cheating can ever be justified? How?",
" Have you ever thrown up in public?",
" When’s the last time you got rejected?",
" What’s the most common misconception about you?",
" Have you ever seriously injured another person?",
" When did you stop believing in Santa Claus?",
" What’s one responsibility you wish you didn’t have?",
" Who is the best kisser you’ve ever had?",
" What’s the scariest thing you’ve ever done?",
" Have you ever had a paranormal experience?",
" Have you ever gotten blackout drunk?",
" Do you believe in aliens?",
" What’s the pettiest thing you’ve ever done?",
" What’s something you’ve done that you still feel guilty about?",
" Have you ever gone skinny dipping?",
" What is the worst date you’ve ever been on?",
" Do you secretly dislike any of your friends’ kids?",
" What’s the weirdest thing you’ve ever collected?",
" What’s the weirdest thing you’ve ever said to a stranger?",
" Who in this room do you trust the least?",
" What’s the most inappropriate time you’ve ever laughed?",
" What’s your best pickup line?",
" What’s your sleaziest pickup line?",
" What’s the weirdest place you’ve ever given or gotten someone’s number?",
" What’s the dumbest thing you’ve ever lied about?",
" Have you ever said, “I love you” and not really meant it? To whom?",
" What’s your least favorite memory from high school?",
" What’s the worst present someone has ever given you?",
" When’s the last time you shared a toothbrush with someone else?",
" Have you ever had a crush on a boss or teacher?",
" What’s the worst present you’ve ever given someone else?",
" What’s the weirdest thought you’ve had sitting on a toilet?",
" What song do you sing most in the shower?",
" Do you have a work spouse?",
" What’s the cruelest thing you’ve ever done or said to a romantic partner?",
" Who’s the person you most regret hooking up with?",
" What’s something you’re embarrassed that you’re good at?",
" What was your most humbling moment?",
" Who would you bring with you on a deserted island?",
" What’s the worst decision one of the other players has ever made?",
" Have you ever been fired from a job?",
 "Have you ever let someone take the blame for something you did?",
 "What’s the most ridiculous thing you have an emotional attachment to?",
 "Have you ever pooped your pants as an adult?",
 "What’s something you’ve done that you’d judge someone else for doing?",
 "What’s something weird you do in your sleep?",
 "How long have you had your oldest pair of underwear?",
 "Who’s your hero?",
 "What’s something you know you need to do but aren’t looking forward to at all?",
 "What’s the biggest secret you’ve kept from your parents?",
 "What’s the most offensive joke you’ve found funny?",
 "What are you most proud of in your life?",
 "When’s the last time you lurked an ex on social media?",
 "Would you ever get a prenup?",
 "If you were rescuing people from a burning building and you had to leave one person behind from this room, who would it be?",
 "Have you ever flashed someone?",
 "Have you ever sexted anyone?",
 "Have you ever been to a nudist beach? Would you consider going?",
 "Would you ever consider posing for Playboy?",
 "Who has seen you without clothes on?",
 "Have you ever seen a naughty magazine?",
 "Have you ever sent a nude selfie? Who would you send it to?",
 "Have you ever searched for something dirty on the internet?",
 "Who do you most want to sleep with, out of everyone here?",
 "What's your favorite body part on your partner?",
 "How many people have you kissed?",
 "Have you ever been attracted to the same sex?",
 "When and where was your first kiss? Who was it with?",
 "When did you lose your virginity, and to whom did you lose it?",
 "What's your ultimate sexual fantasy?",
 "Would you go out with an older guy? How old is too old?",
 "Do you sleep in the nude?",
 "How much money would we have to pay you for you to agree to flash your boobs?",
 "Have you ever been in a friends with benefits situation?",
 "If you had to go skinny dipping with someone, who in this room would you choose?",
 "If I paid you $100, would you wear your sexiest clothes to class?"]

const Dares  =[
"Show the most embarrassing photo on your phone",
"Show the last five people you texted and what the messages said",
"Take of one piece of clothing",
"Eat a raw piece of garlic",
"Do 1 squats",
"",
"Show us your screen time report",
"Keep three ice cubes in your mouth until they melt",
"Say something dirty to the person on your left",
"Give a foot massage to the person on your right",
"Put 10 different available liquids into a cup and drink it",
"Yell out the first word that comes to your mind",
"Give a lap dance to someone of your choice",
"Remove four items of clothing",
"Like the first 15 posts on your Facebook newsfeed",
"Eat a spoonful of mustard",
"Keep your eyes closed until it's your go again",
"Send a sext to the last person in your phonebook",
"Show your orgasm face",
"Seductively eat a banana",
"Empty out your wallet/purse and show everyone what's inside",
"Do your best sexy crawl",
"Pretend to be the person to your right for 10 minutes",
"Eat a snack without using your hands",
"Whisper a secret to the person on your left",
"Say two honest things about everyone else in the group",
"Twerk for 10 seconds",
"Try and make the group laugh as quickly as possible",
"Try to put your whole fist in your mouth",
"Let another person in the group touch up your makeup",
"Tell everyone an embarrassing story about yourself",
"Try to lick your elbow",
"Say everything in a whisper for the next 10 minutes",
"Smell another player's armpit",
"Talk in an American accent for the rest of the evening",
"Do your best celebrity impression",
"Play air guitar for 2 minutes straight",
"Post the oldest selfie on your phone on Instagram Stories",
"Tell the saddest story you know",
"Howl like a wolf for two minutes",
"Dance without music for two minutes",
"Pole dance with an imaginary pole",
"Let someone else tickle you and try not to laugh",
"Put as many snacks into your mouth at once as you can",
"Scroll through your phone book until someone says stop. You either have to call or delete that person.",
"Put your clothing on backwards for the rest of the evening",
"Down your drink (responsibly)",
"Try and make yourself cry in front of the group",
"Tell the group two truths and a lie, and they have to guess which one the lie is",
"Show off your secret talent",
"Attempt to impersonate everyone in the room",
"Reply to the first five Instagram Stories on your timeline",
"Share the first celebrity on your timeline's Instagram to your Story",
"Put on as many layers as possible in 60 seconds",
"Fill your mouth with drink and gargle your answer to the next Truth",
"Smile as widely as you can and hold it for two minutes",
"Hold your drink with two hands for the rest of the evening",
"Attempt the first TikTok dance on your for you page",
"Sit on the floor for the rest of the evening",
"Give a personalised insult to everyone in the room"
]

const seen = []


 for (i = 0; i < Truths.length; i++) {
} 

function Trruth(){
    
    var Rand = generateRandomIntegerInRange(1, 261);
    if (seen.includes(Rand))
  {alert("Been there done that!") 
  Trruth()}

  else{
  console.log(Truths[Rand])
  console.log(Rand)
  seen.push(Rand);
  console.log(seen)
  document.getElementById("Question").innerHTML = Truths[Rand]
  console.log(player1)
}
  

}

for (i = 0; i < Dares.length; i++) {
} 

function Darre(){
    
    var Rand = generateRandomIntegerInRange(1, 60);
    if (seen.includes(Rand))
  {alert("Been there done that!") 
  Darre()}

  else{
  console.log(Dares[Rand])
  console.log(Rand)
  seen.push(Rand); 
  console.log(seen)
  document.getElementById("Question").innerHTML = Dares[Rand]
  console.log(player1)
}
  

}