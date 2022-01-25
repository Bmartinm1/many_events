import { useRef } from 'react';

import Card from '../ui/card';
import classes from './EnlistForm.module.css';

function EnlistForm(props) {
	const nameInputRef = useRef();
	const emailInputRef = useRef();
	const discordInputRef = useRef();
	const referrerDiscordInputRef = useRef();
	const socialInputRef = useRef();
	const respoCheckInputRef = useRef();
	const walletAddressInputRef = useRef();

	function submitHandler(user) {
		user.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredEmail = emailInputRef.current.value;
		const enteredDiscord = discordInputRef.current.value;
		const enteredReferrerDiscord = referrerDiscordInputRef.current.value;
		const enteredSocial = socialInputRef.current.value;
		const enteredRespoCheck = respoCheckInputRef.current.value;
		const enteredWalletAddress = walletAddressInputRef.current.value;

		const userData = {
			name: enteredName,
			email: enteredEmail,
			discord: enteredDiscord,
			referrerDiscord: enteredReferrerDiscord,
			socialMedia: enteredSocial,
			respoCheck: enteredRespoCheck,
			walletAddress: enteredWalletAddress,
		};

		props.onAddUser(userData);
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='name'>Please enter your full name</label>
					<input type='text' required id='name' ref={nameInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='email'>Please enter your email</label>
					<input type='text' required id='email' ref={emailInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='discord'>Please enter your Discord username</label>
					<input type='text' required id='discord' ref={discordInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='referrerDiscord'>
						Please enter your referrer's Discord (leave blank if N/A)
					</label>
					<input type='text' ref={referrerDiscordInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='socialMedia'>
						Please link your most active social media platform
					</label>
					<input type='url' required id='socialMedia' ref={socialInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='walletAddress'>
						Please enter your *public* wallet address
					</label>
					<input
						type='text'
						required
						id='walletAddress'
						ref={walletAddressInputRef}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='respoCheck'>
						I understand the responsibilities expected of a Junior Enlisted
						member of the Bit Force.
					</label>
					<input
						type='checkbox'
						required
						id='respoCheck'
						ref={respoCheckInputRef}
					/>
				</div>
				<div className={classes.actions}>
					<button>Enlist</button>
				</div>
			</form>
		</Card>
	);
}

export default EnlistForm;
