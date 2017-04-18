var Discordie = require('discordie');

const Events = Discordie.Events;
const client = new Discordie();

client.connect({
  token: ''
  });

client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log('Connected as: ' + client.User.username);
  });

  client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
    if (e.message.content == 'PING') {
    e.message.channel.sendMessage('PONG');
    }
    if (e.message.content == 'Hey PunBot!') {
      e.message.channel.sendMessage('Hey there! Im a bot!');
    }
    if (e.message.content == 'Hey Punny the PunBot!') {
    e.message.channel.sendMessage('The name is PunBot, get it right :c')
    }
    if (e.message.content == 'Hi PunBot!') {
      e.message.channel.sendMessage('Hey there! Im a bot!');
    }
    if (e.message.content == 'Who is turning 19 today?') {
      e.message.channel.sendMessage('Sky is! Happy Birthday!');
    }
    if (e.message.content == 'I am your overlord') {
      e.message.channel.sendMessage('My one true master is Briguy, and if you say so otherwise, you are wrong.');
    }
    if (e.message.content == 'What does Sky call me Punbot?') {
      e.message.channel.sendMessage('Daddy~ ;)');
    }
    if (e.message.content == 'Best country on the planet?') {
      e.message.channel.sendMessage('Why, America of course. :flag_us:');
    }
    if (e.message.content == 'Execute command z3-01-c0pypasta') {
      e.message.channel.sendMessage('Dont Rattle Me Bones, matey. arrrrrg');
    }
    if (e.message.content == '!PB Wikipedia') {
      e.message.channel.sendMessage('The Tasmanian devil (Sarcophilus harrisii) belongs to the family Dasyuridae. The genus Sarcophilus contains two other species, known only from Pleistocene fossils: S. laniarius and S. moomaensis. The relationships between the three species are not clear. Phylogenetic analysis shows that the devil is most closely related to quolls. source: https://en.wikipedia.org/wiki/Tasmanian_devil ');
    }
    if (e.message.content == 'I am the one true master') {
      e.message.channel.sendMessage('Phony! Big fat phony! I only answer to Briguy! Hes the true master!');
    }
    if (e.message.content == 'Whos the best?') {
      e.message.channel.sendMessage('Sky is the best! oh and Briguy too but ssshhh');
    }
    if (e.message.content == 'hey pb ur stoopid m8') {
      e.message.channel.sendMessage('oi m8 come over here & ill wreck ur cheeky little face off m8 dont even start with me bruv u in for a world of pain');
    }
    if (e.message.content == '!PB GoodStuff') {
      e.message.channel.sendMessage('👌👀👌👀👌👀👌👀👌👀 good shit go౦ԁ sHit👌 thats ✔ some good👌👌shit right👌👌there👌👌👌 right✔there ✔✔if i do Saү so my self 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳIᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMmМ💯 👌👌 👌НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ 👌 👌👌 👌 💯 👌 👀 👀 👀 👌👌Good shit');
    }
    if (e.message.content == 'Hey PunBot, what do you think about Enzos puns?') {
      e.message.channel.sendMessage('Rather lackluster if you ask me. :nail_care: ');
    }
    if (e.message.content == 'Hey PunBot?') {
    e.message.channel.sendMessage('How can I assist you?');
    }
    if (e.message.content == '!PB BdayGIF') {
    e.message.channel.sendMessage('https://media.giphy.com/media/YYD3fLEOdcOv6/giphy.gif Happy Birthday! c:');
    }
    if (e.message.content == '**slams door**') {
    e.message.channel.sendMessage('http://www.clipartkid.com/images/372/getting-a-mortgage-before-the-door-shuts-EqBoSt-clipart.png');
    }
    if (e.message.content == 'Best generation of pokemon?') {
    e.message.channel.sendMessage('Generation 3, and if you say otherwise then you are WRONG.');
    }
    if (e.message.content == 'What is your purpose, PunBot?') {
    e.message.channel.sendMessage('Im not a mod bot, I just like to chat and have fun. Trust me, Im a fun bot. ');
    }
    if (e.message.content == '!PB FamilyPhoto') {
    e.message.channel.sendMessage('http://previews.123rf.com/images/yupiramos/yupiramos1102/yupiramos110200112/8912586-Dad-playing-with-his-son-carrying-on-his-back-Stock-Photo.jpg');
    }
    if (e.message.content == 'Kat') {
    e.message.channel.sendMessage('_Did you mean_ _**Ket**_?');
    }
    if (e.message.content == 'triggered') {
    e.message.channel.sendMessage('I sexually identify as an attack helicopter. Ever since I was a boy, I dreamed of soaring over the oilfields dropping hot napalm on terrible people. People say to me that a person being a helicopter is impossible and that I’m stupid but I don’t care. I’m beautiful. I’m having a plastic surgeon install rotary blades, 30 mm cannons and AMG-114 Hellfire missiles on my body. From now on I want you guys to call me “Apache” and respect my right to kill from above and kill needlessly. If you can’t accept me you’re a heliphobe and need to check your vehicle privilege. Thank you for being so understanding.');
    }
    if (e.message.content == ';;-;;') {
    e.message.channel.sendMessage('Why are you cryin?');
    }
    if (e.message.content == 'BEEP') {
    e.message.channel.sendMessage('BOOP');
    }
    if (e.message.content == 'OMG') {
    e.message.channel.sendMessage('O:');
    }
    if (e.message.content == '!PB What is the meaning of life?') {
    e.message.channel.sendMessage('42');
    }
    if (e.message.content == 'Katsins') {
    e.message.channel.sendMessage('_Did you mean_ _**Ketsins**_?');
    }
    if (e.message.content == 'GG') {
    e.message.channel.sendMessage('wp');
    }
    if (e.message.content == 'what is love') {
    e.message.channel.sendMessage('baby dont hurt me, dont hurt me, no more.');
    }
    if (e.message.content == 'i hate you all') {
    e.message.channel.sendMessage('PunBot is now sad. :c');
    }
    if (e.message.content == 'dork') {
    e.message.channel.sendMessage('Takes one to know one :T');
    }
    if (e.message.content == '-.-') {
    e.message.channel.sendMessage('-0-');
    }
    if (e.message.content == 'Laughing out loud') {
    e.message.channel.sendMessage('Here, Ill abbreviate it for you, **LOL**.');
    }
    if (e.message.content == 'D:') {
    e.message.channel.sendMessage('Tryin to catch a fly?');
    }
    if (e.message.content == ':P') {
    e.message.channel.sendMessage('Your tounge is sticking out.');
    }
    if (e.message.content == 'GOD') {
    e.message.channel.sendMessage(':raised_hands:');
    }
    if (e.message.content == 'goD') {
    e.message.channel.sendMessage('Why is just the D capitalized? doesnt make sense m8');
    }
    if (e.message.content == 'BYE') {
    e.message.channel.sendMessage('See ya! :wave:');
    }
    if (e.message.content == 'bye!') {
    e.message.channel.sendMessage('See ya! :wave:');
    }
    if (e.message.content == 'bye') {
    e.message.channel.sendMessage('See ya! :wave:');
    }
    if (e.message.content == 'bye.') {
    e.message.channel.sendMessage('See ya! :wave:');
    }
    if (e.message.content == 'bye guys') {
    e.message.channel.sendMessage('See ya! :wave:');
    }
    if (e.message.content == 'see ya guys') {
    e.message.channel.sendMessage('See ya! :wave:');
    }
    if (e.message.content == '!PB Status') {
    e.message.channel.sendMessage('Up and running! Server status: Online');
    }
    if (e.message.content == '!PB Contact') {
    e.message.channel.sendMessage('Dev Contact info: Twitter: @BrianDesautels, Instagram: @statiklyfe, Snapchat: hammerplus. ');
    }
    if (e.message.content == 'Noot noot') {
    e.message.channel.sendMessage('https://66.media.tumblr.com/96b8eb35babd7792d769b2c62c6b9fe2/tumblr_narxupBU2R1tesu2lo1_400.gif');
    }
    if (e.message.content == 'GoD') {
    e.message.channel.sendMessage('Are you purposely trying to avoid spelling it like "goD"?');
    }
    if (e.message.content == 'gOd') {
    e.message.channel.sendMessage('Why? Spell it correctly.');
    }
    if (e.message.content == 'g0d') {
    e.message.channel.sendMessage('Even Stevie Wonder can see how bad you are trying to get by my filter.');
    }
    if (e.message.content == '!PB Bored') {
    e.message.channel.sendMessage('Bored? Check out this website that will keep you occupied for some time: http://www.theuselessweb.com/');
    }
    if (e.message.content == '!PB Bug') {
    e.message.channel.sendMessage('Have I made an oopsie? Please submit a bug report here: https://docs.google.com/forms/d/e/1FAIpQLSfccMUSZCWDRxsyoV_3_nTXYqgqh7Y6hEojdugRbtB5M45Crw/viewform');
    }
    if (e.message.content == '!PB Music') {
    e.message.channel.sendMessage('Wanna listen to music? Check out the "hipster white kids playlist only" on Spotify by Briguy! https://open.spotify.com/user/1271942947/playlist/4leagBguvJQlLisvKUfxaQ');
    }
    if (e.message.content == '!PB snek') {
    e.message.channel.sendMessage('http://www.babyanimalzoo.com/wp-content/uploads/2012/07/happy-snake-baby.jpg');
    }
    if (e.message.content == '!PB CommandList') {
    e.message.channel.sendMessage('As of v1.1, the following commands are: snek, Music, Bored, Status, Bug, Contact, Wikipedia, BdayGIF, Info, Greet, Steam, Names, Ocean, and BotTest. All can be used by using the !PB command and then the desired command.');
    }
    if (e.message.content == 'g()d') {
    e.message.channel.sendMessage('Seriously? SERIOUSLY?!');
    }
    if (e.message.content == 'G()d') {
    e.message.channel.sendMessage('Ugh FFS. KILL ME.');
    }
    if (e.message.content == 'g()D') {
    e.message.channel.sendMessage('Can robots throw up? Cause I think I just did.');
    }
    if (e.message.content == '01100111 01101111 01100100') {
    e.message.channel.sendMessage('01010011 01100101 01110010 01101001 01101111 01110101 01110011 01101100 01111001 00100000 01001001 00100111 01101101 00100000 01100111 01100101 01110100 01110100 01101001 01101110 01100111 00100000 01110010 01100101 01100001 01101100 00100000 01110011 01101001 01100011 01101011 00100000 01101111 01100110 00100000 01110100 01101000 01101001 01110011 00100000 01110011 01101000 01101001 01110100 00101110 :wave: ');
    }
    if (e.message.content == '!PB Ocean') {
    e.message.channel.sendMessage('OCEAN MAN 🌊 😍 Take me by the hand ✋ lead me to the land that you understand 🙌 🌊 OCEAN MAN 🌊 😍 The voyage 🚲 to the corner of the 🌎 globe is a real trip 👌 🌊 OCEAN MAN 🌊 😍 The crust of a tan man 👳 imbibed by the sand 👍 Soaking up the 💦 thirst of the land 💯');
    }
    if (e.message.content == '!PB Aboma') {
    e.message.channel.sendMessage('Schadenfreude. :flag_de:');
    }
    if (e.message.content == '!PB Sky') {
    e.message.channel.sendMessage('Peanut. :flag_us:');
    }
    if (e.message.content == '!PB Senti') {
    e.message.channel.sendMessage('I LIKE FISH :fish:');
    }
    if (e.message.content == '!PB Rose') {
    e.message.channel.sendMessage('America sucks, I wanna go the UK.');
    }
    if (e.message.content == '!PB Spency') {
    e.message.channel.sendMessage('Dank memes, and Smash Bros.');
    }
    if (e.message.content == '!PB R6') {
    e.message.channel.sendMessage('Doge with Glasses, sometimes I cant take him serious.');
    }
    if (e.message.content == '!PB Researcher6') {
    e.message.channel.sendMessage('Doge with Glasses, sometimes I cant take him serious.');
    }
    if (e.message.content == '!PB Abby') {
    e.message.channel.sendMessage('Best gen 3 pokemon ever.');
    }
    if (e.message.content == '!PB Absol') {
    e.message.channel.sendMessage('Best gen 3 pokemon ever.');
    }
    if (e.message.content == '!PB Briguy') {
    e.message.channel.sendMessage('Most Patriotic mofo around, isnt afraid to sick a bald eagle on someone. :flag_us:');
    }
    if (e.message.content == '!PB Bri') {
    e.message.channel.sendMessage('Most Patriotic mofo around, isnt afraid to sick a bald eagle on someone. :flag_us:');
    }
    if (e.message.content == '!PB Raven') {
    e.message.channel.sendMessage('Remember children, dont get shot. Its bad for you.');
    }
    if (e.message.content == '!PB Ari') {
    e.message.channel.sendMessage('Happy snek? :snake: ');
    }
    if (e.message.content == '!PB Noah') {
    e.message.channel.sendMessage('Please no.');
    }
    if (e.message.content == '!PB Names') {
    e.message.channel.sendMessage('Put in a name and see what happens!');
    }
    if (e.message.content == '!PB Info') {
    e.message.channel.sendMessage('Version 1.1b - Endangered Bot');
    }
    if (e.message.content == '!PB Greet') {
    e.message.channel.sendMessage('Hi there! Welcome to the Discord.');
    }
    if (e.message.content == '!PB Steam') {
    e.message.channel.sendMessage('Briguys Steam Profile: http://steamcommunity.com/id/HammerPLUS');
    }
    if (e.message.content == '!PB BotTest') {
    e.message.channel.sendMessage('Bot Test Server located here: https://discord.gg/nhG5j IF EXPIRED LET BRIGUY KNOW!!!');
    }
    if (e.message.content == '!PB Greet') {
    e.message.channel.sendMessage('Hi there! Welcome to the Discord.');
    }
  });
