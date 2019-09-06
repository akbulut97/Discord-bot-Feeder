const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar= require('./ayarlar.json')
const roller= require('./roller.json')


token= ayarlar.token;


alma=roller.alma;
assa=roller.assa;
baki=roller.baki;
clas=roller.clas;
demon=roller.demon;
don=roller.don; 
eden=roller.eden; 
ex=roller.ex; 
gai=roller.gai; 
Handy=roller.Handy; 
gal=roller.gal; 
hiru=roller.hiru; 
hyulla=roller.hyulla; 
ib=roller.ib; 
icm=roller.icm; 
queen=roller.queen; 
kurom=roller.kurom; 
konoy=roller.konoy; 
oni=roller.oni; 
limbless=roller.limbless; 
mogal=roller.mogal; 
murenase=roller.murenase; 
nejimaki=roller.nejimaki; 
nidome=roller.nidome; 
orega=roller.orega; 
saikyo=roller.saikyo; 
tensei=roller.tensei; 
slimem=roller.slimem; 
yanslime=roller.yanslime; 
tengod=roller.tengod; 
fiance=roller.fiance; 
reason=roller.reason; 
putin=roller.putin; 
yankee=roller.yankee; 
yuusha=roller.yuusha; 
wolf=roller.wolf;
slimen=roller.slimen; 
gb=roller.gb; 
grimgar=roller.grimgar; 
ngnl=roller.ngnl; 
supergene=roller.supergene; 
sono=roller.sono; 
age=roller.age; 
sevens=roller.sevens; 
kuron=roller.kuron; 
extra=roller.extra;
mob=roller.mob; 
shinigami=roller.shinigami; 


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
  
  client.user.setActivity('ArazNovel Serilerinin Yolunu', { type: 'WATCHING' });
});

client.on('message', msg => {
	
	//Manga başı
	
	 if (msg.content.includes('Almadianos')) 
	 {
    msg.channel.send(alma);
	 }
	 
	 if (msg.content.includes('Assassin de')) 
	 {
    msg.channel.send(assa);
	 }
	 
	  if (msg.content.includes('Baki the')) 
	 {
    msg.channel.send(baki);
	 }
	 
	  if (msg.content.includes('Class ga')) 
	 {
    msg.channel.send(clas);
	 }
	 if (msg.content.includes('Demon Spirit')) 
	 {
    msg.channel.send(demon);
	 }
	 
	 if (msg.content.includes('Dons Adventure')) 
	 {
    msg.channel.send(don);
	 }
	 
	  if (msg.content.includes('Eden Game')) 
	 {
    msg.channel.send(eden);
	 }
	 
	  if (msg.content.includes('Exterminator')) 
	 {
    msg.channel.send(ex);
	 }
	 
	 	 if (msg.content.includes('Gaikotsu Kishi-sama,')) 
	 {
    msg.channel.send(gai);
	 }
	  	 if (msg.content.includes('Gal Gohan')) 
	 {
    msg.channel.send(gal);
	 }
	 
	 if (msg.content.includes('Handyman Saitou')) 
	 {
    msg.channel.send(Handy);
	 }
	 
	  if (msg.content.includes('Hiru to Yoru ')) 
	 {
    msg.channel.send(hiru);
	 }
	 

	 if (msg.content.includes('İnstant Bullet')) 
	 {
    msg.channel.send(ib);
	 }
	 
	 if (msg.content.includes('Isekai Cheat Magician')) 
	 {
    msg.channel.send(icm);
	 }
	 
	  if (msg.content.includes('I Shall Become ')) 
	 {
    msg.channel.send(queen);
	 }
	 
	  if (msg.content.includes('Kono Yuusha ga Ore')) 
	 {
    msg.channel.send(konoy);
	 }	
	 if (msg.content.includes('https://www.araznovel.com/manga/kuro-no-shoukanshi/')) 
	 {
    msg.channel.send(kurom);
	 }
	 
	 if (msg.content.includes('Lovecome Like')) 
	 {
    msg.channel.send(oni);
	 }
	 
	  if (msg.content.includes('Limbless Schira')) 
	 {
    msg.channel.send(limbless);
	 }
	 
	  if (msg.content.includes('Modern Mogal')) 
	 {
    msg.channel.send(mogal);
	 }
	 if (msg.content.includes('Murenase! Shiiton')) 
	 {
    msg.channel.send(murenase);
	 }
	 
	if (msg.content.includes('Nejimaki Kagyuu')) 
	 {
    msg.channel.send(nejimaki);
	 }
	 
	if (msg.content.includes('Nidoume no Jinsei')) 
	 {
    msg.channel.send(nidome);
	 }
	 
	if (msg.content.includes('Ore ga Heroine o')) 
	 {
    msg.channel.send(orega);
	 }
	 
	if (msg.content.includes('Tensei Kyuuketsuki-san')) 
	 {
    msg.channel.send(tensei);
	 }
	  if (msg.content.includes('Saikyou no Shokugyou')) 
	 {
    msg.channel.send(saikyo);
	 }
	 
	 if (msg.content.includes('https://www.araznovel.com/manga/tensei-shitara-slime-datta-ken/')) 
	 {
    msg.channel.send(slimem);
	 }
	 
	  if (msg.content.includes('Mamono no Kuni no')) 
	 {
    msg.channel.send(yanslime);
	 }
	 
	  
	  if (msg.content.includes('Mob Psycho 100')) 
	 {
    msg.channel.send(mob);
	 }
	 
	  if (msg.content.includes('Ten Thousand')) 
	 {
    msg.channel.send(tengod);
	 }
	 if (msg.content.includes('The Fiancées')) 
	 {
    msg.channel.send(fiance);
	 }
	  if (msg.content.includes('The Ride On King')) 
	 {
    msg.channel.send(putin);
	 }
	 
	 
	 if (msg.content.includes('The Reason Why Raeliana')) 
	 {
    msg.channel.send(reason);
	 }
	 
	  if (msg.content.includes('Yankee Wa Isekai De')) 
	 {
    msg.channel.send(yankee);
	 }
	 
	  if (msg.content.includes('Yuusha ga Shinda!')) 
	 {
    msg.channel.send(yuusha);
	 }
	
	  if (msg.content.includes('The Wolf Won')) 
	 {
    msg.channel.send(yuusha);
	 }
	 //manga Sonu
	 
	  //novel baş
	 if (msg.content.includes('https://www.araznovel.com/manga/tensei-shitara-slime-datta-ken-2/')) 
	 {
    msg.channel.send(slimen);
	 }
	 if (msg.content.includes('Glutton Berserker')) 
	 {
    msg.channel.send(gb);
	 }
	if (msg.content.includes('Hai to Gensou no Grimgar')) 
	 {
    msg.channel.send(grimgar);
	 }
	if (msg.content.includes('No Game No Life -ArazNovel')) 
	 {
    msg.channel.send(ngnl);
	 }
	if (msg.content.includes('Super God Gene')) 
	 {
    msg.channel.send(supergene);
	 }
	if (msg.content.includes('Sono Mono, Nochi Ni...')) 
	 {
    msg.channel.send(sono);
	 }
	if (msg.content.includes('Age of Adepts')) 
	 {
    msg.channel.send(age);
	 }
	if (msg.content.includes('Sevens -ArazNovel')) 
	 {
    msg.channel.send(sevens);
	 }
	 if (msg.content.includes('https://www.araznovel.com/manga/kuro-no-shoukanshi-novel/')) 
	 {
    msg.channel.send(kuron);
	 }
	 if (msg.content.includes('Extraordinary Genius')) 
	 {
    msg.channel.send(extra);
	 }
	  if (msg.content.includes('Shinigami wo Tabeta Shoujo')) 
	 {
    msg.channel.send(shinigami);
	 }
	 
	 
	//novel sonu

});

client.login(process.env.token);
