import { useRef } from 'react';

import Card from '../ui/card';
import classes from './DailyForms.module.css';

function SNCODailyForm(props) {
	const dateInputRef = useRef();
	const discordInputRef = useRef();
	const unitLeadDiscordInputRef = useRef();
	const raidCheckInputRef = useRef();
	const marketingReqCheckInputRef = useRef();
	const engageCheckInputRef = useRef();
	const recruitCheckInputRef = useRef();
	const recruitDiscordInputRef = useRef();
	const twitterCheckInputRef = useRef();
	const twitterLinkInputRef = useRef();
	const instaCheckInputRef = useRef();
	const instaLinkInputRef = useRef();
	const redditCheckInputRef = useRef();
	const redditLinkInputRef = useRef();
	const socialLink1InputRef = useRef();
	const socialLink2InputRef = useRef();
	const socialLink3InputRef = useRef();

	function submitHandler(tasks) {
		tasks.preventDefault();

		const enteredDate = dateInputRef.current.value;
		const enteredDiscord = discordInputRef.current.value;
		const enteredUnitLeadDiscord = unitLeadDiscordInputRef.current.value;
		const enteredRaidCheck = raidCheckInputRef.current.value;
		const enteredMarketingReqCheck = marketingReqCheckInputRef.current.value;
		const enteredEngageCheck = engageCheckInputRef.current.value;
		const enteredRecruitCheck = recruitCheckInputRef.current.value;
		const enteredRecruitDiscord = recruitDiscordInputRef.current.value;
		const enteredTwitterCheck = twitterCheckInputRef.current.value;
		const enteredTwitterLink = twitterLinkInputRef.current.value;
		const enteredInstaCheck = instaCheckInputRef.current.value;
		const enteredInstaLink = instaLinkInputRef.current.value;
		const enteredRedditCheck = redditCheckInputRef.current.value;
		const enteredRedditLink = redditLinkInputRef.current.value;
		const enteredSocialLink1 = socialLink1InputRef.current.value;
		const enteredSocialLink2 = socialLink2InputRef.current.value;
		const enteredSocialLink3 = socialLink3InputRef.current.value;

		const tasksData = {
			date: enteredDate,
			discord: enteredDiscord,
			unitLeadDiscord: enteredUnitLeadDiscord,
			raidCheck: enteredRaidCheck,
			marketingReqCheck: enteredMarketingReqCheck,
			engageCheck: enteredEngageCheck,
			recruitCheck: enteredRecruitCheck,
			recruitDiscord: enteredRecruitDiscord,
			twitterCheck: enteredTwitterCheck,
			twitterLink: enteredTwitterLink,
			instaCheck: enteredInstaCheck,
			instaLink: enteredInstaLink,
			redditCheck: enteredRedditCheck,
			redditLink: enteredRedditLink,
			socialLink1: enteredSocialLink1,
			socialLink2: enteredSocialLink2,
			socialLink3: enteredSocialLink3,
		};

		props.onAddUser(tasksData);
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div>
					<h1>NCO Muster</h1>
					<h4>Required Duties:</h4>
					<ol>
						<li>Active engagement in general community, Bit Force channels</li>
						<li>
							Check in with Junior Enlisted on task completion and verify their
							reporting
						</li>
						<li>Recruit 1 person per week</li>
						<li>All duties of lower ranks</li>
					</ol>
				</div>
				<div className={classes.control}>
					<label htmlFor='date'>
						Please enter the date you are logging tasks for
					</label>
					<input type='text' required id='date' ref={dateInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='discord'>Please enter your discord username</label>
					<input type='text' required id='discord' ref={discordInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='unitLeadDiscord'>
						Please enter your unit lead's discord username (if applicable)
					</label>
					<input type='text' ref={unitLeadDiscordInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='raidCheck'>
						Did you—or a delegated raid leader—complete a guided raid today?
					</label>
					<input type='checkbox' ref={raidCheckInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='marketingReqCheck'>
						Did you review any potential marketing requests or offers today?
					</label>
					<input type='checkbox' ref={marketingReqCheckInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='engageCheck'>
						Have you actively engaged in the Many Worlds community and Bit Force
						channels?
					</label>
					<input type='checkbox' ref={engageCheckInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='recruitCheck'>
						Have you recruited a new Bit Force member?
					</label>
					<input type='checkbox' ref={recruitCheckInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='recruitDiscord'>
						Please enter your recruit's discord username
					</label>
					<input
						type='text'
						required
						id='recruitDiscord'
						ref={recruitDiscordInputRef}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='twitterCheck'>
						Like, reply, retweet Many Worlds on twitter - if no new posts are
						available create a personal tweet mentioning @ManyWorldsToken
					</label>
					<input type='checkbox' ref={twitterCheckInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='twitterLink'>
						Link to your retweet, or to your post if no Many Worlds tweet is
						available
					</label>
					<input
						type='url'
						required
						id='twitterLink'
						ref={twitterLinkInputRef}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='instaCheck'>
						Like, comment, share Many Worlds on Instagram. If no new Many Worlds
						post is available, create a personal post mentioning Many Worlds.
					</label>
					<input type='checkbox' ref={instaCheckInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='instaCheck'>
						Link to your instagram shared post/story
					</label>
					<input type='url' required id='instaCheck' ref={instaCheckInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='redditCheck'>
						Comment on a non-Many Worlds reddit post. Non-Many Worlds means a
						post not originating from Many Worlds and not originally about Many
						Worlds. (An example would be commenting about Many Worlds on a post
						asking for new crypto projects to look into, or on a post about a
						similar token.)
					</label>
					<input type='checkbox' ref={redditCheckInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='redditLink'>
						Link to your comment on a non-Many Worlds reddit post
					</label>
					<input type='url' required id='redditLink' ref={redditLinkInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='socialLink1'>
						Link to your comment on a non-Many Worlds social post (1)
					</label>
					<input
						type='url'
						required
						id='socialLink1'
						ref={socialLink1InputRef}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='socialLink2'>
						Link to your comment on a non-Many Worlds social post (2)
					</label>
					<input
						type='url'
						required
						id='socialLink2'
						ref={socialLink2InputRef}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='socialLink3'>
						Link to your comment on a non-Many Worlds social post (3)
					</label>
					<input
						type='url'
						required
						id='socialLink3'
						ref={socialLink3InputRef}
					/>
				</div>
				<div className={classes.actions}>
					<button>Submit</button>
				</div>
			</form>
		</Card>
	);
}

export default SNCODailyForm;
