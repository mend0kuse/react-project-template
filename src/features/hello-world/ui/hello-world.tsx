import { useTranslation } from 'react-i18next';
import styles from './hello-world.module.scss';

export const HelloWorld = () => {
	const { t, i18n } = useTranslation();

	const changeLang = (lang: string) => {
		return async () => {
			await i18n.changeLanguage(lang);
		};
	};

	return (
		<div className={styles.wrapper}>
			<h1>{t('Hello world')}</h1>
			<div>
				<button onClick={changeLang('ru')}>RU</button>
				<button onClick={changeLang('en')}>EN</button>
			</div>
		</div>
	);
};
