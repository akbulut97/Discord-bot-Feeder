const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar= require('./ayarlar.json')
const seriler= require('./seriler.json')


token= ayarlar.token;


alma=seriler.alma;
assa=seriler.assa;
baki=seriler.baki;
clas=seriler.clas;
demon=seriler.demon;
don=seriler.don; 
eden=seriler.eden; 
ex=seriler.ex; 
gai=seriler.gai; 
Handy=seriler.Handy; 
gal=seriler.gal; 
hiru=seriler.hiru; 
hyulla=seriler.hyulla; 
ib=seriler.ib; 
icm=seriler.icm; 
queen=seriler.queen; 
kurom=seriler.kurom; 
konoy=seriler.konoy; 
oni=seriler.oni; 
limbless=seriler.limbless; 
mogal=seriler.mogal; 
murenase=seriler.murenase; 
nejimaki=seriler.nejimaki; 
nidome=seriler.nidome; 
orega=seriler.orega; 
saikyo=seriler.saikyo; 
tensei=seriler.tensei; 
slimem=seriler.slimem; 
yanslime=seriler.yanslime; 
tengod=seriler.tengod; 
fiance=seriler.fiance; 
reason=seriler.reason; 
putin=seriler.putin; 
yankee=seriler.yankee; 
yuusha=seriler.yuusha; 
slimen=seriler.slimen; 
gb=seriler.gb; 
grimgar=seriler.grimgar; 
ngnl=seriler.ngnl; 
supergene=seriler.supergene; 
sono=seriler.sono; 
age=seriler.age; 
sevens=seriler.sevens; 
kuron=seriler.kuron; 
extra=seriler.extra;
mob=seriler.mob; 
shinigami=seriler.shinigami; 


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	
	//Manga başı
	
	 if (msg.content.includes('Almadianos')) 
	 {
    msg.reply(alma);
	 }
	 
	 if (msg.content.includes('Assassin de')) 
	 {
    msg.reply(assa);
	 }
	 
	  if (msg.content.includes('Baki the')) 
	 {
    msg.reply(baki);
	 }
	 
	  if (msg.content.includes('Class ga')) 
	 {
    msg.reply(clas);
	 }
	 if (msg.content.includes('Demon Spirit')) 
	 {
    msg.reply(demon);
	 }
	 
	 if (msg.content.includes('Dons Adventure')) 
	 {
    msg.reply(don);
	 }
	 
	  if (msg.content.includes('Eden Game')) 
	 {
    msg.reply(eden);
	 }
	 
	  if (msg.content.includes('Exterminator')) 
	 {
    msg.reply(ex);
	 }
	 
	 	 if (msg.content.includes('Gaikotsu Kishi-sama,')) 
	 {
    msg.reply(gai);
	 }
	  	 if (msg.content.includes('Gal Gohan')) 
	 {
    msg.reply(gal);
	 }
	 
	 if (msg.content.includes('Handyman Saitou')) 
	 {
    msg.reply(Handy);
	 }
	 
	  if (msg.content.includes('Hiru to Yoru ')) 
	 {
    msg.reply(hiru);
	 }
	 

	 if (msg.content.includes('İnstant Bullet')) 
	 {
    msg.reply(ib);
	 }
	 
	 if (msg.content.includes('Isekai Cheat Magician')) 
	 {
    msg.reply(icm);
	 }
	 
	  if (msg.content.includes('I Shall Become ')) 
	 {
    msg.reply(queen);
	 }
	 
	  if (msg.content.includes('Kono Yuusha ga Ore')) 
	 {
    msg.reply(konoy);
	 }	
	 if (msg.content.includes('https://www.araznovel.com/manga/kuro-no-shoukanshi/')) 
	 {
    msg.reply(kurom);
	 }
	 
	 if (msg.content.includes('Lovecome Like')) 
	 {
    msg.reply(oni);
	 }
	 
	  if (msg.content.includes('Limbless Schira')) 
	 {
    msg.reply(limbless);
	 }
	 
	  if (msg.content.includes('Modern Mogal')) 
	 {
    msg.reply(mogal);
	 }
	 if (msg.content.includes('Murenase! Shiiton')) 
	 {
    msg.reply(murenase);
	 }
	 
	if (msg.content.includes('Nejimaki Kagyuu')) 
	 {
    msg.reply(nejimaki);
	 }
	 
	if (msg.content.includes('Nidoume no Jinsei')) 
	 {
    msg.reply(nidome);
	 }
	 
	if (msg.content.includes('Ore ga Heroine o')) 
	 {
    msg.reply(orega);
	 }
	 
	if (msg.content.includes('Tensei Kyuuketsuki-san')) 
	 {
    msg.reply(tensei);
	 }
	  if (msg.content.includes('Saikyou no Shokugyou')) 
	 {
    msg.reply(saikyo);
	 }
	 
	 if (msg.content.includes('https://www.araznovel.com/manga/tensei-shitara-slime-datta-ken/')) 
	 {
    msg.reply(slimem);
	 }
	 
	  if (msg.content.includes('Mamono no Kuni no')) 
	 {
    msg.reply(yanslime);
	 }
	 
	  
	  if (msg.content.includes('Mob Psycho 100')) 
	 {
    msg.reply(mob);
	 }
	 
	  if (msg.content.includes('Ten Thousand')) 
	 {
    msg.reply(tengod);
	 }
	 if (msg.content.includes('The Fiancées')) 
	 {
    msg.reply(fiance);
	 }
	  if (msg.content.includes('The Ride On King')) 
	 {
    msg.reply(putin);
	 }
	 
	 
	 if (msg.content.includes('The Reason Why Raeliana')) 
	 {
    msg.reply(reason);
	 }
	 
	  if (msg.content.includes('Yankee Wa Isekai De')) 
	 {
    msg.reply(yankee);
	 }
	 
	  if (msg.content.includes('Yuusha ga Shinda!')) 
	 {
    msg.reply(yuusha);
	 }
	 //manga Sonu
	 
	  //novel baş
	 if (msg.content.includes('https://www.araznovel.com/manga/tensei-shitara-slime-datta-ken-2/')) 
	 {
    msg.reply(slimen);
	 }
	 if (msg.content.includes('Glutton Berserker')) 
	 {
    msg.reply(gb);
	 }
	if (msg.content.includes('Hai to Gensou no Grimgar')) 
	 {
    msg.reply(grimgar);
	 }
	if (msg.content.includes('No Game No Life -ArazNovel')) 
	 {
    msg.reply(ngnl);
	 }
	if (msg.content.includes('Super God Gene')) 
	 {
    msg.reply(supergene);
	 }
	if (msg.content.includes('Sono Mono, Nochi Ni...')) 
	 {
    msg.reply(sono);
	 }
	if (msg.content.includes('Age of Adepts')) 
	 {
    msg.reply(age);
	 }
	if (msg.content.includes('Sevens -ArazNovel')) 
	 {
    msg.reply(sevens);
	 }
	 if (msg.content.includes('https://www.araznovel.com/manga/kuro-no-shoukanshi-novel/')) 
	 {
    msg.reply(kuron);
	 }
	 if (msg.content.includes('Extraordinary Genius')) 
	 {
    msg.reply(extra);
	 }
	  if (msg.content.includes('Shinigami wo Tabeta Shoujo')) 
	 {
    msg.reply(shinigami);
	 }
	 
	 
	//novel sonu

});

client.login(token);