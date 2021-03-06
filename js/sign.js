(function(window) {
	var div = document.getElementById('author-sign');
	div.style.display = 'inline-flex';
	div.style.alignItems = 'center';
	div.style.fontFamily = typeof div.dataset.textReset !== 'undefined' ? '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' : '';
	
	var link = document.createElement('a');
	link.href = 'https://www.creativefriends.cz/' + ((navigator.language || navigator.userLanguage).substring(0,2) !== 'cs' ? 'en/' : 'cs/');
	link.target = '_blank';
	link.style.color = typeof div.dataset.color !== 'undefined' ? div.dataset.color : 'inherit';
	link.style.textDecoration = 'none';
	link.style.display = 'inline-flex';
	link.style.alignItems = 'center';
	
	var text = document.createElement('div');
	text.innerHTML = 'Created by' + (typeof div.dataset.textLong !== 'undefined' ? ' CREATIVE FRIENDS' : '');
	text.style.marginRight = '.6ex';
	
	var icon = document.createElement('div');
	icon.style.display = 'flex';
	icon.style.alignItems = 'center';
	icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="width:1.2em;height:1.2em;" viewBox="0 0 13 13"><path d="M4.14,7.66,1.9,11.1,5.34,8.86Zm-1.9-1.9L0,9.2H0L3.44,7ZM12.31,0,2.15,3.53,3.64,5,7.31,3.6l3.32-1.21L9.41,5.7,8.66,7.61l-1.9-1.9L5,6.38l3,3,.66.66.82.83L13,.7ZM3.79,13l3.45-2.24L6,9.56Z" fill="'+(typeof div.dataset.iconColor !== 'undefined' ? div.dataset.iconColor : '#00b0ea')+'"/></svg>'
	
	link.appendChild(text);
	if (div.dataset.icon !== 'false') link.appendChild(icon);
	div.appendChild(link);
	
	var supp = document.createElement('a');
	supp.href = 'https://creativefriends.freshdesk.com/support/tickets/new';
	supp.target = '_blank';
	supp.innerHTML = 'Support';
	supp.style.color = typeof div.dataset.color !== 'undefined' ? div.dataset.color : 'inherit';
	supp.style.textDecoration = 'none';
	
	if (div.dataset.support === 'true') {
		var sep = document.createElement('span');
		sep.style.margin = '0 10px';
		sep.innerHTML = '&bull;';
		div.appendChild(sep);
		div.appendChild(supp);
	}
	
})(window);
