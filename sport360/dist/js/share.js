
function shareFacebook(shareUrl)
{
	shareUrl = "https://facebook.com/sharer/sharer.php?u="+shareUrl;
	window.open(shareUrl, null, "width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
}

function shareTwitter(shareUrl)
{
	shareUrl = "https://twitter.com/share?url="+shareUrl;
	window.open(shareUrl, null, "width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
}

function shareGoogle(shareUrl)
{
	shareUrl = "https://plus.google.com/share?url="+shareUrl;
	window.open(shareUrl, null, "width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
}

function shareWhatsapp(shareUrl)
{
	shareUrl = "whatsapp://send?text="+shareUrl;
	window.open(shareUrl, null, "width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
}

function sharePinterest(shareUrl)
{
	shareUrl = "https://pinterest.com/pin/create/bookmarklet/url="+shareUrl;
	window.open(shareUrl, null, "width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
}

function shareLinkedin(shareUrl)
{
	shareUrl = "https://www.linkedin.com/shareArticle?mini=true&url="+shareUrl;
	window.open(shareUrl, null, "width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
}

function shareEmail(shareUrl)
{
	shareUrl = "mailto:?body="+shareUrl;
	window.open(shareUrl, null, "width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
}