
	window.agent = null;
	var helps = {
		1: "Hey! Check out <a href='https://excess-xss.com/#javascript-injection' target='_blank'>this</a> overview of XSS to get started.",
2: "Looks like the developer got clever. But did they cover all the possible Cases?",
3: "Looks like we need to try some other HTML tags. Perhaps we could be rebellious hax0rs and use <a href=\"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Inline_event_handlers_-_don't_use_these\" target='_blank'>these</a>, even though it's old-style HTML?",
4: "Hey, there's two inputs now. Maybe we can take advantage of that?",
5: "Hmm, the input is going somewhere else now. Check out the source of the page. Perhaps we should try some different technique?",
6: "There's a new filter in place. Can we bypass it by letting the browser finish our mess for us?",
7: "Looks like we can't break out of the tag anymore. What <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes' target='_blank'>fun attribute</a> could we put on the containing tag instead?",
8: "Another kind of case?",
9: "Hmm, another new context... how does <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script' target='_blank'>inline</a> JavaScript work in HTML?",
10: "Oh no, it's my annoying co-worker. Perhaps you can XSS him?",
11: "Same thing as before, but a bit more tricky now...",
12: "",
13: "",
14: "You're own your own!!",
	};
	clippy.Balloon.prototype.WORD_SPEAK_TIME = 120;
	clippy.Balloon.prototype.CLOSE_BALLOON_DELAY = 10000;
        clippy.load('Rover', function(a) {
		window.agent = a;

		window.agent.show();

		if (parseInt($("#challenge").val()) == 1 && !$("#result").length) {
			window.agent.play("Congratulate");
			window.agent.speak("Screw that, let's own them! Click me for some help.");
		}

		window.agent._el.click(function() {
			var n = parseInt($("#challenge").val());
			var msg = helps[n];
			if (msg) {
				window.agent.speak(msg);
			} else
				window.agent.play("Embarrassed");
		});
        });
        clippy.load('Clippy', function(a) {
		window.agent2 = a;
		if (parseInt($("#challenge").val()) == 10) {
			window.agent2.moveTo(200, 200);
			window.agent2.show();
			window.agent2.moveTo(200, 200);
			if ("deferred" in window)
				window.agent2.speak(window.deferred);
		}
	});
