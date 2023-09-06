import logo from '../../assets/icons/logo.svg';
import styles from './App.module.scss';

function App() {
	return (
		<div className={styles.App}>
			<header className={styles.App_header}>
				<img src={logo} className={styles.App_logo} alt="logo" />
				<p>старт проекта</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
