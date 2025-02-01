var storyContent = {"inkVersion":21,"root":[[["done",{"#f":5,"#n":"g-0"}],null],"done",{"Clara_MeetingMace":["#","^player","/#","^I love that you finally got to meet Mace.","\n","#","^npc","/#","^Yeah, they're so cool! It was nice of grandma to let them come here.","\n","#","^player","/#","^She's really the sweetest. Of course she had no problem with it.","\n","#","^npc","/#","^We're so lucky to have her.","\n","#","^player","/#","^I do think she was a little confused about who they are.","\n","^She may have been expecting that I'm bringing multiple people...","\n","#","^npc","/#","^Oh no, Granny!","\n","#","^player","/#","^Hey, you know... She's at least trying.","\n","#","^npc","/#","^Definitely. I hope everyone else is behaving themselves.","\n",{"->":"Clara_SummerCatchup"},{"#f":1}],"Clara_SummerCatchup":[["#","^player","/#","^How's your summer been treating you?","\n","#","^npc","/#","^Ah, I know I haven't responded to your last letter.","\n","^I figured we could chat here!","\n","#","^player","/#","^Oh, yeah! No worries.","\n","^I'm curious if you checked out any of my recommendations.","\n","ev","str","^Ask about the music recs","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Ask about the movie recs","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","#","^player","/#","^I've been obsessing over that album I listed.","\n","#","^npc","/#","^Yes, I've listened to it so many times!","\n","^That song near the end...","\n","^You think it's over but then the silence is broken by those beautiful bursts of brass.","\n","#","^player","/#","^Yes! And those swirling guitars. I cry every time.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","#","^player","/#","^Did you watch anything on the film list?","\n","#","^npc","/#","^Not yet, but I do love slow cinema.","\n","#","^player","/#","^Oh, you know me. I love a good media rabbit hole.","\n","#","^npc","/#","^In the summer we'd go to that movie rental place like 3 times in one day!","\n","#","^player","/#","^Plus we had a crush on that cashier.","\n","#","^npc","/#","^Of course, we had to watch all of her recommendations!","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["#","^npc","/#","^Anyway, my summer...","\n","#","^player","/#","^Oh yeah, the original question!","\n","#","^npc","/#","^It's been...","\n","#","^player","/#","^Oh, no... Did something happen between you and Molly?","\n","#","^npc","/#","^No! Well, a lot happened but nothing bad!","\n","#","^player","/#","ev","str","^Oh, do spill!","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^Check for nearby family","/str","/ev",{"*":".^.c-3","flg":20},{"c-2":["\n",{"->":".^.^.^.^.spill"},{"#f":5}],"c-3":["\n","^Hold on, Trey is lingering over by the snack table.","\n",{"->":".^.^.^.^.eavesdropper"},{"#f":5}],"#f":5}]}],{"eavesdropper":["#","^player","/#","^I went to my friend's new art show the other day!","\n","#","^npc","/#","^Oh yeah?! The... one who mixes paint with their menstrual blood?!","\n","#","^player","/#","^Yep! That's the... one! It was really... cool!","\n","^Okay, that totaly worked. He ran at menstrual blood. You're a genius.","\n","#","^npc","/#","^Hey, my friend does actual art like that. It was easy.","\n","^So, about Molly.","\n",{"->":".^.^.spill"},{"#f":1}],"spill":["#","^npc","/#","^We've been hanging out basically every weekend.","\n","#","^player","/#","^No way!! Isn't she at Ball State?","\n","#","^npc","/#","^Yeah, I've been driving to Muncie every week.","\n","#","^player","/#","^So, you finally asked her out?","\n","#","^npc","/#","^Well... not really. But I kinda didn't have to.","\n","^One night we were listening to that album you recommended, and well...","\n","^Our hands just started touching.","\n","#","^player","/#","^Stop!! THIS IS TOO CUTE!","\n","#","^npc","/#","^And from then on our hands just kept... handsing.","\n","#","^player","/#","^I think I know what you mean!","\n","^Wow. I'm so happy for you.","\n","#","^npc","/#","^It's been out of this world, dude.","\n",{"->":".^.^.followup"},{"#f":1}],"followup":[["#","^player","/#","ev","str","^How's your parents handling this?","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^So, what's she like?","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":".^.^.^.^.parents_reaction"},{"#f":5}],"c-1":["\n",{"->":".^.^.^.^.molly"},{"#f":5}]}],{"#f":1}],"parents_reaction":[["#","^player","/#","^So, all of that driving must have tipped your parents off.","\n","#","^npc","/#","^Yeah... I actually just talked about it with my dad yesterday.","\n","#","^player","/#","^Damn, this is big. How'd it go?","\n","#","^npc","/#","^He honestly took it surprisingly well.","\n","^I think maybe he's just relieved he doesn't have to worry about boys.","\n","#","^player","/#","ev","str","^Fair, guys are terrible.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Everyone can be terrible","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","#","^player","/#","^You know, maybe he's onto something there.","\n","#","^npc","/#","^I'm just glad he's on my side.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","#","^player","/#","^Eh... I get it, but bad relationships aren't specific to men.","\n","#","^npc","/#","^Very true, but I'll take whatever break from their judgement that I can get right now.","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["#","^player","/#","^And your mom?","\n","#","^npc","/#","^Hmm...","\n","#","^player","/#","ev","str","^Tell me later","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^Answer for her","/str","/ev",{"*":".^.c-3","flg":20},{"c-2":["\n","#","^player","/#","^Write to me about it in your next letter.","\n",{"->":".^.^.^.g-1"},{"#f":5}],"c-3":["\n","#","^player","/#","^Lemme guess... You told her and she didn't hear you.","\n","#","^npc","/#","^In one ear, out the other.","\n","^Keeps asking me about Gerald, or whatever guy friends I've had around.","\n","#","^player","/#","^Ugh, I'm sorry.","\n","#","^npc","/#","^It really sucks to not be seen by her.","\n","#","^player","/#","^I know, Clara. I see you, and I love you.","\n","#","^npc","/#","^You know, at least she lets me go see her.","\n","#","^player","/#","^And you can stay over because you're just such good friends!","\n","#","^npc","/#","^Exactly! I'll take the small wins where I can.","\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":[{"->":"Clara_UncleJohn"},{"#f":5}]}],{"#f":1}],"molly":["#","^player","/#","^You said Molly is a music major, right?","\n","#","^npc","/#","^Yeah, she's studying Classical Guitar.","\n","#","^player","/#","^Oh... what, she only plays like Yes solos or something?","\n","#","^npc","/#","^Nooo! OMG I'm so glad she isn't here to hear that.","\n","^It's like, classical music like Mozart or whatever, but on the guitar.","\n","#","^player","/#","^Ohhh!","\n","#","^npc","/#","^She's really good! I got to see her perform in a recital recently.","\n","#","^player","/#","^That's so cute. You're glowing.","\n",{"->":"Clara_UncleJohn"},{"#f":1}],"#f":1}],"Clara_UncleJohn":[["#","^player","/#","^Random question, but have you seen Uncle John around?","\n","#","^npc","/#","^I don't think he and Aunt Cindy are here yet.","\n","^They should be on their way.","\n","#","^player","/#","^I've been thinking...","\n","^We should ask him if we can have a movie night.","\n","#","^npc","/#","^Oh, I miss those!","\n","^He used to show us all of the movies our parents wouldn't let us see.","\n","#","^player","/#","^Halloween, Serial Mom...","\n","^When I grow up, I wanna have a movie collection that stands up against his.","\n","#","^npc","/#","^I feel like you're already working on that.","\n","^Ugh, I miss going to the market before a movie night.","\n","#","^player","/#","^Yeah! We'd always get popcorn and those funky blue tortilla chips.","\n","#","^npc","/#","^Why do you think we stopped having movie nights?","\n","#","^player","/#","ev","str","^Too old?","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Aunt Cindy?","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":".^.^.^.tooOld"},{"#f":5}],"c-1":["\n",{"->":".^.^.^.auntCindy"},{"#f":5}]}],{"tooOld":["^I feel like maybe we're too old now?","\n","#","^npc","/#","^Hey, I'm still at home. I'm not a full adult.","\n","#","^player","/#","^I get the feeling sometimes that adults think they're bothering us now.","\n","#","^npc","/#","^I mean, sometimes they are...","\n","^But movie nights!  That's the exception.","\n","#","^player","/#","^It is weird how things change when you get older though...","\n","^My dad used to rub my feet when we watched movies. I miss that.","\n","#","^npc","/#","^Like there's an unspoken rule, at an undisclosed time.","\n","#","^player","/#","^I just get the feeling that I'm breaking away from family.","\n","^Just because I'm in college now.","\n","#","^npc","/#","^Ask Uncle John to do a movie night!","\n","^We'll just will it to be!","\n","#","^player","/#","^Yeah, I think I will.","\n","^I'd love that.","\n","end",{"#f":1}],"auntCindy":["^Do you think maybe Aunt Cindy is the reason?","\n","#","^npc","/#","^I guess that could be.","\n","^I don't know why she never joined us for the movie nights.","\n","#","^player","/#","^I just don't think she liked the movies we were watching.","\n","#","^npc","/#","^Yeah, but she was always supportive of them!","\n","^She'd make snacks and all that.","\n","#","^player","/#","^True!","\n","^Remember that time she took us to see the Scooby Doo movie?","\n","#","^npc","/#","^Ahhhh, that's right!","\n","^I think maybe she just doesn't like horror movies.","\n","#","^player","/#","^Scooby Doo was too scary?!","\n","#","^npc","/#","^I don't know, but maybe we could ask them to host a movie night.","\n","^We could watch something that everyone can enjoy.","\n","#","^player","/#","^Let's do it! I'd love that.","\n","end",{"#f":1}],"#f":1}],"UncleJohn_Intro":[["#","^npc","/#","^Cam! My have you grown.","\n","#","^player","/#","^Well, I think you looks just about the same as I remember you.","\n","#","^npc","/#","^We stop growing outward, but hopefully continue inner growth.","\n","^You're currently doing both! How's University working on you?","\n","ev",false,"/ev",{"temp=":"ones_and_zeros"},"#","^player","/#","ev","str","^Enjoying studies.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Worried I'm missing something.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","ev",true,"/ev",{"temp=":"ones_and_zeros","re":true},"^I honestly have never felt more in my element.","\n","#","^npc","/#","^Well, that's wonderful! Is it the academic pursuits or the more social world that draws you?","\n","#","^player","/#","^My studies.","\n","^I'm focusing on computer science, and I often find myself coding for six hours before I know that any time had passed at all.","\n","#","^npc","/#","^That's wonderful. I fear I would be lost in the ones and zeros.","\n","^Luckily for me, my film can be edited and eveloped without me even breathing near a computer.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","ev",false,"/ev",{"temp=":"ones_and_zeros","re":true},"^I've been really sucked into my studies.","\n","#","^npc","/#","^Well, that's wonderful.","\n","^But I sense something's the matter.","\n","#","^player","/#","^I just sometimes worry that I'm missing the point of it all. Attending University.","\n","#","^npc","/#","^Well, I think it is what you make of it.","\n","^We each draw different conclusions from the same image.","\n","#","^player","/#","^It's just that I often feel disconnected from the friends around me.","\n","^I can spend hours in front of my code, and then spend some more.","\n","^When I talk with my friends, they're always having fun doing anything but what relates to their studies.","\n","^I'm glad I like computer science so much, but I'm wondering if I'm missing a balance.","\n","#","^npc","/#","^If you're worried about it, then I think you're already working toward a change.","\n","^Soon, you'll look back on this moment in time over a beer with some friends having fun.","\n","^Nothing is as binary as the ones and zeros in whatever code you're writing.","\n","#","^player","/#","^...","\n","#","^npc","/#","^My apologies. My verse in computers is limited by the fact that my film can be edited and developed without me even breathing near a computer.","\n","#","^player","/#","^No, I know what you mean.","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["#","^player","/#","^Oh, that reminds me! I've been reading a lot about the history of computing.","\n","^Did you know that some of the earliest computer memory was stored using cathode ray tubes?","\n","#","^npc","/#","^My oh my! I did not know that.","\n","#","^player","/#","^Yep, just like how we used to watch movies from your laserdisc collection.","\n","#","^npc","/#","^Reading images from the screen like an old computer trying to remember the last output from their algorithm.","\n","#","^player","/#","ev",{"VAR?":"ones_and_zeros"},"/ev",[{"->":".^.b","c":true},{"b":["^ \"Careful, you're falling into the ones and zeros.\"",{"->":".^.^.^.30"},null]}],[{"->":".^.b"},{"b":["^ \"Well put.\"",{"->":".^.^.^.30"},null]}],"nop","\n",{"->":"UncleJohn_BagsAsMeditation"},{"#f":5}]}],{"#f":1}],"UncleJohn_BagsAsMeditation":["#","^player","/#","^You know, I'm kinda suprised that you're out here playing with us.","\n","#","^npc","/#","^Oh?","\n","#","^player","/#","^I mean, you're not really the sporty type are you?","\n","#","^npc","/#","^Ah, the sport of it all.","\n","^Is that what you see this as?","\n","#","^player","/#","^Well...","\n","#","^npc","/#",{"->":".^.reprise"},{"reprise":[["ev","visit",3,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","^I breathe in. ",{"->":".^.^.29"},null],"s1":["pop","^ I breathe out. ",{"->":".^.^.29"},null],"s2":["pop","^ I speak with you. ",{"->":".^.^.29"},null],"s3":["pop","^ ",{"->":".^.^.^.^.camsReprise"},{"->":".^.^.29"},null],"#f":5}],"\n","ev",{"VAR?":"bagStatus"},"str","^hole","/str","==","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.^.hole"},{"->":".^.^.^.10"},null]}],"nop","\n","ev",{"VAR?":"bagStatus"},"str","^board","/str","==","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.^.board"},{"->":".^.^.^.20"},null]}],"nop","\n","ev",{"VAR?":"bagStatus"},"str","^ground","/str","==","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.^.ground"},{"->":".^.^.^.30"},null]}],"nop","\n","end",{"#f":1}],"hole":[["ev","visit",2,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^The swish of the bag's narrow entry into the place we most desire. ",{"->":".^.^.23"},null],"s1":["pop","^ The more bags in the whole, the more the heart flutters in anticipation. Where will the next land? ",{"->":".^.^.23"},null],"s2":["pop","^ Can it be? Three times in a row the bag falls into hole's dark embrace? What does the bag hear? ",{"->":".^.^.23"},null],"#f":5}],"\n",{"->":".^.^.reprise"},{"#f":1}],"board":[["ev","visit",2,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^The smack of bag on board. Echoing off the barns and through the wheat and corn of this countryside. ",{"->":".^.^.23"},null],"s1":["pop","^ Another smack and the energy ripples. The others slide in response, not unlike our talk. ",{"->":".^.^.23"},null],"s2":["pop","^ Three chops of the log and we cleave this family in two.",{"->":".^.^.23"},null],"#f":5}],"\n",{"->":".^.^.reprise"},{"#f":1}],"ground":[["ev","visit",2,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^The soft meeting of bag and ground. Corn nearly touching back to the earth it came from. ",{"->":".^.^.23"},null],"s1":["pop","^ Bags connect to ground as we connect with one another. ",{"->":".^.^.23"},null],"s2":["pop","^ Game points are just the table dressing for this time we spend together.",{"->":".^.^.23"},null],"#f":5}],"\n",{"->":".^.^.reprise"},{"#f":1}],"camsReprise":["#","^player","/#",["ev","visit",3,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop",{"->":".^.^.^.^.poemChoice1"},{"->":".^.^.29"},null],"s1":["pop","^ ",{"->":".^.^.^.^.poemChoice2"},{"->":".^.^.29"},null],"s2":["pop","^ ",{"->":".^.^.^.^.poemChoice3"},{"->":".^.^.29"},null],"s3":["pop","^ ",{"->":".^.^.^.^.poemEND"},{"->":".^.^.29"},null],"#f":5}],"\n","end",{"#f":1}],"poemChoice1":[["ev","str","^Tree sounds","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Traffic noise","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^I realize that the sound of wind is really the sound of trees, windchimes, and grass that it rustles.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^The road hums, a rise and fall with the occasional passing car.","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":".^.^.^.^.bagLogic"},{"#f":5}]}],{"#f":1}],"poemChoice2":[["ev","str","^House sounds","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Grandma","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^The muffled chattering of family inside, and the bittersweet feelings they bring. I am safe from that tension out here.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^Grandma is bustling about. Busying herself with anything that will keep the family fed and entertained.","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":".^.^.^.^.bagLogic"},{"#f":5}]}],{"#f":1}],"poemChoice3":[["ev","str","^You","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Me","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^You talk and I hear you.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^I feel at peace.","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":".^.^.^.^.bagLogic"},{"#f":5}]}],{"#f":1}],"bagLogic":["ev",{"VAR?":"bagStatus"},"str","^hole","/str","==","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.^.cam_hole"},{"->":".^.^.^.8"},null]}],"nop","\n","ev",{"VAR?":"bagStatus"},"str","^board","/str","==","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.^.cam_board"},{"->":".^.^.^.18"},null]}],"nop","\n","ev",{"VAR?":"bagStatus"},"str","^ground","/str","==","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":".^.^.^.^.cam_ground"},{"->":".^.^.^.28"},null]}],"nop","\n","end",{"#f":1}],"cam_hole":[["ev","visit",2,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^I realize this while bags fall through holes. ",{"->":".^.^.23"},null],"s1":["pop","^ I realize this while again, bags fall through holes. ",{"->":".^.^.23"},null],"s2":["pop","^ I realize all of these things while we repeatedly throw bags in holes. ",{"->":".^.^.23"},null],"#f":5}],"\n",{"->":".^.^.camsReprise"},{"#f":1}],"cam_board":[["ev","visit",2,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^The smack of bag on board interrupts my thoughts. ",{"->":".^.^.23"},null],"s1":["pop","^ With another smack, again my mind is wiped clean. ",{"->":".^.^.23"},null],"s2":["pop","^ These rhythmic smacks punctuate our conversation.",{"->":".^.^.23"},null],"#f":5}],"\n",{"->":".^.^.camsReprise"},{"#f":1}],"cam_ground":[["ev","visit",2,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^Our musings take presedence as our bags miss their mark. ",{"->":".^.^.23"},null],"s1":["pop","^ Bags connect to ground as we connect with one another. ",{"->":".^.^.23"},null],"s2":["pop","^ We throw points away, for they are not the point.",{"->":".^.^.23"},null],"#f":5}],"\n",{"->":".^.^.camsReprise"},{"#f":1}],"poemEND":["^...","\n","#","^npc","/#","^Very good, Cam.  I like that.","\n","end",{"#f":1}],"#f":1}],"Mace_Intro":[["#","^npc","/#","^I can't believe you didn't go to Sam's birthday party.","\n","#","^player","/#","^You're still mad about that?","\n","#","^npc","/#","^I know, I know. What if the cops bust up the house?!","\n","^That only happens in movies.","\n","#","^player","/#","^Well... movies and TV are really all I know about college life.","\n","^And I really don't want my scholarship taken away. It's all I have.","\n","#","^npc","/#","^Hey, you have me!","\n","^I just wish you'd loosen up a little. Have some fun.","\n","#","^player","/#","ev","str","^I do have fun.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^I don't know how.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^I really do like studying. For the first time in my life it feels like I can control my own time.","\n","#","^npc","/#","^That's how I feel too. I guess you just a nerdy little weirdo!","\n","#","^player","/#","^One that you like to hang around for some reason!","\n","#","^npc","/#","^Hey, you're not so bad to be around. That's for sure.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^I guess I just don't think I really know how to...","\n","#","^npc","/#","^You know, I am kidding right? I mean, I don't understand your idea of fun...","\n","^But I do see that it's just you. And I like you.","\n","#","^player","/#","^Yeah, I knew that...","\n","^I just feel like there's a truth to your ribbing sometimes.","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["#","^player","/#","^So, how's everyone treating you so far?","\n","#","^npc","/#","^They're great. Your Uncle Jack is gonna show me his tractor later!","\n","#","^player","/#","^Hey, that's awesome. He loves those things.","\n","^He'll probably be competing in this year's tractor pull.","\n","#","^npc","/#","^Tractor... what?","\n","#","^player","/#","^It's like a weird event where tractors pull a weight as far as they can.","\n","^The tractor to pull the weight the furthest wins.","\n","#","^npc","/#","^That sounds...","\n","#","^player","/#","^Boring?","\n","#","^npc","/#","^Amazing.","\n","^When does this happen?","\n","#","^player","/#","^Should be in the next few months...","\n","^It's uh... usually full of loud people who are kinda not like us.","\n","#","^npc","/#","^I'm not loud?!","\n","#","^player","/#","^You know what I mean.","\n","#","^npc","/#","^So we put on some boots, jeans, and beer hats.","\n","^This sounds like a great time. We're going.","\n","#","^player","/#","ev","str","^I'm not going.","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^I guess.","/str","/ev",{"*":".^.c-3","flg":20},{"c-2":["\n","^I'm sorry. I'm sure you'd make it a great time, but I just don't think I can.","\n","#","^npc","/#","^We'll see about that... One way or another, I'm going to this thing.","\n","#","^player","/#","^Well, seems like you and Uncle Jack are besties now... You can go with him.","\n","#","^npc","/#","^Oh, you're jelly.","\n","#","^player","/#","^Ugh...","\n",{"->":".^.^.^.g-1"},{"#f":5}],"c-3":["\n","^You know what? Sure. Let's do it.","\n","#","^npc","/#","^Hell yes. I'll go polish my shit kickers now!","\n","#","^player","/#","^Don't say I didn't warn you...","\n","#","^npc","/#","^We'll be fine!","\n","^Your uncle will protect us... with his big dangerous tractor.","\n","#","^player","/#","^Okay, okay. Sounds great. Thanks.","\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5}],"g-1":["#","^npc","/#","^But seriously, thanks for doing this for me...","\n","^It's nice of your family to let me crash their party. It really means a lot.","\n","#","^player","/#","^Hey, it's no problem. My grandma loves you already.","\n","end",{"#f":5}]}],{"#f":1}],"Mace_KitchenTV":["#","^npc","/#","^So... why do your cousins plug the Playstation up to your grandma's weird kitchen TV?","\n","^And... why does your grandma have a weird little kitchen TV?","\n","#","^player","/#","^Well, the big sports game can't be on the living room TV if the video games are hooked to it...","\n","^And don't all grandma's have those? For... I don't know? Morning news?","\n","#","^npc","/#","^Anyway, your cousin Trey was in there playing some really violent game.","\n","^He was driving around a city shooting up the place and running from the cops.","\n","#","^player","/#","^Yeah, Grand Theft Auto. I'm sure my grandma loves that. He's defiling her kitchen.","\n","#","^npc","/#","^She didn't seem to mind too much, honestly.","\n","#","^player","/#","^I played that one time with him. It was relatively fun, but then I switched from the gun to the knife.","\n","^I had to put it down... There's just something so personal about stabbing someone to death.","\n","#","^npc","/#","^Well, that's a new sentence I thought I'd never hear you say.","\n","^And you love all those horror movies...","\n","#","^player","/#","^Hey, you can stick to the safety of your sports anime.","\n","#","^npc","/#","^Don't act like you didn't love all 5 seasons of Friday Night Lights.","\n","#","^player","/#","^That's different. That's like 5 star TV.","\n","#","^npc","/#","^And everyone's hot!","\n","#","^player","/#","^And everyone's hot. This is...","\n","^Very true.","\n","end",{"#f":1}],"global decl":["ev","str","^","/str",{"VAR=":"bagStatus"},"/ev","end",null],"#f":1}],"listDefs":{}};