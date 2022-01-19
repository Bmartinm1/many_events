import classes from './FAQCard.module.css';

function FAQCard(props) {
	return <div className={classes.faqcard}>{props.children}</div>;
}

export default FAQCard;
