var names=new Array();
names[0]="Aman";
names[1]="jamey";
names[2]="Jennifer";
names[3]="Jimmy";
names[4]="Laura";
names[5]="Ankush";
names[6]="Ammy";
names[7]="Charlie";
names[8]="Kim";
names[9]="Jenny";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}