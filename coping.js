//var output_div = document.getElementById("output");
//output_div.innerHTML =

var feeling = document.getElementById("feeling")
var container = $(".container");

var happyImg = $("#happy");
happyImg.on("click", pickHappyQuote);

var sadImg = $("#sad");
sadImg.on("click", pickSadQuote);

var angryImg = $("#angry");
angryImg.on("click", pickAngryQuote);

var confusedImg = $("#confused");
confusedImg.on("click", pickConfusedQuote);

var tiredImg = $("#tired");
tiredImg.on("click", pickTiredQuote);

var scaredImg = $("#scared");
scaredImg.on("click", pickScaredQuote);


var quoteOutput = $("#quoteOutput");

var happy = [
  "Go on a walk outside and appreciate the beauty of nature.", 
  "Tell your friends and family you’re happy they’re in your life.",  
  "Listen to your favorite songs and dance in your room.", 
  "Go on a long drive with a friend and share funny memories.", 
  "Do a task you’ve been putting off for a long time,",  
  "Help another person with something.", 
  "Read a book. Maybe it teaches you something, maybe it’s just enjoyable. Up to you." ,
  "Write down all the things you’re thankful for right now - look back at it when you aren’t feeling as happy as you are right now.",  
  "Try a new food - you never know, maybe you’ll love it!",  
  "Spend some money on a purchase you’ve been considering - if you want it, you’ll be happy you did it."
  ]

var sad = [
  "Force yourself to smile. Studies say just the simple act of smiling releases endorphins.",  
  "It’s okay to just cry.",  
  "Do things that make you happy like listening to music, spending time with friends, painting your nails, shopping, etc.",  
  "Get dressed! Fresh clothes can help anyone feel better.", 
  "Go outside and sit in nature.",  
  "Meditate - Even just short 5 minute sessions help to clear your head.",   
  "Eat something and make sure you drink water.",  
  "Do some self care - A skin mask, a long shower, and doing something you really love.",
  "Try and correct your posture and release tension you may be holding in your shoulders and back.",
  "Do something you know you’re really good at."
  ]

var angry = [
  "Write your feelings all down in a journal.", 
  "Count to 100 and reassess your feelings afterwards.", 
  "Splash cold water on your face.",  
  "Go on a drive, walk, or bike ride. Anything involving movement and getting away from your current situation.",  
  "Use the Rule of Fives- Will it matter in 5 minutes? 5 hours? 5 days? 5 years? If the answers are no, it’s not worth your anger.",  
  "Do a body scan and slowly release tension you’re holding - focus on jaw, shoulders, fingers, and chest." ,
  "Do a hard workout, possibly involving strength training. The act of lifting heavy can help you feel powerful and allow you to release your tension and anger.", 
  "Try to genuinely figure out why you’re angry and try writing it all down.",  
  "Talk to a friend who always makes you laugh - laughter is a great way to release anger.", 
  "Try to see the other point of view of who/what is making you angry. Understand that opinion will give you empathy, hopefully helping you decrease your personal amount of anger towards the situation."
  ]

var confused = [
  "Participate is social and community activities.",
  "Get exercise and eat nourishing food.",
  "Have positive thoughts and language.", 
  "Connect with your friends and family.", 
  "Focus on addressing your problems instead of feeling hopeless about them.", 
  "Use relaxation and meditation.", 
  "Look at the pros and cons of a situation and focus more on the pros than the cons.", 
  "Listen to music and breathe deeply.", 
  "Talk to friends.", 
  "Participate in team sports, being part of a team builds confidence."
    ]

var tired = [
  "Take a nap! You deserve it.",  
  "Try to workout, it might wake you up more than you expect.",  
  "If you’ve been around people for long, take a break. If not, try to go see someone.",  
  "Eat something - sometimes tiredness is from lack of food.",  
  "Drink something - sometimes tiredness is from dehydration.", 
  "Go outside and see if the fresh air helps.", 
  "Read a book that teaches you something new.", 
  "Try and choose a new hobby to start up - the newness will rejuvenate you." , 
  "Unplug. Phones, laptops, and social media can all be mentally draining. ", 
  "Yoga or meditation can wake up parts of your body you didn’t even know were tired."
  ]

var scared = [
  "Find five things you can see, four things you can touch, three things you can hear, two things you can smell, and one thing you can taste.",  
  "Try to understand why you feel this way and separate yourself from that conflict and feeling.",  
  "Breathing technique - draw squares in your mind or on your hand using your finger and when you are drawing in one direction inhale, then when you switch directions exhale.", 
  "Pinch yourself to help stay grounded - not painfully, just a reminder that everything is okay and real.",  
  "Light a candle that smells really good - this scent can be calming and help ground you.", 
  "Try and identify the root of the anxious thoughts or actions - is that root logical? Helpful? If not, try to take back control from your mind.",  
  "Write down your thoughts somewhere - in your phone, a journal, a laptop.",  
  "If the anxiety is consistent try to focus on getting more sleep and eating consistently and healthily.",  
  "Learn the triggers of your anxiety and let people close to you know so you can try and avoid them as best you can.",  
  "Set small goals that you can achieve every day to encourage progress.", 
  ]

var emotion;

function pickQuote(emotion) {
  random = Math.floor(Math.random() * emotion.length);
  //console.log(emotion[random]);
  quoteOutput.text(emotion[random]);
}

function pickHappyQuote() {
  pickQuote(happy);
  document.body.style.backgroundColor = "#ffff75";
  /*sadImg.toggleClass("hide");
  angryImg.toggleClass("hide");
  confusedImg.toggleClass("hide");
  happyImg.removeClass("hide");*/
  /*happyImg.style.borderRadius = 30px;*/
  
}
function pickSadQuote() {
  pickQuote(sad);
  document.body.style.backgroundColor = "lightblue";
}
function pickAngryQuote() {
  pickQuote(angry);
  document.body.style.backgroundColor = "pink";

}
function pickConfusedQuote() {
  pickQuote(confused);
  document.body.style.backgroundColor = "#9effa8";

}
function pickTiredQuote() {
  pickQuote(tired);
  document.body.style.backgroundColor = "#fcd26f";

}
function pickScaredQuote() {
  pickQuote(scared);
  document.body.style.backgroundColor = "#d8b7e8";

}


var retry = $("#retry");
retry.on("click", clearAndReset);
function clearAndReset() {
  //console.log("reset");
  document.body.style.backgroundColor = "lavenderblush";
  quoteOutput.text(" ");
}

/*var input = window.prompt('hello')*/