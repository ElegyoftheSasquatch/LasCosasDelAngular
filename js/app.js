(function(){
	var app = angular.module('BookStoreApp',[]);
	var book = [
	{
		"id" : "1" ,
		"title" : "American Sniper" ,
		"author" : "Chris Kyle" ,
		"editorial" : "Ediciones B / Zeta" ,
		"description" : "From 1999 to 2009, U.S. Navy SEAL Chris Kyle recorded the most career sniper kills in United States military history. His fellow American warriors, whom he protected with deadly precision from rooftops and stealth positions during the Iraq War, called him “The Legend”; meanwhile, the enemy feared him so much they named him al-Shaitan (“the devil”) and placed a bounty on his head. Kyle, who was tragically killed in 2013, writes honestly about the pain of war—including the deaths of two close SEAL teammates—and in moving first-person passages throughout, his wife, Taya, speaks openly about the strains of war on their family, as well as on Chris. Gripping and unforgettable, Kyle’s masterful account of his extraordinary battlefield experiences ranks as one of the great war memoirs of all time.",
		"img" : "img/img1.jpg",
		"link" : "https://www.amazon.com.mx/American-Sniper-Autobiography-Military-History-ebook/dp/B005GFPZYK/ref=sr_1_7?ie=UTF8&qid=1494276583&sr=8-7&keywords=american+sniper"
	},
	{
		"id" : "2" ,
		"title" : "A Game of Thrones" ,
		"author" : "George R. R. Martin" ,
		"editorial" : "Gigamesh" ,
		"description" : "Summers span decades. Winter can last a lifetime. And the struggle for the Iron Throne has begun. As Warden of the north, Lord Eddard Stark counts it a curse when King Robert bestows on him the office of the Hand. His honour weighs him down at court where a true man does what he will, not what he must … and a dead enemy is a thing of beauty. The old gods have no power in the south, Stark’s family is split and there is treachery at court. Worse, the vengeance-mad heir of the deposed Dragon King has grown to maturity in exile in the Free Cities. He claims the Iron Throne.",
		"img" : "img/img2.jpg",
		"link" : "https://www.amazon.com.mx/Game-Thrones-Song-Fire-Book-ebook/dp/B004GJXQ20/ref=sr_1_2?ie=UTF8&qid=1494276365&sr=8-2&keywords=game+of+thrones+book"
	},
	{
		"id" : "3" ,
		"title" : "The Analyst" ,
		"author" : "John Katzenbach" ,
		"editorial" : "Edhasa" ,
		"description" : "Happy fifty third birthday, Doctor. Welcome to the first day of your death. Dr. Frederick Starks, a New York psychoanalyst, has just received a mysterious, threatening letter. Now he finds himself in the middle of a horrific game designed by a man who calls himself Rumplestiltskin. The rules: in two weeks, Starks must guess his tormentor's identity. If Starks succeeds, he goes free. If he fails, Rumplestiltskin will destroy, one by one, fifty-two of Dr. Starks' loved ones--unless the good doctor agrees to kill himself. In a blistering race against time, Starks' is at the mercy of a psychopath's devious game of vengeance. He must find a way to stop the madman--before he himself is driven mad. . . ." ,
		"img" : "img/img3.jpg",
		"link" : "https://www.amazon.com.mx/Analyst-John-Katzenbach/dp/0345426274/ref=sr_1_1?ie=UTF8&qid=1494276641&sr=8-1&keywords=the+analyst"
	}
	];
	app.controller('BookController', function(){
		this.products = book;
	});
})();