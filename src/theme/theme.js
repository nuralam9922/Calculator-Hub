
export const changeTheme = (theme) => {
	document.querySelector('html')?.setAttribute('data-theme', theme);
	localStorage.setItem('theme',theme)
};