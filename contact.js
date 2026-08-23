const email='azhar.sheikh92@gmail.com';
const heroContact=document.createElement('div');
heroContact.className='hero-contact';
heroContact.innerHTML='<span>CONTACT / AVAILABLE</span><a href="mailto:'+email+'">'+email+'</a><span>·</span><a href="https://linkedin.com/in/iazharshaikh" target="_blank" rel="noopener">LinkedIn ↗</a><span>·</span><b>Mumbai, India</b>';
document.querySelector('.hero-foot').after(heroContact);
