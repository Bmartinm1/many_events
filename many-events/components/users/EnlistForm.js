import { useRef } from 'react';

import Card from '../ui/card';
import classes from './EnlistForm.module.css';

function EnlistForm(props) {
	const nameInputRef = useRef();
	const emailInputRef = useRef();
	const walletAddressInputRef = useRef();

	function submitHandler(user) {
		user.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredEmail = emailInputRef.current.value;
		const enteredWalletAddress = walletAddressInputRef.current.value;

		const userData = {
			name: enteredName,
			email: enteredEmail,
			walletAddress: enteredWalletAddress,
		};

		props.onAddUser(userData);
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='name'>Full Name</label>
					<input type='text' required id='name' ref={nameInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='email'>Email</label>
					<input type='text' required id='email' ref={emailInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='walletAddress'>Wallet Address</label>
					<input
						type='text'
						required
						id='walletAddress'
						ref={walletAddressInputRef}
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
